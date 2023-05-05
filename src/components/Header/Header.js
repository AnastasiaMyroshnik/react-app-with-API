import { Link } from 'react-router-dom';

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
                    <li><Link to="/">Characters</Link></li>
                    <li><Link to="/houses">Houses</Link></li>
                    <li><Link to="/books">Books</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;