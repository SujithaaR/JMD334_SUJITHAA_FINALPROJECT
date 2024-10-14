const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    isAdmin: { type: Boolean, default: false },
    department: { 
        type: String, 
        enum: ['HR', 'Engineering', 'Marketing', 'Sales'], 
        default: 'HR' 
    },
    team: { 
        type: String, 
        enum: ['Team A', 'Team B', 'Team C', 'Team D'], 
        default: 'Team A' 
    },
    timeSpent: { 
        type: Number, 
        default: 0 // Store cumulative time spent in seconds
    },
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);


