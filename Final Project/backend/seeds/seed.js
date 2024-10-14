// seed.js
const mongoose = require('mongoose');
const connectDB = require('../db');
const Course = require('../models/LearningMaterial');

const courses = [
  {
    title: "Web Development Bootcamp",
    description: "A comprehensive bootcamp covering front-end and back-end web development.",
    topics: [
      {
        title: "HTML & CSS",
        subtopics: [
          {
            _id: new mongoose.Types.ObjectId(), // Add unique ID for each subtopic
            title: "Introduction to HTML",
            contents: [
              {
                _id: new mongoose.Types.ObjectId(), // Add unique ID for each content item
                content_type: "text",
                content: "Learn the basics of HTML.",
                completed: false, // Track completion status
              },
            ],
          },
          {
            _id: new mongoose.Types.ObjectId(),
            title: "CSS Fundamentals",
            contents: [
              {
                _id: new mongoose.Types.ObjectId(),
                content_type: "text",
                content: "Understanding CSS selectors and properties.",
                completed: false,
              },
            ],
          },
        ],
      },
      {
        title: "JavaScript",
        subtopics: [
          {
            _id: new mongoose.Types.ObjectId(),
            title: "JavaScript Basics",
            contents: [
              {
                _id: new mongoose.Types.ObjectId(),
                content_type: "text",
                content: "An overview of JavaScript syntax and features.",
                completed: false,
              },
              {
                _id: new mongoose.Types.ObjectId(),
                content_type: "video",
                content: "https://example.com/js-basics",
                completed: false,
              },
            ],
          },
          {
            _id: new mongoose.Types.ObjectId(),
            title: "DOM Manipulation",
            contents: [
              {
                _id: new mongoose.Types.ObjectId(),
                content_type: "text",
                content: "Learn how to manipulate the Document Object Model.",
                completed: false,
              },
              {
                _id: new mongoose.Types.ObjectId(),
                content_type: "quiz",
                content: "Quiz on DOM manipulation.",
                completed: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Data Science with Python",
    description: "An in-depth course on data analysis and machine learning using Python.",
    topics: [
      {
        title: "Python Basics",
        subtopics: [
          {
            _id: new mongoose.Types.ObjectId(),
            title: "Python Syntax and Semantics",
            contents: [
              {
                _id: new mongoose.Types.ObjectId(),
                content_type: "text",
                content: "Introduction to Python programming.",
                completed: false,
              },
            ],
          },
          {
            _id: new mongoose.Types.ObjectId(),
            title: "Data Structures in Python",
            contents: [
              {
                _id: new mongoose.Types.ObjectId(),
                content_type: "text",
                content: "Exploring lists, tuples, and dictionaries.",
                completed: false,
              },
              {
                _id: new mongoose.Types.ObjectId(),
                content_type: "quiz",
                content: "Quiz on Python data structures.",
                completed: false,
              },
            ],
          },
        ],
      },
      {
        title: "Machine Learning",
        subtopics: [
          {
            _id: new mongoose.Types.ObjectId(),
            title: "Introduction to Machine Learning",
            contents: [
              {
                _id: new mongoose.Types.ObjectId(),
                content_type: "text",
                content: "Basic concepts of machine learning.",
                completed: false,
              },
              {
                _id: new mongoose.Types.ObjectId(),
                content_type: "video",
                content: "https://example.com/ml-intro",
                completed: false,
              },
            ],
          },
          {
            _id: new mongoose.Types.ObjectId(),
            title: "Supervised Learning",
            contents: [
              {
                _id: new mongoose.Types.ObjectId(),
                content_type: "text",
                content: "Understanding supervised learning techniques.",
                completed: false,
              },
              {
                _id: new mongoose.Types.ObjectId(),
                content_type: "quiz",
                content: "Quiz on supervised learning.",
                completed: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Machine Learning Fundamentals",
    description: "A beginner-friendly course on the basics of machine learning and its applications.",
    topics: [
      {
        title: "Introduction to Machine Learning",
        subtopics: [
          {
            _id: new mongoose.Types.ObjectId(),
            title: "What is Machine Learning?",
            contents: [
              {
                _id: new mongoose.Types.ObjectId(),
                content_type: "text",
                content: "Overview of machine learning concepts.",
                completed: false,
              },
              {
                _id: new mongoose.Types.ObjectId(),
                content_type: "video",
                content: "https://example.com/ml-overview",
                completed: false,
              },
            ],
          },
          {
            _id: new mongoose.Types.ObjectId(),
            title: "Types of Machine Learning",
            contents: [
              {
                _id: new mongoose.Types.ObjectId(),
                content_type: "text",
                content: "Understanding supervised, unsupervised, and reinforcement learning.",
                completed: false,
              },
              {
                _id: new mongoose.Types.ObjectId(),
                content_type: "quiz",
                content: "Quiz on types of machine learning.",
                completed: false,
              },
            ],
          },
        ],
      },
      {
        title: "Data Preprocessing",
        subtopics: [
          {
            _id: new mongoose.Types.ObjectId(),
            title: "Data Cleaning Techniques",
            contents: [
              {
                _id: new mongoose.Types.ObjectId(),
                content_type: "text",
                content: "How to clean and prepare data for analysis.",
                completed: false,
              },
              {
                _id: new mongoose.Types.ObjectId(),
                content_type: "video",
                content: "https://example.com/data-cleaning",
                completed: false,
              },
            ],
          },
          {
            _id: new mongoose.Types.ObjectId(),
            title: "Feature Engineering",
            contents: [
              {
                _id: new mongoose.Types.ObjectId(),
                content_type: "text",
                content: "Creating features for better model performance.",
                completed: false,
              },
              {
                _id: new mongoose.Types.ObjectId(),
                content_type: "quiz",
                content: "Quiz on feature engineering.",
                completed: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Mobile App Development",
    description: "Learn to build mobile applications using React Native.",
    topics: [
      {
        title: "React Native Basics",
        subtopics: [
          {
            _id: new mongoose.Types.ObjectId(),
            title: "Setting Up the Environment",
            contents: [
              {
                _id: new mongoose.Types.ObjectId(),
                content_type: "text",
                content: "Guide to set up React Native environment.",
                completed: false,
              },
              {
                _id: new mongoose.Types.ObjectId(),
                content_type: "video",
                content: "https://example.com/react-native-setup",
                completed: false,
              },
            ],
          },
          {
            _id: new mongoose.Types.ObjectId(),
            title: "Components and Styling",
            contents: [
              {
                _id: new mongoose.Types.ObjectId(),
                content_type: "text",
                content: "Understanding React Native components and styling.",
                completed: false,
              },
              {
                _id: new mongoose.Types.ObjectId(),
                content_type: "quiz",
                content: "Quiz on components and styling.",
                completed: false,
              },
            ],
          },
        ],
      },
      {
        title: "Building Real-World Applications",
        subtopics: [
          {
            _id: new mongoose.Types.ObjectId(),
            title: "Navigation in React Native",
            contents: [
              {
                _id: new mongoose.Types.ObjectId(),
                content_type: "text",
                content: "Learn about navigation libraries.",
                completed: false,
              },
              {
                _id: new mongoose.Types.ObjectId(),
                content_type: "video",
                content: "https://example.com/react-native-navigation",
                completed: false,
              },
            ],
          },
          {
            _id: new mongoose.Types.ObjectId(),
            title: "State Management",
            contents: [
              {
                _id: new mongoose.Types.ObjectId(),
                content_type: "text",
                content: "Understanding state management in React Native.",
                completed: false,
              },
              {
                _id: new mongoose.Types.ObjectId(),
                content_type: "quiz",
                content: "Quiz on state management.",
                completed: false,
              },
            ],
          },
        ],
      },
    ],
  },
];

const seedDatabase = async () => {
  await connectDB(); // Ensure the database is connected
  try {
    await Course.deleteMany({}); // Clear existing data
    await Course.insertMany(courses); // Insert sample courses
    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    mongoose.connection.close(); // Close the connection
  }
};

seedDatabase();
