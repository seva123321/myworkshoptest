const PARENT = document.querySelector('.header__search');
const SEARCH = PARENT.querySelector('input');
const RESULT = PARENT.querySelector('.header__result');
const DELAY = 250;
let timer = null;

SEARCH.addEventListener('keypress',Event => {
    clearTimeout(timer);
    timer = setTimeout(search,DELAY);
})

SEARCH.addEventListener('keyup',Event => {
    if (Event.keyCode == 8) {
        clearTimeout(timer);
        timer = setTimeout(search,DELAY);
    }
})


function search()
{
    RESULT.classList.add('d-none');
    if (SEARCH.value.length == 0) {
        return false;
    }
    fetch('core/handler.php',{
        method:'POST',
        headers: {
            'Content-Type':'application/x-www-form-urlencoded; charset=utf8mb4'
        },
        body:`action = search & text = ${SEARCH.value}`
    })
    .then(responce => responce.json())
    .then(city =>     searchRender(city))
    .catch(error =>   console.log(error))
}

function searchRender(cityes)
{
    RESULT.classList.remove('d-none');
    // очистка
    RESULT.innerHTML = '';
    // наполняем
    cityes.forEach(city => RESULT.insertAdjacentHTML('beforeend',` < div class = "header__city" > ${city.Name} < / div > `));
}