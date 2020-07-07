const router = require('express').Router();
const db = require('../config/db');

router.get('/comment/:post_id', (req, res) => {
    db.comments.findAll({
        where: {
            post_id: req.params.post_id
        }
    })
        .then(comments => res.status(200).json(comments))
        .catch(err => res.json({
            err: err
        }))
})

router.post('/comment', (req, res) => {

    function htmlEntities(str) {
        return String(str).replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');
    }

    const created_at = new Date();
    const newComment = req.body.comment;

    db.comments.create({
        post_id: newComment.post_id,
        content: newComment.content,
        code: htmlEntities(newComment.code),
        commenter_username: req.user.username,
        created_at: created_at
    })
        .then(comment => {
            res.json(comment);
        });
});

// UPDATE
router.put('/comment/:comment_id', (req, res) => {

    function htmlEntities(str) {
        return String(str).replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');
    }

    const updated_at = new Date();
    const updateComment = req.body.post;

    db.comments.update({
        content: updateComment.content,
        code: htmlEntities(updateComment.code),
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