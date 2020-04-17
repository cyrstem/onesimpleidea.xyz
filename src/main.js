//console.clear();
import './style/main.scss'
import {init} from './js/stage'
import Nav from './js/Nav'
import Content from './js/Content'


const app =()=>{
 
    document.getElementById('wrapper').innerHTML = Content();
  
    //document.getElementById('ui').innerHTML =  Nav();
   
   
}
app();