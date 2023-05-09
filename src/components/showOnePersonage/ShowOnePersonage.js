import useBuildOneItem from '../../hooks/buildOneItem';
import Loading from '../loading/Loading';
import Error from '../error/Error';
import { SkeletonPersonage } from '../skeleton/Skeleton';

import './showOnePersonage.scss';

const ShowOnePersonage = ({ personageUrl }) => {

  const { item, load, errorStatus } = useBuildOneItem(personageUrl, 'personage');

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
  const { culture, born, titles, aliases, tvSeries, playedBy, name, gender, allegiances } = personage;

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

  const allegiancesContent = allegiances ? <div className="personage__info-descr">{allegiances.name}</div> : null;
  const cultureContent = culture ? <><div> <span>Culture:</span></div> <div>{culture}</div></> : null;
  const bornContent = born ? <><div><span>Born:</span></div><div>{born}</div></> : null;
  const titlesContent = transform(titles, 'Titles');
  const aliasesContent = transform(aliases, 'Aliases');
  const seasonsContent = transform(tvSeries, 'Seasons');
  const actor = transform(playedBy, 'Played By');

  return (
    <>
      <div className="personage__info-name">{name}</div>
      {allegiancesContent}
      <div> <span>Gender:</span></div>
      <div>{gender}</div>
      {cultureContent}
      {bornContent}
      {titlesContent}
      {aliasesContent}
      {seasonsContent}
      {actor}
    </>
  )
}

export default ShowOnePersonage;