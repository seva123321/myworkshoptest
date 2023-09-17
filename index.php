<?php

declare(strict_types=1);

// подключить класс из указанного пространства имен
use market\core\Router;

require_once 'app/core/session.php';
// конфигурация отслеживания ошибок
require_once 'app/errors/logger.php';
// автозагрузщик классов
require_once 'vendor/autoload.php';
// файл конфигураций
require_once 'app/config/config.php';
// список страниц!!!
require_once 'app/config/web.php';
// запустить хук ( отслеживание URL )
Router::run();
