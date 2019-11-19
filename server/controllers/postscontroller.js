const router = require('express').Router();
const db = require('../config/db');

router.post('/post', (req, res) => {

    console.log(req);

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


module.exports = router;