const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    enrolledAt: { type: Date, default: Date.now },
    progress: { type: Number, default: 0 }, // Percentage of course completed
    completed: { type: Boolean, default: false }, // Course completion status
    totalCount: { type: Number, default: 0 }, // Total number of subtopics in the course
    completedCount: { type: Number, default: 0 }, // Number of completed subtopics
    isQuizTaken: { type: Boolean, default: false },
    isParticipated: { type: Boolean, default: false },
    isFeedback: { type: Boolean, default: false },
    quizScores: { type: Number, default: 0 },
});

const Enrollment = mongoose.model('Enrollment', enrollmentSchema);

module.exports = Enrollment;
