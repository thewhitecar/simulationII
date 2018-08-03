require('dotenv').config()

const express = require('express')
    , bodyParser = require('body-parser')
    , controller = require('./controller')
    , massive = require('massive')

const app = express();

const { SERVER_PORT, CONNECTION_STRING} = process.env

app.use(bodyParser.json())


app.listen(SERVER_PORT, () => console.log('Listening on port: ', SERVER_PORT))