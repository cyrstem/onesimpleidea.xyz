import jsxElem, { render } from "jsx-no-react";
import './style/main.scss'
import {init} from './stage'
import {Bio} from '/Bio'
import {Gallery} from '/Gallery'
// import {mylogsetup} from './mylog'

//Render shit -------------
//------------------------------------------------ 
function App() {

  return (
    <div class="wrapper">
      <Bio />
      <Gallery />
    </div>
  );
}
 
render(<App />, document.body);

document.getElementById("latest").onclick = Card;
document.getElementById("gallery").style.visibility = "hidden";



function Card() {
	console.log("loading gallery");
	document.getElementById("gallery").style.visibility = "visible";
	

	//mylogsetup();

	      document.getElementById("gallery").onclick = function(){
	      	document.getElementById("gallery").style.visibility = "hidden";
	      }
}