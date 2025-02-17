const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,

    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        required:true
    }

})

userSchema.pre('save' ,async function (next) {
    if(!this.isModified('passwords')) return next();
    this.passwords = await bcrypt.hash(this.passwords, 10);
    next();

})


const User = mongoose.model('User', userSchema);

module.exports = User;