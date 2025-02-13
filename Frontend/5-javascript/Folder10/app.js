let btn=document.querySelectorAll("buttons");
 ("button");
//btn.onclick=hello;
//btn.onclick=sayName;
btn.onmouseenter=function ()
{
    console.log("mouse entered")
}

function hello(){
    console.log("button was clicked");
}
function sayName(){
    console.log("manoj college");
}


btn,addEventListener("click",hello);
btn,addEventListener("click",sayName);