<?php

namespace market\models\User;

use market\core\Model;
use market\core\Connection;

class AuthorizationModel extends Model
{
    const TABLE_NAME = 'users';

    public function sigin()
    {
        $login = $_POST['login'] ?? null;
        $pswd = $_POST['password'] ?? null;

        if ($login == null || $pswd == null) {
            return ['error' => 'Заполните все поля!'];
        }

        $hash = md5($pswd);
        // запрос в базу на получение юзера
        $sql = "SELECT  * FROM " . static::TABLE_NAME . " WHERE (login = :account  AND password= :pswd)";
        // безопасный запрос
        $stm = Connection::$db->prepare($sql);
        $stm->execute(['account' => $login, 'pswd' => $hash]);
        // преобразует

        $data = $stm->fetch();
        // // PDO::FETCH_ASSOC -описание вида вывода  данных
        if ($data) {
            session_start();
            $_SESSION['user'] = $data;
            // возвращаем данные в контроллер UserController
            return $data;
        } else {
            return ['error' => 'Неверный логин или пароль!'];
        }
    }
}
