const router = require('express').Router()
const { getPosts, getPost, createPost, updatePost, deletePost } = require('../controllers/Post')

router.route('/').get(getPosts);
router.route('/').post(createPost);
router.route('/:id').get(getPost);
router.route('/:id').put(updatePost);
router.route('/:id').delete(deletePost);

module.exports = router
