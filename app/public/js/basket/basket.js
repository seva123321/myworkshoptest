
// проверка обновлений( взаимодействие двух страниц product and basket)
window.addEventListener("storage", function () {
    console.log("update storage");
  // получаем новые данные из хранилища
    let newStorage = JSON.parse(localStorage.getItem("basket"));
  // массив с id новых товаров( содержит в себе ключи)
    let newProducts = Object.keys(newStorage);
    if (newStorage === null || STORAGE === null) {
        this.window.location.reload();
    } // если данные не нашли

    newProducts.forEach(function (id) {
      // если такой товар есть и есть расхождение
      // STORAGE[id] - возвращает значение свойства
        if (STORAGE[id] != newStorage[id]) {
            if (!STORAGE[id]) {
                addProduct(newStorage);
                console.log("Появился товар с id= " + id);
            } else {
                console.log("Изменился товар с id= " + id);
                document.querySelector(`.item_art.[data - id = "${id}"] input`).value = newStorage[id];
            }
        }
    });

  // this.location.reload() // принудительная перезагрузка страницы
});

// перерисовка корзины товаров
function renderProducts()
{
    document.querySelectorAll(".b-itemProduct").forEach(function (p) {
      // если у текущего объекта нет класса d-none
        if (!p.classList.contains(".d-none")) {
            p.remove(); // удаляем
        }
    });
}

const SendRequest = () => {

    if (!STORAGE) {
        return false;
    }
    fetch("/getProducts", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf8mb4",
        },
        body: "ids=" + localStorage.getItem("basket"),
    })
    .then((response) => response.json())
    .then((data) => renderBasket(data))
    .catch((err) => console.log(err));
}

window.addEventListener("load", SendRequest);


