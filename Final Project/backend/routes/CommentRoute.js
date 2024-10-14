const express = require('express');
const router = express.Router();
const {
    addComment,
    getComments,
    getAllComments
} = require('../controllers/CommentController');

// Route to add a new comment
router.post('/addcomments', addComment);

// Route to get all comments for a specific course
router.get('/comment/course/:courseId', getComments);

router.get('/admin/all/comments',getAllComments)


module.exports = router;


