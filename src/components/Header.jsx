import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/Header.css";

const Header = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const {pathname} = useLocation();

    return(
        <header className="header">
            <div className="header-content">
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
                <div className="header-clock">
                    <p className="header-clock-time">{time}</p>
                </div>
            </div>
        </header>
    )
}

export default Header;