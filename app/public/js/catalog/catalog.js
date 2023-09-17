const CATALOG = document.querySelector('.catalog');
let clickValue = document.querySelector(".content__filter");

function showBlock(Event)
{
  //   console.log(Event.target);
    let element = Event.target;
    if (element.classList.contains("dropdownName")) {
        let showElement = element.nextElementSibling.classList;
        let arrowAsc = element.parentNode.querySelector(".fa-sort-asc");
        let arrowDesc = element.parentNode.querySelector(".fa-sort-desc");

      // console.log(arrowDesc);
      // console.log(arrowAsc);

      // console.log(element);
        showElement.toggle("b-show");

      // let value = element.querySelector;
      // if (showElement.toggle("b-show")) {
      // switch (element) {
      //   case element.querySelector("#filterCategory"): //"Категория":
      //     showElement.remove("b-show");
      //     //   arrowAsc.add("d-noneFa");
      //     //   arrowDesc.remove("d-noneFa");
      //     // arrowElement.remove('d-noneFa');
      //     break;
      //   case element.querySelector("#filterCategory")://"Размер":
      //     showElement.remove("b-show");
      //     //   arrowAsc.add("d-noneFa");
      //     //   arrowDesc.remove("d-noneFa");
      //     break;
      //   case element.querySelector("#filterCategory")://"Стоимость":
      //     showElement.remove("b-show");
      //     //   arrowAsc.add("d-noneFa");
      //     //   arrowDesc.remove("d-noneFa");
      //     break;

      //   default:
      //     break;
      // }
      // }
      // else {
      //   switch (element) {
      //     case element.querySelector("#filterCategory"): //"Категория":
      //       showElement.add("b-show");
      //       //   arrowAsc.remove("d-noneFa");
      //       //   arrowDesc.add("d-noneFa");
      //       break;
      //     case "Размер":
      //       showElement.add("b-show");
      //       //   arrowAsc.remove("d-noneFa");
      //       //   arrowDesc.add("d-noneFa");
      //       break;
      //     case "Стоимость":
      //       showElement.add("b-show");
      //       //   arrowAsc.remove("d-noneFa");
      //       //   arrowDesc.add("d-noneFa");
      //       break;

      //     default:
      //       break;
      //   }
      // }
    }
}

function otrisValue(Event)
{
    let element = Event.target;
    if (element.classList.contains('dropdown')) {
        let value = element.getAttribute('value');
        console.log(value.closest('.select'));
        value.closest('.select');
    }
}

clickValue.addEventListener("click", function (Event) {
    showBlock(Event);
    otrisValue(Event);
});


CATALOG.addEventListener("touchstart", handleStart, false);
CATALOG.addEventListener("touchend", handleEnd, false);
CATALOG.addEventListener("touchcancel", handleCancel, false);
CATALOG.addEventListener("touchmove", handleMove, false);

let startX = null;

function handleStart(Event)
{
    console.log('touchstart');
    console.log(Event);
    startX = Math.ceil(Event.changedTouches[0].clientX);
}

function handleEnd(Event)
{
    console.log('touchend');
    console.log(Event);
}

function handleCancel(Event)
{
    console.log('touchcancel');
}

function handleMove(Event)
{
    let card = Event.target;

    if (card.classList.contains('catalog__card__img')) {
        let slider__line = Event.target.parentNode;
        let moveX = Math.ceil(Event.changedTouches[0].clientX);
        let pos = startX - moveX


        if (startX < moveX) {
            console.log('right')
            let rollX = startX + (startX - moveX);
            slider__line.style.transform = `translateX(${rollX}px)`;
        } else {
            console.log('left')
            let rollX = startX - moveX;
            slider__line.style.transform = `translateX(-${rollX}px)`;
        }
    }

}