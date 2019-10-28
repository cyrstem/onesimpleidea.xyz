import './style/main.scss'

import {init} from './stage'

//document.querySelector('h1').textContent = bro ('whats upp');

console.log("hello u biatch");
console.log("testing ");
//contactLinks();
document.body.onload= addElements;

function addElements(){
var intro = document.createElement("div");
var text = document.createTextNode("biatch");
intro.appendChild(text);

var selection = document.getElementById("app");
document.body.insertBefore(intro, selection);



};
