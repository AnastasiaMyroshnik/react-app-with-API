import { useState, useEffect, useRef } from "react";

import Service from "../../services/Service";
import Error from '../error/Error';
import Loading from '../loading/Loading';

import '../personageList/personageList.scss';

const HouseList = ({choosenUrl}) => {
  const [houses, setHouses] = useState([]);
  const [load, setLoad] = useState(true);
  const [newHousesLoading, setNewHousesLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const [isEnd, setIsEnd] = useState(false);
  const service = new Service();

  useEffect(() => getData, [])

  const getData = (page) => {
    setNewHousesLoading(true);
    service.getAllHouses(page)
    .then(getLoadContent)
    .catch(getError)
  }

  const getLoadContent = (newHouseList) => {
    if (newHouseList.length < 9) {
      setIsEnd(true)
    }
    setHouses(houseList => [...houseList, ...newHouseList]);
    setLoad(false);
    setNewHousesLoading(false);
    setPageNum(pageNum => pageNum + 1);
  }

  const getError = () => {
    setLoad(false);
    setErrorStatus(true);
  }

  const refs = useRef([]);

  const focus = (index) => {
    refs.current.forEach(item => item.classList.remove('personage__item--selected'));
    refs.current[index].classList.add('personage__item--selected');
    refs.current[index].focus();
  }

  const renderHouses = (data) => {
    const houses = data.map((house, i) => {
      return (
        <li
          className="personage__item"
          key={house.url.replace('https://anapioficeandfire.com/api/houses/',
            '')}
          ref={item => refs.current[i] = item}
          onClick={() => {
            choosenUrl(house.url);
            focus(i);
          }}>
          <div className="personage__name">{house.name}</div>
          <div className="personage__alias">{house.words}</div>
        </li>
      )
    })
    return (
      <ul className="personage__inner">
        {houses}
      </ul>
    )
  }

  const loadedHouses = renderHouses(houses);
  const error = errorStatus ? <Error /> : null;
  const loading = load || newHousesLoading ? <Loading /> : null;
  const content = !(load || errorStatus) ? loadedHouses : null;
  const displayBtn = isEnd ? { display: 'none' } : null;

  return (
    <div className="personage__wrapper">
      {error}
      {content}
      {loading}
      <button
        style={displayBtn}
        className="button button__personage button__long"
        disabled={newHousesLoading}
        onClick={() => getData(pageNum)}>
        <div className='btn-text'>load more</div>
      </button>
    </div>
  )
}

export default HouseList;