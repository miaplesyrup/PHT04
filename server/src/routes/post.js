const express = require("express");
const router = express.Router();
const { createPost, getAllPosts, getPost, updatePost, deletePost } = require("../controllers/post");
const { authMiddleware } = require("../middleware/authMiddleware");

//CRUD post-create
router.post("/", authMiddleware, createPost);
router.get("/", getAllPosts);
router.get("/:id", getPost);
router.patch("/:id", authMiddleware, updatePost);
router.delete("/:id", authMiddleware, deletePost);


module.exports = router;