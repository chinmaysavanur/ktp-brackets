import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { MongoClient } from 'mongodb';

import secrets from 'secrets.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/hello', async (req, res) => {
    try {
        // const articleName = req.params.name;

        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
        const db = client.db('ktp-tourney');

        // const articleInfo = await db.collection('articles').findOne({ name : articleName});
        // res.status(200).json(articleInfo);

        client.close();

    } catch (error) {
        res.status(500.json({ message : 'Error connecting to DB', error}));

    });
app.post('/hello', (req, res) => res.send('Hello!'));

app.listen(8000, () => console.log('Listening on port 8000'));