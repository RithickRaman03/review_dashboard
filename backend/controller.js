const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const getreviewerRoutes = require("./routes/getreviewer");
const getTodoListRoutes = require("./routes/todoList");
const feedback = require("./routes/feedback");
const comments = require("./routes/comment");

app.get("/translatorfeedback", feedback);
app.post("/store-feedback", feedback);
app.get("/getreviewer", getreviewerRoutes);
app.get("/getTodolist", getTodoListRoutes);
app.post("/store-comments", comments);
module.exports = app;
