import express from 'express'
import {
  getAllBooks,
  getBookByISBN,
  createBook,
  updateBook,
  deleteBook,
} from '../controllers/books.js'

// Creating a router
const booksRouter = express.Router()

// We can even simplify this by chaining the similar routes
// booksRouter.get('/', getAllBooks)
// booksRouter.post('/', createBook)
// booksRouter.get('/:isbn', getBookByISBN)
// booksRouter.patch('/:isbn', updateBook)
// booksRouter.delete('/:isbn', deleteBook)

booksRouter.route('/').get(getAllBooks).post(createBook)

booksRouter
  .route('/:isbn')
  .get(getBookByISBN)
  .patch(updateBook)
  .delete(deleteBook)

export default booksRouter
