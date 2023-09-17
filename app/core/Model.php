<?php

namespace market\core;

use market\core\Connection;

class Model extends Connection
{
    public function __construct()
    {
        Connection::connect();
    }

    public function getBasket(string $ids): bool|array
    {
        $ids = $this->validationIDS($ids);
        $sql = "SELECT * FROM productShop WHERE idProductShop IN ($ids)";
// запрос в базу на получение всех товаров
        //$stm = static::$db->query('SELECT * FROM productShop WHERE idProductShop IN (1,2,3,4)');
        $stm =  Connection::connect()->prepare($sql);
        $stm->execute();
        return $stm->fetchAll();
    }

    public function validationIDS($ids)
    {
        return rtrim(preg_replace('/[^0-9,]/', '', $ids), ',');
    }
}
