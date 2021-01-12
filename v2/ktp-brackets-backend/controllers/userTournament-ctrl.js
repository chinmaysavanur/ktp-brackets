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

module.exports = {
    createUserTournament,
}