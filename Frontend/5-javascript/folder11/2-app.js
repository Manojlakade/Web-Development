function savetodb(data,success,failure){
    let internetspeed=Math.floor(Math.random()*10 + 1);
    if (internetspeed>4){
        success();
    }else{
        failure();
    }
};


savetodb('manoj',()=>{
    console.log('success1 saved succesfully');
    savetodb('sangam',()=>{
        console.log('success2 saved succesfully');
        savetodb('tushar',()=>{
            console.log('success3 saved succesfully');
        },()=>{
            console.log('failure3 data was not saved');

        })
    },()=>{
        console.log('failure2 data was not saved');
    })

},()=>{
    console.log('failure1 data was not saved')
})