const express = require('express')
const path = require('path')
const { engine } = require ('express-handlebars');

const app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.engine('hbs', engine({extname:'.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources/views'));

app.get('/home',(req,res)=>{
    res.render('home')
})
app.get('/news',(req,res)=>{
    res.render('news')
})

app.listen(3000,()=>{
    console.log('server is running')
})