<?php

declare(strict_types=1);

namespace LangLearn;

use Doctrine\DBAL\Connection;
use Exception;
use LangLearn\Controllers\Authentication;
use LangLearn\DB\DB;
use LangLearn\Dependencies\Router;
use LangLearn\Helpers\Index;
use Symfony\Component\Console\Helper\Helper;

class AppFactory
{
    private static ?self $app = null;
    private static ?DB $db = null;

    private function __construct(private Router $router, DB $db)
    {
        static::$db = $db;
        $this->registerRoutes();
    }

    protected static function getDB(): ?DB
    {
        return static::$db;
    }

    public static function getDBConection(): ?Connection
    {
        return static::getDB()?->getConnection();
    }

    public static function create(Router $router, DB $db)
    {
        if (!static::$app) {
            static::$app = new AppFactory($router, $db);
        }

        return static::$app;
    }

    public function __call($name, $arguments)
    {
        if (method_exists($this->router, $name)) return call_user_func_array([$this->router, $name], $arguments);

        throw new Exception("Method not found");
    }

    public function pre_run()
    {
        Index::bootQueryParams();

        Index::bootJsonBody();

        Index::bootTextBody();
    }

    public function run()
    {
        $this->pre_run();

        echo $this->router->resolve($_SERVER["REQUEST_METHOD"], $_SERVER["REQUEST_URI"]);
    }

    private function registerRoutes(): void {}
}
