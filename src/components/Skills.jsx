import '../css/Skills.css'
import { FaReact } from "react-icons/fa";
import { VscDebug } from "react-icons/vsc";
import { BsGearWide } from "react-icons/bs";

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">
                À propos de moi
            </span>
            <span className="skillDesc">
                Je suis un programmeur qui sort du Cégep de Saint-Jérôme en Techniques d'intégration multimédia. J'ai acquis de l'expérience avec plusieurs languages comme HTML, CSS, JavaScript, Php et C#. 
                J'ai aussi de l'expérience avec des frameworks comme React, Laravel et des engins de jeux comme Unity.
            </span>
            <div className="skillBars">
                <div className="skillBar">
                    <FaReact />
                    <div className="skillBarText">
                        <h2>Connaissance de frameworks</h2>
                        <p>Je connais des frameworks comme Laravel et React, ce qui me permet de faire plusieurs types d'applications</p>
                    </div>
                </div>
                <div className="skillBar">
                    <VscDebug />
                    <div className="skillBarText">
                        <h2>Capacité de régler des problèmes</h2>
                        <p>Durant mon parcours au cégep, j'ai dû faire plusieurs projets qui m'ont éventuellement donner plusieurs types d'erreurs</p>
                    </div>
                </div>
                <div className="skillBar">
                    <BsGearWide />
                    <div className="skillBarText">
                        <h2>Test</h2>
                        <p>Test</p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Skills;