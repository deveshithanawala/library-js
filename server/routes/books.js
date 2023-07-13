const express = require('express');
const router = express.Router();

const {getAllBooks, getBooksById, createNewBooks, updateBookById, deleteBookById} = require('../controllers/books');
router.route('/').get(getAllBooks).post(createNewBooks);
router.route('/:id').get(getBooksById).patch(updateBookById).delete(deleteBookById)

module.exports = router;