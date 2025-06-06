<?php

declare(strict_types=1);

namespace LangLearn\DB;

use Doctrine\DBAL\Configuration;
use Doctrine\DBAL\{DriverManager as DriverManager, Connection as conn};
use Doctrine\DBAL\Tools\DsnParser;

class DB
{
    private static ?DB $instance = null;
    private ?conn $db = null;

    private function __construct(private readonly string $dsn)
    {
        $dsnParser = new DsnParser();
        $connectionParams = $dsnParser->parse($this->dsn);

        $this->db = DriverManager::getConnection($connectionParams, new Configuration());
    }

    public static function getDB(): self
    {
        if (!isset($_ENV["DATABASE_DSN"]) && !getenv("DATABASE_DSN")) {
            throw new \RuntimeException("Environment variables not set. Please ensure DATABASE_DSN is defined.");
        }

        if (static::$instance === null) {
            $dsn = $_ENV["DATABASE_DSN"] ?? getenv('DATABASE_DSN'); // Default to in-memory SQLite if no env var is set
            static::$instance = new self($dsn);
        }

        return static::$instance;
    }

    public function getConnection(): conn
    {
        return $this->db;
    }

    public static function __callStatic(string $name, array $arguments): mixed
    {
        if (method_exists(static::getDB(), $name)) {
            return call_user_func_array([static::getDB(), $name], $arguments);
        }

        throw new \BadMethodCallException("Method {$name} does not exist on the DB connection.");
    }
}
