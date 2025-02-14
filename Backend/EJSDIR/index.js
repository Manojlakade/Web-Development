const express=require('express');
const app=express();
const port=8080;
const path=require('path');


app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'/views'));

app.get('/', (req,res) => {
    res.render("home")
});

app.get('/hello', (req,res) => {
    res.send("hellllllo");
    
})

app.get('/rolldice', (req,res) => {
    const value=(Math.floor(Math.random()*6)+1)
    res.render("rolldice.ejs",{value});
});

app.get('/ig/:username', (req,res) => {
    const {username }=req.params;
    const instadata=require('./data.json');
    console.log(instadata);
    const data =instadata[username];
    console.log(data);
    if(data){
        res.render("instagram.ejs",{data});
    }else{
        res.render("noacc.ejs")
    }
    
    
});


app.listen(port, ()=> {
    console.log('listening on port ${8080}');
});