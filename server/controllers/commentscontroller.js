const router = require('express').Router();
const {models} = require('../models');
const validateSession = require('../middleware/validate-session');

router.get('/comment/:post_id', (req, res) => {
    models.CommentsModel.findAll({
        where: {
            post_id: req.params.post_id
        }
    })
        .then(comments => res.status(200).json(comments))
        .catch(err => res.json({
            err: err
        }))
})

router.post('/comment', validateSession, (req, res) => {

    function htmlEntities(str) {
        return String(str).replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');
    }

    const created_at = new Date();
    const newComment = req.body.comment;

    models.CommentsModel.create({
        post_id: newComment.post_id,
        user_id: req.user.id,
        content: htmlEntities(newComment.content),
        code: htmlEntities(newComment.code),
        commenter_username: req.user.username,
        created_at: created_at
    })
        .then(comment => {
            res.json(comment);
        });
});

// UPDATE
router.put('/comment/:comment_id', validateSession, (req, res) => {

    function htmlEntities(str) {
        return String(str).replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');
    }

    const updated_at = new Date();
    const updateComment = req.body.post;

    models.CommentsModel.update({
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
router.delete('/comment/:comment_id', validateSession, (req, res) => {
    models.CommentsModel.destroy({
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