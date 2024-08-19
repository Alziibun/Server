const express = require('express')
const path = require('path')
const ejs = require('ejs')
const app = express()


// use EJS: Embeded JS templating as our visual engine
app.engine('.html', require('ejs').__express);
app.set('views', path.join(__dirname, 'views'));

// index page
app.get('/', (req, res) => {
    res.send("Chat")
})

app.listen(8080, () => {
    console.log(`Listening at`)
})