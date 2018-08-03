require('dotenv').config()

const express = require('express')
    , bodyParser = require('body-parser')
    , controller = require('./controller')
    , massive = require('massive')

const app = express();

const { SERVER_PORT, CONNECTION_STRING} = process.env

app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
}).catch(err => {
    console.log('DB Connection Error:', err)
})




//ENDPOINTS

app.get('/api/houses', controller.getHouses)
app.post('/api/houses', controller.postHouse)
app.delete('/api/houses/:id', controller.deleteHouse)



app.listen(SERVER_PORT, () => console.log('Listening on port: ', SERVER_PORT))