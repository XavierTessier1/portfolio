import '../css/NavBar.css'
import { useState, useEffect } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { Link } from 'react-scroll';

const NavBar = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <nav className="navBar">
            <div className="desktopMenu">
                <Link className='desktopMenuListItem'>Accueil</Link>
                <Link className='desktopMenuListItem'>À propos</Link>
                <Link className='desktopMenuListItem'>Projets</Link>
                <Link className='desktopMenuListItem'>Contactez moi</Link>
            </div>
            <button className="desktopMenuButton">
                <IoTimeOutline className='desktopIconButton'/> {time}
            </button>
        </nav>
    );
};

export default NavBar;