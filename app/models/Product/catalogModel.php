<?php

namespace market\models\Product;

use market\core\Model;
use market\core\Connection;

class CatalogModel extends Model
{
    const TABLE_NAME = 'productShop';
    private string $category = '';

    private function getCategory()
    {
        switch ($_SERVER['REQUEST_URI']) {
            case '/man':
                $this->category = 1;
                break;
            case '/woman':
                $this->category = 2;
                break;
            case '/children':
                $this->category = 3;
                break;
            default:
                $this->category = '1,2,3';
                break;
        }
    }


    public function getProducts()
    {
        // узнаем категорию товара
        $this->getCategory();
        $sql = "SELECT pS.*,(SELECT GROUP_CONCAT(path) FROM productImages WHERE idProduct = pS.idProductShop  ) as url FROM " . static::TABLE_NAME . " pS
        WHERE pS.category IN ({$this->category})";
        // запрос в базу на получение всех товаров
        $result = Connection::$db->query($sql)->fetchAll();
        return $result;
    }
}
