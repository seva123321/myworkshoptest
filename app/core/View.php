<?php

namespace market\core;

class View
{
    public array $modules_css = [];
    public array $modules_js = [];
    public static string $path;
    public string $IMPORT_MODULE_CSS = '';
    public string $IMPORT_MODULE_JS = '';

    public function __construct(public array $params)
    {
      // xampp http://localhost/mygoogle
        if ($_SERVER['SERVER_NAME'] == 'localhost') {
            self::$path = ROOT . '/' . PROJECT . '/app/views';
            return;
        }

      // если используем алиас/псевдоним
      // http://mygoogle/
        self::$path = ROOT . '/app/views';
    }

    public function AddJS(string $path)
    {
      // добавляем в массив путь к скрипту js/css....
        $this->modules_js[] = $path;
    }

    public function AddCss(string $path)
    {
      // добавляем в массив путь к скрипту js/css....
        $this->modules_css[] = $path;
    }

    public function render($data = [])
    {

        $this->imports();

        require_once self::$path . '/header.php';
      // подключаем нужный интерфейст в зависимости от url

      //C:\OpenServer\domain\mygoogle\app\views\User\registration.php
        require_once self::$path . '/' . ucfirst(strtolower($this->params['controller'])) . '/' . strtolower($this->params['action']) . '.php';

        require_once self::$path . '/footer.php';
    }


    public function adminPanel($data = []): void
    {
        $this->imports();
        require_once self::$path . '/' . ucfirst(strtolower($this->params['controller'])) . '/' . strtolower($this->params['action']) . '.php';
    }

    private function imports(): void
    {

        foreach ($this->modules_css as $link) {
            $this->IMPORT_MODULE_CSS .= "<link rel='stylesheet' href='/app/public/css/$link'>" . PHP_EOL;
        }

        foreach ($this->modules_js as $link) {
            $this->IMPORT_MODULE_JS .= "<script defer src='/app/public/js/$link'></script>" . PHP_EOL;
        }
    }


    public static function responceJsonSuccess(array $data, string $method): string
    {
        $method = explode('\\', $method);
        $method = end($method);
        echo json_encode(['success' => true,'result' => $data,'method' => $method], JSON_UNESCAPED_UNICODE);
        exit;
    }

    public static function responceJsonFailed(array $data, string $method): string
    {
        $method = explode('\\', $method);
        $method = end($method);
        echo json_encode(['success' => false,'result' => $data,'method' => $method], JSON_UNESCAPED_UNICODE);
        exit;
    }
}
