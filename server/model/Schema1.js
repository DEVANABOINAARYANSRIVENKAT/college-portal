const mongoose = require('mongoose');

const csdataSchema = new mongoose.Schema({       

    course: { type: String, required: true },
    instructor: { type: String, required: true },
    time: { type: String, required: true },

}, {
    timestamps: true,
});

const Cs = mongoose.model("Cs", csdataSchema);

module.exports = { Cs };