const mongoose = require('mongoose');
const connectDB = require('../db'); // Ensure this path is correct
const Quiz = require('../models/Quiz'); // Adjust the path if necessary
const Course = require('../models/LearningMaterial'); // Ensure this is the correct path

// Sample questions
const sampleQuestions = [
  {
    questionText: "What is the capital of France?",
    questionType: "multiple-choice",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    questionText: "Is the Earth flat?",
    questionType: "true-false",
    correctAnswer: "false",
  },
  {
    questionText: "What is the largest mammal?",
    questionType: "short-answer",
    correctAnswer: "Blue Whale",
  },
  {
    questionText: "Explain the theory of relativity.",
    questionType: "essay",
    correctAnswer: "A brief explanation of Einstein's theory.",
  },
  // Add more sample questions as needed
];

const generateQuiz = (courseId) => {
  return {
    courseId,
    title: `Quiz for Course ${courseId}`,
    description: "This quiz is designed to assess your understanding of the course material.",
    questions: sampleQuestions.map((question) => ({
      ...question,
      points: Math.floor(Math.random() * 5) + 1, // Random points between 1 and 5
    })),
  };
};

const seedQuizzes = async () => {
  await connectDB(); // Connect to the database

  const courses = await Course.find(); // Fetch all courses
  if (courses.length === 0) {
    console.log("No courses found.");
    return;
  }

  // Generate quizzes for each course
  const quizzes = [];
  courses.forEach(course => {
    for (let i = 0; i < 10; i++) {
      quizzes.push(generateQuiz(course._id)); // Use course ID to associate quizzes
    }
  });

  // Insert quizzes into the database
  await Quiz.insertMany(quizzes);
  console.log(`${quizzes.length} quizzes seeded successfully!`);
  
  // Close the database connection
  mongoose.connection.close();
};

seedQuizzes().catch(err => {
  console.error(err);
  mongoose.connection.close();
});
