import express from 'express'
import booksRouter from './routes/books.js'

const app = express()
const PORT = 5000

// Middleware to handle JSON data
app.use(express.json())

// Here we are creating a base route
app.use('/api/v1/books', booksRouter)

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`)
})
