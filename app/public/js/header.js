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



// const HEADER = document.querySelector('.header_pos')

// HEADER.addEventListener('click',(e)=>{
//   let target = e.target
//   console.log(target)
//   e.preventDefault
//   HEADER.after('heloo')
//   if( target ===  document.querySelector('.headL__li') ){
//     console.log(target)
    
//     document.querySelector('.b-link__ol').insertAdjacentHTML('afterend',`

//             <li class="ol__li">
//                 <a class="b-link_nav__a n-decor" href="/">главная </a>
//             </li>
//             <span class="li__separator">/</span>
//             <li class="ol__li">
//                 <a class="b-link_nav__a n-decor" href="/man"> мужчинам</a>
//             </li>
//     `) 

//   }

// })
