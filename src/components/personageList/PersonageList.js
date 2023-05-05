import { useState, useEffect, useRef } from 'react';

import Service from '../../services/Service';
import Error from '../error/Error';
import Loading from '../loading/Loading';

import './personageList.scss';

const PersonageList = ({ choosenUrl }) => {

  const [personagesList, setPersonagesList] = useState([]);
  const [load, setLoad] = useState(true);
  const [newPersonageLoading, setNewPersonageLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);
  const [pageNum, setPageNum] = useState(2);
  const [isEnd, setIsEnd] = useState(false);
  const service = new Service();

  useEffect(() => getData, []);

  const getData = (page) => {
    setNewPersonageLoading(true);
    service.getAllPersonage(page)
      .then(getLoadContent)
      .catch(getError)
  }

  const getLoadContent = (newPersonageList) => {
    if (newPersonageList.length < 12) {
      setIsEnd(true)
    }
    setPersonagesList(personagesList => [...personagesList, ...newPersonageList]);
    setLoad(false);
    setNewPersonageLoading(false);
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

  const renderPersonages = (data) => {
    const personages = data.map((persone, i) => {

      return (
        <li 
        className="personage__item" 
        key={persone.url.replace('https://www.anapioficeandfire.com/api/characters/', 
        '')}
        ref={item => refs.current[i] = item}
        onClick={() => {
          choosenUrl(persone.url);
          focus(i);
        }}>
          <div className="personage__name">{persone.name}</div>
          <div className="personage__alias">{persone.aliases[0]}</div>
          <div className="personage__title">{persone.titles[0]}</div>
        </li>
      )
    })
    return (
      <ul className="personage__inner">
        {personages}
      </ul>
    )
  }

  const loadedPersonages = renderPersonages(personagesList);
  const error = errorStatus ? <Error/> : null;
  const loading = load || newPersonageLoading  ? <Loading/> : null;
  const content = !(load || errorStatus) ? loadedPersonages : null;
  const displayBtn = isEnd ? {display: 'none'} : null;

  return (
    <div className="personage__wrapper">
      {error}
      {content}
      {loading}
    <button 
      style={displayBtn}
      className="button button__personage button__long"
      disabled={newPersonageLoading}
      onClick={() => getData(pageNum)}>
      <div className='btn-text'>load more</div>
      </button>
    </div>
  )
}

export default PersonageList;