import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

const API_URL = "http://localhost:3100";

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static files from the 'public' directory
app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    const posts = response.data;
    console.log(posts);
    res.render("index.ejs", { posts });
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts" });
  }
});

app.get("/post", (req, res) => {
  res.render("post.ejs", { heading: "New Post", submit: "Create Post" });
});

app.post("/blog/post", async (req, res) => {
  try {
    const response = await axios.post(`${API_URL}/posts`, req.body);
    console.log(response.data);
    res.redirect("/");
  } catch (error) {
    res.status(500).json({ message: "Error creating post" });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
