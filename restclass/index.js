const express=require("express");
const app=express();
const path=require('path');
const { v4: uuidv4 } = require('uuid');

app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set('views',path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
const port=8080;

let posts=[
    {
        id:uuidv4(),
        username:"manoj",
        content:' i love finding my intrest'
    },
    {
        id:uuidv4(),
        username:'om',
        content:' i love showing my intrest'
    },
    {
        id: uuidv4(),
        username:'tushar',
        content:' i love giving my intrest'
    }
];

app.get('/posts', (req,res)=>{
    res.render('index.ejs',{posts});    
})

app.get("/posts/new",(req,res) => {
    res.render('new.ejs')
})

app.post('/posts',(req,res) => {
    let id=uuidv4();
    let {username,content}=req.body;
    posts.push({id,username,content});
    res.redirect('/posts')
})

app.get('/posts/:id',(req,res) => {
    let {id} =req.params;
    const post=posts.find((p)=> id===p.id)
    console.log(post);
    res.send('working');

})

app.delete('/posts/:id',(req,res)=>{
    let {id} =req.params;
    const post=posts.find((p)=> id===p.id);
    res.send('DELETE SUCCESS')

})

app.listen(port, () => {
    console.log("server started")
})