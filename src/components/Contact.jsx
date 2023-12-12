import '../css/Contact.css'

const Contact = () => {
    return(
        <section id='contactPage'>
            <div id="platforms">
                <h1 className='contactPageTitle'>Contactez moi !</h1>
                <p className='contactDesc'>
                    Vous pouvez m'envoyer un courriel à l'adresse suivante : <span className='bold'>xaviertessier023@gmail.com</span>, me contacter au téléphone au <span className="bold">450 508-5121</span> ou encore me contacter via les plateformes suivantes :
                </p>
                <div className="contactImgs">
                    <a href="https://github.com/XavierTessier1" target='_blank' className='contactImg'>
                        <img src="logos/GitHub_Logo_White.png" alt="Github" className="contactImg github" />
                    </a>
                    <a href="https://www.linkedin.com/in/xavier-tessier-/" target='_blank' className='contactImg'>
                        <img src="logos/LI-Logo.png" alt="LinkedIn" className="contactImg linkedIn" />
                    </a>
                </div>
            </div>
        </section>
    )
};

export default Contact;