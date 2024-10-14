const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true }, 
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
    enrollmentId:{type:mongoose.Schema.Types.ObjectId,ref:'Enrollment',required:true},
    overallSatisfaction: { type: Number, min: 1, max: 5, required: true }, 
    contentQuality: { type: Number, min: 1, max: 5, required: true }, 
    instructorEffectiveness: { type: Number, min: 1, max: 5, required: true },
    comments: { type: String }, 
}, { timestamps: true });

module.exports = mongoose.model('CourseFeedback', FeedbackSchema);

