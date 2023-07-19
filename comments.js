// Create server web comments
// Date: 12/03/2021
// Programmer: Bruno Oliveira - Version 1.0

const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');
const config = require('../config/database');

// Add comment
router.post('/add', (req, res, next) => {
    let newComment = new Comment({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });
    Comment.addComment(newComment, (err, comment) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to add comment' });
        } else {
            res.json({ success: true, msg: 'Comment added' });
        }
    });
});

// Get all comments
router.get('/get', (req, res, next) => {
    Comment.getComments((err, comments) => {
        if (err) throw err;
        res.json(comments);
    });
});

// Delete comment
router.delete('/delete/:id', (req, res, next) => {
    Comment.deleteComment(req.params.id, (err, comment) => {
        if (err) throw err;
        res.json({ success: true, msg: 'Comment deleted' });
    });
});

module.exports = router;