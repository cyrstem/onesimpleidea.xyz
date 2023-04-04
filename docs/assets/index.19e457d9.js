var Nh=Object.defineProperty;var zh=(o,t,e)=>t in o?Nh(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var le=(o,t,e)=>(zh(o,typeof t!="symbol"?t+"":t,e),e);const Uh=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}};Uh();function kh(){if(window.navigator.userAgent.toLowerCase().indexOf("chrome")>-1){const o=[`
 %c ->> created by cyrstem 
`,"border: 1px solid #000;color: #fff; background: #171717; padding:5px 0;"];window.console.log.apply(console,o)}else window.console&&window.console.log("-created by cyrstem  -")}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ya="144",Ti={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ei={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Bh=0,vo=1,Vh=2,oc=1,Gh=2,xr=3,Ji=0,qe=1,zn=2,Vn=0,Yi=1,yo=2,bo=3,Mo=4,Hh=5,Gi=100,Wh=101,Xh=102,So=103,wo=104,qh=200,Yh=201,$h=202,jh=203,lc=204,cc=205,Zh=206,Kh=207,Jh=208,Qh=209,tu=210,eu=0,nu=1,iu=2,Ma=3,ru=4,su=5,au=6,ou=7,$a=0,lu=1,cu=2,wn=0,hu=1,uu=2,du=3,fu=4,pu=5,hc=300,Qi=301,tr=302,Sa=303,wa=304,Ms=306,Ta=1e3,tn=1001,Ea=1002,_e=1003,To=1004,Eo=1005,Ve=1006,mu=1007,Ss=1008,pi=1009,gu=1010,_u=1011,uc=1012,xu=1013,ri=1014,si=1015,Er=1016,vu=1017,yu=1018,$i=1020,bu=1021,Mu=1022,on=1023,Su=1024,wu=1025,li=1026,er=1027,Tu=1028,Eu=1029,Au=1030,Cu=1031,Lu=1033,Rs=33776,Is=33777,Os=33778,Fs=33779,Ao=35840,Co=35841,Lo=35842,Po=35843,Pu=36196,Do=37492,Ro=37496,Io=37808,Oo=37809,Fo=37810,No=37811,zo=37812,Uo=37813,ko=37814,Bo=37815,Vo=37816,Go=37817,Ho=37818,Wo=37819,Xo=37820,qo=37821,Yo=36492,mi=3e3,Xt=3001,Du=3200,Ru=3201,dc=0,Iu=1,vn="srgb",ai="srgb-linear",Ns=7680,Ou=519,$o=35044,jo="300 es",Aa=1035;class vi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zs=Math.PI/180,Zo=180/Math.PI;function Fr(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ce[o&255]+ce[o>>8&255]+ce[o>>16&255]+ce[o>>24&255]+"-"+ce[t&255]+ce[t>>8&255]+"-"+ce[t>>16&15|64]+ce[t>>24&255]+"-"+ce[e&63|128]+ce[e>>8&255]+"-"+ce[e>>16&255]+ce[e>>24&255]+ce[n&255]+ce[n>>8&255]+ce[n>>16&255]+ce[n>>24&255]).toLowerCase()}function xe(o,t,e){return Math.max(t,Math.min(e,o))}function Fu(o,t){return(o%t+t)%t}function Us(o,t,e){return(1-e)*o+e*t}function Ko(o){return(o&o-1)===0&&o!==0}function Ca(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Vr(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ee(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class wt{constructor(t=0,e=0){wt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,r,a,s,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=s,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],s=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],m=n[5],_=n[8],f=i[0],p=i[3],g=i[6],y=i[1],M=i[4],b=i[7],x=i[2],A=i[5],L=i[8];return r[0]=a*f+s*y+c*x,r[3]=a*p+s*M+c*A,r[6]=a*g+s*b+c*L,r[1]=l*f+h*y+u*x,r[4]=l*p+h*M+u*A,r[7]=l*g+h*b+u*L,r[2]=d*f+m*y+_*x,r[5]=d*p+m*M+_*A,r[8]=d*g+m*b+_*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],s=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*s*l-n*r*h+n*s*c+i*r*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],s=t[5],c=t[6],l=t[7],h=t[8],u=h*a-s*l,d=s*c-h*r,m=l*r-a*c,_=e*u+n*d+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const f=1/_;return t[0]=u*f,t[1]=(i*l-h*n)*f,t[2]=(s*n-i*a)*f,t[3]=d*f,t[4]=(h*e-i*c)*f,t[5]=(i*r-s*e)*f,t[6]=m*f,t[7]=(n*c-l*e)*f,t[8]=(a*e-n*r)*f,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,s){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*s)+a+t,-i*l,i*c,-i*(-l*a+c*s)+s+e,0,0,1),this}scale(t,e){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=e,n[4]*=e,n[7]*=e,this}rotate(t){const e=Math.cos(t),n=Math.sin(t),i=this.elements,r=i[0],a=i[3],s=i[6],c=i[1],l=i[4],h=i[7];return i[0]=e*r+n*c,i[3]=e*a+n*l,i[6]=e*s+n*h,i[1]=-n*r+e*c,i[4]=-n*a+e*l,i[7]=-n*s+e*h,this}translate(t,e){const n=this.elements;return n[0]+=t*n[2],n[3]+=t*n[5],n[6]+=t*n[8],n[1]+=e*n[2],n[4]+=e*n[5],n[7]+=e*n[8],this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}function fc(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Ar(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function ci(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function cs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const ks={[vn]:{[ai]:ci},[ai]:{[vn]:cs}},Ze={legacyMode:!0,get workingColorSpace(){return ai},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,t,e){if(this.legacyMode||t===e||!t||!e)return o;if(ks[t]&&ks[t][e]!==void 0){const n=ks[t][e];return o.r=n(o.r),o.g=n(o.g),o.b=n(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,t){return this.convert(o,this.workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this.workingColorSpace)}},pc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ne={r:0,g:0,b:0},Ke={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function Bs(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}function Hr(o,t){return t.r=o.r,t.g=o.g,t.b=o.b,t}class Ft{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=vn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ze.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ai){return this.r=t,this.g=e,this.b=n,Ze.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ai){if(t=Fu(t,1),e=xe(e,0,1),n=xe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Bs(a,r,t+1/3),this.g=Bs(a,r,t),this.b=Bs(a,r,t-1/3)}return Ze.toWorkingColorSpace(this,i),this}setStyle(t,e=vn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],s=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Ze.toWorkingColorSpace(this,e),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Ze.toWorkingColorSpace(this,e),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const c=parseFloat(r[1])/360,l=parseFloat(r[2])/100,h=parseFloat(r[3])/100;return n(r[4]),this.setHSL(c,l,h,e)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Ze.toWorkingColorSpace(this,e),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Ze.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=vn){const n=pc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ci(t.r),this.g=ci(t.g),this.b=ci(t.b),this}copyLinearToSRGB(t){return this.r=cs(t.r),this.g=cs(t.g),this.b=cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=vn){return Ze.fromWorkingColorSpace(Hr(this,ne),t),xe(ne.r*255,0,255)<<16^xe(ne.g*255,0,255)<<8^xe(ne.b*255,0,255)<<0}getHexString(t=vn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ai){Ze.fromWorkingColorSpace(Hr(this,ne),e);const n=ne.r,i=ne.g,r=ne.b,a=Math.max(n,i,r),s=Math.min(n,i,r);let c,l;const h=(s+a)/2;if(s===a)c=0,l=0;else{const u=a-s;switch(l=h<=.5?u/(a+s):u/(2-a-s),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ai){return Ze.fromWorkingColorSpace(Hr(this,ne),e),t.r=ne.r,t.g=ne.g,t.b=ne.b,t}getStyle(t=vn){return Ze.fromWorkingColorSpace(Hr(this,ne),t),t!==vn?`color(${t} ${ne.r} ${ne.g} ${ne.b})`:`rgb(${ne.r*255|0},${ne.g*255|0},${ne.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(Ke),Ke.h+=t,Ke.s+=e,Ke.l+=n,this.setHSL(Ke.h,Ke.s,Ke.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ke),t.getHSL(Gr);const n=Us(Ke.h,Gr.h,e),i=Us(Ke.s,Gr.s,e),r=Us(Ke.l,Gr.l,e);return this.setHSL(n,i,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ft.NAMES=pc;let Ai;class mc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ai===void 0&&(Ai=Ar("canvas")),Ai.width=t.width,Ai.height=t.height;const n=Ai.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ai}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const e=Ar("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ci(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ci(e[n]/255)*255):e[n]=ci(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class gc{constructor(t=null){this.isSource=!0,this.uuid=Fr(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,s=i.length;a<s;a++)i[a].isDataTexture?r.push(Vs(i[a].image)):r.push(Vs(i[a]))}else r=Vs(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Vs(o){return typeof HTMLImageElement!="undefined"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&o instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&o instanceof ImageBitmap?mc.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nu=0;class $e extends vi{constructor(t=$e.DEFAULT_IMAGE,e=$e.DEFAULT_MAPPING,n=tn,i=tn,r=Ve,a=Ss,s=on,c=pi,l=1,h=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=Fr(),this.name="",this.source=new gc(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ta:t.x=t.x-Math.floor(t.x);break;case tn:t.x=t.x<0?0:1;break;case Ea:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ta:t.y=t.y-Math.floor(t.y);break;case tn:t.y=t.y<0?0:1;break;case Ea:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=hc;class kt{constructor(t=0,e=0,n=0,i=1){kt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],m=c[5],_=c[9],f=c[2],p=c[6],g=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-f)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+f)<.1&&Math.abs(_+p)<.1&&Math.abs(l+m+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,b=(m+1)/2,x=(g+1)/2,A=(h+d)/4,L=(u+f)/4,v=(_+p)/4;return M>b&&M>x?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=A/n,r=L/n):b>x?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=A/i,r=v/i):x<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(x),n=L/r,i=v/r),this.set(n,i,r,e),this}let y=Math.sqrt((p-_)*(p-_)+(u-f)*(u-f)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(p-_)/y,this.y=(u-f)/y,this.z=(d-h)/y,this.w=Math.acos((l+m+g-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gi extends vi{constructor(t,e,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new kt(0,0,t,e),this.scissorTest=!1,this.viewport=new kt(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new $e(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ve,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new gc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _c extends $e{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=_e,this.minFilter=_e,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zu extends $e{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=_e,this.minFilter=_e,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _i{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,s){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],m=r[a+1],_=r[a+2],f=r[a+3];if(s===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(s===1){t[e+0]=d,t[e+1]=m,t[e+2]=_,t[e+3]=f;return}if(u!==f||c!==d||l!==m||h!==_){let p=1-s;const g=c*d+l*m+h*_+u*f,y=g>=0?1:-1,M=1-g*g;if(M>Number.EPSILON){const x=Math.sqrt(M),A=Math.atan2(x,g*y);p=Math.sin(p*A)/x,s=Math.sin(s*A)/x}const b=s*y;if(c=c*p+d*b,l=l*p+m*b,h=h*p+_*b,u=u*p+f*b,p===1-s){const x=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=x,l*=x,h*=x,u*=x}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){const s=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],d=r[a+1],m=r[a+2],_=r[a+3];return t[e]=s*_+h*u+c*m-l*d,t[e+1]=c*_+h*d+l*u-s*m,t[e+2]=l*_+h*m+s*d-c*u,t[e+3]=h*_-s*u-c*d-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,r=t._z,a=t._order,s=Math.cos,c=Math.sin,l=s(n/2),h=s(i/2),u=s(r/2),d=c(n/2),m=c(i/2),_=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*m*_,this._y=l*m*u-d*h*_,this._z=l*h*_+d*m*u,this._w=l*h*u-d*m*_;break;case"YXZ":this._x=d*h*u+l*m*_,this._y=l*m*u-d*h*_,this._z=l*h*_-d*m*u,this._w=l*h*u+d*m*_;break;case"ZXY":this._x=d*h*u-l*m*_,this._y=l*m*u+d*h*_,this._z=l*h*_+d*m*u,this._w=l*h*u-d*m*_;break;case"ZYX":this._x=d*h*u-l*m*_,this._y=l*m*u+d*h*_,this._z=l*h*_-d*m*u,this._w=l*h*u+d*m*_;break;case"YZX":this._x=d*h*u+l*m*_,this._y=l*m*u+d*h*_,this._z=l*h*_-d*m*u,this._w=l*h*u-d*m*_;break;case"XZY":this._x=d*h*u-l*m*_,this._y=l*m*u-d*h*_,this._z=l*h*_+d*m*u,this._w=l*h*u+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],s=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+s+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-i)*m}else if(n>s&&n>u){const m=2*Math.sqrt(1+n-s-u);this._w=(h-c)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+l)/m}else if(s>u){const m=2*Math.sqrt(1+s-n-u);this._w=(r-l)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+u-n-s);this._w=(a-i)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,s=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*s+i*l-r*c,this._y=i*h+a*c+r*s-n*l,this._z=r*h+a*l+n*c-i*s,this._w=a*h-n*s-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let s=a*t._w+n*t._x+i*t._y+r*t._z;if(s<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,s=-s):this.copy(t),s>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-s*s;if(c<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,s),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,n=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,s=t.z,c=t.w,l=c*e+a*i-s*n,h=c*n+s*e-r*i,u=c*i+r*n-a*e,d=-r*e-a*n-s*i;return this.x=l*c+d*-r+h*-s-u*-a,this.y=h*c+d*-a+u*-r-l*-s,this.z=u*c+d*-s+l*-a-h*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,s=e.y,c=e.z;return this.x=i*c-r*s,this.y=r*a-n*c,this.z=n*s-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Gs.copy(this).projectOnVector(t),this.sub(Gs)}reflect(t){return this.sub(Gs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gs=new O,Jo=new _i;class Nr{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let c=0,l=t.length;c<l;c+=3){const h=t[c],u=t[c+1],d=t[c+2];h<e&&(e=h),u<n&&(n=u),d<i&&(i=d),h>r&&(r=h),u>a&&(a=u),d>s&&(s=d)}return this.min.set(e,n,i),this.max.set(r,a,s),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let c=0,l=t.count;c<l;c++){const h=t.getX(c),u=t.getY(c),d=t.getZ(c);h<e&&(e=h),u<n&&(n=u),d<i&&(i=d),h>r&&(r=h),u>a&&(a=u),d>s&&(s=d)}return this.min.set(e,n,i),this.max.set(r,a,s),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=jn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,s=r.count;a<s;a++)jn.fromBufferAttribute(r,a).applyMatrix4(t.matrixWorld),this.expandByPoint(jn)}else n.boundingBox===null&&n.computeBoundingBox(),Hs.copy(n.boundingBox),Hs.applyMatrix4(t.matrixWorld),this.union(Hs);const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,jn),jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fr),Wr.subVectors(this.max,fr),Ci.subVectors(t.a,fr),Li.subVectors(t.b,fr),Pi.subVectors(t.c,fr),Pn.subVectors(Li,Ci),Dn.subVectors(Pi,Li),Zn.subVectors(Ci,Pi);let e=[0,-Pn.z,Pn.y,0,-Dn.z,Dn.y,0,-Zn.z,Zn.y,Pn.z,0,-Pn.x,Dn.z,0,-Dn.x,Zn.z,0,-Zn.x,-Pn.y,Pn.x,0,-Dn.y,Dn.x,0,-Zn.y,Zn.x,0];return!Ws(e,Ci,Li,Pi,Wr)||(e=[1,0,0,0,1,0,0,0,1],!Ws(e,Ci,Li,Pi,Wr))?!1:(Xr.crossVectors(Pn,Dn),e=[Xr.x,Xr.y,Xr.z],Ws(e,Ci,Li,Pi,Wr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return jn.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(jn).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const pn=[new O,new O,new O,new O,new O,new O,new O,new O],jn=new O,Hs=new Nr,Ci=new O,Li=new O,Pi=new O,Pn=new O,Dn=new O,Zn=new O,fr=new O,Wr=new O,Xr=new O,Kn=new O;function Ws(o,t,e,n,i){for(let r=0,a=o.length-3;r<=a;r+=3){Kn.fromArray(o,r);const s=i.x*Math.abs(Kn.x)+i.y*Math.abs(Kn.y)+i.z*Math.abs(Kn.z),c=t.dot(Kn),l=e.dot(Kn),h=n.dot(Kn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>s)return!1}return!0}const Uu=new Nr,Qo=new O,qr=new O,Xs=new O;class ja{constructor(t=new O,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Uu.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){Xs.subVectors(t,this.center);const e=Xs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.add(Xs.multiplyScalar(i/n)),this.radius+=i}return this}union(t){return this.center.equals(t.center)===!0?qr.set(0,0,1).multiplyScalar(t.radius):qr.subVectors(t.center,this.center).normalize().multiplyScalar(t.radius),this.expandByPoint(Qo.copy(t.center).add(qr)),this.expandByPoint(Qo.copy(t.center).sub(qr)),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mn=new O,qs=new O,Yr=new O,Rn=new O,Ys=new O,$r=new O,$s=new O;class xc{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mn.copy(this.direction).multiplyScalar(e).add(this.origin),mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){qs.copy(t).add(e).multiplyScalar(.5),Yr.copy(e).sub(t).normalize(),Rn.copy(this.origin).sub(qs);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Yr),s=Rn.dot(this.direction),c=-Rn.dot(Yr),l=Rn.lengthSq(),h=Math.abs(1-a*a);let u,d,m,_;if(h>0)if(u=a*c-s,d=a*s-c,_=r*h,u>=0)if(d>=-_)if(d<=_){const f=1/h;u*=f,d*=f,m=u*(u+a*d+2*s)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+s)),m=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+s)),m=-u*u+d*(d+2*c)+l;else d<=-_?(u=Math.max(0,-(-a*r+s)),d=u>0?-r:Math.min(Math.max(-r,-c),r),m=-u*u+d*(d+2*c)+l):d<=_?(u=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(u=Math.max(0,-(a*r+s)),d=u>0?r:Math.min(Math.max(-r,-c),r),m=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+s)),m=-u*u+d*(d+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(Yr).multiplyScalar(d).add(qs),m}intersectSphere(t,e){mn.subVectors(t.center,this.origin);const n=mn.dot(this.direction),i=mn.dot(mn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),s=n-a,c=n+a;return s<0&&c<0?null:s<0?this.at(c,e):this.at(s,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,s,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||n!==n)&&(n=r),(a<i||i!==i)&&(i=a),u>=0?(s=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(s=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||s>i)||((s>n||n!==n)&&(n=s),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,mn)!==null}intersectTriangle(t,e,n,i,r){Ys.subVectors(e,t),$r.subVectors(n,t),$s.crossVectors(Ys,$r);let a=this.direction.dot($s),s;if(a>0){if(i)return null;s=1}else if(a<0)s=-1,a=-a;else return null;Rn.subVectors(this.origin,t);const c=s*this.direction.dot($r.crossVectors(Rn,$r));if(c<0)return null;const l=s*this.direction.dot(Ys.cross(Rn));if(l<0||c+l>a)return null;const h=-s*Rn.dot($s);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt{constructor(){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,r,a,s,c,l,h,u,d,m,_,f,p){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=a,g[9]=s,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=d,g[3]=m,g[7]=_,g[11]=f,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Di.setFromMatrixColumn(t,0).length(),r=1/Di.setFromMatrixColumn(t,1).length(),a=1/Di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),s=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,m=a*u,_=s*h,f=s*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=m+_*l,e[5]=d-f*l,e[9]=-s*c,e[2]=f-d*l,e[6]=_+m*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*h,m=c*u,_=l*h,f=l*u;e[0]=d+f*s,e[4]=_*s-m,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-s,e[2]=m*s-_,e[6]=f+d*s,e[10]=a*c}else if(t.order==="ZXY"){const d=c*h,m=c*u,_=l*h,f=l*u;e[0]=d-f*s,e[4]=-a*u,e[8]=_+m*s,e[1]=m+_*s,e[5]=a*h,e[9]=f-d*s,e[2]=-a*l,e[6]=s,e[10]=a*c}else if(t.order==="ZYX"){const d=a*h,m=a*u,_=s*h,f=s*u;e[0]=c*h,e[4]=_*l-m,e[8]=d*l+f,e[1]=c*u,e[5]=f*l+d,e[9]=m*l-_,e[2]=-l,e[6]=s*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,m=a*l,_=s*c,f=s*l;e[0]=c*h,e[4]=f-d*u,e[8]=_*u+m,e[1]=u,e[5]=a*h,e[9]=-s*h,e[2]=-l*h,e[6]=m*u+_,e[10]=d-f*u}else if(t.order==="XZY"){const d=a*c,m=a*l,_=s*c,f=s*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+f,e[5]=a*h,e[9]=m*u-_,e[2]=_*u-m,e[6]=s*h,e[10]=f*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ku,t,Bu)}lookAt(t,e,n){const i=this.elements;return Ae.subVectors(t,e),Ae.lengthSq()===0&&(Ae.z=1),Ae.normalize(),In.crossVectors(n,Ae),In.lengthSq()===0&&(Math.abs(n.z)===1?Ae.x+=1e-4:Ae.z+=1e-4,Ae.normalize(),In.crossVectors(n,Ae)),In.normalize(),jr.crossVectors(Ae,In),i[0]=In.x,i[4]=jr.x,i[8]=Ae.x,i[1]=In.y,i[5]=jr.y,i[9]=Ae.y,i[2]=In.z,i[6]=jr.z,i[10]=Ae.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],s=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],m=n[13],_=n[2],f=n[6],p=n[10],g=n[14],y=n[3],M=n[7],b=n[11],x=n[15],A=i[0],L=i[4],v=i[8],w=i[12],D=i[1],W=i[5],tt=i[9],z=i[13],I=i[2],H=i[6],j=i[10],Z=i[14],G=i[3],F=i[7],B=i[11],et=i[15];return r[0]=a*A+s*D+c*I+l*G,r[4]=a*L+s*W+c*H+l*F,r[8]=a*v+s*tt+c*j+l*B,r[12]=a*w+s*z+c*Z+l*et,r[1]=h*A+u*D+d*I+m*G,r[5]=h*L+u*W+d*H+m*F,r[9]=h*v+u*tt+d*j+m*B,r[13]=h*w+u*z+d*Z+m*et,r[2]=_*A+f*D+p*I+g*G,r[6]=_*L+f*W+p*H+g*F,r[10]=_*v+f*tt+p*j+g*B,r[14]=_*w+f*z+p*Z+g*et,r[3]=y*A+M*D+b*I+x*G,r[7]=y*L+M*W+b*H+x*F,r[11]=y*v+M*tt+b*j+x*B,r[15]=y*w+M*z+b*Z+x*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],s=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],m=t[14],_=t[3],f=t[7],p=t[11],g=t[15];return _*(+r*c*u-i*l*u-r*s*d+n*l*d+i*s*m-n*c*m)+f*(+e*c*m-e*l*d+r*a*d-i*a*m+i*l*h-r*c*h)+p*(+e*l*u-e*s*m-r*a*u+n*a*m+r*s*h-n*l*h)+g*(-i*s*h-e*c*u+e*s*d+i*a*u-n*a*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],s=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],m=t[11],_=t[12],f=t[13],p=t[14],g=t[15],y=u*p*l-f*d*l+f*c*m-s*p*m-u*c*g+s*d*g,M=_*d*l-h*p*l-_*c*m+a*p*m+h*c*g-a*d*g,b=h*f*l-_*u*l+_*s*m-a*f*m-h*s*g+a*u*g,x=_*u*c-h*f*c-_*s*d+a*f*d+h*s*p-a*u*p,A=e*y+n*M+i*b+r*x;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/A;return t[0]=y*L,t[1]=(f*d*r-u*p*r-f*i*m+n*p*m+u*i*g-n*d*g)*L,t[2]=(s*p*r-f*c*r+f*i*l-n*p*l-s*i*g+n*c*g)*L,t[3]=(u*c*r-s*d*r-u*i*l+n*d*l+s*i*m-n*c*m)*L,t[4]=M*L,t[5]=(h*p*r-_*d*r+_*i*m-e*p*m-h*i*g+e*d*g)*L,t[6]=(_*c*r-a*p*r-_*i*l+e*p*l+a*i*g-e*c*g)*L,t[7]=(a*d*r-h*c*r+h*i*l-e*d*l-a*i*m+e*c*m)*L,t[8]=b*L,t[9]=(_*u*r-h*f*r-_*n*m+e*f*m+h*n*g-e*u*g)*L,t[10]=(a*f*r-_*s*r+_*n*l-e*f*l-a*n*g+e*s*g)*L,t[11]=(h*s*r-a*u*r-h*n*l+e*u*l+a*n*m-e*s*m)*L,t[12]=x*L,t[13]=(h*f*i-_*u*i+_*n*d-e*f*d-h*n*p+e*u*p)*L,t[14]=(_*s*i-a*f*i-_*n*c+e*f*c+a*n*p-e*s*p)*L,t[15]=(a*u*i-h*s*i+h*n*c-e*u*c-a*n*d+e*s*d)*L,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,s=t.y,c=t.z,l=r*a,h=r*s;return this.set(l*a+n,l*s-i*c,l*c+i*s,0,l*s+i*c,h*s+n,h*c-i*a,0,l*c-i*s,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,s=e._z,c=e._w,l=r+r,h=a+a,u=s+s,d=r*l,m=r*h,_=r*u,f=a*h,p=a*u,g=s*u,y=c*l,M=c*h,b=c*u,x=n.x,A=n.y,L=n.z;return i[0]=(1-(f+g))*x,i[1]=(m+b)*x,i[2]=(_-M)*x,i[3]=0,i[4]=(m-b)*A,i[5]=(1-(d+g))*A,i[6]=(p+y)*A,i[7]=0,i[8]=(_+M)*L,i[9]=(p-y)*L,i[10]=(1-(d+f))*L,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Di.set(i[0],i[1],i[2]).length();const a=Di.set(i[4],i[5],i[6]).length(),s=Di.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Je.copy(this);const l=1/r,h=1/a,u=1/s;return Je.elements[0]*=l,Je.elements[1]*=l,Je.elements[2]*=l,Je.elements[4]*=h,Je.elements[5]*=h,Je.elements[6]*=h,Je.elements[8]*=u,Je.elements[9]*=u,Je.elements[10]*=u,e.setFromRotationMatrix(Je),n.x=r,n.y=a,n.z=s,this}makePerspective(t,e,n,i,r,a){const s=this.elements,c=2*r/(e-t),l=2*r/(n-i),h=(e+t)/(e-t),u=(n+i)/(n-i),d=-(a+r)/(a-r),m=-2*a*r/(a-r);return s[0]=c,s[4]=0,s[8]=h,s[12]=0,s[1]=0,s[5]=l,s[9]=u,s[13]=0,s[2]=0,s[6]=0,s[10]=d,s[14]=m,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(t,e,n,i,r,a){const s=this.elements,c=1/(e-t),l=1/(n-i),h=1/(a-r),u=(e+t)*c,d=(n+i)*l,m=(a+r)*h;return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-u,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-d,s[2]=0,s[6]=0,s[10]=-2*h,s[14]=-m,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Di=new O,Je=new Qt,ku=new O(0,0,0),Bu=new O(1,1,1),In=new O,jr=new O,Ae=new O,tl=new Qt,el=new _i;class zr{constructor(t=0,e=0,n=0,i=zr.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],s=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(xe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return tl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(tl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return el.setFromEuler(this),this.setFromQuaternion(el,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}zr.DefaultOrder="XYZ";zr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Za{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Vu=0;const nl=new O,Ri=new _i,gn=new Qt,Zr=new O,pr=new O,Gu=new O,Hu=new _i,il=new O(1,0,0),rl=new O(0,1,0),sl=new O(0,0,1),Wu={type:"added"},al={type:"removed"};class pe extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=Fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pe.DefaultUp.clone();const t=new O,e=new zr,n=new _i,i=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Qt},normalMatrix:{value:new Ge}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=pe.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=pe.DefaultMatrixWorldAutoUpdate,this.layers=new Za,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ri.setFromAxisAngle(t,e),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(t,e){return Ri.setFromAxisAngle(t,e),this.quaternion.premultiply(Ri),this}rotateX(t){return this.rotateOnAxis(il,t)}rotateY(t){return this.rotateOnAxis(rl,t)}rotateZ(t){return this.rotateOnAxis(sl,t)}translateOnAxis(t,e){return nl.copy(t).applyQuaternion(this.quaternion),this.position.add(nl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(il,t)}translateY(t){return this.translateOnAxis(rl,t)}translateZ(t){return this.translateOnAxis(sl,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Zr.copy(t):Zr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(pr,Zr,this.up):gn.lookAt(Zr,pr,this.up),this.quaternion.setFromRotationMatrix(gn),i&&(gn.extractRotation(i.matrixWorld),Ri.setFromRotationMatrix(gn),this.quaternion.premultiply(Ri.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Wu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(al)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(al)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,t,Gu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,Hu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const s=i[r];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(s,c){return s[c.uuid]===void 0&&(s[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const c=s.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let c=0,l=this.material.length;c<l;c++)s.push(r(t.materials,this.material[c]));i.material=s}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const c=this.animations[s];i.animations.push(r(t.animations,c))}}if(e){const s=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),m=a(t.animations),_=a(t.nodes);s.length>0&&(n.geometries=s),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(s){const c=[];for(const l in s){const h=s[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}pe.DefaultUp=new O(0,1,0);pe.DefaultMatrixAutoUpdate=!0;pe.DefaultMatrixWorldAutoUpdate=!0;const Qe=new O,_n=new O,js=new O,xn=new O,Ii=new O,Oi=new O,ol=new O,Zs=new O,Ks=new O,Js=new O;class Mn{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Qe.subVectors(t,e),i.cross(Qe);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Qe.subVectors(i,e),_n.subVectors(n,e),js.subVectors(t,e);const a=Qe.dot(Qe),s=Qe.dot(_n),c=Qe.dot(js),l=_n.dot(_n),h=_n.dot(js),u=a*l-s*s;if(u===0)return r.set(-2,-1,-1);const d=1/u,m=(l*c-s*h)*d,_=(a*h-s*c)*d;return r.set(1-m-_,_,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,xn),xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getUV(t,e,n,i,r,a,s,c){return this.getBarycoord(t,e,n,i,xn),c.set(0,0),c.addScaledVector(r,xn.x),c.addScaledVector(a,xn.y),c.addScaledVector(s,xn.z),c}static isFrontFacing(t,e,n,i){return Qe.subVectors(n,e),_n.subVectors(t,e),Qe.cross(_n).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qe.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),Qe.cross(_n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Mn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return Mn.getUV(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,s;Ii.subVectors(i,n),Oi.subVectors(r,n),Zs.subVectors(t,n);const c=Ii.dot(Zs),l=Oi.dot(Zs);if(c<=0&&l<=0)return e.copy(n);Ks.subVectors(t,i);const h=Ii.dot(Ks),u=Oi.dot(Ks);if(h>=0&&u<=h)return e.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Ii,a);Js.subVectors(t,r);const m=Ii.dot(Js),_=Oi.dot(Js);if(_>=0&&m<=_)return e.copy(r);const f=m*l-c*_;if(f<=0&&l>=0&&_<=0)return s=l/(l-_),e.copy(n).addScaledVector(Oi,s);const p=h*_-m*u;if(p<=0&&u-h>=0&&m-_>=0)return ol.subVectors(r,i),s=(u-h)/(u-h+(m-_)),e.copy(i).addScaledVector(ol,s);const g=1/(p+f+d);return a=f*g,s=d*g,e.copy(n).addScaledVector(Ii,a).addScaledVector(Oi,s)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Xu=0;class Ur extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=Fr(),this.name="",this.type="Material",this.blending=Yi,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=lc,this.blendDst=cc,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ma,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ou,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(n.blending=this.blending),this.side!==Ji&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const a=[];for(const s in r){const c=r[s];delete c.metadata,a.push(c)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class vc extends Ur{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Kt=new O,Kr=new wt;class cn{constructor(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=$o,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Kr.fromBufferAttribute(this,e),Kr.applyMatrix3(t),this.setXY(e,Kr.x,Kr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Kt.fromBufferAttribute(this,e),Kt.applyMatrix3(t),this.setXYZ(e,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Kt.fromBufferAttribute(this,e),Kt.applyMatrix4(t),this.setXYZ(e,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Kt.fromBufferAttribute(this,e),Kt.applyNormalMatrix(t),this.setXYZ(e,Kt.x,Kt.y,Kt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Kt.fromBufferAttribute(this,e),Kt.transformDirection(t),this.setXYZ(e,Kt.x,Kt.y,Kt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),i=Ee(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),i=Ee(i,this.array),r=Ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$o&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class yc extends cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class bc extends cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class hi extends cn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let qu=0;const Ue=new Qt,Qs=new pe,Fi=new O,Ce=new Nr,mr=new Nr,se=new O;class yi extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=Fr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fc(t)?bc:yc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ge().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ue.makeRotationFromQuaternion(t),this.applyMatrix4(Ue),this}rotateX(t){return Ue.makeRotationX(t),this.applyMatrix4(Ue),this}rotateY(t){return Ue.makeRotationY(t),this.applyMatrix4(Ue),this}rotateZ(t){return Ue.makeRotationZ(t),this.applyMatrix4(Ue),this}translate(t,e,n){return Ue.makeTranslation(t,e,n),this.applyMatrix4(Ue),this}scale(t,e,n){return Ue.makeScale(t,e,n),this.applyMatrix4(Ue),this}lookAt(t){return Qs.lookAt(t),Qs.updateMatrix(),this.applyMatrix4(Qs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new hi(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ce.setFromBufferAttribute(r),this.morphTargetsRelative?(se.addVectors(this.boundingBox.min,Ce.min),this.boundingBox.expandByPoint(se),se.addVectors(this.boundingBox.max,Ce.max),this.boundingBox.expandByPoint(se)):(this.boundingBox.expandByPoint(Ce.min),this.boundingBox.expandByPoint(Ce.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ja);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(Ce.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const s=e[r];mr.setFromBufferAttribute(s),this.morphTargetsRelative?(se.addVectors(Ce.min,mr.min),Ce.expandByPoint(se),se.addVectors(Ce.max,mr.max),Ce.expandByPoint(se)):(Ce.expandByPoint(mr.min),Ce.expandByPoint(mr.max))}Ce.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)se.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(se));if(e)for(let r=0,a=e.length;r<a;r++){const s=e[r],c=this.morphTargetsRelative;for(let l=0,h=s.count;l<h;l++)se.fromBufferAttribute(s,l),c&&(Fi.fromBufferAttribute(t,l),se.add(Fi)),i=Math.max(i,n.distanceToSquared(se))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,a=e.uv.array,s=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*s),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let D=0;D<s;D++)l[D]=new O,h[D]=new O;const u=new O,d=new O,m=new O,_=new wt,f=new wt,p=new wt,g=new O,y=new O;function M(D,W,tt){u.fromArray(i,D*3),d.fromArray(i,W*3),m.fromArray(i,tt*3),_.fromArray(a,D*2),f.fromArray(a,W*2),p.fromArray(a,tt*2),d.sub(u),m.sub(u),f.sub(_),p.sub(_);const z=1/(f.x*p.y-p.x*f.y);!isFinite(z)||(g.copy(d).multiplyScalar(p.y).addScaledVector(m,-f.y).multiplyScalar(z),y.copy(m).multiplyScalar(f.x).addScaledVector(d,-p.x).multiplyScalar(z),l[D].add(g),l[W].add(g),l[tt].add(g),h[D].add(y),h[W].add(y),h[tt].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let D=0,W=b.length;D<W;++D){const tt=b[D],z=tt.start,I=tt.count;for(let H=z,j=z+I;H<j;H+=3)M(n[H+0],n[H+1],n[H+2])}const x=new O,A=new O,L=new O,v=new O;function w(D){L.fromArray(r,D*3),v.copy(L);const W=l[D];x.copy(W),x.sub(L.multiplyScalar(L.dot(W))).normalize(),A.crossVectors(v,W);const z=A.dot(h[D])<0?-1:1;c[D*4]=x.x,c[D*4+1]=x.y,c[D*4+2]=x.z,c[D*4+3]=z}for(let D=0,W=b.length;D<W;++D){const tt=b[D],z=tt.start,I=tt.count;for(let H=z,j=z+I;H<j;H+=3)w(n[H+0]),w(n[H+1]),w(n[H+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new O,r=new O,a=new O,s=new O,c=new O,l=new O,h=new O,u=new O;if(t)for(let d=0,m=t.count;d<m;d+=3){const _=t.getX(d+0),f=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,f),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),s.fromBufferAttribute(n,_),c.fromBufferAttribute(n,f),l.fromBufferAttribute(n,p),s.add(h),c.add(h),l.add(h),n.setXYZ(_,s.x,s.y,s.z),n.setXYZ(f,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=e.count;d<m;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)se.fromBufferAttribute(t,e),se.normalize(),t.setXYZ(e,se.x,se.y,se.z)}toNonIndexed(){function t(s,c){const l=s.array,h=s.itemSize,u=s.normalized,d=new l.constructor(c.length*h);let m=0,_=0;for(let f=0,p=c.length;f<p;f++){s.isInterleavedBufferAttribute?m=c[f]*s.data.stride+s.offset:m=c[f]*h;for(let g=0;g<h;g++)d[_++]=l[m++]}return new cn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new yi,n=this.index.array,i=this.attributes;for(const s in i){const c=i[s],l=t(c,n);e.setAttribute(s,l)}const r=this.morphAttributes;for(const s in r){const c=[],l=r[s];for(let h=0,u=l.length;h<u;h++){const d=l[h],m=t(d,n);c.push(m)}e.morphAttributes[s]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,c=a.length;s<c;s++){const l=a[s];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const m=l[u];h.push(m.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(t.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const s=t.boundingBox;s!==null&&(this.boundingBox=s.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const ll=new Qt,Ni=new xc,ta=new ja,On=new O,Fn=new O,Nn=new O,ea=new O,na=new O,ia=new O,Jr=new O,Qr=new O,ts=new O,es=new wt,ns=new wt,is=new wt,ra=new O,rs=new O;class ln extends pe{constructor(t=new yi,e=new vc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ta.copy(n.boundingSphere),ta.applyMatrix4(r),t.ray.intersectsSphere(ta)===!1)||(ll.copy(r).invert(),Ni.copy(t.ray).applyMatrix4(ll),n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1))return;let a;const s=n.index,c=n.attributes.position,l=n.morphAttributes.position,h=n.morphTargetsRelative,u=n.attributes.uv,d=n.attributes.uv2,m=n.groups,_=n.drawRange;if(s!==null)if(Array.isArray(i))for(let f=0,p=m.length;f<p;f++){const g=m[f],y=i[g.materialIndex],M=Math.max(g.start,_.start),b=Math.min(s.count,Math.min(g.start+g.count,_.start+_.count));for(let x=M,A=b;x<A;x+=3){const L=s.getX(x),v=s.getX(x+1),w=s.getX(x+2);a=ss(this,y,t,Ni,c,l,h,u,d,L,v,w),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=g.materialIndex,e.push(a))}}else{const f=Math.max(0,_.start),p=Math.min(s.count,_.start+_.count);for(let g=f,y=p;g<y;g+=3){const M=s.getX(g),b=s.getX(g+1),x=s.getX(g+2);a=ss(this,i,t,Ni,c,l,h,u,d,M,b,x),a&&(a.faceIndex=Math.floor(g/3),e.push(a))}}else if(c!==void 0)if(Array.isArray(i))for(let f=0,p=m.length;f<p;f++){const g=m[f],y=i[g.materialIndex],M=Math.max(g.start,_.start),b=Math.min(c.count,Math.min(g.start+g.count,_.start+_.count));for(let x=M,A=b;x<A;x+=3){const L=x,v=x+1,w=x+2;a=ss(this,y,t,Ni,c,l,h,u,d,L,v,w),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=g.materialIndex,e.push(a))}}else{const f=Math.max(0,_.start),p=Math.min(c.count,_.start+_.count);for(let g=f,y=p;g<y;g+=3){const M=g,b=g+1,x=g+2;a=ss(this,i,t,Ni,c,l,h,u,d,M,b,x),a&&(a.faceIndex=Math.floor(g/3),e.push(a))}}}}function Yu(o,t,e,n,i,r,a,s){let c;if(t.side===qe?c=n.intersectTriangle(a,r,i,!0,s):c=n.intersectTriangle(i,r,a,t.side!==zn,s),c===null)return null;rs.copy(s),rs.applyMatrix4(o.matrixWorld);const l=e.ray.origin.distanceTo(rs);return l<e.near||l>e.far?null:{distance:l,point:rs.clone(),object:o}}function ss(o,t,e,n,i,r,a,s,c,l,h,u){On.fromBufferAttribute(i,l),Fn.fromBufferAttribute(i,h),Nn.fromBufferAttribute(i,u);const d=o.morphTargetInfluences;if(r&&d){Jr.set(0,0,0),Qr.set(0,0,0),ts.set(0,0,0);for(let _=0,f=r.length;_<f;_++){const p=d[_],g=r[_];p!==0&&(ea.fromBufferAttribute(g,l),na.fromBufferAttribute(g,h),ia.fromBufferAttribute(g,u),a?(Jr.addScaledVector(ea,p),Qr.addScaledVector(na,p),ts.addScaledVector(ia,p)):(Jr.addScaledVector(ea.sub(On),p),Qr.addScaledVector(na.sub(Fn),p),ts.addScaledVector(ia.sub(Nn),p)))}On.add(Jr),Fn.add(Qr),Nn.add(ts)}o.isSkinnedMesh&&(o.boneTransform(l,On),o.boneTransform(h,Fn),o.boneTransform(u,Nn));const m=Yu(o,t,e,n,On,Fn,Nn,ra);if(m){s&&(es.fromBufferAttribute(s,l),ns.fromBufferAttribute(s,h),is.fromBufferAttribute(s,u),m.uv=Mn.getUV(ra,On,Fn,Nn,es,ns,is,new wt)),c&&(es.fromBufferAttribute(c,l),ns.fromBufferAttribute(c,h),is.fromBufferAttribute(c,u),m.uv2=Mn.getUV(ra,On,Fn,Nn,es,ns,is,new wt));const _={a:l,b:h,c:u,normal:new O,materialIndex:0};Mn.getNormal(On,Fn,Nn,_.normal),m.face=_}return m}class hr extends yi{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const s=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,m=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new hi(l,3)),this.setAttribute("normal",new hi(h,3)),this.setAttribute("uv",new hi(u,2));function _(f,p,g,y,M,b,x,A,L,v,w){const D=b/L,W=x/v,tt=b/2,z=x/2,I=A/2,H=L+1,j=v+1;let Z=0,G=0;const F=new O;for(let B=0;B<j;B++){const et=B*W-z;for(let Q=0;Q<H;Q++){const P=Q*D-tt;F[f]=P*y,F[p]=et*M,F[g]=I,l.push(F.x,F.y,F.z),F[f]=0,F[p]=0,F[g]=A>0?1:-1,h.push(F.x,F.y,F.z),u.push(Q/L),u.push(1-B/v),Z+=1}}for(let B=0;B<v;B++)for(let et=0;et<L;et++){const Q=d+et+H*B,P=d+et+H*(B+1),V=d+(et+1)+H*(B+1),K=d+(et+1)+H*B;c.push(Q,P,K),c.push(P,V,K),G+=6}s.addGroup(m,G,w),m+=G,d+=Z}}static fromJSON(t){return new hr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function nr(o){const t={};for(const e in o){t[e]={};for(const n in o[e]){const i=o[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function he(o){const t={};for(let e=0;e<o.length;e++){const n=nr(o[e]);for(const i in n)t[i]=n[i]}return t}function $u(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}const ju={clone:nr,merge:he};var Zu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ku=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends Ur{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zu,this.fragmentShader=Ku,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=nr(t.uniforms),this.uniformsGroups=$u(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Mc extends pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Pe extends Mc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Zo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zo*2*Math.atan(Math.tan(zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(zs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const s=this.filmOffset;s!==0&&(r+=t*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const zi=90,Ui=1;class Ju extends pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Pe(zi,Ui,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new O(1,0,0)),this.add(i);const r=new Pe(zi,Ui,t,e);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new O(-1,0,0)),this.add(r);const a=new Pe(zi,Ui,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new O(0,1,0)),this.add(a);const s=new Pe(zi,Ui,t,e);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(new O(0,-1,0)),this.add(s);const c=new Pe(zi,Ui,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new O(0,0,1)),this.add(c);const l=new Pe(zi,Ui,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new O(0,0,-1)),this.add(l)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,s,c,l]=this.children,h=t.getRenderTarget(),u=t.toneMapping,d=t.xr.enabled;t.toneMapping=wn,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,a),t.setRenderTarget(n,3),t.render(e,s),t.setRenderTarget(n,4),t.render(e,c),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,l),t.setRenderTarget(h),t.toneMapping=u,t.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Sc extends $e{constructor(t,e,n,i,r,a,s,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Qi,super(t,e,n,i,r,a,s,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qu extends gi{constructor(t,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Sc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ve}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new hr(5,5,5),r=new Wn({name:"CubemapFromEquirect",uniforms:nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:Vn});r.uniforms.tEquirect.value=e;const a=new ln(i,r),s=e.minFilter;return e.minFilter===Ss&&(e.minFilter=Ve),new Ju(1,10,this).update(t,a),e.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const sa=new O,td=new O,ed=new Ge;class ti{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=sa.subVectors(n,e).cross(td.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(sa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(n).multiplyScalar(r).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ed.getNormalMatrix(t),i=this.coplanarPoint(sa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new ja,as=new O;class Ka{constructor(t=new ti,e=new ti,n=new ti,i=new ti,r=new ti,a=new ti){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const s=this.planes;return s[0].copy(t),s[1].copy(e),s[2].copy(n),s[3].copy(i),s[4].copy(r),s[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],r=n[1],a=n[2],s=n[3],c=n[4],l=n[5],h=n[6],u=n[7],d=n[8],m=n[9],_=n[10],f=n[11],p=n[12],g=n[13],y=n[14],M=n[15];return e[0].setComponents(s-i,u-c,f-d,M-p).normalize(),e[1].setComponents(s+i,u+c,f+d,M+p).normalize(),e[2].setComponents(s+r,u+l,f+m,M+g).normalize(),e[3].setComponents(s-r,u-l,f-m,M-g).normalize(),e[4].setComponents(s-a,u-h,f-_,M-y).normalize(),e[5].setComponents(s+a,u+h,f+_,M+y).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(ki)}intersectsSprite(t){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(as.x=i.normal.x>0?t.max.x:t.min.x,as.y=i.normal.y>0?t.max.y:t.min.y,as.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(as)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wc(){let o=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=o.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=o.requestAnimationFrame(i),t=!0)},stop:function(){o.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){o=r}}}function nd(o,t){const e=t.isWebGL2,n=new WeakMap;function i(l,h){const u=l.array,d=l.usage,m=o.createBuffer();o.bindBuffer(h,m),o.bufferData(h,u,d),l.onUploadCallback();let _;if(u instanceof Float32Array)_=5126;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(u instanceof Int16Array)_=5122;else if(u instanceof Uint32Array)_=5125;else if(u instanceof Int32Array)_=5124;else if(u instanceof Int8Array)_=5120;else if(u instanceof Uint8Array)_=5121;else if(u instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function r(l,h,u){const d=h.array,m=h.updateRange;o.bindBuffer(u,l),m.count===-1?o.bufferSubData(u,0,d):(e?o.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):o.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1)}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(o.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u===void 0?n.set(l,i(l,h)):u.version<l.version&&(r(u.buffer,l,h),u.version=l.version)}return{get:a,remove:s,update:c}}class ws extends yi{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,s=Math.floor(n),c=Math.floor(i),l=s+1,h=c+1,u=t/s,d=e/c,m=[],_=[],f=[],p=[];for(let g=0;g<h;g++){const y=g*d-a;for(let M=0;M<l;M++){const b=M*u-r;_.push(b,-y,0),f.push(0,0,1),p.push(M/s),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let y=0;y<s;y++){const M=y+l*g,b=y+l*(g+1),x=y+1+l*(g+1),A=y+1+l*g;m.push(M,b,A),m.push(b,x,A)}this.setIndex(m),this.setAttribute("position",new hi(_,3)),this.setAttribute("normal",new hi(f,3)),this.setAttribute("uv",new hi(p,2))}static fromJSON(t){return new ws(t.width,t.height,t.widthSegments,t.heightSegments)}}var id=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,rd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ad=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,od=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ld=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cd="vec3 transformed = vec3( position );",hd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ud=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,dd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,bd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Md=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Sd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wd=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Td=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ed=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Ad=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ld="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pd=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Rd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Id=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Od=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Nd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ud=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Vd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Gd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,Xd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qd=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Yd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$d=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,jd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Kd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Jd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ef=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,nf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,af=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,of=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,df=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ff=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,mf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,gf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,_f=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,xf=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Sf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,wf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Tf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Ef=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Af=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Lf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Df=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,If=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Of=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ff=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Nf=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zf=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Uf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Vf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Hf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,$f=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,jf=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Zf=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Kf=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Jf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Qf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,tp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,ep=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const np=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ip=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sp=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ap=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,op=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,lp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,up=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,dp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pp=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_p=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Mp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Tp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ep=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ap=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Lp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Rp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ip=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Et={alphamap_fragment:id,alphamap_pars_fragment:rd,alphatest_fragment:sd,alphatest_pars_fragment:ad,aomap_fragment:od,aomap_pars_fragment:ld,begin_vertex:cd,beginnormal_vertex:hd,bsdfs:ud,iridescence_fragment:dd,bumpmap_pars_fragment:fd,clipping_planes_fragment:pd,clipping_planes_pars_fragment:md,clipping_planes_pars_vertex:gd,clipping_planes_vertex:_d,color_fragment:xd,color_pars_fragment:vd,color_pars_vertex:yd,color_vertex:bd,common:Md,cube_uv_reflection_fragment:Sd,defaultnormal_vertex:wd,displacementmap_pars_vertex:Td,displacementmap_vertex:Ed,emissivemap_fragment:Ad,emissivemap_pars_fragment:Cd,encodings_fragment:Ld,encodings_pars_fragment:Pd,envmap_fragment:Dd,envmap_common_pars_fragment:Rd,envmap_pars_fragment:Id,envmap_pars_vertex:Od,envmap_physical_pars_fragment:qd,envmap_vertex:Fd,fog_vertex:Nd,fog_pars_vertex:zd,fog_fragment:Ud,fog_pars_fragment:kd,gradientmap_pars_fragment:Bd,lightmap_fragment:Vd,lightmap_pars_fragment:Gd,lights_lambert_fragment:Hd,lights_lambert_pars_fragment:Wd,lights_pars_begin:Xd,lights_toon_fragment:Yd,lights_toon_pars_fragment:$d,lights_phong_fragment:jd,lights_phong_pars_fragment:Zd,lights_physical_fragment:Kd,lights_physical_pars_fragment:Jd,lights_fragment_begin:Qd,lights_fragment_maps:tf,lights_fragment_end:ef,logdepthbuf_fragment:nf,logdepthbuf_pars_fragment:rf,logdepthbuf_pars_vertex:sf,logdepthbuf_vertex:af,map_fragment:of,map_pars_fragment:lf,map_particle_fragment:cf,map_particle_pars_fragment:hf,metalnessmap_fragment:uf,metalnessmap_pars_fragment:df,morphcolor_vertex:ff,morphnormal_vertex:pf,morphtarget_pars_vertex:mf,morphtarget_vertex:gf,normal_fragment_begin:_f,normal_fragment_maps:xf,normal_pars_fragment:vf,normal_pars_vertex:yf,normal_vertex:bf,normalmap_pars_fragment:Mf,clearcoat_normal_fragment_begin:Sf,clearcoat_normal_fragment_maps:wf,clearcoat_pars_fragment:Tf,iridescence_pars_fragment:Ef,output_fragment:Af,packing:Cf,premultiplied_alpha_fragment:Lf,project_vertex:Pf,dithering_fragment:Df,dithering_pars_fragment:Rf,roughnessmap_fragment:If,roughnessmap_pars_fragment:Of,shadowmap_pars_fragment:Ff,shadowmap_pars_vertex:Nf,shadowmap_vertex:zf,shadowmask_pars_fragment:Uf,skinbase_vertex:kf,skinning_pars_vertex:Bf,skinning_vertex:Vf,skinnormal_vertex:Gf,specularmap_fragment:Hf,specularmap_pars_fragment:Wf,tonemapping_fragment:Xf,tonemapping_pars_fragment:qf,transmission_fragment:Yf,transmission_pars_fragment:$f,uv_pars_fragment:jf,uv_pars_vertex:Zf,uv_vertex:Kf,uv2_pars_fragment:Jf,uv2_pars_vertex:Qf,uv2_vertex:tp,worldpos_vertex:ep,background_vert:np,background_frag:ip,cube_vert:rp,cube_frag:sp,depth_vert:ap,depth_frag:op,distanceRGBA_vert:lp,distanceRGBA_frag:cp,equirect_vert:hp,equirect_frag:up,linedashed_vert:dp,linedashed_frag:fp,meshbasic_vert:pp,meshbasic_frag:mp,meshlambert_vert:gp,meshlambert_frag:_p,meshmatcap_vert:xp,meshmatcap_frag:vp,meshnormal_vert:yp,meshnormal_frag:bp,meshphong_vert:Mp,meshphong_frag:Sp,meshphysical_vert:wp,meshphysical_frag:Tp,meshtoon_vert:Ep,meshtoon_frag:Ap,points_vert:Cp,points_frag:Lp,shadow_vert:Pp,shadow_frag:Dp,sprite_vert:Rp,sprite_frag:Ip},at={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ge},uv2Transform:{value:new Ge},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ge}}},sn={basic:{uniforms:he([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Et.meshbasic_vert,fragmentShader:Et.meshbasic_frag},lambert:{uniforms:he([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Et.meshlambert_vert,fragmentShader:Et.meshlambert_frag},phong:{uniforms:he([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:Et.meshphong_vert,fragmentShader:Et.meshphong_frag},standard:{uniforms:he([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag},toon:{uniforms:he([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Et.meshtoon_vert,fragmentShader:Et.meshtoon_frag},matcap:{uniforms:he([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Et.meshmatcap_vert,fragmentShader:Et.meshmatcap_frag},points:{uniforms:he([at.points,at.fog]),vertexShader:Et.points_vert,fragmentShader:Et.points_frag},dashed:{uniforms:he([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Et.linedashed_vert,fragmentShader:Et.linedashed_frag},depth:{uniforms:he([at.common,at.displacementmap]),vertexShader:Et.depth_vert,fragmentShader:Et.depth_frag},normal:{uniforms:he([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Et.meshnormal_vert,fragmentShader:Et.meshnormal_frag},sprite:{uniforms:he([at.sprite,at.fog]),vertexShader:Et.sprite_vert,fragmentShader:Et.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null}},vertexShader:Et.background_vert,fragmentShader:Et.background_frag},cube:{uniforms:he([at.envmap,{opacity:{value:1}}]),vertexShader:Et.cube_vert,fragmentShader:Et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Et.equirect_vert,fragmentShader:Et.equirect_frag},distanceRGBA:{uniforms:he([at.common,at.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Et.distanceRGBA_vert,fragmentShader:Et.distanceRGBA_frag},shadow:{uniforms:he([at.lights,at.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:Et.shadow_vert,fragmentShader:Et.shadow_frag}};sn.physical={uniforms:he([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new wt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag};function Op(o,t,e,n,i,r){const a=new Ft(0);let s=i===!0?0:1,c,l,h=null,u=0,d=null;function m(f,p){let g=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=t.get(y));const M=o.xr,b=M.getSession&&M.getSession();b&&b.environmentBlendMode==="additive"&&(y=null),y===null?_(a,s):y&&y.isColor&&(_(y,1),g=!0),(o.autoClear||g)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Ms)?(l===void 0&&(l=new ln(new hr(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:nr(sn.cube.uniforms),vertexShader:sn.cube.vertexShader,fragmentShader:sn.cube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(x,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,(h!==y||u!==y.version||d!==o.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,d=o.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ln(new ws(2,2),new Wn({name:"BackgroundMaterial",uniforms:nr(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||d!==o.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,d=o.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function _(f,p){e.buffers.color.setClear(f.r,f.g,f.b,p,r)}return{getClearColor:function(){return a},setClearColor:function(f,p=1){a.set(f),s=p,_(a,s)},getClearAlpha:function(){return s},setClearAlpha:function(f){s=f,_(a,s)},render:m}}function Fp(o,t,e,n){const i=o.getParameter(34921),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,s={},c=p(null);let l=c,h=!1;function u(I,H,j,Z,G){let F=!1;if(a){const B=f(Z,j,H);l!==B&&(l=B,m(l.object)),F=g(I,Z,j,G),F&&y(I,Z,j,G)}else{const B=H.wireframe===!0;(l.geometry!==Z.id||l.program!==j.id||l.wireframe!==B)&&(l.geometry=Z.id,l.program=j.id,l.wireframe=B,F=!0)}G!==null&&e.update(G,34963),(F||h)&&(h=!1,v(I,H,j,Z),G!==null&&o.bindBuffer(34963,e.get(G).buffer))}function d(){return n.isWebGL2?o.createVertexArray():r.createVertexArrayOES()}function m(I){return n.isWebGL2?o.bindVertexArray(I):r.bindVertexArrayOES(I)}function _(I){return n.isWebGL2?o.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function f(I,H,j){const Z=j.wireframe===!0;let G=s[I.id];G===void 0&&(G={},s[I.id]=G);let F=G[H.id];F===void 0&&(F={},G[H.id]=F);let B=F[Z];return B===void 0&&(B=p(d()),F[Z]=B),B}function p(I){const H=[],j=[],Z=[];for(let G=0;G<i;G++)H[G]=0,j[G]=0,Z[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:j,attributeDivisors:Z,object:I,attributes:{},index:null}}function g(I,H,j,Z){const G=l.attributes,F=H.attributes;let B=0;const et=j.getAttributes();for(const Q in et)if(et[Q].location>=0){const V=G[Q];let K=F[Q];if(K===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(K=I.instanceColor)),V===void 0||V.attribute!==K||K&&V.data!==K.data)return!0;B++}return l.attributesNum!==B||l.index!==Z}function y(I,H,j,Z){const G={},F=H.attributes;let B=0;const et=j.getAttributes();for(const Q in et)if(et[Q].location>=0){let V=F[Q];V===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(V=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(V=I.instanceColor));const K={};K.attribute=V,V&&V.data&&(K.data=V.data),G[Q]=K,B++}l.attributes=G,l.attributesNum=B,l.index=Z}function M(){const I=l.newAttributes;for(let H=0,j=I.length;H<j;H++)I[H]=0}function b(I){x(I,0)}function x(I,H){const j=l.newAttributes,Z=l.enabledAttributes,G=l.attributeDivisors;j[I]=1,Z[I]===0&&(o.enableVertexAttribArray(I),Z[I]=1),G[I]!==H&&((n.isWebGL2?o:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,H),G[I]=H)}function A(){const I=l.newAttributes,H=l.enabledAttributes;for(let j=0,Z=H.length;j<Z;j++)H[j]!==I[j]&&(o.disableVertexAttribArray(j),H[j]=0)}function L(I,H,j,Z,G,F){n.isWebGL2===!0&&(j===5124||j===5125)?o.vertexAttribIPointer(I,H,j,G,F):o.vertexAttribPointer(I,H,j,Z,G,F)}function v(I,H,j,Z){if(n.isWebGL2===!1&&(I.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;M();const G=Z.attributes,F=j.getAttributes(),B=H.defaultAttributeValues;for(const et in F){const Q=F[et];if(Q.location>=0){let P=G[et];if(P===void 0&&(et==="instanceMatrix"&&I.instanceMatrix&&(P=I.instanceMatrix),et==="instanceColor"&&I.instanceColor&&(P=I.instanceColor)),P!==void 0){const V=P.normalized,K=P.itemSize,k=e.get(P);if(k===void 0)continue;const mt=k.buffer,ct=k.type,ft=k.bytesPerElement;if(P.isInterleavedBufferAttribute){const it=P.data,vt=it.stride,xt=P.offset;if(it.isInstancedInterleavedBuffer){for(let gt=0;gt<Q.locationSize;gt++)x(Q.location+gt,it.meshPerAttribute);I.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let gt=0;gt<Q.locationSize;gt++)b(Q.location+gt);o.bindBuffer(34962,mt);for(let gt=0;gt<Q.locationSize;gt++)L(Q.location+gt,K/Q.locationSize,ct,V,vt*ft,(xt+K/Q.locationSize*gt)*ft)}else{if(P.isInstancedBufferAttribute){for(let it=0;it<Q.locationSize;it++)x(Q.location+it,P.meshPerAttribute);I.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let it=0;it<Q.locationSize;it++)b(Q.location+it);o.bindBuffer(34962,mt);for(let it=0;it<Q.locationSize;it++)L(Q.location+it,K/Q.locationSize,ct,V,K*ft,K/Q.locationSize*it*ft)}}else if(B!==void 0){const V=B[et];if(V!==void 0)switch(V.length){case 2:o.vertexAttrib2fv(Q.location,V);break;case 3:o.vertexAttrib3fv(Q.location,V);break;case 4:o.vertexAttrib4fv(Q.location,V);break;default:o.vertexAttrib1fv(Q.location,V)}}}}A()}function w(){tt();for(const I in s){const H=s[I];for(const j in H){const Z=H[j];for(const G in Z)_(Z[G].object),delete Z[G];delete H[j]}delete s[I]}}function D(I){if(s[I.id]===void 0)return;const H=s[I.id];for(const j in H){const Z=H[j];for(const G in Z)_(Z[G].object),delete Z[G];delete H[j]}delete s[I.id]}function W(I){for(const H in s){const j=s[H];if(j[I.id]===void 0)continue;const Z=j[I.id];for(const G in Z)_(Z[G].object),delete Z[G];delete j[I.id]}}function tt(){z(),h=!0,l!==c&&(l=c,m(l.object))}function z(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:tt,resetDefaultState:z,dispose:w,releaseStatesOfGeometry:D,releaseStatesOfProgram:W,initAttributes:M,enableAttribute:b,disableUnusedAttributes:A}}function Np(o,t,e,n){const i=n.isWebGL2;let r;function a(l){r=l}function s(l,h){o.drawArrays(r,l,h),e.update(h,r,1)}function c(l,h,u){if(u===0)return;let d,m;if(i)d=o,m="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](r,l,h,u),e.update(h,r,u)}this.setMode=a,this.render=s,this.renderInstances=c}function zp(o,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");n=o.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(L){if(L==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext!="undefined"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&o instanceof WebGL2ComputeRenderingContext;let s=e.precision!==void 0?e.precision:"highp";const c=r(s);c!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",c,"instead."),s=c);const l=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=o.getParameter(34930),d=o.getParameter(35660),m=o.getParameter(3379),_=o.getParameter(34076),f=o.getParameter(34921),p=o.getParameter(36347),g=o.getParameter(36348),y=o.getParameter(36349),M=d>0,b=a||t.has("OES_texture_float"),x=M&&b,A=a?o.getParameter(36183):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:s,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:f,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:y,vertexTextures:M,floatFragmentTextures:b,floatVertexTextures:x,maxSamples:A}}function Up(o){const t=this;let e=null,n=0,i=!1,r=!1;const a=new ti,s=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,m){const _=u.length!==0||d||n!==0||i;return i=d,e=h(u,m,0),n=u.length,_},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1,l()},this.setState=function(u,d,m){const _=u.clippingPlanes,f=u.clipIntersection,p=u.clipShadows,g=o.get(u);if(!i||_===null||_.length===0||r&&!p)r?h(null):l();else{const y=r?0:n,M=y*4;let b=g.clippingState||null;c.value=b,b=h(_,d,M,m);for(let x=0;x!==M;++x)b[x]=e[x];g.clippingState=b,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,m,_){const f=u!==null?u.length:0;let p=null;if(f!==0){if(p=c.value,_!==!0||p===null){const g=m+f*4,y=d.matrixWorldInverse;s.getNormalMatrix(y),(p===null||p.length<g)&&(p=new Float32Array(g));for(let M=0,b=m;M!==f;++M,b+=4)a.copy(u[M]).applyMatrix4(y,s),a.normal.toArray(p,b),p[b+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=f,t.numIntersection=0,p}}function kp(o){let t=new WeakMap;function e(a,s){return s===Sa?a.mapping=Qi:s===wa&&(a.mapping=tr),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const s=a.mapping;if(s===Sa||s===wa)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Qu(c.height/2);return l.fromEquirectangularTexture(o,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){const s=a.target;s.removeEventListener("dispose",i);const c=t.get(s);c!==void 0&&(t.delete(s),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Bp extends Mc{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,s=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,s-=h*this.view.offsetY,c=s-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,s,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Hi=4,cl=[.125,.215,.35,.446,.526,.582],ii=20,aa=new Bp,hl=new Ft;let oa=null;const ei=(1+Math.sqrt(5))/2,Bi=1/ei,ul=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,ei,Bi),new O(0,ei,-Bi),new O(Bi,0,ei),new O(-Bi,0,ei),new O(ei,Bi,0),new O(-ei,Bi,0)];class dl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){oa=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ml(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(oa),t.scissorTest=!1,os(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qi||t.mapping===tr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),oa=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ve,minFilter:Ve,generateMipmaps:!1,type:Er,format:on,encoding:mi,depthBuffer:!1},i=fl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vp(r)),this._blurMaterial=Gp(r,t,e)}return i}_compileMaterial(t){const e=new ln(this._lodPlanes[0],t);this._renderer.compile(e,aa)}_sceneToCubeUV(t,e,n,i){const s=new Pe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(hl),h.toneMapping=wn,h.autoClear=!1;const m=new vc({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),_=new ln(new hr,m);let f=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,f=!0):(m.color.copy(hl),f=!0);for(let g=0;g<6;g++){const y=g%3;y===0?(s.up.set(0,c[g],0),s.lookAt(l[g],0,0)):y===1?(s.up.set(0,0,c[g]),s.lookAt(0,l[g],0)):(s.up.set(0,c[g],0),s.lookAt(0,0,l[g]));const M=this._cubeSize;os(i,y*M,g>2?M:0,M,M),h.setRenderTarget(i),f&&h.render(_,s),h.render(t,s)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Qi||t.mapping===tr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ml()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pl());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new ln(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=t;const c=this._cubeSize;os(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,aa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=ul[(i-1)%ul.length];this._blur(t,i-1,i,r,a)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,s){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ln(this._lodPlanes[i],l),d=l.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ii-1),f=r/_,p=isFinite(r)?1+Math.floor(h*f):ii;p>ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ii}`);const g=[];let y=0;for(let L=0;L<ii;++L){const v=L/f,w=Math.exp(-v*v/2);g.push(w),L===0?y+=w:L<p&&(y+=2*w)}for(let L=0;L<g.length;L++)g[L]=g[L]/y;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=g,d.latitudinal.value=a==="latitudinal",s&&(d.poleAxis.value=s);const{_lodMax:M}=this;d.dTheta.value=_,d.mipInt.value=M-n;const b=this._sizeLods[i],x=3*b*(i>M-Hi?i-M+Hi:0),A=4*(this._cubeSize-b);os(e,x,A,3*b,2*b),c.setRenderTarget(e),c.render(u,aa)}}function Vp(o){const t=[],e=[],n=[];let i=o;const r=o-Hi+1+cl.length;for(let a=0;a<r;a++){const s=Math.pow(2,i);e.push(s);let c=1/s;a>o-Hi?c=cl[a-o+Hi-1]:a===0&&(c=0),n.push(c);const l=1/(s-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,_=6,f=3,p=2,g=1,y=new Float32Array(f*_*m),M=new Float32Array(p*_*m),b=new Float32Array(g*_*m);for(let A=0;A<m;A++){const L=A%3*2/3-1,v=A>2?0:-1,w=[L,v,0,L+2/3,v,0,L+2/3,v+1,0,L,v,0,L+2/3,v+1,0,L,v+1,0];y.set(w,f*_*A),M.set(d,p*_*A);const D=[A,A,A,A,A,A];b.set(D,g*_*A)}const x=new yi;x.setAttribute("position",new cn(y,f)),x.setAttribute("uv",new cn(M,p)),x.setAttribute("faceIndex",new cn(b,g)),t.push(x),i>Hi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function fl(o,t,e){const n=new gi(o,t,e);return n.texture.mapping=Ms,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function os(o,t,e,n,i){o.viewport.set(t,e,n,i),o.scissor.set(t,e,n,i)}function Gp(o,t,e){const n=new Float32Array(ii),i=new O(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function pl(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function ml(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Ja(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Hp(o){let t=new WeakMap,e=null;function n(s){if(s&&s.isTexture){const c=s.mapping,l=c===Sa||c===wa,h=c===Qi||c===tr;if(l||h)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let u=t.get(s);return e===null&&(e=new dl(o)),u=l?e.fromEquirectangular(s,u):e.fromCubemap(s,u),t.set(s,u),u.texture}else{if(t.has(s))return t.get(s).texture;{const u=s.image;if(l&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new dl(o));const d=l?e.fromEquirectangular(s):e.fromCubemap(s);return t.set(s,d),s.addEventListener("dispose",r),d.texture}else return null}}}return s}function i(s){let c=0;const l=6;for(let h=0;h<l;h++)s[h]!==void 0&&c++;return c===l}function r(s){const c=s.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Wp(o){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Xp(o,t,e,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete i[d.id];const m=r.get(d);m&&(t.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function s(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const _ in d)t.update(d[_],34962);const m=u.morphAttributes;for(const _ in m){const f=m[_];for(let p=0,g=f.length;p<g;p++)t.update(f[p],34962)}}function l(u){const d=[],m=u.index,_=u.attributes.position;let f=0;if(m!==null){const y=m.array;f=m.version;for(let M=0,b=y.length;M<b;M+=3){const x=y[M+0],A=y[M+1],L=y[M+2];d.push(x,A,A,L,L,x)}}else{const y=_.array;f=_.version;for(let M=0,b=y.length/3-1;M<b;M+=3){const x=M+0,A=M+1,L=M+2;d.push(x,A,A,L,L,x)}}const p=new(fc(d)?bc:yc)(d,1);p.version=f;const g=r.get(u);g&&t.remove(g),r.set(u,p)}function h(u){const d=r.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&l(u)}else l(u);return r.get(u)}return{get:s,update:c,getWireframeAttribute:h}}function qp(o,t,e,n){const i=n.isWebGL2;let r;function a(d){r=d}let s,c;function l(d){s=d.type,c=d.bytesPerElement}function h(d,m){o.drawElements(r,m,s,d*c),e.update(m,r,1)}function u(d,m,_){if(_===0)return;let f,p;if(i)f=o,p="drawElementsInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,m,s,d*c,_),e.update(m,r,_)}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u}function Yp(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,s){switch(e.calls++,a){case 4:e.triangles+=s*(r/3);break;case 1:e.lines+=s*(r/2);break;case 3:e.lines+=s*(r-1);break;case 2:e.lines+=s*r;break;case 0:e.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function $p(o,t){return o[0]-t[0]}function jp(o,t){return Math.abs(t[1])-Math.abs(o[1])}function Zp(o,t,e){const n={},i=new Float32Array(8),r=new WeakMap,a=new kt,s=[];for(let l=0;l<8;l++)s[l]=[l,0];function c(l,h,u,d){const m=l.morphTargetInfluences;if(t.isWebGL2===!0){const f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=f!==void 0?f.length:0;let g=r.get(h);if(g===void 0||g.count!==p){let j=function(){I.dispose(),r.delete(h),h.removeEventListener("dispose",j)};var _=j;g!==void 0&&g.texture.dispose();const b=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,L=h.morphAttributes.position||[],v=h.morphAttributes.normal||[],w=h.morphAttributes.color||[];let D=0;b===!0&&(D=1),x===!0&&(D=2),A===!0&&(D=3);let W=h.attributes.position.count*D,tt=1;W>t.maxTextureSize&&(tt=Math.ceil(W/t.maxTextureSize),W=t.maxTextureSize);const z=new Float32Array(W*tt*4*p),I=new _c(z,W,tt,p);I.type=si,I.needsUpdate=!0;const H=D*4;for(let Z=0;Z<p;Z++){const G=L[Z],F=v[Z],B=w[Z],et=W*tt*4*Z;for(let Q=0;Q<G.count;Q++){const P=Q*H;b===!0&&(a.fromBufferAttribute(G,Q),z[et+P+0]=a.x,z[et+P+1]=a.y,z[et+P+2]=a.z,z[et+P+3]=0),x===!0&&(a.fromBufferAttribute(F,Q),z[et+P+4]=a.x,z[et+P+5]=a.y,z[et+P+6]=a.z,z[et+P+7]=0),A===!0&&(a.fromBufferAttribute(B,Q),z[et+P+8]=a.x,z[et+P+9]=a.y,z[et+P+10]=a.z,z[et+P+11]=B.itemSize===4?a.w:1)}}g={count:p,texture:I,size:new wt(W,tt)},r.set(h,g),h.addEventListener("dispose",j)}let y=0;for(let b=0;b<m.length;b++)y+=m[b];const M=h.morphTargetsRelative?1:1-y;d.getUniforms().setValue(o,"morphTargetBaseInfluence",M),d.getUniforms().setValue(o,"morphTargetInfluences",m),d.getUniforms().setValue(o,"morphTargetsTexture",g.texture,e),d.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}else{const f=m===void 0?0:m.length;let p=n[h.id];if(p===void 0||p.length!==f){p=[];for(let x=0;x<f;x++)p[x]=[x,0];n[h.id]=p}for(let x=0;x<f;x++){const A=p[x];A[0]=x,A[1]=m[x]}p.sort(jp);for(let x=0;x<8;x++)x<f&&p[x][1]?(s[x][0]=p[x][0],s[x][1]=p[x][1]):(s[x][0]=Number.MAX_SAFE_INTEGER,s[x][1]=0);s.sort($p);const g=h.morphAttributes.position,y=h.morphAttributes.normal;let M=0;for(let x=0;x<8;x++){const A=s[x],L=A[0],v=A[1];L!==Number.MAX_SAFE_INTEGER&&v?(g&&h.getAttribute("morphTarget"+x)!==g[L]&&h.setAttribute("morphTarget"+x,g[L]),y&&h.getAttribute("morphNormal"+x)!==y[L]&&h.setAttribute("morphNormal"+x,y[L]),i[x]=v,M+=v):(g&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),y&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}const b=h.morphTargetsRelative?1:1-M;d.getUniforms().setValue(o,"morphTargetBaseInfluence",b),d.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:c}}function Kp(o,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);return i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",s)===!1&&c.addEventListener("dispose",s),e.update(c.instanceMatrix,34962),c.instanceColor!==null&&e.update(c.instanceColor,34962)),u}function a(){i=new WeakMap}function s(c){const l=c.target;l.removeEventListener("dispose",s),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}const Tc=new $e,Ec=new _c,Ac=new zu,Cc=new Sc,gl=[],_l=[],xl=new Float32Array(16),vl=new Float32Array(9),yl=new Float32Array(4);function ur(o,t,e){const n=o[0];if(n<=0||n>0)return o;const i=t*e;let r=gl[i];if(r===void 0&&(r=new Float32Array(i),gl[i]=r),t!==0){n.toArray(r,0);for(let a=1,s=0;a!==t;++a)s+=e,o[a].toArray(r,s)}return r}function me(o,t){if(o.length!==t.length)return!1;for(let e=0,n=o.length;e<n;e++)if(o[e]!==t[e])return!1;return!0}function ge(o,t){for(let e=0,n=t.length;e<n;e++)o[e]=t[e]}function Ts(o,t){let e=_l[t];e===void 0&&(e=new Int32Array(t),_l[t]=e);for(let n=0;n!==t;++n)e[n]=o.allocateTextureUnit();return e}function Jp(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function Qp(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;o.uniform2fv(this.addr,t),ge(e,t)}}function tm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;o.uniform3fv(this.addr,t),ge(e,t)}}function em(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;o.uniform4fv(this.addr,t),ge(e,t)}}function nm(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;yl.set(n),o.uniformMatrix2fv(this.addr,!1,yl),ge(e,n)}}function im(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;vl.set(n),o.uniformMatrix3fv(this.addr,!1,vl),ge(e,n)}}function rm(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;xl.set(n),o.uniformMatrix4fv(this.addr,!1,xl),ge(e,n)}}function sm(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function am(o,t){const e=this.cache;me(e,t)||(o.uniform2iv(this.addr,t),ge(e,t))}function om(o,t){const e=this.cache;me(e,t)||(o.uniform3iv(this.addr,t),ge(e,t))}function lm(o,t){const e=this.cache;me(e,t)||(o.uniform4iv(this.addr,t),ge(e,t))}function cm(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function hm(o,t){const e=this.cache;me(e,t)||(o.uniform2uiv(this.addr,t),ge(e,t))}function um(o,t){const e=this.cache;me(e,t)||(o.uniform3uiv(this.addr,t),ge(e,t))}function dm(o,t){const e=this.cache;me(e,t)||(o.uniform4uiv(this.addr,t),ge(e,t))}function fm(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Tc,i)}function pm(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ac,i)}function mm(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Cc,i)}function gm(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ec,i)}function _m(o){switch(o){case 5126:return Jp;case 35664:return Qp;case 35665:return tm;case 35666:return em;case 35674:return nm;case 35675:return im;case 35676:return rm;case 5124:case 35670:return sm;case 35667:case 35671:return am;case 35668:case 35672:return om;case 35669:case 35673:return lm;case 5125:return cm;case 36294:return hm;case 36295:return um;case 36296:return dm;case 35678:case 36198:case 36298:case 36306:case 35682:return fm;case 35679:case 36299:case 36307:return pm;case 35680:case 36300:case 36308:case 36293:return mm;case 36289:case 36303:case 36311:case 36292:return gm}}function xm(o,t){o.uniform1fv(this.addr,t)}function vm(o,t){const e=ur(t,this.size,2);o.uniform2fv(this.addr,e)}function ym(o,t){const e=ur(t,this.size,3);o.uniform3fv(this.addr,e)}function bm(o,t){const e=ur(t,this.size,4);o.uniform4fv(this.addr,e)}function Mm(o,t){const e=ur(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function Sm(o,t){const e=ur(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function wm(o,t){const e=ur(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function Tm(o,t){o.uniform1iv(this.addr,t)}function Em(o,t){o.uniform2iv(this.addr,t)}function Am(o,t){o.uniform3iv(this.addr,t)}function Cm(o,t){o.uniform4iv(this.addr,t)}function Lm(o,t){o.uniform1uiv(this.addr,t)}function Pm(o,t){o.uniform2uiv(this.addr,t)}function Dm(o,t){o.uniform3uiv(this.addr,t)}function Rm(o,t){o.uniform4uiv(this.addr,t)}function Im(o,t,e){const n=t.length,i=Ts(e,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.setTexture2D(t[r]||Tc,i[r])}function Om(o,t,e){const n=t.length,i=Ts(e,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.setTexture3D(t[r]||Ac,i[r])}function Fm(o,t,e){const n=t.length,i=Ts(e,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.setTextureCube(t[r]||Cc,i[r])}function Nm(o,t,e){const n=t.length,i=Ts(e,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.setTexture2DArray(t[r]||Ec,i[r])}function zm(o){switch(o){case 5126:return xm;case 35664:return vm;case 35665:return ym;case 35666:return bm;case 35674:return Mm;case 35675:return Sm;case 35676:return wm;case 5124:case 35670:return Tm;case 35667:case 35671:return Em;case 35668:case 35672:return Am;case 35669:case 35673:return Cm;case 5125:return Lm;case 36294:return Pm;case 36295:return Dm;case 36296:return Rm;case 35678:case 36198:case 36298:case 36306:case 35682:return Im;case 35679:case 36299:case 36307:return Om;case 35680:case 36300:case 36308:case 36293:return Fm;case 36289:case 36303:case 36311:case 36292:return Nm}}class Um{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=_m(e.type)}}class km{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=zm(e.type)}}class Bm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const s=i[r];s.setValue(t,e[s.id],n)}}}const la=/(\w+)(\])?(\[|\.)?/g;function bl(o,t){o.seq.push(t),o.map[t.id]=t}function Vm(o,t,e){const n=o.name,i=n.length;for(la.lastIndex=0;;){const r=la.exec(n),a=la.lastIndex;let s=r[1];const c=r[2]==="]",l=r[3];if(c&&(s=s|0),l===void 0||l==="["&&a+2===i){bl(e,l===void 0?new Um(s,o,t):new km(s,o,t));break}else{let u=e.map[s];u===void 0&&(u=new Bm(s),bl(e,u)),e=u}}}class hs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Vm(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const s=e[r],c=n[s.id];c.needsUpdate!==!1&&s.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Ml(o,t,e){const n=o.createShader(t);return o.shaderSource(n,e),o.compileShader(n),n}let Gm=0;function Hm(o,t){const e=o.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const s=a+1;n.push(`${s===t?">":" "} ${s}: ${e[a]}`)}return n.join(`
`)}function Wm(o){switch(o){case mi:return["Linear","( value )"];case Xt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function Sl(o,t,e){const n=o.getShaderParameter(t,35713),i=o.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Hm(o.getShaderSource(t),a)}else return i}function Xm(o,t){const e=Wm(t);return"vec4 "+o+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function qm(o,t){let e;switch(t){case hu:e="Linear";break;case uu:e="Reinhard";break;case du:e="OptimizedCineon";break;case fu:e="ACESFilmic";break;case pu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Ym(o){return[o.extensionDerivatives||!!o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(vr).join(`
`)}function $m(o){const t=[];for(const e in o){const n=o[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function jm(o,t){const e={},n=o.getProgramParameter(t,35721);for(let i=0;i<n;i++){const r=o.getActiveAttrib(t,i),a=r.name;let s=1;r.type===35674&&(s=2),r.type===35675&&(s=3),r.type===35676&&(s=4),e[a]={type:r.type,location:o.getAttribLocation(t,a),locationSize:s}}return e}function vr(o){return o!==""}function wl(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tl(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Zm=/^[ \t]*#include +<([\w\d./]+)>/gm;function La(o){return o.replace(Zm,Km)}function Km(o,t){const e=Et[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return La(e)}const Jm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function El(o){return o.replace(Jm,Qm)}function Qm(o,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Al(o){let t="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function tg(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===oc?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Gh?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===xr&&(t="SHADOWMAP_TYPE_VSM"),t}function eg(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Qi:case tr:t="ENVMAP_TYPE_CUBE";break;case Ms:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ng(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case tr:t="ENVMAP_MODE_REFRACTION";break}return t}function ig(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case $a:t="ENVMAP_BLENDING_MULTIPLY";break;case lu:t="ENVMAP_BLENDING_MIX";break;case cu:t="ENVMAP_BLENDING_ADD";break}return t}function rg(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function sg(o,t,e,n){const i=o.getContext(),r=e.defines;let a=e.vertexShader,s=e.fragmentShader;const c=tg(e),l=eg(e),h=ng(e),u=ig(e),d=rg(e),m=e.isWebGL2?"":Ym(e),_=$m(r),f=i.createProgram();let p,g,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=[_].filter(vr).join(`
`),p.length>0&&(p+=`
`),g=[m,_].filter(vr).join(`
`),g.length>0&&(g+=`
`)):(p=[Al(e),"#define SHADER_NAME "+e.shaderName,_,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vr).join(`
`),g=[m,Al(e),"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wn?"#define TONE_MAPPING":"",e.toneMapping!==wn?Et.tonemapping_pars_fragment:"",e.toneMapping!==wn?qm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Et.encodings_pars_fragment,Xm("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vr).join(`
`)),a=La(a),a=wl(a,e),a=Tl(a,e),s=La(s),s=wl(s,e),s=Tl(s,e),a=El(a),s=El(s),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===jo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const M=y+p+a,b=y+g+s,x=Ml(i,35633,M),A=Ml(i,35632,b);if(i.attachShader(f,x),i.attachShader(f,A),e.index0AttributeName!==void 0?i.bindAttribLocation(f,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f),o.debug.checkShaderErrors){const w=i.getProgramInfoLog(f).trim(),D=i.getShaderInfoLog(x).trim(),W=i.getShaderInfoLog(A).trim();let tt=!0,z=!0;if(i.getProgramParameter(f,35714)===!1){tt=!1;const I=Sl(i,x,"vertex"),H=Sl(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,35715)+`

Program Info Log: `+w+`
`+I+`
`+H)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(D===""||W==="")&&(z=!1);z&&(this.diagnostics={runnable:tt,programLog:w,vertexShader:{log:D,prefix:p},fragmentShader:{log:W,prefix:g}})}i.deleteShader(x),i.deleteShader(A);let L;this.getUniforms=function(){return L===void 0&&(L=new hs(i,f)),L};let v;return this.getAttributes=function(){return v===void 0&&(v=jm(i,f)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.name=e.shaderName,this.id=Gm++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=x,this.fragmentShader=A,this}let ag=0;class og{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new lg(t),e.set(t,n)),n}}class lg{constructor(t){this.id=ag++,this.code=t,this.usedTimes=0}}function cg(o,t,e,n,i,r,a){const s=new Za,c=new og,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v,w,D,W,tt){const z=W.fog,I=tt.geometry,H=v.isMeshStandardMaterial?W.environment:null,j=(v.isMeshStandardMaterial?e:t).get(v.envMap||H),Z=!!j&&j.mapping===Ms?j.image.height:null,G=_[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const F=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,B=F!==void 0?F.length:0;let et=0;I.morphAttributes.position!==void 0&&(et=1),I.morphAttributes.normal!==void 0&&(et=2),I.morphAttributes.color!==void 0&&(et=3);let Q,P,V,K;if(G){const vt=sn[G];Q=vt.vertexShader,P=vt.fragmentShader}else Q=v.vertexShader,P=v.fragmentShader,c.update(v),V=c.getVertexShaderID(v),K=c.getFragmentShaderID(v);const k=o.getRenderTarget(),mt=v.alphaTest>0,ct=v.clearcoat>0,ft=v.iridescence>0;return{isWebGL2:h,shaderID:G,shaderName:v.type,vertexShader:Q,fragmentShader:P,defines:v.defines,customVertexShaderID:V,customFragmentShaderID:K,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:tt.isInstancedMesh===!0,instancingColor:tt.isInstancedMesh===!0&&tt.instanceColor!==null,supportsVertexTextures:d,outputEncoding:k===null?o.outputEncoding:k.isXRRenderTarget===!0?k.texture.encoding:mi,map:!!v.map,matcap:!!v.matcap,envMap:!!j,envMapMode:j&&j.mapping,envMapCubeUVHeight:Z,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Iu,tangentSpaceNormalMap:v.normalMapType===dc,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Xt,clearcoat:ct,clearcoatMap:ct&&!!v.clearcoatMap,clearcoatRoughnessMap:ct&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:ct&&!!v.clearcoatNormalMap,iridescence:ft,iridescenceMap:ft&&!!v.iridescenceMap,iridescenceThicknessMap:ft&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Yi,alphaMap:!!v.alphaMap,alphaTest:mt,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!I.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!z,useFog:v.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:u,skinning:tt.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:et,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:o.shadowMap.enabled&&D.length>0,shadowMapType:o.shadowMap.type,toneMapping:v.toneMapped?o.toneMapping:wn,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===zn,flipSided:v.side===qe,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)w.push(D),w.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(g(w,v),y(w,v),w.push(o.outputEncoding)),w.push(v.customProgramCacheKey),w.join()}function g(v,w){v.push(w.precision),v.push(w.outputEncoding),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.combine),v.push(w.vertexUvs),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function y(v,w){s.disableAll(),w.isWebGL2&&s.enable(0),w.supportsVertexTextures&&s.enable(1),w.instancing&&s.enable(2),w.instancingColor&&s.enable(3),w.map&&s.enable(4),w.matcap&&s.enable(5),w.envMap&&s.enable(6),w.lightMap&&s.enable(7),w.aoMap&&s.enable(8),w.emissiveMap&&s.enable(9),w.bumpMap&&s.enable(10),w.normalMap&&s.enable(11),w.objectSpaceNormalMap&&s.enable(12),w.tangentSpaceNormalMap&&s.enable(13),w.clearcoat&&s.enable(14),w.clearcoatMap&&s.enable(15),w.clearcoatRoughnessMap&&s.enable(16),w.clearcoatNormalMap&&s.enable(17),w.iridescence&&s.enable(18),w.iridescenceMap&&s.enable(19),w.iridescenceThicknessMap&&s.enable(20),w.displacementMap&&s.enable(21),w.specularMap&&s.enable(22),w.roughnessMap&&s.enable(23),w.metalnessMap&&s.enable(24),w.gradientMap&&s.enable(25),w.alphaMap&&s.enable(26),w.alphaTest&&s.enable(27),w.vertexColors&&s.enable(28),w.vertexAlphas&&s.enable(29),w.vertexUvs&&s.enable(30),w.vertexTangents&&s.enable(31),w.uvsVertexOnly&&s.enable(32),v.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.skinning&&s.enable(4),w.morphTargets&&s.enable(5),w.morphNormals&&s.enable(6),w.morphColors&&s.enable(7),w.premultipliedAlpha&&s.enable(8),w.shadowMapEnabled&&s.enable(9),w.physicallyCorrectLights&&s.enable(10),w.doubleSided&&s.enable(11),w.flipSided&&s.enable(12),w.useDepthPacking&&s.enable(13),w.dithering&&s.enable(14),w.specularIntensityMap&&s.enable(15),w.specularColorMap&&s.enable(16),w.transmission&&s.enable(17),w.transmissionMap&&s.enable(18),w.thicknessMap&&s.enable(19),w.sheen&&s.enable(20),w.sheenColorMap&&s.enable(21),w.sheenRoughnessMap&&s.enable(22),w.decodeVideoTexture&&s.enable(23),w.opaque&&s.enable(24),v.push(s.mask)}function M(v){const w=_[v.type];let D;if(w){const W=sn[w];D=ju.clone(W.uniforms)}else D=v.uniforms;return D}function b(v,w){let D;for(let W=0,tt=l.length;W<tt;W++){const z=l[W];if(z.cacheKey===w){D=z,++D.usedTimes;break}}return D===void 0&&(D=new sg(o,w,v,r),l.push(D)),D}function x(v){if(--v.usedTimes===0){const w=l.indexOf(v);l[w]=l[l.length-1],l.pop(),v.destroy()}}function A(v){c.remove(v)}function L(){c.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:M,acquireProgram:b,releaseProgram:x,releaseShaderCache:A,programs:l,dispose:L}}function hg(){let o=new WeakMap;function t(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function e(r){o.delete(r)}function n(r,a,s){o.get(r)[a]=s}function i(){o=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function ug(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Cl(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Ll(){const o=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,m,_,f,p){let g=o[t];return g===void 0?(g={id:u.id,object:u,geometry:d,material:m,groupOrder:_,renderOrder:u.renderOrder,z:f,group:p},o[t]=g):(g.id=u.id,g.object=u,g.geometry=d,g.material=m,g.groupOrder=_,g.renderOrder=u.renderOrder,g.z=f,g.group=p),t++,g}function s(u,d,m,_,f,p){const g=a(u,d,m,_,f,p);m.transmission>0?n.push(g):m.transparent===!0?i.push(g):e.push(g)}function c(u,d,m,_,f,p){const g=a(u,d,m,_,f,p);m.transmission>0?n.unshift(g):m.transparent===!0?i.unshift(g):e.unshift(g)}function l(u,d){e.length>1&&e.sort(u||ug),n.length>1&&n.sort(d||Cl),i.length>1&&i.sort(d||Cl)}function h(){for(let u=t,d=o.length;u<d;u++){const m=o[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:s,unshift:c,finish:h,sort:l}}function dg(){let o=new WeakMap;function t(n,i){const r=o.get(n);let a;return r===void 0?(a=new Ll,o.set(n,[a])):i>=r.length?(a=new Ll,r.push(a)):a=r[i],a}function e(){o=new WeakMap}return{get:t,dispose:e}}function fg(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new Ft};break;case"SpotLight":e={position:new O,direction:new O,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new O,halfWidth:new O,halfHeight:new O};break}return o[t.id]=e,e}}}function pg(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let mg=0;function gg(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function _g(o,t){const e=new fg,n=pg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new O);const r=new O,a=new Qt,s=new Qt;function c(h,u){let d=0,m=0,_=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let f=0,p=0,g=0,y=0,M=0,b=0,x=0,A=0,L=0,v=0;h.sort(gg);const w=u!==!0?Math.PI:1;for(let W=0,tt=h.length;W<tt;W++){const z=h[W],I=z.color,H=z.intensity,j=z.distance,Z=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)d+=I.r*H*w,m+=I.g*H*w,_+=I.b*H*w;else if(z.isLightProbe)for(let G=0;G<9;G++)i.probe[G].addScaledVector(z.sh.coefficients[G],H);else if(z.isDirectionalLight){const G=e.get(z);if(G.color.copy(z.color).multiplyScalar(z.intensity*w),z.castShadow){const F=z.shadow,B=n.get(z);B.shadowBias=F.bias,B.shadowNormalBias=F.normalBias,B.shadowRadius=F.radius,B.shadowMapSize=F.mapSize,i.directionalShadow[f]=B,i.directionalShadowMap[f]=Z,i.directionalShadowMatrix[f]=z.shadow.matrix,b++}i.directional[f]=G,f++}else if(z.isSpotLight){const G=e.get(z);G.position.setFromMatrixPosition(z.matrixWorld),G.color.copy(I).multiplyScalar(H*w),G.distance=j,G.coneCos=Math.cos(z.angle),G.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),G.decay=z.decay,i.spot[g]=G;const F=z.shadow;if(z.map&&(i.spotLightMap[L]=z.map,L++,F.updateMatrices(z),z.castShadow&&v++),i.spotLightMatrix[g]=F.matrix,z.castShadow){const B=n.get(z);B.shadowBias=F.bias,B.shadowNormalBias=F.normalBias,B.shadowRadius=F.radius,B.shadowMapSize=F.mapSize,i.spotShadow[g]=B,i.spotShadowMap[g]=Z,A++}g++}else if(z.isRectAreaLight){const G=e.get(z);G.color.copy(I).multiplyScalar(H),G.halfWidth.set(z.width*.5,0,0),G.halfHeight.set(0,z.height*.5,0),i.rectArea[y]=G,y++}else if(z.isPointLight){const G=e.get(z);if(G.color.copy(z.color).multiplyScalar(z.intensity*w),G.distance=z.distance,G.decay=z.decay,z.castShadow){const F=z.shadow,B=n.get(z);B.shadowBias=F.bias,B.shadowNormalBias=F.normalBias,B.shadowRadius=F.radius,B.shadowMapSize=F.mapSize,B.shadowCameraNear=F.camera.near,B.shadowCameraFar=F.camera.far,i.pointShadow[p]=B,i.pointShadowMap[p]=Z,i.pointShadowMatrix[p]=z.shadow.matrix,x++}i.point[p]=G,p++}else if(z.isHemisphereLight){const G=e.get(z);G.skyColor.copy(z.color).multiplyScalar(H*w),G.groundColor.copy(z.groundColor).multiplyScalar(H*w),i.hemi[M]=G,M++}}y>0&&(t.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=at.LTC_FLOAT_1,i.rectAreaLTC2=at.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=at.LTC_HALF_1,i.rectAreaLTC2=at.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=_;const D=i.hash;(D.directionalLength!==f||D.pointLength!==p||D.spotLength!==g||D.rectAreaLength!==y||D.hemiLength!==M||D.numDirectionalShadows!==b||D.numPointShadows!==x||D.numSpotShadows!==A||D.numSpotMaps!==L)&&(i.directional.length=f,i.spot.length=g,i.rectArea.length=y,i.point.length=p,i.hemi.length=M,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=A+L-v,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=v,D.directionalLength=f,D.pointLength=p,D.spotLength=g,D.rectAreaLength=y,D.hemiLength=M,D.numDirectionalShadows=b,D.numPointShadows=x,D.numSpotShadows=A,D.numSpotMaps=L,i.version=mg++)}function l(h,u){let d=0,m=0,_=0,f=0,p=0;const g=u.matrixWorldInverse;for(let y=0,M=h.length;y<M;y++){const b=h[y];if(b.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),d++}else if(b.isSpotLight){const x=i.spot[_];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),_++}else if(b.isRectAreaLight){const x=i.rectArea[f];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(g),s.identity(),a.copy(b.matrixWorld),a.premultiply(g),s.extractRotation(a),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(s),x.halfHeight.applyMatrix4(s),f++}else if(b.isPointLight){const x=i.point[m];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(g),m++}else if(b.isHemisphereLight){const x=i.hemi[p];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(g),p++}}}return{setup:c,setupView:l,state:i}}function Pl(o,t){const e=new _g(o,t),n=[],i=[];function r(){n.length=0,i.length=0}function a(u){n.push(u)}function s(u){i.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:s}}function xg(o,t){let e=new WeakMap;function n(r,a=0){const s=e.get(r);let c;return s===void 0?(c=new Pl(o,t),e.set(r,[c])):a>=s.length?(c=new Pl(o,t),s.push(c)):c=s[a],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class vg extends Ur{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Du,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class yg extends Ur{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new O,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const bg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Sg(o,t,e){let n=new Ka;const i=new wt,r=new wt,a=new kt,s=new vg({depthPacking:Ru}),c=new yg,l={},h=e.maxTextureSize,u={0:qe,1:Ji,2:zn},d=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:bg,fragmentShader:Mg}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new yi;_.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const f=new ln(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oc,this.render=function(b,x,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const L=o.getRenderTarget(),v=o.getActiveCubeFace(),w=o.getActiveMipmapLevel(),D=o.state;D.setBlending(Vn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let W=0,tt=b.length;W<tt;W++){const z=b[W],I=z.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const H=I.getFrameExtents();if(i.multiply(H),r.copy(I.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/H.x),i.x=r.x*H.x,I.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/H.y),i.y=r.y*H.y,I.mapSize.y=r.y)),I.map===null){const Z=this.type!==xr?{minFilter:_e,magFilter:_e}:{};I.map=new gi(i.x,i.y,Z),I.map.texture.name=z.name+".shadowMap",I.camera.updateProjectionMatrix()}o.setRenderTarget(I.map),o.clear();const j=I.getViewportCount();for(let Z=0;Z<j;Z++){const G=I.getViewport(Z);a.set(r.x*G.x,r.y*G.y,r.x*G.z,r.y*G.w),D.viewport(a),I.updateMatrices(z,Z),n=I.getFrustum(),M(x,A,I.camera,z,this.type)}I.isPointLightShadow!==!0&&this.type===xr&&g(I,A),I.needsUpdate=!1}p.needsUpdate=!1,o.setRenderTarget(L,v,w)};function g(b,x){const A=t.update(f);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new gi(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,o.setRenderTarget(b.mapPass),o.clear(),o.renderBufferDirect(x,null,A,d,f,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,o.setRenderTarget(b.map),o.clear(),o.renderBufferDirect(x,null,A,m,f,null)}function y(b,x,A,L,v,w){let D=null;const W=A.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(W!==void 0?D=W:D=A.isPointLight===!0?c:s,o.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0){const tt=D.uuid,z=x.uuid;let I=l[tt];I===void 0&&(I={},l[tt]=I);let H=I[z];H===void 0&&(H=D.clone(),I[z]=H),D=H}return D.visible=x.visible,D.wireframe=x.wireframe,w===xr?D.side=x.shadowSide!==null?x.shadowSide:x.side:D.side=x.shadowSide!==null?x.shadowSide:u[x.side],D.alphaMap=x.alphaMap,D.alphaTest=x.alphaTest,D.clipShadows=x.clipShadows,D.clippingPlanes=x.clippingPlanes,D.clipIntersection=x.clipIntersection,D.displacementMap=x.displacementMap,D.displacementScale=x.displacementScale,D.displacementBias=x.displacementBias,D.wireframeLinewidth=x.wireframeLinewidth,D.linewidth=x.linewidth,A.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(A.matrixWorld),D.nearDistance=L,D.farDistance=v),D}function M(b,x,A,L,v){if(b.visible===!1)return;if(b.layers.test(x.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&v===xr)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,b.matrixWorld);const W=t.update(b),tt=b.material;if(Array.isArray(tt)){const z=W.groups;for(let I=0,H=z.length;I<H;I++){const j=z[I],Z=tt[j.materialIndex];if(Z&&Z.visible){const G=y(b,Z,L,A.near,A.far,v);o.renderBufferDirect(A,null,W,G,b,j)}}}else if(tt.visible){const z=y(b,tt,L,A.near,A.far,v);o.renderBufferDirect(A,null,W,z,b,null)}}const D=b.children;for(let W=0,tt=D.length;W<tt;W++)M(D[W],x,A,L,v)}}function wg(o,t,e){const n=e.isWebGL2;function i(){let R=!1;const ot=new kt;let X=null;const pt=new kt(0,0,0,0);return{setMask:function(dt){X!==dt&&!R&&(o.colorMask(dt,dt,dt,dt),X=dt)},setLocked:function(dt){R=dt},setClear:function(dt,Dt,re,$t,Cn){Cn===!0&&(dt*=$t,Dt*=$t,re*=$t),ot.set(dt,Dt,re,$t),pt.equals(ot)===!1&&(o.clearColor(dt,Dt,re,$t),pt.copy(ot))},reset:function(){R=!1,X=null,pt.set(-1,0,0,0)}}}function r(){let R=!1,ot=null,X=null,pt=null;return{setTest:function(dt){dt?mt(2929):ct(2929)},setMask:function(dt){ot!==dt&&!R&&(o.depthMask(dt),ot=dt)},setFunc:function(dt){if(X!==dt){if(dt)switch(dt){case eu:o.depthFunc(512);break;case nu:o.depthFunc(519);break;case iu:o.depthFunc(513);break;case Ma:o.depthFunc(515);break;case ru:o.depthFunc(514);break;case su:o.depthFunc(518);break;case au:o.depthFunc(516);break;case ou:o.depthFunc(517);break;default:o.depthFunc(515)}else o.depthFunc(515);X=dt}},setLocked:function(dt){R=dt},setClear:function(dt){pt!==dt&&(o.clearDepth(dt),pt=dt)},reset:function(){R=!1,ot=null,X=null,pt=null}}}function a(){let R=!1,ot=null,X=null,pt=null,dt=null,Dt=null,re=null,$t=null,Cn=null;return{setTest:function(Ht){R||(Ht?mt(2960):ct(2960))},setMask:function(Ht){ot!==Ht&&!R&&(o.stencilMask(Ht),ot=Ht)},setFunc:function(Ht,fn,Ne){(X!==Ht||pt!==fn||dt!==Ne)&&(o.stencilFunc(Ht,fn,Ne),X=Ht,pt=fn,dt=Ne)},setOp:function(Ht,fn,Ne){(Dt!==Ht||re!==fn||$t!==Ne)&&(o.stencilOp(Ht,fn,Ne),Dt=Ht,re=fn,$t=Ne)},setLocked:function(Ht){R=Ht},setClear:function(Ht){Cn!==Ht&&(o.clearStencil(Ht),Cn=Ht)},reset:function(){R=!1,ot=null,X=null,pt=null,dt=null,Dt=null,re=null,$t=null,Cn=null}}}const s=new i,c=new r,l=new a,h=new WeakMap,u=new WeakMap;let d={},m={},_=new WeakMap,f=[],p=null,g=!1,y=null,M=null,b=null,x=null,A=null,L=null,v=null,w=!1,D=null,W=null,tt=null,z=null,I=null;const H=o.getParameter(35661);let j=!1,Z=0;const G=o.getParameter(7938);G.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(G)[1]),j=Z>=1):G.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),j=Z>=2);let F=null,B={};const et=o.getParameter(3088),Q=o.getParameter(2978),P=new kt().fromArray(et),V=new kt().fromArray(Q);function K(R,ot,X){const pt=new Uint8Array(4),dt=o.createTexture();o.bindTexture(R,dt),o.texParameteri(R,10241,9728),o.texParameteri(R,10240,9728);for(let Dt=0;Dt<X;Dt++)o.texImage2D(ot+Dt,0,6408,1,1,0,6408,5121,pt);return dt}const k={};k[3553]=K(3553,3553,1),k[34067]=K(34067,34069,6),s.setClear(0,0,0,1),c.setClear(1),l.setClear(0),mt(2929),c.setFunc(Ma),Gt(!1),Se(vo),mt(2884),Vt(Vn);function mt(R){d[R]!==!0&&(o.enable(R),d[R]=!0)}function ct(R){d[R]!==!1&&(o.disable(R),d[R]=!1)}function ft(R,ot){return m[R]!==ot?(o.bindFramebuffer(R,ot),m[R]=ot,n&&(R===36009&&(m[36160]=ot),R===36160&&(m[36009]=ot)),!0):!1}function it(R,ot){let X=f,pt=!1;if(R)if(X=_.get(ot),X===void 0&&(X=[],_.set(ot,X)),R.isWebGLMultipleRenderTargets){const dt=R.texture;if(X.length!==dt.length||X[0]!==36064){for(let Dt=0,re=dt.length;Dt<re;Dt++)X[Dt]=36064+Dt;X.length=dt.length,pt=!0}}else X[0]!==36064&&(X[0]=36064,pt=!0);else X[0]!==1029&&(X[0]=1029,pt=!0);pt&&(e.isWebGL2?o.drawBuffers(X):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(X))}function vt(R){return p!==R?(o.useProgram(R),p=R,!0):!1}const xt={[Gi]:32774,[Wh]:32778,[Xh]:32779};if(n)xt[So]=32775,xt[wo]=32776;else{const R=t.get("EXT_blend_minmax");R!==null&&(xt[So]=R.MIN_EXT,xt[wo]=R.MAX_EXT)}const gt={[qh]:0,[Yh]:1,[$h]:768,[lc]:770,[tu]:776,[Jh]:774,[Zh]:772,[jh]:769,[cc]:771,[Qh]:775,[Kh]:773};function Vt(R,ot,X,pt,dt,Dt,re,$t){if(R===Vn){g===!0&&(ct(3042),g=!1);return}if(g===!1&&(mt(3042),g=!0),R!==Hh){if(R!==y||$t!==w){if((M!==Gi||A!==Gi)&&(o.blendEquation(32774),M=Gi,A=Gi),$t)switch(R){case Yi:o.blendFuncSeparate(1,771,1,771);break;case yo:o.blendFunc(1,1);break;case bo:o.blendFuncSeparate(0,769,0,1);break;case Mo:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Yi:o.blendFuncSeparate(770,771,1,771);break;case yo:o.blendFunc(770,1);break;case bo:o.blendFuncSeparate(0,769,0,1);break;case Mo:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}b=null,x=null,L=null,v=null,y=R,w=$t}return}dt=dt||ot,Dt=Dt||X,re=re||pt,(ot!==M||dt!==A)&&(o.blendEquationSeparate(xt[ot],xt[dt]),M=ot,A=dt),(X!==b||pt!==x||Dt!==L||re!==v)&&(o.blendFuncSeparate(gt[X],gt[pt],gt[Dt],gt[re]),b=X,x=pt,L=Dt,v=re),y=R,w=null}function te(R,ot){R.side===zn?ct(2884):mt(2884);let X=R.side===qe;ot&&(X=!X),Gt(X),R.blending===Yi&&R.transparent===!1?Vt(Vn):Vt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),c.setFunc(R.depthFunc),c.setTest(R.depthTest),c.setMask(R.depthWrite),s.setMask(R.colorWrite);const pt=R.stencilWrite;l.setTest(pt),pt&&(l.setMask(R.stencilWriteMask),l.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),l.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),It(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?mt(32926):ct(32926)}function Gt(R){D!==R&&(R?o.frontFace(2304):o.frontFace(2305),D=R)}function Se(R){R!==Bh?(mt(2884),R!==W&&(R===vo?o.cullFace(1029):R===Vh?o.cullFace(1028):o.cullFace(1032))):ct(2884),W=R}function ee(R){R!==tt&&(j&&o.lineWidth(R),tt=R)}function It(R,ot,X){R?(mt(32823),(z!==ot||I!==X)&&(o.polygonOffset(ot,X),z=ot,I=X)):ct(32823)}function Fe(R){R?mt(3089):ct(3089)}function we(R){R===void 0&&(R=33984+H-1),F!==R&&(o.activeTexture(R),F=R)}function C(R,ot){F===null&&we();let X=B[F];X===void 0&&(X={type:void 0,texture:void 0},B[F]=X),(X.type!==R||X.texture!==ot)&&(o.bindTexture(R,ot||k[R]),X.type=R,X.texture=ot)}function S(){const R=B[F];R!==void 0&&R.type!==void 0&&(o.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function q(){try{o.compressedTexImage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function nt(){try{o.texSubImage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function rt(){try{o.texSubImage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ht(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function yt(){try{o.texStorage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function T(){try{o.texStorage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function J(){try{o.texImage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function st(){try{o.texImage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ut(R){P.equals(R)===!1&&(o.scissor(R.x,R.y,R.z,R.w),P.copy(R))}function lt(R){V.equals(R)===!1&&(o.viewport(R.x,R.y,R.z,R.w),V.copy(R))}function bt(R,ot){let X=u.get(ot);X===void 0&&(X=new WeakMap,u.set(ot,X));let pt=X.get(R);pt===void 0&&(pt=o.getUniformBlockIndex(ot,R.name),X.set(R,pt))}function At(R,ot){const pt=u.get(ot).get(R);h.get(R)!==pt&&(o.uniformBlockBinding(ot,pt,R.__bindingPointIndex),h.set(R,pt))}function Ut(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),d={},F=null,B={},m={},_=new WeakMap,f=[],p=null,g=!1,y=null,M=null,b=null,x=null,A=null,L=null,v=null,w=!1,D=null,W=null,tt=null,z=null,I=null,P.set(0,0,o.canvas.width,o.canvas.height),V.set(0,0,o.canvas.width,o.canvas.height),s.reset(),c.reset(),l.reset()}return{buffers:{color:s,depth:c,stencil:l},enable:mt,disable:ct,bindFramebuffer:ft,drawBuffers:it,useProgram:vt,setBlending:Vt,setMaterial:te,setFlipSided:Gt,setCullFace:Se,setLineWidth:ee,setPolygonOffset:It,setScissorTest:Fe,activeTexture:we,bindTexture:C,unbindTexture:S,compressedTexImage2D:q,texImage2D:J,texImage3D:st,updateUBOMapping:bt,uniformBlockBinding:At,texStorage2D:yt,texStorage3D:T,texSubImage2D:nt,texSubImage3D:rt,compressedTexSubImage2D:ht,scissor:ut,viewport:lt,reset:Ut}}function Tg(o,t,e,n,i,r,a){const s=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let f;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,S){return g?new OffscreenCanvas(C,S):Ar("canvas")}function M(C,S,q,nt){let rt=1;if((C.width>nt||C.height>nt)&&(rt=nt/Math.max(C.width,C.height)),rt<1||S===!0)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap){const ht=S?Ca:Math.floor,yt=ht(rt*C.width),T=ht(rt*C.height);f===void 0&&(f=y(yt,T));const J=q?y(yt,T):f;return J.width=yt,J.height=T,J.getContext("2d").drawImage(C,0,0,yt,T),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+yt+"x"+T+")."),J}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function b(C){return Ko(C.width)&&Ko(C.height)}function x(C){return s?!1:C.wrapS!==tn||C.wrapT!==tn||C.minFilter!==_e&&C.minFilter!==Ve}function A(C,S){return C.generateMipmaps&&S&&C.minFilter!==_e&&C.minFilter!==Ve}function L(C){o.generateMipmap(C)}function v(C,S,q,nt,rt=!1){if(s===!1)return S;if(C!==null){if(o[C]!==void 0)return o[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ht=S;return S===6403&&(q===5126&&(ht=33326),q===5131&&(ht=33325),q===5121&&(ht=33321)),S===33319&&(q===5126&&(ht=33328),q===5131&&(ht=33327),q===5121&&(ht=33323)),S===6408&&(q===5126&&(ht=34836),q===5131&&(ht=34842),q===5121&&(ht=nt===Xt&&rt===!1?35907:32856),q===32819&&(ht=32854),q===32820&&(ht=32855)),(ht===33325||ht===33326||ht===33327||ht===33328||ht===34842||ht===34836)&&t.get("EXT_color_buffer_float"),ht}function w(C,S,q){return A(C,q)===!0||C.isFramebufferTexture&&C.minFilter!==_e&&C.minFilter!==Ve?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function D(C){return C===_e||C===To||C===Eo?9728:9729}function W(C){const S=C.target;S.removeEventListener("dispose",W),z(S),S.isVideoTexture&&_.delete(S)}function tt(C){const S=C.target;S.removeEventListener("dispose",tt),H(S)}function z(C){const S=n.get(C);if(S.__webglInit===void 0)return;const q=C.source,nt=p.get(q);if(nt){const rt=nt[S.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&I(C),Object.keys(nt).length===0&&p.delete(q)}n.remove(C)}function I(C){const S=n.get(C);o.deleteTexture(S.__webglTexture);const q=C.source,nt=p.get(q);delete nt[S.__cacheKey],a.memory.textures--}function H(C){const S=C.texture,q=n.get(C),nt=n.get(S);if(nt.__webglTexture!==void 0&&(o.deleteTexture(nt.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++)o.deleteFramebuffer(q.__webglFramebuffer[rt]),q.__webglDepthbuffer&&o.deleteRenderbuffer(q.__webglDepthbuffer[rt]);else{if(o.deleteFramebuffer(q.__webglFramebuffer),q.__webglDepthbuffer&&o.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&o.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let rt=0;rt<q.__webglColorRenderbuffer.length;rt++)q.__webglColorRenderbuffer[rt]&&o.deleteRenderbuffer(q.__webglColorRenderbuffer[rt]);q.__webglDepthRenderbuffer&&o.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let rt=0,ht=S.length;rt<ht;rt++){const yt=n.get(S[rt]);yt.__webglTexture&&(o.deleteTexture(yt.__webglTexture),a.memory.textures--),n.remove(S[rt])}n.remove(S),n.remove(C)}let j=0;function Z(){j=0}function G(){const C=j;return C>=c&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+c),j+=1,C}function F(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.encoding),S.join()}function B(C,S){const q=n.get(C);if(C.isVideoTexture&&Fe(C),C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){const nt=C.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ct(q,C,S);return}}e.activeTexture(33984+S),e.bindTexture(3553,q.__webglTexture)}function et(C,S){const q=n.get(C);if(C.version>0&&q.__version!==C.version){ct(q,C,S);return}e.activeTexture(33984+S),e.bindTexture(35866,q.__webglTexture)}function Q(C,S){const q=n.get(C);if(C.version>0&&q.__version!==C.version){ct(q,C,S);return}e.activeTexture(33984+S),e.bindTexture(32879,q.__webglTexture)}function P(C,S){const q=n.get(C);if(C.version>0&&q.__version!==C.version){ft(q,C,S);return}e.activeTexture(33984+S),e.bindTexture(34067,q.__webglTexture)}const V={[Ta]:10497,[tn]:33071,[Ea]:33648},K={[_e]:9728,[To]:9984,[Eo]:9986,[Ve]:9729,[mu]:9985,[Ss]:9987};function k(C,S,q){if(q?(o.texParameteri(C,10242,V[S.wrapS]),o.texParameteri(C,10243,V[S.wrapT]),(C===32879||C===35866)&&o.texParameteri(C,32882,V[S.wrapR]),o.texParameteri(C,10240,K[S.magFilter]),o.texParameteri(C,10241,K[S.minFilter])):(o.texParameteri(C,10242,33071),o.texParameteri(C,10243,33071),(C===32879||C===35866)&&o.texParameteri(C,32882,33071),(S.wrapS!==tn||S.wrapT!==tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(C,10240,D(S.magFilter)),o.texParameteri(C,10241,D(S.minFilter)),S.minFilter!==_e&&S.minFilter!==Ve&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const nt=t.get("EXT_texture_filter_anisotropic");if(S.type===si&&t.has("OES_texture_float_linear")===!1||s===!1&&S.type===Er&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(o.texParameterf(C,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function mt(C,S){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",W));const nt=S.source;let rt=p.get(nt);rt===void 0&&(rt={},p.set(nt,rt));const ht=F(S);if(ht!==C.__cacheKey){rt[ht]===void 0&&(rt[ht]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,q=!0),rt[ht].usedTimes++;const yt=rt[C.__cacheKey];yt!==void 0&&(rt[C.__cacheKey].usedTimes--,yt.usedTimes===0&&I(S)),C.__cacheKey=ht,C.__webglTexture=rt[ht].texture}return q}function ct(C,S,q){let nt=3553;S.isDataArrayTexture&&(nt=35866),S.isData3DTexture&&(nt=32879);const rt=mt(C,S),ht=S.source;if(e.activeTexture(33984+q),e.bindTexture(nt,C.__webglTexture),ht.version!==ht.__currentVersion||rt===!0){o.pixelStorei(37440,S.flipY),o.pixelStorei(37441,S.premultiplyAlpha),o.pixelStorei(3317,S.unpackAlignment),o.pixelStorei(37443,0);const yt=x(S)&&b(S.image)===!1;let T=M(S.image,yt,!1,h);T=we(S,T);const J=b(T)||s,st=r.convert(S.format,S.encoding);let ut=r.convert(S.type),lt=v(S.internalFormat,st,ut,S.encoding,S.isVideoTexture);k(nt,S,J);let bt;const At=S.mipmaps,Ut=s&&S.isVideoTexture!==!0,R=ht.__currentVersion===void 0||rt===!0,ot=w(S,T,J);if(S.isDepthTexture)lt=6402,s?S.type===si?lt=36012:S.type===ri?lt=33190:S.type===$i?lt=35056:lt=33189:S.type===si&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===li&&lt===6402&&S.type!==uc&&S.type!==ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=ri,ut=r.convert(S.type)),S.format===er&&lt===6402&&(lt=34041,S.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=$i,ut=r.convert(S.type))),R&&(Ut?e.texStorage2D(3553,1,lt,T.width,T.height):e.texImage2D(3553,0,lt,T.width,T.height,0,st,ut,null));else if(S.isDataTexture)if(At.length>0&&J){Ut&&R&&e.texStorage2D(3553,ot,lt,At[0].width,At[0].height);for(let X=0,pt=At.length;X<pt;X++)bt=At[X],Ut?e.texSubImage2D(3553,X,0,0,bt.width,bt.height,st,ut,bt.data):e.texImage2D(3553,X,lt,bt.width,bt.height,0,st,ut,bt.data);S.generateMipmaps=!1}else Ut?(R&&e.texStorage2D(3553,ot,lt,T.width,T.height),e.texSubImage2D(3553,0,0,0,T.width,T.height,st,ut,T.data)):e.texImage2D(3553,0,lt,T.width,T.height,0,st,ut,T.data);else if(S.isCompressedTexture){Ut&&R&&e.texStorage2D(3553,ot,lt,At[0].width,At[0].height);for(let X=0,pt=At.length;X<pt;X++)bt=At[X],S.format!==on?st!==null?Ut?e.compressedTexSubImage2D(3553,X,0,0,bt.width,bt.height,st,bt.data):e.compressedTexImage2D(3553,X,lt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?e.texSubImage2D(3553,X,0,0,bt.width,bt.height,st,ut,bt.data):e.texImage2D(3553,X,lt,bt.width,bt.height,0,st,ut,bt.data)}else if(S.isDataArrayTexture)Ut?(R&&e.texStorage3D(35866,ot,lt,T.width,T.height,T.depth),e.texSubImage3D(35866,0,0,0,0,T.width,T.height,T.depth,st,ut,T.data)):e.texImage3D(35866,0,lt,T.width,T.height,T.depth,0,st,ut,T.data);else if(S.isData3DTexture)Ut?(R&&e.texStorage3D(32879,ot,lt,T.width,T.height,T.depth),e.texSubImage3D(32879,0,0,0,0,T.width,T.height,T.depth,st,ut,T.data)):e.texImage3D(32879,0,lt,T.width,T.height,T.depth,0,st,ut,T.data);else if(S.isFramebufferTexture){if(R)if(Ut)e.texStorage2D(3553,ot,lt,T.width,T.height);else{let X=T.width,pt=T.height;for(let dt=0;dt<ot;dt++)e.texImage2D(3553,dt,lt,X,pt,0,st,ut,null),X>>=1,pt>>=1}}else if(At.length>0&&J){Ut&&R&&e.texStorage2D(3553,ot,lt,At[0].width,At[0].height);for(let X=0,pt=At.length;X<pt;X++)bt=At[X],Ut?e.texSubImage2D(3553,X,0,0,st,ut,bt):e.texImage2D(3553,X,lt,st,ut,bt);S.generateMipmaps=!1}else Ut?(R&&e.texStorage2D(3553,ot,lt,T.width,T.height),e.texSubImage2D(3553,0,0,0,st,ut,T)):e.texImage2D(3553,0,lt,st,ut,T);A(S,J)&&L(nt),ht.__currentVersion=ht.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ft(C,S,q){if(S.image.length!==6)return;const nt=mt(C,S),rt=S.source;if(e.activeTexture(33984+q),e.bindTexture(34067,C.__webglTexture),rt.version!==rt.__currentVersion||nt===!0){o.pixelStorei(37440,S.flipY),o.pixelStorei(37441,S.premultiplyAlpha),o.pixelStorei(3317,S.unpackAlignment),o.pixelStorei(37443,0);const ht=S.isCompressedTexture||S.image[0].isCompressedTexture,yt=S.image[0]&&S.image[0].isDataTexture,T=[];for(let X=0;X<6;X++)!ht&&!yt?T[X]=M(S.image[X],!1,!0,l):T[X]=yt?S.image[X].image:S.image[X],T[X]=we(S,T[X]);const J=T[0],st=b(J)||s,ut=r.convert(S.format,S.encoding),lt=r.convert(S.type),bt=v(S.internalFormat,ut,lt,S.encoding),At=s&&S.isVideoTexture!==!0,Ut=rt.__currentVersion===void 0||nt===!0;let R=w(S,J,st);k(34067,S,st);let ot;if(ht){At&&Ut&&e.texStorage2D(34067,R,bt,J.width,J.height);for(let X=0;X<6;X++){ot=T[X].mipmaps;for(let pt=0;pt<ot.length;pt++){const dt=ot[pt];S.format!==on?ut!==null?At?e.compressedTexSubImage2D(34069+X,pt,0,0,dt.width,dt.height,ut,dt.data):e.compressedTexImage2D(34069+X,pt,bt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):At?e.texSubImage2D(34069+X,pt,0,0,dt.width,dt.height,ut,lt,dt.data):e.texImage2D(34069+X,pt,bt,dt.width,dt.height,0,ut,lt,dt.data)}}}else{ot=S.mipmaps,At&&Ut&&(ot.length>0&&R++,e.texStorage2D(34067,R,bt,T[0].width,T[0].height));for(let X=0;X<6;X++)if(yt){At?e.texSubImage2D(34069+X,0,0,0,T[X].width,T[X].height,ut,lt,T[X].data):e.texImage2D(34069+X,0,bt,T[X].width,T[X].height,0,ut,lt,T[X].data);for(let pt=0;pt<ot.length;pt++){const Dt=ot[pt].image[X].image;At?e.texSubImage2D(34069+X,pt+1,0,0,Dt.width,Dt.height,ut,lt,Dt.data):e.texImage2D(34069+X,pt+1,bt,Dt.width,Dt.height,0,ut,lt,Dt.data)}}else{At?e.texSubImage2D(34069+X,0,0,0,ut,lt,T[X]):e.texImage2D(34069+X,0,bt,ut,lt,T[X]);for(let pt=0;pt<ot.length;pt++){const dt=ot[pt];At?e.texSubImage2D(34069+X,pt+1,0,0,ut,lt,dt.image[X]):e.texImage2D(34069+X,pt+1,bt,ut,lt,dt.image[X])}}}A(S,st)&&L(34067),rt.__currentVersion=rt.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function it(C,S,q,nt,rt){const ht=r.convert(q.format,q.encoding),yt=r.convert(q.type),T=v(q.internalFormat,ht,yt,q.encoding);n.get(S).__hasExternalTextures||(rt===32879||rt===35866?e.texImage3D(rt,0,T,S.width,S.height,S.depth,0,ht,yt,null):e.texImage2D(rt,0,T,S.width,S.height,0,ht,yt,null)),e.bindFramebuffer(36160,C),It(S)?d.framebufferTexture2DMultisampleEXT(36160,nt,rt,n.get(q).__webglTexture,0,ee(S)):o.framebufferTexture2D(36160,nt,rt,n.get(q).__webglTexture,0),e.bindFramebuffer(36160,null)}function vt(C,S,q){if(o.bindRenderbuffer(36161,C),S.depthBuffer&&!S.stencilBuffer){let nt=33189;if(q||It(S)){const rt=S.depthTexture;rt&&rt.isDepthTexture&&(rt.type===si?nt=36012:rt.type===ri&&(nt=33190));const ht=ee(S);It(S)?d.renderbufferStorageMultisampleEXT(36161,ht,nt,S.width,S.height):o.renderbufferStorageMultisample(36161,ht,nt,S.width,S.height)}else o.renderbufferStorage(36161,nt,S.width,S.height);o.framebufferRenderbuffer(36160,36096,36161,C)}else if(S.depthBuffer&&S.stencilBuffer){const nt=ee(S);q&&It(S)===!1?o.renderbufferStorageMultisample(36161,nt,35056,S.width,S.height):It(S)?d.renderbufferStorageMultisampleEXT(36161,nt,35056,S.width,S.height):o.renderbufferStorage(36161,34041,S.width,S.height),o.framebufferRenderbuffer(36160,33306,36161,C)}else{const nt=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let rt=0;rt<nt.length;rt++){const ht=nt[rt],yt=r.convert(ht.format,ht.encoding),T=r.convert(ht.type),J=v(ht.internalFormat,yt,T,ht.encoding),st=ee(S);q&&It(S)===!1?o.renderbufferStorageMultisample(36161,st,J,S.width,S.height):It(S)?d.renderbufferStorageMultisampleEXT(36161,st,J,S.width,S.height):o.renderbufferStorage(36161,J,S.width,S.height)}}o.bindRenderbuffer(36161,null)}function xt(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),B(S.depthTexture,0);const nt=n.get(S.depthTexture).__webglTexture,rt=ee(S);if(S.depthTexture.format===li)It(S)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,nt,0,rt):o.framebufferTexture2D(36160,36096,3553,nt,0);else if(S.depthTexture.format===er)It(S)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,nt,0,rt):o.framebufferTexture2D(36160,33306,3553,nt,0);else throw new Error("Unknown depthTexture format")}function gt(C){const S=n.get(C),q=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");xt(S.__webglFramebuffer,C)}else if(q){S.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)e.bindFramebuffer(36160,S.__webglFramebuffer[nt]),S.__webglDepthbuffer[nt]=o.createRenderbuffer(),vt(S.__webglDepthbuffer[nt],C,!1)}else e.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=o.createRenderbuffer(),vt(S.__webglDepthbuffer,C,!1);e.bindFramebuffer(36160,null)}function Vt(C,S,q){const nt=n.get(C);S!==void 0&&it(nt.__webglFramebuffer,C,C.texture,36064,3553),q!==void 0&&gt(C)}function te(C){const S=C.texture,q=n.get(C),nt=n.get(S);C.addEventListener("dispose",tt),C.isWebGLMultipleRenderTargets!==!0&&(nt.__webglTexture===void 0&&(nt.__webglTexture=o.createTexture()),nt.__version=S.version,a.memory.textures++);const rt=C.isWebGLCubeRenderTarget===!0,ht=C.isWebGLMultipleRenderTargets===!0,yt=b(C)||s;if(rt){q.__webglFramebuffer=[];for(let T=0;T<6;T++)q.__webglFramebuffer[T]=o.createFramebuffer()}else{if(q.__webglFramebuffer=o.createFramebuffer(),ht)if(i.drawBuffers){const T=C.texture;for(let J=0,st=T.length;J<st;J++){const ut=n.get(T[J]);ut.__webglTexture===void 0&&(ut.__webglTexture=o.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&C.samples>0&&It(C)===!1){const T=ht?S:[S];q.__webglMultisampledFramebuffer=o.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,q.__webglMultisampledFramebuffer);for(let J=0;J<T.length;J++){const st=T[J];q.__webglColorRenderbuffer[J]=o.createRenderbuffer(),o.bindRenderbuffer(36161,q.__webglColorRenderbuffer[J]);const ut=r.convert(st.format,st.encoding),lt=r.convert(st.type),bt=v(st.internalFormat,ut,lt,st.encoding),At=ee(C);o.renderbufferStorageMultisample(36161,At,bt,C.width,C.height),o.framebufferRenderbuffer(36160,36064+J,36161,q.__webglColorRenderbuffer[J])}o.bindRenderbuffer(36161,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=o.createRenderbuffer(),vt(q.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(36160,null)}}if(rt){e.bindTexture(34067,nt.__webglTexture),k(34067,S,yt);for(let T=0;T<6;T++)it(q.__webglFramebuffer[T],C,S,36064,34069+T);A(S,yt)&&L(34067),e.unbindTexture()}else if(ht){const T=C.texture;for(let J=0,st=T.length;J<st;J++){const ut=T[J],lt=n.get(ut);e.bindTexture(3553,lt.__webglTexture),k(3553,ut,yt),it(q.__webglFramebuffer,C,ut,36064+J,3553),A(ut,yt)&&L(3553)}e.unbindTexture()}else{let T=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(s?T=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(T,nt.__webglTexture),k(T,S,yt),it(q.__webglFramebuffer,C,S,36064,T),A(S,yt)&&L(T),e.unbindTexture()}C.depthBuffer&&gt(C)}function Gt(C){const S=b(C)||s,q=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let nt=0,rt=q.length;nt<rt;nt++){const ht=q[nt];if(A(ht,S)){const yt=C.isWebGLCubeRenderTarget?34067:3553,T=n.get(ht).__webglTexture;e.bindTexture(yt,T),L(yt),e.unbindTexture()}}}function Se(C){if(s&&C.samples>0&&It(C)===!1){const S=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],q=C.width,nt=C.height;let rt=16384;const ht=[],yt=C.stencilBuffer?33306:36096,T=n.get(C),J=C.isWebGLMultipleRenderTargets===!0;if(J)for(let st=0;st<S.length;st++)e.bindFramebuffer(36160,T.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+st,36161,null),e.bindFramebuffer(36160,T.__webglFramebuffer),o.framebufferTexture2D(36009,36064+st,3553,null,0);e.bindFramebuffer(36008,T.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,T.__webglFramebuffer);for(let st=0;st<S.length;st++){ht.push(36064+st),C.depthBuffer&&ht.push(yt);const ut=T.__ignoreDepthValues!==void 0?T.__ignoreDepthValues:!1;if(ut===!1&&(C.depthBuffer&&(rt|=256),C.stencilBuffer&&(rt|=1024)),J&&o.framebufferRenderbuffer(36008,36064,36161,T.__webglColorRenderbuffer[st]),ut===!0&&(o.invalidateFramebuffer(36008,[yt]),o.invalidateFramebuffer(36009,[yt])),J){const lt=n.get(S[st]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,lt,0)}o.blitFramebuffer(0,0,q,nt,0,0,q,nt,rt,9728),m&&o.invalidateFramebuffer(36008,ht)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),J)for(let st=0;st<S.length;st++){e.bindFramebuffer(36160,T.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+st,36161,T.__webglColorRenderbuffer[st]);const ut=n.get(S[st]).__webglTexture;e.bindFramebuffer(36160,T.__webglFramebuffer),o.framebufferTexture2D(36009,36064+st,3553,ut,0)}e.bindFramebuffer(36009,T.__webglMultisampledFramebuffer)}}function ee(C){return Math.min(u,C.samples)}function It(C){const S=n.get(C);return s&&C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Fe(C){const S=a.render.frame;_.get(C)!==S&&(_.set(C,S),C.update())}function we(C,S){const q=C.encoding,nt=C.format,rt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Aa||q!==mi&&(q===Xt?s===!1?t.has("EXT_sRGB")===!0&&nt===on?(C.format=Aa,C.minFilter=Ve,C.generateMipmaps=!1):S=mc.sRGBToLinear(S):(nt!==on||rt!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",q)),S}this.allocateTextureUnit=G,this.resetTextureUnits=Z,this.setTexture2D=B,this.setTexture2DArray=et,this.setTexture3D=Q,this.setTextureCube=P,this.rebindTextures=Vt,this.setupRenderTarget=te,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=it,this.useMultisampledRTT=It}function Eg(o,t,e){const n=e.isWebGL2;function i(r,a=null){let s;if(r===pi)return 5121;if(r===vu)return 32819;if(r===yu)return 32820;if(r===gu)return 5120;if(r===_u)return 5122;if(r===uc)return 5123;if(r===xu)return 5124;if(r===ri)return 5125;if(r===si)return 5126;if(r===Er)return n?5131:(s=t.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(r===bu)return 6406;if(r===on)return 6408;if(r===Su)return 6409;if(r===wu)return 6410;if(r===li)return 6402;if(r===er)return 34041;if(r===Tu)return 6403;if(r===Mu)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Aa)return s=t.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(r===Eu)return 36244;if(r===Au)return 33319;if(r===Cu)return 33320;if(r===Lu)return 36249;if(r===Rs||r===Is||r===Os||r===Fs)if(a===Xt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===Rs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Is)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Fs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===Rs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Is)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Os)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Fs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ao||r===Co||r===Lo||r===Po)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===Ao)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Co)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Lo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Po)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Pu)return s=t.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Do||r===Ro)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(r===Do)return a===Xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===Ro)return a===Xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Io||r===Oo||r===Fo||r===No||r===zo||r===Uo||r===ko||r===Bo||r===Vo||r===Go||r===Ho||r===Wo||r===Xo||r===qo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(r===Io)return a===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Oo)return a===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Fo)return a===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===No)return a===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===zo)return a===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Uo)return a===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ko)return a===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Bo)return a===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Vo)return a===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Go)return a===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ho)return a===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Wo)return a===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Xo)return a===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===qo)return a===Xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Yo)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(r===Yo)return a===Xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===$i?n?34042:(s=t.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):o[r]!==void 0?o[r]:null}return{convert:i}}class Ag extends Pe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Wi extends pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cg={type:"move"};class ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const s=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const f of t.hand.values()){const p=e.getJointPose(f,n);if(l.joints[f.jointName]===void 0){const y=new Wi;y.matrixAutoUpdate=!1,y.visible=!1,l.joints[f.jointName]=y,l.add(y)}const g=l.joints[f.jointName];p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=p.radius),g.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,_=.005;l.inputState.pinching&&d>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));s!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Cg)))}return s!==null&&(s.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}}class Lg extends $e{constructor(t,e,n,i,r,a,s,c,l,h){if(h=h!==void 0?h:li,h!==li&&h!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===li&&(n=ri),n===void 0&&h===er&&(n=$i),super(null,i,r,a,s,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=s!==void 0?s:_e,this.minFilter=c!==void 0?c:_e,this.flipY=!1,this.generateMipmaps=!1}}class Pg extends vi{constructor(t,e){super();const n=this;let i=null,r=1,a=null,s="local-floor",c=null,l=null,h=null,u=null,d=null,m=null;const _=e.getContextAttributes();let f=null,p=null;const g=[],y=[],M=new Pe;M.layers.enable(1),M.viewport=new kt;const b=new Pe;b.layers.enable(2),b.viewport=new kt;const x=[M,b],A=new Ag;A.layers.enable(1),A.layers.enable(2);let L=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let B=g[F];return B===void 0&&(B=new ca,g[F]=B),B.getTargetRaySpace()},this.getControllerGrip=function(F){let B=g[F];return B===void 0&&(B=new ca,g[F]=B),B.getGripSpace()},this.getHand=function(F){let B=g[F];return B===void 0&&(B=new ca,g[F]=B),B.getHandSpace()};function w(F){const B=y.indexOf(F.inputSource);if(B===-1)return;const et=g[B];et!==void 0&&et.dispatchEvent({type:F.type,data:F.inputSource})}function D(){i.removeEventListener("select",w),i.removeEventListener("selectstart",w),i.removeEventListener("selectend",w),i.removeEventListener("squeeze",w),i.removeEventListener("squeezestart",w),i.removeEventListener("squeezeend",w),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",W);for(let F=0;F<g.length;F++){const B=y[F];B!==null&&(y[F]=null,g[F].disconnect(B))}L=null,v=null,t.setRenderTarget(f),d=null,u=null,h=null,i=null,p=null,G.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){s=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(F){if(i=F,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",w),i.addEventListener("selectstart",w),i.addEventListener("selectend",w),i.addEventListener("squeeze",w),i.addEventListener("squeezestart",w),i.addEventListener("squeezeend",w),i.addEventListener("end",D),i.addEventListener("inputsourceschange",W),_.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const B={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,B),i.updateRenderState({baseLayer:d}),p=new gi(d.framebufferWidth,d.framebufferHeight,{format:on,type:pi,encoding:t.outputEncoding,stencilBuffer:_.stencil})}else{let B=null,et=null,Q=null;_.depth&&(Q=_.stencil?35056:33190,B=_.stencil?er:li,et=_.stencil?$i:ri);const P={colorFormat:32856,depthFormat:Q,scaleFactor:r};h=new XRWebGLBinding(i,e),u=h.createProjectionLayer(P),i.updateRenderState({layers:[u]}),p=new gi(u.textureWidth,u.textureHeight,{format:on,type:pi,depthTexture:new Lg(u.textureWidth,u.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:_.stencil,encoding:t.outputEncoding,samples:_.antialias?4:0});const V=t.properties.get(p);V.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),c=null,a=await i.requestReferenceSpace(s),G.setContext(i),G.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function W(F){for(let B=0;B<F.removed.length;B++){const et=F.removed[B],Q=y.indexOf(et);Q>=0&&(y[Q]=null,g[Q].dispatchEvent({type:"disconnected",data:et}))}for(let B=0;B<F.added.length;B++){const et=F.added[B];let Q=y.indexOf(et);if(Q===-1){for(let V=0;V<g.length;V++)if(V>=y.length){y.push(et),Q=V;break}else if(y[V]===null){y[V]=et,Q=V;break}if(Q===-1)break}const P=g[Q];P&&P.dispatchEvent({type:"connected",data:et})}}const tt=new O,z=new O;function I(F,B,et){tt.setFromMatrixPosition(B.matrixWorld),z.setFromMatrixPosition(et.matrixWorld);const Q=tt.distanceTo(z),P=B.projectionMatrix.elements,V=et.projectionMatrix.elements,K=P[14]/(P[10]-1),k=P[14]/(P[10]+1),mt=(P[9]+1)/P[5],ct=(P[9]-1)/P[5],ft=(P[8]-1)/P[0],it=(V[8]+1)/V[0],vt=K*ft,xt=K*it,gt=Q/(-ft+it),Vt=gt*-ft;B.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Vt),F.translateZ(gt),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const te=K+gt,Gt=k+gt,Se=vt-Vt,ee=xt+(Q-Vt),It=mt*k/Gt*te,Fe=ct*k/Gt*te;F.projectionMatrix.makePerspective(Se,ee,It,Fe,te,Gt)}function H(F,B){B===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(B.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(i===null)return;A.near=b.near=M.near=F.near,A.far=b.far=M.far=F.far,(L!==A.near||v!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),L=A.near,v=A.far);const B=F.parent,et=A.cameras;H(A,B);for(let P=0;P<et.length;P++)H(et[P],B);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),F.matrix.copy(A.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale);const Q=F.children;for(let P=0,V=Q.length;P<V;P++)Q[P].updateMatrixWorld(!0);et.length===2?I(A,M,b):A.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(F){u!==null&&(u.fixedFoveation=F),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=F)};let j=null;function Z(F,B){if(l=B.getViewerPose(c||a),m=B,l!==null){const et=l.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let Q=!1;et.length!==A.cameras.length&&(A.cameras.length=0,Q=!0);for(let P=0;P<et.length;P++){const V=et[P];let K=null;if(d!==null)K=d.getViewport(V);else{const mt=h.getViewSubImage(u,V);K=mt.viewport,P===0&&(t.setRenderTargetTextures(p,mt.colorTexture,u.ignoreDepthValues?void 0:mt.depthStencilTexture),t.setRenderTarget(p))}let k=x[P];k===void 0&&(k=new Pe,k.layers.enable(P),k.viewport=new kt,x[P]=k),k.matrix.fromArray(V.transform.matrix),k.projectionMatrix.fromArray(V.projectionMatrix),k.viewport.set(K.x,K.y,K.width,K.height),P===0&&A.matrix.copy(k.matrix),Q===!0&&A.cameras.push(k)}}for(let et=0;et<g.length;et++){const Q=y[et],P=g[et];Q!==null&&P!==void 0&&P.update(Q,B,c||a)}j&&j(F,B),m=null}const G=new wc;G.setAnimationLoop(Z),this.setAnimationLoop=function(F){j=F},this.dispose=function(){}}}function Dg(o,t){function e(f,p){f.fogColor.value.copy(p.color),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function n(f,p,g,y,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(f,p):p.isMeshToonMaterial?(i(f,p),h(f,p)):p.isMeshPhongMaterial?(i(f,p),l(f,p)):p.isMeshStandardMaterial?(i(f,p),u(f,p),p.isMeshPhysicalMaterial&&d(f,p,M)):p.isMeshMatcapMaterial?(i(f,p),m(f,p)):p.isMeshDepthMaterial?i(f,p):p.isMeshDistanceMaterial?(i(f,p),_(f,p)):p.isMeshNormalMaterial?i(f,p):p.isLineBasicMaterial?(r(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?s(f,p,g,y):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.bumpMap&&(f.bumpMap.value=p.bumpMap,f.bumpScale.value=p.bumpScale,p.side===qe&&(f.bumpScale.value*=-1)),p.displacementMap&&(f.displacementMap.value=p.displacementMap,f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap),p.normalMap&&(f.normalMap.value=p.normalMap,f.normalScale.value.copy(p.normalScale),p.side===qe&&f.normalScale.value.negate()),p.specularMap&&(f.specularMap.value=p.specularMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const g=t.get(p).envMap;if(g&&(f.envMap.value=g,f.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const b=o.physicallyCorrectLights!==!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*b}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity);let y;p.map?y=p.map:p.specularMap?y=p.specularMap:p.displacementMap?y=p.displacementMap:p.normalMap?y=p.normalMap:p.bumpMap?y=p.bumpMap:p.roughnessMap?y=p.roughnessMap:p.metalnessMap?y=p.metalnessMap:p.alphaMap?y=p.alphaMap:p.emissiveMap?y=p.emissiveMap:p.clearcoatMap?y=p.clearcoatMap:p.clearcoatNormalMap?y=p.clearcoatNormalMap:p.clearcoatRoughnessMap?y=p.clearcoatRoughnessMap:p.iridescenceMap?y=p.iridescenceMap:p.iridescenceThicknessMap?y=p.iridescenceThicknessMap:p.specularIntensityMap?y=p.specularIntensityMap:p.specularColorMap?y=p.specularColorMap:p.transmissionMap?y=p.transmissionMap:p.thicknessMap?y=p.thicknessMap:p.sheenColorMap?y=p.sheenColorMap:p.sheenRoughnessMap&&(y=p.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),f.uvTransform.value.copy(y.matrix));let M;p.aoMap?M=p.aoMap:p.lightMap&&(M=p.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),f.uv2Transform.value.copy(M.matrix))}function r(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function s(f,p,g,y){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*g,f.scale.value=y*.5,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let M;p.map?M=p.map:p.alphaMap&&(M=p.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),f.uvTransform.value.copy(M.matrix))}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let g;p.map?g=p.map:p.alphaMap&&(g=p.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),f.uvTransform.value.copy(g.matrix))}function l(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function h(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function u(f,p){f.roughness.value=p.roughness,f.metalness.value=p.metalness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap),t.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function d(f,p,g){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),f.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===qe&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=g.texture,f.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap)}function m(f,p){p.matcap&&(f.matcap.value=p.matcap)}function _(f,p){f.referencePosition.value.copy(p.referencePosition),f.nearDistance.value=p.nearDistance,f.farDistance.value=p.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function Rg(o,t,e,n){let i={},r={},a=[];const s=e.isWebGL2?o.getParameter(35375):0;function c(y,M){const b=M.program;n.uniformBlockBinding(y,b)}function l(y,M){let b=i[y.id];b===void 0&&(_(y),b=h(y),i[y.id]=b,y.addEventListener("dispose",p));const x=M.program;n.updateUBOMapping(y,x);const A=t.render.frame;r[y.id]!==A&&(d(y),r[y.id]=A)}function h(y){const M=u();y.__bindingPointIndex=M;const b=o.createBuffer(),x=y.__size,A=y.usage;return o.bindBuffer(35345,b),o.bufferData(35345,x,A),o.bindBuffer(35345,null),o.bindBufferBase(35345,M,b),b}function u(){for(let y=0;y<s;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const M=i[y.id],b=y.uniforms,x=y.__cache;o.bindBuffer(35345,M);for(let A=0,L=b.length;A<L;A++){const v=b[A];if(m(v,A,x)===!0){const w=v.value,D=v.__offset;typeof w=="number"?(v.__data[0]=w,o.bufferSubData(35345,D,v.__data)):(v.value.isMatrix3?(v.__data[0]=v.value.elements[0],v.__data[1]=v.value.elements[1],v.__data[2]=v.value.elements[2],v.__data[3]=v.value.elements[0],v.__data[4]=v.value.elements[3],v.__data[5]=v.value.elements[4],v.__data[6]=v.value.elements[5],v.__data[7]=v.value.elements[0],v.__data[8]=v.value.elements[6],v.__data[9]=v.value.elements[7],v.__data[10]=v.value.elements[8],v.__data[11]=v.value.elements[0]):w.toArray(v.__data),o.bufferSubData(35345,D,v.__data))}}o.bindBuffer(35345,null)}function m(y,M,b){const x=y.value;if(b[M]===void 0)return typeof x=="number"?b[M]=x:b[M]=x.clone(),!0;if(typeof x=="number"){if(b[M]!==x)return b[M]=x,!0}else{const A=b[M];if(A.equals(x)===!1)return A.copy(x),!0}return!1}function _(y){const M=y.uniforms;let b=0;const x=16;let A=0;for(let L=0,v=M.length;L<v;L++){const w=M[L],D=f(w);if(w.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=b,L>0){A=b%x;const W=x-A;A!==0&&W-D.boundary<0&&(b+=x-A,w.__offset=b)}b+=D.storage}return A=b%x,A>0&&(b+=x-A),y.__size=b,y.__cache={},this}function f(y){const M=y.value,b={boundary:0,storage:0};return typeof M=="number"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),b}function p(y){const M=y.target;M.removeEventListener("dispose",p);const b=a.indexOf(M.__bindingPointIndex);a.splice(b,1),o.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function g(){for(const y in i)o.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:c,update:l,dispose:g}}function Ig(){const o=Ar("canvas");return o.style.display="block",o}function Lc(o={}){this.isWebGLRenderer=!0;const t=o.canvas!==void 0?o.canvas:Ig(),e=o.context!==void 0?o.context:null,n=o.depth!==void 0?o.depth:!0,i=o.stencil!==void 0?o.stencil:!0,r=o.antialias!==void 0?o.antialias:!1,a=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,s=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,c=o.powerPreference!==void 0?o.powerPreference:"default",l=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let h;e!==null?h=e.getContextAttributes().alpha:h=o.alpha!==void 0?o.alpha:!1;let u=null,d=null;const m=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=mi,this.physicallyCorrectLights=!1,this.toneMapping=wn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const f=this;let p=!1,g=0,y=0,M=null,b=-1,x=null;const A=new kt,L=new kt;let v=null,w=t.width,D=t.height,W=1,tt=null,z=null;const I=new kt(0,0,w,D),H=new kt(0,0,w,D);let j=!1;const Z=new Ka;let G=!1,F=!1,B=null;const et=new Qt,Q=new wt,P=new O,V={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function K(){return M===null?W:1}let k=e;function mt(E,U){for(let Y=0;Y<E.length;Y++){const N=E[Y],$=t.getContext(N,U);if($!==null)return $}return null}try{const E={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:s,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ya}`),t.addEventListener("webglcontextlost",bt,!1),t.addEventListener("webglcontextrestored",At,!1),t.addEventListener("webglcontextcreationerror",Ut,!1),k===null){const U=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&U.shift(),k=mt(U,E),k===null)throw mt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ct,ft,it,vt,xt,gt,Vt,te,Gt,Se,ee,It,Fe,we,C,S,q,nt,rt,ht,yt,T,J,st;function ut(){ct=new Wp(k),ft=new zp(k,ct,o),ct.init(ft),T=new Eg(k,ct,ft),it=new wg(k,ct,ft),vt=new Yp,xt=new hg,gt=new Tg(k,ct,it,xt,ft,T,vt),Vt=new kp(f),te=new Hp(f),Gt=new nd(k,ft),J=new Fp(k,ct,Gt,ft),Se=new Xp(k,Gt,vt,J),ee=new Kp(k,Se,Gt,vt),rt=new Zp(k,ft,gt),S=new Up(xt),It=new cg(f,Vt,te,ct,ft,J,S),Fe=new Dg(f,xt),we=new dg,C=new xg(ct,ft),nt=new Op(f,Vt,it,ee,h,a),q=new Sg(f,ee,ft),st=new Rg(k,vt,ft,it),ht=new Np(k,ct,vt,ft),yt=new qp(k,ct,vt,ft),vt.programs=It.programs,f.capabilities=ft,f.extensions=ct,f.properties=xt,f.renderLists=we,f.shadowMap=q,f.state=it,f.info=vt}ut();const lt=new Pg(f,k);this.xr=lt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const E=ct.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ct.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize(w,D,!1))},this.getSize=function(E){return E.set(w,D)},this.setSize=function(E,U,Y){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=E,D=U,t.width=Math.floor(E*W),t.height=Math.floor(U*W),Y!==!1&&(t.style.width=E+"px",t.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(w*W,D*W).floor()},this.setDrawingBufferSize=function(E,U,Y){w=E,D=U,W=Y,t.width=Math.floor(E*Y),t.height=Math.floor(U*Y),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(I)},this.setViewport=function(E,U,Y,N){E.isVector4?I.set(E.x,E.y,E.z,E.w):I.set(E,U,Y,N),it.viewport(A.copy(I).multiplyScalar(W).floor())},this.getScissor=function(E){return E.copy(H)},this.setScissor=function(E,U,Y,N){E.isVector4?H.set(E.x,E.y,E.z,E.w):H.set(E,U,Y,N),it.scissor(L.copy(H).multiplyScalar(W).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(E){it.setScissorTest(j=E)},this.setOpaqueSort=function(E){tt=E},this.setTransparentSort=function(E){z=E},this.getClearColor=function(E){return E.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor.apply(nt,arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha.apply(nt,arguments)},this.clear=function(E=!0,U=!0,Y=!0){let N=0;E&&(N|=16384),U&&(N|=256),Y&&(N|=1024),k.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",At,!1),t.removeEventListener("webglcontextcreationerror",Ut,!1),we.dispose(),C.dispose(),xt.dispose(),Vt.dispose(),te.dispose(),ee.dispose(),J.dispose(),st.dispose(),It.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",Dt),lt.removeEventListener("sessionend",re),B&&(B.dispose(),B=null),$t.stop()};function bt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const E=vt.autoReset,U=q.enabled,Y=q.autoUpdate,N=q.needsUpdate,$=q.type;ut(),vt.autoReset=E,q.enabled=U,q.autoUpdate=Y,q.needsUpdate=N,q.type=$}function Ut(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function R(E){const U=E.target;U.removeEventListener("dispose",R),ot(U)}function ot(E){X(E),xt.remove(E)}function X(E){const U=xt.get(E).programs;U!==void 0&&(U.forEach(function(Y){It.releaseProgram(Y)}),E.isShaderMaterial&&It.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,Y,N,$,_t){U===null&&(U=V);const Mt=$.isMesh&&$.matrixWorld.determinant()<0,Tt=Rh(E,U,Y,N,$);it.setMaterial(N,Mt);let St=Y.index;const Ot=Y.attributes.position;if(St===null){if(Ot===void 0||Ot.count===0)return}else if(St.count===0)return;let Lt=1;N.wireframe===!0&&(St=Se.getWireframeAttribute(Y),Lt=2),J.setup($,N,Tt,Y,St);let Pt,Wt=ht;St!==null&&(Pt=Gt.get(St),Wt=yt,Wt.setIndex(Pt));const Yn=St!==null?St.count:Ot.count,Mi=Y.drawRange.start*Lt,Si=Y.drawRange.count*Lt,nn=_t!==null?_t.start*Lt:0,Rt=_t!==null?_t.count*Lt:1/0,wi=Math.max(Mi,nn),Zt=Math.min(Yn,Mi+Si,nn+Rt)-1,ze=Math.max(0,Zt-wi+1);if(ze!==0){if($.isMesh)N.wireframe===!0?(it.setLineWidth(N.wireframeLinewidth*K()),Wt.setMode(1)):Wt.setMode(4);else if($.isLine){let Ln=N.linewidth;Ln===void 0&&(Ln=1),it.setLineWidth(Ln*K()),$.isLineSegments?Wt.setMode(1):$.isLineLoop?Wt.setMode(2):Wt.setMode(3)}else $.isPoints?Wt.setMode(0):$.isSprite&&Wt.setMode(4);if($.isInstancedMesh)Wt.renderInstances(wi,ze,$.count);else if(Y.isInstancedBufferGeometry){const Ln=Math.min(Y.instanceCount,Y._maxInstanceCount);Wt.renderInstances(wi,ze,Ln)}else Wt.render(wi,ze)}},this.compile=function(E,U){function Y(N,$,_t){N.transparent===!0&&N.side===zn?(N.side=qe,N.needsUpdate=!0,Br(N,$,_t),N.side=Ji,N.needsUpdate=!0,Br(N,$,_t),N.side=zn):Br(N,$,_t)}d=C.get(E),d.init(),_.push(d),E.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights(f.physicallyCorrectLights),E.traverse(function(N){const $=N.material;if($)if(Array.isArray($))for(let _t=0;_t<$.length;_t++){const Mt=$[_t];Y(Mt,E,N)}else Y($,E,N)}),_.pop(),d=null};let pt=null;function dt(E){pt&&pt(E)}function Dt(){$t.stop()}function re(){$t.start()}const $t=new wc;$t.setAnimationLoop(dt),typeof self!="undefined"&&$t.setContext(self),this.setAnimationLoop=function(E){pt=E,lt.setAnimationLoop(E),E===null?$t.stop():$t.start()},lt.addEventListener("sessionstart",Dt),lt.addEventListener("sessionend",re),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(U),U=lt.getCamera()),E.isScene===!0&&E.onBeforeRender(f,E,U,M),d=C.get(E,_.length),d.init(),_.push(d),et.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Z.setFromProjectionMatrix(et),F=this.localClippingEnabled,G=S.init(this.clippingPlanes,F,U),u=we.get(E,m.length),u.init(),m.push(u),Cn(E,U,0,f.sortObjects),u.finish(),f.sortObjects===!0&&u.sort(tt,z),G===!0&&S.beginShadows();const Y=d.state.shadowsArray;if(q.render(Y,E,U),G===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),nt.render(u,E),d.setupLights(f.physicallyCorrectLights),U.isArrayCamera){const N=U.cameras;for(let $=0,_t=N.length;$<_t;$++){const Mt=N[$];Ht(u,E,Mt,Mt.viewport)}}else Ht(u,E,U);M!==null&&(gt.updateMultisampleRenderTarget(M),gt.updateRenderTargetMipmap(M)),E.isScene===!0&&E.onAfterRender(f,E,U),J.resetDefaultState(),b=-1,x=null,_.pop(),_.length>0?d=_[_.length-1]:d=null,m.pop(),m.length>0?u=m[m.length-1]:u=null};function Cn(E,U,Y,N){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Z.intersectsSprite(E)){N&&P.setFromMatrixPosition(E.matrixWorld).applyMatrix4(et);const Mt=ee.update(E),Tt=E.material;Tt.visible&&u.push(E,Mt,Tt,Y,P.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==vt.render.frame&&(E.skeleton.update(),E.skeleton.frame=vt.render.frame),!E.frustumCulled||Z.intersectsObject(E))){N&&P.setFromMatrixPosition(E.matrixWorld).applyMatrix4(et);const Mt=ee.update(E),Tt=E.material;if(Array.isArray(Tt)){const St=Mt.groups;for(let Ot=0,Lt=St.length;Ot<Lt;Ot++){const Pt=St[Ot],Wt=Tt[Pt.materialIndex];Wt&&Wt.visible&&u.push(E,Mt,Wt,Y,P.z,Pt)}}else Tt.visible&&u.push(E,Mt,Tt,Y,P.z,null)}}const _t=E.children;for(let Mt=0,Tt=_t.length;Mt<Tt;Mt++)Cn(_t[Mt],U,Y,N)}function Ht(E,U,Y,N){const $=E.opaque,_t=E.transmissive,Mt=E.transparent;d.setupLightsView(Y),_t.length>0&&fn($,U,Y),N&&it.viewport(A.copy(N)),$.length>0&&Ne($,U,Y),_t.length>0&&Ne(_t,U,Y),Mt.length>0&&Ne(Mt,U,Y),it.buffers.depth.setTest(!0),it.buffers.depth.setMask(!0),it.buffers.color.setMask(!0),it.setPolygonOffset(!1)}function fn(E,U,Y){const N=ft.isWebGL2;B===null&&(B=new gi(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")?Er:pi,minFilter:Ss,samples:N&&r===!0?4:0})),f.getDrawingBufferSize(Q),N?B.setSize(Q.x,Q.y):B.setSize(Ca(Q.x),Ca(Q.y));const $=f.getRenderTarget();f.setRenderTarget(B),f.clear();const _t=f.toneMapping;f.toneMapping=wn,Ne(E,U,Y),f.toneMapping=_t,gt.updateMultisampleRenderTarget(B),gt.updateRenderTargetMipmap(B),f.setRenderTarget($)}function Ne(E,U,Y){const N=U.isScene===!0?U.overrideMaterial:null;for(let $=0,_t=E.length;$<_t;$++){const Mt=E[$],Tt=Mt.object,St=Mt.geometry,Ot=N===null?Mt.material:N,Lt=Mt.group;Tt.layers.test(Y.layers)&&Dh(Tt,U,Y,St,Ot,Lt)}}function Dh(E,U,Y,N,$,_t){E.onBeforeRender(f,U,Y,N,$,_t),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),$.onBeforeRender(f,U,Y,N,E,_t),$.transparent===!0&&$.side===zn?($.side=qe,$.needsUpdate=!0,f.renderBufferDirect(Y,U,N,$,E,_t),$.side=Ji,$.needsUpdate=!0,f.renderBufferDirect(Y,U,N,$,E,_t),$.side=zn):f.renderBufferDirect(Y,U,N,$,E,_t),E.onAfterRender(f,U,Y,N,$,_t)}function Br(E,U,Y){U.isScene!==!0&&(U=V);const N=xt.get(E),$=d.state.lights,_t=d.state.shadowsArray,Mt=$.state.version,Tt=It.getParameters(E,$.state,_t,U,Y),St=It.getProgramCacheKey(Tt);let Ot=N.programs;N.environment=E.isMeshStandardMaterial?U.environment:null,N.fog=U.fog,N.envMap=(E.isMeshStandardMaterial?te:Vt).get(E.envMap||N.environment),Ot===void 0&&(E.addEventListener("dispose",R),Ot=new Map,N.programs=Ot);let Lt=Ot.get(St);if(Lt!==void 0){if(N.currentProgram===Lt&&N.lightsStateVersion===Mt)return _o(E,Tt),Lt}else Tt.uniforms=It.getUniforms(E),E.onBuild(Y,Tt,f),E.onBeforeCompile(Tt,f),Lt=It.acquireProgram(Tt,St),Ot.set(St,Lt),N.uniforms=Tt.uniforms;const Pt=N.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pt.clippingPlanes=S.uniform),_o(E,Tt),N.needsLights=Oh(E),N.lightsStateVersion=Mt,N.needsLights&&(Pt.ambientLightColor.value=$.state.ambient,Pt.lightProbe.value=$.state.probe,Pt.directionalLights.value=$.state.directional,Pt.directionalLightShadows.value=$.state.directionalShadow,Pt.spotLights.value=$.state.spot,Pt.spotLightShadows.value=$.state.spotShadow,Pt.rectAreaLights.value=$.state.rectArea,Pt.ltc_1.value=$.state.rectAreaLTC1,Pt.ltc_2.value=$.state.rectAreaLTC2,Pt.pointLights.value=$.state.point,Pt.pointLightShadows.value=$.state.pointShadow,Pt.hemisphereLights.value=$.state.hemi,Pt.directionalShadowMap.value=$.state.directionalShadowMap,Pt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Pt.spotShadowMap.value=$.state.spotShadowMap,Pt.spotLightMatrix.value=$.state.spotLightMatrix,Pt.spotLightMap.value=$.state.spotLightMap,Pt.pointShadowMap.value=$.state.pointShadowMap,Pt.pointShadowMatrix.value=$.state.pointShadowMatrix);const Wt=Lt.getUniforms(),Yn=hs.seqWithValue(Wt.seq,Pt);return N.currentProgram=Lt,N.uniformsList=Yn,Lt}function _o(E,U){const Y=xt.get(E);Y.outputEncoding=U.outputEncoding,Y.instancing=U.instancing,Y.skinning=U.skinning,Y.morphTargets=U.morphTargets,Y.morphNormals=U.morphNormals,Y.morphColors=U.morphColors,Y.morphTargetsCount=U.morphTargetsCount,Y.numClippingPlanes=U.numClippingPlanes,Y.numIntersection=U.numClipIntersection,Y.vertexAlphas=U.vertexAlphas,Y.vertexTangents=U.vertexTangents,Y.toneMapping=U.toneMapping}function Rh(E,U,Y,N,$){U.isScene!==!0&&(U=V),gt.resetTextureUnits();const _t=U.fog,Mt=N.isMeshStandardMaterial?U.environment:null,Tt=M===null?f.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:mi,St=(N.isMeshStandardMaterial?te:Vt).get(N.envMap||Mt),Ot=N.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Lt=!!N.normalMap&&!!Y.attributes.tangent,Pt=!!Y.morphAttributes.position,Wt=!!Y.morphAttributes.normal,Yn=!!Y.morphAttributes.color,Mi=N.toneMapped?f.toneMapping:wn,Si=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,nn=Si!==void 0?Si.length:0,Rt=xt.get(N),wi=d.state.lights;if(G===!0&&(F===!0||E!==x)){const Te=E===x&&N.id===b;S.setState(N,E,Te)}let Zt=!1;N.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==wi.state.version||Rt.outputEncoding!==Tt||$.isInstancedMesh&&Rt.instancing===!1||!$.isInstancedMesh&&Rt.instancing===!0||$.isSkinnedMesh&&Rt.skinning===!1||!$.isSkinnedMesh&&Rt.skinning===!0||Rt.envMap!==St||N.fog===!0&&Rt.fog!==_t||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==S.numPlanes||Rt.numIntersection!==S.numIntersection)||Rt.vertexAlphas!==Ot||Rt.vertexTangents!==Lt||Rt.morphTargets!==Pt||Rt.morphNormals!==Wt||Rt.morphColors!==Yn||Rt.toneMapping!==Mi||ft.isWebGL2===!0&&Rt.morphTargetsCount!==nn)&&(Zt=!0):(Zt=!0,Rt.__version=N.version);let ze=Rt.currentProgram;Zt===!0&&(ze=Br(N,U,$));let Ln=!1,dr=!1,Ls=!1;const fe=ze.getUniforms(),$n=Rt.uniforms;if(it.useProgram(ze.program)&&(Ln=!0,dr=!0,Ls=!0),N.id!==b&&(b=N.id,dr=!0),Ln||x!==E){if(fe.setValue(k,"projectionMatrix",E.projectionMatrix),ft.logarithmicDepthBuffer&&fe.setValue(k,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),x!==E&&(x=E,dr=!0,Ls=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const Te=fe.map.cameraPosition;Te!==void 0&&Te.setValue(k,P.setFromMatrixPosition(E.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&fe.setValue(k,"isOrthographic",E.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||$.isSkinnedMesh)&&fe.setValue(k,"viewMatrix",E.matrixWorldInverse)}if($.isSkinnedMesh){fe.setOptional(k,$,"bindMatrix"),fe.setOptional(k,$,"bindMatrixInverse");const Te=$.skeleton;Te&&(ft.floatVertexTextures?(Te.boneTexture===null&&Te.computeBoneTexture(),fe.setValue(k,"boneTexture",Te.boneTexture,gt),fe.setValue(k,"boneTextureSize",Te.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ps=Y.morphAttributes;if((Ps.position!==void 0||Ps.normal!==void 0||Ps.color!==void 0&&ft.isWebGL2===!0)&&rt.update($,Y,N,ze),(dr||Rt.receiveShadow!==$.receiveShadow)&&(Rt.receiveShadow=$.receiveShadow,fe.setValue(k,"receiveShadow",$.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&($n.envMap.value=St,$n.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),dr&&(fe.setValue(k,"toneMappingExposure",f.toneMappingExposure),Rt.needsLights&&Ih($n,Ls),_t&&N.fog===!0&&Fe.refreshFogUniforms($n,_t),Fe.refreshMaterialUniforms($n,N,W,D,B),hs.upload(k,Rt.uniformsList,$n,gt)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(hs.upload(k,Rt.uniformsList,$n,gt),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&fe.setValue(k,"center",$.center),fe.setValue(k,"modelViewMatrix",$.modelViewMatrix),fe.setValue(k,"normalMatrix",$.normalMatrix),fe.setValue(k,"modelMatrix",$.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Te=N.uniformsGroups;for(let Ds=0,Fh=Te.length;Ds<Fh;Ds++)if(ft.isWebGL2){const xo=Te[Ds];st.update(xo,ze),st.bind(xo,ze)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ze}function Ih(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Oh(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(E,U,Y){xt.get(E.texture).__webglTexture=U,xt.get(E.depthTexture).__webglTexture=Y;const N=xt.get(E);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=Y===void 0,N.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,U){const Y=xt.get(E);Y.__webglFramebuffer=U,Y.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,Y=0){M=E,g=U,y=Y;let N=!0;if(E){const St=xt.get(E);St.__useDefaultFramebuffer!==void 0?(it.bindFramebuffer(36160,null),N=!1):St.__webglFramebuffer===void 0?gt.setupRenderTarget(E):St.__hasExternalTextures&&gt.rebindTextures(E,xt.get(E.texture).__webglTexture,xt.get(E.depthTexture).__webglTexture)}let $=null,_t=!1,Mt=!1;if(E){const St=E.texture;(St.isData3DTexture||St.isDataArrayTexture)&&(Mt=!0);const Ot=xt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?($=Ot[U],_t=!0):ft.isWebGL2&&E.samples>0&&gt.useMultisampledRTT(E)===!1?$=xt.get(E).__webglMultisampledFramebuffer:$=Ot,A.copy(E.viewport),L.copy(E.scissor),v=E.scissorTest}else A.copy(I).multiplyScalar(W).floor(),L.copy(H).multiplyScalar(W).floor(),v=j;if(it.bindFramebuffer(36160,$)&&ft.drawBuffers&&N&&it.drawBuffers(E,$),it.viewport(A),it.scissor(L),it.setScissorTest(v),_t){const St=xt.get(E.texture);k.framebufferTexture2D(36160,36064,34069+U,St.__webglTexture,Y)}else if(Mt){const St=xt.get(E.texture),Ot=U||0;k.framebufferTextureLayer(36160,36064,St.__webglTexture,Y||0,Ot)}b=-1},this.readRenderTargetPixels=function(E,U,Y,N,$,_t,Mt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=xt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Mt!==void 0&&(Tt=Tt[Mt]),Tt){it.bindFramebuffer(36160,Tt);try{const St=E.texture,Ot=St.format,Lt=St.type;if(Ot!==on&&T.convert(Ot)!==k.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pt=Lt===Er&&(ct.has("EXT_color_buffer_half_float")||ft.isWebGL2&&ct.has("EXT_color_buffer_float"));if(Lt!==pi&&T.convert(Lt)!==k.getParameter(35738)&&!(Lt===si&&(ft.isWebGL2||ct.has("OES_texture_float")||ct.has("WEBGL_color_buffer_float")))&&!Pt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-N&&Y>=0&&Y<=E.height-$&&k.readPixels(U,Y,N,$,T.convert(Ot),T.convert(Lt),_t)}finally{const St=M!==null?xt.get(M).__webglFramebuffer:null;it.bindFramebuffer(36160,St)}}},this.copyFramebufferToTexture=function(E,U,Y=0){const N=Math.pow(2,-Y),$=Math.floor(U.image.width*N),_t=Math.floor(U.image.height*N);gt.setTexture2D(U,0),k.copyTexSubImage2D(3553,Y,0,0,E.x,E.y,$,_t),it.unbindTexture()},this.copyTextureToTexture=function(E,U,Y,N=0){const $=U.image.width,_t=U.image.height,Mt=T.convert(Y.format),Tt=T.convert(Y.type);gt.setTexture2D(Y,0),k.pixelStorei(37440,Y.flipY),k.pixelStorei(37441,Y.premultiplyAlpha),k.pixelStorei(3317,Y.unpackAlignment),U.isDataTexture?k.texSubImage2D(3553,N,E.x,E.y,$,_t,Mt,Tt,U.image.data):U.isCompressedTexture?k.compressedTexSubImage2D(3553,N,E.x,E.y,U.mipmaps[0].width,U.mipmaps[0].height,Mt,U.mipmaps[0].data):k.texSubImage2D(3553,N,E.x,E.y,Mt,Tt,U.image),N===0&&Y.generateMipmaps&&k.generateMipmap(3553),it.unbindTexture()},this.copyTextureToTexture3D=function(E,U,Y,N,$=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _t=E.max.x-E.min.x+1,Mt=E.max.y-E.min.y+1,Tt=E.max.z-E.min.z+1,St=T.convert(N.format),Ot=T.convert(N.type);let Lt;if(N.isData3DTexture)gt.setTexture3D(N,0),Lt=32879;else if(N.isDataArrayTexture)gt.setTexture2DArray(N,0),Lt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(37440,N.flipY),k.pixelStorei(37441,N.premultiplyAlpha),k.pixelStorei(3317,N.unpackAlignment);const Pt=k.getParameter(3314),Wt=k.getParameter(32878),Yn=k.getParameter(3316),Mi=k.getParameter(3315),Si=k.getParameter(32877),nn=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;k.pixelStorei(3314,nn.width),k.pixelStorei(32878,nn.height),k.pixelStorei(3316,E.min.x),k.pixelStorei(3315,E.min.y),k.pixelStorei(32877,E.min.z),Y.isDataTexture||Y.isData3DTexture?k.texSubImage3D(Lt,$,U.x,U.y,U.z,_t,Mt,Tt,St,Ot,nn.data):Y.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Lt,$,U.x,U.y,U.z,_t,Mt,Tt,St,nn.data)):k.texSubImage3D(Lt,$,U.x,U.y,U.z,_t,Mt,Tt,St,Ot,nn),k.pixelStorei(3314,Pt),k.pixelStorei(32878,Wt),k.pixelStorei(3316,Yn),k.pixelStorei(3315,Mi),k.pixelStorei(32877,Si),$===0&&N.generateMipmaps&&k.generateMipmap(Lt),it.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?gt.setTextureCube(E,0):E.isData3DTexture?gt.setTexture3D(E,0):E.isDataArrayTexture?gt.setTexture2DArray(E,0):gt.setTexture2D(E,0),it.unbindTexture()},this.resetState=function(){g=0,y=0,M=null,it.reset(),J.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Og extends Lc{}Og.prototype.isWebGL1Renderer=!0;class fs{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ft(t),this.near=e,this.far=n}clone(){return new fs(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class Fg extends pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class Ng extends Ur{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ft(16777215),this.specular=new Ft(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dc,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Dl={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Pc{constructor(t,e,n){const i=this;let r=!1,a=0,s=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){s++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,s),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,s),a===s&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const m=l[u],_=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null}}}const zg=new Pc;class Dc{constructor(t){this.manager=t!==void 0?t:zg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}class Ug extends Dc{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Dl.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const s=Ar("img");function c(){h(),Dl.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){s.removeEventListener("load",c,!1),s.removeEventListener("error",l,!1)}return s.addEventListener("load",c,!1),s.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),r.manager.itemStart(t),s.src=t,s}}class kg extends Dc{constructor(t){super(t)}load(t,e,n,i){const r=new $e,a=new Ug(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(s){r.image=s,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class Bg extends pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Rl=new Qt,Il=new O,Ol=new O;class Vg{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ka,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Il.setFromMatrixPosition(t.matrixWorld),e.position.copy(Il),Ol.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ol),e.updateMatrixWorld(),Rl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(e.projectionMatrix),n.multiply(e.matrixWorldInverse)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Fl=new Qt,gr=new O,ha=new O;class Gg extends Vg{constructor(){super(new Pe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new wt(4,2),this._viewportCount=6,this._viewports=[new kt(2,1,1,1),new kt(0,1,1,1),new kt(3,1,1,1),new kt(1,1,1,1),new kt(3,0,1,1),new kt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),gr.setFromMatrixPosition(t.matrixWorld),n.position.copy(gr),ha.copy(n.position),ha.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ha),n.updateMatrixWorld(),i.makeTranslation(-gr.x,-gr.y,-gr.z),Fl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fl)}}class Nl extends Bg{constructor(t,e,n=0,i=1){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Gg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Hg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=zl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function zl(){return(typeof performance=="undefined"?Date:performance).now()}class Wg{constructor(t,e,n=0,i=1/0){this.ray=new xc(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Za,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Pa(t,this,n,e),n.sort(Ul),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Pa(t[i],this,n,e);return n.sort(Ul),n}}function Ul(o,t){return o.distance-t.distance}function Pa(o,t,e,n){if(o.layers.test(t.layers)&&o.raycast(t,e),n===!0){const i=o.children;for(let r=0,a=i.length;r<a;r++)Pa(i[r],t,e,!0)}}class kl{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(xe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ya}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ya);const Bl={type:"change"},ua={type:"start"},Vl={type:"end"};class Xg extends vi{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ti.ROTATE,MIDDLE:Ti.DOLLY,RIGHT:Ti.PAN},this.touches={ONE:Ei.ROTATE,TWO:Ei.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",we),this._domElementKeyEvents=T},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Bl),n.update(),r=i.NONE},this.update=function(){const T=new O,J=new _i().setFromUnitVectors(t.up,new O(0,1,0)),st=J.clone().invert(),ut=new O,lt=new _i,bt=2*Math.PI;return function(){const Ut=n.object.position;T.copy(Ut).sub(n.target),T.applyQuaternion(J),s.setFromVector3(T),n.autoRotate&&r===i.NONE&&w(L()),n.enableDamping?(s.theta+=c.theta*n.dampingFactor,s.phi+=c.phi*n.dampingFactor):(s.theta+=c.theta,s.phi+=c.phi);let R=n.minAzimuthAngle,ot=n.maxAzimuthAngle;return isFinite(R)&&isFinite(ot)&&(R<-Math.PI?R+=bt:R>Math.PI&&(R-=bt),ot<-Math.PI?ot+=bt:ot>Math.PI&&(ot-=bt),R<=ot?s.theta=Math.max(R,Math.min(ot,s.theta)):s.theta=s.theta>(R+ot)/2?Math.max(R,s.theta):Math.min(ot,s.theta)),s.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,s.phi)),s.makeSafe(),s.radius*=l,s.radius=Math.max(n.minDistance,Math.min(n.maxDistance,s.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),T.setFromSpherical(s),T.applyQuaternion(st),Ut.copy(n.target).add(T),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),l=1,u||ut.distanceToSquared(n.object.position)>a||8*(1-lt.dot(n.object.quaternion))>a?(n.dispatchEvent(Bl),ut.copy(n.object.position),lt.copy(n.object.quaternion),u=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",q),n.domElement.removeEventListener("pointerdown",Vt),n.domElement.removeEventListener("pointercancel",Se),n.domElement.removeEventListener("wheel",Fe),n.domElement.removeEventListener("pointermove",te),n.domElement.removeEventListener("pointerup",Gt),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",we)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,s=new kl,c=new kl;let l=1;const h=new O;let u=!1;const d=new wt,m=new wt,_=new wt,f=new wt,p=new wt,g=new wt,y=new wt,M=new wt,b=new wt,x=[],A={};function L(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function w(T){c.theta-=T}function D(T){c.phi-=T}const W=function(){const T=new O;return function(st,ut){T.setFromMatrixColumn(ut,0),T.multiplyScalar(-st),h.add(T)}}(),tt=function(){const T=new O;return function(st,ut){n.screenSpacePanning===!0?T.setFromMatrixColumn(ut,1):(T.setFromMatrixColumn(ut,0),T.crossVectors(n.object.up,T)),T.multiplyScalar(st),h.add(T)}}(),z=function(){const T=new O;return function(st,ut){const lt=n.domElement;if(n.object.isPerspectiveCamera){const bt=n.object.position;T.copy(bt).sub(n.target);let At=T.length();At*=Math.tan(n.object.fov/2*Math.PI/180),W(2*st*At/lt.clientHeight,n.object.matrix),tt(2*ut*At/lt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(W(st*(n.object.right-n.object.left)/n.object.zoom/lt.clientWidth,n.object.matrix),tt(ut*(n.object.top-n.object.bottom)/n.object.zoom/lt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function I(T){n.object.isPerspectiveCamera?l/=T:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*T)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(T){n.object.isPerspectiveCamera?l*=T:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/T)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(T){d.set(T.clientX,T.clientY)}function Z(T){y.set(T.clientX,T.clientY)}function G(T){f.set(T.clientX,T.clientY)}function F(T){m.set(T.clientX,T.clientY),_.subVectors(m,d).multiplyScalar(n.rotateSpeed);const J=n.domElement;w(2*Math.PI*_.x/J.clientHeight),D(2*Math.PI*_.y/J.clientHeight),d.copy(m),n.update()}function B(T){M.set(T.clientX,T.clientY),b.subVectors(M,y),b.y>0?I(v()):b.y<0&&H(v()),y.copy(M),n.update()}function et(T){p.set(T.clientX,T.clientY),g.subVectors(p,f).multiplyScalar(n.panSpeed),z(g.x,g.y),f.copy(p),n.update()}function Q(T){T.deltaY<0?H(v()):T.deltaY>0&&I(v()),n.update()}function P(T){let J=!1;switch(T.code){case n.keys.UP:z(0,n.keyPanSpeed),J=!0;break;case n.keys.BOTTOM:z(0,-n.keyPanSpeed),J=!0;break;case n.keys.LEFT:z(n.keyPanSpeed,0),J=!0;break;case n.keys.RIGHT:z(-n.keyPanSpeed,0),J=!0;break}J&&(T.preventDefault(),n.update())}function V(){if(x.length===1)d.set(x[0].pageX,x[0].pageY);else{const T=.5*(x[0].pageX+x[1].pageX),J=.5*(x[0].pageY+x[1].pageY);d.set(T,J)}}function K(){if(x.length===1)f.set(x[0].pageX,x[0].pageY);else{const T=.5*(x[0].pageX+x[1].pageX),J=.5*(x[0].pageY+x[1].pageY);f.set(T,J)}}function k(){const T=x[0].pageX-x[1].pageX,J=x[0].pageY-x[1].pageY,st=Math.sqrt(T*T+J*J);y.set(0,st)}function mt(){n.enableZoom&&k(),n.enablePan&&K()}function ct(){n.enableZoom&&k(),n.enableRotate&&V()}function ft(T){if(x.length==1)m.set(T.pageX,T.pageY);else{const st=yt(T),ut=.5*(T.pageX+st.x),lt=.5*(T.pageY+st.y);m.set(ut,lt)}_.subVectors(m,d).multiplyScalar(n.rotateSpeed);const J=n.domElement;w(2*Math.PI*_.x/J.clientHeight),D(2*Math.PI*_.y/J.clientHeight),d.copy(m)}function it(T){if(x.length===1)p.set(T.pageX,T.pageY);else{const J=yt(T),st=.5*(T.pageX+J.x),ut=.5*(T.pageY+J.y);p.set(st,ut)}g.subVectors(p,f).multiplyScalar(n.panSpeed),z(g.x,g.y),f.copy(p)}function vt(T){const J=yt(T),st=T.pageX-J.x,ut=T.pageY-J.y,lt=Math.sqrt(st*st+ut*ut);M.set(0,lt),b.set(0,Math.pow(M.y/y.y,n.zoomSpeed)),I(b.y),y.copy(M)}function xt(T){n.enableZoom&&vt(T),n.enablePan&&it(T)}function gt(T){n.enableZoom&&vt(T),n.enableRotate&&ft(T)}function Vt(T){n.enabled!==!1&&(x.length===0&&(n.domElement.setPointerCapture(T.pointerId),n.domElement.addEventListener("pointermove",te),n.domElement.addEventListener("pointerup",Gt)),nt(T),T.pointerType==="touch"?C(T):ee(T))}function te(T){n.enabled!==!1&&(T.pointerType==="touch"?S(T):It(T))}function Gt(T){rt(T),x.length===0&&(n.domElement.releasePointerCapture(T.pointerId),n.domElement.removeEventListener("pointermove",te),n.domElement.removeEventListener("pointerup",Gt)),n.dispatchEvent(Vl),r=i.NONE}function Se(T){rt(T)}function ee(T){let J;switch(T.button){case 0:J=n.mouseButtons.LEFT;break;case 1:J=n.mouseButtons.MIDDLE;break;case 2:J=n.mouseButtons.RIGHT;break;default:J=-1}switch(J){case Ti.DOLLY:if(n.enableZoom===!1)return;Z(T),r=i.DOLLY;break;case Ti.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enablePan===!1)return;G(T),r=i.PAN}else{if(n.enableRotate===!1)return;j(T),r=i.ROTATE}break;case Ti.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enableRotate===!1)return;j(T),r=i.ROTATE}else{if(n.enablePan===!1)return;G(T),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ua)}function It(T){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;F(T);break;case i.DOLLY:if(n.enableZoom===!1)return;B(T);break;case i.PAN:if(n.enablePan===!1)return;et(T);break}}function Fe(T){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(T.preventDefault(),n.dispatchEvent(ua),Q(T),n.dispatchEvent(Vl))}function we(T){n.enabled===!1||n.enablePan===!1||P(T)}function C(T){switch(ht(T),x.length){case 1:switch(n.touches.ONE){case Ei.ROTATE:if(n.enableRotate===!1)return;V(),r=i.TOUCH_ROTATE;break;case Ei.PAN:if(n.enablePan===!1)return;K(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Ei.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;mt(),r=i.TOUCH_DOLLY_PAN;break;case Ei.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ct(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ua)}function S(T){switch(ht(T),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ft(T),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;it(T),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;xt(T),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;gt(T),n.update();break;default:r=i.NONE}}function q(T){n.enabled!==!1&&T.preventDefault()}function nt(T){x.push(T)}function rt(T){delete A[T.pointerId];for(let J=0;J<x.length;J++)if(x[J].pointerId==T.pointerId){x.splice(J,1);return}}function ht(T){let J=A[T.pointerId];J===void 0&&(J=new wt,A[T.pointerId]=J),J.set(T.pageX,T.pageY)}function yt(T){const J=T.pointerId===x[0].pointerId?x[1]:x[0];return A[J.pointerId]}n.domElement.addEventListener("contextmenu",q),n.domElement.addEventListener("pointerdown",Vt),n.domElement.addEventListener("pointercancel",Se),n.domElement.addEventListener("wheel",Fe,{passive:!1}),this.update()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.18.1
 * @author George Michael Brower
 * @license MIT
 */class hn{constructor(t,e,n,i,r="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),hn.nextNameID=hn.nextNameID||0,this.$name.id=`lil-gui-name-${++hn.nextNameID}`,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class qg extends hn{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Da(o){let t,e;return(t=o.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=o.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=o.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const Yg={isPrimitive:!0,match:o=>typeof o=="string",fromHexString:Da,toHexString:Da},Cr={isPrimitive:!0,match:o=>typeof o=="number",fromHexString:o=>parseInt(o.substring(1),16),toHexString:o=>"#"+o.toString(16).padStart(6,0)},$g={isPrimitive:!1,match:o=>Array.isArray(o),fromHexString(o,t,e=1){const n=Cr.fromHexString(o);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([o,t,e],n=1){n=255/n;const i=o*n<<16^t*n<<8^e*n<<0;return Cr.toHexString(i)}},jg={isPrimitive:!1,match:o=>Object(o)===o,fromHexString(o,t,e=1){const n=Cr.fromHexString(o);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:o,g:t,b:e},n=1){n=255/n;const i=o*n<<16^t*n<<8^e*n<<0;return Cr.toHexString(i)}},Zg=[Yg,Cr,$g,jg];function Kg(o){return Zg.find(t=>t.match(o))}class Jg extends hn{constructor(t,e,n,i){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Kg(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=Da(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class da extends hn{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Qg extends hn{constructor(t,e,n,i,r,a){super(t,e,n,"number"),this._initInput(),this.min(i),this.max(r);const s=a!==void 0;this.step(s?a:this._getImplicitStep(),s),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let g=parseFloat(this.$input.value);isNaN(g)||(this._stepExplicit&&(g=this._snap(g)),this.setValue(this._clamp(g)))},e=g=>{const y=parseFloat(this.$input.value);isNaN(y)||(this._snapClampSetValue(y+g),this.$input.value=this.getValue())},n=g=>{g.code==="Enter"&&this.$input.blur(),g.code==="ArrowUp"&&(g.preventDefault(),e(this._step*this._arrowKeyMultiplier(g))),g.code==="ArrowDown"&&(g.preventDefault(),e(this._step*this._arrowKeyMultiplier(g)*-1))},i=g=>{this._inputFocused&&(g.preventDefault(),e(this._step*this._normalizeMouseWheel(g)))};let r=!1,a,s,c,l,h;const u=5,d=g=>{a=g.clientX,s=c=g.clientY,r=!0,l=this.getValue(),h=0,window.addEventListener("mousemove",m),window.addEventListener("mouseup",_)},m=g=>{if(r){const y=g.clientX-a,M=g.clientY-s;Math.abs(M)>u?(g.preventDefault(),this.$input.blur(),r=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(y)>u&&_()}r||(h-=(g.clientY-c)*this._step*this._arrowKeyMultiplier(g),l+h>this._max?h=this._max-l:l+h<this._min&&(h=this._min-l),this._snapClampSetValue(l+h)),c=g.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",_)},f=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",i,{passive:!1}),this.$input.addEventListener("mousedown",d),this.$input.addEventListener("focus",f),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(g,y,M,b,x)=>(g-y)/(M-y)*(x-b)+b,e=g=>{const y=this.$slider.getBoundingClientRect();let M=t(g,y.left,y.right,this._min,this._max);this._snapClampSetValue(M)},n=g=>{this._setDraggingStyle(!0),e(g.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},i=g=>{e(g.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)};let a=!1,s,c;const l=g=>{g.preventDefault(),this._setDraggingStyle(!0),e(g.touches[0].clientX),a=!1},h=g=>{g.touches.length>1||(this._hasScrollBar?(s=g.touches[0].clientX,c=g.touches[0].clientY,a=!0):l(g),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",d))},u=g=>{if(a){const y=g.touches[0].clientX-s,M=g.touches[0].clientY-c;Math.abs(y)>Math.abs(M)?l(g):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d))}else g.preventDefault(),e(g.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d)},m=this._callOnFinishChange.bind(this),_=400;let f;const p=g=>{if(Math.abs(g.deltaX)<Math.abs(g.deltaY)&&this._hasScrollBar)return;g.preventDefault();const M=this._normalizeMouseWheel(g)*this._step;this._snapClampSetValue(this.getValue()+M),this.$input.value=this.getValue(),clearTimeout(f),f=setTimeout(m,_)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",p,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class t_ extends hn{constructor(t,e,n,i){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(r=>{const a=document.createElement("option");a.innerHTML=r,this.$select.appendChild(a)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.innerHTML=e===-1?t:this._names[e],this}}class e_ extends hn{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const n_=`.lil-gui {
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
  content: "\u2195";
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
  content: "\u25BE";
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
  content: "\u25B8";
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
  content: "\u2713";
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
}`;function i_(o){const t=document.createElement("style");t.innerHTML=o;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let Gl=!1;class Qa{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:i,title:r="Controls",closeFolders:a=!1,injectStyles:s=!0,touchStyles:c=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{(l.code==="Enter"||l.code==="Space")&&(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),c&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!Gl&&s&&(i_(n_),Gl=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=a,this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation())}add(t,e,n,i,r){if(Object(n)===n)return new t_(this,t,e,n);const a=t[e];switch(typeof a){case"number":return new Qg(this,t,e,n,i,r);case"boolean":return new qg(this,t,e);case"string":return new e_(this,t,e);case"function":return new da(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,a)}addColor(t,e,n=1){return new Jg(this,t,e,n)}addFolder(t){const e=new Qa({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof da||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof da)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}class r_{constructor(){this.active=window.location.hash==="#debug",this.active&&(this.ui=new Qa({container:document.querySelector(".debug")}))}}function yn(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Rc(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}/*!
 * GSAP 3.11.1
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Re={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ir={duration:.5,overwrite:!1,delay:0},to,Ye,Jt,He=1e8,zt=1/He,Ra=Math.PI*2,s_=Ra/4,a_=0,Ic=Math.sqrt,o_=Math.cos,l_=Math.sin,ae=function(t){return typeof t=="string"},Yt=function(t){return typeof t=="function"},Tn=function(t){return typeof t=="number"},eo=function(t){return typeof t=="undefined"},dn=function(t){return typeof t=="object"},ye=function(t){return t!==!1},Oc=function(){return typeof window!="undefined"},ls=function(t){return Yt(t)||ae(t)},Fc=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},de=Array.isArray,Ia=/(?:-?\.?\d|\.)+/gi,Nc=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Xi=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,fa=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,zc=/[+-]=-?[.\d]+/,Uc=/[^,'"\[\]\s]+/gi,c_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Bt,Be,Oa,no,Ie={},ps={},kc,Bc=function(t){return(ps=xi(t,Ie))&&Oe},io=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ms=function(t,e){return!e&&console.warn(t)},Vc=function(t,e){return t&&(Ie[t]=e)&&ps&&(ps[t]=e)||Ie},Lr=function(){return 0},h_={suppressEvents:!0,isStart:!0},Mr={suppressEvents:!0},ro={},Gn=[],Fa={},Gc,Le={},pa={},Hl=30,us=[],so="",ao=function(t){var e=t[0],n,i;if(dn(e)||Yt(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=us.length;i--&&!us[i].targetTest(e););n=us[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new hh(t[i],n)))||t.splice(i,1);return t},ui=function(t){return t._gsap||ao(We(t))[0]._gsap},Hc=function(t,e,n){return(n=t[e])&&Yt(n)?t[e]():eo(n)&&t.getAttribute&&t.getAttribute(e)||n},be=function(t,e){return(t=t.split(",")).forEach(e)||t},jt=function(t){return Math.round(t*1e5)/1e5||0},oe=function(t){return Math.round(t*1e7)/1e7||0},ji=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},u_=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},gs=function(){var t=Gn.length,e=Gn.slice(0),n,i;for(Fa={},Gn.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Wc=function(t,e,n,i){Gn.length&&gs(),t.render(e,n,i||Ye),Gn.length&&gs()},Xc=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Uc).length<2?e:ae(t)?t.trim():t},qc=function(t){return t},je=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},d_=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},xi=function(t,e){for(var n in e)t[n]=e[n];return t},Wl=function o(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=dn(e[n])?o(t[n]||(t[n]={}),e[n]):e[n]);return t},_s=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Sr=function(t){var e=t.parent||Bt,n=t.keyframes?d_(de(t.keyframes)):je;if(ye(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},f_=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Yc=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],s;if(r)for(s=e[r];a&&a[r]>s;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Es=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,a=e._next;r?r._next=a:t[n]===e&&(t[n]=a),a?a._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},En=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove(t),t._act=0},di=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},p_=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Na=function(t,e,n,i){return t._startAt&&(Ye?t._startAt.revert(Mr):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},m_=function o(t){return!t||t._ts&&o(t.parent)},Xl=function(t){return t._repeat?rr(t._tTime,t=t.duration()+t._rDelay)*t:0},rr=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},xs=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},As=function(t){return t._end=oe(t._start+(t._tDur/Math.abs(t._ts||t._rts||zt)||0))},Cs=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=oe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),As(t),n._dirty||di(n,t)),t},$c=function(t,e){var n;if((e._time||e._initted&&!e._dur)&&(n=xs(t.rawTime(),e),(!e._dur||kr(0,e.totalDuration(),n)-e._tTime>zt)&&e.render(n,!0)),di(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-zt}},an=function(t,e,n,i){return e.parent&&En(e),e._start=oe((Tn(n)?n:n||t!==Bt?ke(t,n,e):t._time)+e._delay),e._end=oe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Yc(t,e,"_first","_last",t._sort?"_start":0),za(e)||(t._recent=e),i||$c(t,e),t._ts<0&&Cs(t,t._tTime),t},jc=function(t,e){return(Ie.ScrollTrigger||io("scrollTrigger",e))&&Ie.ScrollTrigger.create(e,t)},Zc=function(t,e,n,i){if(lo(t,e),!t._initted)return 1;if(!n&&t._pt&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Gc!==De.frame)return Gn.push(t),t._lazy=[e,i],1},g_=function o(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||o(e))},za=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},__=function(t,e,n,i){var r=t.ratio,a=e<0||!e&&(!t._start&&g_(t)&&!(!t._initted&&za(t))||(t._ts<0||t._dp._ts<0)&&!za(t))?0:1,s=t._rDelay,c=0,l,h,u;if(s&&t._repeat&&(c=kr(0,t._tDur,e),h=rr(c,s),t._yoyo&&h&1&&(a=1-a),h!==rr(t._tTime,s)&&(r=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==r||Ye||i||t._zTime===zt||!e&&t._zTime){if(!t._initted&&Zc(t,e,i,n))return;for(u=t._zTime,t._zTime=e||(n?zt:0),n||(n=e&&!u),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=c,l=t._pt;l;)l.r(a,l.d),l=l._next;e<0&&Na(t,e,n,!0),t._onUpdate&&!n&&Xe(t,"onUpdate"),c&&t._repeat&&!n&&t.parent&&Xe(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&En(t,1),!n&&!Ye&&(Xe(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},x_=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},sr=function(t,e,n,i){var r=t._repeat,a=oe(e)||0,s=t._tTime/t._tDur;return s&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=r?r<0?1e10:oe(a*(r+1)+t._rDelay*r):a,s>0&&!i?Cs(t,t._tTime=t._tDur*s):t.parent&&As(t),n||di(t.parent,t),t},ql=function(t){return t instanceof ve?di(t):sr(t,t._dur)},v_={_start:0,endTime:Lr,totalDuration:Lr},ke=function o(t,e,n){var i=t.labels,r=t._recent||v_,a=t.duration()>=He?r.endTime(!1):t._dur,s,c,l;return ae(e)&&(isNaN(e)||e in i)?(c=e.charAt(0),l=e.substr(-1)==="%",s=e.indexOf("="),c==="<"||c===">"?(s>=0&&(e=e.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(l?(s<0?r:n).totalDuration()/100:1)):s<0?(e in i||(i[e]=a),i[e]):(c=parseFloat(e.charAt(s-1)+e.substr(s+1)),l&&n&&(c=c/100*(de(n)?n[0]:n).totalDuration()),s>1?o(t,e.substr(0,s-1),n)+c:a+c)):e==null?a:+e},wr=function(t,e,n){var i=Tn(e[1]),r=(i?2:1)+(t<2?0:1),a=e[r],s,c;if(i&&(a.duration=e[1]),a.parent=n,t){for(s=a,c=n;c&&!("immediateRender"in s);)s=c.vars.defaults||{},c=ye(c.vars.inherit)&&c.parent;a.immediateRender=ye(s.immediateRender),t<2?a.runBackwards=1:a.startAt=e[r-1]}return new ie(e[0],a,e[r+1])},qn=function(t,e){return t||t===0?e(t):e},kr=function(t,e,n){return n<t?t:n>e?e:n},ue=function(t,e){return!ae(t)||!(e=c_.exec(t))?"":e[1]},y_=function(t,e,n){return qn(n,function(i){return kr(t,e,i)})},Ua=[].slice,Kc=function(t,e){return t&&dn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&dn(t[0]))&&!t.nodeType&&t!==Be},b_=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return ae(i)&&!e||Kc(i,1)?(r=n).push.apply(r,We(i)):n.push(i)})||n},We=function(t,e,n){return Jt&&!e&&Jt.selector?Jt.selector(t):ae(t)&&!n&&(Oa||!ar())?Ua.call((e||no).querySelectorAll(t),0):de(t)?b_(t,n):Kc(t)?Ua.call(t,0):t?[t]:[]},ka=function(t){return t=We(t)[0]||ms("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return We(e,n.querySelectorAll?n:n===t?ms("Invalid scope")||no.createElement("div"):t)}},Jc=function(t){return t.sort(function(){return .5-Math.random()})},Qc=function(t){if(Yt(t))return t;var e=dn(t)?t:{each:t},n=fi(e.ease),i=e.from||0,r=parseFloat(e.base)||0,a={},s=i>0&&i<1,c=isNaN(i)||s,l=e.axis,h=i,u=i;return ae(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!s&&c&&(h=i[0],u=i[1]),function(d,m,_){var f=(_||e).length,p=a[f],g,y,M,b,x,A,L,v,w;if(!p){if(w=e.grid==="auto"?0:(e.grid||[1,He])[1],!w){for(L=-He;L<(L=_[w++].getBoundingClientRect().left)&&w<f;);w--}for(p=a[f]=[],g=c?Math.min(w,f)*h-.5:i%w,y=w===He?0:c?f*u/w-.5:i/w|0,L=0,v=He,A=0;A<f;A++)M=A%w-g,b=y-(A/w|0),p[A]=x=l?Math.abs(l==="y"?b:M):Ic(M*M+b*b),x>L&&(L=x),x<v&&(v=x);i==="random"&&Jc(p),p.max=L-v,p.min=v,p.v=f=(parseFloat(e.amount)||parseFloat(e.each)*(w>f?f-1:l?l==="y"?f/w:w:Math.max(w,f/w))||0)*(i==="edges"?-1:1),p.b=f<0?r-f:r,p.u=ue(e.amount||e.each)||0,n=n&&f<0?oh(n):n}return f=(p[d]-p.min)/p.max||0,oe(p.b+(n?n(f):f)*p.v)+p.u}},Ba=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=oe(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Tn(n)?0:ue(n))}},th=function(t,e){var n=de(t),i,r;return!n&&dn(t)&&(i=n=t.radius||He,t.values?(t=We(t.values),(r=!Tn(t[0]))&&(i*=i)):t=Ba(t.increment)),qn(e,n?Yt(t)?function(a){return r=t(a),Math.abs(r-a)<=i?r:a}:function(a){for(var s=parseFloat(r?a.x:a),c=parseFloat(r?a.y:0),l=He,h=0,u=t.length,d,m;u--;)r?(d=t[u].x-s,m=t[u].y-c,d=d*d+m*m):d=Math.abs(t[u]-s),d<l&&(l=d,h=u);return h=!i||l<=i?t[h]:a,r||h===a||Tn(a)?h:h+ue(a)}:Ba(t))},eh=function(t,e,n,i){return qn(de(t)?!e:n===!0?!!(n=0):!i,function(){return de(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},M_=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,a){return a(r)},i)}},S_=function(t,e){return function(n){return t(parseFloat(n))+(e||ue(n))}},w_=function(t,e,n){return ih(t,e,0,1,n)},nh=function(t,e,n){return qn(n,function(i){return t[~~e(i)]})},T_=function o(t,e,n){var i=e-t;return de(t)?nh(t,o(0,t.length),e):qn(n,function(r){return(i+(r-t)%i)%i+t})},E_=function o(t,e,n){var i=e-t,r=i*2;return de(t)?nh(t,o(0,t.length-1),e):qn(n,function(a){return a=(r+(a-t)%r)%r||0,t+(a>i?r-a:a)})},Pr=function(t){for(var e=0,n="",i,r,a,s;~(i=t.indexOf("random(",e));)a=t.indexOf(")",i),s=t.charAt(i+7)==="[",r=t.substr(i+7,a-i-7).match(s?Uc:Ia),n+=t.substr(e,i-e)+eh(s?r:+r[0],s?0:+r[1],+r[2]||1e-5),e=a+1;return n+t.substr(e,t.length-e)},ih=function(t,e,n,i,r){var a=e-t,s=i-n;return qn(r,function(c){return n+((c-t)/a*s||0)})},A_=function o(t,e,n,i){var r=isNaN(t+e)?0:function(m){return(1-m)*t+m*e};if(!r){var a=ae(t),s={},c,l,h,u,d;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(de(t)&&!de(e)){for(h=[],u=t.length,d=u-2,l=1;l<u;l++)h.push(o(t[l-1],t[l]));u--,r=function(_){_*=u;var f=Math.min(d,~~_);return h[f](_-f)},n=e}else i||(t=xi(de(t)?[]:{},t));if(!h){for(c in e)oo.call(s,t,c,"get",e[c]);r=function(_){return uo(_,s)||(a?t.p:t)}}}return qn(n,r)},Yl=function(t,e,n){var i=t.labels,r=He,a,s,c;for(a in i)s=i[a]-e,s<0==!!n&&s&&r>(s=Math.abs(s))&&(c=a,r=s);return c},Xe=function(t,e,n){var i=t.vars,r=i[e],a=Jt,s=t._ctx,c,l,h;if(!!r)return c=i[e+"Params"],l=i.callbackScope||t,n&&Gn.length&&gs(),s&&(Jt=s),h=c?r.apply(l,c):r.call(l),Jt=a,h},yr=function(t){return En(t),t.scrollTrigger&&t.scrollTrigger.kill(!1),t.progress()<1&&Xe(t,"onInterrupt"),t},qi,C_=function(t){t=!t.name&&t.default||t;var e=t.name,n=Yt(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:Lr,render:uo,add:oo,kill:W_,modifier:H_,rawVars:0},a={targetTest:0,get:0,getSetter:ho,aliases:{},register:0};if(ar(),t!==i){if(Le[e])return;je(i,je(_s(t,r),a)),xi(i.prototype,xi(r,_s(t,a))),Le[i.prop=e]=i,t.targetTest&&(us.push(i),ro[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Vc(e,i),t.register&&t.register(Oe,i,Me)},Nt=255,br={aqua:[0,Nt,Nt],lime:[0,Nt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Nt],navy:[0,0,128],white:[Nt,Nt,Nt],olive:[128,128,0],yellow:[Nt,Nt,0],orange:[Nt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Nt,0,0],pink:[Nt,192,203],cyan:[0,Nt,Nt],transparent:[Nt,Nt,Nt,0]},ma=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Nt+.5|0},rh=function(t,e,n){var i=t?Tn(t)?[t>>16,t>>8&Nt,t&Nt]:0:br.black,r,a,s,c,l,h,u,d,m,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),br[t])i=br[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),a=t.charAt(2),s=t.charAt(3),t="#"+r+r+a+a+s+s+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Nt,i&Nt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Nt,t&Nt]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(Ia),!e)c=+i[0]%360/360,l=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(l+1):h+l-h*l,r=h*2-a,i.length>3&&(i[3]*=1),i[0]=ma(c+1/3,r,a),i[1]=ma(c,r,a),i[2]=ma(c-1/3,r,a);else if(~t.indexOf("="))return i=t.match(Nc),n&&i.length<4&&(i[3]=1),i}else i=t.match(Ia)||br.transparent;i=i.map(Number)}return e&&!_&&(r=i[0]/Nt,a=i[1]/Nt,s=i[2]/Nt,u=Math.max(r,a,s),d=Math.min(r,a,s),h=(u+d)/2,u===d?c=l=0:(m=u-d,l=h>.5?m/(2-u-d):m/(u+d),c=u===r?(a-s)/m+(a<s?6:0):u===a?(s-r)/m+2:(r-a)/m+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},sh=function(t){var e=[],n=[],i=-1;return t.split(Hn).forEach(function(r){var a=r.match(Xi)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},$l=function(t,e,n){var i="",r=(t+i).match(Hn),a=e?"hsla(":"rgba(",s=0,c,l,h,u;if(!r)return t;if(r=r.map(function(d){return(d=rh(d,e,1))&&a+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=sh(t),c=n.c,c.join(i)!==h.c.join(i)))for(l=t.replace(Hn,"1").split(Xi),u=l.length-1;s<u;s++)i+=l[s]+(~c.indexOf(s)?r.shift()||a+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!l)for(l=t.split(Hn),u=l.length-1;s<u;s++)i+=l[s]+r[s];return i+l[u]},Hn=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in br)o+="|"+t+"\\b";return new RegExp(o+")","gi")}(),L_=/hsl[a]?\(/,ah=function(t){var e=t.join(" "),n;if(Hn.lastIndex=0,Hn.test(e))return n=L_.test(e),t[1]=$l(t[1],n),t[0]=$l(t[0],n,sh(t[1])),!0},Dr,De=function(){var o=Date.now,t=500,e=33,n=o(),i=n,r=1e3/240,a=r,s=[],c,l,h,u,d,m,_=function f(p){var g=o()-i,y=p===!0,M,b,x,A;if(g>t&&(n+=g-e),i+=g,x=i-n,M=x-a,(M>0||y)&&(A=++u.frame,d=x-u.time*1e3,u.time=x=x/1e3,a+=M+(M>=r?4:r-M),b=1),y||(c=l(f)),b)for(m=0;m<s.length;m++)s[m](x,d,A,p)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){kc&&(!Oa&&Oc()&&(Be=Oa=window,no=Be.document||{},Ie.gsap=Oe,(Be.gsapVersions||(Be.gsapVersions=[])).push(Oe.version),Bc(ps||Be.GreenSockGlobals||!Be.gsap&&Be||{}),h=Be.requestAnimationFrame),c&&u.sleep(),l=h||function(p){return setTimeout(p,a-u.time*1e3+1|0)},Dr=1,_(2))},sleep:function(){(h?Be.cancelAnimationFrame:clearTimeout)(c),Dr=0,l=Lr},lagSmoothing:function(p,g){t=p||1/zt,e=Math.min(g,t,0)},fps:function(p){r=1e3/(p||240),a=u.time*1e3+r},add:function(p,g,y){var M=g?function(b,x,A,L){p(b,x,A,L),u.remove(M)}:p;return u.remove(p),s[y?"unshift":"push"](M),ar(),M},remove:function(p,g){~(g=s.indexOf(p))&&s.splice(g,1)&&m>=g&&m--},_listeners:s},u}(),ar=function(){return!Dr&&De.wake()},Ct={},P_=/^[\d.\-M][\d.\-,\s]/,D_=/["']/g,R_=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,a=n.length,s,c,l;r<a;r++)c=n[r],s=r!==a-1?c.lastIndexOf(","):c.length,l=c.substr(0,s),e[i]=isNaN(l)?l.replace(D_,"").trim():+l,i=c.substr(s+1).trim();return e},I_=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},O_=function(t){var e=(t+"").split("("),n=Ct[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[R_(e[1])]:I_(t).split(",").map(Xc)):Ct._CE&&P_.test(t)?Ct._CE("",t):n},oh=function(t){return function(e){return 1-t(1-e)}},lh=function o(t,e){for(var n=t._first,i;n;)n instanceof ve?o(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?o(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},fi=function(t,e){return t&&(Yt(t)?t:Ct[t]||O_(t))||e},bi=function(t,e,n,i){n===void 0&&(n=function(c){return 1-e(1-c)}),i===void 0&&(i=function(c){return c<.5?e(c*2)/2:1-e((1-c)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},a;return be(t,function(s){Ct[s]=Ie[s]=r,Ct[a=s.toLowerCase()]=n;for(var c in r)Ct[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Ct[s+"."+c]=r[c]}),r},ch=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},ga=function o(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),a=r/Ra*(Math.asin(1/i)||0),s=function(h){return h===1?1:i*Math.pow(2,-10*h)*l_((h-a)*r)+1},c=t==="out"?s:t==="in"?function(l){return 1-s(1-l)}:ch(s);return r=Ra/r,c.config=function(l,h){return o(t,l,h)},c},_a=function o(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:ch(n);return i.config=function(r){return o(t,r)},i};be("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var e=t<5?t+1:t;bi(o+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Ct.Linear.easeNone=Ct.none=Ct.Linear.easeIn;bi("Elastic",ga("in"),ga("out"),ga());(function(o,t){var e=1/t,n=2*e,i=2.5*e,r=function(s){return s<e?o*s*s:s<n?o*Math.pow(s-1.5/t,2)+.75:s<i?o*(s-=2.25/t)*s+.9375:o*Math.pow(s-2.625/t,2)+.984375};bi("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);bi("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});bi("Circ",function(o){return-(Ic(1-o*o)-1)});bi("Sine",function(o){return o===1?1:-o_(o*s_)+1});bi("Back",_a("in"),_a("out"),_a());Ct.SteppedEase=Ct.steps=Ie.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,a=1-zt;return function(s){return((i*kr(0,a,s)|0)+r)*n}}};ir.ease=Ct["quad.out"];be("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return so+=o+","+o+"Params,"});var hh=function(t,e){this.id=a_++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Hc,this.set=e?e.getSetter:ho},or=function(){function o(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,sr(this,+e.duration,1,1),this.data=e.data,Jt&&(this._ctx=Jt,Jt.data.push(this)),Dr||De.wake()}var t=o.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,sr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(ar(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Cs(this,n),!r._dp||r.parent||$c(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&an(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===zt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Wc(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Xl(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Xl(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?rr(this._tTime,r)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-zt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?xs(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-zt?0:this._rts,this.totalTime(kr(-this._delay,this._tDur,i),!0),As(this),p_(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ar(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==zt&&(this._tTime-=zt)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&an(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(ye(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?xs(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Mr);var i=Ye;return Ye=n,this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents),this.data!=="nested"&&En(this),Ye=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this.vars.immediateRender?-1:r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,ql(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,ql(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(ke(this,n),ye(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ye(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-zt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-zt,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-zt)},t.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this;return new Promise(function(r){var a=Yt(n)?n:qc,s=function(){var l=i.then;i.then=null,Yt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=l),r(a),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?s():i._prom=s})},t.kill=function(){yr(this)},o}();je(or.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-zt,_prom:0,_ps:!1,_rts:1});var ve=function(o){Rc(t,o);function t(n,i){var r;return n===void 0&&(n={}),r=o.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=ye(n.sortChildren),Bt&&an(n.parent||Bt,yn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&jc(yn(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,a){return wr(0,arguments,this),this},e.from=function(i,r,a){return wr(1,arguments,this),this},e.fromTo=function(i,r,a,s){return wr(2,arguments,this),this},e.set=function(i,r,a){return r.duration=0,r.parent=this,Sr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new ie(i,r,ke(this,a),1),this},e.call=function(i,r,a){return an(this,ie.delayedCall(0,i,r),a)},e.staggerTo=function(i,r,a,s,c,l,h){return a.duration=r,a.stagger=a.stagger||s,a.onComplete=l,a.onCompleteParams=h,a.parent=this,new ie(i,a,ke(this,c)),this},e.staggerFrom=function(i,r,a,s,c,l,h){return a.runBackwards=1,Sr(a).immediateRender=ye(a.immediateRender),this.staggerTo(i,r,a,s,c,l,h)},e.staggerFromTo=function(i,r,a,s,c,l,h,u){return s.startAt=a,Sr(s).immediateRender=ye(s.immediateRender),this.staggerTo(i,r,s,c,l,h,u)},e.render=function(i,r,a){var s=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,h=i<=0?0:oe(i),u=this._zTime<0!=i<0&&(this._initted||!l),d,m,_,f,p,g,y,M,b,x,A,L;if(this!==Bt&&h>c&&i>=0&&(h=c),h!==this._tTime||a||u){if(s!==this._time&&l&&(h+=this._time-s,i+=this._time-s),d=h,b=this._start,M=this._ts,g=!M,u&&(l||(s=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,p=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,a);if(d=oe(h%p),h===c?(f=this._repeat,d=l):(f=~~(h/p),f&&f===h/p&&(d=l,f--),d>l&&(d=l)),x=rr(this._tTime,p),!s&&this._tTime&&x!==f&&(x=f),A&&f&1&&(d=l-d,L=1),f!==x&&!this._lock){var v=A&&x&1,w=v===(A&&f&1);if(f<x&&(v=!v),s=v?0:l,this._lock=1,this.render(s||(L?0:oe(f*p)),r,!l)._lock=0,this._tTime=h,!r&&this.parent&&Xe(this,"onRepeat"),this.vars.repeatRefresh&&!L&&(this.invalidate()._lock=1),s&&s!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,w&&(this._lock=2,s=v?l:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!L&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;lh(this,L)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=x_(this,oe(s),oe(d)),y&&(h-=d-(d=y._start))),this._tTime=h,this._time=d,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&d&&!r&&(Xe(this,"onStart"),this._tTime!==h))return this;if(d>=s&&i>=0)for(m=this._first;m;){if(_=m._next,(m._act||d>=m._start)&&m._ts&&y!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(d-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(d-m._start)*m._ts,r,a),d!==this._time||!this._ts&&!g){y=0,_&&(h+=this._zTime=-zt);break}}m=_}else{a=a||Ye,m=this._last;for(var D=i<0?i:d;m;){if(_=m._prev,(m._act||D<=m._end)&&m._ts&&y!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(D-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(D-m._start)*m._ts,r,a),d!==this._time||!this._ts&&!g){y=0,_&&(h+=this._zTime=D?-zt:zt);break}}m=_}}if(y&&!r&&(this.pause(),y.render(d>=s?0:-zt)._zTime=d>=s?1:-1,this._ts))return this._start=b,As(this),this.render(i,r,a);this._onUpdate&&!r&&Xe(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&s)&&(b===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(h===c&&this._ts>0||!h&&this._ts<0)&&En(this,1),!r&&!(i<0&&!s)&&(h||s||!c)&&(Xe(this,h===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var a=this;if(Tn(r)||(r=ke(this,r,i)),!(i instanceof or)){if(de(i))return i.forEach(function(s){return a.add(s,r)}),this;if(ae(i))return this.addLabel(i,r);if(Yt(i))i=ie.delayedCall(0,i);else return this}return this!==i?an(this,i,r):this},e.getChildren=function(i,r,a,s){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),s===void 0&&(s=-He);for(var c=[],l=this._first;l;)l._start>=s&&(l instanceof ie?r&&c.push(l):(a&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,r,a)))),l=l._next;return c},e.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},e.remove=function(i){return ae(i)?this.removeLabel(i):Yt(i)?this.killTweensOf(i):(Es(this,i),i===this._recent&&(this._recent=this._last),di(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=oe(De.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=ke(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,a){var s=ie.delayedCall(0,r||Lr,a);return s.data="isPause",this._hasPause=1,an(this,s,ke(this,i))},e.removePause=function(i){var r=this._first;for(i=ke(this,i);r;)r._start===i&&r.data==="isPause"&&En(r),r=r._next},e.killTweensOf=function(i,r,a){for(var s=this.getTweensOf(i,a),c=s.length;c--;)Un!==s[c]&&s[c].kill(i,r);return this},e.getTweensOf=function(i,r){for(var a=[],s=We(i),c=this._first,l=Tn(r),h;c;)c instanceof ie?u_(c._targets,s)&&(l?(!Un||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&a.push(c):(h=c.getTweensOf(s,r)).length&&a.push.apply(a,h),c=c._next;return a},e.tweenTo=function(i,r){r=r||{};var a=this,s=ke(a,i),c=r,l=c.startAt,h=c.onStart,u=c.onStartParams,d=c.immediateRender,m,_=ie.to(a,je({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:r.duration||Math.abs((s-(l&&"time"in l?l.time:a._time))/a.timeScale())||zt,onStart:function(){if(a.pause(),!m){var p=r.duration||Math.abs((s-(l&&"time"in l?l.time:a._time))/a.timeScale());_._dur!==p&&sr(_,p,0,1).render(_._time,!0,!0),m=1}h&&h.apply(_,u||[])}},r));return d?_.render(0):_},e.tweenFromTo=function(i,r,a){return this.tweenTo(r,je({startAt:{time:ke(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Yl(this,ke(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Yl(this,ke(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+zt)},e.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var s=this._first,c=this.labels,l;s;)s._start>=a&&(s._start+=i,s._end+=i),s=s._next;if(r)for(l in c)c[l]>=a&&(c[l]+=i);return di(this)},e.invalidate=function(){var i=this._first;for(this._lock=0;i;)i.invalidate(),i=i._next;return o.prototype.invalidate.call(this)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),di(this)},e.totalDuration=function(i){var r=0,a=this,s=a._last,c=He,l,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;s;)l=s._prev,s._dirty&&s.totalDuration(),h=s._start,h>c&&a._sort&&s._ts&&!a._lock?(a._lock=1,an(a,s,h-s._delay,1)._lock=0):c=h,h<0&&s._ts&&(r-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=h/a._ts,a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),c=0),s._end>r&&s._ts&&(r=s._end),s=l;sr(a,a===Bt&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Bt._ts&&(Wc(Bt,xs(i,Bt)),Gc=De.frame),De.frame>=Hl){Hl+=Re.autoSleep||120;var r=Bt._first;if((!r||!r._ts)&&Re.autoSleep&&De._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||De.sleep()}}},t}(or);je(ve.prototype,{_lock:0,_hasPause:0,_forcing:0});var F_=function(t,e,n,i,r,a,s){var c=new Me(this._pt,t,e,0,1,gh,null,r),l=0,h=0,u,d,m,_,f,p,g,y;for(c.b=n,c.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=Pr(i)),a&&(y=[n,i],a(y,t,e),n=y[0],i=y[1]),d=n.match(fa)||[];u=fa.exec(i);)_=u[0],f=i.substring(l,u.index),m?m=(m+1)%5:f.substr(-5)==="rgba("&&(m=1),_!==d[h++]&&(p=parseFloat(d[h-1])||0,c._pt={_next:c._pt,p:f||h===1?f:",",s:p,c:_.charAt(1)==="="?ji(p,_)-p:parseFloat(_)-p,m:m&&m<4?Math.round:0},l=fa.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=s,(zc.test(i)||g)&&(c.e=0),this._pt=c,c},oo=function(t,e,n,i,r,a,s,c,l,h){Yt(i)&&(i=i(r||0,t,a));var u=t[e],d=n!=="get"?n:Yt(u)?l?t[e.indexOf("set")||!Yt(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():u,m=Yt(u)?l?B_:ph:co,_;if(ae(i)&&(~i.indexOf("random(")&&(i=Pr(i)),i.charAt(1)==="="&&(_=ji(d,i)+(ue(d)||0),(_||_===0)&&(i=_))),!h||d!==i||Va)return!isNaN(d*i)&&i!==""?(_=new Me(this._pt,t,e,+d||0,i-(d||0),typeof u=="boolean"?G_:mh,0,m),l&&(_.fp=l),s&&_.modifier(s,this,t),this._pt=_):(!u&&!(e in t)&&io(e,i),F_.call(this,t,e,d,i,m,c||Re.stringFilter,l))},N_=function(t,e,n,i,r){if(Yt(t)&&(t=Tr(t,r,e,n,i)),!dn(t)||t.style&&t.nodeType||de(t)||Fc(t))return ae(t)?Tr(t,r,e,n,i):t;var a={},s;for(s in t)a[s]=Tr(t[s],r,e,n,i);return a},uh=function(t,e,n,i,r,a){var s,c,l,h;if(Le[t]&&(s=new Le[t]).init(r,s.rawVars?e[t]:N_(e[t],i,r,a,n),n,i,a)!==!1&&(n._pt=c=new Me(n._pt,r,t,0,1,s.render,s,0,s.priority),n!==qi))for(l=n._ptLookup[n._targets.indexOf(r)],h=s._props.length;h--;)l[s._props[h]]=c;return s},Un,Va,lo=function o(t,e){var n=t.vars,i=n.ease,r=n.startAt,a=n.immediateRender,s=n.lazy,c=n.onUpdate,l=n.onUpdateParams,h=n.callbackScope,u=n.runBackwards,d=n.yoyoEase,m=n.keyframes,_=n.autoRevert,f=t._dur,p=t._startAt,g=t._targets,y=t.parent,M=y&&y.data==="nested"?y.vars.targets:g,b=t._overwrite==="auto"&&!to,x=t.timeline,A,L,v,w,D,W,tt,z,I,H,j,Z,G;if(x&&(!m||!i)&&(i="none"),t._ease=fi(i,ir.ease),t._yEase=d?oh(fi(d===!0?i:d,ir.ease)):0,d&&t._yoyo&&!t._repeat&&(d=t._yEase,t._yEase=t._ease,t._ease=d),t._from=!x&&!!n.runBackwards,!x||m&&!n.stagger){if(z=g[0]?ui(g[0]).harness:0,Z=z&&n[z.prop],A=_s(n,ro),p&&(e<0&&u&&a&&!_?p.render(-1,!0):p.revert(u&&f?Mr:h_),p._lazy=0),r){if(En(t._startAt=ie.set(g,je({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:ye(s),startAt:null,delay:0,onUpdate:c,onUpdateParams:l,callbackScope:h,stagger:0},r))),e<0&&(Ye||!a&&!_)&&t._startAt.revert(Mr),a&&f&&e<=0){e&&(t._zTime=e);return}}else if(u&&f&&!p){if(e&&(a=!1),v=je({overwrite:!1,data:"isFromStart",lazy:a&&ye(s),immediateRender:a,stagger:0,parent:y},A),Z&&(v[z.prop]=Z),En(t._startAt=ie.set(g,v)),e<0&&(Ye?t._startAt.revert(Mr):t._startAt.render(-1,!0)),t._zTime=e,!a)o(t._startAt,zt);else if(!e)return}for(t._pt=t._ptCache=0,s=f&&ye(s)||s&&!f,L=0;L<g.length;L++){if(D=g[L],tt=D._gsap||ao(g)[L]._gsap,t._ptLookup[L]=H={},Fa[tt.id]&&Gn.length&&gs(),j=M===g?L:M.indexOf(D),z&&(I=new z).init(D,Z||A,t,j,M)!==!1&&(t._pt=w=new Me(t._pt,D,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(F){H[F]=w}),I.priority&&(W=1)),!z||Z)for(v in A)Le[v]&&(I=uh(v,A,t,j,D,M))?I.priority&&(W=1):H[v]=w=oo.call(t,D,v,"get",A[v],j,M,0,n.stringFilter);t._op&&t._op[L]&&t.kill(D,t._op[L]),b&&t._pt&&(Un=t,Bt.killTweensOf(D,H,t.globalTime(e)),G=!t.parent,Un=0),t._pt&&s&&(Fa[tt.id]=1)}W&&_h(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!G,m&&e<=0&&x.render(He,!0,!0)},z_=function(t,e,n,i,r,a,s){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],l,h,u,d;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,d=t._targets.length;d--;){if(l=u[d][e],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==e&&l.fp!==e;)l=l._next;if(!l)return Va=1,t.vars[e]="+=0",lo(t,s),Va=0,1;c.push(l)}for(d=c.length;d--;)h=c[d],l=h._pt||h,l.s=(i||i===0)&&!r?i:l.s+(i||0)+a*l.c,l.c=n-l.s,h.e&&(h.e=jt(n)+ue(h.e)),h.b&&(h.b=l.s+ue(h.b))},U_=function(t,e){var n=t[0]?ui(t[0]).harness:0,i=n&&n.aliases,r,a,s,c;if(!i)return e;r=xi({},e);for(a in i)if(a in r)for(c=i[a].split(","),s=c.length;s--;)r[c[s]]=r[a];return r},k_=function(t,e,n,i){var r=e.ease||i||"power1.inOut",a,s;if(de(e))s=n[t]||(n[t]=[]),e.forEach(function(c,l){return s.push({t:l/(e.length-1)*100,v:c,e:r})});else for(a in e)s=n[a]||(n[a]=[]),a==="ease"||s.push({t:parseFloat(t),v:e[a],e:r})},Tr=function(t,e,n,i,r){return Yt(t)?t.call(e,n,i,r):ae(t)&&~t.indexOf("random(")?Pr(t):t},dh=so+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",fh={};be(dh+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return fh[o]=1});var ie=function(o){Rc(t,o);function t(n,i,r,a){var s;typeof i=="number"&&(r.duration=i,i=r,r=null),s=o.call(this,a?i:Sr(i))||this;var c=s.vars,l=c.duration,h=c.delay,u=c.immediateRender,d=c.stagger,m=c.overwrite,_=c.keyframes,f=c.defaults,p=c.scrollTrigger,g=c.yoyoEase,y=i.parent||Bt,M=(de(n)||Fc(n)?Tn(n[0]):"length"in i)?[n]:We(n),b,x,A,L,v,w,D,W;if(s._targets=M.length?ao(M):ms("GSAP target "+n+" not found. https://greensock.com",!Re.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=m,_||d||ls(l)||ls(h)){if(i=s.vars,b=s.timeline=new ve({data:"nested",defaults:f||{},targets:y&&y.data==="nested"?y.vars.targets:M}),b.kill(),b.parent=b._dp=yn(s),b._start=0,d||ls(l)||ls(h)){if(L=M.length,D=d&&Qc(d),dn(d))for(v in d)~dh.indexOf(v)&&(W||(W={}),W[v]=d[v]);for(x=0;x<L;x++)A=_s(i,fh),A.stagger=0,g&&(A.yoyoEase=g),W&&xi(A,W),w=M[x],A.duration=+Tr(l,yn(s),x,w,M),A.delay=(+Tr(h,yn(s),x,w,M)||0)-s._delay,!d&&L===1&&A.delay&&(s._delay=h=A.delay,s._start+=h,A.delay=0),b.to(w,A,D?D(x,w,M):0),b._ease=Ct.none;b.duration()?l=h=0:s.timeline=0}else if(_){Sr(je(b.vars.defaults,{ease:"none"})),b._ease=fi(_.ease||i.ease||"none");var tt=0,z,I,H;if(de(_))_.forEach(function(j){return b.to(M,j,">")}),b.duration();else{A={};for(v in _)v==="ease"||v==="easeEach"||k_(v,_[v],A,_.easeEach);for(v in A)for(z=A[v].sort(function(j,Z){return j.t-Z.t}),tt=0,x=0;x<z.length;x++)I=z[x],H={ease:I.e,duration:(I.t-(x?z[x-1].t:0))/100*l},H[v]=I.v,b.to(M,H,tt),tt+=H.duration;b.duration()<l&&b.to({},{duration:l-b.duration()})}}l||s.duration(l=b.duration())}else s.timeline=0;return m===!0&&!to&&(Un=yn(s),Bt.killTweensOf(M),Un=0),an(y,yn(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(u||!l&&!_&&s._start===oe(y._time)&&ye(u)&&m_(yn(s))&&y.data!=="nested")&&(s._tTime=-zt,s.render(Math.max(0,-h))),p&&jc(yn(s),p),s}var e=t.prototype;return e.render=function(i,r,a){var s=this._time,c=this._tDur,l=this._dur,h=i<0,u=i>c-zt&&!h?c:i<zt?0:i,d,m,_,f,p,g,y,M,b;if(!l)__(this,i,r,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(d=u,M=this.timeline,this._repeat){if(f=l+this._rDelay,this._repeat<-1&&h)return this.totalTime(f*100+i,r,a);if(d=oe(u%f),u===c?(_=this._repeat,d=l):(_=~~(u/f),_&&_===u/f&&(d=l,_--),d>l&&(d=l)),g=this._yoyo&&_&1,g&&(b=this._yEase,d=l-d),p=rr(this._tTime,f),d===s&&!a&&this._initted)return this._tTime=u,this;_!==p&&(M&&this._yEase&&lh(M,g),this.vars.repeatRefresh&&!g&&!this._lock&&(this._lock=a=1,this.render(oe(f*_),!0).invalidate()._lock=0))}if(!this._initted){if(Zc(this,h?i:d,a,r))return this._tTime=0,this;if(s!==this._time)return this;if(l!==this._dur)return this.render(i,r,a)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(b||this._ease)(d/l),this._from&&(this.ratio=y=1-y),d&&!s&&!r&&(Xe(this,"onStart"),this._tTime!==u))return this;for(m=this._pt;m;)m.r(y,m.d),m=m._next;M&&M.render(i<0?i:!d&&g?-zt:M._dur*M._ease(d/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&Na(this,i,r,a),Xe(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!r&&this.parent&&Xe(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Na(this,i,!0,!0),(i||!l)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&En(this,1),!r&&!(h&&!s)&&(u||s)&&(Xe(this,u===c?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),o.prototype.invalidate.call(this)},e.resetTo=function(i,r,a,s){Dr||De.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),l;return this._initted||lo(this,c),l=this._ease(c/this._dur),z_(this,i,r,a,s,l,c)?this.resetTo(i,r,a,s):(Cs(this,0),this.parent||Yc(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?yr(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Un&&Un.vars.overwrite!==!0)._first||yr(this),this.parent&&a!==this.timeline.totalDuration()&&sr(this,this._dur*this.timeline._tDur/a,0,1),this}var s=this._targets,c=i?We(i):s,l=this._ptLookup,h=this._pt,u,d,m,_,f,p,g;if((!r||r==="all")&&f_(s,c))return r==="all"&&(this._pt=0),yr(this);for(u=this._op=this._op||[],r!=="all"&&(ae(r)&&(f={},be(r,function(y){return f[y]=1}),r=f),r=U_(s,r)),g=s.length;g--;)if(~c.indexOf(s[g])){d=l[g],r==="all"?(u[g]=r,_=d,m={}):(m=u[g]=u[g]||{},_=r);for(f in _)p=d&&d[f],p&&((!("kill"in p.d)||p.d.kill(f)===!0)&&Es(this,p,"_pt"),delete d[f]),m!=="all"&&(m[f]=1)}return this._initted&&!this._pt&&h&&yr(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return wr(1,arguments)},t.delayedCall=function(i,r,a,s){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:s})},t.fromTo=function(i,r,a){return wr(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,a){return Bt.killTweensOf(i,r,a)},t}(or);je(ie.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});be("staggerTo,staggerFrom,staggerFromTo",function(o){ie[o]=function(){var t=new ve,e=Ua.call(arguments,0);return e.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,e)}});var co=function(t,e,n){return t[e]=n},ph=function(t,e,n){return t[e](n)},B_=function(t,e,n,i){return t[e](i.fp,n)},V_=function(t,e,n){return t.setAttribute(e,n)},ho=function(t,e){return Yt(t[e])?ph:eo(t[e])&&t.setAttribute?V_:co},mh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},G_=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},gh=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},uo=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},H_=function(t,e,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(t,e,n),r=a},W_=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Es(this,e,"_pt"):e.dep||(n=1),e=i;return!n},X_=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},_h=function(t){for(var e=t._pt,n,i,r,a;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=r},Me=function(){function o(e,n,i,r,a,s,c,l,h){this.t=n,this.s=r,this.c=a,this.p=i,this.r=s||mh,this.d=c||this,this.set=l||co,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=o.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=X_,this.m=n,this.mt=r,this.tween=i},o}();be(so+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return ro[o]=1});Ie.TweenMax=Ie.TweenLite=ie;Ie.TimelineLite=Ie.TimelineMax=ve;Bt=new ve({sortChildren:!1,defaults:ir,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Re.stringFilter=ah;var lr=[],ds={},q_=[],jl=0,xa=function(t){return(ds[t]||q_).map(function(e){return e()})},Ga=function(){var t=Date.now(),e=[];t-jl>2&&(xa("matchMediaInit"),lr.forEach(function(n){var i=n.queries,r=n.conditions,a,s,c,l;for(s in i)a=Be.matchMedia(i[s]).matches,a&&(c=1),a!==r[s]&&(r[s]=a,l=1);l&&(n.revert(),c&&e.push(n))}),xa("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n)}),jl=t,xa("matchMedia"))},xh=function(){function o(e,n){this.selector=n&&ka(n),this.data=[],this._r=[],this.isReverted=!1,e&&this.add(e)}var t=o.prototype;return t.add=function(n,i,r){Yt(n)&&(r=i,i=n,n=Yt);var a=this,s=function(){var l=Jt,h=a.selector,u;return l&&l!==a&&l.data.push(a),r&&(a.selector=ka(r)),Jt=a,u=i.apply(a,arguments),Yt(u)&&a._r.push(u),Jt=l,a.selector=h,a.isReverted=!1,u};return a.last=s,n===Yt?s(a):n?a[n]=s:s},t.ignore=function(n){var i=Jt;Jt=null,n(this),Jt=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof o?n.push.apply(n,i.getTweens()):i instanceof ie&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?(this.getTweens().map(function(s){return{g:s.globalTime(0),t:s}}).sort(function(s,c){return c.g-s.g||-1}).forEach(function(s){return s.t.revert(n)}),this.data.forEach(function(s){return!(s instanceof or)&&s.revert&&s.revert(n)}),this._r.forEach(function(s){return s(n,r)}),this.isReverted=!0):this.data.forEach(function(s){return s.kill&&s.kill()}),this.clear(),i){var a=lr.indexOf(this);~a&&lr.splice(a,1)}},t.revert=function(n){this.kill(n||{})},o}(),Y_=function(){function o(e){this.contexts=[],this.scope=e}var t=o.prototype;return t.add=function(n,i,r){dn(n)||(n={matches:n});var a=new xh(0,r||this.scope),s=a.conditions={},c,l,h;this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(l in n)l==="all"?h=1:(c=Be.matchMedia(n[l]),c&&(lr.indexOf(a)<0&&lr.push(a),(s[l]=c.matches)&&(h=1),c.addListener?c.addListener(Ga):c.addEventListener("change",Ga)));return h&&i(a),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},o}(),vs={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return C_(i)})},timeline:function(t){return new ve(t)},getTweensOf:function(t,e){return Bt.getTweensOf(t,e)},getProperty:function(t,e,n,i){ae(t)&&(t=We(t)[0]);var r=ui(t||{}).get,a=n?qc:Xc;return n==="native"&&(n=""),t&&(e?a((Le[e]&&Le[e].get||r)(t,e,n,i)):function(s,c,l){return a((Le[s]&&Le[s].get||r)(t,s,c,l))})},quickSetter:function(t,e,n){if(t=We(t),t.length>1){var i=t.map(function(h){return Oe.quickSetter(h,e,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}t=t[0]||{};var a=Le[e],s=ui(t),c=s.harness&&(s.harness.aliases||{})[e]||e,l=a?function(h){var u=new a;qi._pt=0,u.init(t,n?h+n:h,qi,0,[t]),u.render(1,u),qi._pt&&uo(1,qi)}:s.set(t,c);return a?l:function(h){return l(t,c,n?h+n:h,s,1)}},quickTo:function(t,e,n){var i,r=Oe.to(t,xi((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),a=function(c,l,h){return r.resetTo(e,c,l,h)};return a.tween=r,a},isTweening:function(t){return Bt.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=fi(t.ease,ir.ease)),Wl(ir,t||{})},config:function(t){return Wl(Re,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!Le[s]&&!Ie[s]&&ms(e+" effect requires "+s+" plugin.")}),pa[e]=function(s,c,l){return n(We(s),je(c||{},r),l)},a&&(ve.prototype[e]=function(s,c,l){return this.add(pa[e](s,dn(c)?c:(l=c)&&{},this),l)})},registerEase:function(t,e){Ct[t]=fi(e)},parseEase:function(t,e){return arguments.length?fi(t,e):Ct},getById:function(t){return Bt.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new ve(t),i,r;for(n.smoothChildTiming=ye(t.smoothChildTiming),Bt.remove(n),n._dp=0,n._time=n._tTime=Bt._time,i=Bt._first;i;)r=i._next,(e||!(!i._dur&&i instanceof ie&&i.vars.onComplete===i._targets[0]))&&an(n,i,i._start-i._delay),i=r;return an(Bt,n,0),n},context:function(t,e){return t?new xh(t,e):Jt},matchMedia:function(t){return new Y_(t)},matchMediaRefresh:function(){return lr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Ga()},addEventListener:function(t,e){var n=ds[t]||(ds[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=ds[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:T_,wrapYoyo:E_,distribute:Qc,random:eh,snap:th,normalize:w_,getUnit:ue,clamp:y_,splitColor:rh,toArray:We,selector:ka,mapRange:ih,pipe:M_,unitize:S_,interpolate:A_,shuffle:Jc},install:Bc,effects:pa,ticker:De,updateRoot:ve.updateRoot,plugins:Le,globalTimeline:Bt,core:{PropTween:Me,globals:Vc,Tween:ie,Timeline:ve,Animation:or,getCache:ui,_removeLinkedListItem:Es,reverting:function(){return Ye},context:function(t){return t&&Jt&&(Jt.data.push(t),t._ctx=Jt),Jt},suppressOverwrites:function(t){return to=t}}};be("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return vs[o]=ie[o]});De.add(ve.updateRoot);qi=vs.to({},{duration:0});var $_=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},j_=function(t,e){var n=t._targets,i,r,a;for(i in e)for(r=n.length;r--;)a=t._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=$_(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[r],i))},va=function(t,e){return{name:t,rawVars:1,init:function(i,r,a){a._onInit=function(s){var c,l;if(ae(r)&&(c={},be(r,function(h){return c[h]=1}),r=c),e){c={};for(l in r)c[l]=e(r[l]);r=c}j_(s,r)}}}},Oe=vs.registerPlugin({name:"attr",init:function(t,e,n,i,r){var a,s,c;this.tween=n;for(a in e)c=t.getAttribute(a)||"",s=this.add(t,"setAttribute",(c||0)+"",e[a],i,r,0,0,a),s.op=a,s.b=c,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Ye?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},va("roundProps",Ba),va("modifiers"),va("snap",th))||vs;ie.version=ve.version=Oe.version="3.11.1";kc=1;Oc()&&ar();Ct.Power0;Ct.Power1;Ct.Power2;Ct.Power3;Ct.Power4;Ct.Linear;Ct.Quad;Ct.Cubic;Ct.Quart;Ct.Quint;Ct.Strong;Ct.Elastic;Ct.Back;Ct.SteppedEase;Ct.Bounce;Ct.Sine;Ct.Expo;Ct.Circ;/*!
 * CSSPlugin 3.11.1
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Zl,kn,Zi,fo,oi,Kl,po,Z_=function(){return typeof window!="undefined"},An={},ni=180/Math.PI,Ki=Math.PI/180,Vi=Math.atan2,Jl=1e8,mo=/([A-Z])/g,K_=/(left|right|width|margin|padding|x)/i,J_=/[\s,\(]\S/,Sn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ha=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Q_=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},t0=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},e0=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},vh=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},yh=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},n0=function(t,e,n){return t.style[e]=n},i0=function(t,e,n){return t.style.setProperty(e,n)},r0=function(t,e,n){return t._gsap[e]=n},s0=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},a0=function(t,e,n,i,r){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},o0=function(t,e,n,i,r){var a=t._gsap;a[e]=n,a.renderTransform(r,a)},qt="transform",en=qt+"Origin",l0=function(t){var e=this,n=this.target,i=n.style;if(t in An){if(this.tfm=this.tfm||{},t!=="transform"&&(t=Sn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(r){return e.tfm[r]=bn(n,r)}):this.tfm[t]=n._gsap.x?n._gsap[t]:bn(n,t)),this.props.indexOf(qt)>=0)return;n._gsap.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(en,"")),t=qt}i&&this.props.push(t,i[t])},bh=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},c0=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,a;for(r=0;r<t.length;r+=2)t[r+1]?n[t[r]]=t[r+1]:n.removeProperty(t[r].replace(mo,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=po(),r&&!r.isStart&&!n[qt]&&(bh(n),i.uncache=1)}},Mh=function(t,e){var n={target:t,props:[],revert:c0,save:l0};return e&&e.split(",").forEach(function(i){return n.save(i)}),n},Sh,Wa=function(t,e){var n=kn.createElementNS?kn.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):kn.createElement(t);return n.style?n:kn.createElement(t)},un=function o(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(mo,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&o(t,cr(e)||e,1)||""},Ql="O,Moz,ms,Ms,Webkit".split(","),cr=function(t,e,n){var i=e||oi,r=i.style,a=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Ql[a]+t in r););return a<0?null:(a===3?"ms":a>=0?Ql[a]:"")+t},Xa=function(){Z_()&&window.document&&(Zl=window,kn=Zl.document,Zi=kn.documentElement,oi=Wa("div")||{style:{}},Wa("div"),qt=cr(qt),en=qt+"Origin",oi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Sh=!!cr("perspective"),po=Oe.core.reverting,fo=1)},ya=function o(t){var e=Wa("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if(Zi.appendChild(e),e.appendChild(this),this.style.display="block",t)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Zi.removeChild(e),this.style.cssText=r,a},tc=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},wh=function(t){var e;try{e=t.getBBox()}catch{e=ya.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===ya||(e=ya.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+tc(t,["x","cx","x1"])||0,y:+tc(t,["y","cy","y1"])||0,width:0,height:0}:e},Th=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&wh(t))},Rr=function(t,e){if(e){var n=t.style;e in An&&e!==en&&(e=qt),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(mo,"-$1").toLowerCase())):n.removeAttribute(e)}},Bn=function(t,e,n,i,r,a){var s=new Me(t._pt,e,n,0,1,a?yh:vh);return t._pt=s,s.b=i,s.e=r,t._props.push(n),s},ec={deg:1,rad:1,turn:1},h0={grid:1,flex:1},Xn=function o(t,e,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",s=oi.style,c=K_.test(e),l=t.tagName.toLowerCase()==="svg",h=(l?"client":"offset")+(c?"Width":"Height"),u=100,d=i==="px",m=i==="%",_,f,p,g;return i===a||!r||ec[i]||ec[a]?r:(a!=="px"&&!d&&(r=o(t,e,n,"px")),g=t.getCTM&&Th(t),(m||a==="%")&&(An[e]||~e.indexOf("adius"))?(_=g?t.getBBox()[c?"width":"height"]:t[h],jt(m?r/_*u:r/100*_)):(s[c?"width":"height"]=u+(d?a:i),f=~e.indexOf("adius")||i==="em"&&t.appendChild&&!l?t:t.parentNode,g&&(f=(t.ownerSVGElement||{}).parentNode),(!f||f===kn||!f.appendChild)&&(f=kn.body),p=f._gsap,p&&m&&p.width&&c&&p.time===De.time&&!p.uncache?jt(r/p.width*u):((m||a==="%")&&!h0[un(f,"display")]&&(s.position=un(t,"position")),f===t&&(s.position="static"),f.appendChild(oi),_=oi[h],f.removeChild(oi),s.position="absolute",c&&m&&(p=ui(f),p.time=De.time,p.width=f[h]),jt(d?_*r/u:_&&r?u/_*r:0))))},bn=function(t,e,n,i){var r;return fo||Xa(),e in Sn&&e!=="transform"&&(e=Sn[e],~e.indexOf(",")&&(e=e.split(",")[0])),An[e]&&e!=="transform"?(r=Or(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:bs(un(t,en))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=ys[e]&&ys[e](t,e,n)||un(t,e)||Hc(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Xn(t,e,r,n)+n:r},u0=function(t,e,n,i){if(!n||n==="none"){var r=cr(e,t,1),a=r&&un(t,r,1);a&&a!==n?(e=r,n=a):e==="borderColor"&&(n=un(t,"borderTopColor"))}var s=new Me(this._pt,t.style,e,0,1,gh),c=0,l=0,h,u,d,m,_,f,p,g,y,M,b,x;if(s.b=n,s.e=i,n+="",i+="",i==="auto"&&(t.style[e]=i,i=un(t,e)||i,t.style[e]=n),h=[n,i],ah(h),n=h[0],i=h[1],d=n.match(Xi)||[],x=i.match(Xi)||[],x.length){for(;u=Xi.exec(i);)p=u[0],y=i.substring(c,u.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),p!==(f=d[l++]||"")&&(m=parseFloat(f)||0,b=f.substr((m+"").length),p.charAt(1)==="="&&(p=ji(m,p)+b),g=parseFloat(p),M=p.substr((g+"").length),c=Xi.lastIndex-M.length,M||(M=M||Re.units[e]||b,c===i.length&&(i+=M,s.e+=M)),b!==M&&(m=Xn(t,e,f,M)||0),s._pt={_next:s._pt,p:y||l===1?y:",",s:m,c:g-m,m:_&&_<4||e==="zIndex"?Math.round:0});s.c=c<i.length?i.substring(c,i.length):""}else s.r=e==="display"&&i==="none"?yh:vh;return zc.test(i)&&(s.e=0),this._pt=s,s},nc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},d0=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=nc[n]||n,e[1]=nc[i]||i,e.join(" ")},f0=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,a=n._gsap,s,c,l;if(r==="all"||r===!0)i.cssText="",c=1;else for(r=r.split(","),l=r.length;--l>-1;)s=r[l],An[s]&&(c=1,s=s==="transformOrigin"?en:qt),Rr(n,s);c&&(Rr(n,qt),a&&(a.svg&&n.removeAttribute("transform"),Or(n,1),a.uncache=1,bh(i)))}},ys={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var a=t._pt=new Me(t._pt,e,n,0,0,f0);return a.u=i,a.pr=-10,a.tween=r,t._props.push(n),1}}},Ir=[1,0,0,1,0,0],Eh={},Ah=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},ic=function(t){var e=un(t,qt);return Ah(e)?Ir:e.substr(7).match(Nc).map(jt)},go=function(t,e){var n=t._gsap||ui(t),i=t.style,r=ic(t),a,s,c,l;return n.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?Ir:r):(r===Ir&&!t.offsetParent&&t!==Zi&&!n.svg&&(c=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent)&&(l=1,s=t.nextElementSibling,Zi.appendChild(t)),r=ic(t),c?i.display=c:Rr(t,"display"),l&&(s?a.insertBefore(t,s):a?a.appendChild(t):Zi.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},qa=function(t,e,n,i,r,a){var s=t._gsap,c=r||go(t,!0),l=s.xOrigin||0,h=s.yOrigin||0,u=s.xOffset||0,d=s.yOffset||0,m=c[0],_=c[1],f=c[2],p=c[3],g=c[4],y=c[5],M=e.split(" "),b=parseFloat(M[0])||0,x=parseFloat(M[1])||0,A,L,v,w;n?c!==Ir&&(L=m*p-_*f)&&(v=b*(p/L)+x*(-f/L)+(f*y-p*g)/L,w=b*(-_/L)+x*(m/L)-(m*y-_*g)/L,b=v,x=w):(A=wh(t),b=A.x+(~M[0].indexOf("%")?b/100*A.width:b),x=A.y+(~(M[1]||M[0]).indexOf("%")?x/100*A.height:x)),i||i!==!1&&s.smooth?(g=b-l,y=x-h,s.xOffset=u+(g*m+y*f)-g,s.yOffset=d+(g*_+y*p)-y):s.xOffset=s.yOffset=0,s.xOrigin=b,s.yOrigin=x,s.smooth=!!i,s.origin=e,s.originIsAbsolute=!!n,t.style[en]="0px 0px",a&&(Bn(a,s,"xOrigin",l,b),Bn(a,s,"yOrigin",h,x),Bn(a,s,"xOffset",u,s.xOffset),Bn(a,s,"yOffset",d,s.yOffset)),t.setAttribute("data-svg-origin",b+" "+x)},Or=function(t,e){var n=t._gsap||new hh(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,a="px",s="deg",c=getComputedStyle(t),l=un(t,en)||"0",h,u,d,m,_,f,p,g,y,M,b,x,A,L,v,w,D,W,tt,z,I,H,j,Z,G,F,B,et,Q,P,V,K;return h=u=d=f=p=g=y=M=b=0,m=_=1,n.svg=!!(t.getCTM&&Th(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[qt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+c[qt]),i.scale=i.rotate=i.translate="none"),L=go(t,n.svg),n.svg&&(n.uncache?(G=t.getBBox(),l=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",Z=""):Z=!e&&t.getAttribute("data-svg-origin"),qa(t,Z||l,!!Z||n.originIsAbsolute,n.smooth!==!1,L)),x=n.xOrigin||0,A=n.yOrigin||0,L!==Ir&&(W=L[0],tt=L[1],z=L[2],I=L[3],h=H=L[4],u=j=L[5],L.length===6?(m=Math.sqrt(W*W+tt*tt),_=Math.sqrt(I*I+z*z),f=W||tt?Vi(tt,W)*ni:0,y=z||I?Vi(z,I)*ni+f:0,y&&(_*=Math.abs(Math.cos(y*Ki))),n.svg&&(h-=x-(x*W+A*z),u-=A-(x*tt+A*I))):(K=L[6],P=L[7],B=L[8],et=L[9],Q=L[10],V=L[11],h=L[12],u=L[13],d=L[14],v=Vi(K,Q),p=v*ni,v&&(w=Math.cos(-v),D=Math.sin(-v),Z=H*w+B*D,G=j*w+et*D,F=K*w+Q*D,B=H*-D+B*w,et=j*-D+et*w,Q=K*-D+Q*w,V=P*-D+V*w,H=Z,j=G,K=F),v=Vi(-z,Q),g=v*ni,v&&(w=Math.cos(-v),D=Math.sin(-v),Z=W*w-B*D,G=tt*w-et*D,F=z*w-Q*D,V=I*D+V*w,W=Z,tt=G,z=F),v=Vi(tt,W),f=v*ni,v&&(w=Math.cos(v),D=Math.sin(v),Z=W*w+tt*D,G=H*w+j*D,tt=tt*w-W*D,j=j*w-H*D,W=Z,H=G),p&&Math.abs(p)+Math.abs(f)>359.9&&(p=f=0,g=180-g),m=jt(Math.sqrt(W*W+tt*tt+z*z)),_=jt(Math.sqrt(j*j+K*K)),v=Vi(H,j),y=Math.abs(v)>2e-4?v*ni:0,b=V?1/(V<0?-V:V):0),n.svg&&(Z=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Ah(un(t,qt)),Z&&t.setAttribute("transform",Z))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(m*=-1,y+=f<=0?180:-180,f+=f<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=jt(m),n.scaleY=jt(_),n.rotation=jt(f)+s,n.rotationX=jt(p)+s,n.rotationY=jt(g)+s,n.skewX=y+s,n.skewY=M+s,n.transformPerspective=b+a,(n.zOrigin=parseFloat(l.split(" ")[2])||0)&&(i[en]=bs(l)),n.xOffset=n.yOffset=0,n.force3D=Re.force3D,n.renderTransform=n.svg?m0:Sh?Ch:p0,n.uncache=0,n},bs=function(t){return(t=t.split(" "))[0]+" "+t[1]},ba=function(t,e,n){var i=ue(e);return jt(parseFloat(e)+parseFloat(Xn(t,"x",n+"px",i)))+i},p0=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Ch(t,e)},Jn="0deg",_r="0px",Qn=") ",Ch=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,c=n.z,l=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,m=n.skewY,_=n.scaleX,f=n.scaleY,p=n.transformPerspective,g=n.force3D,y=n.target,M=n.zOrigin,b="",x=g==="auto"&&t&&t!==1||g===!0;if(M&&(u!==Jn||h!==Jn)){var A=parseFloat(h)*Ki,L=Math.sin(A),v=Math.cos(A),w;A=parseFloat(u)*Ki,w=Math.cos(A),a=ba(y,a,L*w*-M),s=ba(y,s,-Math.sin(A)*-M),c=ba(y,c,v*w*-M+M)}p!==_r&&(b+="perspective("+p+Qn),(i||r)&&(b+="translate("+i+"%, "+r+"%) "),(x||a!==_r||s!==_r||c!==_r)&&(b+=c!==_r||x?"translate3d("+a+", "+s+", "+c+") ":"translate("+a+", "+s+Qn),l!==Jn&&(b+="rotate("+l+Qn),h!==Jn&&(b+="rotateY("+h+Qn),u!==Jn&&(b+="rotateX("+u+Qn),(d!==Jn||m!==Jn)&&(b+="skew("+d+", "+m+Qn),(_!==1||f!==1)&&(b+="scale("+_+", "+f+Qn),y.style[qt]=b||"translate(0, 0)"},m0=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,c=n.rotation,l=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,m=n.target,_=n.xOrigin,f=n.yOrigin,p=n.xOffset,g=n.yOffset,y=n.forceCSS,M=parseFloat(a),b=parseFloat(s),x,A,L,v,w;c=parseFloat(c),l=parseFloat(l),h=parseFloat(h),h&&(h=parseFloat(h),l+=h,c+=h),c||l?(c*=Ki,l*=Ki,x=Math.cos(c)*u,A=Math.sin(c)*u,L=Math.sin(c-l)*-d,v=Math.cos(c-l)*d,l&&(h*=Ki,w=Math.tan(l-h),w=Math.sqrt(1+w*w),L*=w,v*=w,h&&(w=Math.tan(h),w=Math.sqrt(1+w*w),x*=w,A*=w)),x=jt(x),A=jt(A),L=jt(L),v=jt(v)):(x=u,v=d,A=L=0),(M&&!~(a+"").indexOf("px")||b&&!~(s+"").indexOf("px"))&&(M=Xn(m,"x",a,"px"),b=Xn(m,"y",s,"px")),(_||f||p||g)&&(M=jt(M+_-(_*x+f*L)+p),b=jt(b+f-(_*A+f*v)+g)),(i||r)&&(w=m.getBBox(),M=jt(M+i/100*w.width),b=jt(b+r/100*w.height)),w="matrix("+x+","+A+","+L+","+v+","+M+","+b+")",m.setAttribute("transform",w),y&&(m.style[qt]=w)},g0=function(t,e,n,i,r){var a=360,s=ae(r),c=parseFloat(r)*(s&&~r.indexOf("rad")?ni:1),l=c-i,h=i+l+"deg",u,d;return s&&(u=r.split("_")[1],u==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),u==="cw"&&l<0?l=(l+a*Jl)%a-~~(l/a)*a:u==="ccw"&&l>0&&(l=(l-a*Jl)%a-~~(l/a)*a)),t._pt=d=new Me(t._pt,e,n,i,l,Q_),d.e=h,d.u="deg",t._props.push(n),d},rc=function(t,e){for(var n in e)t[n]=e[n];return t},_0=function(t,e,n){var i=rc({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,s,c,l,h,u,d,m,_;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),a[qt]=e,s=Or(n,1),Rr(n,qt),n.setAttribute("transform",l)):(l=getComputedStyle(n)[qt],a[qt]=e,s=Or(n,1),a[qt]=l);for(c in An)l=i[c],h=s[c],l!==h&&r.indexOf(c)<0&&(m=ue(l),_=ue(h),u=m!==_?Xn(n,c,l,_):parseFloat(l),d=parseFloat(h),t._pt=new Me(t._pt,s,c,u,d-u,Ha),t._pt.u=_||0,t._props.push(c));rc(s,i)};be("padding,margin,Width,Radius",function(o,t){var e="Top",n="Right",i="Bottom",r="Left",a=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(s){return t<2?o+s:"border"+s+o});ys[t>1?"border"+o:o]=function(s,c,l,h,u){var d,m;if(arguments.length<4)return d=a.map(function(_){return bn(s,_,l)}),m=d.join(" "),m.split(d[0]).length===5?d[0]:m;d=(h+"").split(" "),m={},a.forEach(function(_,f){return m[_]=d[f]=d[f]||d[(f-1)/2|0]}),s.init(c,m,u)}});var Lh={name:"css",register:Xa,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var a=this._props,s=t.style,c=n.vars.startAt,l,h,u,d,m,_,f,p,g,y,M,b,x,A,L,v;fo||Xa(),this.styles=this.styles||Mh(t),v=this.styles.props,this.tween=n;for(f in e)if(f!=="autoRound"&&(h=e[f],!(Le[f]&&uh(f,e,n,i,t,r)))){if(m=typeof h,_=ys[f],m==="function"&&(h=h.call(n,i,t,r),m=typeof h),m==="string"&&~h.indexOf("random(")&&(h=Pr(h)),_)_(this,t,f,h,n)&&(L=1);else if(f.substr(0,2)==="--")l=(getComputedStyle(t).getPropertyValue(f)+"").trim(),h+="",Hn.lastIndex=0,Hn.test(l)||(p=ue(l),g=ue(h)),g?p!==g&&(l=Xn(t,f,l,g)+g):p&&(h+=p),this.add(s,"setProperty",l,h,i,r,0,0,f),a.push(f),v.push(f,s[f]);else if(m!=="undefined"){if(c&&f in c?(l=typeof c[f]=="function"?c[f].call(n,i,t,r):c[f],ae(l)&&~l.indexOf("random(")&&(l=Pr(l)),ue(l+"")||(l+=Re.units[f]||ue(bn(t,f))||""),(l+"").charAt(1)==="="&&(l=bn(t,f))):l=bn(t,f),d=parseFloat(l),y=m==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),u=parseFloat(h),f in Sn&&(f==="autoAlpha"&&(d===1&&bn(t,"visibility")==="hidden"&&u&&(d=0),v.push("visibility",s.visibility),Bn(this,s,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),f!=="scale"&&f!=="transform"&&(f=Sn[f],~f.indexOf(",")&&(f=f.split(",")[0]))),M=f in An,M){if(this.styles.save(f),b||(x=t._gsap,x.renderTransform&&!e.parseTransform||Or(t,e.parseTransform),A=e.smoothOrigin!==!1&&x.smooth,b=this._pt=new Me(this._pt,s,qt,0,1,x.renderTransform,x,0,-1),b.dep=1),f==="scale")this._pt=new Me(this._pt,x,"scaleY",x.scaleY,(y?ji(x.scaleY,y+u):u)-x.scaleY||0,Ha),this._pt.u=0,a.push("scaleY",f),f+="X";else if(f==="transformOrigin"){v.push(en,s[en]),h=d0(h),x.svg?qa(t,h,0,A,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==x.zOrigin&&Bn(this,x,"zOrigin",x.zOrigin,g),Bn(this,s,f,bs(l),bs(h)));continue}else if(f==="svgOrigin"){qa(t,h,1,A,0,this);continue}else if(f in Eh){g0(this,x,f,d,y?ji(d,y+h):h);continue}else if(f==="smoothOrigin"){Bn(this,x,"smooth",x.smooth,h);continue}else if(f==="force3D"){x[f]=h;continue}else if(f==="transform"){_0(this,h,t);continue}}else f in s||(f=cr(f)||f);if(M||(u||u===0)&&(d||d===0)&&!J_.test(h)&&f in s)p=(l+"").substr((d+"").length),u||(u=0),g=ue(h)||(f in Re.units?Re.units[f]:p),p!==g&&(d=Xn(t,f,l,g)),this._pt=new Me(this._pt,M?x:s,f,d,(y?ji(d,y+u):u)-d,!M&&(g==="px"||f==="zIndex")&&e.autoRound!==!1?e0:Ha),this._pt.u=g||0,p!==g&&g!=="%"&&(this._pt.b=l,this._pt.r=t0);else if(f in s)u0.call(this,t,f,l,y?y+h:h);else if(f in t)this.add(t,f,l||t[f],y?y+h:h,i,r);else{io(f,h);continue}M||v.push(f,s[f]),a.push(f)}}L&&_h(this)},render:function(t,e){if(e.tween._time||!po())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:bn,aliases:Sn,getSetter:function(t,e,n){var i=Sn[e];return i&&i.indexOf(",")<0&&(e=i),e in An&&e!==en&&(t._gsap.x||bn(t,"x"))?n&&Kl===n?e==="scale"?s0:r0:(Kl=n||{})&&(e==="scale"?a0:o0):t.style&&!eo(t.style[e])?n0:~e.indexOf("-")?i0:ho(t,e)},core:{_removeProperty:Rr,_getMatrix:go}};Oe.utils.checkPrefix=cr;Oe.core.getStyleSaver=Mh;(function(o,t,e,n){var i=be(o+","+t+","+e,function(r){An[r]=1});be(t,function(r){Re.units[r]="deg",Eh[r]=1}),Sn[i[13]]=o+","+t,be(n,function(r){var a=r.split(":");Sn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");be("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Re.units[o]="px"});Oe.registerPlugin(Lh);var rn=Oe.registerPlugin(Lh)||Oe;rn.core.Tween;var x0=`precision highp float;
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

float snoise(vec3 v){ 
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  
  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
  vec3 x3 = x0 - 1. + 3.0 * C.xxx;

  i = mod(i, 289.0 ); 
  vec4 p = permute( permute( permute( 
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

  float n_ = 1.0/7.0; 
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                dot(p2,x2), dot(p3,x3) ) );
}
varying vec2 vUv;

uniform  highp float uTime;
uniform bool animate;

const highp float NOISE_FREQ_LOW = 0.09;
const highp float NOISE_FREQ_HIGH = 0.14;
const highp float NOISE_AMP_LOW = 0.09;
const highp float NOISE_AMP_HIGH = 0.14;

void main(){
  vec3 pos=position;
  
  vUv=uv;
  
  
  

  float noiseFreq = mix(NOISE_FREQ_LOW, NOISE_FREQ_HIGH, float(animate));
  float noiseAmp = mix(NOISE_AMP_LOW, NOISE_AMP_HIGH, float(animate));

  vec3 noisePos=vec3(pos.x*noiseFreq+uTime,pos.y,pos.z);
  
  
  
  
    
  
  
  
  
  
  pos.z+=snoise(noisePos)*noiseAmp;
  gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);
}`,v0=`precision mediump float;

varying vec2 vUv;

uniform sampler2D uCurrTex;
uniform sampler2D uNextTex;
uniform sampler2D uDisp;
uniform vec2 uMeshSize;
uniform vec2 uImageSize;
uniform float uTime;
uniform float uProg;

vec2 backgroundCoverUv(vec2 uv, vec2 canvasSize, vec2 textureSize){
  vec2 ratio = vec2(
    min((canvasSize.x / canvasSize.y) / (textureSize.x / textureSize.y), 1.0),
    min((canvasSize.y / canvasSize.x) / (textureSize.y / textureSize.x), 1.0)
  );

  vec2 uvWithRatio = uv * ratio;

  return vec2(
    uvWithRatio.x + (1.0 - ratio.x) * 0.5,
    uvWithRatio.y  + (1.0 - ratio.y) * 0.5
  );
}

void main() {
  vec2 uv = vUv;
  vec2 texUv = backgroundCoverUv(uv, uMeshSize, uImageSize);

  vec4 disp = texture2D(uDisp, uv);

  float wipe = step(1.0 - uv.x, uProg);
  float scale = 0.7 + 0.3 * uProg;

  vec4 currTex = texture2D(uCurrTex, texUv + vec2(disp.r * uProg, 0.));
  vec4 nextTex = texture2D(uNextTex, texUv * scale + vec2(0.15) * (1. - uProg));

  vec4 finalTex = mix(currTex, nextTex, wipe);

  gl_FragColor = finalTex;
}`;const y0=()=>`
        <nav id="nav">
            <button id="home">About</button>
            <button id="experiment">Experiments</button> 
        </nav> 
    `,b0=()=>`

        <ul id="links">
            <a href ="https://www.instagram.com/cyrstem/"target="_blank"><img src="insta.png"></a>
                <a href ="http://ec.linkedin.com/in/jacobohz" target="_blank"><img src="in.png"></a>
            <a href ="https://github.com/cyrstem/" target="_blank"><img src="git.png"></a>
        </ul>
    `,M0=()=>`
      <main>
        <div id="content" class="content">
          <h3 class="warning">Full experience on Desktop</h3>
          <p>I'm <b>Jacob</b> a <b>Creative Developer</b> and <b>Front-End Developer</b> based in Quito - Ecuador, specialized in building custom digital or physical experiences.</p> 
          <p><b>Self-taught</b> developer, <b>fast learner</b> that works with<b> WebGL, JS, C++, OpenGL, GLSL </b>and recently curious about <b>Machine Learning.</b></p>
            <div>
              <p>I have collaborated with:</p>
              <ul id ="sites">
              <li>
              <a href="https://activetheory.net/" target="_blank">
                <span>Active Theory</span> 
                <span> -- WebGL Developer</span>
              </a>
            </li>
              <li>
              <a href="https://visualgoodness.com/" target="_blank">
                <span>Visual Goodness </span> 
                <span> -- WebGL Developer</span>
              </a>
              </li>
              <li>
              <a href="https://smartco.com.ec" target="_blank"> 
                <span>Smartco </span>
                <span> -- Unity Developer</span>
              </a>
            </li>
              <li>
                <a href="https://www.yaesta.com" target="_blank">
                  <span> YaEsta </span>
                  <span> -- Front-end  & Designer</span> 
                </a>
              </li>
              </ul>
          </div>
      <p>Contact me at <b>cyrstem[at]gmail[dot]com</b></p>  
    </div>
    </main>
      `,S0=()=>`
    <main>  
        <div id="ex">
            <a class="nav_item" href="#"><h1>Moving Photon</h1></a>
            <a class="nav_item" href="#"><h1>Glitch Machine</h1></a>
            <a class="nav_item" href="#"> <h1>Noizu</h1></a>
            <a class="nav_item" href="#"><h1>YaEsta.com</h1></a>
        </div>
        <div class="infoFile">
            <article class="info">
            <p>I collaborated on developing the Virtual Experience for
                <a href="https://friendred.studio/2021/10/07/moving-photon/" target="_blank">Moving Photon</a> an
                interactive installation/performance
                created by installation artist<a href="https://friendred.studio" target="_blank"> Friendred Peng.</a>
                Participation in Moving Photon can be in 5 different ways, including a Phantom performance,
                interactive installation, interactive performance,interactive performance with EEG and a <a
                    href="https://movingphoton.friendred.studio/" target="_blank"> remote performance.</a>
            </p>
            </article>
            <article class="info ">
                <p>A custom Glitch App build for<a href="https://www.instagram.com/jenna___marsh/" target=" _blank">  Jenna
                Marsh</a>, it lets you play with a image applying different filters and export the resulting image for
                printing</p>
            </article>
            <article class="info ">
                <p>Custom build a Audio player for Linux and Mac. Building a light and simple player for linux, 
                based on my old love to sonique and winamp. I do miss those programs when UI and UX were actually interesting and different.</p>
            </article>
            <article class="info ">
                <p>I Develop a Physical and fully interactive installation with video Mapping and custom software projected to the tallest building in Quito, for the launch of the e-commerce site
                YaEsta.com. As a way to avoid tradicional publicity, i pitch to the owners this sort of engagement as a new way to call up attention of the public. i was also part of the Tech team managing the platform until it was acquire by other company. <a href ="https://www.youtube.com/watch?v=YHZd0TxPMkY&t=1s&ab_channel=UPDRONEInteligenciaAeron%C3%A1utica" target=" _blank">YaEsta Pacman</a></p>
            </article>
        </div>
    </main>
    `;var w0=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Ph={exports:{}};(function(o,t){(function(e,n){o.exports=n()})(w0,function(){var e=document,n=e.createTextNode.bind(e);function i(P,V,K){P.style.setProperty(V,K)}function r(P,V){return P.appendChild(V)}function a(P,V,K,k){var mt=e.createElement("span");return V&&(mt.className=V),K&&(!k&&mt.setAttribute("data-"+V,K),mt.textContent=K),P&&r(P,mt)||mt}function s(P,V){return P.getAttribute("data-"+V)}function c(P,V){return!P||P.length==0?[]:P.nodeName?[P]:[].slice.call(P[0].nodeName?P:(V||e).querySelectorAll(P))}function l(P){for(var V=[];P--;)V[P]=[];return V}function h(P,V){P&&P.some(V)}function u(P){return function(V){return P[V]}}function d(P,V,K){var k="--"+V,mt=k+"-index";h(K,function(ct,ft){Array.isArray(ct)?h(ct,function(it){i(it,mt,ft)}):i(ct,mt,ft)}),i(P,k+"-total",K.length)}var m={};function _(P,V,K){var k=K.indexOf(P);if(k==-1)K.unshift(P),h(m[P].depends,function(ct){_(ct,P,K)});else{var mt=K.indexOf(V);K.splice(k,1),K.splice(mt,0,P)}return K}function f(P,V,K,k){return{by:P,depends:V,key:K,split:k}}function p(P){return _(P,0,[]).map(u(m))}function g(P){m[P.by]=P}function y(P,V,K,k,mt){P.normalize();var ct=[],ft=document.createDocumentFragment();k&&ct.push(P.previousSibling);var it=[];return c(P.childNodes).some(function(vt){if(vt.tagName&&!vt.hasChildNodes()){it.push(vt);return}if(vt.childNodes&&vt.childNodes.length){it.push(vt),ct.push.apply(ct,y(vt,V,K,k,mt));return}var xt=vt.wholeText||"",gt=xt.trim();gt.length&&(xt[0]===" "&&it.push(n(" ")),h(gt.split(K),function(Vt,te){te&&mt&&it.push(a(ft,"whitespace"," ",mt));var Gt=a(ft,V,Vt);ct.push(Gt),it.push(Gt)}),xt[xt.length-1]===" "&&it.push(n(" ")))}),h(it,function(vt){r(ft,vt)}),P.innerHTML="",r(P,ft),ct}var M=0;function b(P,V){for(var K in V)P[K]=V[K];return P}var x="words",A=f(x,M,"word",function(P){return y(P,"word",/\s+/,0,1)}),L="chars",v=f(L,[x],"char",function(P,V,K){var k=[];return h(K[x],function(mt,ct){k.push.apply(k,y(mt,"char","",V.whitespace&&ct))}),k});function w(P){P=P||{};var V=P.key;return c(P.target||"[data-splitting]").map(function(K){var k=K["\u{1F34C}"];if(!P.force&&k)return k;k=K["\u{1F34C}"]={el:K};var mt=p(P.by||s(K,"splitting")||L),ct=b({},P);return h(mt,function(ft){if(ft.split){var it=ft.by,vt=(V?"-"+V:"")+ft.key,xt=ft.split(K,ct,k);vt&&d(K,vt,xt),k[it]=xt,K.classList.add(it)}}),K.classList.add("splitting"),k})}function D(P){P=P||{};var V=P.target=a();return V.innerHTML=P.content,w(P),V.outerHTML}w.html=D,w.add=g;function W(P,V,K){var k=c(V.matching||P.children,P),mt={};return h(k,function(ct){var ft=Math.round(ct[K]);(mt[ft]||(mt[ft]=[])).push(ct)}),Object.keys(mt).map(Number).sort(tt).map(u(mt))}function tt(P,V){return P-V}var z=f("lines",[x],"line",function(P,V,K){return W(P,{matching:K[x]},"offsetTop")}),I=f("items",M,"item",function(P,V){return c(V.matching||P.children,P)}),H=f("rows",M,"row",function(P,V){return W(P,V,"offsetTop")}),j=f("cols",M,"col",function(P,V){return W(P,V,"offsetLeft")}),Z=f("grid",["rows","cols"]),G="layout",F=f(G,M,M,function(P,V){var K=V.rows=+(V.rows||s(P,"rows")||1),k=V.columns=+(V.columns||s(P,"columns")||1);if(V.image=V.image||s(P,"image")||P.currentSrc||P.src,V.image){var mt=c("img",P)[0];V.image=mt&&(mt.currentSrc||mt.src)}V.image&&i(P,"background-image","url("+V.image+")");for(var ct=K*k,ft=[],it=a(M,"cell-grid");ct--;){var vt=a(it,"cell");a(vt,"cell-inner"),ft.push(vt)}return r(P,it),ft}),B=f("cellRows",[G],"row",function(P,V,K){var k=V.rows,mt=l(k);return h(K[G],function(ct,ft,it){mt[Math.floor(ft/(it.length/k))].push(ct)}),mt}),et=f("cellColumns",[G],"col",function(P,V,K){var k=V.columns,mt=l(k);return h(K[G],function(ct,ft){mt[ft%k].push(ct)}),mt}),Q=f("cells",["cellRows","cellColumns"],"cell",function(P,V,K){return K[G]});return g(A),g(v),g(z),g(I),g(H),g(j),g(Z),g(F),g(B),g(et),g(Q),w})})(Ph);var sc=Ph.exports;const ac=(o,t)=>Math.floor(Math.random()*(t-o+1))+o;class T0{constructor(t){le(this,"position",-1);le(this,"cells",[]);this.position=t}}class E0{constructor(t,{position:e,previousCellPosition:n}={}){le(this,"DOM",{el:null});le(this,"position",-1);le(this,"previousCellPosition",-1);le(this,"original");le(this,"state");le(this,"color");le(this,"originalColor");le(this,"cache");this.DOM.el=t,this.original=this.DOM.el.innerHTML,this.state=this.original,this.color=this.originalColor=getComputedStyle(document.documentElement).getPropertyValue("--color-text"),this.position=e,this.previousCellPosition=n}set(t){this.state=t,this.DOM.el.innerHTML=this.state}}class A0{constructor(t){le(this,"DOM",{el:null});le(this,"lines",[]);le(this,"lettersAndSymbols",["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","!","@","#","$","&","*","(",")","-","_","+","=","/","[","]","{","}",";",":","<",">",",","0","1","2","3","4","5","6","7","8","9"]);le(this,"effects",{fx1:()=>this.fx1(),fx2:()=>this.fx2(),fx3:()=>this.fx3(),fx4:()=>this.fx4(),fx5:()=>this.fx5(),fx6:()=>this.fx6()});le(this,"totalChars",0);this.DOM.el=t;const e=sc({target:this.DOM.el,by:"lines"});e.forEach(n=>sc({target:n.words}));for(const[n,i]of e[0].lines.entries()){const r=new T0(n);let a=[],s=0;for(const c of i)for(const l of[...c.querySelectorAll(".char")])a.push(new E0(l,{position:s,previousCellPosition:s===0?-1:s-1})),++s;r.cells=a,this.lines.push(r),this.totalChars+=s}}clearCells(){for(const t of this.lines)for(const e of t.cells)e.set("&nbsp;")}getRandomChar(){return this.lettersAndSymbols[Math.floor(Math.random()*this.lettersAndSymbols.length)]}fx1(){let e=0;this.clearCells();const n=(i,r,a=0)=>{r.cache=r.state,a===45-1?(r.set(r.original),++e,e===this.totalChars&&(this.isAnimating=!1)):r.position===0?r.set(a<9?["*","-","'",'"'][Math.floor(Math.random()*4)]:this.getRandomChar()):r.set(i.cells[r.previousCellPosition].cache),r.cache!="&nbsp;"&&++a,a<45&&setTimeout(()=>n(i,r,a),15)};for(const i of this.lines)for(const r of i.cells)setTimeout(()=>n(i,r),(i.position+1)*200)}fx2(){let e=0;const n=(i,r,a=0)=>{a===20-1?(r.set(r.original),r.DOM.el.style.opacity=0,setTimeout(()=>{r.DOM.el.style.opacity=1},300),++e,e===this.totalChars&&(this.isAnimating=!1)):r.set(this.getRandomChar()),++a,a<20&&setTimeout(()=>n(i,r,a),40)};for(const i of this.lines)for(const r of i.cells)setTimeout(()=>n(i,r),(r.position+1)*30)}fx3(){let e=0;this.clearCells();const n=(i,r,a=0)=>{a===10-1?(r.set(r.original),++e,e===this.totalChars&&(this.isAnimating=!1)):r.set(this.getRandomChar()),++a,a<10&&setTimeout(()=>n(i,r,a),80)};for(const i of this.lines)for(const r of i.cells)setTimeout(()=>n(i,r),ac(0,2e3))}fx4(){let e=0;this.clearCells();const n=(i,r,a=0)=>{r.cache=r.state,a===30-1?(r.set(r.original),++e,e===this.totalChars&&(this.isAnimating=!1)):r.position===0?r.set(["*",":"][Math.floor(Math.random()*2)]):r.set(i.cells[r.previousCellPosition].cache),r.cache!="&nbsp;"&&++a,a<30&&setTimeout(()=>n(i,r,a),15)};for(const i of this.lines)for(const r of i.cells)setTimeout(()=>n(i,r),Math.abs(this.lines.length/2-i.position)*400)}fx5(){let e=0;this.clearCells();const n=(i,r,a=0)=>{r.cache={state:r.state,color:r.color},a===30-1?(r.color=r.originalColor,r.DOM.el.style.color=r.color,r.set(r.original),++e,e===this.totalChars&&(this.isAnimating=!1)):r.position===0?(r.color=["#3e775d","#61dca3","#61b3dc"][Math.floor(Math.random()*3)],r.DOM.el.style.color=r.color,r.set(a<9?["*","-","'",'"'][Math.floor(Math.random()*4)]:this.getRandomChar())):(r.set(i.cells[r.previousCellPosition].cache.state),r.color=i.cells[r.previousCellPosition].cache.color,r.DOM.el.style.color=r.color),r.cache.state!="&nbsp;"&&++a,a<30&&setTimeout(()=>n(i,r,a),10)};for(const i of this.lines)for(const r of i.cells)setTimeout(()=>n(i,r),(i.position+1)*200)}fx6(){let e=0;const n=(i,r,a=0)=>{r.cache={state:r.state,color:r.color},a===15-1?(r.set(r.original),r.color=r.originalColor,r.DOM.el.style.color=r.color,++e,e===this.totalChars&&(this.isAnimating=!1)):(r.set(this.getRandomChar()),r.color=["#2b4539","#61dca3","#61b3dc"][Math.floor(Math.random()*3)],r.DOM.el.style.color=r.color),++a,a<15&&setTimeout(()=>n(i,r,a),ac(30,110))};for(const i of this.lines)for(const r of i.cells)setTimeout(()=>n(i,r),(i.position+1)*80)}trigger(t="fx1"){!(t in this.effects)||this.isAnimating||(this.isAnimating=!0,this.effects[t]())}}class C0{constructor(){this.about=!1,this.portafolio=!1,this.initHTML(),this.addListeners()}addListeners(){document.getElementById("nav").addEventListener("click",this.onClick.bind(this))}initHTML(){document.getElementById("ui").innerHTML=y0(),document.getElementById("contact").innerHTML=b0()}onClick(t){t.preventDefault();const e=t.target.id;if(e!=="home"){this.portafolio=!1,document.getElementById("terminal").innerHTML=S0(),this.about=!0;return}if(e!=="Portafolio"){this.about=!1,document.getElementById("terminal").innerHTML=M0(),this.portafolio=!0,this.effect();return}}effect(){const t=document.querySelector(".content");this.ts=new A0(t),this.ts.trigger("fx3")}}class L0{constructor(t){this.c=console.log.bind(document),this.c("wintermute.."),this.debug=new r_,this.ui=new C0,this.scene=new Fg,this.container=t.dom,this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.renderer=new Lc,this.renderer.antialias=!0,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(this.width,this.height),this.renderer.setClearColor(15658734,1),this.container.appendChild(this.renderer.domElement),this.camera=new Pe(45,window.innerWidth/window.innerHeight,.001,1e3),this.camera.position.set(0,0,35),this.time=0,this.clock=new Hg,this.fog=new fs(16777215),this.scene.fog=new fs(this.scene.background,3,50),this.target=new wt,this.mouse=new wt,this.raycaster=new Wg,this.config(),this.env(),this.addListener(),this.addObjects(),this.resize(),this.render()}config(){this.debug.active&&(this.controls=new Xg(this.camera,this.renderer.domElement),this.debugFolder=this.debug.ui.addFolder("material"),this.paramsColor={color:"#000000",emissive:"#000000",specular:"#000000"},this.debugFolder.addColor(this.paramsColor,"color").onChange(()=>{this.update()}),this.debugFolder.addColor(this.paramsColor,"emissive").onChange(()=>{this.update()}),this.debugFolder.addColor(this.paramsColor,"specular").onChange(()=>{this.update()})),this.textureUrls=["insta-0.png","insta-1.png","insta-2.png","insta-3.png"],this.state={animating:!1,current:0}}loadTexturesAndAddToScene(t){const e=new Pc(()=>{this.material.uniforms.uCurrTex.value=this.textures[0]}),n=new kg(e);this.textures=[],this.second=new Wi;for(let r=0;r<t.length;r++){const a=n.load(t[r]);n.crossOrigin=!0,this.textures.push(a)}this.plane=new ws(6,6,12,12),this.material=new Wn({uniforms:{uCurrTex:{value:0},uNextTex:{value:0},uDisp:{value:this.textures[1]},uMeshSize:{value:[6,6]},uImageSize:{value:[0,0]},uTime:{value:0},uProg:{value:0},animate:{value:!1}},vertexShader:x0,fragmentShader:v0});const i=new ln(this.plane,this.material);i.position.set(3.2,0,0),this.second.visible=!1,this.second.add(i),this.scene.add(this.second)}env(){this.light1=new Nl(16777215,1,0),this.light1.position.set(.2,0),this.scene.add(this.light1),this.light2=new Nl(16777215,1,0),this.light2.position.set(0,0,0),this.scene.add(this.light2)}addListener(){window.addEventListener("resize",this.resize.bind(this)),window.addEventListener("mousemove",this.onMouseMove.bind(this)),window.addEventListener("click",this.view.bind(this)),window.addEventListener("onTouch",this.onTouch.bind(this))}switchTextures(t){if(this.state.animating)return;this.state.animating=!0,this.navItems[this.state.current].classList.remove("item--current"),this.navItems[t].classList.add("item--current"),this.textItems[this.state.current].classList.remove("show__info"),this.textItems[t].classList.add("show__info"),this.state.current=t,this.material.uniforms.uNextTex.value=this.textures[t],this.material.uniforms.animate.value=!0,rn.timeline({onComplete:()=>{this.state.animating=!1,this.material.uniforms.uCurrTex.value=this.textures[t],this.material.uniforms.animate.value=!1}}).fromTo(this.material.uniforms.uProg,{value:0},{value:1,duration:2,ease:"expo.inOut"},0).fromTo(this.textItems[t],{opacity:0},{opacity:1,duration:.5,ease:"power2.in"},0)}view(t){this.navItems=document.querySelectorAll(".nav_item"),this.textItems=document.querySelectorAll(".info"),this.portafolio=this.ui.portafolio,this.about=this.ui.about,this.portafolio&&(this.main.visible=!0,rn.to(this.geos.position,{x:10,y:-1,z:0,ease:"power2.in",delay:.4,onComplete:this.reposition()}),this.second.visible=!1,this.material.uniforms.uNextTex.value=this.textures[0],rn.to(this.second.position,{x:0,y:0,z:-10,ease:"power2.out",delay:.2})),this.about&&(this.main.visible=!1,rn.to(this.geos.position,{x:0,y:0,z:0,ease:"power2.out",delay:.4,onComplete:this.reposition()}),this.second.visible=!0,rn.to(this.second.position,{x:-.5,y:0,z:5,ease:"power2.in",delay:.1})),this.navItems.forEach((e,n)=>{e.addEventListener("click",()=>{this.switchTextures(n)})})}resize(){this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.renderer.setSize(this.width,this.height),this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix()}reposition(){this.elements=this.geos.children,this.elements.forEach(t=>{rn.to(t.rotation,{x:(Math.random()-.07)*10*Math.random(),y:(Math.random()-.07)*10*Math.random(),z:(Math.random()-.07)*10*Math.random(),ease:"power2.out",delay:.4})})}addObjects(){this.geos=new pe,this.phongMat=new Ng({color:0,emissive:0,specular:0}),this.geom=new hr(1,1,1);for(let t=0;t<250;t++)this.mesh=new ln(this.geom,this.phongMat),this.mesh.position.x=(Math.random()-.5)*10*Math.random(),this.mesh.position.y=(Math.random()-.5)*10*Math.random(),this.mesh.position.z=(Math.random()-.5)*10*Math.random(),this.geos.add(this.mesh);this.main=new Wi,this.main.add(this.geos),this.scene.add(this.main),this.loadTexturesAndAddToScene(this.textureUrls)}onMouseMove(t){this.mouse.x=t.clientX/this.width*2-1,this.mouse.y=-(t.clientY/this.height)*2+1,this.target.x=(t.x-this.mouse.x)*.009,this.target.y=-(t.y-this.mouse.y)*.009,this.geos.rotation.x+=.005*(this.target.y-this.geos.rotation.x),this.geos.rotation.y+=.005*(this.target.x-this.geos.rotation.y),rn.to(this.geos.rotation,{duration:1.3,z:-1.5,yoyo:!0}),this.raycaster.setFromCamera(this.mouse,this.camera),this.cubeElements=this.scene.children[2].children,this.intersects=this.raycaster.intersectObjects(this.cubeElements,!0);for(var e=0;e<this.intersects.length;e++)rn.to(this.intersects[e].object.position,{duration:2,x:(Math.random()-.5)*-10*Math.random(),z:(Math.random()-.5)*-10*Math.random(),y:(Math.random()-.5)*-10*Math.random(),ease:"power2.out"});rn.to(this.camera.position,{y:0,z:15,ease:"power3.InOut",delay:1})}onTouch(t){t.touches[0]}update(){this.mesh.material.color.set(this.paramsColor.color),this.mesh.material.color.set(this.paramsColor.emissive),this.mesh.material.specular.set(this.paramsColor.specular)}render(){this.time+=.05,this.geos.rotation.x+=.003,requestAnimationFrame(this.render.bind(this)),this.material.uniforms.uTime.value=this.clock.getElapsedTime(),this.renderer.render(this.scene,this.camera)}}window.onload=o=>{new L0({dom:document.getElementById("container")}),kh()};
//# sourceMappingURL=index.19e457d9.js.map
