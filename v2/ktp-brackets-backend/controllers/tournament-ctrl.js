const Tournament = require('../models/tournament-model');

createTournament = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a tournament',
        })
    }

    const tournament = new Tournament(body)

    if (!tournament) {
        return res.status(400).json({ success: false, error: err })
    }

    tournament
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: tournament._id,
                message: 'Tournament created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Tournament not created!',
            })
        })
}