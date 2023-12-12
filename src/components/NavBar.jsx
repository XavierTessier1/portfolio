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
                <ScrollLink activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Accueil</ScrollLink>
                <ScrollLink activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>À propos</ScrollLink>
                <ScrollLink activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Projets</ScrollLink>
                <ScrollLink activeClass='active' to='platforms' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Contactez moi</ScrollLink>
            </div>
            <button className="desktopMenuButton">
                <IoTimeOutline className='desktopIconButton'/> {time}
            </button>
        </nav>
    );
};

export default NavBar;