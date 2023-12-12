import '../css/Skills.css'
import { FaReact } from "react-icons/fa";
import { VscDebug } from "react-icons/vsc";
import { RiTeamFill } from "react-icons/ri";

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">
                À propos de moi
            </span>
            <span className="skillDesc">
                Je suis un programmeur qui sort du Cégep de Saint-Jérôme en Techniques d'intégration multimédia. J'ai acquis de l'expérience avec plusieurs languages comme HTML, CSS, JavaScript, Php et C#. 
                J'ai aussi de l'expérience avec des frameworks comme React, Laravel et des engins de jeux comme Unity. <br />
            </span>
            <span className='cv skillDesc'>
                Vous pouvez voir mon cv en cliquant ici : <a href="pdf/xavierTessierCv.pdf" target='_blank' className='link'> voir mon cv</a>
                </span>
            <div className="skillBars">
                <div className="skillBar">
                    <FaReact className='skillBarIcon'/>
                    <div className="skillBarText">
                        <h2>Connaissance de frameworks</h2>
                        <p>Je connais des frameworks comme Laravel et React, ce qui me permet de faire plusieurs types d'applications</p>
                    </div>
                </div>
                <div className="skillBar">
                    <VscDebug className='skillBarIcon'/>
                    <div className="skillBarText">
                        <h2>Capacité de régler des problèmes</h2>
                        <p>Durant mon parcours au cégep, j'ai dû faire plusieurs projets qui m'ont éventuellement donner plusieurs types d'erreurs</p>
                    </div>
                </div>
                <div className="skillBar">
                    <RiTeamFill className='skillBarIcon'/>
                    <div className="skillBarText">
                        <h2>Travail d'équipe</h2>
                        <p>Je suis quelqu'un qui peut adapter mes plans avec les idées des autres et qui n'a pas peur de donner ses idées pour améliorer un projet.</p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Skills;