const template = `
      <main>
        <div id="content" class="content">
          <h3 class="warning">Full experience on Desktop</h3>
          <p>I'm <b>Jacobo Heredia</b>, a <b>Creative Developer</b> and <b>Front-End Developer</b> based in Quito with <b>10+ years</b> of experience creating custom digital and physical experiences that blend technology, design, and interactivity.</p>
          <p>I'm a <b>self-taught</b> developer and <b>fast learner</b> specializing in <b>WebGL, JavaScript, C++, OpenGL, GLSL</b>, creative coding, and interactive systems. In recent years, my work has expanded into <b>Machine Learning, Computational Thinking, and Unreal Engine</b> development.</p>
          <p>I'm currently working with <a href="https://thegardeninthemachine.com/" target="_blank">the Garden in the Machine</a> as a Creative Developer, exploring generative systems, emergent behaviors, and AI-driven experiences.</p>
          <p>I also collaborated on the research paper <a href="https://openreview.net/forum?id=pKXJ0wQ3Vn" target="_blank">Orchestrating Emergent Storytelling with Embodied Multi-Agent Systems</a>, presented at OpenReview.</p>
            <div>
              <p>Previously, I have collaborated with:</p>
              <ul id="sites">
              <li>
              <a href="https://activetheory.net/" target="_blank" rel="noopener noreferrer">
                <span>Active Theory //## WebGL Developer </span>
                <span> </span>
              </a>
            </li>
              <li>
              <a href="https://visualgoodness.com/" target="_blank" rel="noopener noreferrer">
                <span>Visual Goodness //## WebGL Developer</span>
                <span> </span>
              </a>
              </li>
              <li>
              <a href="https://smartco.com.ec" target="_blank" rel="noopener noreferrer">
                <span>Smartco //## Unity Developer </span>
                <span> </span>
              </a>
            </li>
              <li>
                <a href="https://www.yaesta.com" target="_blank" rel="noopener noreferrer">
                  <span>YaEsta  //## Front-end & Designer</span>
                  <span> </span>
                </a>
              </li>
              </ul>
          </div>
    </div>
    </main>
      `;

const CONTACT = 'Contact me at <b>cyrstem[at]gmail[dot]com</b>';

export default {
    name: 'about',
    render: () => template,
    // The contact line lives in a top-level element pinned to the bottom-right
    // corner (outside #terminal so the shake transform doesn't move it).
    onEnter: () => {
        const el = document.getElementById('contact-info');
        if (el) el.innerHTML = CONTACT;
    },
    onLeave: () => {
        const el = document.getElementById('contact-info');
        if (el) el.innerHTML = '';
    }
};