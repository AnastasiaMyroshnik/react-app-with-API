import BooksList from "../booksList/BooksList";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import decoration from '../../resources/img/personages.png';

const BooksPage = () => {
  return (
  <>
    <ErrorBoundary>
      <BooksList />
    </ErrorBoundary>
    <img className="bg-decoration" src={decoration} alt="personages" />
  </>
  )
}

export default BooksPage;