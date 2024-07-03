import express from "express";

const app = express();
const port = 3000;

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));
// Middleware to serve static files from the 'public' directory
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/post", (req, res) => {
  res.render("post.ejs");
});

app.post("/submit", (req, res) => {
  const { title, contentType, content, imgCaption, imgLink } = req.body;

  res.render("index.ejs", { title, contentType, content, imgCaption, imgLink });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
