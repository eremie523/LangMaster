<?php

declare(strict_types=1);

namespace LangLearn;

use Dotenv\Dotenv;
use LangLearn\Controllers\Authentication;
use LangLearn\DB\DB;
use LangLearn\Dependencies\Router;

class Bootstrap
{
    private DB $db;

    public function __construct()
    {
        // Load environment variables
        $this->loadEnv();

        // Initialize the database connection
        $this->initDB();

        // Load constants
        $this->loadConstants();

        // Initialize the application factory and router
        self::init($this->db);
    }

    private static function registerRoutes(Router $router): void
    {
        // -------------------------------------- GET ROUTES -------------------------------------------------------
        $router
            ->get("/", fn() => "Hello world")

            // -------------------------------------- CONTROLLER ROUTES ------------------------------------------------------
            ->registerAttributeRoute(Authentication::class);
    }

    public static function init(DB $db): void
    {
        // Initialize the application factory and router
        $router = new Router();
        static::registerRoutes($router);

        AppFactory::create($router, $db)->run();
    }

    public static function loadEnv(): void
    {
        // Load environment variables
        $dotenv = Dotenv::createImmutable(dirname(__DIR__, 1));
        $dotenv->safeLoad();
    }

    private function initDB()
    {
        $db = DB::getDB();
        if (!$db) {
            throw new \RuntimeException("Database connection could not be established.");
        }
        $this->db = $db;
    }

    private function loadConstants(): void
    {
        // Load constants from the constants.php file
        if (file_exists(__DIR__ . '/constants.php')) {
            require_once __DIR__ . '/constants.php';
        } else {
            throw new \RuntimeException("Constants file not found.");
        }
    }
}
