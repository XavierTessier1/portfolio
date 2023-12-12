import '../css/Footer2.css';
import { Link } from 'react-scroll';

const Footer2 = () => {
    return(
        <footer className='footer'>
            <div className="rappelNav">
                <p className='footerNavTitle'>Navigation</p>
                <ul className='footerMenuList'>
                    <li><Link to='intro' smooth={true} offset={-100} duration={500} className='footerMenuListItem'>Accueil</Link></li>
                    <li><Link to='skills'smooth={true} offset={-100} duration={500} className='footerMenuListItem'>À propos</Link></li>
                    <li><Link to='works' smooth={true} offset={-100} duration={500} className='footerMenuListItem'>Projets</Link></li>
                    <li><Link to='contactPage' smooth={true} offset={-100} duration={500} className='footerMenuListItem'>Contactez moi</Link></li>
                </ul>
            </div>
            <div className="info">
                <p className='name'>Xavier Tessier</p>
                <a href="pdf/xavierTessierCv.pdf" target='_blank' download={true} className='footerCV'>Cliquez ici pour voir mon cv</a>
            </div>
            <div className="social">
                <p>Mes résaux sociaux:</p>
                <div className="socialMedia">
                    <a href=""><img src="logos/github-mark-white.svg" alt="" className='github'/></a>
                    <a href=""><img src="logos/LI-In-Bug.png" alt="" className='linkedIn'/></a>
                </div>
            </div>
        </footer>
    )
};

export default Footer2;