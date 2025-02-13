const arrayaverage=(arrr)=>{
    let total=0;
    for(let number of arr)
    {
        total+=number;
    };
    return total/arrr.length;

};

let arr=[1,2,3];
console.log(arrayaverage(arr));
let n=4;
const iseven=(n)=>n%2==0;
