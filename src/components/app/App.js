import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "../header/Header";
import { MainPage, HousesPage, BooksPage, NoMatch, OneBookPage } from '../pages';

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
            <Route path="/books/:bookId" element={<OneBookPage />} />
            <Route path="*" element={<NoMatch/>}/>
            </Routes>
          </main>
        </div>
      </Router>
  )
}

export default App;