const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongo = require('mongodb');

//import secrets from 'secrets.js';

const db = require('./db');
const userTournamentRouter = require('../routes/userTournament-router');
const tournamentRouter = require('../routes/tournament-router');
const authRouter = require('../routes/auth-router');
const exampleProtectedRoute = require('../routes/exampleProtectedRoute');

const app = express();

app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => res.send('Hello!'));

app.use('/api/userTournament', userTournamentRouter);

app.use('/api/tournament', tournamentRouter);

app.use('/api/auth', authRouter);

app.use('/api/protected', exampleProtectedRoute);

app.listen(8000, () => console.log('Listening on port 8000'));
