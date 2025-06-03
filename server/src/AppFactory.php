<?php

declare(strict_types=1);

namespace LangLearn;

use Exception;
use LangLearn\Dependencies\Router;

class AppFactory
{
    private static ?self $app = null;

    private function __construct(private Router $router)
    {
        $this->boot();
    }

    private function registerRoutes()
    {
        // -------------------------------------- GET ROUTES -------------------------------------------------------
        $this
            ->router->get("/", fn() => "Hello world");
    }

    public static function create(Router $router)
    {
        if (!static::$app) {
            static::$app = new AppFactory($router);
        }

        return static::$app;
    }

    public function __call($name, $arguments)
    {
        if (method_exists($this->router, $name)) return call_user_func_array([$this->router, $name], $arguments);

        throw new Exception("Method not found");
    }

    private function boot()
    {
        $this->registerRoutes();
    }

    protected function pre_run() {}

    public function run()
    {
        $this->pre_run();

        echo $this->router->resolve($_SERVER["REQUEST_METHOD"], $_SERVER["REQUEST_URI"]);
    }
}
