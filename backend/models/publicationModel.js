const mongoose = require('mongoose');
const schema = mongoose.Schema;
const userModelNew = require('./userModelNew');

const publicationSchema = new schema({
    'id': {
        type: Number,
        required: true,
        unique: true
    },
    'student_id': {
        type: Number,
        required: true,
        ref: userModelNew,
        field: 'id'
    },
    'title': {
        type: String,
        required: true,
    },
    'year': {
        type: Number,
        required: true,
    }
},{timestamps: true});

module.exports = mongoose.model('publicationModel', publicationSchema);