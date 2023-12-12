import '../css/Intro.css';
import { Link } from 'react-scroll';

const Intro = () => {
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello">Salut,</span>
                <span className="introText">
                    Je m'appelle  
                    <span className="introName"> Xavier Tessier</span> 
                    <br />
                    et je suis programmeur web.
                </span>
                <p className="introParagraph">Je suis un programmeur web avec de l'expérience dans plusieurs frameworks <br /> et langages de programmation</p>
            </div>
            <img src="img/SNA_0696_BA.jpg" className='bg' alt="" />
        </section>
    )
};

export default Intro;