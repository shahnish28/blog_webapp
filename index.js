import express from "express";
import bodyParser from "body-parser";

const port = 3000;
const app = express();

let blogs = [];
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/create", (req, res) => {
  res.render("create.ejs");
});

app.post("/submit", (req, res) => {
  const newBlog = { title: req.body["Title"], content: req.body["textarea"] };
  blogs.push(newBlog);
  console.log(blogs);
  res.redirect("/view");
});

app.get("/view", (req, res) => {
  res.render("view.ejs", { blogs: blogs });
});

app.listen(port, () => {
  console.log(`port is running on ${port}`);
});
