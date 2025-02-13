const express=require('express');
const app=express();
const port=8080;
const path=require('path');

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
    let {username}=req.params;
    res.render("instagram.ejs",{ username });
});


app.listen(port, ()=> {
    console.log('listening on port ${8080}');
});