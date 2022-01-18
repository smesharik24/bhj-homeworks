let secCount = 59; //длительность счетчика
let a = setInterval(minusTime, 1000);
function minusTime(){
    if (secCount !=0)//пока счетчик не обнулился уменьшаем на 1
    {
        secCount -= 1;
        console.log (secCount);//вывод счетчика в консоль
        timer.innerText = ${timer};
    }
    else //если счетчик обнулился - вывод сообщения
    {
        clearInterval(a);   //очистка интервала
        alert ("Вы победили в конкурсе!");//вывод сообщения
    }
}

//счетчик не бежит....((   