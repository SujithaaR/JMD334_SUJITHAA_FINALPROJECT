const Course = require("../models/CourseModel");
const Enrollment=require('../models/EnrollmentModel');


// Controller to get all courses
const getAllCourses = async (req, res) => {
  console.log("fetching courses");

  try {
    const courses = await Course.find();
    // Fetch all courses
    return res.status(200).json(courses);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error fetching courses." });
  }
};

// Controller to get a course by ID
const getCourseById = async (req, res) => {
  const { courseId } = req.params; // Get course ID from request parameters

  try {
    const course = await Course.findById(courseId); // Fetch course by ID
    if (!course) {
      return res.status(404).json({ message: "Course not found." });
    }
    return res.status(200).json(course);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error fetching course." });
  }
};


const createCourse = async (req, res) => {
 
  try {
    const newCourse = new Course(req.body);
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (error) {
    console.error('Mongoose error:', error); // Log the full error
    res.status(500).json({ message: 'Error creating course', error });
  }
};



module.exports = {
  getAllCourses,
  getCourseById,
  createCourse,
}
