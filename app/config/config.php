<?php

define('PROJECT', 'mygoogle');
define('ROOT', $_SERVER['DOCUMENT_ROOT']);
define('UPLOADS', '\app\public\uploads');


/*
https://google/create
----> index.php
include router.php

router.php - логика по принципу MVC - Model View Controller
----> controllers/CreateController.php (class) внтуренняя логика
----> models/Create/CreateModel.php (class) задача отправить запрос в БД
----> views/create/create.php (верстка с данными !!!)
----> controlles ----> возвращает страничку клиенту

 */
