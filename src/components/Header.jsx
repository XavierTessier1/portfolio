import { Link, useLocation } from "react-router-dom";
import "../css/Header.css";

const Header = () => {
    const {pathname} = useLocation();

    return(
        <header className="header">
            <nav className="nav">
                <ul className="primary-nav">
                    <li className={pathname.startsWith('/accueil') ? 'active' : null}>
                        <Link to="/accueil" className="link">Accueil</Link>
                    </li>
                    <li className={pathname.startsWith('/projets') ? 'active' : null}>
                        <Link to="/projets" className="link">Projets</Link>
                    </li>
                    <li className={pathname.startsWith('/propos') ? 'active' : null}>
                        <Link to="/propos" className="link">À propos</Link>
                    </li>
                    <li className={pathname.startsWith('/contact') ? 'active' : null}>
                        <Link to="/contact" className="link">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;