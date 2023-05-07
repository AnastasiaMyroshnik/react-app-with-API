import { useParams, Link } from 'react-router-dom';

import useBuildOneItem from '../../hooks/buildOneItem';
import Loading from '../loading/Loading';
import Error from '../error/Error';

import './oneBookPage.scss';

const OneBookPage = () => {
  const { bookId } = useParams();
  const { item, load, errorStatus } = useBuildOneItem(`https://anapioficeandfire.com/api/books/${bookId}`);
  const imgArr = ['https://static.yakaboo.ua/media/cloudflare/product/webp/352x340/3/4/34_3.jpg', 'https://content2.rozetka.com.ua/goods/images/big/196211348.jpg', 'https://bookling.ua/upload/iblock/504/a_song_of_ice_and_fire_book3_a_storm_of_swords_hb.jpeg', 'https://georgerrmartin.com/notablog/wp-content/uploads/2023/04/a-knight-of-the-seven-kingdoms-1.jpg', 'https://ubd.ua/image/cache/catalog/products/anglijskij-yazik/harpercollins/9780007459476-500x500.jpg', 'https://georgerrmartin.com/notablog/wp-content/uploads/2023/04/a-knight-of-the-seven-kingdoms-1.jpg', 'https://georgerrmartin.com/notablog/wp-content/uploads/2023/04/a-knight-of-the-seven-kingdoms-1.jpg', 'https://content.rozetka.com.ua/goods/images/big/196211298.jpg', 'https://upload.wikimedia.org/wikipedia/en/f/f6/The_Princess_and_the_Queen.jpg', 'https://awoiaf.westeros.org/images/4/45/Rouges_novella.jpg', 'https://bookseller.com.ua/image/catalog/pictures/products/english/9780007580910_247.jpg', 'https://georgerrmartin.com/notablog/wp-content/uploads/2023/04/a-knight-of-the-seven-kingdoms-1.jpg'];
  const error = errorStatus ? <Error /> : null;
  const loading = load ? <Loading /> : null;
  const content = !(load || errorStatus) && item ? <Displayed book={item} imgArr={imgArr} id={bookId}/> : null;
  return (
    <>
      {error}
      {content}
      {loading}
    </>
  )
}

const Displayed = ({book,imgArr, id}) => {
  const { name, authors, numberOfPages, publisher, country, characters, povCharacters } = book;

  return (
    <div className="book">
      <img className='book__img' src={imgArr[id-1]} alt="book"/>
      <div className="book__info">
        <h2 className="book__name">
          {name}
        </h2>
        <div className="book__descr">
          {authors}
        </div>
        <div className="book__descr">
          {numberOfPages} pages
        </div>
        <div className="book__descr">
          Publisher by {publisher} <br />
          {country}
        </div>
        <div className="book__descr">
          Charecters: {characters.length + povCharacters.length}
        </div>
      </div>
        <Link to="/books" className="book__back">Back to all</Link>
    </div>
  )
}

export default OneBookPage;