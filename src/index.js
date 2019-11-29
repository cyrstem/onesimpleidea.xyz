import './style/main.scss'

import {init} from './stage'


//document.querySelector('h1').textContent = bro ('whats upp');
// console.clear();
console.log("well if you got into here ")
console.log("this was made with JS incase you were wondering ");

//contactLinks();
document.body.onload= addElements;

function addElements(){
var intro = document.createElement("div");
var text = document.createTextNode("biatch");
intro.appendChild(text);

var selection = document.getElementById("app");
document.body.insertBefore(intro, selection);



};
