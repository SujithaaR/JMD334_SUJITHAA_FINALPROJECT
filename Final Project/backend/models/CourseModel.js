const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  topics: [
    {
      title: String,
      subtopics: [
        {
          title: String,
          contents: [
            {
              _id: mongoose.Schema.Types.ObjectId, // Add unique ID for each content item
              content_type: { type: String, enum: ['text', 'video', 'quiz'] },
              content: String,
              completed: { type: Boolean, default: false }, // Track if content is completed
            },
          ],
        },
      ],
    },
  ],
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;


