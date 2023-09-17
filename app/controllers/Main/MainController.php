<?php

namespace market\controllers\Main;

use market\core\Controller;
use market\core\Router;

class MainController extends Controller
{
    public function index()
    {
        $this->view->AddCss('main/main.css');

        // рисуем интерфейс
        $this->view->render();
    }
}
