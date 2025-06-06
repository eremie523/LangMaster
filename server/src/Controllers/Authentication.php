<?php

declare(strict_types=1);

namespace LangLearn\Controllers;

use Doctrine\DBAL\ParameterType;
use Exception;
use LangLearn\AppFactory;
use LangLearn\AttributeClasses\RouteAttribute;
use LangLearn\Helpers\Index;

class Authentication
{
    #[RouteAttribute('/api/login', 'POST')]
    public function login(): string
    {
        // Here you would typically handle the login logic, such as validating credentials.
        if (!Index::isNotEmptyValInArray($_POST['json'], ['email', 'password', 'remember_me'])) {
            throw new Exception("Missing required fields: email, password, or remember_me");
        };

        extract($_POST['json']);

        $qry = AppFactory::getDBConection()->prepare("SELECT * FROM users WHERE email = :email AND password = :password LIMIT 1");

        $qry->bindValue(":email", $email, ParameterType::STRING);
        $qry->bindValue(":password", $password, ParameterType::STRING);

        $result = $qry->executeQuery();

        if (count($result->fetchAllAssociative()) == 0) {
            throw new Exception("Invalid email or password");
        }

        $user = $result->fetchAssociative();
        unset($user["id"], $user["password"], $user["agree_to_terms"]);
        $user["preferred_language"] = strtolower($user["preferred_language"]); // Add remember_me to the user data
        $user["proficiency_level"] = strtolower($user["proficiency_level"]);

        return json_encode([
            "status" => "success",
            "message" => "Logged In Successfully",
            "jwt" => Index::generateJwt(["email" => $email], $_ENV["JWT_SECRET"], ((bool) $remember_me) ? (3600 * 24 * 14) : (3600 * 12))
        ]);
    }

    #[RouteAttribute('/api/logout', 'POST')]
    public function logout(): string
    {
        // Here you would typically handle the logout logic, such as clearing session data.
        // For now, we return a simple message.
        return "Logout endpoint reached";
    }

    #[RouteAttribute('/api/register', 'POST')]
    public function register(): string
    {
        if (!Index::isNotEmptyValInArray($_POST['json'], ['email', 'password', 'username', 'full_name', 'preferred_language', 'proficiency_level', 'agree_to_terms'])) {
            throw new Exception("Missing required fields: email, password, username, full_name, preferred_language, proficiency_level, or agree_to_terms");
        };

        extract($_POST['json']);

        if (!preg_match(EMAIL_REGEX, $email)) throw new Exception("Invalid Credentials");
        if (!preg_match(PASSWORD_REGEX, $password)) throw new Exception("Invalid Credentials");

        if (strlen($username) < 3 || strlen($username) > 20) throw new Exception("Username must be between 3 and 20 characters long");
        if (strlen($full_name) < 3 || strlen($full_name) > 50) throw new Exception("Full name must be between 3 and 50 characters long");

        if (!in_array($preferred_language, PERMITTED_LANGUAGES)) throw new Exception("Invalid permitted language");
        if (!in_array($proficiency_level, PROFICIENCY_LEVELS)) throw new Exception("Invalid proficiency level");

        if (!$agree_to_terms) throw new Exception("You must agree to the terms and conditions");

        $qry = AppFactory::getDBConection()->prepare("
            INSERT INTO users (
                email, 
                password, 
                username, 
                full_name, 
                preferred_language, 
                proficiency_level, 
                agree_to_terms
            ) 
            VALUES (
                :email, 
                :password, 
                :username, 
                :full_name, 
                :preferred_language, 
                :proficiency_level,
                :agree_to_terms
            )
        ");

        $qry->bindValue(":email", $email, ParameterType::STRING);
        $qry->bindValue(":password", $password, ParameterType::STRING); // In a real application, hash the password before storing it
        $qry->bindValue(":username", $username, ParameterType::STRING);
        $qry->bindValue(":full_name", $full_name, ParameterType::STRING);
        $qry->bindValue(":preferred_language", strtoupper($preferred_language), ParameterType::STRING);
        $qry->bindValue(":proficiency_level", strtoupper($proficiency_level), ParameterType::STRING);
        $qry->bindValue(":agree_to_terms", $agree_to_terms, ParameterType::BOOLEAN);

        $result = $qry->executeStatement();

        if (gettype($result) != "int" || $result <= 0) throw new Exception("User not created successfully"); // For debugging purposes, remove in production

        return "Registration endpoint reached";
    }
}
