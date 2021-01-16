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

updateTournament = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Tournament.findOne({ _id: req.params.id }, (err, tournament) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Tournament not found!',
            })
        }
        tournament.tournamentName = body.tournamentName
        tournament.tournamentType = body.tournamentType
        tournament.numParticipants = body.numParticipants
        tournament.startDate = body.startDate
        tournament.endDate = body.endDate
        tournament.isActive = body.isActive
        tournament.signUpOpen = body.signUpOpen
        tournament.tournamentID = body.tournamentID
        tournament
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: tournament._id,
                    message: 'Tournament updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Tournament not updated!',
                })
            })
    })
}

deleteTournament = async (req, res) => {
    await Tournament.findOneAndDelete({ _id: req.params.id }, (err, tournament) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!tournament) {
            return res
                .status(404)
                .json({ success: false, error: `Tournament not found` })
        }

        return res.status(200).json({ success: true, data: tournament })
    }).catch(err => console.log(err))
}

module.exports = {
    createTournament,
    updateTournament,
    deleteTournament,
}