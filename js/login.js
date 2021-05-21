var loginNav=document.getElementById("loginNav").getElementsByTagName("a");

for(var i=0;i<loginNav.length;i++){
    loginNav[i].onclick=function () {
       for(var j=0;j<loginNav.length;j++){
           loginNav[j].className="";
           document.getElementById("login"+j).style.display="none";
       }
       this.className="login-ch";
       document.getElementById("login"+this.getAttribute('index')).style.display="block";
    }
    loginNav[i].setAttribute('index',i);

}
