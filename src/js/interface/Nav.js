const Navbar = () => {
    const template = `
        <nav id="nav">
            <a class="nav-link" href="#/" data-route="/">About</a>
            <a class="nav-link" href="#/portfolio" data-route="/portfolio">Work</a>
        </nav>
    `;
    return template;
}

export default Navbar;
