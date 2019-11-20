const router = require('express').Router();
const db = require('../config/db');

router.post('/comment', (req, res) => {

    const created_at = new Date();
    const newComment = req.body.comment;

    db.comments.create({
            post_id: newComment.post_id,
            content: newComment.content,
            commenter_username: req.user.username,
            created_at: created_at
        })
        .then(comment => {
            res.json(comment);
        });
});

// UPDATE
router.put('/comment/:comment_id', (req, res) => {

    const updated_at = new Date();
    const updateComment = req.body.post;

    db.comments.update({
        content: updateComment.content,
        updated_at: updated_at
    }, {
        where: {
            id: req.params.comment_id
        }
    })
    .then(comment => res.status(200).json(comment))
    .catch(err => res.json({
        error: err
    }))
})

// DELETE
router.delete('/comment/:comment_id', (req, res) => {
    db.comments.destroy({
        where: {
            id: req.params.comment_id
        }
    })
    .then(comment => res.status(200).json(comment))
    .catch(err => res.json({
        error: err
    }))
})

module.exports = router;