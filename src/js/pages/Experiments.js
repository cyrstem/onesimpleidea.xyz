
import data from '../../data.json';

import images from '../images.js'
console.log(data.projects[0])

console.log(images)



const Experiments = () => {
	const template = `
<main>
   <div id="portafolio">
    <section class="proj">
        <a href="https://movingphoton.friendred.studio/" target="_blank"> <img src="poster4.jpg" width="500" /></a>
    </section>
    <section class="info">
        <h2>Moving Photon</h2>
        <p>I Help develop and deploy the Virtual Experience for
            <a href="https://friendred.studio/2021/10/07/moving-photon/" target="_blank"> Moving Photon</a> an
            interactive installation/performance
            created by installation artist<a href="https://friendred.studio" target="_blank"> Friendred Peng.</a>
            Participation in Moving Photon can be in 5 different ways, including a Phantom performance,
            interactive installation, interactive performance,interactive performance with EEG and a <a
                href="https://movingphoton.friendred.studio/" target="_blank"> remote performance.</a>
    </section>
    <section class="info">
    <h2>Glitch Machine</h2>
        <p>A custom Glitch App build for<a href="https://www.instagram.com/jenna___marsh/ target="_blank"> Jenna Marsh </a>, it lets you play with a image applying different filters and export the resulting image for printing</p>
    </section>
    <section class="proj">
        <a href="https://www.instagram.com/p/CNRC1QZHf66/"> <img src= "insta-0.jpg" width="500"/></a>
     </section>
     <section class="proj">
       <a href="https://onesimpleidea.itch.io/noizu" target="_blank"><img src= "noizu.png" width="500"/></a>
    </section>
    <section class="info">
    <h2>Noizu</h2>
        <p>Custom build a Audio player for Linux and mac. on building a light and simple player for linux, based on my old love to sonique and winamp i do miss those programs when ui and ux was actually interesting and different every time this is a preview</p>
     </section>
     <section class="info">
     <h2>PACMan YaEsta.com</h2>
     <p>Develop a Physical installation with Mapping and live interaction  for the launch of the e-commerce site YaEsta.com back in the day</p>
      </section>
    <section class="proj">
       <a href="https://www.youtube.com/watch?v=YHZd0TxPMkY"> <img src= "insta-3.jpg" width="500"/></a>  
    </section>
   
</div>
</main>
    `;
	return template;
};

export default Experiments;
