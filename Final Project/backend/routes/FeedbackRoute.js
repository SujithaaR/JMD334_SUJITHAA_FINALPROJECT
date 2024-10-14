const express = require('express');
const router = express.Router();
const { createFeedback ,getAllFeedback} = require('../controllers/FeedbackController');


// Route to give feedback on a course
router.post('/feedback/add',  createFeedback);

// Route to fetch all feedback
router.get('/all/feedbacks', getAllFeedback);

module.exports = router;
