const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())

const categories = require('./data/categories.json')

app.get('/', (req, res) => {
    res.send('News API Running')
})

app.get('/news-categories', (req, res) => {
    res.json(categories)
})

app.listen(port, () => {
    console.log('news24 live client server running on port ', port)
})

