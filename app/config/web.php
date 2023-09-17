<?php

use market\core\Router;

/*
    Маршрутизатор URL
*/

// PAGES
Router::addUrl('/', 'Main');
Router::addUrl('/man', 'Product', 'catalog');
Router::addUrl('/woman', 'Product', 'catalog');
Router::addUrl('/children', 'Product', 'catalog');
Router::addUrl('/catalog', 'Product', 'catalog');
Router::addUrl('/registration', 'User', 'registration');
Router::addUrl('/authorization', 'User', 'authorization');
Router::addUrl('/product/id/{id}', 'Product', 'showProduct');
Router::addUrl('/product/id/{id}/test/{test}', 'Product', 'showProduct2');
Router::addUrl('/create', 'User', 'create');
Router::addUrl('/admin/panel', 'User', 'admin');

// POST OR GET OR PUT ....
Router::addRequest('/catalog/basket', 'Product', 'basket');
Router::addRequest('/logout', 'User', 'logout');
Router::addRequest('/getProducts', 'Product', 'getBasket', 'POST');
Router::addRequest('/upload', 'Api', 'upload', 'POST');
