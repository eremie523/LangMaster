<?php

declare(strict_types=1);

namespace LangLearn\Dependencies;

class DIContainer
{
    private array $entries;

    private function has(string $id)
    {
        return isset($this->entries[$id]);
    }

    public function bind(string $id, string $class)
    {
        $this->entries[$id] = $class;
    }

    public function get(string $id)
    {
        if ($this->has($id)) {
            return $this->entries[$id];
        }
    }

    private function resolve() {}
}
