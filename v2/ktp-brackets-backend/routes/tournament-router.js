const express = require('express');

const TournamentCtrl = require('../controllers/tournament-ctrl');

const router = express.Router();

router.post('/tournament', TournamentCtrl.createTournament)
router.put('/tournament/:id', TournamentCtrl.updateTournament)
router.delete('/tournament/:id', TournamentCtrl.deleteTournament)
router.get('/tournament/:id', TournamentCtrl.getTournamentById)
router.get('/tournaments', TournamentCtrl.getTournaments)

module.exports = router;
