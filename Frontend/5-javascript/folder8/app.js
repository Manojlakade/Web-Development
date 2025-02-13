let arr=[1,2,3,4,5];
let printt=function(el){
    console.log(el);
}
arr.forEach((el)=>{
    console.log(el);
});
arr.forEach(printt);

let newarr=arr.map(function(el){
    return el*2;
});
console.log(newarr);
let newarrr=arr.filter((el)=>{
    return el%2==0;

});
console.log(newarrr);
let newar=arr.reduce((result,el)=>(result+el));
console.log(newar);

let max=arr.reduce((max,el)=>{
    if (el>max){
        return el;
    }else{
        return max;
    }
});
console.log(max);
