import { useState, useEffect, useRef } from 'react';

import Service from '../services/Service';

import '../components/personageList/personageList.scss';

const useBuildContentList = (request, pageSize, choosenUrl, contentType) => {

  const [contentList, setContentList] = useState([]);
  const [load, setLoad] = useState(true);
  const [newContentLoading, setNewContentLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const [isEnd, setIsEnd] = useState(false);
  const service = new Service();

  useEffect(() => getData, []);

  const getData = (page) => {
    setNewContentLoading(true);
    service.getAllItems(request, page, pageSize)
      .then(getLoadContent)
      .catch(getError)
  }

  const getLoadContent = (newContentList) => {
    if (newContentList.length < pageSize) {
      setIsEnd(true)
    }
    setContentList(contentList => [...contentList, ...newContentList]);
    setLoad(false);
    setNewContentLoading(false);
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

  const renderContent = (data) => {
    const items = data.map((item, i) => {
      const descriptionPersonage = contentType === 'personageList' ? <><div className="personage__name">{item.name}</div>
      <div className="personage__alias">{item.aliases[0]}</div>
      <div className="personage__title">{item.titles[0]}</div></> : null;
      const descriptionHouse = contentType === 'housesList' ? <> <div className="personage__name">{item.name}</div>
        <div className="personage__alias">{item.words}</div></> : null;

      return (
        <li
          className="personage__item"
          key={item.url.replace(`https://www.anapioficeandfire.com/api/${request}/`,
            '')}
          ref={item => refs.current[i] = item}
          onClick={() => {
            choosenUrl(item.url);
            focus(i);
          }}>
          {descriptionPersonage}
          {descriptionHouse}
        </li>
      )
    })
    return (
      <ul className="personage__inner">
        {items}
      </ul>
    )
  }

  return { renderContent, contentList, errorStatus, load, newContentLoading, isEnd, getData, pageNum }
}

export default useBuildContentList;