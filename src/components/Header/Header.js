import { Link, NavLink } from 'react-router-dom';

import './Header.scss';

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <Link to="/">
                  <span>Ice and Fire</span> fandom 
                </Link>
            </h1>
            <nav className="app__menu">
                <ul>
            <li><NavLink end style={({ isActive }) => ({ color: isActive ? '#b97d30' : 'inherit'})} to="/">Characters</NavLink></li>
            <li><NavLink end style={({ isActive }) => ({ color: isActive ? '#b97d30 ': 'inherit'})} to="/houses">Houses</NavLink></li>
            <li><NavLink end style={({ isActive }) => ({ color: isActive ? '#b97d30' : 'inherit'})} to="/books">Books</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;