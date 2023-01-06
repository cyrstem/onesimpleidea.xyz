

const Portafolio = () => {
    const template = `
<main>
    <div id="content">
        <div id="portafolio"> 
        <section class="info">
            <a  href="https://movingphoton.friendred.studio/" target="_blank"> <img src="assets/skull.png"/></a>
        </section>
        <section class="info">
        <h2>Moving Photon</h2>
        <p>I Help develop and deploy the Virtual Experience for
            <a href="https://friendred.studio/2021/10/07/moving-photon/" target="_blank">Moving Photon</a> an
            interactive installation/performance
            created by installation artist<a href="https://friendred.studio" target="_blank"> Friendred Peng.</a>
            Participation in Moving Photon can be in 5 different ways, including a Phantom performance,
            interactive installation, interactive performance,interactive performance with EEG and a <a
                href="https://movingphoton.friendred.studio/" target="_blank"> remote performance.</a>
        </section>
        </div>   
    </div>
</main>
    `;
    return template;
};

export default Portafolio;
