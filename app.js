const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')



const app = express()

app.set('view engin', 'ejs')




app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())



app.get('/create', (req,res) => {
    res.render('create.ejs')
})


app.get('/', (req,res) =>{
    res.render('home.ejs')
})



mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        app.listen(4545, () => {
            console.log(' Application is ready to serve on port 4545');
        })
    })
    .catch( e => {
        console.log(e);
    })