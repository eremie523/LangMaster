<?php

declare(strict_types=1);

namespace LangLearn\Dependencies;

use Exception;
use LangLearn\AttributeClasses\RouteAttribute;
use Reflection;
use ReflectionAttribute;
use ReflectionClass;
use ReflectionProperty;

class Router
{
    private array $entries = [];
    private array $neededRouteProperties = ["path", "method"];

    private function register(string $method, string $route, callable|array $action): self
    {
        $method = strtoupper($method);

        if (isset($this->entries[$method][$route])) throw new Exception("Route already registered");

        $this->entries[$method][$route] = $action;

        return $this;
    }

    public function get(string $route, callable|array $action)
    {
        return $this->register("GET", $route, $action);
    }

    public function post(string $route, callable|array $action)
    {
        return $this->register("POST", $route, $action);
    }

    public function resolve(string $method, string $route): string
    {
        $method = strtoupper($method);

        if (!isset($this->entries[$method][$route])) {
            throw new Exception("Page not found");
        }

        $action = $this->entries[$method][$route];

        if (is_callable($action)) {
            return (string) call_user_func_array($action, []);
        }

        $class = isset($action[0]) ? $action[0] : throw new Exception("No class name");
        $method = isset($action[1]) ? $action[1] : throw new Exception("No method name");

        if (!class_exists($class)) throw new Exception("Invalid Class name");
        if (!method_exists($class, $method)) throw new Exception("Method does not exists");

        return call_user_func_array([new $class, $method], []);
    }

    public function registerAttributeRoute(string $controller): self
    {
        $reflection = new \ReflectionClass($controller);
        $methods = $reflection->getMethods(\ReflectionMethod::IS_PUBLIC);

        foreach ($methods as $method) {
            $routeAttributes = $method->getAttributes(RouteAttribute::class, ReflectionAttribute::IS_INSTANCEOF);

            foreach ($routeAttributes as $routeAttribute) {
                $routeClass = $routeAttribute->newInstance();
                $this->register($routeClass->method, $routeClass->path, [$controller, $method->getName()]);
            }
        }

        return $this;
    }
}
