<?php 
namespace market\models\Product;

use market\core\Model;
use market\core\Connection;

class ShowProductModel extends Model {
    

    const TABLE_NAME = 'productImages';


  /**
   * @param int $id
   * @return bool|array
   */
  public function getProduct(int $id):bool|array
  {
    // $sql = "SELECT pS.*,(SELECT GROUP_CONCAT(path) FROM productImages WHERE idProduct = pS.idProductShop  ) as url FROM " . static::TABLE_NAME . " pS
    // WHERE pS.category IN ({$this->category})";
      $sql = "SELECT *, (SELECT  GROUP_CONCAT(path) FROM ".static::TABLE_NAME." WHERE idProduct = $id ) as url FROM `productShop` WHERE idProductShop =  $id";
      // запрос в базу на получение всех товаров
      $result = Connection::$db->query($sql)->fetch();
      return $result;
  }

}