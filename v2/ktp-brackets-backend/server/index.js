const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongo = require('mongodb')
//import { MongoClient } from 'mongodb';

//import secrets from 'secrets.js';

const db = require('./db')
const userRouter = require('../routes/user-router')

const app = express()

app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => res.send('Hello!'));

app.use('/api', userRouter)

app.listen(8000, () => console.log('Listening on port 8000'));