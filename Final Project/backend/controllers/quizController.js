const Enrollment = require("../models/EnrollmentModel");
const QuizResult = require("../models/QuizModel"); // Import the QuizResult model

// Submit quiz
exports.submitQuiz = async (req, res) => {
  const { userId, courseId, enrollmentId, totalScore, obtainedScore } =
    req.body;

  try {
    // Create a new quiz result entry
    const quizResult = new QuizResult({
      userId,
      courseId,
      enrollmentId,
      totalScore, // Total score for the quiz
      obtainedScore, // Score obtained by the user
    });

    // Save the quiz result to the database
    await quizResult.save();

    // Update the enrollment
    await Enrollment.findByIdAndUpdate(
      enrollmentId,
      {
        isQuizTaken: true,
        quizScores: obtainedScore, // Update with the marks obtained
      },
      { new: true }
    );

    return res.status(201).json({ message: "Quiz submitted successfully!" });
  } catch (error) {
    console.error("Error submitting quiz:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Function to fetch previous quiz results
exports.getQuizResults = async (req, res) => {
  const { userId, courseId, enrollmentId } = req.query;
  console.log("Fetching quiz results for:", { userId, courseId, enrollmentId });
  try {
    const quiz = await QuizResult.findOne({ userId, courseId, enrollmentId });

    if (!quiz) {
      return res.status(404).json({ message: "Quiz results not found." });
    }

    res.status(200).json(quiz);
  } catch (error) {
    console.error("Error fetching quiz results:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

// Get all quiz results with user and course details
exports.getQuizzes = async (req, res) => {
  try {
    const quizResults = await QuizResult.find()
      .populate('userId', 'username') // Get only the username
      .populate('courseId', 'title');  // Get only the title

    return res.status(200).json(quizResults);
  } catch (error) {
    console.error("Error fetching all quiz results:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

