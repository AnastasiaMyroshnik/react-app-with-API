import { useState, useEffect } from 'react';

import Service from '../../services/Service';
import Error from '../error/Error';
import Loading from '../loading/Loading';

import './booksList.scss';
import '../personageList/personageList.scss';

const BooksList = ({choosenUrl}) => {
  const [books, setBooks] = useState([]);
  const [load, setLoad] = useState(true);
  const [newBooksLoading, setNewBooksLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const [isEnd, setIsEnd] = useState(false);
  const service = new Service();

  useEffect(() => getData, []);

  const getData = (page) => {
    setNewBooksLoading(true);
    service.getAllBooks(page)
      .then(getLoadContent)
      .catch(getError)
  }

  const getLoadContent = (newBooks) => {
    if (newBooks.length < 6) {
      setIsEnd(true)
    }
    setBooks(books => [...books, ...newBooks]);
    setLoad(false);
    setNewBooksLoading(false);
    setPageNum(pageNum => pageNum + 1);
  }

  const getError = () => {
    setLoad(false);
    setErrorStatus(true);
  }
  
  const renderBooks = (data, img) => {
    const books = data.map((book, i) => {
      return (
        <li
          className="book__item"
          key={book.url.replace('https://www.anapioficeandfire.com/api/books/',
            '')}>
            <a href='#'>
            <img
              className="book__item-img"
              src={img[i]}
              alt="book" />
            <div className="book__item-name">{book.name}</div>
            </a>
        </li>
      )
    })
    return (
      <ul className="book__inner">
        {books}
      </ul>
    )
  }

  const imgArr = ['https://static.yakaboo.ua/media/cloudflare/product/webp/352x340/3/4/34_3.jpg', 'https://content2.rozetka.com.ua/goods/images/big/196211348.jpg', 'https://bookling.ua/upload/iblock/504/a_song_of_ice_and_fire_book3_a_storm_of_swords_hb.jpeg', 'https://georgerrmartin.com/notablog/wp-content/uploads/2023/04/a-knight-of-the-seven-kingdoms-1.jpg', 'https://ubd.ua/image/cache/catalog/products/anglijskij-yazik/harpercollins/9780007459476-500x500.jpg', 'https://georgerrmartin.com/notablog/wp-content/uploads/2023/04/a-knight-of-the-seven-kingdoms-1.jpg', 'https://georgerrmartin.com/notablog/wp-content/uploads/2023/04/a-knight-of-the-seven-kingdoms-1.jpg', 'https://content.rozetka.com.ua/goods/images/big/196211298.jpg', 'https://upload.wikimedia.org/wikipedia/en/f/f6/The_Princess_and_the_Queen.jpg', 'https://awoiaf.westeros.org/images/4/45/Rouges_novella.jpg', 'https://bookseller.com.ua/image/catalog/pictures/products/english/9780007580910_247.jpg', 'https://georgerrmartin.com/notablog/wp-content/uploads/2023/04/a-knight-of-the-seven-kingdoms-1.jpg']
  const loadedBooks = renderBooks(books, imgArr);
  const error = errorStatus ? <Error /> : null;
  const loading = load || newBooksLoading ? <Loading /> : null;
  const content = !(load || errorStatus) ? loadedBooks : null;
  const displayBtn = isEnd ? { display: 'none' } : null;

  return (
    <div className="book__wrapper">
      {error}
      {content}
      {loading}
      <button
        style={displayBtn}
        className="button button__personage button__long"
        disabled={newBooksLoading}
        onClick={() => getData(pageNum)}>
        <div className='btn-text'>load more</div>
      </button>
    </div>
  )
}

export default BooksList;