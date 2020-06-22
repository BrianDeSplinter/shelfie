require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const ctrl = require('./controller')
const SERVER_PORT = 4000
const {CONNECTION_STRING} = process.env

app.use(express.json())

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log('db connected')
})

app.get('/api/inventory', ctrl.getProducts)
app.post('/api/product', ctrl.addProduct)
app.delete('/api/product/:id', ctrl.deleteProduct)
app.put('/api/product/:id', ctrl.editProduct)


app.listen(SERVER_PORT, () =>
    console.log(`Listening on port ${SERVER_PORT}`)
)