const express = require('express');
    env = require('./server/config/env');
    db = require('./server/config/db');
    users = require('./server/controllers/userscontroller');
    posts = require('./server/controllers/postscontroller');
    comments = require('./server/controllers/commentscontroller');
    validateSession = require('./server/middleware/validate-session');
    headers = require('./server/middleware/headers');

const app = express();
const PORT = env.PORT;

app.use(express.json());
app.use(headers);

app.use('/auth', users);
// app.use(validateSession);
app.use('/posts', posts);
app.use('/comments', comments);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log('Express listening on port:', PORT);
  });
});

// git test