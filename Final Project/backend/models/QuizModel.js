const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true,
    },
    enrollmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Enrollment',
        required: true,
    },
    totalScore: { 
        type: Number, 
        required: true 
    }, // Total score for the quiz
    obtainedScore: { 
        type: Number, 
        required: true 
    }, // Score obtained by the user
    date: {
        type: Date,
        default: Date.now,
    },
});

const QuizResult = mongoose.model('QuizResult', quizSchema);
module.exports = QuizResult;
