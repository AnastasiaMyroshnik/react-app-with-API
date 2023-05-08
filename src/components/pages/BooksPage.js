import BooksList from "../booksList/BooksList";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import decoration from '../../resources/img/personages.png';

const BooksPage = () => {
  return (
  <>
    <ErrorBoundary>
      <BooksList />
    </ErrorBoundary>
    <img className="bg-decoration  bg-decoration--dn" src={decoration} alt="personages" />
  </>
  )
}

export default BooksPage;