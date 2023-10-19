<div class="wrapper">
    
    <figure class="card">
        <div class="card__imgWrapp">
     
        <?php
        //   dump($data);
        ?>

                <?php
                if (!is_null($data['url'])) :
                    $data['url'] = explode(',', $data['url']);
                    foreach ($data['url'] as $url) :
                ?>
                        <img class="card__img" src="<?= UPLOADS . '\\' . $url ?>" alt="images_product">
                    <?php
                    endforeach;
                else : ?>
                    <!-- заглушка -->
                    <img class="catalog__card__img" src="\app\public\images\6.jpg" alt="images_product">
                <?php
                endif;
                ?>

            <!-- <img class="card__img" src="<?= $data['url'] ?>" alt="images_product"> -->
       
        </div>
        <figcaption class="card__content">
            <h2 class="card__content__name h2_size "><?= $data['name'] ?></h2>
            <span class="card__content_articul" data-id="<?= $data['idProductShop'] ?>">Артикул: <?= $data['articul'] ?></span>
            <span class="card__content_price"><?= $data['price'] . " руб." ?> </span>
            <span class="card__content_description card__span"><?= $data['description'] ?></span>
            <div class="card__content__size">
                <span class="card__span span_up">размер</span>
                <div class="pannel__size">
                    <a class="pannel__size__link n-decor " href="#">
                        <div class="size__link-value size__link_txt ">38 </div>
                    </a>
                    <a class="pannel__size__link n-decor " href="#">
                        <div class="size__link-value size__link_txt">39</div>
                    </a>
                    <a class="pannel__size__link n-decor " href="#">
                        <div class="size__link-value size__link_txt">40</div>
                    </a>
                    <a class="pannel__size__link n-decor " href="#">
                        <div class="size__link-value size__link_txt">41</div>
                    </a>
                    <a class="pannel__size__link n-decor " href="#">
                        <div class="size__link-value size__link_txt">42</div>
                    </a>
                </div>
            </div>
            <span class="idProduct d-none"><?= $data['idProductShop'] ?></span>
           

            <!-- <div class="card__btn_wrapper"> -->
                <div class="card__content__btn content__btn_txt  btn">добавить в корзину</div>
            <!-- </div> -->
        </figcaption>
    </figure>
</div>
