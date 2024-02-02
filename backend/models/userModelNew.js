const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchemaNew = new schema({
    'id': {
        type: Number,
        required: true,
        unique: true
    },
    'email': {
        type: String,
        required: true,
    },
    'firstName': {
        type: String,
        required: true,
    },
    'lastName': {
        type: String,
        required: true,
    }
},{timestamps: true});

module.exports = mongoose.model('userModelNew', userSchemaNew);