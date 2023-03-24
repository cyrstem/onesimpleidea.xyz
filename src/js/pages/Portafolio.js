

const Portafolio = () => {
    const template = `
    <main>  
        <div id="ex">
            <a class="nav_item" href="#" ><h1>Moving Photon</h1></a>
            <a class="nav_item" href="#" ><h1>Glitch Machine</h1></a>
            <a class="nav_item" href="#" > <h1>Noizu</h1></a>
            <a class="nav_item" href="#" ><h1>YaEsta.com</h1></a>
        </div>
        <div class="infoFile">
            <article class="info show__info">
            <p>I collaborated on developing the Virtual Experience for
                <a href="https://friendred.studio/2021/10/07/moving-photon/" target="_blank">Moving Photon</a> an
                interactive installation/performance
                created by installation artist<a href="https://friendred.studio" target="_blank"> Friendred Peng.</a>
                Participation in Moving Photon can be in 5 different ways, including a Phantom performance,
                interactive installation, interactive performance,interactive performance with EEG and a <a
                    href="https://movingphoton.friendred.studio/" target="_blank"> remote performance.</a>
            </p>
            </article>
            <article class="info ">
                <p>A custom Glitch App build for<a href="https://www.instagram.com/jenna___marsh/" target=" _blank">  Jenna
                Marsh</a>, it lets you play with a image applying different filters and export the resulting image for
                printing</p>
            </article>
            <article class="info ">
                <p>Custom build a Audio player for Linux and mac. on building a light and simple player for linux, 
                based on my old love to sonique and winamp i do miss those programs when ui and ux was actually interesting and different every time this is a preview</p>
            </article>
            <article class="info ">
                <p>Develop a Physical installation with Mapping and live interaction for the launch of the e-commerce site
                YaEsta.com back in the day</p>
            </article>
        </div>
    </main>
    `;
    return template;
};
    
export default Portafolio;
