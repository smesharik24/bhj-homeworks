let clicker__counter = 0; //начальное значение счетчика
const element = document.getElementById("clicker__counter");//запрос элемента по атрибуту
const image = document.getElementById("cookie");//запрос элемента по атрибуту
function changeSizes() { //функция изменения размера картинки
        image.width = 100;
        image.height = 100;
        };
        image.onclick = changeSizes; //применение функции изменения размеров картинки
element.onclick = function() {//фунция счетчика кликов
    clicker__counter += 1;
    console.log('Клик!');
    
    };

//ничего не работает....((