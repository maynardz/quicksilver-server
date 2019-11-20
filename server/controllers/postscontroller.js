const router = require('express').Router();
const db = require('../config/db');

// POST
router.post('/post', (req, res) => {

    const created_at = new Date();
    const newPost = req.body.post;

    db.posts.create({
            user_id: req.user.id,
            content: newPost.content,
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

module.exports = router;