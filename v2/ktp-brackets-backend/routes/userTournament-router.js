const express = require('express');

const UserTournamentCtrl = require('../controllers/userTournament-ctrl');

const router = express.Router();

router.post('/userTournament', UserTournamentCtrl.createUserTournament)
router.get('/tournamentsByUser/:id', UserTournamentCtrl.getTournamentsByUser)
router.get('/usersByTournament/:id', UserTournamentCtrl.getUsersByTournament)

module.exports = router;
