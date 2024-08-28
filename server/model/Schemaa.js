const mongoose = require('mongoose');

const srdataSchema = new mongoose.Schema({
    rollno: { type: String, required: true },
    name: { type: String, required: true },
    emailid: { type: String, required: true },
    course: { type: String, required: true },
    year: { type: String, required: true },
    branch: { type: String, required: true },
    gender: { type: String, required: true },    
    mobileno: { type: String, required: true },
}, {
    timestamps: true,
});

const Srrr = mongoose.model("Srrr", srdataSchema);

module.exports = { Srrr };