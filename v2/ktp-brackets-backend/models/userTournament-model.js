const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserTournament = new Schema(
    {
        name: { type: String, required: true },
        tournamentID: {type: String, required: false},
  },
  { timestamps: true }
);

module.exports = mongoose.model('userTournament', UserTournament);
