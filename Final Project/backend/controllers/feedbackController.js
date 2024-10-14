const CourseFeedback = require('../models/FeedbackModel');
const Enrollment = require("../models/EnrollmentModel");
const User = require('../models/UserModel');
const Course = require('../models/CourseModel');

// Create Feedback for a Course
exports.createFeedback = async (req, res) => {
    const {userId, courseId,enrollmentId, overallSatisfaction, contentQuality, instructorEffectiveness, comments } = req.body;
    // Ensure all required fields are present
    if (!userId || !enrollmentId || !courseId || overallSatisfaction == null || contentQuality == null || instructorEffectiveness == null) {
        return res.status(400).json({ message: 'All fields are required.' });
    }
    try {
        const newFeedback = new CourseFeedback({
            courseId,
            userId,
            enrollmentId,
            overallSatisfaction,
            contentQuality,
            instructorEffectiveness,
            comments,
        });

        await newFeedback.save();
        res.status(201).json({ message: 'Feedback submitted successfully', feedback: newFeedback });
         // Update the enrollment
    await Enrollment.findByIdAndUpdate(
        enrollmentId,
        {
          isFeedback: true,
        },
        { new: true }
      );
    } catch (err) {
        res.status(400).json({ message: 'Failed to submit feedback', error: err.message });
    }
};

// Fetch all Feedback
exports.getAllFeedback = async (req, res) => {
    try {
        const feedbackList = await CourseFeedback.find()
            .populate({ path: 'courseId', select: 'title' }) // Populate course title
            .populate({ path: 'userId', select: 'username' }) // Populate user name
            .populate({ path: 'enrollmentId' }); // Optionally populate enrollment details if needed
        
        res.status(200).json(feedbackList);
    } catch (err) {
        res.status(400).json({ message: 'Failed to fetch feedback', error: err.message });
    }
};
