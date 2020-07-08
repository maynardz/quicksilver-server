const router = require('express').Router();
const db = require('../config/db');
const validateSession = require('../middleware/validate-session')

// GET
router.get('/post', (req, res) => {

    function htmlEntities(str) {
        return String(str).replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');
    }

    db.posts.findAll({
        include: [
            {
                model: db.comments
            }
        ]
    })
        .then(posts => {
            const resObj = posts.map(post => {
                // tidy up post data
                return Object.assign(
                    {},
                    {
                        post_id: post.id,
                        user_id: post.user_id,
                        user_username: post.user_username,
                        title: post.title,
                        language: post.language,
                        content: htmlEntities(post.content),
                        upvote: post.upvote,
                        code: htmlEntities(post.code),
                        created_at: post.created_at,
                        comments: post.comments.map(comment => {

                            // tidy up comment data
                            return Object.assign(
                                {},
                                {
                                    comment_id: comment.id,
                                    post_id: comment.post_id,
                                    commenter_username: comment.commenter_username,
                                    content: comment.content
                                }
                            )
                        })
                    }
                )
            })
            res.json(resObj)
        })
})


// POST
router.post('/post', validateSession, (req, res) => {

    const created_at = new Date();
    const newPost = req.body.post;

    function htmlEntities(str) {
        return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    db.posts.create({
        user_id: req.user.id,
        user_username: req.user.username,
        language: newPost.language,
        title: newPost.title,
        content: htmlEntities(newPost.content),
        upvote: newPost.upvote,
        code: htmlEntities(newPost.code),
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
router.put('/post/:post_id', validateSession, (req, res) => {

    const updated_at = new Date();
    const updatePost = req.body.post;

    function htmlEntities(str) {
        return String(str).replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');
    }

    db.posts.update({
        title: updatePost.title,
        content: updatePost.content,
        upvote: updatePost.upvote,
        language: updatePost.language,
        code: htmlEntities(updatePost.code),
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
router.delete('/post/:post_id', validateSession, (req, res) => {
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
router.get('/post/:language', validateSession, (req, res) => {
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