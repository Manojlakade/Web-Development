let arr=[1,2,3];
let square=arr.map((nums)=>(nums*nums));
let sum=arr.reduce((acc,el)=>(acc+el));

let avg=sum/arr.length;
console.log(avg);

let newarr=arr.map((num)=>(num+5));
console.log(newarr);

let string=["manoj","monika"];
let newstring=string.map((string)=>(string.toUpperCase()));
console.log(newstring);