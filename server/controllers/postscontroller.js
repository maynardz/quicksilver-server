const router = require('express').Router();
const db = require('../config/db');

// GET
router.get('/post', (req, res) => {
    db.posts.findAll()
    .then(post => res.status(200).json(post))
    .catch(err => res.json({
        error: err
    }))
})

// POST
router.post('/post', (req, res) => {

    const created_at = new Date();
    const newPost = req.body.post;

    console.log(req)

    db.posts.create({
            user_id: req.user.id,
            user_username: req.user.username,
            language: newPost.language,
            title: newPost.title,
            content: newPost.content,
            upvote: newPost.upvote,
            created_at: created_at
        })
        .then(post => {
            res.json(post);
        })
        .catch(err => {
            res.json(err)
        })
});

// UPDATE
router.put('/post/:post_id', (req, res) => {

    const updated_at = new Date();
    const updatePost = req.body.post;

    db.posts.update({
        content: updatePost.content,
        upvote: updatePost.upvote,
        updated_at: updated_at
    }, {
        where: {
            id: req.params.post_id
        }
    })
    .then(post => res.status(200).json(post))
    .catch(err => res.json({
        error: err
    }))
})

// DELETE
router.delete('/post/:post_id', (req, res) => {
    db.posts.destroy({
        where: {
            id: req.params.post_id
        }
    })
    .then(post => res.status(200).json(post))
    .catch(err => res.json({
        error: err
    }))
})

// GET ALL BY LANGUAGE
router.get('/post/:language', (req, res) => {
    db.posts.findAll({
        where: {
            language: req.params.language
        }
    })
    .then(post => res.status(200).json(post))
    .catch(err => res.json({
        error: err
    }))
})

module.exports = router;