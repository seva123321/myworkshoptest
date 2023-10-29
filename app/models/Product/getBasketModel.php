<?php

namespace market\models\Product;

use market\core\Model;
use market\core\Connection;

class ShowProduct2Model extends Model
{
    const TABLE_NAME = 'productShop';

    public function getProducts()
    {
        // узнаем категорию товара
        $sql = "SELECT pS.*,(SELECT GROUP_CONCAT(path) FROM productImages WHERE idProduct = pS.idProductShop  ) as url FROM " . static::TABLE_NAME . " pS";
        // запрос в базу на получение всех товаров
        $result = Connection::$db->query($sql)->fetchAll();
        return $result;
    }
}
