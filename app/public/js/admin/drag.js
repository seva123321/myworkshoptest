// dragenter - когда обьект в дроп зоне
// dragleave - когда обьект вышел за пределы зоны
// dragover - срабатывает постоянно, когда элемент находится в дроп зоне
// drop - срабатывает когда отпустили обьект над зоной

const DRAGZONE = document.getElementById('DRAGZONE');

// список разрешенных типов
const T_IMAGES = ['png','jpg','webp','svg','jpeg'];
const T_OTHER = ['7z','rar','zip'];
// все типы
const T_ALL = T_IMAGES.concat(T_OTHER);

const PREVIEW = document.querySelector('.drag__preview');
// const UPLOAD = document.querySelector('.drag__upload');
const UPLOAD = document.getElementById('uploadFiles');
const MAXSIZE = (20 * 1024)*1024 // 20Mb но получаем в байтах

// коллекция файлов
let files = null;

DRAGZONE.addEventListener('dragenter',function(Event){
    // отмена стандартного поведения
    Event.preventDefault();
    // console.log('dragenter');
})
DRAGZONE.addEventListener('dragleave',function(Event){
    // отмена стандартного поведения
    Event.preventDefault();
    // console.log('dragleave');
})
DRAGZONE.addEventListener('dragover',function(Event){
    // отмена стандартного поведения
    Event.preventDefault();
    // console.log('dragover');
})

DRAGZONE.addEventListener('drop',function(Event){
    // отмена стандартного поведения
    Event.preventDefault();

    // очистка
    PREVIEW.innerHTML = '';


    if (files)
    {

        // преобразуем объект в массив
        let newFiles = Event.dataTransfer.files;
        Array.from(newFiles).forEach(file=>{
            let add = true;
            // получили расширение файла
            let getType = file.name.split('.').pop()

            files.forEach(oldFile=>{
                // если новый файл уже был в старом массиве
                if (file.size === oldFile.size ) add = false
            })

            // если файл не найден тогда добавляем в массив
            if (add && T_ALL.includes(getType) && file.size <= MAXSIZE ) files.push(file);
        })
    }
    else
    {
        files = Array.from(Event.dataTransfer.files)
    }
        // console.log('files drop' + files);


        files.forEach(file=>{
            // получили расширение файла
            let getType = file.name.split('.').pop()
            // если такой тип разрешен и размер файла не превышает MAXSIZE
                // если это изображение
                if (T_IMAGES.includes(getType))
                {
                    // генерируем ссылку на изображение
                    let url = URL.createObjectURL(file);

                    PREVIEW.insertAdjacentHTML('afterbegin',`
                    <div class="preview__item">
                        <img class="preview__image" src="${url}">
                        <div onclick="deleteFile(${file.size})">
                            <i class="fa fa-2x fa-times"></i>
                        </div>
                    </div>
                    `)
                }

                if (T_OTHER.includes(getType))
                {
                    PREVIEW.insertAdjacentHTML('afterbegin',`
                    <div class="preview__item preview__default">
                        <div onclick="deleteFile(${file.size})">
                            <i class="fa fa-2x fa-times"></i>
                        </div>
                        <div>
                            <div class="text-center fs-1" style="line-height:75px; text-align:center">${getType}</div>
                        </div>
                        <div>${file.name}</div>
                    </div>
                    `)
                }
        })
    if(!document.querySelector(`button[onclick="upload()"]`)){
        PREVIEW.insertAdjacentHTML('afterend',
        `<div class="upload-btn">
            <button class="upload" onclick="upload()">Добавить товар</button>
        </div>`);
    }
})


UPLOAD.addEventListener('input',function(Event) {

    Event.preventDefault();

    // очистка
    PREVIEW.innerHTML = '';
   // объект со всеми загруженными через input файлами
    let inputFile = document.getElementById('uploadFiles').files
    console.log('check');
    console.log(inputFile);

    
    if (files)
    {
        // преобразуем объект в массив
        Array.from(inputFile).forEach(file=>{
            let add = true;
            // получили расширение файла
            let getType = file.name.split('.').pop()
            console.log(files);
            files.forEach(oldFile=>{
                // если новый файл уже был в старом массиве
                if (file.size === oldFile.size ) add = false
            })

            // если файл не найден тогда добавляем в массив
            if (add && T_ALL.includes(getType) && file.size <= MAXSIZE ) files.push(file);
        })
    }
    else
    {
        files = Array.from(inputFile);
    }


        files.forEach(file=>{
            // получили расширение файла
            let getType = file.name.split('.').pop()
            // если такой тип разрешен и размер файла не превышает MAXSIZE
                // если это изображение
                if (T_IMAGES.includes(getType))
                {
                    // генерируем ссылку на изображение
                    let url = URL.createObjectURL(file);

                    PREVIEW.insertAdjacentHTML('afterbegin',`
                    <div class="preview__item">
                        <img class="preview__image" src="${url}">
                        <div onclick="deleteFile(${file.size})">
                            <i class="fa fa-2x fa-times"></i>
                        </div>
                    </div>
                    `)
                }
            // если не img то отображаем заглушку
                if (T_OTHER.includes(getType))
                {
                    PREVIEW.insertAdjacentHTML('afterbegin',`
                    <div class="preview__item preview__default">
                        <div onclick="deleteFile(${file.size})">
                            <i class="fa fa-2x fa-times"></i>
                        </div>
                        <div>
                            <div class="text-center fs-1" style="line-height:75px; text-align:center">${getType}</div>
                        </div>
                        <div>${file.name}</div>
                    </div>
                    `)
                }
        })
    if(!document.querySelector(`button[onclick="upload()"]`)){
        PREVIEW.insertAdjacentHTML('afterend',`<div class="upload-btn"><button class="upload" onclick="upload()">Добавить товар</button></div>`);
    }

})


function upload()
{
    let data = new FormData(createProduct);

    files.forEach((file,idx)=>data.append(`file${idx}`,file));
    fetch(`/upload`,{
        method:"POST",
        body: data
    })
    .then(Response=>Response.json())
    .then(data => {
        console.log(data)
        if (data.success) {
            createProduct.reset();
            files = [];
            PREVIEW.innerHTML = '';
            alert('Товар успешно добавлен!')
        } 
        else
        {
            alert(data.result[0]);
        }

    })
    .catch(err=>console.warn(err));
}


function deleteFile(fSize)
{
    files.forEach((file,idx)=>{
        if (file.size === fSize) 
        {
            if (files.splice(idx,1) )
            {
                document.querySelector(`div[onclick="deleteFile(${fSize})"]`).closest('.preview__item').remove();      
            }              
        }
    })
        if (files.length === 0) {
            document.querySelector(`button[onclick="upload()"]`).remove();         
        }
    console.log(files);
}