const CATALOG = document.querySelector(".catalog");
let clickValue = document.querySelector(".content__filter");

function showBlock(Event) {
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

function otrisValue(Event) {
  let element = Event.target;
  if (element.classList.contains("dropdown")) {
    let value = element.getAttribute("value");
    console.log(value.closest(".select"));
    value.closest(".select");
  }
}

clickValue.addEventListener("click", function (Event) {
  showBlock(Event);
  otrisValue(Event);
});

// CATALOG.addEventListener("touchstart", handleStart, false);
// CATALOG.addEventListener("touchend", handleEnd, false);
// CATALOG.addEventListener("touchcancel", handleCancel, false);
// CATALOG.addEventListener("touchmove", handleMove, false);

// let startX = null;

// function handleStart(Event)
// {
//     console.log('touchstart');
//     console.log(Event);
//     startX = Math.ceil(Event.changedTouches[0].clientX);
// }

// function handleEnd(Event)
// {
//     console.log('touchend');
//     console.log(Event);
// }

// function handleCancel(Event)
// {
//     console.log('touchcancel');
// }

// function handleMove(Event)
// {
//     let card = Event.target;

//     if (card.classList.contains('catalog__card__img')) {
//         let slider__line = Event.target.parentNode;
//         let moveX = Math.ceil(Event.changedTouches[0].clientX);
//         let pos = startX - moveX

//         if (startX < moveX) {
//             console.log('right')
//             let rollX = startX + (startX - moveX);
//             slider__line.style.transform = `translateX(${rollX}px)`;
//         } else {
//             console.log('left')
//             let rollX = startX - moveX;
//             slider__line.style.transform = `translateX(-${rollX}px)`;
//         }
//     }

// }


const TEST = document.querySelectorAll('.slider__line')
const CARDS = document.querySelectorAll(".catalog__linkProduct")
let slideIndex = {}

TEST.forEach(element =>  {
  let key = element.closest('.catalog__linkProduct').getAttribute('data-index')
  slideIndex[key] =  0
  
})


let i = 1
let
  posInit = 0,
  posX1 = 0,
  posX2 = 0,
  posY1 = 0,
  posY2 = 0,
  posFinal = 0,
  isSwipe = false,
  isScroll = false,
  allowSwipe = true,
  transition = true,
  nextTrf = 0,
  prevTrf = 0,
  trfRegExp = /([-0-9.]+(?=px))/,
  getEvent = function () {
    return event.type.search("touch") !== -1 ? event.touches[0] : Event;
  },
  swipeStart = function (Event) {
    // console.log('Вы приложили палец к элементу')

    let evt = getEvent();
    
    i = evt.target.parentNode.closest('.catalog__linkProduct').getAttribute('data-index')
    sliderList = CARDS[i].querySelector(".slider")
    sliderTrack = CARDS[i].querySelector(".slider__line")
    slides = CARDS[i].querySelectorAll(".catalog__card__img")

    slideWidth = slides[i].offsetWidth
    lastTrf = --slides[i].length * slideWidth
    posThreshold = slides[i].offsetWidth * 0.35

    if (allowSwipe) {
      transition = true;

      nextTrf = (slideIndex[i] + 1) * -slideWidth;
      prevTrf = (slideIndex[i] - 1) * -slideWidth;

      posInit = posX1 = evt.clientX;
      posY1 = evt.clientY;

      sliderTrack.style.transition = "";

      document.addEventListener("touchmove", swipeAction);
      // document.addEventListener("mousemove", swipeAction);
      document.addEventListener("touchend", swipeEnd);
      // document.addEventListener("mouseup", swipeEnd);

      sliderList.classList.remove("grab");
      sliderList.classList.add("grabbing");
    //  style = sliderTrack.style.transform
      //console.log(style);
    }
  },
    slide = function () {
    if (transition) {
      sliderTrack.style.transition = "transform .5s";
    }
    sliderTrack.style.transform = `translate3d(-${
      slideIndex[i] * slideWidth
    }px, 0px, 0px)`;

    // console.log(slideIndex);

    // prev.classList.toggle("disabled", slideIndex === 0);
    // next.classList.toggle("disabled", slideIndex === --slides.length);
  },
  swipeAction = function () {
    let evt = getEvent(),
      style = sliderTrack.style.transform,
      transform = +style.match(trfRegExp)[0];//!!!

    posX2 = posX1 - evt.clientX;
    posX1 = evt.clientX;

    posY2 = posY1 - evt.clientY;
    posY1 = evt.clientY;

    // определение действия свайп или скролл
    if (!isSwipe && !isScroll) {
      let posY = Math.abs(posY2);
      if (posY > 7 || posX2 === 0) {
        isScroll = true;
        allowSwipe = false;
      } else if (posY < 7) {
        isSwipe = true;
      }
    }
//************************************************** */
    if (isSwipe) {
      // запрет ухода влево на первом слайде
      if (slideIndex[i] === 0) {
        if (posInit < posX1) {
          setTransform(transform, 0);
          return;
        } else {
          allowSwipe = true;
        }
      }

      // запрет ухода вправо на последнем слайде
      if (slideIndex[i] === --slides.length) {
        if (posInit > posX1) {
          setTransform(transform, lastTrf);
          return;
        } else {
          allowSwipe = true;
        }
      }

      // запрет протаскивания дальше одного слайда
      if (
        (posInit > posX1 && transform < nextTrf) ||
        (posInit < posX1 && transform > prevTrf)
      ) {
        reachEdge();
        return;
      }
//************************************************** */
    // двигаем слайд
      sliderTrack.style.transform = `translate3d(${
        transform - posX2
      }px, 0px, 0px)`;
    }
  },
  swipeEnd = function () {
    posFinal = posInit - posX1;

    isScroll = false;
    isSwipe = false;

    document.removeEventListener("touchmove", swipeAction);
    // document.removeEventListener("mousemove", swipeAction);
    document.removeEventListener("touchend", swipeEnd);
    // document.removeEventListener("mouseup", swipeEnd);

    sliderList.classList.add("grab");
    sliderList.classList.remove("grabbing");

    if (allowSwipe) {
      if (Math.abs(posFinal) > posThreshold) {
        if (posInit < posX1) {
          slideIndex[i] -= 1//i--;
        } else if (posInit > posX1) {
          slideIndex[i] += 1// i++;
        }
      }

      if (posInit !== posX1) {
        allowSwipe = false;
        slide();
      } else {
        allowSwipe = true;
      }
    } else {
      allowSwipe = true;
    }
  },
  setTransform = function (transform, comapreTransform) {
    if (transform >= comapreTransform) {
      if (transform > comapreTransform) {
        sliderTrack[i].style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`;
      }
    }
    allowSwipe = false;
  },
  reachEdge = function () {
    transition = false;
    swipeEnd();
    allowSwipe = true;
  };

  if (swipeStart){
  
  CARDS.forEach(function(card){
  
  card.querySelector(".slider__line").style.transform = "translate3d(0px, 0px, 0px)";
  card.querySelector(".slider").classList.add("grab");
  card.querySelector(".slider__line").addEventListener("transitionend", () => (allowSwipe = true));

})
// sliderTrack.style.transform = "translate3d(0px, 0px, 0px)";
// sliderList.classList.add("grab");
// sliderTrack.addEventListener("transitionend", () => (allowSwipe = true));
}
// CARDS[i].addEventListener("touchstart", swipeStart);
CATALOG.addEventListener("touchstart", swipeStart);
  
// slider.addEventListener("mousedown", swipeStart);


let PANEL = null 

// добавление точек в slider-panel по кол-ву изображений
window.addEventListener('load',function(){
  CARDS.forEach(function(oneCard,cardCount)   {
     PANEL = oneCard.querySelector('.slider-panel')
     PANELDOTTED = document.querySelectorAll('.slider-panelDotted')
     let length = oneCard.querySelector('.slider__line').getAttribute('data-img')

     PANEL.style.display= "grid"
     PANEL.style.gridTemplateColumns = `repeat(${length},1fr)`
    // для одной карточки товара
    console.log();
        for (let i=0; i <= length-1; i++ )
        {
          PANELDOTTED[cardCount].insertAdjacentHTML('beforeend',`<div class="sliderDotted__dotted"></div>`)
          PANEL.insertAdjacentHTML('beforeend',`<div onmouseover = "showSlide(${i},${cardCount})" class="dotted"></div>`)
        }
  });
 
})



function showSlide(number,cardNumber)
{
// удалить класс у всех точек
  PANELDOTTED[cardNumber].querySelectorAll('.sliderDotted__dotted').forEach(element => {
    element.classList.remove('active')
  })
    // находим все точки, /выбираем нужную по ее индексу, /добавляем класс active
    PANELDOTTED[cardNumber].querySelectorAll('.sliderDotted__dotted')[number].classList.add('active')
    TEST[cardNumber].style.transform =`translateX(-${number*100}%)`
  }
 
  CATALOG.addEventListener('mouseover',function(Event){
    let target = Event.target
    if(document.querySelector('.catalog')){
      
      const checkValue = Event.target.parentNode.previousElementSibling 
          // console.log(Event.target.parentNode)

          if ( !checkValue?.classList.contains('slider__line') )
          {
            let value = CATALOG.querySelectorAll('.slider__line[style^="transform"]')
            value.forEach(element=>{
              element.style.transform =`translateX(0%)` //= ""
            })
            // setTimeout(()=>{
            //   console.log('Событие произошло')
            //   value.forEach(element=>{
            //     element.style.transform =`translateX(0%)` //= ""
            //   })
            // },2000) //,4000)
          }
      }

  })



