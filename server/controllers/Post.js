const Post = require('../models/Post');

// @desc    Get all posts
// @route   GET /api/posts
const getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('category').sort({ created: 1 });
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
}

// @desc   Get last 3 posts
// @route  GET /api/posts/latest
const getLatestPosts = async(req, res) => {
    try {
        const posts = await Post.find().populate('category').limit(3).sort({ created: 1 });
        res.status(200).json(posts);
    } catch(err) {
        res.status(500).json(err);
    }
}

// @desc Get single post
// @route GET /api/posts/:id
const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate('category');
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
}

// @desc Create new post
// @route POST /api/posts
const createPost = async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
}

// @desc Update post
// @route PUT /api/posts/:id
const updatePost = async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, { new: true });
        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(500).json(err);
    }
}

// @desc Delete post
// @route DELETE /api/posts/:id
const deletePost = async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json('Post has been deleted...');
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = { getPosts, getLatestPosts, getPost, createPost, updatePost, deletePost }

