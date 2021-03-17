const express = require("express");
const dbConnection = require("./server/config/db");
const env = require('./server/config/env');
const users = require("./server/controllers/userscontroller");
const posts = require("./server/controllers/postscontroller");
const comments = require("./server/controllers/commentscontroller");
const validateSession = require("./server/middleware/validate-session");
const headers = require("./server/middleware/headers");

const app = express();
const PORT = env.PORT;

app.use(express.json());
app.use(headers);

app.use("/auth", users);
// app.use(validateSession);
app.use("/posts", posts);
app.use("/comments", comments);

try {
  dbConnection
    .authenticate()
    .then(async () => await dbConnection.sync())
    .then(() => {
      app.listen(PORT, () => {
        console.log(`[Server]: App is listening on ${PORT}`);
      });
    });
} catch (err) {
  console.log(`[Server]: Server crashed`);
  console.log(err);
}