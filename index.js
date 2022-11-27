const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const todoRoutes = require('./routes/todos')

const PORT = process.env.PORT || 3000

const app = express()
const hbs = exphbs.create({
    dafaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')
app.use(express.urlencoded({ extended: false }))
app.use(todoRoutes)

async function start() {
    try {
        await mongoose.connect('mongodb+srv://EugeneKrokhmal:ujBi1kV6oUxXGZ0d@cluster0.5t43roz.mongodb.net/todos')
        app.listen(PORT, () => {
            console.log('server has been started');
        })
    } catch (e) {
        console.log(e);
    }
}

start()