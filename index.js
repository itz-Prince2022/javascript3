const express=require('express');
const app=express();

/*app.get('',(req,res)=>{
    let htmltext="<a href='/home'>Home</a><a href='/about'>About</a><a href='/contact'>Contact</a>";
    res.send(htmltext);
});
app.get('/home',(req,res)=>{
    res.send("Welcome on Home Page");
});
app.get('/about',(req,res)=>{
    res.send("About Page");
});
app.get('/contact',(req,res)=>{
    res.send("Contact Page");
});
app.listen(5000,()=>{
    console.log('Server is Running');
})*/


/*
//new code
app.get('/fetchdata',(req,res)=>{
    let data=[
        {'sid':101,'sname':'Prince','scourse':'B.tech'},
        {'sid':102,'sname':'Manoj','scourse':'M.tech'},
        {'sid':103,'sname':'Ishat','scourse':'B.tech'},
        {'sid':104,'sname':'Alok','scourse':'PSD'},
    ]
    res.send(data);
});

app.listen(5000,()=>{
    console.log('Server is Running');
});
*/


//new code
app.get('/addreq',(req,res)=>{
    let htmltext="<form action='/addres'>FirstNumber<input type='text' name='t1'/><br />Second Number<input type='text' name='t2'/><br /><input type='submit' value='Add' name='b1'/></form"
    res.send(htmltext);
});

//this line is written by me
app.get('/prince',(req,res)=>{
    let htmlInExpress="<h1>Hello Prince Patel</h1>"
    res.send(htmlInExpress);
});//

app.get('/addres',(req,res)=>{
    let a=parseInt(req.query.t1);
    let b=parseInt(req.query.t2);
    let c=a+b;
    res.send("sum="+c);
});

app.listen(5000,()=>{
    console.log('Server is Running');
});