function renderBasket(data)
{
    console.log(data);

  // проверка обновлений( взаимодействие двух страниц product and basket)
    window.addEventListener("storage", function () {
        console.log("update storage");
      // получаем новые данные из хранилища
        let newStorage = JSON.parse(localStorage.getItem("basket"));
      // массив с id новых товаров( содержит в себе ключи)
        let newProducts = Object.keys(newStorage);
        if (newStorage === null || STORAGE === null) {
            this.window.location.reload();
        } // если данные не нашли

        newProducts.forEach(function (id) {
          // если такой товар есть и есть расхождение
          // STORAGE[id] - возвращает значение свойства
            if (STORAGE[id] != newStorage[id]) {
                if (!STORAGE[id]) {
                    addProduct(newStorage);
                    console.log("Появился товар с id= " + id);
                } else {
                    console.log("Изменился товар с id= " + id);
                  // document.querySelector(`.item_art.[d-id="${id}"] input`).value = newStorage[id];
                    document
                    .querySelector(".basket__itemCount")
                    .querySelector(".b-itemCount").textContent = newStorage[id];
                }
            }
        });
    });



    if (STORAGE) {
      // передаем аргумент функции в текущее хранилище
        addProduct(STORAGE);
    }

    function addProduct(storage)
    {
      // if (data[id] && !getProduct) {
        data.forEach(function (product, index) {
            console.log(STORAGE[product.idProductShop]);
            let clone = document.querySelector("#gridRow").content.querySelector(".gridRow").cloneNode(true);
          // console.log(product.idProductShop);
            clone.querySelector(".basket__itemName").querySelector(".item_name").textContent = product.name;
            clone.querySelector(".b-item__default").querySelector(".item_name").textContent = product.name;

            clone.querySelector(".itemImg").setAttribute("src", product.imgPath);

            clone.querySelector(".basket__itemName").querySelector(".item_art").textContent = "арт. " + product.articul;
            clone.querySelector(".b-item__default") .querySelector(".item_art").textContent = "арт. " + product.articul;

            clone.querySelector(".basket__itemCount").querySelector(".b-itemCount").textContent =
            STORAGE[product.idProductShop]; // product.count;  //
            clone.querySelector(".b-item__default") .querySelector(".b-itemCount").textContent =
            STORAGE[product.idProductShop]; //product.count;

            clone.querySelector(".basket__itemSize").querySelector(".b-itemSize_size").textContent = "size";
            clone.querySelector(".b-item__default").querySelector(".b-itemSize").textContent = "size";

            clone.querySelector(".b-itemCost").setAttribute("d-id", product.idProductShop);
          // clone.querySelector('.b-itemCost').classList.add('id=' + product.idProductShop);
            clone.querySelector(".b-itemCost").textContent = product.price + " руб.";

            PARENT.append(clone); // вставляет объект в родительский блок
          // STORAGE = JSON.parse(localStorage.getItem("basket")); //перезаписали переменную
            if (index % 2 !== 0) {
                clone.classList.add("b-item2_bclr");
            }
        });
      // }

        renderPrice();

      //  GRID.querySelector('.p-body').textContent = sum
    }

  // Работа с таблицей КОРЗИНА товаров
    GRID.addEventListener("click", function (Event) {
        let target = Event.target;
        let id = target.closest(".gridRow").querySelector(".b-itemCost").getAttribute("d-id");


      // удаление в корзине DELETE
        if (target.classList.contains("fa-remove")) {
          // если элемент найден на страничке/ удалить из хранилища
            if (id) {
                delete STORAGE[id];
                if (Object.keys(STORAGE).length) {
                  // перезаписать хранилище
                    localStorage.setItem("basket", JSON.stringify(STORAGE));
                } else {
                    localStorage.removeItem("basket");
                }
            }
          // удаление элемента визуально
            target.closest(".gridRow").remove();
        }

        let valueChange = document.querySelector(".basket__itemCount").querySelector(".b-itemCount");
        let valueChangeDef = document.querySelector(".gridRow").querySelector(".b-item__default").querySelector(".b-itemCount");
        let valueTxt = valueChange.textContent;
        let valueTxtDef = valueChangeDef.textContent;
      //изменение кол-ва CHANGHE COUNT
        if (target.classList.contains("fa-plus-square")) {
          // console.log(target);
            valueTxt++;valueTxtDef++;
        } else if (target.classList.contains("fa-minus-square")) {
            valueTxt--;valueTxtDef--;
        }

        if ((valueTxt <= 0) | (valueTxtDef <= 0)) {
            valueTxt = 1;
            valueTxtDef = 1;
        } else if ((valueTxt > 20) | (valueTxtDef > 20)) {
            valueTxt = 20;
            valueTxtDef = 20;
        }

      // if(){
        valueChange.textContent = valueTxt;
        valueChangeDef.textContent = valueTxtDef;
      // }

        console.log(`id = ${id}`);

        STORAGE[id] = valueTxt;
      // перезаписываем
        localStorage.setItem("basket", JSON.stringify(STORAGE));

        renderPrice();
    });



  // функция подсчета ИТОГОВОЙ СУММОЙ товара
    function renderPrice()
    {
        let result = 0;
        document.querySelectorAll(".gridRow").forEach((item) => {
            let pos = item.querySelector(".b-itemCost").textContent.indexOf("руб");
            let count = item
            .querySelector(".basket__itemCount")
            .querySelector(".b-itemCount").textContent;
            let price = item.querySelector(".b-itemCost").textContent.slice(0, pos);

          // console.log((item.querySelector('.b-itemCost').textContent).indexOf('руб'));
            result += price * count;
        });
        document.querySelector(".b-result__price").textContent = result + " руб.";
    }

  // Изменение количества товара
    GRID.addEventListener("input", function (Event) {
      // 'input'
        let target = Event.target;
        let id = target.closest(".gridRow").querySelector(".b-itemCost").getAttribute("d-id");

        if (target.classList.contains("b-itemCount")) {
            let count = target.textContent;
          // изменяем значение
            if (count <= 0) {
                count = 1;
            } else if (count > 20) {
                count = 20;
            }
            STORAGE[id] = count;
          // перезаписываем
            localStorage.setItem("basket", JSON.stringify(STORAGE));
        }

        renderPrice();
    });
}



// удаление в корзине
GRID.addEventListener("click", function (Event) {
    let target = Event.target;
    let id = target.closest(".p-item") ? .getAttribute("data-product");

    if (target.classList.contains("fa-trash")) {
      //console.log(id);
      // если элемент найден на страничке/ удалить из хранилища
        if (id) {
            delete STORAGE[id];
          // перезаписать хранилище
            localStorage.setItem('basket', JSON.stringify(STORAGE));
        }
      // удаление элемента визуально
        target.closest(".p-item").remove();
    }
    renderPrice();
});

// функция подсчета итоговой суммы товара
function renderPrice()
{
    let result = 0;
    document.querySelectorAll('.p-item').forEach(item => {
        let count = item.querySelector('.count').value;
        let price = item.querySelector('.p-price').textContent;
        result += price * count;
    })
    document.querySelector('.p-result .p-body').textContent = result;
}

 // Изменение количества товара   (уневерсальный)
 GRID.addEventListener('input', function (Event) {
  // 'input'
    let target = Event.target;
    let id = target.closest(".p-item").getAttribute("data-product");

    if (target.classList.contains("count")) {
        let count = target.value;
      // изменяем значение
        STORAGE[id] = count;
      // перезаписываем
        localStorage.setItem('basket', JSON.stringify(STORAGE));
    }
    renderPrice();

 })

