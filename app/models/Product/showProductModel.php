<?php 
namespace market\models\Product;

use market\core\Model;
use market\core\Connection;

class ShowProductModel extends Model {
    

    const TABLE_NAME = 'productShop';

  /**
   * @param int $id
   * @return bool|array
   */
  public function getProduct(int $id):bool|array
  {
      $sql = "SELECT  * FROM ".static::TABLE_NAME." WHERE idProductShop = $id ";
      // запрос в базу на получение всех товаров
      $result = Connection::$db->query($sql)->fetch();
      return $result;
  }


}