import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../Header/Header";
import PersonageList from "../personageList/PersonageList";
import HouseList from "../housesList/HousesList";
import BooksList from "../booksList/BooksList";
import ShowOnePersonage from "../showOnePersonage/ShowOnePersonage";
import ShowOneHouse from "../showOneHouse/ShowOneHouse";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import decoration from '../../resources/img/personages.png';

const App = () => {

  const [choosenPersonageUrl, setChoosenPersonageUrl] = useState(null);
  const currentPersonageUrl = url => setChoosenPersonageUrl(url);
  const [choosenHouseUrl, setChoosenHouseUrl] = useState(null);
  const currentHouseUrl = url => setChoosenHouseUrl(url);

    return (
      <Switch>
        <Router>
          <div className="app">
            <Header />
            <main>
              <div className="personage__content">
                <Route exact path="/">
                  <ErrorBoundary>
                    <PersonageList choosenUrl={currentPersonageUrl} />
                  </ErrorBoundary>
                  <ErrorBoundary>
                    <ShowOnePersonage personageUrl={choosenPersonageUrl} />
                  </ErrorBoundary>
                </Route>
                <Route exact path="/houses">
                  <ErrorBoundary>
                    <HouseList choosenUrl={currentHouseUrl} />
                  </ErrorBoundary>
                  <ErrorBoundary>
                    <ShowOneHouse houseUrl={choosenHouseUrl} />
                  </ErrorBoundary>
                </Route>
              </div>
              <Route exact path="/books">
                <ErrorBoundary>
                  <BooksList />
                </ErrorBoundary>
              </Route>
              <img className="bg-decoration" src={decoration} alt="personages" />
            </main>
          </div>
        </Router>
      </Switch>
    )
}

export default App;