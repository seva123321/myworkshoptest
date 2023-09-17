<?php

namespace market\core;

/**
 * Class Singleton
 */
abstract class Singleton
{
    /**
     *
     * Единственный экземпляр класса, чтобы не создавать множество подключений
     *
     * @var null
     */
    protected static $instance = null;
// Единственный экземпляр класса, чтобы не создавать множество подключений

    /**
     * private чтобы нельзя было создать экземпляр класса извне и работать только через  $instance
     *
     * Singleton constructor.
     */
    private function __construct()
    {
    }

    /**
     *
     * Получение экземпляра класса.
     * Если он уже существует, то возвращается, если его не было,
     * то создаётся и возвращается (паттерн Singleton)
     *
     * @return null
     */
    public static function getInstance()
    {
        if (static::$instance === null) {
            static::$instance = new static();
        }
        return static::$instance;
    }


    /**
     * Клонирование запрещено чтобы нельзя было создать второй экземпляр класса
     */
    final function __clone()
    {
    }

    /**
     * Сериализация запрещена чтобы нельзя было привести к строке и потом скопировать текст
     */
    final function __sleep()
    {
    }

    /**
     * Десериализация запрещена чтобы нельзя было восстановить объект из строки
     */
    final function __wakeup()
    {
    }
}
