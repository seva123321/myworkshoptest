<?php

declare(strict_types=1);

namespace market\core;

use market\core\Model;

abstract class Controller
{
    public View $view;
    public ?Model $model;
    public array $variables = [];
    public array $session = [];
    protected null|int $role = 0;


    public function __construct(public array $params)
    {
        // создаем объект вида(интерфейса)
        $this->view = new View($this->params);
        // запуск загрузки модели для работы с БД
        $this->model = $this->loaderModel();

        foreach ($this->params['placeholder'] as $key => $param) {
            $param = preg_replace('/{|}/', '', $param);
            preg_match("/$param\/[0-9]+/", $_SERVER['REQUEST_URI'], $id);
            $this->variables[$param] = preg_replace('/[^0-9]/', '', current($id));
        }
    }

    private function loaderModel(): ?Model
    {
        // получили имя контроллера
        $model = $this->params['controller'];
        $action = $this->params['action'];
        $method = isset($this->params['method']);

        if (!$method) {
            // market\models\User\RegistrationModel
            $path = "market\models\\" . $model . "\\" . $action . "Model";
            // если существует такой класс тогда создаем объект и возвращаем
            // echo __DIR__.PHP_EOL;
            // echo $path.PHP_EOL;
            if (class_exists($path)) {
                return new $path();
            } else {
                dump("Модель $action не найдена!");
                exit;
            }
        }
        return new Model();
    }
}
