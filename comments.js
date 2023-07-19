// web server: localhost:3000
// Description: This file handles all the routes for comments
//              It also handles the logic for creating comments and 
//              updating comments
//***********************************************************

//***********************************************************
// External Imports
//***********************************************************
const express = require('express');
const router = express.Router();
const { Comment } = require('../models');
const { User } = require('../models');
const { Post } = require('../models');
const { authMiddleware } = require('../middleware/auth');

//***********************************************************
// Get all comments
//***********************************************************
router.get('/', authMiddleware, async (req, res) => {
    try {
        const comments = await Comment.findAll();
        res.json(comments);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

//***********************************************************
// Get all comments for a post
//***********************************************************
router.get('/post/:post_id', authMiddleware, async (req, res) => {
    try {
        const comments = await Comment.findAll({
            where: { post_id: req.params.post_id },
            include: [
                {
                    model: User,
                    attributes: ['username', 'id']
                }
            ]
        });
        res.json(comments);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

//***********************************************************
// Get all comments for a user
//***********************************************************
router.get('/user/:user_id', authMiddleware, async (req, res) => {
    try {
        const comments = await Comment.findAll({
            where: { user_id: req.params.user_id },
            include: [
                {
                    model: Post,
                    attributes: ['id', 'title', 'content']
                }
            ]
        });
        res.json(comments);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

//***********************************************************
// Get a comment by id
//***********************************************************
router.get('/:id', authMiddleware, async (req, res) => {
    try {
        const comment = await Comment.findByPk(req.params.id);
        res.json(comment);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});
