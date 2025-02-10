let url='https://catfact.ninja/fact';

let btn=document.querySelector('button');
btn.addEventListener('click',()=>{
    console.log('button clicked'); 
    getfact();
})

async function getfact() {
    try{
    let res= await axios.get(url);
    console.log(res.data.fact);
    document.querySelector('p').innerText=res.data.fact;
    
    }
    catch (e){
        console.log('error',e); 
    }
    
}