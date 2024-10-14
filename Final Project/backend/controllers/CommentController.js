// controllers/commentsController.js
const Comment = require("../models/CommentModel");
const Enrollment = require("../models/EnrollmentModel");

// Add a new comment
const addComment = async (req, res) => {
  const { userId, enrollmentId, courseId, content } = req.body;

  if (!userId || !enrollmentId || !courseId || !content) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const newComment = new Comment({ userId, enrollmentId, courseId, content });
    const savedComment = await newComment.save();
    res
      .status(201)
      .json({ message: "Comment added successfully.", comment: savedComment });
    // Update the enrollment
    await Enrollment.findByIdAndUpdate(
      enrollmentId,
      {
        isParticipated: true,
      },
      { new: true }
    );
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).json({ message: "Server error." });
  }
};

// Get all comments for a specific course
const getComments = async (req, res) => {
  const { courseId } = req.params;

  try {
    const comments = await Comment.find({ courseId }).populate(
      "userId",
      "username"
    ); // Populate user info
    res.status(200).json(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ message: "Server error." });
  }
};

// Fetch all comments
const getAllComments = async (req, res) => {
  try {
      const comments = await Comment.find()
          .populate('userId', 'username') // Only fetch the username
          .populate('courseId', 'title'); // Only fetch the course title

      res.status(200).json(comments);
  } catch (error) {
      console.error("Error fetching comments:", error);
      res.status(500).json({ message: "Server error." });
  }
};


module.exports = {
  addComment,
  getComments,
  getAllComments
};
