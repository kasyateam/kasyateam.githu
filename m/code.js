var on = 0

//автопостройка шапки
document.head.innerHTML = '<meta http-equiv="X-UA-Compatible" content="IE=Edge"><meta name="viewport" content="width=device-width, initial-scale=1"><title></title><link rel="stylesheet" href="style.css">'

// Уведомления
if (on == 1){
    document.getElementById('info-1').innerHTML = 'Это Kasya UI!';
    document.getElementById('info-2').innerHTML = 'Ознакомьтесь с новым UI для мобильного приложения<br/>Здравствуйте, мы демонстрируем свой UI для наших приложений. Более подробно о Kasya UI вы можете узнать в нашем сообществе ВКонтакте.';    
}else{
    document.getElementById('info-1').innerHTML = 'На сегодня ничего...';
}

//K.Feed m
if (window.location.pathname == '/m/index'){

    document.title = 'K.Feed | Главная';
    document.getElementById('index-date').innerHTML = 'Добро пожаловать';
    document.getElementById('index-razdel').innerHTML = 'Выберите раздел :)';

}else if(window.location.pathname == '/m/feed'){

    document.title = 'K.Feed | Новости';

}else if(window.location.pathname == '/m/k-feed'){

    document.title = 'K.Feed';
        document.getElementById('info-1').innerHTML = 'Это важно';
        document.getElementById('info-2').innerHTML = 'Данный раздел доступен только в мобильной версии<br/> Наведите камеру на QR код и скачайте K.Feed!';
}else if(window.location.pathname == '/m/kasya-id'){

    document.title = 'K.Feed | Kasya ID';
 function reg() {
    document.getElementById('kasyaid').innerHTML = 'Для создания ключа, используется электронная почта и пароль. <br><br> Учтите, что мы можем удалить ваш аккаунт, если он выглядит подозрительно. Но перед этим, он будет заморожен. Если вы заметили, что ваш аккаунт не совершает вход и нарушена работа сервиса при совершенном входе, то сообщите в поддержку. <br/><br/>Обратите внимание, что для подтверждения пользователя, перед процессом восстановления, мы сбросим пароль, отправив на электронную почту сброс-ссылку.'  }
 function res() { 
    document.getElementById('kasyaid').innerHTML = 'Что делать, если вы забыли пароль? <br/><br/>При такой ситуации, так же обратитесь в поддержку, если вход не совершен. <br/><br/>Если у вас совершен вход, но чувствуете, что забыли пароль, то перейдите в раздел "Kasya ID", где можете запросить сброс-ссылку.'
}

}else if(window.location.pathname == '/m/kmp'){

    document.title = 'K.Feed | Курсы';

}else{

}


