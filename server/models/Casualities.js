const mongoose = require('mongoose')

const casualitySchema = new mongoose.Schema({
    primarySynopsis: { type: [String] },
    patientName: { type: String },
    gender: { type: String },
    age: { type: String },
    bloodGroup: { type: String },
    checked: { type: Boolean, default: false },
    doctorIncharge: { type: String },
    injuryDetails: { type: mongoose.Schema.Types.ObjectId, ref: 'InjuryDetails' },
});

module.exports = mongoose.model('Casuality', casualitySchema);
