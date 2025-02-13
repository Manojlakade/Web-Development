h1=document.querySelector('h1');

function colorchange(color,delay,){//,nextcolorchange
    return new Promise((resolved,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolved('color changed')
        },delay); 

    })
    
    
}



// colorchange('red',1000,()=>{
//     colorchange('green',1000,()=>{
//         colorchange('orange',1000,()=>{
//             colorcahnge('blue',1000);
//         });
//     });
// });

colorchange('red',1000)
    .then(()=>{
        console.log('red color was applied');
        return colorchange('orange',1000);
    })
    .then(()=>{
        console.log('ORANGE COLOR WAS APPLIED');
    });
