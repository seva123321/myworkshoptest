<div class="wrapper">
    <div class="basketInf basketInf_dist">
        <span class="basketInf_h2 h2_size">Ваша корзина</span>
        <span class="attention_txt">Товары резервируются на ограниченное время</span>
    </div>


    <?php
       dump($data);
    ?>
    <div class="basket_grid ">
        <div class="b-itemHeader">
            <div class="head_item b-item_1">Фото</div>
            <div class="head_item_b-empty"></div>
            <div class="b-item__default">
                <div class="head_item b-item_2 b-item_2_pad">Наименование</div>
                <div class="head_item b-item_3">Размер</div>
                <div class="head_item b-item_4">Количество</div>
            </div>
            <div class="head_item b-item_5">Стоимость</div>
            <div class="head_item b-item_6">Удалить</div>
        </div>
        <div class="b-item">
        </div>
        <!-- <div class="b-item b-item2_bclr">
            <div class="basket__item b-itemImg">
                <img class="itemImg" src="../images/catalog/1.jpg" alt="product_img">
            </div>
            <details>
                <summary class="summary">Подробнее</summary>
                <div class="basket__item  b-item2_flex b-item2_pad">
                    <span class="item_name">Куртка синяя</span>
                    <span class="item_art">арт. 123412</span>
                </div>
                <div class="basket__item b-itemSize">
                    <span class="b-itemSize_txt">Размер:</span>
                    <span class="b-itemSize_size">39</span>
                </div>

                <div class="basket__item basket__item-count">
                    <span>Кол-во:</span>
                    <span class="b-itemCount" contenteditable="true">1</span>
                    <div class="manege_panel">
                        <i class="fa fa-plus-square btn" aria-hidden="true"></i>
                        <i class="fa fa-minus-square btn" aria-hidden="true"></i>
                    </div>
                </div>

            </details>
            <div class="b-item__default">
                <div class="basket__item  b-item2_flex b-item2_pad">
                    <span class="item_name">Куртка синяя</span>
                    <span class="item_art">арт. 123412</span>
                </div>
                <div class="basket__item b-itemSize">39</div>
                <div class="basket__item basket__item-count">
                    <span class="b-itemCount" contenteditable="true">1</span>
                    <div class="manege_panel">
                        <i class="fa fa-plus-square btn" aria-hidden="true"></i>
                        <i class="fa fa-minus-square btn" aria-hidden="true"></i>
                    </div>
                </div>
            </div>

            <div class="basket__item b-itemCost">3800 руб.</div>
            <div class="basket__item b-itemDel btn">
                <i class="fa fa-2x fa-remove" aria-hidden="true"></i>
            </div>
        </div> -->



        <div class="b-result b-result_flex ">
            <span class="b-result__span">Итого:</span>
            <span class="b-result__price"> 12500 руб.</span>
            <span class="b-result__empty"></span>

        </div>

    </div>


    <template id="gridRow">
        <div class="gridRow">
            <div class="basket__item b-itemImg">
                <img class="itemImg" src="/images/catalog/7.jpg" alt="product_img">
            </div>
            <details>
                <summary class="summary">Подробнее</summary>
                <div class="basket__item  basket__itemName b-item2_flex b-item2_pad">
                    <span class="item_name">Куртка синяя</span>
                    <span class="item_art">арт. 123412</span>
                </div>
                <div class="basket__item basket__itemSize b-itemSize">
                    <span class="b-itemSize_txt">Размер:</span>
                    <span class="b-itemSize_size">39</span>
                </div>

                <div class="basket__item basket__itemCount basket__item-count">
                    <span>Кол-во:</span>
                    <span id="count" class="b-itemCount" contenteditable="true">1</span>
                    <div class="manege_panel">
                        <i class="fa fa-plus-square btn" aria-hidden="true"></i>
                        <i class="fa fa-minus-square btn" aria-hidden="true"></i>
                    </div>
                </div>

            </details>
            <div class="b-item__default">
                <div class="basket__item  b-item2_flex b-item2_pad">
                    <span class="item_name">Куртка синяя</span>
                    <span class="item_art">арт. 123412</span>
                </div>
                <div class="basket__item b-itemSize">39</div>
                <div class="basket__item basket__item-count">
                    <span class="b-itemCount" contenteditable="true">1</span>
                    <div class="manege_panel">
                        <i class="fa fa-plus-square btn" aria-hidden="true"></i>
                        <i class="fa fa-minus-square btn" aria-hidden="true"></i>
                    </div>
                </div>
            </div>

            <div class="basket__item b-itemCost">3800 руб.</div>
            <div class="basket__item b-itemDel">
                <i class="fa fa-2x fa-times" aria-hidden="true"></i>        
            </div>
        </div>
    </template>

    <div class="adress wrapper">
        <div class="adress__zigzag">
            <i class="fa fa-plus-square btn" aria-hidden="true"></i>
        </div>

        <div class="adressInf adressInf_dist">
            <span class="adressInf_h2 h2_size">Адрес доставки</span>
            <span class="attention_txt">Все поля обязательны для заполнения</span>
        </div>
        <form action="" class="adress__form" method="$_POST">
            <div class="adress__grid">
                <div class="a-item a-item_1">
                    <span class="a-item__span">Выберите вариант доставки</span>
                    <select name="" id="" class="a-item__select">
                        <option value="">Курьерская служба -
                            <span class="option__span">500 руб.</span>
                        </option>
                        <option value="">Компанией СДЭК -
                            <span class="option__span">1400 руб.</span>
                        </option>
                        <option value="">Почтой России -
                            <span class="option__span">100 руб.</span>
                        </option>
                    </select>
                </div>
                <div class="a-item a-item_2">
                    <span class="a-item__span">Имя</span>
                    <input class="a-item__input" type="text">
                </div>
                <div class="a-item a-item_3">
                    <span class="a-item__span">Фамилия</span>
                    <input class="a-item__input" type="text">
                </div>
                <div class="a-item a-item_4">
                    <span class="a-item__span">Адрес</span>
                    <input class="a-item__input" type="text">
                </div>
                <div class="a-item a-item_5">
                    <span class="a-item__span">Город</span>
                    <input class="a-item__input" type="text">
                </div>
                <div class="a-item a-item_6">
                    <span class="a-item__span">Индекс</span>
                    <input class="a-item__input" type="text">
                </div>
                <div class="a-item a-item_7">
                    <span class="a-item__span">Телефон</span>
                    <input class="a-item__input" type="text">
                </div>
                <div class="a-item a-item_8">
                    <span class="a-item__span">E-mail</span>
                    <input class="a-item__input" type="text">
                </div>
            </div>
        </form>
        <div class="adress__zigzag">
            <i class="fa fa-plus-square btn" aria-hidden="true"></i>
        </div>
    </div>

    <div class="payment wrapper">
        <div class="paymentInf paymentInf_dist">
            <span class="paymentInf_h2 h2_size">Варианты оплаты</span>
            <span class="attention_txt">Все поля обязательны для заполнения</span>
        </div>
        <div class="payment__content">
            <span class="payment__price payment__content_txt">Стоимость:</span>
            <span class="paymant__price__value payment__content_txt">12500 руб.</span>

            <span class="payment__delivery payment__content_txt">Доставка: </span>
            <span class="paymant__delivery__value payment__content_txt">500 руб.</span>

            <span class="payment__result payment__content_txt payment__block-txtClr">Итого:</span>
            <span class="paymant__result__value payment__content_txt payment__block-txtClr">13000 руб.</span>
        </div>
        <form action="#" class="payment__form">
            <div class="payment__input__wrapper">
                <span class="payment__input_txt">
                    Выберите способ оплаты</span>
                <input type="text" class="payment__input" placeholder="Банковская карта">
            </div>
            <div class="payment__form__btn payment__form__btn-txt btn ">Заказать</div>
        </form>
    </div>

</div>