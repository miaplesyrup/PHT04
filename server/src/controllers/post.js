const Post = require("../models/post");

// Create Post
const createPost = async (req, res) => {
  const { title, author, description, likes, comments } = req.body;

  try {
    const post = await Post.create({
      title,
      author,
      description,
      likes,
      comments,
    });
    res.status(200).json(post)
  } catch (error) {
    res.status(500).json({ error: error.message});
  }
};


// Get All Posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();

    res.status(200).json({
      count: posts.length,
      posts,
    });
  } catch {
    res.status(400).json({ error: error.message });
  }
};

// Get Specific Post
const getPost = async (req, res) => {
  const {id} = req.params;

  try {
    const post = await Post.findById({_id: id});
    if(!post) {
      res.status(404).json({ error: "No post found"})
    };
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update Post
const updatePost = async (req, res) => {
  const {id} = req.params;

  try {
    const post = await Post.findByIdAndUpdate(
      {_id: id}, 
      {...req.body},
      {new: true, runValidators: true}
      );

      if(!post) {
        res.status(404).json({ 
        error: "No matching post found"
      });
      }

      res.status(200).json({
        message: "The post has been successfully updated.",
        post,
      })
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Post
const deletePost = async (req, res) => {
  const {id} = req.params;
  try {
    const post = await Post.findByIdAndDelete({_id: id});
    if(!post) {
      res.status(404).json({
        error: "No matching post found"
      });
    }
    res.status(200).json({
      message: "The post has been successfully deleted.",
    })
  } catch {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {createPost, getAllPosts, getPost, updatePost, deletePost};