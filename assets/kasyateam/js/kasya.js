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
