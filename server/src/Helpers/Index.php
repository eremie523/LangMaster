<?php

declare(strict_types=1);

namespace LangLearn\Helpers;

use Exception;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;


abstract class Index
{
    // Const EmailRegex = \a*
    public static function bootQueryParams(string $urichunk = "")
    {
        $queryString = parse_url($urichunk, \PHP_URL_QUERY);

        $params = [];

        if ($queryString) {
            parse_str($queryString, $params);
        }

        foreach ($params as $key => $value) {
            $_GET[$key] = $value;
        }
    }

    public static function bootJsonBody()
    {
        if (isset($_SERVER["CONTENT_TYPE"]) && $_SERVER['CONTENT_TYPE'] == "application/json") {
            $json = file_get_contents("php://input");

            $data = json_decode($json, true);

            $_POST["json"] = $data;
        }
    }

    public static function bootTextBody()
    {
        if (isset($_SERVER["CONTENT_TYPE"]) && ($_SERVER["CONTENT_TYPE"] == "application/text" || $_SERVER["CONTENT_TYPE"] == "text/plain")) {
            $rawText = file_get_contents("php://input");

            $_POST["rawText"] = $rawText;
        }
    }

    public static function generateRandomId(int $length = 8, string $prefix = ''): string
    {
        $characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '#', '$', '@'];

        $randomId = trim($prefix);

        for ($i = 0; $i < ($length - strlen(trim($prefix))); $i++) {
            $randomId .= $characters[rand(0, count($characters) - 1)];
        }

        return $randomId;
    }

    public static function generateMatricNo(string $type, ?string $entrySession)
    {
        // if (gettype($type) == "string") $type = \ESCHOOL\Enums\AdmissionTypes::tryFrom($type);

        if ($type == null) throw new Exception("Invalid Admission Type");

        if ($entrySession == null) $entrySession = (new \DateTime())->format("Y");
        else if (str_contains($entrySession, "/")) $entrySession = explode("/", $entrySession)[0];

        // Something like .2023/1234
        $matNo = "." . $entrySession . "/";

        $i = 0;
        while ($i < 4) {
            $matNo .= rand(0, 9);
            $i++;
        }

        return $matNo;
    }

    public static function isNotEmptyValInArray(array $array, array $requiredFields)
    {
        $pass = false;

        foreach ($requiredFields as $value) {
            if (isset($array) && isset($array[$value]) && $array[$value] !== false) {
                if (gettype($array[$value]) == "string" && trim($array[$value]) == "") {
                    $pass = false;
                    break;
                }
                $pass = true;
            } else {
                $pass = false;
                break;
            }
        }

        return $pass;
    }

    public static function isEmptyVal(mixed $value)
    {
        if (isset($value) && $value !== false && $value != null) {
            if (gettype($value) == "string" && trim($value) == "") {
                return true;
            }
            return false;
        }

        return true;
    }

    public static function generateJwt(array $payload, string $secretKey, int $expiryInSeconds = 3600): string
    {
        $issuedAt = time();
        $expiresAt = $issuedAt + $expiryInSeconds;

        $tokenPayload = array_merge($payload, [
            'iat' => $issuedAt,
            'exp' => $expiresAt
        ]);

        return JWT::encode($tokenPayload, $secretKey, 'HS256');
    }
}
