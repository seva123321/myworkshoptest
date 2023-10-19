        <?php
        // include 'app/views/Navigation/navigation.php';
        ?>

        <div class="content__txt content__txt_marg">
            <span class="content__txt__h2">мужчинам</span>
            <span class="content__txt__h4">Все товары</span>
        </div>
        <form action=" " method="post" class="content">
            <div class="content__filter ">


                <div class="select-wrapper" name="category" id="">
                    <i class="fa fa-2x fa-sort-desc"></i>
                    <i class="fa fa-2x fa-sort-asc d-noneFa"></i>
                    <div id="filterCategory" class=" filterCategory select__category dropdownName dropdownName_size toggler_down">Категория</div>
                    <div class="select d-none">
                        <option value="outerwear" class="dropdown">Верхняя одежда</option>
                        <option value="trousers" class="dropdown">Штаны</option>
                        <option value="shoes" class="dropdown">Обувь</option>
                        <option value="bag" class="dropdown">Сумки</option>
                    </div>
                </div>


                <div class="select-wrapper select-posSize " name="size" id="">
                    <i class="fa fa-2x fa-sort-desc"></i>
                    <i class="fa fa-2x fa-sort-asc d-noneFa"></i>
                    <div id="filterSize" class="select__size dropdownName dropdownName_size toggler_down ">Размер</div>
                    <div class="select d-none">
                        <option class="dropdown" value="size_XS">XS(46ru)</option>
                        <option class="dropdown" value="size_S">S(48ru)</option>
                        <option class="dropdown" value="size_M">M(50ru)</option>
                        <option class="dropdown" value="size_L">L(52ru)</option>
                        <option class="dropdown" value="size_XL">XL(54ru)</option>
                        <option class="dropdown" value="size_XXL">XXL(56ru)</option>
                    </div>
                </div>

                <div class="select-wrapper select-posCost" name="cost" id="">
                    <i class="fa fa-2x fa-sort-desc"></i>
                    <i class="fa fa-2x fa-sort-asc d-noneFa"></i>
                    <div id="filterPrice" class="dropdownName dropdownName_size toggler_down">Стоимость</div>
                    <div class="select__cost select__filter_input d-none">
                        <input class="filter__cost filter__cost_size" type="number" name="" id="" placeholder="От" min="">
                        <input class="filter__cost filter__cost_size" type="number" name="" id="" placeholder="До">
                    </div>
                </div>
            </div>

        </form>

        <?php
        //  dump($data[key]);
        ?>
        <section class="catalog" >
            <?php
            foreach ($data as $key => $product) :
            ?>

                <?php
                // $val = explode(',' ,$data[$key]["url"]);
                // dump( count(explode(',' ,$data[$key]["url"])));
                dump($data)
                ?>
               
                <a class="catalog__linkProduct n-decor" data-index="<?= $key?>" href="/product/id/<?= $product['idProductShop'] ?>">
                    <figure class="catalog__card">
                        <div class="slider">
                            <div class="slider__line" data-img = "<?= count(explode("," ,$data[$key]["url"]))?>">
                                <?php
                                if (!is_null($product['url'])) :
                                    $product['url'] = explode(',', $product['url']);
                                    foreach ($product['url'] as $url) :
                                ?>
                                        <img class="catalog__card__img" src="<?= UPLOADS . '\\' . $url ?>" alt="img">
                                    <?php
                                    endforeach;
                                else : ?>
                                    <!-- заглушка -->
                                    <img class="catalog__card__img" src="\app\public\images\6.jpg" alt="img">
                                <?php
                                endif;
                                ?>
                            </div>
                            <div class="slider-panel">
                            </div>
                            <div class="slider-panelDotted">
                            </div>
                        </div>
                        <figcaption class="catalog__card__content">
                            <div class="catalog__card__name"><?= $product['name'] ?></div>
                            <span class="catalog__card__price"><?= $product['price'] . " руб." ?></span>
                        </figcaption>
                    </figure>
                    </a>


                <?php
            endforeach;
                ?>
        </section>