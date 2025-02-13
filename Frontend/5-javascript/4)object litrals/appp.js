let max=prompt("enter maximum number");
let guess=prompt("enter your guess");
let Radm=(Math.floor(Math.random()*max)+1);
while(true){
    if( guess=="quit"){
        break;
    }
    if( guess==Radm){
        console.log("u r right");
        break;
    }
    else{
        console.log("u r wrong please try again");
    }
}
