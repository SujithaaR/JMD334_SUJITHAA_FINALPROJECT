require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/UserRoute');
const learningMaterials=require('./routes/CourseRoute');
const discussion=require('./routes/CommentRoute')
const feedback=require('./routes/FeedbackRoute')
const courseRoutes=require('./routes/EnrollmentRoute');
const QuizResultRoute=require('./routes/QuizRoute')
const cors = require('cors');
const connectDB = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

// Use CORS middleware for all origins and all methods
app.use(cors());

// Connect to the database
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

// Use the authentication routes
app.use('/api', userRoutes);
app.use('/api', learningMaterials);
app.use('/api',discussion)
app.use('/api',feedback)
app.use('/api',courseRoutes)
app.use('/api',QuizResultRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
