<?php

namespace market\controllers\User;

use market\core\Controller;
use market\core\Router;

class UserController extends Controller
{
    public function admin()
    {
        $this->view->AddJS('admin/color-modes.js');
        $this->view->AddJS('admin/dashboard.js');
        $this->view->AddJS('admin/drag.js');
        $this->view->AddJS('bootstrap/bootstrap.bundle.min.js');


        $this->view->AddCss('admin/dashboard.css');
        $this->view->AddCss('bootstrap/bootstrap.min.css');
        $this->view->AddCss('admin/drag.css');

        // рисуем интерфейс
        $this->view->adminPanel();
    }

    public function Registration()
    {
        // echo 'Типа регистрируемся';
        // подключаем файл стилей для страницы регистрации
        $this->view->AddCss('registration/registration.css');
        $this->view->AddCss('registration/registration/@invalidEmail.css');

        // рисуем интерфейс
        $this->view->render();
    }
    public function Authorization()
    {
        // если уже были авторизованы
        $this->view->AddCss('authorization/authorization.css');

        // если авторизовались
        $this->isAuth();

        // проверка что была нажата кнопка войти!
        if (isset($_POST['action']) && $_POST['action'] === 'authorization') {
            $data = $this->model->sigin();

            if (!isset($data['error'])) {
                $this->role = $data['role'];
            }

            // если авторизовались
            $this->isAuth();
        }

        // рисуем интерфейс
        $this->view->render($data);
    }


    public function isAuth(): bool
    {
        $isAuth = isset($_SESSION['user']) ? true : false;
        if ($isAuth) {
            Router::redirect('/');
        }

        return false;
    }

    public function logout()
    {
        // удаляем куку
        setcookie(session_name(), '', time() - 9999999999, '/');
        unset($_SESSION['user']);
        // удалить сессию
        session_destroy();
        Router::redirect('/authorization');
    }

    public function Create()
    {
        $this->model->createUser();
    }
}
