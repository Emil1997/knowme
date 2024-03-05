const router = require('express').Router()
const { getPosts, getLatestPosts, getPost, createPost, updatePost, deletePost } = require('../controllers/Post')

router.route('/').get(getPosts);
router.route('/latest').get(getLatestPosts);
router.route('/').post(createPost);
router.route('/:id').get(getPost);
router.route('/:id').put(updatePost);
router.route('/:id').delete(deletePost);

module.exports = router
