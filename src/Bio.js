import jsxElem, { render } from "jsx-no-react";

const Bio =()=>{
	
	return(

  		<div class="contents">
  			<h1>hello... My name is Jacobo</h1>
            <p>I'm a Creative Developer and Programmer from Quito - Ecuador. 
            I specialize in working with emerging tech to build custom tools for digital or physical experiences.</p>
            <button id="latest"> Latest Work</button>
             <div id="contact">
                <ul>
                	 <a href ="https://www.instagram.com/cyrstem/"target="_blank">instagram</a>
               		 <a href ="http://ec.linkedin.com/in/jacobohz" target="_blank">linkedin</a>
					 <a href ="https://github.com/cyrstem/" target="_blank">github</a>
            	</ul>
              
            </div>
           <small id="q">“Wintermute was a simple cube of white light, that very simplicity suggesting extreme complexity.”--William Gibson – Neuromancer</small>
  		</div>

  	) 

}

export {Bio}