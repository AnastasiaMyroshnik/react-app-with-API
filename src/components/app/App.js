import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "../Header/Header";
import { MainPage, HousesPage, BooksPage } from '../pages';

const App = () => {
  return (
      <Router>
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/houses" element={<HousesPage />} />
            <Route path="/books" element={<BooksPage />} />
            </Routes>
          </main>
        </div>
      </Router>
  )
}

export default App;