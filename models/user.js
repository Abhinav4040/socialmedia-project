const mongoose = require('mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    passwords: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

const User = mongoose.model('user',userSchema);

module.exports = User;