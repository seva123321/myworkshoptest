<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Marketplace</title>
    <link rel="shortcut icon" href="/app/public/images/icons/favicon_logo.ico" type="image/x-icon">
    <link rel="stylesheet" href="/app/public/css/header/header.css">
    <link rel="stylesheet" href="/app/public/css/footer/footer.css">
    <link rel="stylesheet" href="/app/public/css/commonStyle/common.style.css">
    <link rel="stylesheet" href="/app/public/fonts/font-awesome-4.7.0/css/font-awesome.min.css">

    <?= $this->IMPORT_MODULE_CSS ?>
</head>

<body>
    <div class="wrapper">
        <header class="header_pos">
            <div class="header">
                <a href="/">
                    <div class="headL__logo ">
                        <img class="headLeft__logo-img" src="/app/public/images/icons/logo.jpg" alt="logo">
                    </div>
                </a>
                <input class="header__switcher" type="checkbox" id="menu">
                <label class="header__label open" for="menu">
                    <i class="fa fa-bars"></i>
                </label>
                <nav class="header_nav">
                    <div class="headL">
                        <ul class="headL__nav_ul ul_Dec-none">
                            <a href="/">
                                <div class="headL__logo d-none">
                                    <img class="headLeft__logo-img" src="/app/public/images/icons/logo.jpg" alt="logo">
                                </div>
                            </a>
                            <li class="headL__li">
                                <a class="headL__link linkMain link n-decor d-none" href="/">На Главную</a>
                            </li>
                            <li class="headL__li">
                                <a class="headL__link  link n-decor" href="/woman">Женщинам</a>
                            </li>
                            <li class="headL__li">
                                <a class="headL__link  link n-decor" href="/man">Мужчинам</a>
                            </li>
                            <li class="headL__li">
                                <a class="headL__link link n-decor" href="/children">Детям</a>
                            </li>
                            <li class="headL__li">
                                <a class="headL__link link n-decor" href="#">Новинки</a>
                            </li>
                            <li class="headL__li">
                                <a class="headL__link link n-decor" href="#">О&nbspнас</a>
                            </li>
                        </ul>
                    </div>

                    <div class="headR">
                        <label class="header__label close" for="menu">
                            <i class="fa fa-times "></i>
                        </label>

                        <?php
                        if (!isset($_SESSION['user'])) {
                            echo '<a href="/authorization" class="headR__link link n-decor">';
                            echo '<img src="/app/public/images/icons/account.png" alt="enter">' . 'Войти';
                            echo '</a>';
                        } else {
                            echo '<span>' . $_SESSION['user']['login'] . '</span>';
                        }
                        ?>

                        <div class="headR__bascet">

                            <a href="/catalog/basket" class="headR__link link n-decor">
                                <div>
                                    <img src="/app/public/images/icons/bascet.png" alt="bascet">
                                </div>Корзина
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="header__line"></div>
        </header>
        <article class="b-link">
            <div class="b-link_nav">
                <ul class="b-link__ol">
                    <!-- <li class="ol__li">
                        <a class="b-link_nav__a n-decor" href="/">главная </a>
                    </li>
                    <span class="li__separator">/</span>
                    <li class="ol__li">
                        <a class="b-link_nav__a n-decor" href="/man"> мужчинам</a>
                    </li>
                    <li></li> -->
                </ul>
            </div>
        </article>
        <main>