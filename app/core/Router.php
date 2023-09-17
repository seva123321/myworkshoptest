<?php

declare(strict_types=1);

namespace market\core;

use JetBrains\PhpStorm\NoReturn;

class Router
{
    // массив доступных url
    private static array $pages = [];
    private static array $requests = [];
/**
     * $pages = [
     *  'http://google/admin' => ['controller'=>контроллер который запустим,'action'=>'метод который запустим']
     * ];
     *
     * метод добавление url адреса
     * @param $page - string url
     * @param $controller - string контроллер который будет запущен
     * @param $action - string метод который будет запущен
     * @return void
     *  */

    public static function addUrl(string $page, string $controller, string $action = 'index'): void
    {
        self::$pages[$page] = ['controller' => $controller,'action' => $action];
    }

  /**
   * @param string $page
   * @param string $controller
   * @param string $action
   * @param string $method
   */
    public static function addRequest(string $page, string $controller, string $action = 'index', string $method = 'GET'): void
    {
        self::$pages[$page] = ['controller' => $controller,'action' => $action,'method' => $method];
    }

    // смотрим URL и создаем экземпляры классов для контроллера,вида и модели!!!
    #[NoReturn] public static function run(): void
    {
        $uri = rtrim($_SERVER['REQUEST_URI'], '/');
        $uri = ( empty($uri) ) ? '/' : $uri;
        $uri = explode('?', $uri);
        $uri = $uri[0];
        // перебираем все ссылки которые были добавлены в файле web.php
        foreach (self::$pages as $page => $params) {
            $validationPage = str_replace('/', '\/', $page);
//echo PHP_EOL.$validationPage.PHP_EOL;
            $result = preg_match_all('/{\w{1,}}/', $validationPage, $dynamic);
            if ($result) {
                $pattern = preg_replace('/{\w{1,}}/', '\d+', $validationPage) . '$';
            } else {
                $pattern = $validationPage . '$';
            }
            //echo PHP_EOL.$pattern.PHP_EOL;

            $result = preg_match("/$pattern/", $uri);
// проверяем есть ли такой url в нашем маршрутизаторе web.php
            if ($result) {
// получили имя контроллера
                 $controller = ucfirst(strtolower(self::$pages[$page]['controller']));
                $action = ucfirst(strtolower(self::$pages[$page]['action']));
//  получаем полный путь подключаемого класса
                 //  market\controllers\User\UserController
                 $path = "market\controllers\\" . $controller . "\\" . $controller . "Controller";
//  если существует такой  класс ?
                if (class_exists($path)) {
// есть ли такой метод ?
                    if (method_exists($path, $action)) {
                        $params = array_merge(self::$pages[$page], ['placeholder' => current($dynamic)]);
// создаем обьект и прокидываем параметры
                        $controller = new $path($params);
// запускаем метод принадлежащий текущему url адресу
                        $controller->$action();
//dump($_SESSION);
                        exit;
                    } else {
                        die(" Метод $action не найден! ");
                    }
                } else {
                    die("Класс $action не найден! ");
                }
            }
        }

        http_response_code(404);
        die("Page not Found 404! ");
    }


    public static function redirect(string $url): void
    {
        header("Location:$url", false, 301);
        exit;
    }
}
