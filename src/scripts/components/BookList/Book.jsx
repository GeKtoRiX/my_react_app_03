const Book = (props) => {
  const { img, title, author, description } = props

  const clickHandler = (title) => {
    console.log(title)
  }

  const hoverHandler = (title) => {
    console.log(title)
  }

  return (
    <>
      <article onMouseOver={() => hoverHandler(title)} className='book'>
        <div className='book-img'>
          <img src={img} alt='book-img' />
        </div>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <p>{description}</p>
        <button
          type='button'
          onClick={() => clickHandler(title)}
          className='button-std'
        >
          click me
        </button>
      </article>
    </>
  )
}

export default Book
