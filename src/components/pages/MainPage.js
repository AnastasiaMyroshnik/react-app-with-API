import { useState } from "react";

import PersonageList from "../personageList/PersonageList";
import ShowOnePersonage from "../showOnePersonage/ShowOnePersonage";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import decoration from '../../resources/img/personages.png';

const MainPage = () => {

  const [choosenPersonageUrl, setChoosenPersonageUrl] = useState(null);
  const currentPersonageUrl = url => setChoosenPersonageUrl(url);

  return (
    <>
      <div className="personage__content">
        <ErrorBoundary>
          <PersonageList choosenUrl={currentPersonageUrl} />
        </ErrorBoundary>
        <ErrorBoundary>
          <ShowOnePersonage personageUrl={choosenPersonageUrl} />
        </ErrorBoundary>
      </div>
      <img className="bg-decoration" src={decoration} alt="personages" />
    </>
  )
}

export default MainPage;