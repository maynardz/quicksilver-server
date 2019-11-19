const router = require('express').Router();
const db = require('../config/db');

router.post('/comment', (req, res) => {

    console.log(req);

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


module.exports = router;