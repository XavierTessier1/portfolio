import '../css/Works.css';

const Projects = () => {
    return (
        <section id='works'>
            <span className="skillTitle">
                Mes Projets
            </span>
            <span className="skillDesc">
               voici quelques projets que j'ai fait durant mon parcours au cégep de Saint-Jérôme et durant mon temps libre
            </span>
            <div className="skillBars">
                <div className="workBar">
                    <img src="img/screenTuneUp.png" alt="" className='worksImg'/>
                    <div className="worksText">
                        <h2 className='workTitle'>Tune-Up</h2>
                        <p className='worksListName'>Compétences</p>
                        <ul className='worksSkills'>
                            <li>Intégration d'une Api dans le projet</li>
                            <li>Intégration des plusieurs modules créer par différentes personnes</li>
                            <li>Travail d'équipe efficace</li>
                        </ul>
                        <p className='worksListName'>Languages/frameworks utilisés</p>
                        <ul className='worksSkills'>
                            <li>React</li>
                            <li>JavaScript</li>
                        </ul>
                        <a href="https://tune-up-musique.netlify.app/" target='_blank'><button className='worksButton'>Aller le voir!</button></a>
                    </div>
                </div>
                <div className="workBar">
                    <img src="img/screenLNDT.png" alt="" className='worksImg'/>
                    <div className="worksText">
                        <h2 className='workTitle'>La nuit des ténèbres</h2>
                        <p className='worksListName'>Compétences</p>
                        <ul className='worksSkills'>
                            <li>Création de machines à états pour les alliés et les ennemis</li>
                            <li>Persévérence pour régler les erreurs</li>
                            <li>Intégration du visuel des artistes</li>
                        </ul>
                        <p className='worksListName'>Languages/logiciels utilisés</p>
                        <ul className='worksSkills'>
                            <li>C#</li>
                            <li>Unity</li>
                        </ul>
                    </div>
                </div>
                <div className="workBar">
                    <img src="img/screenDrg_petite.jpg" alt="" className='worksImg'/>
                    <div className="worksText">
                        <h2 className='workTitle'>Projet 2 | cours de vidéo 2</h2>
                        <p className='worksListName'>Compétences</p>
                        <ul className='worksSkills'>
                            <li>Création d'un effet de profondeur sur des images</li>
                            <li>Utilisation des outils de 3D d'After Effects</li>
                            <li>Utilisation créative des lumières et effets spéciaux</li>
                        </ul>
                        <p className='worksListName'>Languages/logiciels utilisés</p>
                        <ul className='worksSkills'>
                            <li>After Effects</li>
                            <li>Photoshop</li>
                        </ul>
                        <a href="https://vimeo.com/880327830?share=copy" target='_blank'><button className='worksButton'>Aller le voir!</button></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;