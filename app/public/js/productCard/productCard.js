let value = document.querySelector(".card__content");
let imgPole = document.querySelector('.card__pole');

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





let slider = document.querySelector(".card__pole"),
  sliderList = slider.querySelector(".card__arrow_pole"),
  sliderTrack = slider.querySelector(".card__imgWrapp"),
  slides = slider.querySelectorAll(".card__img"),
  arrows = slider.querySelector(".slider-arrows"),
  prev = arrows.children[0],
  next = arrows.children[1],
  slideWidth = slides[0].offsetWidth,
  slideIndex = 0,
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
  lastTrf = --slides.length * slideWidth,
  posThreshold = slides[0].offsetWidth * 0.35,
  trfRegExp = /([-0-9.]+(?=px))/,
  getEvent = function () {
    return event.type.search("touch") !== -1 ? event.touches[0] : event;
  },
  slide = function () {
    if (transition) {
      sliderTrack.style.transition = "transform .5s";
    }
    sliderTrack.style.transform = `translate3d(-${
      slideIndex * slideWidth
    }px, 0px, 0px)`;

    prev.classList.toggle("disabled", slideIndex === 0);
    next.classList.toggle("disabled", slideIndex === --slides.length);
  },
  swipeStart = function () {
    let evt = getEvent();

    if (allowSwipe) {
      transition = true;

      nextTrf = (slideIndex + 1) * -slideWidth;
      prevTrf = (slideIndex - 1) * -slideWidth;

      posInit = posX1 = evt.clientX;
      posY1 = evt.clientY;

      sliderTrack.style.transition = "";

      document.addEventListener("touchmove", swipeAction);
      // document.addEventListener("mousemove", swipeAction);
      document.addEventListener("touchend", swipeEnd);
      // document.addEventListener("mouseup", swipeEnd);

      sliderList.classList.remove("grab");
      sliderList.classList.add("grabbing");
    }
  },
  swipeAction = function () {
    let evt = getEvent(),
      style = sliderTrack.style.transform,
      transform = +style.match(trfRegExp)[0];

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

    if (isSwipe) {
      // запрет ухода влево на первом слайде
      if (slideIndex === 0) {
        if (posInit < posX1) {
          setTransform(transform, 0);
          return;
        } else {
          allowSwipe = true;
        }
      }

      // запрет ухода вправо на последнем слайде
      if (slideIndex === --slides.length) {
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
          slideIndex--;
        } else if (posInit > posX1) {
          slideIndex++;
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
        sliderTrack.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`;
      }
    }
    allowSwipe = false;
  },
  reachEdge = function () {
    transition = false;
    swipeEnd();
    allowSwipe = true;
  };

sliderTrack.style.transform = "translate3d(0px, 0px, 0px)";
sliderList.classList.add("grab");

sliderTrack.addEventListener("transitionend", () => (allowSwipe = true));
slider.addEventListener("touchstart", swipeStart);
// slider.addEventListener("mousedown", swipeStart);


arrows.addEventListener("click", function () {
  let target = event.target;

  if (target.classList.contains("next")) {
    slideIndex++;
  } else if (target.classList.contains("prev")) {
    slideIndex--;
  } else {
    return;
  }

  slide();
});



let  sliderTrackVert = slider.querySelector(".card__imgPannel"),
  slidesVert = slider.querySelectorAll(".cardImgPannel__img"),
  arrowsVert = slider.querySelector(".card__arrowArea"),
  prevVert = slider.querySelector(".fa-angle-up"),
  nextVert = slider.querySelector(".fa-angle-down"),
  transitionVert = true,
  slideHeight = slidesVert[0].offsetHeight   /*offsetWidth*/,
  slideIndexVert = 0 
  

  arrowsVert.addEventListener("click", function (Event) {
  let target = Event.target;

  if (target.classList.contains("next")) {
    slideIndexVert++;  
  } else if (target.classList.contains("prev")) {
    slideIndexVert--;
  } else {
    return;
  }

  slideVert();
});

let slideVert = function () {
  if (transition) {
    sliderTrackVert.style.transition = "transform .5s";
  }  
    sliderTrackVert.style.transform = `translate3d(0px,-${
    slideIndexVert * slideHeight
  }px, 0px)`;
  prevVert.classList.toggle("disabled", slideIndexVert === 0);
  nextVert.classList.toggle("disabled", slideIndexVert === --slidesVert.length);
}