let input=document.createElement('input');
let button=document.createElement('button');

button.innerText="click me";


document.querySelector('body').append(input);
document.querySelector('body').append(button);
button.setAttribute("id","btn");
input.setAttribute("placeholder","username");

let btn=document.querySelector("#btn");
btn.classList.add("btnstyle");


let h1=document.createElement('h1');
h1.innerHTML="<u>DOM Practice</u>";
document.querySelector("body").append(h1);


let p=document.createElement('p');
p.innerHTML=("apna college <b> delta </b> practice")
document.querySelector("body").append(p);
