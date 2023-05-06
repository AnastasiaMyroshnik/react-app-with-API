import { useState, useEffect } from 'react';

import Service from '../services/Service';

const useBuildOneItem = (itemUrl) => {
  const [item, setItem] = useState(null);
  const [load, setLoad] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);

  const service = new Service();

  useEffect(() => {
    showItem();
  }, [itemUrl]);

  const showItem = () => {
    if (!itemUrl) {
      return
    }
    const getError = () => {
      setLoad(false);
      setErrorStatus(true);
    }
    setLoad(true);
    service.getRequest(itemUrl)
      .then(item => setItem(item))
      .then(setLoad(false))
      .catch(getError)
  }

  return { item, load, errorStatus }
}

export default useBuildOneItem;