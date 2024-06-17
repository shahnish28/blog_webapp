import express from "express";
import bodyParser from "body-parser";

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/create", (req, res) => {
  res.render("create.ejs");
});
app.get("/view", (req, res) => {
  res.render("view.ejs");
});
app.post("/submit", (req, res) => {
  const title = req.body["Title"];
  const content = req.body["textarea"];
  res.render("view.ejs", { title: title, content: content });
});

app.listen(port, () => {
  console.log(`port is running on ${port}`);
});
