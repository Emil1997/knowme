const router = require('express').Router();
const { getCategories, createCategory } = require('../controllers/Category')

router.route('/').get(getCategories);
router.route('/').post(createCategory);

module.exports = router;