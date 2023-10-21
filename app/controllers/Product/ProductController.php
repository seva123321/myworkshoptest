<?php

declare(strict_types=1);

namespace market\controllers\Product;

use market\core\Controller;

class ProductController extends Controller
{
    public function __construct(array $params)
    {
        $this->params = $params;
        parent::__construct($params);
        $this->view->AddCss('catalog/catalog.css');
        $this->view->AddCss('productCard/productCard.css');
    }


  // запустится по умолчанию
    public function catalog(): void
    {
        $this->view->AddJS('catalog/catalog.js');
        $data = $this->model->getProducts();
        // dump($data);
        $this->view->render($data);
    }

    public function showProduct(): void
    {
        extract($this->variables);
        $this->view->AddJS('productCard/productCard.js');
        $data = $this->model->getProduct((int)$id);
        $this->view->render($data);
    }

    public function getBasket(): void
    {
        $data = json_decode($_POST['ids'], true);
      // получаем только ключи ( которые являются нашими id)
        $data = array_keys($data);
      // из массива в строку 1,2,3,4
        $ids = implode(',', $data);
        $response = $this->model->getBasket($ids);
        echo json_encode($response);
    }


    public function basket(): void
    {
        extract($this->variables);
      // $this->view->AddJS('basket/basketAdd.js');
        $this->view->AddJS('basket/basket.js');
        $this->view->AddCSS('basket/basket.css');
        $this->view->render();
    }
}
