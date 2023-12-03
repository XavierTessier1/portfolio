import '../css/Footer.css';
import { TfiEmail } from "react-icons/tfi";
import { FaPhone } from "react-icons/fa6";
import { FaRegFilePdf } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="importantInfo footer-div">
                    <p className='name'>Xavier Tessier</p>
                    <div className="contact-info">
                        <div className="email info">
                            <TfiEmail className='icon' />
                            <p>xaviertessier023@gmail.com</p>
                        </div>
                        <div className="phone info">
                            <FaPhone className='icon' />
                            <p>450 508-5121</p>
                        </div>
                    </div>
                    <div className="footer-nav">
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
                </div>
                <div className="footer-cv footer-div">
                    <p>Vous voulez voir mon CV ? Voici un lien pour le télécharger</p>
                    <FaRegFilePdf className='icon'/>
                    <Link to="pdf/xavierTessierCv.pdf" target='_blank' download={true} className='link'>Mon cv</Link> 
                </div>
            </div>
                <div className="black-bar">
                    <p>© 2023 Xavier Tessier</p>
                    <div className="social-list">
                        <ul className='footer-sec-list'>
                            <li>
                                <Link to="https://github.com/XavierTessier1" target='_blank' ><img src="logos/github-mark.svg" alt="" className='github' /></Link>
                            </li>
                            <li>
                                <Link to="https://www.linkedin.com/in/xavier-tessier-/" target='_blank' ><img src="logos/LI-In-Bug.png" alt="" className='linkedin' /></Link>
                            </li>
                        </ul>
                        <p className='footer-social'>Mes réseaux sociaux</p>
                    </div>
                </div>
        </footer>
    );
};

export default Footer;