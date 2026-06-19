const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GeneticGrid-DMg5qTA1.js","assets/alien-Byt2Z-Qa.js","assets/gsap-BuvESnJH.js","assets/CameraManager-YkWatwup.js"])))=>i.map(i=>d[i]);
import{B as e,C as t,E as n,F as r,G as i,H as a,I as o,J as s,M as c,N as l,O as u,P as d,U as f,V as p,W as m,Y as h,a as g,h as _,i as v,j as y,k as b,l as x,m as S,n as C,o as w,p as T,q as E,r as ee,s as te,t as D,u as O,v as k,w as A,x as j,y as M}from"./alien-Byt2Z-Qa.js";import{n as N,t as P}from"./index-CwqPdkQ2.js";import{t as F}from"./three-AklFzGMw.js";var I=class e{constructor(t,n,r,i,a=`div`){this.parent=t,this.object=n,this.property=r,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(`div`),this.domElement.classList.add(`controller`),this.domElement.classList.add(i),this.$name=document.createElement(`div`),this.$name.classList.add(`name`),e.nextNameID=e.nextNameID||0,this.$name.id=`lil-gui-name-${++e.nextNameID}`,this.$widget=document.createElement(a),this.$widget.classList.add(`widget`),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(r)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle(`disabled`,e),this.$disable.toggleAttribute(`disabled`,e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?`none`:``,this}hide(){return this.show(!1)}options(e){let t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);let e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}},L=class extends I{constructor(e,t,n){super(e,t,n,`boolean`,`label`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`checkbox`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener(`change`,()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function R(e){let t,n;return(t=e.match(/(#|0x)?([a-f0-9]{6})/i))?n=t[2]:(t=e.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?n=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=e.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(n=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),n?`#`+n:!1}var z={isPrimitive:!0,match:e=>typeof e==`string`,fromHexString:R,toHexString:R},B={isPrimitive:!0,match:e=>typeof e==`number`,fromHexString:e=>parseInt(e.substring(1),16),toHexString:e=>`#`+e.toString(16).padStart(6,0)},V=[z,B,{isPrimitive:!1,match:e=>Array.isArray(e),fromHexString(e,t,n=1){let r=B.fromHexString(e);t[0]=(r>>16&255)/255*n,t[1]=(r>>8&255)/255*n,t[2]=(r&255)/255*n},toHexString([e,t,n],r=1){r=255/r;let i=e*r<<16^t*r<<8^n*r<<0;return B.toHexString(i)}},{isPrimitive:!1,match:e=>Object(e)===e,fromHexString(e,t,n=1){let r=B.fromHexString(e);t.r=(r>>16&255)/255*n,t.g=(r>>8&255)/255*n,t.b=(r&255)/255*n},toHexString({r:e,g:t,b:n},r=1){r=255/r;let i=e*r<<16^t*r<<8^n*r<<0;return B.toHexString(i)}}];function H(e){return V.find(t=>t.match(e))}var ne=class extends I{constructor(e,t,n,r){super(e,t,n,`color`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`color`),this.$input.setAttribute(`tabindex`,-1),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$text=document.createElement(`input`),this.$text.setAttribute(`type`,`text`),this.$text.setAttribute(`spellcheck`,`false`),this.$text.setAttribute(`aria-labelledby`,this.$name.id),this.$display=document.createElement(`div`),this.$display.classList.add(`display`),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=H(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener(`input`,()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener(`blur`,()=>{this._callOnFinishChange()}),this.$text.addEventListener(`input`,()=>{let e=R(this.$text.value);e&&this._setValueFromHexString(e)}),this.$text.addEventListener(`focus`,()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener(`blur`,()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){let t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}},U=class extends I{constructor(e,t,n){super(e,t,n,`function`),this.$button=document.createElement(`button`),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener(`click`,e=>{e.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener(`touchstart`,()=>{},{passive:!0}),this.$disable=this.$button}},W=class extends I{constructor(e,t,n,r,i,a){super(e,t,n,`number`),this._initInput(),this.min(r),this.max(i);let o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){let e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+`%`}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`number`),this.$input.setAttribute(`step`,`any`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;let e=()=>{let e=parseFloat(this.$input.value);isNaN(e)||(this._stepExplicit&&(e=this._snap(e)),this.setValue(this._clamp(e)))},t=e=>{let t=parseFloat(this.$input.value);isNaN(t)||(this._snapClampSetValue(t+e),this.$input.value=this.getValue())},n=e=>{e.code===`Enter`&&this.$input.blur(),e.code===`ArrowUp`&&(e.preventDefault(),t(this._step*this._arrowKeyMultiplier(e))),e.code===`ArrowDown`&&(e.preventDefault(),t(this._step*this._arrowKeyMultiplier(e)*-1))},r=e=>{this._inputFocused&&(e.preventDefault(),t(this._step*this._normalizeMouseWheel(e)))},i=!1,a,o,s,c,l,u=e=>{a=e.clientX,o=s=e.clientY,i=!0,c=this.getValue(),l=0,window.addEventListener(`mousemove`,d),window.addEventListener(`mouseup`,f)},d=e=>{if(i){let t=e.clientX-a,n=e.clientY-o;Math.abs(n)>5?(e.preventDefault(),this.$input.blur(),i=!1,this._setDraggingStyle(!0,`vertical`)):Math.abs(t)>5&&f()}if(!i){let t=e.clientY-s;l-=t*this._step*this._arrowKeyMultiplier(e),c+l>this._max?l=this._max-c:c+l<this._min&&(l=this._min-c),this._snapClampSetValue(c+l)}s=e.clientY},f=()=>{this._setDraggingStyle(!1,`vertical`),this._callOnFinishChange(),window.removeEventListener(`mousemove`,d),window.removeEventListener(`mouseup`,f)};this.$input.addEventListener(`input`,e),this.$input.addEventListener(`keydown`,n),this.$input.addEventListener(`wheel`,r,{passive:!1}),this.$input.addEventListener(`mousedown`,u),this.$input.addEventListener(`focus`,()=>{this._inputFocused=!0}),this.$input.addEventListener(`blur`,()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement(`div`),this.$slider.classList.add(`slider`),this.$fill=document.createElement(`div`),this.$fill.classList.add(`fill`),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add(`hasSlider`);let e=(e,t,n,r,i)=>(e-t)/(n-t)*(i-r)+r,t=t=>{let n=this.$slider.getBoundingClientRect(),r=e(t,n.left,n.right,this._min,this._max);this._snapClampSetValue(r)},n=e=>{this._setDraggingStyle(!0),t(e.clientX),window.addEventListener(`mousemove`,r),window.addEventListener(`mouseup`,i)},r=e=>{t(e.clientX)},i=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener(`mousemove`,r),window.removeEventListener(`mouseup`,i)},a=!1,o,s,c=e=>{e.preventDefault(),this._setDraggingStyle(!0),t(e.touches[0].clientX),a=!1},l=e=>{e.touches.length>1||(this._hasScrollBar?(o=e.touches[0].clientX,s=e.touches[0].clientY,a=!0):c(e),window.addEventListener(`touchmove`,u,{passive:!1}),window.addEventListener(`touchend`,d))},u=e=>{if(a){let t=e.touches[0].clientX-o,n=e.touches[0].clientY-s;Math.abs(t)>Math.abs(n)?c(e):(window.removeEventListener(`touchmove`,u),window.removeEventListener(`touchend`,d))}else e.preventDefault(),t(e.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener(`touchmove`,u),window.removeEventListener(`touchend`,d)},f=this._callOnFinishChange.bind(this),p;this.$slider.addEventListener(`mousedown`,n),this.$slider.addEventListener(`touchstart`,l,{passive:!1}),this.$slider.addEventListener(`wheel`,e=>{if(Math.abs(e.deltaX)<Math.abs(e.deltaY)&&this._hasScrollBar)return;e.preventDefault();let t=this._normalizeMouseWheel(e)*this._step;this._snapClampSetValue(this.getValue()+t),this.$input.value=this.getValue(),clearTimeout(p),p=setTimeout(f,400)},{passive:!1})}_setDraggingStyle(e,t=`horizontal`){this.$slider&&this.$slider.classList.toggle(`active`,e),document.body.classList.toggle(`lil-gui-dragging`,e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){let e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}},G=class extends I{constructor(e,t,n,r){super(e,t,n,`option`),this.$select=document.createElement(`select`),this.$select.setAttribute(`aria-labelledby`,this.$name.id),this.$display=document.createElement(`div`),this.$display.classList.add(`display`),this._values=Array.isArray(r)?r:Object.values(r),this._names=Array.isArray(r)?r:Object.keys(r),this._names.forEach(e=>{let t=document.createElement(`option`);t.innerHTML=e,this.$select.appendChild(t)}),this.$select.addEventListener(`change`,()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener(`focus`,()=>{this.$display.classList.add(`focus`)}),this.$select.addEventListener(`blur`,()=>{this.$display.classList.remove(`focus`)}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){let e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}},K=class extends I{constructor(e,t,n){super(e,t,n,`string`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`text`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$input.addEventListener(`input`,()=>{this.setValue(this.$input.value)}),this.$input.addEventListener(`keydown`,e=>{e.code===`Enter`&&this.$input.blur()}),this.$input.addEventListener(`blur`,()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},q=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function J(e){let t=document.createElement(`style`);t.innerHTML=e;let n=document.querySelector(`head link[rel=stylesheet], head style`);n?document.head.insertBefore(t,n):document.head.appendChild(t)}var Y=!1,X=class e{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:r,title:i=`Controls`,closeFolders:a=!1,injectStyles:o=!0,touchStyles:s=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement(`div`),this.domElement.classList.add(`lil-gui`),this.$title=document.createElement(`div`),this.$title.classList.add(`title`),this.$title.setAttribute(`role`,`button`),this.$title.setAttribute(`aria-expanded`,!0),this.$title.setAttribute(`tabindex`,0),this.$title.addEventListener(`click`,()=>this.openAnimated(this._closed)),this.$title.addEventListener(`keydown`,e=>{(e.code===`Enter`||e.code===`Space`)&&(e.preventDefault(),this.$title.click())}),this.$title.addEventListener(`touchstart`,()=>{},{passive:!0}),this.$children=document.createElement(`div`),this.$children.classList.add(`children`),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(i),s&&this.domElement.classList.add(`allow-touch-styles`),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add(`root`),!Y&&o&&(J(q),Y=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add(`autoPlace`),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty(`--width`,r+`px`),this._closeFolders=a,this.domElement.addEventListener(`keydown`,e=>e.stopPropagation()),this.domElement.addEventListener(`keyup`,e=>e.stopPropagation())}add(e,t,n,r,i){if(Object(n)===n)return new G(this,e,t,n);let a=e[t];switch(typeof a){case`number`:return new W(this,e,t,n,r,i);case`boolean`:return new L(this,e,t);case`string`:return new K(this,e,t);case`function`:return new U(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,n=1){return new ne(this,e,t,n)}addFolder(t){let n=new e({parent:this,title:t});return this.root._closeFolders&&n.close(),n}load(e,t=!0){return e.controllers&&this.controllers.forEach(t=>{t instanceof U||t._name in e.controllers&&t.load(e.controllers[t._name])}),t&&e.folders&&this.folders.forEach(t=>{t._title in e.folders&&t.load(e.folders[t._title])}),this}save(e=!0){let t={controllers:{},folders:{}};return this.controllers.forEach(e=>{if(!(e instanceof U)){if(e._name in t.controllers)throw Error(`Cannot save GUI with duplicate property "${e._name}"`);t.controllers[e._name]=e.save()}}),e&&this.folders.forEach(e=>{if(e._title in t.folders)throw Error(`Cannot save GUI with duplicate folder "${e._title}"`);t.folders[e._title]=e.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute(`aria-expanded`,!this._closed),this.domElement.classList.toggle(`closed`,this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?`none`:``,this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute(`aria-expanded`,!this._closed),requestAnimationFrame(()=>{let t=this.$children.clientHeight;this.$children.style.height=t+`px`,this.domElement.classList.add(`transition`);let n=e=>{e.target===this.$children&&(this.$children.style.height=``,this.domElement.classList.remove(`transition`),this.$children.removeEventListener(`transitionend`,n))};this.$children.addEventListener(`transitionend`,n);let r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle(`closed`,!e),requestAnimationFrame(()=>{this.$children.style.height=r+`px`})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(e=>e.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}},Z=class{constructor(){this.active=window.location.hash===`#debug`,this.active&&(this.ui=new X({container:document.querySelector(`.debug`)}))}},re=()=>`
        <nav id="nav" aria-label="Primary navigation">
            <button type="button" data-view="about" aria-pressed="false">About</button>
        </nav> 
    `,ie=()=>`

        <ul id="links">
            <li><a href="https://www.instagram.com/cyrstem/" target="_blank" rel="noopener noreferrer"><img src="insta.png" alt="Instagram"></a></li>
            <li><a href="https://ec.linkedin.com/in/jacobohz" target="_blank" rel="noopener noreferrer"><img src="in.png" alt="LinkedIn"></a></li>
            <li><a href="https://github.com/cyrstem/" target="_blank" rel="noopener noreferrer"><img src="git.png" alt="GitHub"></a></li>
        </ul>
    `,ae=()=>`
      <main>
        <div id="content" class="content">
          <h3 class="warning">Full experience on Desktop</h3>
          <p>I'm Jacobo Heredia, a Creative Developer and Front-End Developer based in Quito with 15+ years of experience creating custom digital and physical experiences that blend technology, design, and interactivity.</p>
          <p>I'm a self-taught developer and fast learner specializing in WebGL, JavaScript, C++, OpenGL, GLSL, creative coding, and interactive systems. In recent years, my work has expanded into Machine Learning, Computational Thinking, and Unreal Engine development.</p>
          <p>I'm currently working with <a href="https://thegardeninthemachine.com/" target="_blank" rel="noopener noreferrer">the Garden in the Machine</a> as a Creative Developer, exploring generative systems, emergent behaviors, and AI-driven experiences.</p>
          <p>I also collaborated on the research paper <a href="https://openreview.net/forum?id=pKXJ0wQ3Vn" target="_blank" rel="noopener noreferrer">Orchestrating Emergent Storytelling with Embodied Multi-Agent Systems</a>, presented at OpenReview.</p>
            <div>
              <p>Previously, I have collaborated with:</p>
              <ul id="sites">
              <li>
              <a href="https://activetheory.net/" target="_blank" rel="noopener noreferrer">
                <span>Active Theory //## WebGL Developer </span>
                <span> </span>
              </a>
            </li>
              <li>
              <a href="https://visualgoodness.com/" target="_blank" rel="noopener noreferrer">
                <span>Visual Goodness //## WebGL Developer</span>
                <span> </span>
              </a>
              </li>
              <li>
              <a href="https://smartco.com.ec" target="_blank" rel="noopener noreferrer">
                <span>Smartco //## Unity Developer </span>
                <span> </span>
              </a>
            </li>
              <li>
                <a href="https://www.yaesta.com" target="_blank" rel="noopener noreferrer">
                  <span>YaEsta  //## Front-end & Designer</span>
                  <span> </span>
                </a>
              </li>
              </ul>
          </div>
      <p>Contact: <b>cyrstem[at]gmail[dot]com</b></p>
    </div>
    </main>
      `,oe=class{constructor({onAboutToggle:e}={}){this.onAboutToggle=e,this.aboutOpen=!1,this.transitioning=!1,this.initHTML(),this.addListeners(),this.render()}initHTML(){let e=document.getElementById(`ui`),t=document.getElementById(`contact`);e&&(e.innerHTML=re()),t&&(t.innerHTML=ie())}addListeners(){this.nav=document.getElementById(`nav`),this.nav&&(this.handleNavClickBound=this.handleNavClick.bind(this),this.nav.addEventListener(`click`,this.handleNavClickBound))}async handleNavClick(e){if(!e.target.closest(`[data-view='about']`)||(e.preventDefault(),this.transitioning))return;let t=!this.aboutOpen;typeof this.onAboutToggle==`function`&&(this.transitioning=!0,await this.onAboutToggle(t),this.transitioning=!1),this.aboutOpen=t,this.updateNavState(),this.render()}updateNavState(){if(!this.nav)return;let e=this.nav.querySelector(`[data-view='about']`);e&&(e.classList.toggle(`is-active`,this.aboutOpen),e.setAttribute(`aria-pressed`,this.aboutOpen?`true`:`false`))}render(){let e=document.getElementById(`about-root`);e&&(this.aboutOpen?(document.dispatchEvent(new CustomEvent(`portfolio:closeDetail`)),e.hidden=!1,e.innerHTML=ae(),document.body.classList.add(`about-is-open`)):(e.hidden=!0,e.innerHTML=``,document.body.classList.remove(`about-is-open`)))}destroy(){this.nav&&this.handleNavClickBound&&this.nav.removeEventListener(`click`,this.handleNavClickBound)}},Q=(e,t=100)=>{let n=null,r=0;return(...i)=>{let a=Date.now(),o=t-(a-r);if(o<=0){n&&=(clearTimeout(n),null),r=a,e(...i);return}n||=setTimeout(()=>{r=Date.now(),n=null,e(...i)},o)}},$=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}`,se=`precision highp float;

uniform sampler2D uScene;
uniform sampler2D uPort0;
uniform sampler2D uPort1;
uniform sampler2D uPort2;
uniform sampler2D uPort3;

uniform float uTime;
uniform vec2 uResolution;
uniform float uIntensity;
uniform float uActive;
uniform float uAboutTransition;
uniform float uAboutOpen;
uniform float uAboutMorphing;
uniform float uRevealActive;
uniform sampler2D uFluidMask;
uniform sampler2D uSceneBackdrop;
uniform vec2 uAreaCenter;
uniform vec2 uAreaRadius;

varying vec2 vUv;

float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float luma(vec3 c) {
  return dot(c, vec3(0.299, 0.587, 0.114));
}

vec3 samplePortfolio(vec2 uv, float pick) {
  vec3 p0 = texture2D(uPort0, uv).rgb;
  vec3 p1 = texture2D(uPort1, uv).rgb;
  vec3 p2 = texture2D(uPort2, uv).rgb;
  vec3 p3 = texture2D(uPort3, uv).rgb;
  float i = clamp(floor(pick * 4.0), 0.0, 3.0);
  float w0 = 1.0 - step(1.0, i);
  float w1 = step(1.0, i) * (1.0 - step(2.0, i));
  float w2 = step(2.0, i) * (1.0 - step(3.0, i));
  float w3 = step(3.0, i);
  return w0 * p0 + w1 * p1 + w2 * p2 + w3 * p3;
}

void main() {
  vec3 hiddenBg = vec3(0.93);

  
  if (uAboutOpen > 0.5) {
    vec3 sceneCol = texture2D(uScene, vUv).rgb;
    vec3 backdropCol = texture2D(uSceneBackdrop, vUv).rgb;
    vec3 paper = vec3(0.9372549);

    float distPaper = distance(sceneCol, paper);
    float onPaper = 1.0 - smoothstep(0.03, 0.12, distPaper);

    vec3 outCol = sceneCol;
    if (uRevealActive > 0.5) {
      float maskSample = texture2D(uFluidMask, vUv).r;
      float reveal = smoothstep(0.02, 0.98, 1.0 - maskSample);
      vec3 fluidPaper = mix(sceneCol, backdropCol, reveal);
      outCol = mix(sceneCol, fluidPaper, onPaper);
    }
    gl_FragColor = vec4(outCol, 1.0);
    return;
  }

  
  if (uRevealActive < 0.5 && uAboutMorphing < 0.5) {
    gl_FragColor = vec4(hiddenBg, 1.0);
    return;
  }

  float t = uTime;
  
  float morph = clamp(uAboutTransition, 0.0, 1.0);
  float lift = morph * 0.38;
  vec2 sceneUv = clamp(vUv + vec2(0.0, -lift), vec2(0.002), vec2(0.998));

  vec3 raw = texture2D(uScene, sceneUv).rgb;
  vec3 clean = vec3(luma(raw));

  float aspect = uResolution.x / max(uResolution.y, 1.0);
  vec2 aspectUv = vec2(vUv.x * aspect, vUv.y);

  
  vec2 macro = floor(aspectUv * vec2(6.5, 10.5) + t * vec2(0.04, 0.061));
  float blockUv = mix(0.024, 0.11, hash21(macro + 203.91));
  vec2 cellId = floor(vUv / blockUv);

  float h0 = hash21(cellId + 77.31);
  float h1 = hash21(cellId + 19.04);
  float h2 = hash21(cellId + 4.27 + floor(t * 2.2));

  
  vec2 traceOff = vec2(
    sin(h0 * 6.2831853 + t * 6.0) * 0.042,
    -fract(h1 + t * 2.1) * 0.075
  ) * uIntensity;
  vec2 traceUv = clamp(sceneUv + traceOff * uActive, vec2(0.002), vec2(0.998));
  vec3 traceGray = vec3(luma(texture2D(uScene, traceUv).rgb));

  
  float pickIdx = hash21(cellId + floor(t * 1.3));
  vec2 portUv = fract(
    vUv * (2.8 + h0 * 2.4)
    + vec2(h2 * 1.7, h1 * 2.1)
    + vec2(t * 0.05 * (pickIdx - 0.5), t * 0.043 * sin(h0 * 8.0 + t))
  );
  vec3 portGray = vec3(luma(samplePortfolio(portUv, pickIdx)));

  
  float tileMix = smoothstep(30.12, 0.96, mix(h0, fract(h2 * 11.713), 0.62));
  vec3 glitchTile = mix(traceGray * 0.55 + clean * 0.45, portGray * 0.58 + traceGray * 0.42, fract(h1 * 8.917 + h0));

  vec2 area = (vUv - uAreaCenter) / max(uAreaRadius, vec2(0.001));
  float areaMask = 1.0 - smoothstep(0.82, 1.04, length(area));
  float g = clamp(uActive * areaMask * uIntensity, 0.0, 1.0);

  vec3 finalColor = mix(clean, glitchTile, tileMix * g);

  
  vec2 dcell = floor(vUv * uResolution * 0.202);
  float dNoise = hash21(dcell - floor(t * 2.0));
  float dissolve = step(1.0 - morph, dNoise) * smoothstep(0.06, 0.92, morph);
  vec3 bg = vec3(0.93);
  finalColor = mix(finalColor, bg, dissolve * 0.9);
  finalColor = mix(finalColor, bg, smoothstep(0.78, 1.0, morph));

  
  vec3 outCol = finalColor;
  if (uRevealActive > 0.5) {
    float maskSample = texture2D(uFluidMask, vUv).r;
    float reveal = 1.0 - maskSample;
    reveal = smoothstep(0.02, 0.98, reveal);
    outCol = mix(hiddenBg, finalColor, reveal);
  }

  gl_FragColor = vec4(outCol, 1.0);
}`,ce=class extends i{constructor(e){super(),this.container=e,this.mouse=new p,this.pointerUv=new p(.5,.5),this.isLowPowerDevice=this.detectLowPowerDevice(),this.state={animating:!1,width:Math.max(1,Math.floor(e.clientWidth)),height:Math.max(1,Math.floor(e.clientHeight)),frameTick:0,aboutOpen:!1,aboutTransition:0,aboutTransitioning:!1,glitchStrength:0,glitchUntil:0,pointerRevealActive:!1},this.config=this.createConfig()}detectLowPowerDevice(){return window.matchMedia(`(max-width: 900px)`).matches||window.matchMedia(`(pointer: coarse)`).matches||window.matchMedia(`(prefers-reduced-motion: reduce)`).matches}createConfig(){return{GRID_COLS:this.isLowPowerDevice?32:46,GRID_ROWS:this.isLowPowerDevice?20:30,GRID_SPREAD:this.isLowPowerDevice?.38:.34,GRID_POINT_SIZE:this.isLowPowerDevice?.2:.14,GRID_GENE_AMPLITUDE:2.35,GRID_MUTATION:.24,GRID_GA_PASSES_PER_FRAME:this.isLowPowerDevice?120:260,CAMERA_DISTANCE:30,SHADER_CONTAINER_SIZE:this.isLowPowerDevice?360:600,MAX_PIXEL_RATIO:this.isLowPowerDevice?1.25:2,TEXTURE_URLS:[`insta-0.png`,`insta-1.png`,`insta-2.png`,`insta-3.png`]}}setViewport(e,t){this.state.width=Math.max(1,Math.floor(e)),this.state.height=Math.max(1,Math.floor(t))}setPointerFromEvent(e){let t=this.container.getBoundingClientRect(),n=(e.clientX-t.left)/Math.max(t.width,1),r=(e.clientY-t.top)/Math.max(t.height,1);this.mouse.x=n*2-1,this.mouse.y=-(r*2-1),this.pointerUv.set(n,1-r),this.state.pointerRevealActive=!0}},le=`
vec4 getRGB(sampler2D image, vec2 uv, float angle, float amount) {
  vec2 offset = vec2(cos(angle), sin(angle)) * amount;
  vec4 r = texture(image, uv + offset);
  vec4 g = texture(image, uv);
  vec4 b = texture(image, uv - offset);
  return vec4(r.r, g.g, b.b, g.a);
}
`,ue=class extends c{constructor(e,t){super({glslVersion:S,uniforms:{tMap:{value:e},tFlow:t,uTime:{value:0},uOpacity:{value:1},uDim:{value:0}},vertexShader:`
        in vec3 position;
        in vec2 uv;

        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        uniform sampler2D tFlow;
        uniform float uTime;

        out vec2 vUv;
        out vec3 vFlow;

        void main() {
          vUv = uv;
          vFlow = texture(tFlow, uv).rgb;

          vec3 transformed = position;
          float wave = sin((uv.x * 5.0 + uv.y * 3.0 + uTime) * 2.2) * 0.035;
          transformed.x += vFlow.r * 0.22;
          transformed.y += vFlow.g * 0.16;
          transformed.z += vFlow.b * 0.36 + wave;

          gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
        }
      `,fragmentShader:`
        precision highp float;

        uniform sampler2D tMap;
        uniform sampler2D tFlow;
        uniform float uOpacity;
        uniform float uDim;

        in vec2 vUv;
        in vec3 vFlow;

        out vec4 FragColor;

        ${le}

        void main() {
          vec3 flow = texture(tFlow, vUv).rgb;
          vec2 uv = clamp(vUv - flow.rg * 0.045, vec2(0.001), vec2(0.999));
          vec2 dir = 0.5 - vUv;
          float angle = atan(dir.y, dir.x);
          float amount = length(flow.rg) * 0.018 + flow.b * 0.004;

          FragColor = getRGB(tMap, uv, angle, amount);
          float gray = dot(FragColor.rgb, vec3(0.299, 0.587, 0.114));
          FragColor.rgb = mix(FragColor.rgb, vec3(gray) * 0.72 + 0.18, uDim);
          FragColor.a *= uOpacity;
        }
      `,blending:1,transparent:!0,depthWrite:!0,side:2})}},de=class extends _{constructor({renderer:t,items:n,isLowPowerDevice:r=!1,onSelect:i}={}){super(),this.renderer=t,this.items=n,this.isLowPowerDevice=r,this.onSelect=i,this.loader=new e,this.planes=[],this.textures=[],this.raycaster=new l,this.pointer=new p(-2,-2),this.lastPointer=new p,this.velocity=new p,this.zeroVelocity=new p,this.lastTime=0,this.lastMoveTime=0,this.size={width:1,height:1},this.focusedPlane=null,this.focusProgress=0,this.position.z=3.6,this.initFloor()}initFloor(){this.reflector=new D({width:512,height:512,blurIterations:this.isLowPowerDevice?3:6});let e=new v({color:new x(14079702),reflectivity:.01,mirror:.045,mixStrength:.24,dithering:!0});e.uniforms.tReflect=this.reflector.renderTargetUniform,e.uniforms.uMatrix=this.reflector.textureMatrixUniform;let n=new t(new u(36,22),e);n.position.y=-3.9,n.position.z=-4.4,n.rotation.x=-Math.PI/2,n.renderOrder=-10,n.add(this.reflector),n.onBeforeRender=(e,t,r)=>{n.visible=!1,this.reflector.update(e,t,r),n.visible=!0},this.floor=n,this.add(n)}async ready(){return(await Promise.all(this.items.map(e=>this.loadTexture(e.image)))).forEach((e,t)=>this.addPlane(this.items[t],e,t)),this}loadTexture(e){return new Promise((t,n)=>{this.loader.load(e,e=>{e.minFilter=k,e.magFilter=k,e.wrapS=e.wrapT=d,this.textures.push(e),t(e)},void 0,n)})}addPlane(e,n,r){let i=new C(this.renderer,{size:this.isLowPowerDevice?96:160,falloff:.18,alpha:.32,dissipation:.965}),o=new ue(n,i.uniform),s=this.isLowPowerDevice?18:32,c=new t(new u(1,1,s,s),o);c.userData.item=e,c.userData.baseIndex=r,c.userData.flowmap=i,c.userData.basePosition=new a,c.userData.baseScale=new a,c.userData.baseRotationY=0,c.userData.focus=0,c.renderOrder=5+r,this.planes.push(c),this.add(c),this.layoutPlane(c,r)}layout(e=this.size.width,t=this.size.height){this.size.width=e,this.size.height=t;let n=Math.max(256,Math.round(e*.55)),r=this.isLowPowerDevice?512:768;this.reflector.setSize(n,r),this.planes.forEach((e,t)=>this.layoutPlane(e,t))}layoutPlane(e,t){let n=Math.max(this.planes.length,this.items.length,1),r=this.isLowPowerDevice?2.35:4.15,i=(n-1)*.5,a=this.isLowPowerDevice?3.15:5.65,o=(t-i)*r,s=this.isLowPowerDevice?.45:.65,c=.55-Math.abs(t-i)*.2;e.position.set(o,s,c),e.userData.basePosition.copy(e.position),e.scale.set(a,a,1),e.userData.baseScale.copy(e.scale),e.userData.baseRotationY=j.degToRad((i-t)*5.5),e.rotation.y=e.userData.baseRotationY}handlePointerMove(e,t,n){this.lastMoveTime=performance.now(),this.updatePointer(e,n),this.updateVelocity(e);let r=this.getPlaneIntersection(t);this.planes.forEach(e=>{let t=e.userData.flowmap;e===r?.object&&r.uv?(t.mouse.copy(r.uv),t.velocity.lerp(this.velocity,this.velocity.length()?.48:.1)):(t.mouse.set(-1,-1),t.velocity.lerp(this.zeroVelocity,.18))})}handleClick(e,t,n){this.updatePointer(e,n);let r=this.getPlaneIntersection(t);return r?.object?.userData.item&&typeof this.onSelect==`function`?(this.focusPlane(r.object),this.onSelect(r.object.userData.item),!0):!1}focusPlane(e){this.focusedPlane=e,this.animateFocus(1)}clearFocus(){this.focusedPlane=null,this.animateFocus(0)}animateFocus(e){E(this),s(this,{focusProgress:e},850,`easeInOutCubic`)}updatePointer(e,t){let n=t.getBoundingClientRect();this.pointer.x=(e.clientX-n.left)/Math.max(n.width,1)*2-1,this.pointer.y=-((e.clientY-n.top)/Math.max(n.height,1)*2-1)}updateVelocity(e){let t=performance.now(),n=new p(e.clientX,e.clientY);this.lastTime||(this.lastTime=t,this.lastPointer.copy(n));let r=Math.max(14,t-this.lastTime);this.velocity.set((n.x-this.lastPointer.x)/r,(n.y-this.lastPointer.y)/r),this.velocity.multiplyScalar(.72),this.lastPointer.copy(n),this.lastTime=t}getPlaneIntersection(e){return this.raycaster.setFromCamera(this.pointer,e),this.raycaster.intersectObjects(this.planes,!1)[0]}update(e){let t=performance.now()-this.lastMoveTime>80;this.planes.forEach((n,r)=>{let i=n.userData.basePosition,a=e*.8+r*.65,o=n===this.focusedPlane,s=o?this.focusProgress:0,c=this.focusedPlane&&!o?this.focusProgress:0,l=r<(this.focusedPlane?.userData.baseIndex??r)?-1:1,u=o?4.85:i.x+l*c*1.7,d=o?.6:i.y,f=o?10.5:i.z-c*1.8,p=o?11.25:n.userData.baseScale.x*(1-c*.28);n.position.x=j.lerp(i.x,u,Math.max(s,c)),n.position.y=j.lerp(i.y+Math.sin(a)*.14,d,s),n.position.z=j.lerp(i.z+Math.cos(a*.73)*.14,f,Math.max(s,c)),n.scale.setScalar(j.lerp(n.userData.baseScale.x,p,Math.max(s,c))),n.scale.z=1,n.rotation.y=j.lerp(n.userData.baseRotationY,o?-.16:n.userData.baseRotationY,s),n.rotation.z=Math.sin(a*.52)*.025*(1-s),n.material.uniforms.uOpacity.value=j.lerp(1,.14,c),n.material.uniforms.uDim.value=c,n.material.uniforms.uTime.value=e,t&&(n.userData.flowmap.mouse.set(-1,-1),n.userData.flowmap.velocity.lerp(this.zeroVelocity,.12)),n.userData.flowmap.update()}),this.floor.material.uniforms.uMirror.value=j.lerp(.045,.018,this.focusProgress),this.floor.material.uniforms.uMixStrength.value=j.lerp(.24,.09,this.focusProgress)}dispose(){this.planes.forEach(e=>{e.geometry.dispose(),e.material.dispose(),e.userData.flowmap.destroy()}),this.textures.forEach(e=>e.dispose()),this.floor.geometry.dispose(),this.floor.material.dispose(),this.reflector.destroy(),E(this)}},fe=class{constructor(e){this.render=this.render.bind(this),this.init(e),this.setupScene(),this.setupLights(),this.bootstrap()}init(e){this.container=e.dom,this.model=new ce(this.container),this.debug=new Z,this.mouse=this.model.mouse,this.pointerUv=this.model.pointerUv,this.textureCache=new Map,this.tempVecA=new a,this.tempVecB=new a,this.tempVecC=new a,this.state=this.model.state,this.config=this.model.config,this.isLowPowerDevice=this.model.isLowPowerDevice,this.ui=new oe({onAboutToggle:this.handleAboutToggle.bind(this)}),this.frameId=null,this.bottomText=null,this.managersReady=!1,this.aboutCanvas=null,this.aboutTexture=null,this.aboutMesh=null,this.cameraWobble=null,this.portfolioScene=null,this.portfolioFlowScene=null}async bootstrap(){await this.setupManagers(),this.setupEvents(),this.showIntro(),h.add(this.render)}setupScene(){this.scene=new r,this.scene.fog=new T(13027014,4,52),this.renderer=new m({antialias:!this.isLowPowerDevice,powerPreference:`high-performance`}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,this.config.MAX_PIXEL_RATIO)),this.renderer.setSize(this.state.width,this.state.height),this.renderer.setClearColor(13158600,1),this.container.appendChild(this.renderer.domElement),this.setupPostProcessing()}setupPostProcessing(){this.postScene=new r,this.postCamera=new n(-1,1,1,-1,0,1),this.renderTarget=new f(this.state.width,this.state.height,{minFilter:k,magFilter:k,format:y}),this.aboutBackdropTarget=new f(this.state.width,this.state.height,{minFilter:k,magFilter:k,format:y});let e=new Uint8Array([240,240,240,255]);this.portfolioPlaceholderTex=new O(e,1,1,y),this.portfolioPlaceholderTex.needsUpdate=!0;let i=new Uint8Array([255,255,255,255]);this.whiteFluidMaskTex=new O(i,1,1,y),this.whiteFluidMaskTex.needsUpdate=!0;let a=new Uint8Array([200,200,200,255]);this.aboutBackdropPlaceholderTex=new O(a,1,1,y),this.aboutBackdropPlaceholderTex.needsUpdate=!0,this.postMaterial=new o({uniforms:{uScene:{value:null},uSceneBackdrop:{value:this.aboutBackdropPlaceholderTex},uTime:{value:0},uResolution:{value:new p(this.state.width,this.state.height)},uIntensity:{value:this.isLowPowerDevice?.3:.51},uActive:{value:0},uAboutTransition:{value:0},uAboutOpen:{value:0},uAboutMorphing:{value:0},uRevealActive:{value:0},uFluidMask:{value:this.whiteFluidMaskTex},uAreaCenter:{value:new p(.5,.5)},uAreaRadius:{value:new p(.36,.3)},uPort0:{value:this.portfolioPlaceholderTex},uPort1:{value:this.portfolioPlaceholderTex},uPort2:{value:this.portfolioPlaceholderTex},uPort3:{value:this.portfolioPlaceholderTex}},vertexShader:$,fragmentShader:se}),this.postQuad=new t(w(),this.postMaterial),this.postQuad.frustumCulled=!1,this.postScene.add(this.postQuad)}setupLights(){let e=[[.2,0,0],[0,0,0]];this.lights=e.map(e=>{let t=new b(16777215,1,0);return t.position.set(...e),this.scene.add(t),t})}async setupManagers(){let[{default:e},{default:t}]=await Promise.all([P(()=>import(`./GeneticGrid-DMg5qTA1.js`),__vite__mapDeps([0,1,2])),P(()=>import(`./CameraManager-YkWatwup.js`),__vite__mapDeps([3,1,2]))]);this.cameraManager=new t(this.config),this.cameraManager.resize(this.state.width,this.state.height),this.cameraWobble=new ee(this.cameraManager.getCamera().position),this.cameraWobble.frequency.set(.72,.46,.31),this.cameraWobble.amplitude.set(.16,.12,.04),this.cameraWobble.scale=this.isLowPowerDevice?.35:1,this.cameraWobble.lerpSpeed=.025,this.geneticGrid=new e(this.scene,this.config),this.portfolioScene=new r,this.portfolioFlowScene=new de({renderer:this.renderer,items:N,isLowPowerDevice:this.isLowPowerDevice,onSelect:e=>document.dispatchEvent(new CustomEvent(`portfolio:openDetail`,{detail:{id:e.id}}))}),this.portfolioScene.add(this.portfolioFlowScene),await this.portfolioFlowScene.ready(),this.portfolioFlowScene.layout(this.state.width,this.state.height),document.body.classList.add(`portfolio-webgl-active`),this.fitGeneticGridToViewport(),this.setupAboutPanel(),this.loadTextures(),this.managersReady=!0,this.debug.active&&this.setupDebugControls()}setupDebugControls(){this.controls=new F(this.cameraManager.getCamera(),this.renderer.domElement),this.debugFolder=this.debug.ui.addFolder(`material`),this.materialParams={color:`#000000`},this.debugFolder.addColor(this.materialParams,`color`).onChange(()=>this.updateMaterials())}updateMaterials(){let e=this.materialParams.color;(this.geneticGrid?.getPickMeshes()||[]).forEach(t=>{t.material?.color&&t.material.color.set(e)})}loadTextures(){let t=new e(new M(()=>this.assignPortfolioTexturesToPostShader()));this.textures=this.config.TEXTURE_URLS.map(e=>{if(this.textureCache.has(e))return this.textureCache.get(e);let n=t.load(e);return this.textureCache.set(e,n),n}),setTimeout(()=>this.assignPortfolioTexturesToPostShader(),0)}assignPortfolioTexturesToPostShader(){!this.postMaterial?.uniforms||!this.textures?.length||this.textures.forEach((e,t)=>{if(!e||t>3)return;e.wrapS=e.wrapT=d,e.minFilter=e.magFilter=k;let n=this.postMaterial.uniforms[`uPort${t}`];n&&(n.value=e)})}setupEvents(){this.handleResize=Q(this.resize.bind(this),100),this.handleMouseMove=Q(this.onMouseMove.bind(this),16),this.handleBottomTextHoverBound=this.handleBottomTextHover.bind(this),this.handleSceneClickBound=this.handleSceneClick.bind(this),this.handlePortfolioDetailClosedBound=this.handlePortfolioDetailClosed.bind(this),window.addEventListener(`resize`,this.handleResize),typeof ResizeObserver<`u`&&this.container&&(this._resizeObserver=new ResizeObserver(()=>this.handleResize()),this._resizeObserver.observe(this.container)),this.isLowPowerDevice?this.container&&(this.handlePointerMoveBound=this.handlePointerMove.bind(this),this.container.addEventListener(`pointermove`,this.handlePointerMoveBound),this.container.addEventListener(`pointerdown`,this.handlePointerMoveBound)):window.addEventListener(`mousemove`,this.handleMouseMove),this.container.addEventListener(`click`,this.handleSceneClickBound),document.addEventListener(`portfolio:detailClosed`,this.handlePortfolioDetailClosedBound),this.bottomText=document.getElementById(`bottom-text`),this.bottomText&&!this.isLowPowerDevice&&this.bottomText.addEventListener(`mouseenter`,this.handleBottomTextHoverBound),requestAnimationFrame(()=>this.resize())}async handleAboutToggle(e){if(e){this.state.glitchUntil=0,this.geneticGrid.animateDissolveAscent(.95),await this.playAboutTransition(),this.state.aboutOpen=!0,this.showAbout();return}this.state.aboutOpen=!1,this.state.aboutTransition=0,this.postMaterial&&(this.postMaterial.uniforms.uAboutTransition.value=0),this.showIntro()}playAboutTransition(){return this.state.aboutTransitioning?Promise.resolve():(this.state.aboutTransitioning=!0,this.state.aboutTransition=0,E(this.state),s(this.state,{aboutTransition:1},950,`easeInOutCubic`).then(()=>{this.state.aboutTransitioning=!1,this.state.aboutTransition=0,this.postMaterial&&(this.postMaterial.uniforms.uAboutTransition.value=0)}))}showIntro(){this.geneticGrid&&(this.aboutMesh&&(this.aboutMesh.visible=!1),this.geneticGrid.restoreLayout(),this.geneticGrid.getMain().visible=!0,this.geneticGrid.getGeos().position.set(0,0,0),this.geneticGrid.getGeos().rotation.set(0,0,0),this.geneticGrid.showGrid(),this.portfolioFlowScene&&(this.portfolioFlowScene.visible=!0),this.state.pointerRevealActive=!1,this.postMaterial&&(this.postMaterial.uniforms.uRevealActive.value=0,this.postMaterial.uniforms.uFluidMask.value=this.whiteFluidMaskTex))}showAbout(){this.geneticGrid&&(this.geneticGrid.hideGrid(),this.portfolioFlowScene&&(this.portfolioFlowScene.visible=!1),this.aboutMesh&&(this.aboutMesh.visible=!0,this.drawAboutCanvas(),this.aboutTexture&&(this.aboutTexture.needsUpdate=!0)))}setupAboutPanel(){this.aboutCanvas=document.createElement(`canvas`),this.aboutCanvas.width=2048,this.aboutCanvas.height=1365,this.drawAboutCanvas(),this.aboutTexture=new te(this.aboutCanvas),this.aboutTexture.needsUpdate=!0,this.aboutMaterial=new A({map:this.aboutTexture,transparent:!1,fog:!1,depthTest:!1,depthWrite:!1,side:2}),this.aboutMesh=new t(new u(20,13),this.aboutMaterial),this.aboutMesh.position.set(0,-.15,.4),this.aboutMesh.renderOrder=20,this.aboutMesh.visible=!1,this.scene.add(this.aboutMesh),this.updateAboutPanelLayout(),document.fonts?.ready&&document.fonts.ready.then(()=>{this.drawAboutCanvas(),this.aboutTexture&&(this.aboutTexture.needsUpdate=!0)})}drawAboutCanvas(){if(!this.aboutCanvas)return;let e=this.aboutCanvas.getContext(`2d`);if(!e)return;let{width:t,height:n}=this.aboutCanvas;e.clearRect(0,0,t,n),e.fillStyle=`rgba(239,239,239,0.97)`,e.fillRect(0,0,t,n);let r=180,i=Math.min(1320,t-260*2);e.fillStyle=`#111111`,e.font=`700 58px Rajdhani, sans-serif`,e.fillText(`About`,260,r),r+=88,e.fillStyle=`#202020`,e.font=`500 46px Rajdhani, sans-serif`,r=this.drawWrappedText(e,`I'm Jacob, a Creative Developer and Front-End Developer based in Quito - Ecuador, specialized in building custom digital or physical experiences.`,260,r,i,62),r+=26,r=this.drawWrappedText(e,`Self-taught developer, fast learner that works with WebGL, JS, C++, OpenGL, GLSL and recently working with Machine Learning, Computational Thinking, AI and Unreal Engine.`,260,r,i,62),r+=36,e.fillStyle=`#131313`,e.font=`700 52px Rajdhani, sans-serif`,e.fillText(`I have collaborated with:`,260,r),r+=84,e.fillStyle=`#202020`,e.font=`500 44px Rajdhani, sans-serif`,[`the Garden in the machine -- Creative Developer`,`Active Theory -- WebGL Developer`,`Visual Goodness -- WebGL Developer`,`Smartco -- Unity Developer`,`YaEsta -- Front-end & Designer`].forEach(t=>{e.fillText(`• ${t}`,284,r),r+=72}),r+=28,e.fillStyle=`#141414`,e.font=`600 48px Rajdhani, sans-serif`,e.fillText(`Contact me at cyrstem[at]gmail[dot]com`,260,r)}drawWrappedText(e,t,n,r,i,a){let o=t.split(` `),s=``,c=r;return o.forEach(t=>{let r=`${s}${t} `;e.measureText(r).width>i&&s!==``?(e.fillText(s.trimEnd(),n,c),s=`${t} `,c+=a):s=r}),s&&(e.fillText(s.trimEnd(),n,c),c+=a),c}updateAboutPanelLayout(){if(!this.aboutMesh||!this.cameraManager)return;let{width:e,height:t}=g(this.cameraManager.getCamera(),this.aboutMesh.position.z);this.aboutMesh.scale.set(e*.95,t*.92,1)}handlePointerMove(e){if(this.state.aboutOpen){this.updateMousePosition(e);return}this.updateMousePosition(e),this.handleGridInteraction()}onMouseMove(e){if(this.state.aboutOpen){this.updateMousePosition(e);return}this.updateMousePosition(e),this.handleGridInteraction()}updateMousePosition(e){this.model.setPointerFromEvent(e),this.state.pointerRevealActive=!1,this.portfolioFlowScene?.handlePointerMove(e,this.cameraManager.getCamera(),this.container)}handleGridInteraction(){this.geneticGrid.setMouseWorld(this.mouse.x*14,this.mouse.y*11,1)}handleSceneClick(e){this.portfolioFlowScene?.handleClick(e,this.cameraManager.getCamera(),this.container)}handlePortfolioDetailClosed(){this.portfolioFlowScene?.clearFocus()}handleBottomTextHover(){this.geneticGrid?.pulseRandomDot()}resize(){let e=Math.max(1,Math.floor(this.container.clientWidth)),t=Math.max(1,Math.floor(this.container.clientHeight));this.model.setViewport(e,t),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,this.config.MAX_PIXEL_RATIO)),this.renderer.setSize(e,t),this.renderTarget&&this.renderTarget.setSize(e,t),this.aboutBackdropTarget&&this.aboutBackdropTarget.setSize(e,t),this.postMaterial&&this.postMaterial.uniforms.uResolution.value.set(this.state.width,this.state.height),this.cameraManager&&this.cameraManager.resize(this.state.width,this.state.height),this.fitGeneticGridToViewport(),this.portfolioFlowScene?.layout(e,t),this.updateAboutPanelLayout()}fitGeneticGridToViewport(){if(!this.geneticGrid||!this.cameraManager)return;let e=this.cameraManager.getCamera(),t=this.geneticGrid.getGeos(),n=g(e,0),r=n.height*.5,i=n.width*.5,a=(this.config.GRID_COLS-1)*this.config.GRID_SPREAD/2,o=(this.config.GRID_ROWS-1)*this.config.GRID_SPREAD/2,s=.99*Math.min(i/Math.max(a,1e-5),r/Math.max(o,1e-5));t.scale.setScalar(s)}render(e=performance.now()*.001){this.managersReady&&(this.state.frameTick+=1,(!this.isLowPowerDevice||this.state.frameTick%2==0)&&(this.cameraWobble?.update(e*.35),this.geneticGrid.update(e,this.state.aboutTransitioning),this.portfolioFlowScene?.update(e)),this.renderWithPostProcessing(e))}renderWithPostProcessing(e=performance.now()*.001){if(!this.renderTarget||!this.postMaterial){this.renderer.render(this.scene,this.cameraManager.getCamera());return}let t=performance.now();this.postMaterial.uniforms.uTime.value=e;let n=this.state.aboutTransitioning?this.state.aboutTransition:0;if(this.postMaterial.uniforms.uAboutTransition.value=n,this.postMaterial.uniforms.uAboutOpen.value=+!!this.state.aboutOpen,this.postMaterial.uniforms.uAboutMorphing.value=+!!this.state.aboutTransitioning,this.postMaterial.uniforms.uRevealActive.value=+!!this.state.pointerRevealActive,this.updateGlitchState(t),this.updateGridAreaMask(),this.state.aboutOpen&&this.aboutBackdropTarget&&this.aboutMesh&&this.geneticGrid){let e=this.cameraManager.getCamera(),t=this.aboutMesh.visible,n=this.geneticGrid.getMain().visible;this.aboutMesh.visible=!1,this.geneticGrid.getMain().visible=!0,this.renderer.setRenderTarget(this.aboutBackdropTarget),this.renderer.render(this.scene,e),this.aboutMesh.visible=t,this.geneticGrid.getMain().visible=n,this.renderer.setRenderTarget(null),this.postMaterial.uniforms.uSceneBackdrop.value=this.aboutBackdropTarget.texture}else this.postMaterial.uniforms.uSceneBackdrop&&(this.postMaterial.uniforms.uSceneBackdrop.value=this.aboutBackdropPlaceholderTex);this.renderer.setRenderTarget(this.renderTarget),this.renderer.render(this.scene,this.cameraManager.getCamera()),this.postMaterial.uniforms.uScene.value=this.renderTarget.texture,this.renderer.setRenderTarget(null),this.renderer.render(this.postScene,this.postCamera),this.renderPortfolioLayer()}renderPortfolioLayer(){if(!this.portfolioScene||!this.portfolioFlowScene||this.state.aboutOpen)return;let e=this.renderer.autoClear;this.renderer.autoClear=!1,this.renderer.clearDepth(),this.renderer.render(this.portfolioScene,this.cameraManager.getCamera()),this.renderer.autoClear=e}updateGlitchState(e){let t=+(!this.state.aboutOpen&&e<this.state.glitchUntil);this.state.glitchStrength+=(t-this.state.glitchStrength)*.12,this.postMaterial.uniforms.uActive.value=this.state.glitchStrength}updateGridAreaMask(){if(!this.geneticGrid||!this.cameraManager||!this.postMaterial)return;let e=this.geneticGrid.getGeos(),t=this.cameraManager.getCamera(),n=(this.config.GRID_COLS-1)*this.config.GRID_SPREAD/2,r=(this.config.GRID_ROWS-1)*this.config.GRID_SPREAD/2,i=e.getWorldPosition(this.tempVecA).clone().project(t),a=e.localToWorld(this.tempVecB.set(n*.92,0,0)).clone().project(t),o=e.localToWorld(this.tempVecC.set(0,r*.92,0)).clone().project(t),s=i.x*.5+.5,c=i.y*-.5+.5,l=Math.max(.12,Math.min(.55,Math.abs(a.x-i.x)*1.05)),u=Math.max(.12,Math.min(.55,Math.abs(o.y-i.y)*1.15));this.postMaterial.uniforms.uAreaCenter.value.set(s,c),this.postMaterial.uniforms.uAreaRadius.value.set(l,u)}dispose(){this.removeEventListeners(),this.cleanupResources(),h.remove(this.render),this.ui.destroy()}removeEventListeners(){window.removeEventListener(`resize`,this.handleResize),this._resizeObserver&&this.container&&(this._resizeObserver.unobserve(this.container),this._resizeObserver.disconnect(),this._resizeObserver=null),this.isLowPowerDevice&&this.container&&this.handlePointerMoveBound&&(this.container.removeEventListener(`pointermove`,this.handlePointerMoveBound),this.container.removeEventListener(`pointerdown`,this.handlePointerMoveBound)),this.container&&this.handleSceneClickBound&&this.container.removeEventListener(`click`,this.handleSceneClickBound),this.handlePortfolioDetailClosedBound&&document.removeEventListener(`portfolio:detailClosed`,this.handlePortfolioDetailClosedBound),this.isLowPowerDevice||window.removeEventListener(`mousemove`,this.handleMouseMove),this.bottomText&&this.bottomText.removeEventListener(`mouseenter`,this.handleBottomTextHoverBound)}cleanupResources(){E(this.state),this.scene.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(e.material.map&&e.material.map.dispose(),e.material.dispose())}),this.textureCache.forEach(e=>e.dispose()),this.textureCache.clear(),this.renderer.dispose(),this.controls&&this.controls.dispose(),this.renderTarget&&this.renderTarget.dispose(),this.aboutBackdropTarget&&this.aboutBackdropTarget.dispose(),this.aboutBackdropPlaceholderTex&&this.aboutBackdropPlaceholderTex.dispose(),this.postQuad?.geometry&&this.postQuad.geometry.dispose(),this.postMaterial&&this.postMaterial.dispose(),this.portfolioPlaceholderTex&&this.portfolioPlaceholderTex.dispose(),this.whiteFluidMaskTex&&this.whiteFluidMaskTex.dispose(),this.aboutTexture&&this.aboutTexture.dispose(),this.aboutMesh?.geometry&&this.aboutMesh.geometry.dispose(),this.aboutMaterial&&this.aboutMaterial.dispose(),this.portfolioFlowScene&&this.portfolioFlowScene.dispose(),this.model&&this.model.destroy(),document.body.classList.remove(`portfolio-webgl-active`)}};export{fe as default};