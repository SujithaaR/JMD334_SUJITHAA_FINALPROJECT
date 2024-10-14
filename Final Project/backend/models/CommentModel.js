const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user who commented
    enrollmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Enrollment', required: true }, // Reference to the enrollment
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true }, // Reference to the course
    content: { type: String, required: true }, // Comment content
}, { timestamps: true }); 

module.exports = mongoose.model('Comment', CommentSchema);


