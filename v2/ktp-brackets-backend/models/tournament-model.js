const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Tournament = new Schema(
    {
        tournamentName: { type: String, required: true },
        tournamentType: { type: String, required: true },
        numParticipants: { type: Integer, required: true },
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: true },
        isActive: { type: Boolean, required: true },
        signUpOpen: { type: Boolean, required: true },
        tournamentID: { type: String, required: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Tournament', Tournament);
