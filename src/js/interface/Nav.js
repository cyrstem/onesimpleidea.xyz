// Left identity rail: live genetic-algorithm stats for the 3D figures.
const Navbar = () => {
    const template = `
        <aside id="identity" aria-label="Site identity">
            <div class="identity-ga" aria-live="polite">
                <p><span class="ga-label">GEN</span> <span id="ga-gen">0000</span></p>
                <p><span class="ga-label">FIT</span> <span id="ga-fit">--.---</span></p>
                <p><span class="ga-label">AVG</span> <span id="ga-avg">--.---</span></p>
                <p><span class="ga-label">ACT</span> <span id="ga-act">0</span></p>
            </div>
        </aside>
    `;
    return template;
};

export default Navbar;
