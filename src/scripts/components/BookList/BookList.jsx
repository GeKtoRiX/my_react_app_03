import Book from './Book'
import booksArr from '../../data/booksArr'
const BookList = () => {
  return (
    <section className='bookList'>
      {booksArr.map((book) => {
        return (
          <Book {...book} key={book.id}>
          </Book>
        )
      })}
    </section>
  )
}

export default BookList
