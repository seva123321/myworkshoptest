<?php

namespace market\models\User;

use market\core\Model;
use market\core\Connection;
use market\core\Router;

class CreateModel extends Model
{
    const TABLE_NAME = 'users';
    public function createUser()
    {
        if (isset($_POST['action'])) {
            $login = $_POST['login'] ?? null;
            $pswd1 = $_POST['password1'] ?? null;
            $pswd2 = $_POST['password2'] ?? null;
            if ($login == null || $pswd1 == null || $pswd2 == null) {
                die('Заполните все поля!');
            }

            if ($pswd1 !== $pswd2) {
                die('Введенные пароли не совпадают');
            }

            $hash = md5($pswd1);
            $sql = "INSERT INTO " . static::TABLE_NAME . " (login,password) VALUES (:login, :pswd)";
            $stm = Connection::$db->prepare($sql);
            try {
                $stm->execute(['login' => $login, 'pswd' => $hash]);
            } catch (\PDOException $e) {
                echo $e->getMessage();
                die('что-то не так');
            }
            $id = Connection::$db->lastInsertId() ?? 0;
            if ($id) {
            // авторизация!!!
                $token = md5(time());
                $sql = "UPDATE " . static::TABLE_NAME . " SET token='$token',visit_at=" . time() . " WHERE idUsers=$id" ;
                $result = Connection::$db->query($sql)->rowCount();
                if (!$result) {
                    die('Не удалось установить токен');
                }

                // затем перенаправляем на главную
                Router::redirect('/');
            }
        }
    }
}
