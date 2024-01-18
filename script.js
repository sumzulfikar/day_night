var greeting=document.getElementById("greeting-text");
var themeSwitcher=document.getElementById("theme-switcher");

var container=document.querySelector(".container")
var mode="light";
console.log(themeSwitcher);

themeSwitcher.addEventListener("change",function(){

    if (themeSwitcher.checked){
        mode="dark";
        container.setAttribute("style","background-color:#121212; color:white");
    }
    else{
        mode="light";
        container.setAttribute("style","background-color:white");
    }
        

});
