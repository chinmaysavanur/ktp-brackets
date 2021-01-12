const UserTournament = require('../models/userTournament-model');

createUserTournament = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a movie',
        })
    }

    const userTournament = new UserTournament(body)

    if (!userTournament) {
        return res.status(400).json({ success: false, error: err })
    }

    userTournament
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: userTournament._id,
                message: 'UserTournament created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'UserTournament not created!',
            })
        })
}

getTournamentsByUser = async (req, res) => {
    await UserTournament.find({ _id: req.params._id }, (err, userTournament) => {
        if (err) {
            return res.status(400).json({ success: false, error: err})
        }

        if (!userTournament) {
            return res
                .status(404)
                .json({ success: false, error: `Tournament not found`})
        }
    }).catch(err => console.log(err))
}

getUsersByTournament = async (req, res) => {
    await UserTournament.find({ tournamentID: req.params.tournamentID }, (err, userTournament) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!userTournament) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }
    }).catch(err => console.log(err))
}

module.exports = {
    createUserTournament,
    getTournamentsByUser,
    getUsersByTournament,
}