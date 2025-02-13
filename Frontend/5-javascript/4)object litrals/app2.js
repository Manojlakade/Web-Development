const student={
    name:"manoj",
    math:79,
    english:69,
    science:59,
    getavg(){
        let average=(this.math +this.english +this.science)/3;
        console.log(average);   
    }

}
//try catch

console.log("helloworld");
console.log("helloworld");
console.log("helloworld");
try{
    console.log(a)

}catch{
    console.log("error a  is not defined")
}

console.log("helloworld2");
console.log("helloworld2");
console.log("helloworld2");

//ARROW FUNCTION
const sum= (a,b)=>{
    console.log(a+b);
}
const mult=(a,b)=>(a*b);
const hello=()=>{
};
setTimeout(()=>{console.log("hello world123");},4000);
let id=setInterval(()=>{console.log("hello guys subsiciribe");},2000);
