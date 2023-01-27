const express = require('express')
const path = require('path')
const { engine } = require ('express-handlebars');
const route = require('./routes/index')
const app = express();
app.use(express.urlencoded({
    extended:true
}))//middleware convert data of method post(body) to express(gửi qua form with method post)

app.use(express.json())//gửi with javascript
app.use(express.static(path.join(__dirname, 'public')))
app.engine('hbs', engine({extname:'.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources/views'));

//route init
route(app)
app.listen(3000,()=>{
    console.log('server is running')
})