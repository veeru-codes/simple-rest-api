import books from '../data.js'

// GET: GET ALL BOOKS
const getAllBooks = (req, res) => {
  res.status(200).json({
    success: true,
    length: books.length,
    data: books,
  })
}

// GET: GET BOOK BY ISBN
const getBookByISBN = (req, res) => {
  const { isbn } = req.params

  // Finding the book based on input isbn
  const book = books.find((book) => book.isbn === Number(isbn))

  if (!book) {
    return res.status(404).json({
      success: false,
      msg: `Requested book with ISBN ${isbn} not found`,
    })
  }

  return res.status(200).json({
    success: true,
    data: book,
  })
}

// POST: CREATE BOOK
const createBook = (req, res) => {
  const data = req.body

  // Checking whether the data is valid or not
  if (Object.keys(data).length === 0)
    return res
      .status(400)
      .json({ success: false, msg: 'Please provide valid data' })

  // Pushing the data to books array
  books.push(data)

  return res.json({
    success: true,
    length: books.length,
    data: books,
  })
}

// PATCH: UPDATE BOOK BY ISBN
const updateBook = (req, res) => {
  const { isbn } = req.params
  const data = req.body

  let book = books.find((book) => book.isbn === Number(isbn))

  if (!book) {
    return res.status(404).json({
      success: false,
      message: `Requested book with ISBN ${isbn} not found`,
    })
  }

  // Updating book based on isbn
  const newBooks = books.map((book) => {
    if (book.isbn === Number(isbn)) {
      book = data
    }
    return book
  })

  return res.json({
    success: true,
    message: 'Book updated',
    data: newBooks,
  })
}

// DELETE: DELETE BOOK BY ISBN
const deleteBook = (req, res) => {
  const { isbn } = req.params

  let book = books.find((book) => book.isbn === Number(isbn))

  if (!book) {
    return res.status(404).json({
      success: false,
      message: `Requested book with ISBN ${isbn} not found`,
    })
  }

  const newBooks = books.filter((book) => book.isbn !== Number(isbn))

  return res.json({
    success: true,
    message: 'Book deleted',
    data: newBooks,
  })
}

export { getAllBooks, getBookByISBN, createBook, updateBook, deleteBook }
