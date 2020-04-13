import jsxElem, { render } from "jsx-no-react";
import './style/main.scss'
import {init} from './stage'
import {Home} from '/Home'

//Render shit 
//------------------------------------------------ 
function App() {

  return (
    <div class="wrapper">
      <Home />
    </div>
  );
}
render(<App />, document.body);
