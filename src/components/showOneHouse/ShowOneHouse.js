import { useState, useEffect } from 'react';

import Service from '../../services/Service';
import Loading from '../loading/Loading';
import Error from '../error/Error';
import { SkeletonHouse } from '../skeleton/Skeleton'

import '../showOnePersonage/showOnePersonage.scss';

const ShowOneHouse = ({houseUrl}) => {
  const [house, setHouse] = useState(null);
  const [load, setLoad] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);

  const service = new Service();

  useEffect(() => {
    ShowOneHouse();
  }, [houseUrl])

  const ShowOneHouse = () => {
    if (!houseUrl) {
      return
    }
    const getError = () => {
      setLoad(false);
      setErrorStatus(true);
    }
    setLoad(true);
    service.getRequest(houseUrl)
      .then(house => setHouse(house))
      .then(setLoad(false))
      .catch(getError)
  }

  const skeletone = house || load || errorStatus ? null : <SkeletonHouse />
  const error = errorStatus ? <Error /> : null;
  const loading = load ? <Loading /> : null;
  const content = !(load || errorStatus) && house ? <Displayed house={house} /> : null;

  return (
    <div className="personage__info">
      {skeletone}
      {error}
      {loading}
      {content}
    </div>
  )
}

const Displayed = ({house}) => {
  const { words, name, region, coatOfArms, founded, seats, ancestralWeapons } = house;

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

  const wordsContent = words ? <><div> <span>Words:</span></div> <div>{words}</div></> : null;
  const coatOfArmsContent = coatOfArms ? <><div> <span>Coat of arms:</span></div> <div>{coatOfArms}</div></> : null;
  const regionContent = region ? <><div> <span>Region:</span></div> <div>{region}</div></> : null;
  const foundedContent = founded ? <><div> <span>Founded:</span></div> <div>{founded}</div></> : null;
  const seatsContent = transform(seats, 'Seats');
  const ancestralWeaponsContent = transform(ancestralWeapons, 'Ancestral weapons')

  return (
    <>
      <div className="personage__info-name">{name}</div>
      {wordsContent}
      {coatOfArmsContent}
      {regionContent}
      {foundedContent}
      {seatsContent}
      {ancestralWeaponsContent}
    </>
  )
}

export default ShowOneHouse;