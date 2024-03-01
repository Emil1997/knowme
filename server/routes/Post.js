const router = require('express').Router()
const Post = require('../models/Post')

router.get('/', async(req, res) => {
    try {
        const posts = await Post.find()
        res.status(200).json(posts)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/:id', async(req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.post('/', async(req, res) => {
    const newPost = new Post(req.body)

    try {
        const savedPost = await newPost.save()
        res.status(200).json(savedPost)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.put('/:id', async(req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
        
        res.status(200).json(updatedPost)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.delete('/:id', async(req, res) => {
    const post = await Post.findById(req.params.id)
    
    try {
        await post.delete()
        res.status(200).json("Post has been deleted.")
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router
