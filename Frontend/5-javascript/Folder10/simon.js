let gameseq=[];
let userseq=[];

let start = false;
let level=0;

let h2=document.querySelector('h2');

let btns=['yellow','green','purple','red'];

function levelUP()
{
    userseq=[];
    level++;
    h2.innerText=`Level:${level}`;
    let randIndx=Math.floor(Math.random() * 4);
    let randcolor=btns[randIndx];
    let randbtn=document.querySelector(`.${randcolor}`);
    btnFlash(randbtn);
    gameseq.push(randcolor);
    console.log(gameseq);

}

document.addEventListener('keypress',function(){
    if (start==false)
    {
        start=true;
        console.log('game started');
        levelUP();
    }
    
});

function btnFlash(btn)
{
    btn.classList.add("flash");
    setTimeout((function (){
        btn.classList.remove("flash");
    }),250);
};

function checkAns(idxx){
    let idx=idxx;
    if (userseq[idx]===gameseq[idx]){
        if (userseq.length==gameseq.length){
            setTimeout(levelUP,1000);
        }
        
    }else{
        h2.innerText=('game over!press any key to restart game');
        reset();
    }
}

function btnPress(event){
    let btn=event.target;
    btnFlash(btn);
    console.log('button pressed');
    let user=btn.getAttribute('id');
    userseq.push(user);
    checkAns(userseq.length-1);
}

let allBtns=document.querySelectorAll('.btn');

for(btn of allBtns){
    btn.addEventListener('click',btnPress)
}

function reset(){
    start=false;
    userseq=[];
    gameseq=[];
    level=0;
}