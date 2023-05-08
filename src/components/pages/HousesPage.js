import { useState } from "react";

import HouseList from "../housesList/HousesList";
import ShowOneHouse from "../showOneHouse/ShowOneHouse";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import decoration from '../../resources/img/personages.png';

const HousesPage = () => {

  const [choosenHouseUrl, setChoosenHouseUrl] = useState(null);
  const currentHouseUrl = url => setChoosenHouseUrl(url);

  return (
    <>
      <div className="personage__content">
        <ErrorBoundary>
          <HouseList choosenUrl={currentHouseUrl} />
        </ErrorBoundary>
        <ErrorBoundary>
          <ShowOneHouse houseUrl={choosenHouseUrl} />
        </ErrorBoundary>
      </div>
      <img className="bg-decoration " src={decoration} alt="personages" />
    </>
  )
}

export default HousesPage;