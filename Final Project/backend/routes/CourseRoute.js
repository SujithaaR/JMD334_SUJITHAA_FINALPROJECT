const express = require('express');
const authMiddleware=require('../middleware/authMiddleware')
const { getAllCourses, getCourseById,createCourse} = require('../controllers/CourseController');
const router = express.Router();


// Route to get all courses
router.get('/courses', getAllCourses);

// Route to get a course by ID
router.get('/courses/:courseId', authMiddleware,getCourseById);

router.post('/more', createCourse);


module.exports = router;
