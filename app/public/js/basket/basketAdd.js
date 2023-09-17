let value = document.querySelector(".card__content");

value.addEventListener("click", function (Event) {
    let target = Event.target;
    if (target.classList.contains("card__content__btn")) {
        let id = value.querySelector(".card__content_articul").getAttribute('data-id');

        console.log('id' + id);

      // let str = target.parentElement.querySelector('.card__content_articul').textContent;
      // let id = str.split(':');
      //  console.log("Добавили товар в корзину " + id);
      // сохранить id  товара
        setStorage("basket", id);
    }
});



//функция проверяет есть ли товар в корзинне
//получаем данные из хранилища если есть
function getStorage(key)
{
    let storage = localStorage.getItem(key);

  //если не true тогда
    if (!storage) {
        return false;
    }
  //если существуют записи в корзине, тогда преобразуем в объект и отдаем этот оъект
    return JSON.parse(storage);
}

//записываем данные в хранилище
function setStorage(key, id)
{
  //запускаем функцию getStorage
    let storage = getStorage(key);
    if (!storage) {
        let data = {
            [id]: 1, //  [id] переменная равная id товара/ 1 количество
        };
        localStorage.setItem(key, JSON.stringify(data));
    } else {
        if (storage[id]) {
            storage[id] += 1; // инкрементируем кол-во
        } else {
            storage[id] = 1;
        }
      //перезаписываем старый ключ с новыми
        localStorage.setItem(key, JSON.stringify(storage));
    }
}
