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
      
    </div>
  );
}
 
render(<App />, document.body);
