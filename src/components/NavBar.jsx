import '../css/NavBar.css'
import { useState, useEffect } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { Link as ScrollLink } from 'react-scroll';

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
                <ScrollLink to='#intro' className='desktopMenuListItem'>Accueil</ScrollLink>
                <ScrollLink to='#skills' className='desktopMenuListItem'>À propos</ScrollLink>
                <ScrollLink to='#skills' className='desktopMenuListItem'>Projets</ScrollLink>
                <ScrollLink to='#skills' className='desktopMenuListItem'>Contactez moi</ScrollLink>
            </div>
            <button className="desktopMenuButton">
                <IoTimeOutline className='desktopIconButton'/> {time}
            </button>
        </nav>
    );
};

export default NavBar;