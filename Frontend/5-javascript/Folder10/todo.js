let input=document.querySelector("input");
let button=document.querySelector("button");
let ul= document.querySelector("ul");

function A(){
    let i=document.createElement('li');
    i.innerText=input.value;    
    ul.appendChild(i);
    let delbutton=document.createElement('button');
    delbutton.innerText='delete';
    delbutton.classList.add('delete');
    i.appendChild(delbutton);
    input.value='';

    
};

button.addEventListener('click',A);
ul.addEventListener('click',function(event){
    
    if(event.target.nodeName=='BUTTON')
    {
        let item=event.target.parentElement;
        
        item.remove();
        console.log('DELETED');

    }
    
});
 
