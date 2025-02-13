function savetodb(data){
    return new Promise((success,failure)=>{
        let internetspeed=Math.floor(Math.random()*10 + 1);
        if (internetspeed>4){
            success('success: data was saved');
        }else{
            failure('weak connection: data was not saved');
        }
    });
}


// savetodb('manoj')
// .then(()=>{
//     console.log('success1 :promise was resoolved')
//     savetodb('sangam').then(()=>{
//         console.log(' success2 promise was resoolved')
//     })
// })

// .catch(()=>{
//     console.log('promise was rejected')
// })


//IMPROVED VERSION
savetodb('manoj')
.then((result)=>{
    console.log('success1 :promise was resoolved')
    console.log('result :',result);
    return savetodb('sangam');
    })
    .then((result)=>{
        console.log('success2 data saved');
        console.log('result :',result);
        return savetodb('tushar');
    })
    .then((result)=>{
        console.log('success3 data saved');
        console.log('result :',result);
    })

.catch((error)=>{
    console.log('promise was rejected')
    console.log('error :',error);
})