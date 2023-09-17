// window.addEventListener('scroll', function() {

//   console.log('прокрутка'+ this.scrollY);
//     document.querySelector('.header_pos').classList.add('fixed')
//   });

let elHeader = document.querySelector(".header");

elHeader.addEventListener("click", function (Event) {
    let element = Event.target;
  // console.log(element);
    if (element.classList.contains("header__switcher")) {
        elHeader
        .querySelector(".headL__nav_ul > a >.headL__logo")
        .classList.remove("d-none");
        elHeader.querySelector(".linkMain ").classList.remove("d-none");
    }
});

// работа с корзиной товаров

// получаем данные
let STORAGE = JSON.parse(localStorage.getItem("basket"));
const GRID = document.querySelector(".basket_grid");
// console.log(STORAGE);
const PARENT = document.querySelector(".b-item");

