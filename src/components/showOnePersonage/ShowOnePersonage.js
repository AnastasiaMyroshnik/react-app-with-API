import useBuildOneItem from '../../hooks/buildOneItem';
import Loading from '../loading/Loading';
import Error from '../error/Error';
import { SkeletonPersonage } from '../skeleton/Skeleton'

import './showOnePersonage.scss';

const ShowOnePersonage = ({ personageUrl }) => {

  const { item, load, errorStatus } = useBuildOneItem(personageUrl);

  const skeletone = item || load || errorStatus ? null : <SkeletonPersonage />
  const error = errorStatus ? <Error /> : null;
  const loading = load ? <Loading /> : null;
  const content = !(load || errorStatus) && item ? <Displayed personage={item} /> : null;

  return (
    <div className="personage__info">
      {skeletone}
      {error}
      {loading}
      {content}
    </div>
  )

}

const Displayed = ({ personage }) => {
  const { culture, born, titles, aliases, tvSeries, playedBy, name, gender, books, povBooks } = personage;

  const transform = (selector, title) => {
    if (selector.length >= 1 && selector[0].length >= 1) {
      return <><span>{title}:</span><ul className="personage__list">
        {selector.map((item, i) => {
          return (
            <li className="personage__list-item" key={i}>
              {item}
            </li>
          )
        })}
      </ul></>
    }
    else {
      return null
    };
  }

  const bookListUrls = [...books, ...povBooks];
  const transformBookNames = (index, name) => {
    const newName = bookListUrls.filter(item => item === `https://www.anapioficeandfire.com/api/books/${index}`).map(item => item.replace(`https://www.anapioficeandfire.com/api/books/${index}`, name));
    return newName;
  }
  const bookList = [...transformBookNames(1, 'A Game of Thrones'), ...transformBookNames(2, 'A Clash of Kings'), ...transformBookNames(3, 'A Storm of Swords'), ...transformBookNames(4, 'The Hedge Knight'), ...transformBookNames(5, 'A Feast for Crows'), ...transformBookNames(6, 'The Sworn Sword'), ...transformBookNames(7, 'The Mystery Knight'), ...transformBookNames(8, 'A Dance with Dragons'), ...transformBookNames(9, 'The Princess and the Queen'), ...transformBookNames(10, 'The Rogue Prince'), ...transformBookNames(11, 'The World of Ice and Fire'), ...transformBookNames(12, 'A Knight of the Seven Kingdoms')]
  const cultureContent = culture ? <><div> <span>Culture:</span></div> <div>{culture}</div></> : null;
  const bornContent = born ? <><div><span>Born:</span></div><div>{born}</div></> : null;
  const titlesContent = transform(titles, 'Titles');
  const aliasesContent = transform(aliases, 'Aliases');
  const seasonsContent = transform(tvSeries, 'Seasons');
  const bookContent = transform(bookList, 'Books');
  const actor = transform(playedBy, 'Played By');

  return (
    <>
      <div className="personage__info-name">{name}</div>
      <div> <span>Gender:</span></div>
      <div>{gender}</div>
      {cultureContent}
      {bornContent}
      {titlesContent}
      {aliasesContent}
      {seasonsContent}
      {bookContent}
      {actor}
    </>
  )
}

export default ShowOnePersonage;