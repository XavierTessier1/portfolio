import '../css/Footer.css';
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className='footer-nav footer-div'>
                <p className='footer-identification'>Lien de l'application</p>
                <ul className='footer-nav-list'>
                    <li>
                        <Link to="/accueil" className="link">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/projets" className="link">Projets</Link>
                    </li>
                    <li>
                        <Link to="/propos" className="link">À propos</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="link">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className='separator'></div>
            <div className="footer-presence footer-div">
                <p className='footer-identification'>Présence sur les réseaux sociaux</p>
                <ul className='footer-nav-list social-list'>
                    <li>
                        <Link to="https://www.linkedin.com/in/xavier-tessier-/" target='_blank' ><img src="logos/LI-In-Bug.png" alt="" className='linkedin' /></Link>
                    </li>
                    <li>
                        <Link to="https://github.com/XavierTessier1" target='_blank' ><img src="logos/github-mark.svg" alt="" className='github' /></Link>
                    </li>
                </ul>
            </div>
            <div className='separator'></div>
            <div className='footer-cv footer-div'>
                <p className='footer-identification'>Mon CV</p>

            </div>
        </footer>
    );
};

export default Footer;