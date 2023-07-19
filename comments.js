// Creat web app with express
const express = require('express');
const router = express.Router();
// Get model
const Comment = require('../models/comment');
const Post = require('../models/post');

// Get all comments
router.get('/', async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (err) {
        res.json({ message: err });
    }
});

// Get all comments of a post
router.get('/:postId', async (req, res) => {
    try {
        const comments = await Comment.find({ postId: req.params.postId });
        res.json(comments);
    } catch (err) {
        res.json({ message: err });
    }
});

// Get a comment by id
router.get('/comment/:commentId', async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.commentId);
        res.json(comment);
    } catch (err) {
        res.json({ message: err });
    }
});
