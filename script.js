var greeting=document.getElementById("greeting-text");
var themeSwitcher=document.getElementById("theme-switcher");

var container=document.querySelector(".container")
var mode="light";
//console.log(themeSwitcher);

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
var timehrs=dayjs().format("HH");
$("#hrs").text(timehrs);
var timemins=dayjs().format("mm");
$("#mins").text(timemins);
var timepart=dayjs().format("a");
$("#part").text(timepart);
//greeting based on hour of day
$("#greeting-text").text(greetings);
var greetingstxt="";
function greetings(){
if(timehrs<12){
    greetingstxt="Morning!";
    return greetingstxt;
}
else if(timehrs>=12&&timehrs<18){
    greetingstxt="Afternoon!";
    return greetingstxt;
}
else if(timehrs>=18){
    greetingstxt="Night!";
    return greetingstxt;
}
else
return;

}