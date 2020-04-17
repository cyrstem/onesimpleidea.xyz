const Nav = ()=>{
    const Menu =`
        <nav>
            <button>Home</button>
            <button>Projects</button>
            <button>About me</button>
        </nav>
     `;
    return Menu;
}


const Content =()=>{
    const template = `
        <main>
        <h1>hello..</h1>
        <p>I'm Jacob a Creative Developer and Programmer from Quito - Ecuador. 
        I specialize in working with emerging tech to build custom tools for digital or physical experiences.</p>
        </main>
    `;
    
     //document.getElementById('wrapper').appendChild(Nav);
    return template;
}
export default Content;