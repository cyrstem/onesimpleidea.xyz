var w1=Object.defineProperty;var S1=(c,t,e)=>t in c?w1(c,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):c[t]=e;var ln=(c,t,e)=>(S1(c,typeof t!="symbol"?t+"":t,e),e);const T1=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}};T1();function E1(){if(window.navigator.userAgent.toLowerCase().indexOf("chrome")>-1){const c=[`
 %c ->> created by cyrstem 
`,"border: 1px solid #000;color: #fff; background: #171717; padding:5px 0;"];window.console.log.apply(console,c)}else window.console&&window.console.log("-created by cyrstem  -")}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bh="144",Bs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ks={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},A1=0,fp=1,C1=2,Qm=1,L1=2,Za=3,fa=0,hi=1,Lr=2,Ir=0,oa=1,dp=2,pp=3,mp=4,P1=5,na=100,D1=101,R1=102,gp=103,_p=104,I1=200,O1=201,F1=202,N1=203,tg=204,eg=205,z1=206,U1=207,B1=208,k1=209,G1=210,V1=0,W1=1,H1=2,Ku=3,X1=4,q1=5,$1=6,Y1=7,Mh=0,Z1=1,K1=2,ar=0,J1=1,j1=2,Q1=3,tw=4,ew=5,ng=300,da=301,pa=302,Ju=303,ju=304,Gl=306,Qu=1e3,Ti=1001,th=1002,An=1003,vp=1004,xp=1005,ai=1006,nw=1007,Vl=1008,ds=1009,iw=1010,rw=1011,ig=1012,sw=1013,is=1014,rs=1015,ro=1016,aw=1017,ow=1018,la=1020,lw=1021,cw=1022,Ii=1023,uw=1024,hw=1025,os=1026,ma=1027,fw=1028,dw=1029,pw=1030,mw=1031,gw=1033,au=33776,ou=33777,lu=33778,cu=33779,yp=35840,bp=35841,Mp=35842,wp=35843,_w=36196,Sp=37492,Tp=37496,Ep=37808,Ap=37809,Cp=37810,Lp=37811,Pp=37812,Dp=37813,Rp=37814,Ip=37815,Op=37816,Fp=37817,Np=37818,zp=37819,Up=37820,Bp=37821,kp=36492,ps=3e3,Ne=3001,vw=3200,xw=3201,rg=0,yw=1,er="srgb",ss="srgb-linear",uu=7680,bw=519,Gp=35044,Vp="300 es",eh=1035;class vs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,l=r.length;s<l;s++)r[s].call(this,t);t.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hu=Math.PI/180,Wp=180/Math.PI;function po(){const c=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[c&255]+cn[c>>8&255]+cn[c>>16&255]+cn[c>>24&255]+"-"+cn[t&255]+cn[t>>8&255]+"-"+cn[t>>16&15|64]+cn[t>>24&255]+"-"+cn[e&63|128]+cn[e>>8&255]+"-"+cn[e>>16&255]+cn[e>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function Cn(c,t,e){return Math.max(t,Math.min(e,c))}function Mw(c,t){return(c%t+t)%t}function fu(c,t,e){return(1-e)*c+e*t}function Hp(c){return(c&c-1)===0&&c!==0}function nh(c){return Math.pow(2,Math.floor(Math.log(c)/Math.LN2))}function al(c,t){switch(t.constructor){case Float32Array:return c;case Uint16Array:return c/65535;case Uint8Array:return c/255;case Int16Array:return Math.max(c/32767,-1);case Int8Array:return Math.max(c/127,-1);default:throw new Error("Invalid component type.")}}function kn(c,t){switch(t.constructor){case Float32Array:return c;case Uint16Array:return Math.round(c*65535);case Uint8Array:return Math.round(c*255);case Int16Array:return Math.round(c*32767);case Int8Array:return Math.round(c*127);default:throw new Error("Invalid component type.")}}class Xt{constructor(t=0,e=0){Xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,l=this.y-t.y;return this.x=s*n-l*r+t.x,this.y=s*r+l*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oi{constructor(){oi.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,r,s,l,o,f,h){const d=this.elements;return d[0]=t,d[1]=r,d[2]=o,d[3]=e,d[4]=s,d[5]=f,d[6]=n,d[7]=l,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,l=n[0],o=n[3],f=n[6],h=n[1],d=n[4],p=n[7],m=n[2],x=n[5],b=n[8],g=r[0],_=r[3],y=r[6],T=r[1],L=r[4],A=r[7],w=r[2],O=r[5],z=r[8];return s[0]=l*g+o*T+f*w,s[3]=l*_+o*L+f*O,s[6]=l*y+o*A+f*z,s[1]=h*g+d*T+p*w,s[4]=h*_+d*L+p*O,s[7]=h*y+d*A+p*z,s[2]=m*g+x*T+b*w,s[5]=m*_+x*L+b*O,s[8]=m*y+x*A+b*z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],l=t[4],o=t[5],f=t[6],h=t[7],d=t[8];return e*l*d-e*o*h-n*s*d+n*o*f+r*s*h-r*l*f}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],l=t[4],o=t[5],f=t[6],h=t[7],d=t[8],p=d*l-o*h,m=o*f-d*s,x=h*s-l*f,b=e*p+n*m+r*x;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/b;return t[0]=p*g,t[1]=(r*h-d*n)*g,t[2]=(o*n-r*l)*g,t[3]=m*g,t[4]=(d*e-r*f)*g,t[5]=(r*s-o*e)*g,t[6]=x*g,t[7]=(n*f-h*e)*g,t[8]=(l*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,l,o){const f=Math.cos(s),h=Math.sin(s);return this.set(n*f,n*h,-n*(f*l+h*o)+l+t,-r*h,r*f,-r*(-h*l+f*o)+o+e,0,0,1),this}scale(t,e){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=e,n[4]*=e,n[7]*=e,this}rotate(t){const e=Math.cos(t),n=Math.sin(t),r=this.elements,s=r[0],l=r[3],o=r[6],f=r[1],h=r[4],d=r[7];return r[0]=e*s+n*f,r[3]=e*l+n*h,r[6]=e*o+n*d,r[1]=-n*s+e*f,r[4]=-n*l+e*h,r[7]=-n*o+e*d,this}translate(t,e){const n=this.elements;return n[0]+=t*n[2],n[3]+=t*n[5],n[6]+=t*n[8],n[1]+=e*n[2],n[4]+=e*n[5],n[7]+=e*n[8],this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}function sg(c){for(let t=c.length-1;t>=0;--t)if(c[t]>=65535)return!0;return!1}function so(c){return document.createElementNS("http://www.w3.org/1999/xhtml",c)}function ls(c){return c<.04045?c*.0773993808:Math.pow(c*.9478672986+.0521327014,2.4)}function Cl(c){return c<.0031308?c*12.92:1.055*Math.pow(c,.41666)-.055}const du={[er]:{[ss]:ls},[ss]:{[er]:Cl}},bi={legacyMode:!0,get workingColorSpace(){return ss},set workingColorSpace(c){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(c,t,e){if(this.legacyMode||t===e||!t||!e)return c;if(du[t]&&du[t][e]!==void 0){const n=du[t][e];return c.r=n(c.r),c.g=n(c.g),c.b=n(c.b),c}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(c,t){return this.convert(c,this.workingColorSpace,t)},toWorkingColorSpace:function(c,t){return this.convert(c,t,this.workingColorSpace)}},ag={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ye={r:0,g:0,b:0},Mi={h:0,s:0,l:0},ol={h:0,s:0,l:0};function pu(c,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?c+(t-c)*6*e:e<1/2?t:e<2/3?c+(t-c)*6*(2/3-e):c}function ll(c,t){return t.r=c.r,t.g=c.g,t.b=c.b,t}class me{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=er){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,bi.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=ss){return this.r=t,this.g=e,this.b=n,bi.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=ss){if(t=Mw(t,1),e=Cn(e,0,1),n=Cn(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,l=2*n-s;this.r=pu(l,s,t+1/3),this.g=pu(l,s,t),this.b=pu(l,s,t-1/3)}return bi.toWorkingColorSpace(this,r),this}setStyle(t,e=er){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let s;const l=r[1],o=r[2];switch(l){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,bi.toWorkingColorSpace(this,e),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,bi.toWorkingColorSpace(this,e),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const f=parseFloat(s[1])/360,h=parseFloat(s[2])/100,d=parseFloat(s[3])/100;return n(s[4]),this.setHSL(f,h,d,e)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],l=s.length;if(l===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,bi.toWorkingColorSpace(this,e),this;if(l===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,bi.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=er){const n=ag[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ls(t.r),this.g=ls(t.g),this.b=ls(t.b),this}copyLinearToSRGB(t){return this.r=Cl(t.r),this.g=Cl(t.g),this.b=Cl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=er){return bi.fromWorkingColorSpace(ll(this,Ye),t),Cn(Ye.r*255,0,255)<<16^Cn(Ye.g*255,0,255)<<8^Cn(Ye.b*255,0,255)<<0}getHexString(t=er){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ss){bi.fromWorkingColorSpace(ll(this,Ye),e);const n=Ye.r,r=Ye.g,s=Ye.b,l=Math.max(n,r,s),o=Math.min(n,r,s);let f,h;const d=(o+l)/2;if(o===l)f=0,h=0;else{const p=l-o;switch(h=d<=.5?p/(l+o):p/(2-l-o),l){case n:f=(r-s)/p+(r<s?6:0);break;case r:f=(s-n)/p+2;break;case s:f=(n-r)/p+4;break}f/=6}return t.h=f,t.s=h,t.l=d,t}getRGB(t,e=ss){return bi.fromWorkingColorSpace(ll(this,Ye),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=er){return bi.fromWorkingColorSpace(ll(this,Ye),t),t!==er?`color(${t} ${Ye.r} ${Ye.g} ${Ye.b})`:`rgb(${Ye.r*255|0},${Ye.g*255|0},${Ye.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(Mi),Mi.h+=t,Mi.s+=e,Mi.l+=n,this.setHSL(Mi.h,Mi.s,Mi.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Mi),t.getHSL(ol);const n=fu(Mi.h,ol.h,e),r=fu(Mi.s,ol.s,e),s=fu(Mi.l,ol.l,e);return this.setHSL(n,r,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}me.NAMES=ag;let Gs;class og{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Gs===void 0&&(Gs=so("canvas")),Gs.width=t.width,Gs.height=t.height;const n=Gs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Gs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const e=so("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let l=0;l<s.length;l++)s[l]=ls(s[l]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ls(e[n]/255)*255):e[n]=ls(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class lg{constructor(t=null){this.isSource=!0,this.uuid=po(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let l=0,o=r.length;l<o;l++)r[l].isDataTexture?s.push(mu(r[l].image)):s.push(mu(r[l]))}else s=mu(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function mu(c){return typeof HTMLImageElement!="undefined"&&c instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&c instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&c instanceof ImageBitmap?og.getDataURL(c):c.data?{data:Array.from(c.data),width:c.width,height:c.height,type:c.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ww=0;class di extends vs{constructor(t=di.DEFAULT_IMAGE,e=di.DEFAULT_MAPPING,n=Ti,r=Ti,s=ai,l=Vl,o=Ii,f=ds,h=1,d=ps){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ww++}),this.uuid=po(),this.name="",this.source=new lg(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=l,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=f,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oi,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ng)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qu:t.x=t.x-Math.floor(t.x);break;case Ti:t.x=t.x<0?0:1;break;case th:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qu:t.y=t.y-Math.floor(t.y);break;case Ti:t.y=t.y<0?0:1;break;case th:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}di.DEFAULT_IMAGE=null;di.DEFAULT_MAPPING=ng;class Ce{constructor(t=0,e=0,n=0,r=1){Ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,l=t.elements;return this.x=l[0]*e+l[4]*n+l[8]*r+l[12]*s,this.y=l[1]*e+l[5]*n+l[9]*r+l[13]*s,this.z=l[2]*e+l[6]*n+l[10]*r+l[14]*s,this.w=l[3]*e+l[7]*n+l[11]*r+l[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const f=t.elements,h=f[0],d=f[4],p=f[8],m=f[1],x=f[5],b=f[9],g=f[2],_=f[6],y=f[10];if(Math.abs(d-m)<.01&&Math.abs(p-g)<.01&&Math.abs(b-_)<.01){if(Math.abs(d+m)<.1&&Math.abs(p+g)<.1&&Math.abs(b+_)<.1&&Math.abs(h+x+y-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const L=(h+1)/2,A=(x+1)/2,w=(y+1)/2,O=(d+m)/4,z=(p+g)/4,S=(b+_)/4;return L>A&&L>w?L<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(L),r=O/n,s=z/n):A>w?A<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),n=O/r,s=S/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=z/s,r=S/s),this.set(n,r,s,e),this}let T=Math.sqrt((_-b)*(_-b)+(p-g)*(p-g)+(m-d)*(m-d));return Math.abs(T)<.001&&(T=1),this.x=(_-b)/T,this.y=(p-g)/T,this.z=(m-d)/T,this.w=Math.acos((h+x+y-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ms extends vs{constructor(t,e,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e);const r={width:t,height:e,depth:1};this.texture=new di(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ai,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new lg(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cg extends di{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=An,this.minFilter=An,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sw extends di{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=An,this.minFilter=An,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gs{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,l,o){let f=n[r+0],h=n[r+1],d=n[r+2],p=n[r+3];const m=s[l+0],x=s[l+1],b=s[l+2],g=s[l+3];if(o===0){t[e+0]=f,t[e+1]=h,t[e+2]=d,t[e+3]=p;return}if(o===1){t[e+0]=m,t[e+1]=x,t[e+2]=b,t[e+3]=g;return}if(p!==g||f!==m||h!==x||d!==b){let _=1-o;const y=f*m+h*x+d*b+p*g,T=y>=0?1:-1,L=1-y*y;if(L>Number.EPSILON){const w=Math.sqrt(L),O=Math.atan2(w,y*T);_=Math.sin(_*O)/w,o=Math.sin(o*O)/w}const A=o*T;if(f=f*_+m*A,h=h*_+x*A,d=d*_+b*A,p=p*_+g*A,_===1-o){const w=1/Math.sqrt(f*f+h*h+d*d+p*p);f*=w,h*=w,d*=w,p*=w}}t[e]=f,t[e+1]=h,t[e+2]=d,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,r,s,l){const o=n[r],f=n[r+1],h=n[r+2],d=n[r+3],p=s[l],m=s[l+1],x=s[l+2],b=s[l+3];return t[e]=o*b+d*p+f*x-h*m,t[e+1]=f*b+d*m+h*p-o*x,t[e+2]=h*b+d*x+o*m-f*p,t[e+3]=d*b-o*p-f*m-h*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,r=t._y,s=t._z,l=t._order,o=Math.cos,f=Math.sin,h=o(n/2),d=o(r/2),p=o(s/2),m=f(n/2),x=f(r/2),b=f(s/2);switch(l){case"XYZ":this._x=m*d*p+h*x*b,this._y=h*x*p-m*d*b,this._z=h*d*b+m*x*p,this._w=h*d*p-m*x*b;break;case"YXZ":this._x=m*d*p+h*x*b,this._y=h*x*p-m*d*b,this._z=h*d*b-m*x*p,this._w=h*d*p+m*x*b;break;case"ZXY":this._x=m*d*p-h*x*b,this._y=h*x*p+m*d*b,this._z=h*d*b+m*x*p,this._w=h*d*p-m*x*b;break;case"ZYX":this._x=m*d*p-h*x*b,this._y=h*x*p+m*d*b,this._z=h*d*b-m*x*p,this._w=h*d*p+m*x*b;break;case"YZX":this._x=m*d*p+h*x*b,this._y=h*x*p+m*d*b,this._z=h*d*b-m*x*p,this._w=h*d*p-m*x*b;break;case"XZY":this._x=m*d*p-h*x*b,this._y=h*x*p-m*d*b,this._z=h*d*b+m*x*p,this._w=h*d*p+m*x*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],l=e[1],o=e[5],f=e[9],h=e[2],d=e[6],p=e[10],m=n+o+p;if(m>0){const x=.5/Math.sqrt(m+1);this._w=.25/x,this._x=(d-f)*x,this._y=(s-h)*x,this._z=(l-r)*x}else if(n>o&&n>p){const x=2*Math.sqrt(1+n-o-p);this._w=(d-f)/x,this._x=.25*x,this._y=(r+l)/x,this._z=(s+h)/x}else if(o>p){const x=2*Math.sqrt(1+o-n-p);this._w=(s-h)/x,this._x=(r+l)/x,this._y=.25*x,this._z=(f+d)/x}else{const x=2*Math.sqrt(1+p-n-o);this._w=(l-r)/x,this._x=(s+h)/x,this._y=(f+d)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Cn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,l=t._w,o=e._x,f=e._y,h=e._z,d=e._w;return this._x=n*d+l*o+r*h-s*f,this._y=r*d+l*f+s*o-n*h,this._z=s*d+l*h+n*f-r*o,this._w=l*d-n*o-r*f-s*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,l=this._w;let o=l*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=l,this._x=n,this._y=r,this._z=s,this;const f=1-o*o;if(f<=Number.EPSILON){const x=1-e;return this._w=x*l+e*this._w,this._x=x*n+e*this._x,this._y=x*r+e*this._y,this._z=x*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(f),d=Math.atan2(h,o),p=Math.sin((1-e)*d)/h,m=Math.sin(e*d)/h;return this._w=l*p+this._w*m,this._x=n*p+this._x*m,this._y=r*p+this._y*m,this._z=s*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(r),n*Math.sin(s),n*Math.cos(s),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(t=0,e=0,n=0){X.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xp.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,l=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*l,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*l,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*l,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,l=t.y,o=t.z,f=t.w,h=f*e+l*r-o*n,d=f*n+o*e-s*r,p=f*r+s*n-l*e,m=-s*e-l*n-o*r;return this.x=h*f+m*-s+d*-o-p*-l,this.y=d*f+m*-l+p*-s-h*-o,this.z=p*f+m*-o+h*-l-d*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,l=e.x,o=e.y,f=e.z;return this.x=r*f-s*o,this.y=s*l-n*f,this.z=n*o-r*l,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return gu.copy(this).projectOnVector(t),this.sub(gu)}reflect(t){return this.sub(gu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Cn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gu=new X,Xp=new gs;class mo{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,r=1/0,s=-1/0,l=-1/0,o=-1/0;for(let f=0,h=t.length;f<h;f+=3){const d=t[f],p=t[f+1],m=t[f+2];d<e&&(e=d),p<n&&(n=p),m<r&&(r=m),d>s&&(s=d),p>l&&(l=p),m>o&&(o=m)}return this.min.set(e,n,r),this.max.set(s,l,o),this}setFromBufferAttribute(t){let e=1/0,n=1/0,r=1/0,s=-1/0,l=-1/0,o=-1/0;for(let f=0,h=t.count;f<h;f++){const d=t.getX(f),p=t.getY(f),m=t.getZ(f);d<e&&(e=d),p<n&&(n=p),m<r&&(r=m),d>s&&(s=d),p>l&&(l=p),m>o&&(o=m)}return this.min.set(e,n,r),this.max.set(s,l,o),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Yr.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let l=0,o=s.count;l<o;l++)Yr.fromBufferAttribute(s,l).applyMatrix4(t.matrixWorld),this.expandByPoint(Yr)}else n.boundingBox===null&&n.computeBoundingBox(),_u.copy(n.boundingBox),_u.applyMatrix4(t.matrixWorld),this.union(_u);const r=t.children;for(let s=0,l=r.length;s<l;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Yr),Yr.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ha),cl.subVectors(this.max,Ha),Vs.subVectors(t.a,Ha),Ws.subVectors(t.b,Ha),Hs.subVectors(t.c,Ha),Mr.subVectors(Ws,Vs),wr.subVectors(Hs,Ws),Zr.subVectors(Vs,Hs);let e=[0,-Mr.z,Mr.y,0,-wr.z,wr.y,0,-Zr.z,Zr.y,Mr.z,0,-Mr.x,wr.z,0,-wr.x,Zr.z,0,-Zr.x,-Mr.y,Mr.x,0,-wr.y,wr.x,0,-Zr.y,Zr.x,0];return!vu(e,Vs,Ws,Hs,cl)||(e=[1,0,0,0,1,0,0,0,1],!vu(e,Vs,Ws,Hs,cl))?!1:(ul.crossVectors(Mr,wr),e=[ul.x,ul.y,ul.z],vu(e,Vs,Ws,Hs,cl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return Yr.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(Yr).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ki),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ki=[new X,new X,new X,new X,new X,new X,new X,new X],Yr=new X,_u=new mo,Vs=new X,Ws=new X,Hs=new X,Mr=new X,wr=new X,Zr=new X,Ha=new X,cl=new X,ul=new X,Kr=new X;function vu(c,t,e,n,r){for(let s=0,l=c.length-3;s<=l;s+=3){Kr.fromArray(c,s);const o=r.x*Math.abs(Kr.x)+r.y*Math.abs(Kr.y)+r.z*Math.abs(Kr.z),f=t.dot(Kr),h=e.dot(Kr),d=n.dot(Kr);if(Math.max(-Math.max(f,h,d),Math.min(f,h,d))>o)return!1}return!0}const Tw=new mo,qp=new X,hl=new X,xu=new X;class wh{constructor(t=new X,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Tw.setFromPoints(t).getCenter(n);let r=0;for(let s=0,l=t.length;s<l;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){xu.subVectors(t,this.center);const e=xu.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.add(xu.multiplyScalar(r/n)),this.radius+=r}return this}union(t){return this.center.equals(t.center)===!0?hl.set(0,0,1).multiplyScalar(t.radius):hl.subVectors(t.center,this.center).normalize().multiplyScalar(t.radius),this.expandByPoint(qp.copy(t.center).add(hl)),this.expandByPoint(qp.copy(t.center).sub(hl)),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ji=new X,yu=new X,fl=new X,Sr=new X,bu=new X,dl=new X,Mu=new X;class ug{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ji)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ji.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ji.copy(this.direction).multiplyScalar(e).add(this.origin),Ji.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){yu.copy(t).add(e).multiplyScalar(.5),fl.copy(e).sub(t).normalize(),Sr.copy(this.origin).sub(yu);const s=t.distanceTo(e)*.5,l=-this.direction.dot(fl),o=Sr.dot(this.direction),f=-Sr.dot(fl),h=Sr.lengthSq(),d=Math.abs(1-l*l);let p,m,x,b;if(d>0)if(p=l*f-o,m=l*o-f,b=s*d,p>=0)if(m>=-b)if(m<=b){const g=1/d;p*=g,m*=g,x=p*(p+l*m+2*o)+m*(l*p+m+2*f)+h}else m=s,p=Math.max(0,-(l*m+o)),x=-p*p+m*(m+2*f)+h;else m=-s,p=Math.max(0,-(l*m+o)),x=-p*p+m*(m+2*f)+h;else m<=-b?(p=Math.max(0,-(-l*s+o)),m=p>0?-s:Math.min(Math.max(-s,-f),s),x=-p*p+m*(m+2*f)+h):m<=b?(p=0,m=Math.min(Math.max(-s,-f),s),x=m*(m+2*f)+h):(p=Math.max(0,-(l*s+o)),m=p>0?s:Math.min(Math.max(-s,-f),s),x=-p*p+m*(m+2*f)+h);else m=l>0?-s:s,p=Math.max(0,-(l*m+o)),x=-p*p+m*(m+2*f)+h;return n&&n.copy(this.direction).multiplyScalar(p).add(this.origin),r&&r.copy(fl).multiplyScalar(m).add(yu),x}intersectSphere(t,e){Ji.subVectors(t.center,this.origin);const n=Ji.dot(this.direction),r=Ji.dot(Ji)-n*n,s=t.radius*t.radius;if(r>s)return null;const l=Math.sqrt(s-r),o=n-l,f=n+l;return o<0&&f<0?null:o<0?this.at(f,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,l,o,f;const h=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,m=this.origin;return h>=0?(n=(t.min.x-m.x)*h,r=(t.max.x-m.x)*h):(n=(t.max.x-m.x)*h,r=(t.min.x-m.x)*h),d>=0?(s=(t.min.y-m.y)*d,l=(t.max.y-m.y)*d):(s=(t.max.y-m.y)*d,l=(t.min.y-m.y)*d),n>l||s>r||((s>n||n!==n)&&(n=s),(l<r||r!==r)&&(r=l),p>=0?(o=(t.min.z-m.z)*p,f=(t.max.z-m.z)*p):(o=(t.max.z-m.z)*p,f=(t.min.z-m.z)*p),n>f||o>r)||((o>n||n!==n)&&(n=o),(f<r||r!==r)&&(r=f),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Ji)!==null}intersectTriangle(t,e,n,r,s){bu.subVectors(e,t),dl.subVectors(n,t),Mu.crossVectors(bu,dl);let l=this.direction.dot(Mu),o;if(l>0){if(r)return null;o=1}else if(l<0)o=-1,l=-l;else return null;Sr.subVectors(this.origin,t);const f=o*this.direction.dot(dl.crossVectors(Sr,dl));if(f<0)return null;const h=o*this.direction.dot(bu.cross(Sr));if(h<0||f+h>l)return null;const d=-o*Sr.dot(Mu);return d<0?null:this.at(d/l,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,r,s,l,o,f,h,d,p,m,x,b,g,_){const y=this.elements;return y[0]=t,y[4]=e,y[8]=n,y[12]=r,y[1]=s,y[5]=l,y[9]=o,y[13]=f,y[2]=h,y[6]=d,y[10]=p,y[14]=m,y[3]=x,y[7]=b,y[11]=g,y[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Xs.setFromMatrixColumn(t,0).length(),s=1/Xs.setFromMatrixColumn(t,1).length(),l=1/Xs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*l,e[9]=n[9]*l,e[10]=n[10]*l,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,l=Math.cos(n),o=Math.sin(n),f=Math.cos(r),h=Math.sin(r),d=Math.cos(s),p=Math.sin(s);if(t.order==="XYZ"){const m=l*d,x=l*p,b=o*d,g=o*p;e[0]=f*d,e[4]=-f*p,e[8]=h,e[1]=x+b*h,e[5]=m-g*h,e[9]=-o*f,e[2]=g-m*h,e[6]=b+x*h,e[10]=l*f}else if(t.order==="YXZ"){const m=f*d,x=f*p,b=h*d,g=h*p;e[0]=m+g*o,e[4]=b*o-x,e[8]=l*h,e[1]=l*p,e[5]=l*d,e[9]=-o,e[2]=x*o-b,e[6]=g+m*o,e[10]=l*f}else if(t.order==="ZXY"){const m=f*d,x=f*p,b=h*d,g=h*p;e[0]=m-g*o,e[4]=-l*p,e[8]=b+x*o,e[1]=x+b*o,e[5]=l*d,e[9]=g-m*o,e[2]=-l*h,e[6]=o,e[10]=l*f}else if(t.order==="ZYX"){const m=l*d,x=l*p,b=o*d,g=o*p;e[0]=f*d,e[4]=b*h-x,e[8]=m*h+g,e[1]=f*p,e[5]=g*h+m,e[9]=x*h-b,e[2]=-h,e[6]=o*f,e[10]=l*f}else if(t.order==="YZX"){const m=l*f,x=l*h,b=o*f,g=o*h;e[0]=f*d,e[4]=g-m*p,e[8]=b*p+x,e[1]=p,e[5]=l*d,e[9]=-o*d,e[2]=-h*d,e[6]=x*p+b,e[10]=m-g*p}else if(t.order==="XZY"){const m=l*f,x=l*h,b=o*f,g=o*h;e[0]=f*d,e[4]=-p,e[8]=h*d,e[1]=m*p+g,e[5]=l*d,e[9]=x*p-b,e[2]=b*p-x,e[6]=o*d,e[10]=g*p+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ew,t,Aw)}lookAt(t,e,n){const r=this.elements;return Gn.subVectors(t,e),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),Tr.crossVectors(n,Gn),Tr.lengthSq()===0&&(Math.abs(n.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),Tr.crossVectors(n,Gn)),Tr.normalize(),pl.crossVectors(Gn,Tr),r[0]=Tr.x,r[4]=pl.x,r[8]=Gn.x,r[1]=Tr.y,r[5]=pl.y,r[9]=Gn.y,r[2]=Tr.z,r[6]=pl.z,r[10]=Gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,l=n[0],o=n[4],f=n[8],h=n[12],d=n[1],p=n[5],m=n[9],x=n[13],b=n[2],g=n[6],_=n[10],y=n[14],T=n[3],L=n[7],A=n[11],w=n[15],O=r[0],z=r[4],S=r[8],D=r[12],G=r[1],nt=r[5],_t=r[9],Y=r[13],W=r[2],et=r[6],ct=r[10],ot=r[14],j=r[3],q=r[7],J=r[11],pt=r[15];return s[0]=l*O+o*G+f*W+h*j,s[4]=l*z+o*nt+f*et+h*q,s[8]=l*S+o*_t+f*ct+h*J,s[12]=l*D+o*Y+f*ot+h*pt,s[1]=d*O+p*G+m*W+x*j,s[5]=d*z+p*nt+m*et+x*q,s[9]=d*S+p*_t+m*ct+x*J,s[13]=d*D+p*Y+m*ot+x*pt,s[2]=b*O+g*G+_*W+y*j,s[6]=b*z+g*nt+_*et+y*q,s[10]=b*S+g*_t+_*ct+y*J,s[14]=b*D+g*Y+_*ot+y*pt,s[3]=T*O+L*G+A*W+w*j,s[7]=T*z+L*nt+A*et+w*q,s[11]=T*S+L*_t+A*ct+w*J,s[15]=T*D+L*Y+A*ot+w*pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],l=t[1],o=t[5],f=t[9],h=t[13],d=t[2],p=t[6],m=t[10],x=t[14],b=t[3],g=t[7],_=t[11],y=t[15];return b*(+s*f*p-r*h*p-s*o*m+n*h*m+r*o*x-n*f*x)+g*(+e*f*x-e*h*m+s*l*m-r*l*x+r*h*d-s*f*d)+_*(+e*h*p-e*o*x-s*l*p+n*l*x+s*o*d-n*h*d)+y*(-r*o*d-e*f*p+e*o*m+r*l*p-n*l*m+n*f*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],l=t[4],o=t[5],f=t[6],h=t[7],d=t[8],p=t[9],m=t[10],x=t[11],b=t[12],g=t[13],_=t[14],y=t[15],T=p*_*h-g*m*h+g*f*x-o*_*x-p*f*y+o*m*y,L=b*m*h-d*_*h-b*f*x+l*_*x+d*f*y-l*m*y,A=d*g*h-b*p*h+b*o*x-l*g*x-d*o*y+l*p*y,w=b*p*f-d*g*f-b*o*m+l*g*m+d*o*_-l*p*_,O=e*T+n*L+r*A+s*w;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/O;return t[0]=T*z,t[1]=(g*m*s-p*_*s-g*r*x+n*_*x+p*r*y-n*m*y)*z,t[2]=(o*_*s-g*f*s+g*r*h-n*_*h-o*r*y+n*f*y)*z,t[3]=(p*f*s-o*m*s-p*r*h+n*m*h+o*r*x-n*f*x)*z,t[4]=L*z,t[5]=(d*_*s-b*m*s+b*r*x-e*_*x-d*r*y+e*m*y)*z,t[6]=(b*f*s-l*_*s-b*r*h+e*_*h+l*r*y-e*f*y)*z,t[7]=(l*m*s-d*f*s+d*r*h-e*m*h-l*r*x+e*f*x)*z,t[8]=A*z,t[9]=(b*p*s-d*g*s-b*n*x+e*g*x+d*n*y-e*p*y)*z,t[10]=(l*g*s-b*o*s+b*n*h-e*g*h-l*n*y+e*o*y)*z,t[11]=(d*o*s-l*p*s-d*n*h+e*p*h+l*n*x-e*o*x)*z,t[12]=w*z,t[13]=(d*g*r-b*p*r+b*n*m-e*g*m-d*n*_+e*p*_)*z,t[14]=(b*o*r-l*g*r-b*n*f+e*g*f+l*n*_-e*o*_)*z,t[15]=(l*p*r-d*o*r+d*n*f-e*p*f-l*n*m+e*o*m)*z,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,l=t.x,o=t.y,f=t.z,h=s*l,d=s*o;return this.set(h*l+n,h*o-r*f,h*f+r*o,0,h*o+r*f,d*o+n,d*f-r*l,0,h*f-r*o,d*f+r*l,s*f*f+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,l){return this.set(1,n,s,0,t,1,l,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,l=e._y,o=e._z,f=e._w,h=s+s,d=l+l,p=o+o,m=s*h,x=s*d,b=s*p,g=l*d,_=l*p,y=o*p,T=f*h,L=f*d,A=f*p,w=n.x,O=n.y,z=n.z;return r[0]=(1-(g+y))*w,r[1]=(x+A)*w,r[2]=(b-L)*w,r[3]=0,r[4]=(x-A)*O,r[5]=(1-(m+y))*O,r[6]=(_+T)*O,r[7]=0,r[8]=(b+L)*z,r[9]=(_-T)*z,r[10]=(1-(m+g))*z,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Xs.set(r[0],r[1],r[2]).length();const l=Xs.set(r[4],r[5],r[6]).length(),o=Xs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],wi.copy(this);const h=1/s,d=1/l,p=1/o;return wi.elements[0]*=h,wi.elements[1]*=h,wi.elements[2]*=h,wi.elements[4]*=d,wi.elements[5]*=d,wi.elements[6]*=d,wi.elements[8]*=p,wi.elements[9]*=p,wi.elements[10]*=p,e.setFromRotationMatrix(wi),n.x=s,n.y=l,n.z=o,this}makePerspective(t,e,n,r,s,l){const o=this.elements,f=2*s/(e-t),h=2*s/(n-r),d=(e+t)/(e-t),p=(n+r)/(n-r),m=-(l+s)/(l-s),x=-2*l*s/(l-s);return o[0]=f,o[4]=0,o[8]=d,o[12]=0,o[1]=0,o[5]=h,o[9]=p,o[13]=0,o[2]=0,o[6]=0,o[10]=m,o[14]=x,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,r,s,l){const o=this.elements,f=1/(e-t),h=1/(n-r),d=1/(l-s),p=(e+t)*f,m=(n+r)*h,x=(l+s)*d;return o[0]=2*f,o[4]=0,o[8]=0,o[12]=-p,o[1]=0,o[5]=2*h,o[9]=0,o[13]=-m,o[2]=0,o[6]=0,o[10]=-2*d,o[14]=-x,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Xs=new X,wi=new Xe,Ew=new X(0,0,0),Aw=new X(1,1,1),Tr=new X,pl=new X,Gn=new X,$p=new Xe,Yp=new gs;class go{constructor(t=0,e=0,n=0,r=go.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],l=r[4],o=r[8],f=r[1],h=r[5],d=r[9],p=r[2],m=r[6],x=r[10];switch(e){case"XYZ":this._y=Math.asin(Cn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,x),this._z=Math.atan2(-l,s)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Cn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,x),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Cn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,x),this._z=Math.atan2(-l,h)):(this._y=0,this._z=Math.atan2(f,s));break;case"ZYX":this._y=Math.asin(-Cn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,x),this._z=Math.atan2(f,s)):(this._x=0,this._z=Math.atan2(-l,h));break;case"YZX":this._z=Math.asin(Cn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,x));break;case"XZY":this._z=Math.asin(-Cn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return $p.makeRotationFromQuaternion(t),this.setFromRotationMatrix($p,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yp.setFromEuler(this),this.setFromQuaternion(Yp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}go.DefaultOrder="XYZ";go.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Sh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Cw=0;const Zp=new X,qs=new gs,ji=new Xe,ml=new X,Xa=new X,Lw=new X,Pw=new gs,Kp=new X(1,0,0),Jp=new X(0,1,0),jp=new X(0,0,1),Dw={type:"added"},Qp={type:"removed"};class xn extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cw++}),this.uuid=po(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DefaultUp.clone();const t=new X,e=new go,n=new gs,r=new X(1,1,1);function s(){n.setFromEuler(e,!1)}function l(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Xe},normalMatrix:{value:new oi}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=xn.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=xn.DefaultMatrixWorldAutoUpdate,this.layers=new Sh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qs.setFromAxisAngle(t,e),this.quaternion.multiply(qs),this}rotateOnWorldAxis(t,e){return qs.setFromAxisAngle(t,e),this.quaternion.premultiply(qs),this}rotateX(t){return this.rotateOnAxis(Kp,t)}rotateY(t){return this.rotateOnAxis(Jp,t)}rotateZ(t){return this.rotateOnAxis(jp,t)}translateOnAxis(t,e){return Zp.copy(t).applyQuaternion(this.quaternion),this.position.add(Zp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Kp,t)}translateY(t){return this.translateOnAxis(Jp,t)}translateZ(t){return this.translateOnAxis(jp,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ml.copy(t):ml.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Xa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(Xa,ml,this.up):ji.lookAt(ml,Xa,this.up),this.quaternion.setFromRotationMatrix(ji),r&&(ji.extractRotation(r.matrixWorld),qs.setFromRotationMatrix(ji),this.quaternion.premultiply(qs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Dw)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qp)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Qp)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ji.multiply(t.parent.matrixWorld)),t.applyMatrix4(ji),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const l=this.children[n].getObjectByProperty(t,e);if(l!==void 0)return l}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xa,t,Lw),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xa,Pw,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,l=r.length;s<l;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,f){return o[f.uuid]===void 0&&(o[f.uuid]=f.toJSON(t)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const f=o.shapes;if(Array.isArray(f))for(let h=0,d=f.length;h<d;h++){const p=f[h];s(t.shapes,p)}else s(t.shapes,f)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let f=0,h=this.material.length;f<h;f++)o.push(s(t.materials,this.material[f]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const f=this.animations[o];r.animations.push(s(t.animations,f))}}if(e){const o=l(t.geometries),f=l(t.materials),h=l(t.textures),d=l(t.images),p=l(t.shapes),m=l(t.skeletons),x=l(t.animations),b=l(t.nodes);o.length>0&&(n.geometries=o),f.length>0&&(n.materials=f),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),x.length>0&&(n.animations=x),b.length>0&&(n.nodes=b)}return n.object=r,n;function l(o){const f=[];for(const h in o){const d=o[h];delete d.metadata,f.push(d)}return f}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}xn.DefaultUp=new X(0,1,0);xn.DefaultMatrixAutoUpdate=!0;xn.DefaultMatrixWorldAutoUpdate=!0;const Si=new X,Qi=new X,wu=new X,tr=new X,$s=new X,Ys=new X,tm=new X,Su=new X,Tu=new X,Eu=new X;class rr{constructor(t=new X,e=new X,n=new X){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Si.subVectors(t,e),r.cross(Si);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Si.subVectors(r,e),Qi.subVectors(n,e),wu.subVectors(t,e);const l=Si.dot(Si),o=Si.dot(Qi),f=Si.dot(wu),h=Qi.dot(Qi),d=Qi.dot(wu),p=l*h-o*o;if(p===0)return s.set(-2,-1,-1);const m=1/p,x=(h*f-o*d)*m,b=(l*d-o*f)*m;return s.set(1-x-b,b,x)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,tr),tr.x>=0&&tr.y>=0&&tr.x+tr.y<=1}static getUV(t,e,n,r,s,l,o,f){return this.getBarycoord(t,e,n,r,tr),f.set(0,0),f.addScaledVector(s,tr.x),f.addScaledVector(l,tr.y),f.addScaledVector(o,tr.z),f}static isFrontFacing(t,e,n,r){return Si.subVectors(n,e),Qi.subVectors(t,e),Si.cross(Qi).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Si.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),Si.cross(Qi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return rr.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return rr.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,r,s){return rr.getUV(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return rr.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return rr.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let l,o;$s.subVectors(r,n),Ys.subVectors(s,n),Su.subVectors(t,n);const f=$s.dot(Su),h=Ys.dot(Su);if(f<=0&&h<=0)return e.copy(n);Tu.subVectors(t,r);const d=$s.dot(Tu),p=Ys.dot(Tu);if(d>=0&&p<=d)return e.copy(r);const m=f*p-d*h;if(m<=0&&f>=0&&d<=0)return l=f/(f-d),e.copy(n).addScaledVector($s,l);Eu.subVectors(t,s);const x=$s.dot(Eu),b=Ys.dot(Eu);if(b>=0&&x<=b)return e.copy(s);const g=x*h-f*b;if(g<=0&&h>=0&&b<=0)return o=h/(h-b),e.copy(n).addScaledVector(Ys,o);const _=d*b-x*p;if(_<=0&&p-d>=0&&x-b>=0)return tm.subVectors(s,r),o=(p-d)/(p-d+(x-b)),e.copy(r).addScaledVector(tm,o);const y=1/(_+g+m);return l=g*y,o=m*y,e.copy(n).addScaledVector($s,l).addScaledVector(Ys,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Rw=0;class _o extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rw++}),this.uuid=po(),this.name="",this.type="Material",this.blending=oa,this.side=fa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=tg,this.blendDst=eg,this.blendEquation=na,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ku,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bw,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=uu,this.stencilZFail=uu,this.stencilZPass=uu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const r=this[e];if(r===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==oa&&(n.blending=this.blending),this.side!==fa&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function r(s){const l=[];for(const o in s){const f=s[o];delete f.metadata,l.push(f)}return l}if(e){const s=r(t.textures),l=r(t.images);s.length>0&&(n.textures=s),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class hg extends _o{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Mh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const We=new X,gl=new Xt;class Fi{constructor(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=Gp,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)gl.fromBufferAttribute(this,e),gl.applyMatrix3(t),this.setXY(e,gl.x,gl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=al(e,this.array)),e}setX(t,e){return this.normalized&&(e=kn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=al(e,this.array)),e}setY(t,e){return this.normalized&&(e=kn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=al(e,this.array)),e}setZ(t,e){return this.normalized&&(e=kn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=al(e,this.array)),e}setW(t,e){return this.normalized&&(e=kn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=kn(e,this.array),n=kn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=kn(e,this.array),n=kn(n,this.array),r=kn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=kn(e,this.array),n=kn(n,this.array),r=kn(r,this.array),s=kn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Gp&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class fg extends Fi{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class dg extends Fi{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class cs extends Fi{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Iw=0;const ii=new Xe,Au=new xn,Zs=new X,Vn=new mo,qa=new mo,je=new X;class xs extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Iw++}),this.uuid=po(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sg(t)?dg:fg)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new oi().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ii.makeRotationFromQuaternion(t),this.applyMatrix4(ii),this}rotateX(t){return ii.makeRotationX(t),this.applyMatrix4(ii),this}rotateY(t){return ii.makeRotationY(t),this.applyMatrix4(ii),this}rotateZ(t){return ii.makeRotationZ(t),this.applyMatrix4(ii),this}translate(t,e,n){return ii.makeTranslation(t,e,n),this.applyMatrix4(ii),this}scale(t,e,n){return ii.makeScale(t,e,n),this.applyMatrix4(ii),this}lookAt(t){return Au.lookAt(t),Au.updateMatrix(),this.applyMatrix4(Au.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new cs(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Vn.setFromBufferAttribute(s),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wh);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new X,1/0);return}if(t){const n=this.boundingSphere.center;if(Vn.setFromBufferAttribute(t),e)for(let s=0,l=e.length;s<l;s++){const o=e[s];qa.setFromBufferAttribute(o),this.morphTargetsRelative?(je.addVectors(Vn.min,qa.min),Vn.expandByPoint(je),je.addVectors(Vn.max,qa.max),Vn.expandByPoint(je)):(Vn.expandByPoint(qa.min),Vn.expandByPoint(qa.max))}Vn.getCenter(n);let r=0;for(let s=0,l=t.count;s<l;s++)je.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(je));if(e)for(let s=0,l=e.length;s<l;s++){const o=e[s],f=this.morphTargetsRelative;for(let h=0,d=o.count;h<d;h++)je.fromBufferAttribute(o,h),f&&(Zs.fromBufferAttribute(t,h),je.add(Zs)),r=Math.max(r,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,r=e.position.array,s=e.normal.array,l=e.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fi(new Float32Array(4*o),4));const f=this.getAttribute("tangent").array,h=[],d=[];for(let G=0;G<o;G++)h[G]=new X,d[G]=new X;const p=new X,m=new X,x=new X,b=new Xt,g=new Xt,_=new Xt,y=new X,T=new X;function L(G,nt,_t){p.fromArray(r,G*3),m.fromArray(r,nt*3),x.fromArray(r,_t*3),b.fromArray(l,G*2),g.fromArray(l,nt*2),_.fromArray(l,_t*2),m.sub(p),x.sub(p),g.sub(b),_.sub(b);const Y=1/(g.x*_.y-_.x*g.y);!isFinite(Y)||(y.copy(m).multiplyScalar(_.y).addScaledVector(x,-g.y).multiplyScalar(Y),T.copy(x).multiplyScalar(g.x).addScaledVector(m,-_.x).multiplyScalar(Y),h[G].add(y),h[nt].add(y),h[_t].add(y),d[G].add(T),d[nt].add(T),d[_t].add(T))}let A=this.groups;A.length===0&&(A=[{start:0,count:n.length}]);for(let G=0,nt=A.length;G<nt;++G){const _t=A[G],Y=_t.start,W=_t.count;for(let et=Y,ct=Y+W;et<ct;et+=3)L(n[et+0],n[et+1],n[et+2])}const w=new X,O=new X,z=new X,S=new X;function D(G){z.fromArray(s,G*3),S.copy(z);const nt=h[G];w.copy(nt),w.sub(z.multiplyScalar(z.dot(nt))).normalize(),O.crossVectors(S,nt);const Y=O.dot(d[G])<0?-1:1;f[G*4]=w.x,f[G*4+1]=w.y,f[G*4+2]=w.z,f[G*4+3]=Y}for(let G=0,nt=A.length;G<nt;++G){const _t=A[G],Y=_t.start,W=_t.count;for(let et=Y,ct=Y+W;et<ct;et+=3)D(n[et+0]),D(n[et+1]),D(n[et+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,x=n.count;m<x;m++)n.setXYZ(m,0,0,0);const r=new X,s=new X,l=new X,o=new X,f=new X,h=new X,d=new X,p=new X;if(t)for(let m=0,x=t.count;m<x;m+=3){const b=t.getX(m+0),g=t.getX(m+1),_=t.getX(m+2);r.fromBufferAttribute(e,b),s.fromBufferAttribute(e,g),l.fromBufferAttribute(e,_),d.subVectors(l,s),p.subVectors(r,s),d.cross(p),o.fromBufferAttribute(n,b),f.fromBufferAttribute(n,g),h.fromBufferAttribute(n,_),o.add(d),f.add(d),h.add(d),n.setXYZ(b,o.x,o.y,o.z),n.setXYZ(g,f.x,f.y,f.z),n.setXYZ(_,h.x,h.y,h.z)}else for(let m=0,x=e.count;m<x;m+=3)r.fromBufferAttribute(e,m+0),s.fromBufferAttribute(e,m+1),l.fromBufferAttribute(e,m+2),d.subVectors(l,s),p.subVectors(r,s),d.cross(p),n.setXYZ(m+0,d.x,d.y,d.z),n.setXYZ(m+1,d.x,d.y,d.z),n.setXYZ(m+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(o,f){const h=o.array,d=o.itemSize,p=o.normalized,m=new h.constructor(f.length*d);let x=0,b=0;for(let g=0,_=f.length;g<_;g++){o.isInterleavedBufferAttribute?x=f[g]*o.data.stride+o.offset:x=f[g]*d;for(let y=0;y<d;y++)m[b++]=h[x++]}return new Fi(m,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new xs,n=this.index.array,r=this.attributes;for(const o in r){const f=r[o],h=t(f,n);e.setAttribute(o,h)}const s=this.morphAttributes;for(const o in s){const f=[],h=s[o];for(let d=0,p=h.length;d<p;d++){const m=h[d],x=t(m,n);f.push(x)}e.morphAttributes[o]=f}e.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let o=0,f=l.length;o<f;o++){const h=l[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(t[h]=f[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const f in n){const h=n[f];t.data.attributes[f]=h.toJSON(t.data)}const r={};let s=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],d=[];for(let p=0,m=h.length;p<m;p++){const x=h[p];d.push(x.toJSON(t.data))}d.length>0&&(r[f]=d,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(t.data.groups=JSON.parse(JSON.stringify(l)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const h in r){const d=r[h];this.setAttribute(h,d.clone(e))}const s=t.morphAttributes;for(const h in s){const d=[],p=s[h];for(let m=0,x=p.length;m<x;m++)d.push(p[m].clone(e));this.morphAttributes[h]=d}this.morphTargetsRelative=t.morphTargetsRelative;const l=t.groups;for(let h=0,d=l.length;h<d;h++){const p=l[h];this.addGroup(p.start,p.count,p.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const f=t.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const em=new Xe,Ks=new ug,Cu=new wh,Er=new X,Ar=new X,Cr=new X,Lu=new X,Pu=new X,Du=new X,_l=new X,vl=new X,xl=new X,yl=new Xt,bl=new Xt,Ml=new Xt,Ru=new X,wl=new X;class Oi extends xn{constructor(t=new xs,e=new hg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,l=r.length;s<l;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Cu.copy(n.boundingSphere),Cu.applyMatrix4(s),t.ray.intersectsSphere(Cu)===!1)||(em.copy(s).invert(),Ks.copy(t.ray).applyMatrix4(em),n.boundingBox!==null&&Ks.intersectsBox(n.boundingBox)===!1))return;let l;const o=n.index,f=n.attributes.position,h=n.morphAttributes.position,d=n.morphTargetsRelative,p=n.attributes.uv,m=n.attributes.uv2,x=n.groups,b=n.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,_=x.length;g<_;g++){const y=x[g],T=r[y.materialIndex],L=Math.max(y.start,b.start),A=Math.min(o.count,Math.min(y.start+y.count,b.start+b.count));for(let w=L,O=A;w<O;w+=3){const z=o.getX(w),S=o.getX(w+1),D=o.getX(w+2);l=Sl(this,T,t,Ks,f,h,d,p,m,z,S,D),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,e.push(l))}}else{const g=Math.max(0,b.start),_=Math.min(o.count,b.start+b.count);for(let y=g,T=_;y<T;y+=3){const L=o.getX(y),A=o.getX(y+1),w=o.getX(y+2);l=Sl(this,r,t,Ks,f,h,d,p,m,L,A,w),l&&(l.faceIndex=Math.floor(y/3),e.push(l))}}else if(f!==void 0)if(Array.isArray(r))for(let g=0,_=x.length;g<_;g++){const y=x[g],T=r[y.materialIndex],L=Math.max(y.start,b.start),A=Math.min(f.count,Math.min(y.start+y.count,b.start+b.count));for(let w=L,O=A;w<O;w+=3){const z=w,S=w+1,D=w+2;l=Sl(this,T,t,Ks,f,h,d,p,m,z,S,D),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,e.push(l))}}else{const g=Math.max(0,b.start),_=Math.min(f.count,b.start+b.count);for(let y=g,T=_;y<T;y+=3){const L=y,A=y+1,w=y+2;l=Sl(this,r,t,Ks,f,h,d,p,m,L,A,w),l&&(l.faceIndex=Math.floor(y/3),e.push(l))}}}}function Ow(c,t,e,n,r,s,l,o){let f;if(t.side===hi?f=n.intersectTriangle(l,s,r,!0,o):f=n.intersectTriangle(r,s,l,t.side!==Lr,o),f===null)return null;wl.copy(o),wl.applyMatrix4(c.matrixWorld);const h=e.ray.origin.distanceTo(wl);return h<e.near||h>e.far?null:{distance:h,point:wl.clone(),object:c}}function Sl(c,t,e,n,r,s,l,o,f,h,d,p){Er.fromBufferAttribute(r,h),Ar.fromBufferAttribute(r,d),Cr.fromBufferAttribute(r,p);const m=c.morphTargetInfluences;if(s&&m){_l.set(0,0,0),vl.set(0,0,0),xl.set(0,0,0);for(let b=0,g=s.length;b<g;b++){const _=m[b],y=s[b];_!==0&&(Lu.fromBufferAttribute(y,h),Pu.fromBufferAttribute(y,d),Du.fromBufferAttribute(y,p),l?(_l.addScaledVector(Lu,_),vl.addScaledVector(Pu,_),xl.addScaledVector(Du,_)):(_l.addScaledVector(Lu.sub(Er),_),vl.addScaledVector(Pu.sub(Ar),_),xl.addScaledVector(Du.sub(Cr),_)))}Er.add(_l),Ar.add(vl),Cr.add(xl)}c.isSkinnedMesh&&(c.boneTransform(h,Er),c.boneTransform(d,Ar),c.boneTransform(p,Cr));const x=Ow(c,t,e,n,Er,Ar,Cr,Ru);if(x){o&&(yl.fromBufferAttribute(o,h),bl.fromBufferAttribute(o,d),Ml.fromBufferAttribute(o,p),x.uv=rr.getUV(Ru,Er,Ar,Cr,yl,bl,Ml,new Xt)),f&&(yl.fromBufferAttribute(f,h),bl.fromBufferAttribute(f,d),Ml.fromBufferAttribute(f,p),x.uv2=rr.getUV(Ru,Er,Ar,Cr,yl,bl,Ml,new Xt));const b={a:h,b:d,c:p,normal:new X,materialIndex:0};rr.getNormal(Er,Ar,Cr,b.normal),x.face=b}return x}class Sa extends xs{constructor(t=1,e=1,n=1,r=1,s=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:l};const o=this;r=Math.floor(r),s=Math.floor(s),l=Math.floor(l);const f=[],h=[],d=[],p=[];let m=0,x=0;b("z","y","x",-1,-1,n,e,t,l,s,0),b("z","y","x",1,-1,n,e,-t,l,s,1),b("x","z","y",1,1,t,n,e,r,l,2),b("x","z","y",1,-1,t,n,-e,r,l,3),b("x","y","z",1,-1,t,e,n,r,s,4),b("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(f),this.setAttribute("position",new cs(h,3)),this.setAttribute("normal",new cs(d,3)),this.setAttribute("uv",new cs(p,2));function b(g,_,y,T,L,A,w,O,z,S,D){const G=A/z,nt=w/S,_t=A/2,Y=w/2,W=O/2,et=z+1,ct=S+1;let ot=0,j=0;const q=new X;for(let J=0;J<ct;J++){const pt=J*nt-Y;for(let gt=0;gt<et;gt++){const B=gt*G-_t;q[g]=B*T,q[_]=pt*L,q[y]=W,h.push(q.x,q.y,q.z),q[g]=0,q[_]=0,q[y]=O>0?1:-1,d.push(q.x,q.y,q.z),p.push(gt/z),p.push(1-J/S),ot+=1}}for(let J=0;J<S;J++)for(let pt=0;pt<z;pt++){const gt=m+pt+et*J,B=m+pt+et*(J+1),tt=m+(pt+1)+et*(J+1),ft=m+(pt+1)+et*J;f.push(gt,B,ft),f.push(B,tt,ft),j+=6}o.addGroup(x,j,D),x+=j,m+=ot}}static fromJSON(t){return new Sa(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ga(c){const t={};for(const e in c){t[e]={};for(const n in c[e]){const r=c[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function un(c){const t={};for(let e=0;e<c.length;e++){const n=ga(c[e]);for(const r in n)t[r]=n[r]}return t}function Fw(c){const t=[];for(let e=0;e<c.length;e++)t.push(c[e].clone());return t}const Nw={clone:ga,merge:un};var zw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nr extends _o{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zw,this.fragmentShader=Uw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ga(t.uniforms),this.uniformsGroups=Fw(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?e.uniforms[r]={type:"t",value:l.toJSON(t).uuid}:l&&l.isColor?e.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?e.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?e.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?e.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?e.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?e.uniforms[r]={type:"m4",value:l.toArray()}:e.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class pg extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ln extends pg{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Wp*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(hu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wp*2*Math.atan(Math.tan(hu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,r,s,l){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(hu*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const f=l.fullWidth,h=l.fullHeight;s+=l.offsetX*r/f,e-=l.offsetY*n/h,r*=l.width/f,n*=l.height/h}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Js=90,js=1;class Bw extends xn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new Ln(Js,js,t,e);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new X(1,0,0)),this.add(r);const s=new Ln(Js,js,t,e);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new X(-1,0,0)),this.add(s);const l=new Ln(Js,js,t,e);l.layers=this.layers,l.up.set(0,0,1),l.lookAt(new X(0,1,0)),this.add(l);const o=new Ln(Js,js,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new X(0,-1,0)),this.add(o);const f=new Ln(Js,js,t,e);f.layers=this.layers,f.up.set(0,-1,0),f.lookAt(new X(0,0,1)),this.add(f);const h=new Ln(Js,js,t,e);h.layers=this.layers,h.up.set(0,-1,0),h.lookAt(new X(0,0,-1)),this.add(h)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,l,o,f,h]=this.children,d=t.getRenderTarget(),p=t.toneMapping,m=t.xr.enabled;t.toneMapping=ar,t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,r),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,l),t.setRenderTarget(n,3),t.render(e,o),t.setRenderTarget(n,4),t.render(e,f),n.texture.generateMipmaps=x,t.setRenderTarget(n,5),t.render(e,h),t.setRenderTarget(d),t.toneMapping=p,t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class mg extends di{constructor(t,e,n,r,s,l,o,f,h,d){t=t!==void 0?t:[],e=e!==void 0?e:da,super(t,e,n,r,s,l,o,f,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class kw extends ms{constructor(t,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new mg(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ai}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Sa(5,5,5),s=new Nr({name:"CubemapFromEquirect",uniforms:ga(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:hi,blending:Ir});s.uniforms.tEquirect.value=e;const l=new Oi(r,s),o=e.minFilter;return e.minFilter===Vl&&(e.minFilter=ai),new Bw(1,10,this).update(t,l),e.minFilter=o,l.geometry.dispose(),l.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let l=0;l<6;l++)t.setRenderTarget(this,l),t.clear(e,n,r);t.setRenderTarget(s)}}const Iu=new X,Gw=new X,Vw=new oi;class Qr{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Iu.subVectors(n,e).cross(Gw.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(Iu),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(n).multiplyScalar(s).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Vw.getNormalMatrix(t),r=this.coplanarPoint(Iu).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qs=new wh,Tl=new X;class Th{constructor(t=new Qr,e=new Qr,n=new Qr,r=new Qr,s=new Qr,l=new Qr){this.planes=[t,e,n,r,s,l]}set(t,e,n,r,s,l){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(l),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,r=n[0],s=n[1],l=n[2],o=n[3],f=n[4],h=n[5],d=n[6],p=n[7],m=n[8],x=n[9],b=n[10],g=n[11],_=n[12],y=n[13],T=n[14],L=n[15];return e[0].setComponents(o-r,p-f,g-m,L-_).normalize(),e[1].setComponents(o+r,p+f,g+m,L+_).normalize(),e[2].setComponents(o+s,p+h,g+x,L+y).normalize(),e[3].setComponents(o-s,p-h,g-x,L-y).normalize(),e[4].setComponents(o-l,p-d,g-b,L-T).normalize(),e[5].setComponents(o+l,p+d,g+b,L+T).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Qs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Qs)}intersectsSprite(t){return Qs.center.set(0,0,0),Qs.radius=.7071067811865476,Qs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qs)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Tl.x=r.normal.x>0?t.max.x:t.min.x,Tl.y=r.normal.y>0?t.max.y:t.min.y,Tl.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Tl)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gg(){let c=null,t=!1,e=null,n=null;function r(s,l){e(s,l),n=c.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=c.requestAnimationFrame(r),t=!0)},stop:function(){c.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){c=s}}}function Ww(c,t){const e=t.isWebGL2,n=new WeakMap;function r(h,d){const p=h.array,m=h.usage,x=c.createBuffer();c.bindBuffer(d,x),c.bufferData(d,p,m),h.onUploadCallback();let b;if(p instanceof Float32Array)b=5126;else if(p instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(e)b=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=5123;else if(p instanceof Int16Array)b=5122;else if(p instanceof Uint32Array)b=5125;else if(p instanceof Int32Array)b=5124;else if(p instanceof Int8Array)b=5120;else if(p instanceof Uint8Array)b=5121;else if(p instanceof Uint8ClampedArray)b=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:b,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version}}function s(h,d,p){const m=d.array,x=d.updateRange;c.bindBuffer(p,h),x.count===-1?c.bufferSubData(p,0,m):(e?c.bufferSubData(p,x.offset*m.BYTES_PER_ELEMENT,m,x.offset,x.count):c.bufferSubData(p,x.offset*m.BYTES_PER_ELEMENT,m.subarray(x.offset,x.offset+x.count)),x.count=-1)}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function o(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=n.get(h);d&&(c.deleteBuffer(d.buffer),n.delete(h))}function f(h,d){if(h.isGLBufferAttribute){const m=n.get(h);(!m||m.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const p=n.get(h);p===void 0?n.set(h,r(h,d)):p.version<h.version&&(s(p.buffer,h,d),p.version=h.version)}return{get:l,remove:o,update:f}}class Wl extends xs{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,l=e/2,o=Math.floor(n),f=Math.floor(r),h=o+1,d=f+1,p=t/o,m=e/f,x=[],b=[],g=[],_=[];for(let y=0;y<d;y++){const T=y*m-l;for(let L=0;L<h;L++){const A=L*p-s;b.push(A,-T,0),g.push(0,0,1),_.push(L/o),_.push(1-y/f)}}for(let y=0;y<f;y++)for(let T=0;T<o;T++){const L=T+h*y,A=T+h*(y+1),w=T+1+h*(y+1),O=T+1+h*y;x.push(L,A,O),x.push(A,w,O)}this.setIndex(x),this.setAttribute("position",new cs(b,3)),this.setAttribute("normal",new cs(g,3)),this.setAttribute("uv",new cs(_,2))}static fromJSON(t){return new Wl(t.width,t.height,t.widthSegments,t.heightSegments)}}var Hw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Xw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qw=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,$w=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kw="vec3 transformed = vec3( position );",Jw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jw=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Qw=`#ifdef USE_IRIDESCENCE
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
#endif`,tS=`#ifdef USE_BUMPMAP
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
#endif`,eS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,aS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,oS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,lS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,cS=`#define PI 3.141592653589793
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
}`,uS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hS=`vec3 transformedNormal = objectNormal;
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
#endif`,fS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,pS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gS="gl_FragColor = linearToOutputTexel( gl_FragColor );",_S=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vS=`#ifdef USE_ENVMAP
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
#endif`,xS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yS=`#ifdef USE_ENVMAP
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
#endif`,bS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,MS=`#ifdef USE_ENVMAP
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
#endif`,wS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,SS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ES=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,AS=`#ifdef USE_GRADIENTMAP
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
}`,CS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,LS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,PS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,DS=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,RS=`uniform bool receiveShadow;
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
#endif`,IS=`#if defined( USE_ENVMAP )
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
#endif`,OS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FS=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,NS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zS=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,US=`PhysicalMaterial material;
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
#endif`,BS=`struct PhysicalMaterial {
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
}`,kS=`
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
#endif`,GS=`#if defined( RE_IndirectDiffuse )
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
#endif`,VS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,WS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,qS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,$S=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,YS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ZS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,KS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,QS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tT=`#ifdef USE_MORPHNORMALS
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
#endif`,eT=`#ifdef USE_MORPHTARGETS
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
#endif`,nT=`#ifdef USE_MORPHTARGETS
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
#endif`,iT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,rT=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,sT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lT=`#ifdef USE_NORMALMAP
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
#endif`,cT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,uT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,hT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,fT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_T=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,MT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wT=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ST=`float getShadowMask() {
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
}`,TT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ET=`#ifdef USE_SKINNING
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
#endif`,AT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CT=`#ifdef USE_SKINNING
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
#endif`,LT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,PT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,DT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,RT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,IT=`#ifdef USE_TRANSMISSION
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
#endif`,OT=`#ifdef USE_TRANSMISSION
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
#endif`,FT=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,NT=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,zT=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,UT=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,BT=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,kT=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,GT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const VT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WT=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,HT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XT=`#include <envmap_common_pars_fragment>
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
}`,qT=`#include <common>
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
}`,$T=`#if DEPTH_PACKING == 3200
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
}`,YT=`#define DISTANCE
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
}`,ZT=`#define DISTANCE
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
}`,KT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,jT=`uniform float scale;
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
}`,QT=`uniform vec3 diffuse;
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
}`,tE=`#include <common>
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
}`,eE=`uniform vec3 diffuse;
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
}`,nE=`#define LAMBERT
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
}`,iE=`#define LAMBERT
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
}`,rE=`#define MATCAP
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
}`,sE=`#define MATCAP
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
}`,aE=`#define NORMAL
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
}`,oE=`#define NORMAL
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
}`,lE=`#define PHONG
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
}`,cE=`#define PHONG
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
}`,uE=`#define STANDARD
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
}`,hE=`#define STANDARD
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
}`,fE=`#define TOON
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
}`,dE=`#define TOON
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
}`,pE=`uniform float size;
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
}`,mE=`uniform vec3 diffuse;
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
}`,gE=`#include <common>
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
}`,_E=`uniform vec3 color;
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
}`,vE=`uniform float rotation;
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
}`,xE=`uniform vec3 diffuse;
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
}`,ee={alphamap_fragment:Hw,alphamap_pars_fragment:Xw,alphatest_fragment:qw,alphatest_pars_fragment:$w,aomap_fragment:Yw,aomap_pars_fragment:Zw,begin_vertex:Kw,beginnormal_vertex:Jw,bsdfs:jw,iridescence_fragment:Qw,bumpmap_pars_fragment:tS,clipping_planes_fragment:eS,clipping_planes_pars_fragment:nS,clipping_planes_pars_vertex:iS,clipping_planes_vertex:rS,color_fragment:sS,color_pars_fragment:aS,color_pars_vertex:oS,color_vertex:lS,common:cS,cube_uv_reflection_fragment:uS,defaultnormal_vertex:hS,displacementmap_pars_vertex:fS,displacementmap_vertex:dS,emissivemap_fragment:pS,emissivemap_pars_fragment:mS,encodings_fragment:gS,encodings_pars_fragment:_S,envmap_fragment:vS,envmap_common_pars_fragment:xS,envmap_pars_fragment:yS,envmap_pars_vertex:bS,envmap_physical_pars_fragment:IS,envmap_vertex:MS,fog_vertex:wS,fog_pars_vertex:SS,fog_fragment:TS,fog_pars_fragment:ES,gradientmap_pars_fragment:AS,lightmap_fragment:CS,lightmap_pars_fragment:LS,lights_lambert_fragment:PS,lights_lambert_pars_fragment:DS,lights_pars_begin:RS,lights_toon_fragment:OS,lights_toon_pars_fragment:FS,lights_phong_fragment:NS,lights_phong_pars_fragment:zS,lights_physical_fragment:US,lights_physical_pars_fragment:BS,lights_fragment_begin:kS,lights_fragment_maps:GS,lights_fragment_end:VS,logdepthbuf_fragment:WS,logdepthbuf_pars_fragment:HS,logdepthbuf_pars_vertex:XS,logdepthbuf_vertex:qS,map_fragment:$S,map_pars_fragment:YS,map_particle_fragment:ZS,map_particle_pars_fragment:KS,metalnessmap_fragment:JS,metalnessmap_pars_fragment:jS,morphcolor_vertex:QS,morphnormal_vertex:tT,morphtarget_pars_vertex:eT,morphtarget_vertex:nT,normal_fragment_begin:iT,normal_fragment_maps:rT,normal_pars_fragment:sT,normal_pars_vertex:aT,normal_vertex:oT,normalmap_pars_fragment:lT,clearcoat_normal_fragment_begin:cT,clearcoat_normal_fragment_maps:uT,clearcoat_pars_fragment:hT,iridescence_pars_fragment:fT,output_fragment:dT,packing:pT,premultiplied_alpha_fragment:mT,project_vertex:gT,dithering_fragment:_T,dithering_pars_fragment:vT,roughnessmap_fragment:xT,roughnessmap_pars_fragment:yT,shadowmap_pars_fragment:bT,shadowmap_pars_vertex:MT,shadowmap_vertex:wT,shadowmask_pars_fragment:ST,skinbase_vertex:TT,skinning_pars_vertex:ET,skinning_vertex:AT,skinnormal_vertex:CT,specularmap_fragment:LT,specularmap_pars_fragment:PT,tonemapping_fragment:DT,tonemapping_pars_fragment:RT,transmission_fragment:IT,transmission_pars_fragment:OT,uv_pars_fragment:FT,uv_pars_vertex:NT,uv_vertex:zT,uv2_pars_fragment:UT,uv2_pars_vertex:BT,uv2_vertex:kT,worldpos_vertex:GT,background_vert:VT,background_frag:WT,cube_vert:HT,cube_frag:XT,depth_vert:qT,depth_frag:$T,distanceRGBA_vert:YT,distanceRGBA_frag:ZT,equirect_vert:KT,equirect_frag:JT,linedashed_vert:jT,linedashed_frag:QT,meshbasic_vert:tE,meshbasic_frag:eE,meshlambert_vert:nE,meshlambert_frag:iE,meshmatcap_vert:rE,meshmatcap_frag:sE,meshnormal_vert:aE,meshnormal_frag:oE,meshphong_vert:lE,meshphong_frag:cE,meshphysical_vert:uE,meshphysical_frag:hE,meshtoon_vert:fE,meshtoon_frag:dE,points_vert:pE,points_frag:mE,shadow_vert:gE,shadow_frag:_E,sprite_vert:vE,sprite_frag:xE},wt={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new oi},uv2Transform:{value:new oi},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new oi}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new oi}}},Di={basic:{uniforms:un([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:un([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new me(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:un([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:un([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:un([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new me(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:un([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:un([wt.points,wt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:un([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:un([wt.common,wt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:un([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:un([wt.sprite,wt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new oi},t2D:{value:null}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},cube:{uniforms:un([wt.envmap,{opacity:{value:1}}]),vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:un([wt.common,wt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:un([wt.lights,wt.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};Di.physical={uniforms:un([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};function yE(c,t,e,n,r,s){const l=new me(0);let o=r===!0?0:1,f,h,d=null,p=0,m=null;function x(g,_){let y=!1,T=_.isScene===!0?_.background:null;T&&T.isTexture&&(T=t.get(T));const L=c.xr,A=L.getSession&&L.getSession();A&&A.environmentBlendMode==="additive"&&(T=null),T===null?b(l,o):T&&T.isColor&&(b(T,1),y=!0),(c.autoClear||y)&&c.clear(c.autoClearColor,c.autoClearDepth,c.autoClearStencil),T&&(T.isCubeTexture||T.mapping===Gl)?(h===void 0&&(h=new Oi(new Sa(1,1,1),new Nr({name:"BackgroundCubeMaterial",uniforms:ga(Di.cube.uniforms),vertexShader:Di.cube.vertexShader,fragmentShader:Di.cube.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,O,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,(d!==T||p!==T.version||m!==c.toneMapping)&&(h.material.needsUpdate=!0,d=T,p=T.version,m=c.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(f===void 0&&(f=new Oi(new Wl(2,2),new Nr({name:"BackgroundMaterial",uniforms:ga(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:fa,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(f)),f.material.uniforms.t2D.value=T,T.matrixAutoUpdate===!0&&T.updateMatrix(),f.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||p!==T.version||m!==c.toneMapping)&&(f.material.needsUpdate=!0,d=T,p=T.version,m=c.toneMapping),f.layers.enableAll(),g.unshift(f,f.geometry,f.material,0,0,null))}function b(g,_){e.buffers.color.setClear(g.r,g.g,g.b,_,s)}return{getClearColor:function(){return l},setClearColor:function(g,_=1){l.set(g),o=_,b(l,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,b(l,o)},render:x}}function bE(c,t,e,n){const r=c.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),l=n.isWebGL2||s!==null,o={},f=_(null);let h=f,d=!1;function p(W,et,ct,ot,j){let q=!1;if(l){const J=g(ot,ct,et);h!==J&&(h=J,x(h.object)),q=y(W,ot,ct,j),q&&T(W,ot,ct,j)}else{const J=et.wireframe===!0;(h.geometry!==ot.id||h.program!==ct.id||h.wireframe!==J)&&(h.geometry=ot.id,h.program=ct.id,h.wireframe=J,q=!0)}j!==null&&e.update(j,34963),(q||d)&&(d=!1,S(W,et,ct,ot),j!==null&&c.bindBuffer(34963,e.get(j).buffer))}function m(){return n.isWebGL2?c.createVertexArray():s.createVertexArrayOES()}function x(W){return n.isWebGL2?c.bindVertexArray(W):s.bindVertexArrayOES(W)}function b(W){return n.isWebGL2?c.deleteVertexArray(W):s.deleteVertexArrayOES(W)}function g(W,et,ct){const ot=ct.wireframe===!0;let j=o[W.id];j===void 0&&(j={},o[W.id]=j);let q=j[et.id];q===void 0&&(q={},j[et.id]=q);let J=q[ot];return J===void 0&&(J=_(m()),q[ot]=J),J}function _(W){const et=[],ct=[],ot=[];for(let j=0;j<r;j++)et[j]=0,ct[j]=0,ot[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:et,enabledAttributes:ct,attributeDivisors:ot,object:W,attributes:{},index:null}}function y(W,et,ct,ot){const j=h.attributes,q=et.attributes;let J=0;const pt=ct.getAttributes();for(const gt in pt)if(pt[gt].location>=0){const tt=j[gt];let ft=q[gt];if(ft===void 0&&(gt==="instanceMatrix"&&W.instanceMatrix&&(ft=W.instanceMatrix),gt==="instanceColor"&&W.instanceColor&&(ft=W.instanceColor)),tt===void 0||tt.attribute!==ft||ft&&tt.data!==ft.data)return!0;J++}return h.attributesNum!==J||h.index!==ot}function T(W,et,ct,ot){const j={},q=et.attributes;let J=0;const pt=ct.getAttributes();for(const gt in pt)if(pt[gt].location>=0){let tt=q[gt];tt===void 0&&(gt==="instanceMatrix"&&W.instanceMatrix&&(tt=W.instanceMatrix),gt==="instanceColor"&&W.instanceColor&&(tt=W.instanceColor));const ft={};ft.attribute=tt,tt&&tt.data&&(ft.data=tt.data),j[gt]=ft,J++}h.attributes=j,h.attributesNum=J,h.index=ot}function L(){const W=h.newAttributes;for(let et=0,ct=W.length;et<ct;et++)W[et]=0}function A(W){w(W,0)}function w(W,et){const ct=h.newAttributes,ot=h.enabledAttributes,j=h.attributeDivisors;ct[W]=1,ot[W]===0&&(c.enableVertexAttribArray(W),ot[W]=1),j[W]!==et&&((n.isWebGL2?c:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](W,et),j[W]=et)}function O(){const W=h.newAttributes,et=h.enabledAttributes;for(let ct=0,ot=et.length;ct<ot;ct++)et[ct]!==W[ct]&&(c.disableVertexAttribArray(ct),et[ct]=0)}function z(W,et,ct,ot,j,q){n.isWebGL2===!0&&(ct===5124||ct===5125)?c.vertexAttribIPointer(W,et,ct,j,q):c.vertexAttribPointer(W,et,ct,ot,j,q)}function S(W,et,ct,ot){if(n.isWebGL2===!1&&(W.isInstancedMesh||ot.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;L();const j=ot.attributes,q=ct.getAttributes(),J=et.defaultAttributeValues;for(const pt in q){const gt=q[pt];if(gt.location>=0){let B=j[pt];if(B===void 0&&(pt==="instanceMatrix"&&W.instanceMatrix&&(B=W.instanceMatrix),pt==="instanceColor"&&W.instanceColor&&(B=W.instanceColor)),B!==void 0){const tt=B.normalized,ft=B.itemSize,Z=e.get(B);if(Z===void 0)continue;const It=Z.buffer,St=Z.type,Lt=Z.bytesPerElement;if(B.isInterleavedBufferAttribute){const yt=B.data,Bt=yt.stride,Ut=B.offset;if(yt.isInstancedInterleavedBuffer){for(let Ft=0;Ft<gt.locationSize;Ft++)w(gt.location+Ft,yt.meshPerAttribute);W.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Ft=0;Ft<gt.locationSize;Ft++)A(gt.location+Ft);c.bindBuffer(34962,It);for(let Ft=0;Ft<gt.locationSize;Ft++)z(gt.location+Ft,ft/gt.locationSize,St,tt,Bt*Lt,(Ut+ft/gt.locationSize*Ft)*Lt)}else{if(B.isInstancedBufferAttribute){for(let yt=0;yt<gt.locationSize;yt++)w(gt.location+yt,B.meshPerAttribute);W.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let yt=0;yt<gt.locationSize;yt++)A(gt.location+yt);c.bindBuffer(34962,It);for(let yt=0;yt<gt.locationSize;yt++)z(gt.location+yt,ft/gt.locationSize,St,tt,ft*Lt,ft/gt.locationSize*yt*Lt)}}else if(J!==void 0){const tt=J[pt];if(tt!==void 0)switch(tt.length){case 2:c.vertexAttrib2fv(gt.location,tt);break;case 3:c.vertexAttrib3fv(gt.location,tt);break;case 4:c.vertexAttrib4fv(gt.location,tt);break;default:c.vertexAttrib1fv(gt.location,tt)}}}}O()}function D(){_t();for(const W in o){const et=o[W];for(const ct in et){const ot=et[ct];for(const j in ot)b(ot[j].object),delete ot[j];delete et[ct]}delete o[W]}}function G(W){if(o[W.id]===void 0)return;const et=o[W.id];for(const ct in et){const ot=et[ct];for(const j in ot)b(ot[j].object),delete ot[j];delete et[ct]}delete o[W.id]}function nt(W){for(const et in o){const ct=o[et];if(ct[W.id]===void 0)continue;const ot=ct[W.id];for(const j in ot)b(ot[j].object),delete ot[j];delete ct[W.id]}}function _t(){Y(),d=!0,h!==f&&(h=f,x(h.object))}function Y(){f.geometry=null,f.program=null,f.wireframe=!1}return{setup:p,reset:_t,resetDefaultState:Y,dispose:D,releaseStatesOfGeometry:G,releaseStatesOfProgram:nt,initAttributes:L,enableAttribute:A,disableUnusedAttributes:O}}function ME(c,t,e,n){const r=n.isWebGL2;let s;function l(h){s=h}function o(h,d){c.drawArrays(s,h,d),e.update(d,s,1)}function f(h,d,p){if(p===0)return;let m,x;if(r)m=c,x="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[x](s,h,d,p),e.update(d,s,p)}this.setMode=l,this.render=o,this.renderInstances=f}function wE(c,t,e){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");n=c.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(z){if(z==="highp"){if(c.getShaderPrecisionFormat(35633,36338).precision>0&&c.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";z="mediump"}return z==="mediump"&&c.getShaderPrecisionFormat(35633,36337).precision>0&&c.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext!="undefined"&&c instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&c instanceof WebGL2ComputeRenderingContext;let o=e.precision!==void 0?e.precision:"highp";const f=s(o);f!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",f,"instead."),o=f);const h=l||t.has("WEBGL_draw_buffers"),d=e.logarithmicDepthBuffer===!0,p=c.getParameter(34930),m=c.getParameter(35660),x=c.getParameter(3379),b=c.getParameter(34076),g=c.getParameter(34921),_=c.getParameter(36347),y=c.getParameter(36348),T=c.getParameter(36349),L=m>0,A=l||t.has("OES_texture_float"),w=L&&A,O=l?c.getParameter(36183):0;return{isWebGL2:l,drawBuffers:h,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:b,maxAttributes:g,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:T,vertexTextures:L,floatFragmentTextures:A,floatVertexTextures:w,maxSamples:O}}function SE(c){const t=this;let e=null,n=0,r=!1,s=!1;const l=new Qr,o=new oi,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m,x){const b=p.length!==0||m||n!==0||r;return r=m,e=d(p,x,0),n=p.length,b},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1,h()},this.setState=function(p,m,x){const b=p.clippingPlanes,g=p.clipIntersection,_=p.clipShadows,y=c.get(p);if(!r||b===null||b.length===0||s&&!_)s?d(null):h();else{const T=s?0:n,L=T*4;let A=y.clippingState||null;f.value=A,A=d(b,m,L,x);for(let w=0;w!==L;++w)A[w]=e[w];y.clippingState=A,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=T}};function h(){f.value!==e&&(f.value=e,f.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(p,m,x,b){const g=p!==null?p.length:0;let _=null;if(g!==0){if(_=f.value,b!==!0||_===null){const y=x+g*4,T=m.matrixWorldInverse;o.getNormalMatrix(T),(_===null||_.length<y)&&(_=new Float32Array(y));for(let L=0,A=x;L!==g;++L,A+=4)l.copy(p[L]).applyMatrix4(T,o),l.normal.toArray(_,A),_[A+3]=l.constant}f.value=_,f.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,_}}function TE(c){let t=new WeakMap;function e(l,o){return o===Ju?l.mapping=da:o===ju&&(l.mapping=pa),l}function n(l){if(l&&l.isTexture&&l.isRenderTargetTexture===!1){const o=l.mapping;if(o===Ju||o===ju)if(t.has(l)){const f=t.get(l).texture;return e(f,l.mapping)}else{const f=l.image;if(f&&f.height>0){const h=new kw(f.height/2);return h.fromEquirectangularTexture(c,l),t.set(l,h),l.addEventListener("dispose",r),e(h.texture,l.mapping)}else return null}}return l}function r(l){const o=l.target;o.removeEventListener("dispose",r);const f=t.get(o);f!==void 0&&(t.delete(o),f.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class EE extends pg{constructor(t=-1,e=1,n=1,r=-1,s=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=l,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,l=n+t,o=r+e,f=r-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,l=s+h*this.view.width,o-=d*this.view.offsetY,f=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,l,o,f,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ra=4,nm=[.125,.215,.35,.446,.526,.582],ns=20,Ou=new EE,im=new me;let Fu=null;const ts=(1+Math.sqrt(5))/2,ta=1/ts,rm=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,ts,ta),new X(0,ts,-ta),new X(ta,0,ts),new X(-ta,0,ts),new X(ts,ta,0),new X(-ts,ta,0)];class sm{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Fu=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=om(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fu),t.scissorTest=!1,El(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===da||t.mapping===pa?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fu=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:ro,format:Ii,encoding:ps,depthBuffer:!1},r=am(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=am(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=AE(s)),this._blurMaterial=CE(s,t,e)}return r}_compileMaterial(t){const e=new Oi(this._lodPlanes[0],t);this._renderer.compile(e,Ou)}_sceneToCubeUV(t,e,n,r){const o=new Ln(90,1,e,n),f=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,m=d.toneMapping;d.getClearColor(im),d.toneMapping=ar,d.autoClear=!1;const x=new hg({name:"PMREM.Background",side:hi,depthWrite:!1,depthTest:!1}),b=new Oi(new Sa,x);let g=!1;const _=t.background;_?_.isColor&&(x.color.copy(_),t.background=null,g=!0):(x.color.copy(im),g=!0);for(let y=0;y<6;y++){const T=y%3;T===0?(o.up.set(0,f[y],0),o.lookAt(h[y],0,0)):T===1?(o.up.set(0,0,f[y]),o.lookAt(0,h[y],0)):(o.up.set(0,f[y],0),o.lookAt(0,0,h[y]));const L=this._cubeSize;El(r,T*L,y>2?L:0,L,L),d.setRenderTarget(r),g&&d.render(b,o),d.render(t,o)}b.geometry.dispose(),b.material.dispose(),d.toneMapping=m,d.autoClear=p,t.background=_}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===da||t.mapping===pa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=om());const s=r?this._cubemapMaterial:this._equirectMaterial,l=new Oi(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const f=this._cubeSize;El(e,0,0,3*f,2*f),n.setRenderTarget(e),n.render(l,Ou)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),l=rm[(r-1)%rm.length];this._blur(t,r-1,r,s,l)}e.autoClear=n}_blur(t,e,n,r,s){const l=this._pingPongRenderTarget;this._halfBlur(t,l,e,n,r,"latitudinal",s),this._halfBlur(l,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,l,o){const f=this._renderer,h=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new Oi(this._lodPlanes[r],h),m=h.uniforms,x=this._sizeLods[n]-1,b=isFinite(s)?Math.PI/(2*x):2*Math.PI/(2*ns-1),g=s/b,_=isFinite(s)?1+Math.floor(d*g):ns;_>ns&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ns}`);const y=[];let T=0;for(let z=0;z<ns;++z){const S=z/g,D=Math.exp(-S*S/2);y.push(D),z===0?T+=D:z<_&&(T+=2*D)}for(let z=0;z<y.length;z++)y[z]=y[z]/T;m.envMap.value=t.texture,m.samples.value=_,m.weights.value=y,m.latitudinal.value=l==="latitudinal",o&&(m.poleAxis.value=o);const{_lodMax:L}=this;m.dTheta.value=b,m.mipInt.value=L-n;const A=this._sizeLods[r],w=3*A*(r>L-ra?r-L+ra:0),O=4*(this._cubeSize-A);El(e,w,O,3*A,2*A),f.setRenderTarget(e),f.render(p,Ou)}}function AE(c){const t=[],e=[],n=[];let r=c;const s=c-ra+1+nm.length;for(let l=0;l<s;l++){const o=Math.pow(2,r);e.push(o);let f=1/o;l>c-ra?f=nm[l-c+ra-1]:l===0&&(f=0),n.push(f);const h=1/(o-2),d=-h,p=1+h,m=[d,d,p,d,p,p,d,d,p,p,d,p],x=6,b=6,g=3,_=2,y=1,T=new Float32Array(g*b*x),L=new Float32Array(_*b*x),A=new Float32Array(y*b*x);for(let O=0;O<x;O++){const z=O%3*2/3-1,S=O>2?0:-1,D=[z,S,0,z+2/3,S,0,z+2/3,S+1,0,z,S,0,z+2/3,S+1,0,z,S+1,0];T.set(D,g*b*O),L.set(m,_*b*O);const G=[O,O,O,O,O,O];A.set(G,y*b*O)}const w=new xs;w.setAttribute("position",new Fi(T,g)),w.setAttribute("uv",new Fi(L,_)),w.setAttribute("faceIndex",new Fi(A,y)),t.push(w),r>ra&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function am(c,t,e){const n=new ms(c,t,e);return n.texture.mapping=Gl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function El(c,t,e,n,r){c.viewport.set(t,e,n,r),c.scissor.set(t,e,n,r)}function CE(c,t,e){const n=new Float32Array(ns),r=new X(0,1,0);return new Nr({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${c}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Eh(),fragmentShader:`

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
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function om(){return new Nr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eh(),fragmentShader:`

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
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function lm(){return new Nr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function Eh(){return`

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
	`}function LE(c){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const f=o.mapping,h=f===Ju||f===ju,d=f===da||f===pa;if(h||d)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let p=t.get(o);return e===null&&(e=new sm(c)),p=h?e.fromEquirectangular(o,p):e.fromCubemap(o,p),t.set(o,p),p.texture}else{if(t.has(o))return t.get(o).texture;{const p=o.image;if(h&&p&&p.height>0||d&&p&&r(p)){e===null&&(e=new sm(c));const m=h?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,m),o.addEventListener("dispose",s),m.texture}else return null}}}return o}function r(o){let f=0;const h=6;for(let d=0;d<h;d++)o[d]!==void 0&&f++;return f===h}function s(o){const f=o.target;f.removeEventListener("dispose",s);const h=t.get(f);h!==void 0&&(t.delete(f),h.dispose())}function l(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:l}}function PE(c){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=c.getExtension("WEBGL_depth_texture")||c.getExtension("MOZ_WEBGL_depth_texture")||c.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=c.getExtension("EXT_texture_filter_anisotropic")||c.getExtension("MOZ_EXT_texture_filter_anisotropic")||c.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=c.getExtension("WEBGL_compressed_texture_s3tc")||c.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||c.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=c.getExtension("WEBGL_compressed_texture_pvrtc")||c.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=c.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const r=e(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function DE(c,t,e,n){const r={},s=new WeakMap;function l(p){const m=p.target;m.index!==null&&t.remove(m.index);for(const b in m.attributes)t.remove(m.attributes[b]);m.removeEventListener("dispose",l),delete r[m.id];const x=s.get(m);x&&(t.remove(x),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function o(p,m){return r[m.id]===!0||(m.addEventListener("dispose",l),r[m.id]=!0,e.memory.geometries++),m}function f(p){const m=p.attributes;for(const b in m)t.update(m[b],34962);const x=p.morphAttributes;for(const b in x){const g=x[b];for(let _=0,y=g.length;_<y;_++)t.update(g[_],34962)}}function h(p){const m=[],x=p.index,b=p.attributes.position;let g=0;if(x!==null){const T=x.array;g=x.version;for(let L=0,A=T.length;L<A;L+=3){const w=T[L+0],O=T[L+1],z=T[L+2];m.push(w,O,O,z,z,w)}}else{const T=b.array;g=b.version;for(let L=0,A=T.length/3-1;L<A;L+=3){const w=L+0,O=L+1,z=L+2;m.push(w,O,O,z,z,w)}}const _=new(sg(m)?dg:fg)(m,1);_.version=g;const y=s.get(p);y&&t.remove(y),s.set(p,_)}function d(p){const m=s.get(p);if(m){const x=p.index;x!==null&&m.version<x.version&&h(p)}else h(p);return s.get(p)}return{get:o,update:f,getWireframeAttribute:d}}function RE(c,t,e,n){const r=n.isWebGL2;let s;function l(m){s=m}let o,f;function h(m){o=m.type,f=m.bytesPerElement}function d(m,x){c.drawElements(s,x,o,m*f),e.update(x,s,1)}function p(m,x,b){if(b===0)return;let g,_;if(r)g=c,_="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[_](s,x,o,m*f,b),e.update(x,s,b)}this.setMode=l,this.setIndex=h,this.render=d,this.renderInstances=p}function IE(c){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,l,o){switch(e.calls++,l){case 4:e.triangles+=o*(s/3);break;case 1:e.lines+=o*(s/2);break;case 3:e.lines+=o*(s-1);break;case 2:e.lines+=o*s;break;case 0:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function OE(c,t){return c[0]-t[0]}function FE(c,t){return Math.abs(t[1])-Math.abs(c[1])}function NE(c,t,e){const n={},r=new Float32Array(8),s=new WeakMap,l=new Ce,o=[];for(let h=0;h<8;h++)o[h]=[h,0];function f(h,d,p,m){const x=h.morphTargetInfluences;if(t.isWebGL2===!0){const g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let y=s.get(d);if(y===void 0||y.count!==_){let ct=function(){W.dispose(),s.delete(d),d.removeEventListener("dispose",ct)};var b=ct;y!==void 0&&y.texture.dispose();const A=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,O=d.morphAttributes.color!==void 0,z=d.morphAttributes.position||[],S=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let G=0;A===!0&&(G=1),w===!0&&(G=2),O===!0&&(G=3);let nt=d.attributes.position.count*G,_t=1;nt>t.maxTextureSize&&(_t=Math.ceil(nt/t.maxTextureSize),nt=t.maxTextureSize);const Y=new Float32Array(nt*_t*4*_),W=new cg(Y,nt,_t,_);W.type=rs,W.needsUpdate=!0;const et=G*4;for(let ot=0;ot<_;ot++){const j=z[ot],q=S[ot],J=D[ot],pt=nt*_t*4*ot;for(let gt=0;gt<j.count;gt++){const B=gt*et;A===!0&&(l.fromBufferAttribute(j,gt),Y[pt+B+0]=l.x,Y[pt+B+1]=l.y,Y[pt+B+2]=l.z,Y[pt+B+3]=0),w===!0&&(l.fromBufferAttribute(q,gt),Y[pt+B+4]=l.x,Y[pt+B+5]=l.y,Y[pt+B+6]=l.z,Y[pt+B+7]=0),O===!0&&(l.fromBufferAttribute(J,gt),Y[pt+B+8]=l.x,Y[pt+B+9]=l.y,Y[pt+B+10]=l.z,Y[pt+B+11]=J.itemSize===4?l.w:1)}}y={count:_,texture:W,size:new Xt(nt,_t)},s.set(d,y),d.addEventListener("dispose",ct)}let T=0;for(let A=0;A<x.length;A++)T+=x[A];const L=d.morphTargetsRelative?1:1-T;m.getUniforms().setValue(c,"morphTargetBaseInfluence",L),m.getUniforms().setValue(c,"morphTargetInfluences",x),m.getUniforms().setValue(c,"morphTargetsTexture",y.texture,e),m.getUniforms().setValue(c,"morphTargetsTextureSize",y.size)}else{const g=x===void 0?0:x.length;let _=n[d.id];if(_===void 0||_.length!==g){_=[];for(let w=0;w<g;w++)_[w]=[w,0];n[d.id]=_}for(let w=0;w<g;w++){const O=_[w];O[0]=w,O[1]=x[w]}_.sort(FE);for(let w=0;w<8;w++)w<g&&_[w][1]?(o[w][0]=_[w][0],o[w][1]=_[w][1]):(o[w][0]=Number.MAX_SAFE_INTEGER,o[w][1]=0);o.sort(OE);const y=d.morphAttributes.position,T=d.morphAttributes.normal;let L=0;for(let w=0;w<8;w++){const O=o[w],z=O[0],S=O[1];z!==Number.MAX_SAFE_INTEGER&&S?(y&&d.getAttribute("morphTarget"+w)!==y[z]&&d.setAttribute("morphTarget"+w,y[z]),T&&d.getAttribute("morphNormal"+w)!==T[z]&&d.setAttribute("morphNormal"+w,T[z]),r[w]=S,L+=S):(y&&d.hasAttribute("morphTarget"+w)===!0&&d.deleteAttribute("morphTarget"+w),T&&d.hasAttribute("morphNormal"+w)===!0&&d.deleteAttribute("morphNormal"+w),r[w]=0)}const A=d.morphTargetsRelative?1:1-L;m.getUniforms().setValue(c,"morphTargetBaseInfluence",A),m.getUniforms().setValue(c,"morphTargetInfluences",r)}}return{update:f}}function zE(c,t,e,n){let r=new WeakMap;function s(f){const h=n.render.frame,d=f.geometry,p=t.get(f,d);return r.get(p)!==h&&(t.update(p),r.set(p,h)),f.isInstancedMesh&&(f.hasEventListener("dispose",o)===!1&&f.addEventListener("dispose",o),e.update(f.instanceMatrix,34962),f.instanceColor!==null&&e.update(f.instanceColor,34962)),p}function l(){r=new WeakMap}function o(f){const h=f.target;h.removeEventListener("dispose",o),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:s,dispose:l}}const _g=new di,vg=new cg,xg=new Sw,yg=new mg,cm=[],um=[],hm=new Float32Array(16),fm=new Float32Array(9),dm=new Float32Array(4);function Ta(c,t,e){const n=c[0];if(n<=0||n>0)return c;const r=t*e;let s=cm[r];if(s===void 0&&(s=new Float32Array(r),cm[r]=s),t!==0){n.toArray(s,0);for(let l=1,o=0;l!==t;++l)o+=e,c[l].toArray(s,o)}return s}function yn(c,t){if(c.length!==t.length)return!1;for(let e=0,n=c.length;e<n;e++)if(c[e]!==t[e])return!1;return!0}function bn(c,t){for(let e=0,n=t.length;e<n;e++)c[e]=t[e]}function Hl(c,t){let e=um[t];e===void 0&&(e=new Int32Array(t),um[t]=e);for(let n=0;n!==t;++n)e[n]=c.allocateTextureUnit();return e}function UE(c,t){const e=this.cache;e[0]!==t&&(c.uniform1f(this.addr,t),e[0]=t)}function BE(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(c.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(yn(e,t))return;c.uniform2fv(this.addr,t),bn(e,t)}}function kE(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(c.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(c.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(yn(e,t))return;c.uniform3fv(this.addr,t),bn(e,t)}}function GE(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(c.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(yn(e,t))return;c.uniform4fv(this.addr,t),bn(e,t)}}function VE(c,t){const e=this.cache,n=t.elements;if(n===void 0){if(yn(e,t))return;c.uniformMatrix2fv(this.addr,!1,t),bn(e,t)}else{if(yn(e,n))return;dm.set(n),c.uniformMatrix2fv(this.addr,!1,dm),bn(e,n)}}function WE(c,t){const e=this.cache,n=t.elements;if(n===void 0){if(yn(e,t))return;c.uniformMatrix3fv(this.addr,!1,t),bn(e,t)}else{if(yn(e,n))return;fm.set(n),c.uniformMatrix3fv(this.addr,!1,fm),bn(e,n)}}function HE(c,t){const e=this.cache,n=t.elements;if(n===void 0){if(yn(e,t))return;c.uniformMatrix4fv(this.addr,!1,t),bn(e,t)}else{if(yn(e,n))return;hm.set(n),c.uniformMatrix4fv(this.addr,!1,hm),bn(e,n)}}function XE(c,t){const e=this.cache;e[0]!==t&&(c.uniform1i(this.addr,t),e[0]=t)}function qE(c,t){const e=this.cache;yn(e,t)||(c.uniform2iv(this.addr,t),bn(e,t))}function $E(c,t){const e=this.cache;yn(e,t)||(c.uniform3iv(this.addr,t),bn(e,t))}function YE(c,t){const e=this.cache;yn(e,t)||(c.uniform4iv(this.addr,t),bn(e,t))}function ZE(c,t){const e=this.cache;e[0]!==t&&(c.uniform1ui(this.addr,t),e[0]=t)}function KE(c,t){const e=this.cache;yn(e,t)||(c.uniform2uiv(this.addr,t),bn(e,t))}function JE(c,t){const e=this.cache;yn(e,t)||(c.uniform3uiv(this.addr,t),bn(e,t))}function jE(c,t){const e=this.cache;yn(e,t)||(c.uniform4uiv(this.addr,t),bn(e,t))}function QE(c,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(c.uniform1i(this.addr,r),n[0]=r),e.setTexture2D(t||_g,r)}function tA(c,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(c.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||xg,r)}function eA(c,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(c.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||yg,r)}function nA(c,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(c.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||vg,r)}function iA(c){switch(c){case 5126:return UE;case 35664:return BE;case 35665:return kE;case 35666:return GE;case 35674:return VE;case 35675:return WE;case 35676:return HE;case 5124:case 35670:return XE;case 35667:case 35671:return qE;case 35668:case 35672:return $E;case 35669:case 35673:return YE;case 5125:return ZE;case 36294:return KE;case 36295:return JE;case 36296:return jE;case 35678:case 36198:case 36298:case 36306:case 35682:return QE;case 35679:case 36299:case 36307:return tA;case 35680:case 36300:case 36308:case 36293:return eA;case 36289:case 36303:case 36311:case 36292:return nA}}function rA(c,t){c.uniform1fv(this.addr,t)}function sA(c,t){const e=Ta(t,this.size,2);c.uniform2fv(this.addr,e)}function aA(c,t){const e=Ta(t,this.size,3);c.uniform3fv(this.addr,e)}function oA(c,t){const e=Ta(t,this.size,4);c.uniform4fv(this.addr,e)}function lA(c,t){const e=Ta(t,this.size,4);c.uniformMatrix2fv(this.addr,!1,e)}function cA(c,t){const e=Ta(t,this.size,9);c.uniformMatrix3fv(this.addr,!1,e)}function uA(c,t){const e=Ta(t,this.size,16);c.uniformMatrix4fv(this.addr,!1,e)}function hA(c,t){c.uniform1iv(this.addr,t)}function fA(c,t){c.uniform2iv(this.addr,t)}function dA(c,t){c.uniform3iv(this.addr,t)}function pA(c,t){c.uniform4iv(this.addr,t)}function mA(c,t){c.uniform1uiv(this.addr,t)}function gA(c,t){c.uniform2uiv(this.addr,t)}function _A(c,t){c.uniform3uiv(this.addr,t)}function vA(c,t){c.uniform4uiv(this.addr,t)}function xA(c,t,e){const n=t.length,r=Hl(e,n);c.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)e.setTexture2D(t[s]||_g,r[s])}function yA(c,t,e){const n=t.length,r=Hl(e,n);c.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)e.setTexture3D(t[s]||xg,r[s])}function bA(c,t,e){const n=t.length,r=Hl(e,n);c.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)e.setTextureCube(t[s]||yg,r[s])}function MA(c,t,e){const n=t.length,r=Hl(e,n);c.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)e.setTexture2DArray(t[s]||vg,r[s])}function wA(c){switch(c){case 5126:return rA;case 35664:return sA;case 35665:return aA;case 35666:return oA;case 35674:return lA;case 35675:return cA;case 35676:return uA;case 5124:case 35670:return hA;case 35667:case 35671:return fA;case 35668:case 35672:return dA;case 35669:case 35673:return pA;case 5125:return mA;case 36294:return gA;case 36295:return _A;case 36296:return vA;case 35678:case 36198:case 36298:case 36306:case 35682:return xA;case 35679:case 36299:case 36307:return yA;case 35680:case 36300:case 36308:case 36293:return bA;case 36289:case 36303:case 36311:case 36292:return MA}}class SA{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=iA(e.type)}}class TA{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=wA(e.type)}}class EA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,l=r.length;s!==l;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const Nu=/(\w+)(\])?(\[|\.)?/g;function pm(c,t){c.seq.push(t),c.map[t.id]=t}function AA(c,t,e){const n=c.name,r=n.length;for(Nu.lastIndex=0;;){const s=Nu.exec(n),l=Nu.lastIndex;let o=s[1];const f=s[2]==="]",h=s[3];if(f&&(o=o|0),h===void 0||h==="["&&l+2===r){pm(e,h===void 0?new SA(o,c,t):new TA(o,c,t));break}else{let p=e.map[o];p===void 0&&(p=new EA(o),pm(e,p)),e=p}}}class Ll{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),l=t.getUniformLocation(e,s.name);AA(s,l,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,l=e.length;s!==l;++s){const o=e[s],f=n[o.id];f.needsUpdate!==!1&&o.setValue(t,f.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const l=t[r];l.id in e&&n.push(l)}return n}}function mm(c,t,e){const n=c.createShader(t);return c.shaderSource(n,e),c.compileShader(n),n}let CA=0;function LA(c,t){const e=c.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let l=r;l<s;l++){const o=l+1;n.push(`${o===t?">":" "} ${o}: ${e[l]}`)}return n.join(`
`)}function PA(c){switch(c){case ps:return["Linear","( value )"];case Ne:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",c),["Linear","( value )"]}}function gm(c,t,e){const n=c.getShaderParameter(t,35713),r=c.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const l=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+LA(c.getShaderSource(t),l)}else return r}function DA(c,t){const e=PA(t);return"vec4 "+c+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function RA(c,t){let e;switch(t){case J1:e="Linear";break;case j1:e="Reinhard";break;case Q1:e="OptimizedCineon";break;case tw:e="ACESFilmic";break;case ew:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+c+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function IA(c){return[c.extensionDerivatives||!!c.envMapCubeUVHeight||c.bumpMap||c.tangentSpaceNormalMap||c.clearcoatNormalMap||c.flatShading||c.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(c.extensionFragDepth||c.logarithmicDepthBuffer)&&c.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",c.extensionDrawBuffers&&c.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(c.extensionShaderTextureLOD||c.envMap||c.transmission)&&c.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ka).join(`
`)}function OA(c){const t=[];for(const e in c){const n=c[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function FA(c,t){const e={},n=c.getProgramParameter(t,35721);for(let r=0;r<n;r++){const s=c.getActiveAttrib(t,r),l=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),e[l]={type:s.type,location:c.getAttribLocation(t,l),locationSize:o}}return e}function Ka(c){return c!==""}function _m(c,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return c.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vm(c,t){return c.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const NA=/^[ \t]*#include +<([\w\d./]+)>/gm;function ih(c){return c.replace(NA,zA)}function zA(c,t){const e=ee[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return ih(e)}const UA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xm(c){return c.replace(UA,BA)}function BA(c,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ym(c){let t="precision "+c.precision+` float;
precision `+c.precision+" int;";return c.precision==="highp"?t+=`
#define HIGH_PRECISION`:c.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:c.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function kA(c){let t="SHADOWMAP_TYPE_BASIC";return c.shadowMapType===Qm?t="SHADOWMAP_TYPE_PCF":c.shadowMapType===L1?t="SHADOWMAP_TYPE_PCF_SOFT":c.shadowMapType===Za&&(t="SHADOWMAP_TYPE_VSM"),t}function GA(c){let t="ENVMAP_TYPE_CUBE";if(c.envMap)switch(c.envMapMode){case da:case pa:t="ENVMAP_TYPE_CUBE";break;case Gl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function VA(c){let t="ENVMAP_MODE_REFLECTION";if(c.envMap)switch(c.envMapMode){case pa:t="ENVMAP_MODE_REFRACTION";break}return t}function WA(c){let t="ENVMAP_BLENDING_NONE";if(c.envMap)switch(c.combine){case Mh:t="ENVMAP_BLENDING_MULTIPLY";break;case Z1:t="ENVMAP_BLENDING_MIX";break;case K1:t="ENVMAP_BLENDING_ADD";break}return t}function HA(c){const t=c.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function XA(c,t,e,n){const r=c.getContext(),s=e.defines;let l=e.vertexShader,o=e.fragmentShader;const f=kA(e),h=GA(e),d=VA(e),p=WA(e),m=HA(e),x=e.isWebGL2?"":IA(e),b=OA(s),g=r.createProgram();let _,y,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=[b].filter(Ka).join(`
`),_.length>0&&(_+=`
`),y=[x,b].filter(Ka).join(`
`),y.length>0&&(y+=`
`)):(_=[ym(e),"#define SHADER_NAME "+e.shaderName,b,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+f:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ka).join(`
`),y=[x,ym(e),"#define SHADER_NAME "+e.shaderName,b,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+f:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ar?"#define TONE_MAPPING":"",e.toneMapping!==ar?ee.tonemapping_pars_fragment:"",e.toneMapping!==ar?RA("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.encodings_pars_fragment,DA("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ka).join(`
`)),l=ih(l),l=_m(l,e),l=vm(l,e),o=ih(o),o=_m(o,e),o=vm(o,e),l=xm(l),o=xm(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,_=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,y=["#define varying in",e.glslVersion===Vp?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const L=T+_+l,A=T+y+o,w=mm(r,35633,L),O=mm(r,35632,A);if(r.attachShader(g,w),r.attachShader(g,O),e.index0AttributeName!==void 0?r.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),c.debug.checkShaderErrors){const D=r.getProgramInfoLog(g).trim(),G=r.getShaderInfoLog(w).trim(),nt=r.getShaderInfoLog(O).trim();let _t=!0,Y=!0;if(r.getProgramParameter(g,35714)===!1){_t=!1;const W=gm(r,w,"vertex"),et=gm(r,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,35715)+`

Program Info Log: `+D+`
`+W+`
`+et)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(G===""||nt==="")&&(Y=!1);Y&&(this.diagnostics={runnable:_t,programLog:D,vertexShader:{log:G,prefix:_},fragmentShader:{log:nt,prefix:y}})}r.deleteShader(w),r.deleteShader(O);let z;this.getUniforms=function(){return z===void 0&&(z=new Ll(r,g)),z};let S;return this.getAttributes=function(){return S===void 0&&(S=FA(r,g)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.name=e.shaderName,this.id=CA++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=O,this}let qA=0;class $A{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),l=this._getShaderCacheForMaterial(t);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new YA(t),e.set(t,n)),n}}class YA{constructor(t){this.id=qA++,this.code=t,this.usedTimes=0}}function ZA(c,t,e,n,r,s,l){const o=new Sh,f=new $A,h=[],d=r.isWebGL2,p=r.logarithmicDepthBuffer,m=r.vertexTextures;let x=r.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S,D,G,nt,_t){const Y=nt.fog,W=_t.geometry,et=S.isMeshStandardMaterial?nt.environment:null,ct=(S.isMeshStandardMaterial?e:t).get(S.envMap||et),ot=!!ct&&ct.mapping===Gl?ct.image.height:null,j=b[S.type];S.precision!==null&&(x=r.getMaxPrecision(S.precision),x!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",x,"instead."));const q=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,J=q!==void 0?q.length:0;let pt=0;W.morphAttributes.position!==void 0&&(pt=1),W.morphAttributes.normal!==void 0&&(pt=2),W.morphAttributes.color!==void 0&&(pt=3);let gt,B,tt,ft;if(j){const Bt=Di[j];gt=Bt.vertexShader,B=Bt.fragmentShader}else gt=S.vertexShader,B=S.fragmentShader,f.update(S),tt=f.getVertexShaderID(S),ft=f.getFragmentShaderID(S);const Z=c.getRenderTarget(),It=S.alphaTest>0,St=S.clearcoat>0,Lt=S.iridescence>0;return{isWebGL2:d,shaderID:j,shaderName:S.type,vertexShader:gt,fragmentShader:B,defines:S.defines,customVertexShaderID:tt,customFragmentShaderID:ft,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:x,instancing:_t.isInstancedMesh===!0,instancingColor:_t.isInstancedMesh===!0&&_t.instanceColor!==null,supportsVertexTextures:m,outputEncoding:Z===null?c.outputEncoding:Z.isXRRenderTarget===!0?Z.texture.encoding:ps,map:!!S.map,matcap:!!S.matcap,envMap:!!ct,envMapMode:ct&&ct.mapping,envMapCubeUVHeight:ot,lightMap:!!S.lightMap,aoMap:!!S.aoMap,emissiveMap:!!S.emissiveMap,bumpMap:!!S.bumpMap,normalMap:!!S.normalMap,objectSpaceNormalMap:S.normalMapType===yw,tangentSpaceNormalMap:S.normalMapType===rg,decodeVideoTexture:!!S.map&&S.map.isVideoTexture===!0&&S.map.encoding===Ne,clearcoat:St,clearcoatMap:St&&!!S.clearcoatMap,clearcoatRoughnessMap:St&&!!S.clearcoatRoughnessMap,clearcoatNormalMap:St&&!!S.clearcoatNormalMap,iridescence:Lt,iridescenceMap:Lt&&!!S.iridescenceMap,iridescenceThicknessMap:Lt&&!!S.iridescenceThicknessMap,displacementMap:!!S.displacementMap,roughnessMap:!!S.roughnessMap,metalnessMap:!!S.metalnessMap,specularMap:!!S.specularMap,specularIntensityMap:!!S.specularIntensityMap,specularColorMap:!!S.specularColorMap,opaque:S.transparent===!1&&S.blending===oa,alphaMap:!!S.alphaMap,alphaTest:It,gradientMap:!!S.gradientMap,sheen:S.sheen>0,sheenColorMap:!!S.sheenColorMap,sheenRoughnessMap:!!S.sheenRoughnessMap,transmission:S.transmission>0,transmissionMap:!!S.transmissionMap,thicknessMap:!!S.thicknessMap,combine:S.combine,vertexTangents:!!S.normalMap&&!!W.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUvs:!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatMap||!!S.clearcoatRoughnessMap||!!S.clearcoatNormalMap||!!S.iridescenceMap||!!S.iridescenceThicknessMap||!!S.displacementMap||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||!!S.sheenColorMap||!!S.sheenRoughnessMap,uvsVertexOnly:!(!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatNormalMap||!!S.iridescenceMap||!!S.iridescenceThicknessMap||S.transmission>0||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||S.sheen>0||!!S.sheenColorMap||!!S.sheenRoughnessMap)&&!!S.displacementMap,fog:!!Y,useFog:S.fog===!0,fogExp2:Y&&Y.isFogExp2,flatShading:!!S.flatShading,sizeAttenuation:S.sizeAttenuation,logarithmicDepthBuffer:p,skinning:_t.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:pt,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:S.dithering,shadowMapEnabled:c.shadowMap.enabled&&G.length>0,shadowMapType:c.shadowMap.type,toneMapping:S.toneMapped?c.toneMapping:ar,physicallyCorrectLights:c.physicallyCorrectLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Lr,flipSided:S.side===hi,useDepthPacking:!!S.depthPacking,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:S.extensions&&S.extensions.derivatives,extensionFragDepth:S.extensions&&S.extensions.fragDepth,extensionDrawBuffers:S.extensions&&S.extensions.drawBuffers,extensionShaderTextureLOD:S.extensions&&S.extensions.shaderTextureLOD,rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function _(S){const D=[];if(S.shaderID?D.push(S.shaderID):(D.push(S.customVertexShaderID),D.push(S.customFragmentShaderID)),S.defines!==void 0)for(const G in S.defines)D.push(G),D.push(S.defines[G]);return S.isRawShaderMaterial===!1&&(y(D,S),T(D,S),D.push(c.outputEncoding)),D.push(S.customProgramCacheKey),D.join()}function y(S,D){S.push(D.precision),S.push(D.outputEncoding),S.push(D.envMapMode),S.push(D.envMapCubeUVHeight),S.push(D.combine),S.push(D.vertexUvs),S.push(D.fogExp2),S.push(D.sizeAttenuation),S.push(D.morphTargetsCount),S.push(D.morphAttributeCount),S.push(D.numDirLights),S.push(D.numPointLights),S.push(D.numSpotLights),S.push(D.numSpotLightMaps),S.push(D.numHemiLights),S.push(D.numRectAreaLights),S.push(D.numDirLightShadows),S.push(D.numPointLightShadows),S.push(D.numSpotLightShadows),S.push(D.numSpotLightShadowsWithMaps),S.push(D.shadowMapType),S.push(D.toneMapping),S.push(D.numClippingPlanes),S.push(D.numClipIntersection),S.push(D.depthPacking)}function T(S,D){o.disableAll(),D.isWebGL2&&o.enable(0),D.supportsVertexTextures&&o.enable(1),D.instancing&&o.enable(2),D.instancingColor&&o.enable(3),D.map&&o.enable(4),D.matcap&&o.enable(5),D.envMap&&o.enable(6),D.lightMap&&o.enable(7),D.aoMap&&o.enable(8),D.emissiveMap&&o.enable(9),D.bumpMap&&o.enable(10),D.normalMap&&o.enable(11),D.objectSpaceNormalMap&&o.enable(12),D.tangentSpaceNormalMap&&o.enable(13),D.clearcoat&&o.enable(14),D.clearcoatMap&&o.enable(15),D.clearcoatRoughnessMap&&o.enable(16),D.clearcoatNormalMap&&o.enable(17),D.iridescence&&o.enable(18),D.iridescenceMap&&o.enable(19),D.iridescenceThicknessMap&&o.enable(20),D.displacementMap&&o.enable(21),D.specularMap&&o.enable(22),D.roughnessMap&&o.enable(23),D.metalnessMap&&o.enable(24),D.gradientMap&&o.enable(25),D.alphaMap&&o.enable(26),D.alphaTest&&o.enable(27),D.vertexColors&&o.enable(28),D.vertexAlphas&&o.enable(29),D.vertexUvs&&o.enable(30),D.vertexTangents&&o.enable(31),D.uvsVertexOnly&&o.enable(32),S.push(o.mask),o.disableAll(),D.fog&&o.enable(0),D.useFog&&o.enable(1),D.flatShading&&o.enable(2),D.logarithmicDepthBuffer&&o.enable(3),D.skinning&&o.enable(4),D.morphTargets&&o.enable(5),D.morphNormals&&o.enable(6),D.morphColors&&o.enable(7),D.premultipliedAlpha&&o.enable(8),D.shadowMapEnabled&&o.enable(9),D.physicallyCorrectLights&&o.enable(10),D.doubleSided&&o.enable(11),D.flipSided&&o.enable(12),D.useDepthPacking&&o.enable(13),D.dithering&&o.enable(14),D.specularIntensityMap&&o.enable(15),D.specularColorMap&&o.enable(16),D.transmission&&o.enable(17),D.transmissionMap&&o.enable(18),D.thicknessMap&&o.enable(19),D.sheen&&o.enable(20),D.sheenColorMap&&o.enable(21),D.sheenRoughnessMap&&o.enable(22),D.decodeVideoTexture&&o.enable(23),D.opaque&&o.enable(24),S.push(o.mask)}function L(S){const D=b[S.type];let G;if(D){const nt=Di[D];G=Nw.clone(nt.uniforms)}else G=S.uniforms;return G}function A(S,D){let G;for(let nt=0,_t=h.length;nt<_t;nt++){const Y=h[nt];if(Y.cacheKey===D){G=Y,++G.usedTimes;break}}return G===void 0&&(G=new XA(c,D,S,s),h.push(G)),G}function w(S){if(--S.usedTimes===0){const D=h.indexOf(S);h[D]=h[h.length-1],h.pop(),S.destroy()}}function O(S){f.remove(S)}function z(){f.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:L,acquireProgram:A,releaseProgram:w,releaseShaderCache:O,programs:h,dispose:z}}function KA(){let c=new WeakMap;function t(s){let l=c.get(s);return l===void 0&&(l={},c.set(s,l)),l}function e(s){c.delete(s)}function n(s,l,o){c.get(s)[l]=o}function r(){c=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function JA(c,t){return c.groupOrder!==t.groupOrder?c.groupOrder-t.groupOrder:c.renderOrder!==t.renderOrder?c.renderOrder-t.renderOrder:c.material.id!==t.material.id?c.material.id-t.material.id:c.z!==t.z?c.z-t.z:c.id-t.id}function bm(c,t){return c.groupOrder!==t.groupOrder?c.groupOrder-t.groupOrder:c.renderOrder!==t.renderOrder?c.renderOrder-t.renderOrder:c.z!==t.z?t.z-c.z:c.id-t.id}function Mm(){const c=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function l(p,m,x,b,g,_){let y=c[t];return y===void 0?(y={id:p.id,object:p,geometry:m,material:x,groupOrder:b,renderOrder:p.renderOrder,z:g,group:_},c[t]=y):(y.id=p.id,y.object=p,y.geometry=m,y.material=x,y.groupOrder=b,y.renderOrder=p.renderOrder,y.z=g,y.group=_),t++,y}function o(p,m,x,b,g,_){const y=l(p,m,x,b,g,_);x.transmission>0?n.push(y):x.transparent===!0?r.push(y):e.push(y)}function f(p,m,x,b,g,_){const y=l(p,m,x,b,g,_);x.transmission>0?n.unshift(y):x.transparent===!0?r.unshift(y):e.unshift(y)}function h(p,m){e.length>1&&e.sort(p||JA),n.length>1&&n.sort(m||bm),r.length>1&&r.sort(m||bm)}function d(){for(let p=t,m=c.length;p<m;p++){const x=c[p];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:f,finish:d,sort:h}}function jA(){let c=new WeakMap;function t(n,r){const s=c.get(n);let l;return s===void 0?(l=new Mm,c.set(n,[l])):r>=s.length?(l=new Mm,s.push(l)):l=s[r],l}function e(){c=new WeakMap}return{get:t,dispose:e}}function QA(){const c={};return{get:function(t){if(c[t.id]!==void 0)return c[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new X,color:new me};break;case"SpotLight":e={position:new X,direction:new X,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new X,color:new me,distance:0,decay:0};break;case"HemisphereLight":e={direction:new X,skyColor:new me,groundColor:new me};break;case"RectAreaLight":e={color:new me,position:new X,halfWidth:new X,halfHeight:new X};break}return c[t.id]=e,e}}}function tC(){const c={};return{get:function(t){if(c[t.id]!==void 0)return c[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return c[t.id]=e,e}}}let eC=0;function nC(c,t){return(t.castShadow?2:0)-(c.castShadow?2:0)+(t.map?1:0)-(c.map?1:0)}function iC(c,t){const e=new QA,n=tC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let d=0;d<9;d++)r.probe.push(new X);const s=new X,l=new Xe,o=new Xe;function f(d,p){let m=0,x=0,b=0;for(let nt=0;nt<9;nt++)r.probe[nt].set(0,0,0);let g=0,_=0,y=0,T=0,L=0,A=0,w=0,O=0,z=0,S=0;d.sort(nC);const D=p!==!0?Math.PI:1;for(let nt=0,_t=d.length;nt<_t;nt++){const Y=d[nt],W=Y.color,et=Y.intensity,ct=Y.distance,ot=Y.shadow&&Y.shadow.map?Y.shadow.map.texture:null;if(Y.isAmbientLight)m+=W.r*et*D,x+=W.g*et*D,b+=W.b*et*D;else if(Y.isLightProbe)for(let j=0;j<9;j++)r.probe[j].addScaledVector(Y.sh.coefficients[j],et);else if(Y.isDirectionalLight){const j=e.get(Y);if(j.color.copy(Y.color).multiplyScalar(Y.intensity*D),Y.castShadow){const q=Y.shadow,J=n.get(Y);J.shadowBias=q.bias,J.shadowNormalBias=q.normalBias,J.shadowRadius=q.radius,J.shadowMapSize=q.mapSize,r.directionalShadow[g]=J,r.directionalShadowMap[g]=ot,r.directionalShadowMatrix[g]=Y.shadow.matrix,A++}r.directional[g]=j,g++}else if(Y.isSpotLight){const j=e.get(Y);j.position.setFromMatrixPosition(Y.matrixWorld),j.color.copy(W).multiplyScalar(et*D),j.distance=ct,j.coneCos=Math.cos(Y.angle),j.penumbraCos=Math.cos(Y.angle*(1-Y.penumbra)),j.decay=Y.decay,r.spot[y]=j;const q=Y.shadow;if(Y.map&&(r.spotLightMap[z]=Y.map,z++,q.updateMatrices(Y),Y.castShadow&&S++),r.spotLightMatrix[y]=q.matrix,Y.castShadow){const J=n.get(Y);J.shadowBias=q.bias,J.shadowNormalBias=q.normalBias,J.shadowRadius=q.radius,J.shadowMapSize=q.mapSize,r.spotShadow[y]=J,r.spotShadowMap[y]=ot,O++}y++}else if(Y.isRectAreaLight){const j=e.get(Y);j.color.copy(W).multiplyScalar(et),j.halfWidth.set(Y.width*.5,0,0),j.halfHeight.set(0,Y.height*.5,0),r.rectArea[T]=j,T++}else if(Y.isPointLight){const j=e.get(Y);if(j.color.copy(Y.color).multiplyScalar(Y.intensity*D),j.distance=Y.distance,j.decay=Y.decay,Y.castShadow){const q=Y.shadow,J=n.get(Y);J.shadowBias=q.bias,J.shadowNormalBias=q.normalBias,J.shadowRadius=q.radius,J.shadowMapSize=q.mapSize,J.shadowCameraNear=q.camera.near,J.shadowCameraFar=q.camera.far,r.pointShadow[_]=J,r.pointShadowMap[_]=ot,r.pointShadowMatrix[_]=Y.shadow.matrix,w++}r.point[_]=j,_++}else if(Y.isHemisphereLight){const j=e.get(Y);j.skyColor.copy(Y.color).multiplyScalar(et*D),j.groundColor.copy(Y.groundColor).multiplyScalar(et*D),r.hemi[L]=j,L++}}T>0&&(t.isWebGL2||c.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=wt.LTC_FLOAT_1,r.rectAreaLTC2=wt.LTC_FLOAT_2):c.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=wt.LTC_HALF_1,r.rectAreaLTC2=wt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=m,r.ambient[1]=x,r.ambient[2]=b;const G=r.hash;(G.directionalLength!==g||G.pointLength!==_||G.spotLength!==y||G.rectAreaLength!==T||G.hemiLength!==L||G.numDirectionalShadows!==A||G.numPointShadows!==w||G.numSpotShadows!==O||G.numSpotMaps!==z)&&(r.directional.length=g,r.spot.length=y,r.rectArea.length=T,r.point.length=_,r.hemi.length=L,r.directionalShadow.length=A,r.directionalShadowMap.length=A,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=O,r.spotShadowMap.length=O,r.directionalShadowMatrix.length=A,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=O+z-S,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=S,G.directionalLength=g,G.pointLength=_,G.spotLength=y,G.rectAreaLength=T,G.hemiLength=L,G.numDirectionalShadows=A,G.numPointShadows=w,G.numSpotShadows=O,G.numSpotMaps=z,r.version=eC++)}function h(d,p){let m=0,x=0,b=0,g=0,_=0;const y=p.matrixWorldInverse;for(let T=0,L=d.length;T<L;T++){const A=d[T];if(A.isDirectionalLight){const w=r.directional[m];w.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(y),m++}else if(A.isSpotLight){const w=r.spot[b];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(y),w.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(y),b++}else if(A.isRectAreaLight){const w=r.rectArea[g];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(y),o.identity(),l.copy(A.matrixWorld),l.premultiply(y),o.extractRotation(l),w.halfWidth.set(A.width*.5,0,0),w.halfHeight.set(0,A.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),g++}else if(A.isPointLight){const w=r.point[x];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(y),x++}else if(A.isHemisphereLight){const w=r.hemi[_];w.direction.setFromMatrixPosition(A.matrixWorld),w.direction.transformDirection(y),_++}}}return{setup:f,setupView:h,state:r}}function wm(c,t){const e=new iC(c,t),n=[],r=[];function s(){n.length=0,r.length=0}function l(p){n.push(p)}function o(p){r.push(p)}function f(p){e.setup(n,p)}function h(p){e.setupView(n,p)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:e},setupLights:f,setupLightsView:h,pushLight:l,pushShadow:o}}function rC(c,t){let e=new WeakMap;function n(s,l=0){const o=e.get(s);let f;return o===void 0?(f=new wm(c,t),e.set(s,[f])):l>=o.length?(f=new wm(c,t),o.push(f)):f=o[l],f}function r(){e=new WeakMap}return{get:n,dispose:r}}class sC extends _o{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class aC extends _o{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new X,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const oC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lC=`uniform sampler2D shadow_pass;
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
}`;function cC(c,t,e){let n=new Th;const r=new Xt,s=new Xt,l=new Ce,o=new sC({depthPacking:xw}),f=new aC,h={},d=e.maxTextureSize,p={0:hi,1:fa,2:Lr},m=new Nr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:oC,fragmentShader:lC}),x=m.clone();x.defines.HORIZONTAL_PASS=1;const b=new xs;b.setAttribute("position",new Fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Oi(b,m),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qm,this.render=function(A,w,O){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||A.length===0)return;const z=c.getRenderTarget(),S=c.getActiveCubeFace(),D=c.getActiveMipmapLevel(),G=c.state;G.setBlending(Ir),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);for(let nt=0,_t=A.length;nt<_t;nt++){const Y=A[nt],W=Y.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const et=W.getFrameExtents();if(r.multiply(et),s.copy(W.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/et.x),r.x=s.x*et.x,W.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/et.y),r.y=s.y*et.y,W.mapSize.y=s.y)),W.map===null){const ot=this.type!==Za?{minFilter:An,magFilter:An}:{};W.map=new ms(r.x,r.y,ot),W.map.texture.name=Y.name+".shadowMap",W.camera.updateProjectionMatrix()}c.setRenderTarget(W.map),c.clear();const ct=W.getViewportCount();for(let ot=0;ot<ct;ot++){const j=W.getViewport(ot);l.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),G.viewport(l),W.updateMatrices(Y,ot),n=W.getFrustum(),L(w,O,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===Za&&y(W,O),W.needsUpdate=!1}_.needsUpdate=!1,c.setRenderTarget(z,S,D)};function y(A,w){const O=t.update(g);m.defines.VSM_SAMPLES!==A.blurSamples&&(m.defines.VSM_SAMPLES=A.blurSamples,x.defines.VSM_SAMPLES=A.blurSamples,m.needsUpdate=!0,x.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ms(r.x,r.y)),m.uniforms.shadow_pass.value=A.map.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,c.setRenderTarget(A.mapPass),c.clear(),c.renderBufferDirect(w,null,O,m,g,null),x.uniforms.shadow_pass.value=A.mapPass.texture,x.uniforms.resolution.value=A.mapSize,x.uniforms.radius.value=A.radius,c.setRenderTarget(A.map),c.clear(),c.renderBufferDirect(w,null,O,x,g,null)}function T(A,w,O,z,S,D){let G=null;const nt=O.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(nt!==void 0?G=nt:G=O.isPointLight===!0?f:o,c.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0){const _t=G.uuid,Y=w.uuid;let W=h[_t];W===void 0&&(W={},h[_t]=W);let et=W[Y];et===void 0&&(et=G.clone(),W[Y]=et),G=et}return G.visible=w.visible,G.wireframe=w.wireframe,D===Za?G.side=w.shadowSide!==null?w.shadowSide:w.side:G.side=w.shadowSide!==null?w.shadowSide:p[w.side],G.alphaMap=w.alphaMap,G.alphaTest=w.alphaTest,G.clipShadows=w.clipShadows,G.clippingPlanes=w.clippingPlanes,G.clipIntersection=w.clipIntersection,G.displacementMap=w.displacementMap,G.displacementScale=w.displacementScale,G.displacementBias=w.displacementBias,G.wireframeLinewidth=w.wireframeLinewidth,G.linewidth=w.linewidth,O.isPointLight===!0&&G.isMeshDistanceMaterial===!0&&(G.referencePosition.setFromMatrixPosition(O.matrixWorld),G.nearDistance=z,G.farDistance=S),G}function L(A,w,O,z,S){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Za)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,A.matrixWorld);const nt=t.update(A),_t=A.material;if(Array.isArray(_t)){const Y=nt.groups;for(let W=0,et=Y.length;W<et;W++){const ct=Y[W],ot=_t[ct.materialIndex];if(ot&&ot.visible){const j=T(A,ot,z,O.near,O.far,S);c.renderBufferDirect(O,null,nt,j,A,ct)}}}else if(_t.visible){const Y=T(A,_t,z,O.near,O.far,S);c.renderBufferDirect(O,null,nt,Y,A,null)}}const G=A.children;for(let nt=0,_t=G.length;nt<_t;nt++)L(G[nt],w,O,z,S)}}function uC(c,t,e){const n=e.isWebGL2;function r(){let k=!1;const Mt=new Ce;let rt=null;const Dt=new Ce(0,0,0,0);return{setMask:function(Pt){rt!==Pt&&!k&&(c.colorMask(Pt,Pt,Pt,Pt),rt=Pt)},setLocked:function(Pt){k=Pt},setClear:function(Pt,ie,Ve,Pe,Ai){Ai===!0&&(Pt*=Pe,ie*=Pe,Ve*=Pe),Mt.set(Pt,ie,Ve,Pe),Dt.equals(Mt)===!1&&(c.clearColor(Pt,ie,Ve,Pe),Dt.copy(Mt))},reset:function(){k=!1,rt=null,Dt.set(-1,0,0,0)}}}function s(){let k=!1,Mt=null,rt=null,Dt=null;return{setTest:function(Pt){Pt?It(2929):St(2929)},setMask:function(Pt){Mt!==Pt&&!k&&(c.depthMask(Pt),Mt=Pt)},setFunc:function(Pt){if(rt!==Pt){if(Pt)switch(Pt){case V1:c.depthFunc(512);break;case W1:c.depthFunc(519);break;case H1:c.depthFunc(513);break;case Ku:c.depthFunc(515);break;case X1:c.depthFunc(514);break;case q1:c.depthFunc(518);break;case $1:c.depthFunc(516);break;case Y1:c.depthFunc(517);break;default:c.depthFunc(515)}else c.depthFunc(515);rt=Pt}},setLocked:function(Pt){k=Pt},setClear:function(Pt){Dt!==Pt&&(c.clearDepth(Pt),Dt=Pt)},reset:function(){k=!1,Mt=null,rt=null,Dt=null}}}function l(){let k=!1,Mt=null,rt=null,Dt=null,Pt=null,ie=null,Ve=null,Pe=null,Ai=null;return{setTest:function(Te){k||(Te?It(2960):St(2960))},setMask:function(Te){Mt!==Te&&!k&&(c.stencilMask(Te),Mt=Te)},setFunc:function(Te,Yn,Mn){(rt!==Te||Dt!==Yn||Pt!==Mn)&&(c.stencilFunc(Te,Yn,Mn),rt=Te,Dt=Yn,Pt=Mn)},setOp:function(Te,Yn,Mn){(ie!==Te||Ve!==Yn||Pe!==Mn)&&(c.stencilOp(Te,Yn,Mn),ie=Te,Ve=Yn,Pe=Mn)},setLocked:function(Te){k=Te},setClear:function(Te){Ai!==Te&&(c.clearStencil(Te),Ai=Te)},reset:function(){k=!1,Mt=null,rt=null,Dt=null,Pt=null,ie=null,Ve=null,Pe=null,Ai=null}}}const o=new r,f=new s,h=new l,d=new WeakMap,p=new WeakMap;let m={},x={},b=new WeakMap,g=[],_=null,y=!1,T=null,L=null,A=null,w=null,O=null,z=null,S=null,D=!1,G=null,nt=null,_t=null,Y=null,W=null;const et=c.getParameter(35661);let ct=!1,ot=0;const j=c.getParameter(7938);j.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(j)[1]),ct=ot>=1):j.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),ct=ot>=2);let q=null,J={};const pt=c.getParameter(3088),gt=c.getParameter(2978),B=new Ce().fromArray(pt),tt=new Ce().fromArray(gt);function ft(k,Mt,rt){const Dt=new Uint8Array(4),Pt=c.createTexture();c.bindTexture(k,Pt),c.texParameteri(k,10241,9728),c.texParameteri(k,10240,9728);for(let ie=0;ie<rt;ie++)c.texImage2D(Mt+ie,0,6408,1,1,0,6408,5121,Dt);return Pt}const Z={};Z[3553]=ft(3553,3553,1),Z[34067]=ft(34067,34069,6),o.setClear(0,0,0,1),f.setClear(1),h.setClear(0),It(2929),f.setFunc(Ku),Se(!1),Le(fp),It(2884),le(Ir);function It(k){m[k]!==!0&&(c.enable(k),m[k]=!0)}function St(k){m[k]!==!1&&(c.disable(k),m[k]=!1)}function Lt(k,Mt){return x[k]!==Mt?(c.bindFramebuffer(k,Mt),x[k]=Mt,n&&(k===36009&&(x[36160]=Mt),k===36160&&(x[36009]=Mt)),!0):!1}function yt(k,Mt){let rt=g,Dt=!1;if(k)if(rt=b.get(Mt),rt===void 0&&(rt=[],b.set(Mt,rt)),k.isWebGLMultipleRenderTargets){const Pt=k.texture;if(rt.length!==Pt.length||rt[0]!==36064){for(let ie=0,Ve=Pt.length;ie<Ve;ie++)rt[ie]=36064+ie;rt.length=Pt.length,Dt=!0}}else rt[0]!==36064&&(rt[0]=36064,Dt=!0);else rt[0]!==1029&&(rt[0]=1029,Dt=!0);Dt&&(e.isWebGL2?c.drawBuffers(rt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(rt))}function Bt(k){return _!==k?(c.useProgram(k),_=k,!0):!1}const Ut={[na]:32774,[D1]:32778,[R1]:32779};if(n)Ut[gp]=32775,Ut[_p]=32776;else{const k=t.get("EXT_blend_minmax");k!==null&&(Ut[gp]=k.MIN_EXT,Ut[_p]=k.MAX_EXT)}const Ft={[I1]:0,[O1]:1,[F1]:768,[tg]:770,[G1]:776,[B1]:774,[z1]:772,[N1]:769,[eg]:771,[k1]:775,[U1]:773};function le(k,Mt,rt,Dt,Pt,ie,Ve,Pe){if(k===Ir){y===!0&&(St(3042),y=!1);return}if(y===!1&&(It(3042),y=!0),k!==P1){if(k!==T||Pe!==D){if((L!==na||O!==na)&&(c.blendEquation(32774),L=na,O=na),Pe)switch(k){case oa:c.blendFuncSeparate(1,771,1,771);break;case dp:c.blendFunc(1,1);break;case pp:c.blendFuncSeparate(0,769,0,1);break;case mp:c.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case oa:c.blendFuncSeparate(770,771,1,771);break;case dp:c.blendFunc(770,1);break;case pp:c.blendFuncSeparate(0,769,0,1);break;case mp:c.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}A=null,w=null,z=null,S=null,T=k,D=Pe}return}Pt=Pt||Mt,ie=ie||rt,Ve=Ve||Dt,(Mt!==L||Pt!==O)&&(c.blendEquationSeparate(Ut[Mt],Ut[Pt]),L=Mt,O=Pt),(rt!==A||Dt!==w||ie!==z||Ve!==S)&&(c.blendFuncSeparate(Ft[rt],Ft[Dt],Ft[ie],Ft[Ve]),A=rt,w=Dt,z=ie,S=Ve),T=k,D=null}function be(k,Mt){k.side===Lr?St(2884):It(2884);let rt=k.side===hi;Mt&&(rt=!rt),Se(rt),k.blending===oa&&k.transparent===!1?le(Ir):le(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.premultipliedAlpha),f.setFunc(k.depthFunc),f.setTest(k.depthTest),f.setMask(k.depthWrite),o.setMask(k.colorWrite);const Dt=k.stencilWrite;h.setTest(Dt),Dt&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ue(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?It(32926):St(32926)}function Se(k){G!==k&&(k?c.frontFace(2304):c.frontFace(2305),G=k)}function Le(k){k!==A1?(It(2884),k!==nt&&(k===fp?c.cullFace(1029):k===C1?c.cullFace(1028):c.cullFace(1032))):St(2884),nt=k}function Ie(k){k!==_t&&(ct&&c.lineWidth(k),_t=k)}function ue(k,Mt,rt){k?(It(32823),(Y!==Mt||W!==rt)&&(c.polygonOffset(Mt,rt),Y=Mt,W=rt)):St(32823)}function Ke(k){k?It(3089):St(3089)}function Me(k){k===void 0&&(k=33984+et-1),q!==k&&(c.activeTexture(k),q=k)}function F(k,Mt){q===null&&Me();let rt=J[q];rt===void 0&&(rt={type:void 0,texture:void 0},J[q]=rt),(rt.type!==k||rt.texture!==Mt)&&(c.bindTexture(k,Mt||Z[k]),rt.type=k,rt.texture=Mt)}function P(){const k=J[q];k!==void 0&&k.type!==void 0&&(c.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function st(){try{c.compressedTexImage2D.apply(c,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function vt(){try{c.texSubImage2D.apply(c,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function bt(){try{c.texSubImage3D.apply(c,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Tt(){try{c.compressedTexSubImage2D.apply(c,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Nt(){try{c.texStorage2D.apply(c,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function R(){try{c.texStorage3D.apply(c,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function dt(){try{c.texImage2D.apply(c,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xt(){try{c.texImage3D.apply(c,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function At(k){B.equals(k)===!1&&(c.scissor(k.x,k.y,k.z,k.w),B.copy(k))}function Et(k){tt.equals(k)===!1&&(c.viewport(k.x,k.y,k.z,k.w),tt.copy(k))}function Gt(k,Mt){let rt=p.get(Mt);rt===void 0&&(rt=new WeakMap,p.set(Mt,rt));let Dt=rt.get(k);Dt===void 0&&(Dt=c.getUniformBlockIndex(Mt,k.name),rt.set(k,Dt))}function jt(k,Mt){const Dt=p.get(Mt).get(k);d.get(k)!==Dt&&(c.uniformBlockBinding(Mt,Dt,k.__bindingPointIndex),d.set(k,Dt))}function ge(){c.disable(3042),c.disable(2884),c.disable(2929),c.disable(32823),c.disable(3089),c.disable(2960),c.disable(32926),c.blendEquation(32774),c.blendFunc(1,0),c.blendFuncSeparate(1,0,1,0),c.colorMask(!0,!0,!0,!0),c.clearColor(0,0,0,0),c.depthMask(!0),c.depthFunc(513),c.clearDepth(1),c.stencilMask(4294967295),c.stencilFunc(519,0,4294967295),c.stencilOp(7680,7680,7680),c.clearStencil(0),c.cullFace(1029),c.frontFace(2305),c.polygonOffset(0,0),c.activeTexture(33984),c.bindFramebuffer(36160,null),n===!0&&(c.bindFramebuffer(36009,null),c.bindFramebuffer(36008,null)),c.useProgram(null),c.lineWidth(1),c.scissor(0,0,c.canvas.width,c.canvas.height),c.viewport(0,0,c.canvas.width,c.canvas.height),m={},q=null,J={},x={},b=new WeakMap,g=[],_=null,y=!1,T=null,L=null,A=null,w=null,O=null,z=null,S=null,D=!1,G=null,nt=null,_t=null,Y=null,W=null,B.set(0,0,c.canvas.width,c.canvas.height),tt.set(0,0,c.canvas.width,c.canvas.height),o.reset(),f.reset(),h.reset()}return{buffers:{color:o,depth:f,stencil:h},enable:It,disable:St,bindFramebuffer:Lt,drawBuffers:yt,useProgram:Bt,setBlending:le,setMaterial:be,setFlipSided:Se,setCullFace:Le,setLineWidth:Ie,setPolygonOffset:ue,setScissorTest:Ke,activeTexture:Me,bindTexture:F,unbindTexture:P,compressedTexImage2D:st,texImage2D:dt,texImage3D:xt,updateUBOMapping:Gt,uniformBlockBinding:jt,texStorage2D:Nt,texStorage3D:R,texSubImage2D:vt,texSubImage3D:bt,compressedTexSubImage2D:Tt,scissor:At,viewport:Et,reset:ge}}function hC(c,t,e,n,r,s,l){const o=r.isWebGL2,f=r.maxTextures,h=r.maxCubemapSize,d=r.maxTextureSize,p=r.maxSamples,m=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,x=/OculusBrowser/g.test(navigator.userAgent),b=new WeakMap;let g;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(F,P){return y?new OffscreenCanvas(F,P):so("canvas")}function L(F,P,st,vt){let bt=1;if((F.width>vt||F.height>vt)&&(bt=vt/Math.max(F.width,F.height)),bt<1||P===!0)if(typeof HTMLImageElement!="undefined"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&F instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&F instanceof ImageBitmap){const Tt=P?nh:Math.floor,Nt=Tt(bt*F.width),R=Tt(bt*F.height);g===void 0&&(g=T(Nt,R));const dt=st?T(Nt,R):g;return dt.width=Nt,dt.height=R,dt.getContext("2d").drawImage(F,0,0,Nt,R),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+F.width+"x"+F.height+") to ("+Nt+"x"+R+")."),dt}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+F.width+"x"+F.height+")."),F;return F}function A(F){return Hp(F.width)&&Hp(F.height)}function w(F){return o?!1:F.wrapS!==Ti||F.wrapT!==Ti||F.minFilter!==An&&F.minFilter!==ai}function O(F,P){return F.generateMipmaps&&P&&F.minFilter!==An&&F.minFilter!==ai}function z(F){c.generateMipmap(F)}function S(F,P,st,vt,bt=!1){if(o===!1)return P;if(F!==null){if(c[F]!==void 0)return c[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Tt=P;return P===6403&&(st===5126&&(Tt=33326),st===5131&&(Tt=33325),st===5121&&(Tt=33321)),P===33319&&(st===5126&&(Tt=33328),st===5131&&(Tt=33327),st===5121&&(Tt=33323)),P===6408&&(st===5126&&(Tt=34836),st===5131&&(Tt=34842),st===5121&&(Tt=vt===Ne&&bt===!1?35907:32856),st===32819&&(Tt=32854),st===32820&&(Tt=32855)),(Tt===33325||Tt===33326||Tt===33327||Tt===33328||Tt===34842||Tt===34836)&&t.get("EXT_color_buffer_float"),Tt}function D(F,P,st){return O(F,st)===!0||F.isFramebufferTexture&&F.minFilter!==An&&F.minFilter!==ai?Math.log2(Math.max(P.width,P.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?P.mipmaps.length:1}function G(F){return F===An||F===vp||F===xp?9728:9729}function nt(F){const P=F.target;P.removeEventListener("dispose",nt),Y(P),P.isVideoTexture&&b.delete(P)}function _t(F){const P=F.target;P.removeEventListener("dispose",_t),et(P)}function Y(F){const P=n.get(F);if(P.__webglInit===void 0)return;const st=F.source,vt=_.get(st);if(vt){const bt=vt[P.__cacheKey];bt.usedTimes--,bt.usedTimes===0&&W(F),Object.keys(vt).length===0&&_.delete(st)}n.remove(F)}function W(F){const P=n.get(F);c.deleteTexture(P.__webglTexture);const st=F.source,vt=_.get(st);delete vt[P.__cacheKey],l.memory.textures--}function et(F){const P=F.texture,st=n.get(F),vt=n.get(P);if(vt.__webglTexture!==void 0&&(c.deleteTexture(vt.__webglTexture),l.memory.textures--),F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let bt=0;bt<6;bt++)c.deleteFramebuffer(st.__webglFramebuffer[bt]),st.__webglDepthbuffer&&c.deleteRenderbuffer(st.__webglDepthbuffer[bt]);else{if(c.deleteFramebuffer(st.__webglFramebuffer),st.__webglDepthbuffer&&c.deleteRenderbuffer(st.__webglDepthbuffer),st.__webglMultisampledFramebuffer&&c.deleteFramebuffer(st.__webglMultisampledFramebuffer),st.__webglColorRenderbuffer)for(let bt=0;bt<st.__webglColorRenderbuffer.length;bt++)st.__webglColorRenderbuffer[bt]&&c.deleteRenderbuffer(st.__webglColorRenderbuffer[bt]);st.__webglDepthRenderbuffer&&c.deleteRenderbuffer(st.__webglDepthRenderbuffer)}if(F.isWebGLMultipleRenderTargets)for(let bt=0,Tt=P.length;bt<Tt;bt++){const Nt=n.get(P[bt]);Nt.__webglTexture&&(c.deleteTexture(Nt.__webglTexture),l.memory.textures--),n.remove(P[bt])}n.remove(P),n.remove(F)}let ct=0;function ot(){ct=0}function j(){const F=ct;return F>=f&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+f),ct+=1,F}function q(F){const P=[];return P.push(F.wrapS),P.push(F.wrapT),P.push(F.magFilter),P.push(F.minFilter),P.push(F.anisotropy),P.push(F.internalFormat),P.push(F.format),P.push(F.type),P.push(F.generateMipmaps),P.push(F.premultiplyAlpha),P.push(F.flipY),P.push(F.unpackAlignment),P.push(F.encoding),P.join()}function J(F,P){const st=n.get(F);if(F.isVideoTexture&&Ke(F),F.isRenderTargetTexture===!1&&F.version>0&&st.__version!==F.version){const vt=F.image;if(vt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(vt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{St(st,F,P);return}}e.activeTexture(33984+P),e.bindTexture(3553,st.__webglTexture)}function pt(F,P){const st=n.get(F);if(F.version>0&&st.__version!==F.version){St(st,F,P);return}e.activeTexture(33984+P),e.bindTexture(35866,st.__webglTexture)}function gt(F,P){const st=n.get(F);if(F.version>0&&st.__version!==F.version){St(st,F,P);return}e.activeTexture(33984+P),e.bindTexture(32879,st.__webglTexture)}function B(F,P){const st=n.get(F);if(F.version>0&&st.__version!==F.version){Lt(st,F,P);return}e.activeTexture(33984+P),e.bindTexture(34067,st.__webglTexture)}const tt={[Qu]:10497,[Ti]:33071,[th]:33648},ft={[An]:9728,[vp]:9984,[xp]:9986,[ai]:9729,[nw]:9985,[Vl]:9987};function Z(F,P,st){if(st?(c.texParameteri(F,10242,tt[P.wrapS]),c.texParameteri(F,10243,tt[P.wrapT]),(F===32879||F===35866)&&c.texParameteri(F,32882,tt[P.wrapR]),c.texParameteri(F,10240,ft[P.magFilter]),c.texParameteri(F,10241,ft[P.minFilter])):(c.texParameteri(F,10242,33071),c.texParameteri(F,10243,33071),(F===32879||F===35866)&&c.texParameteri(F,32882,33071),(P.wrapS!==Ti||P.wrapT!==Ti)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),c.texParameteri(F,10240,G(P.magFilter)),c.texParameteri(F,10241,G(P.minFilter)),P.minFilter!==An&&P.minFilter!==ai&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const vt=t.get("EXT_texture_filter_anisotropic");if(P.type===rs&&t.has("OES_texture_float_linear")===!1||o===!1&&P.type===ro&&t.has("OES_texture_half_float_linear")===!1)return;(P.anisotropy>1||n.get(P).__currentAnisotropy)&&(c.texParameterf(F,vt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy)}}function It(F,P){let st=!1;F.__webglInit===void 0&&(F.__webglInit=!0,P.addEventListener("dispose",nt));const vt=P.source;let bt=_.get(vt);bt===void 0&&(bt={},_.set(vt,bt));const Tt=q(P);if(Tt!==F.__cacheKey){bt[Tt]===void 0&&(bt[Tt]={texture:c.createTexture(),usedTimes:0},l.memory.textures++,st=!0),bt[Tt].usedTimes++;const Nt=bt[F.__cacheKey];Nt!==void 0&&(bt[F.__cacheKey].usedTimes--,Nt.usedTimes===0&&W(P)),F.__cacheKey=Tt,F.__webglTexture=bt[Tt].texture}return st}function St(F,P,st){let vt=3553;P.isDataArrayTexture&&(vt=35866),P.isData3DTexture&&(vt=32879);const bt=It(F,P),Tt=P.source;if(e.activeTexture(33984+st),e.bindTexture(vt,F.__webglTexture),Tt.version!==Tt.__currentVersion||bt===!0){c.pixelStorei(37440,P.flipY),c.pixelStorei(37441,P.premultiplyAlpha),c.pixelStorei(3317,P.unpackAlignment),c.pixelStorei(37443,0);const Nt=w(P)&&A(P.image)===!1;let R=L(P.image,Nt,!1,d);R=Me(P,R);const dt=A(R)||o,xt=s.convert(P.format,P.encoding);let At=s.convert(P.type),Et=S(P.internalFormat,xt,At,P.encoding,P.isVideoTexture);Z(vt,P,dt);let Gt;const jt=P.mipmaps,ge=o&&P.isVideoTexture!==!0,k=Tt.__currentVersion===void 0||bt===!0,Mt=D(P,R,dt);if(P.isDepthTexture)Et=6402,o?P.type===rs?Et=36012:P.type===is?Et=33190:P.type===la?Et=35056:Et=33189:P.type===rs&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),P.format===os&&Et===6402&&P.type!==ig&&P.type!==is&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),P.type=is,At=s.convert(P.type)),P.format===ma&&Et===6402&&(Et=34041,P.type!==la&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),P.type=la,At=s.convert(P.type))),k&&(ge?e.texStorage2D(3553,1,Et,R.width,R.height):e.texImage2D(3553,0,Et,R.width,R.height,0,xt,At,null));else if(P.isDataTexture)if(jt.length>0&&dt){ge&&k&&e.texStorage2D(3553,Mt,Et,jt[0].width,jt[0].height);for(let rt=0,Dt=jt.length;rt<Dt;rt++)Gt=jt[rt],ge?e.texSubImage2D(3553,rt,0,0,Gt.width,Gt.height,xt,At,Gt.data):e.texImage2D(3553,rt,Et,Gt.width,Gt.height,0,xt,At,Gt.data);P.generateMipmaps=!1}else ge?(k&&e.texStorage2D(3553,Mt,Et,R.width,R.height),e.texSubImage2D(3553,0,0,0,R.width,R.height,xt,At,R.data)):e.texImage2D(3553,0,Et,R.width,R.height,0,xt,At,R.data);else if(P.isCompressedTexture){ge&&k&&e.texStorage2D(3553,Mt,Et,jt[0].width,jt[0].height);for(let rt=0,Dt=jt.length;rt<Dt;rt++)Gt=jt[rt],P.format!==Ii?xt!==null?ge?e.compressedTexSubImage2D(3553,rt,0,0,Gt.width,Gt.height,xt,Gt.data):e.compressedTexImage2D(3553,rt,Et,Gt.width,Gt.height,0,Gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?e.texSubImage2D(3553,rt,0,0,Gt.width,Gt.height,xt,At,Gt.data):e.texImage2D(3553,rt,Et,Gt.width,Gt.height,0,xt,At,Gt.data)}else if(P.isDataArrayTexture)ge?(k&&e.texStorage3D(35866,Mt,Et,R.width,R.height,R.depth),e.texSubImage3D(35866,0,0,0,0,R.width,R.height,R.depth,xt,At,R.data)):e.texImage3D(35866,0,Et,R.width,R.height,R.depth,0,xt,At,R.data);else if(P.isData3DTexture)ge?(k&&e.texStorage3D(32879,Mt,Et,R.width,R.height,R.depth),e.texSubImage3D(32879,0,0,0,0,R.width,R.height,R.depth,xt,At,R.data)):e.texImage3D(32879,0,Et,R.width,R.height,R.depth,0,xt,At,R.data);else if(P.isFramebufferTexture){if(k)if(ge)e.texStorage2D(3553,Mt,Et,R.width,R.height);else{let rt=R.width,Dt=R.height;for(let Pt=0;Pt<Mt;Pt++)e.texImage2D(3553,Pt,Et,rt,Dt,0,xt,At,null),rt>>=1,Dt>>=1}}else if(jt.length>0&&dt){ge&&k&&e.texStorage2D(3553,Mt,Et,jt[0].width,jt[0].height);for(let rt=0,Dt=jt.length;rt<Dt;rt++)Gt=jt[rt],ge?e.texSubImage2D(3553,rt,0,0,xt,At,Gt):e.texImage2D(3553,rt,Et,xt,At,Gt);P.generateMipmaps=!1}else ge?(k&&e.texStorage2D(3553,Mt,Et,R.width,R.height),e.texSubImage2D(3553,0,0,0,xt,At,R)):e.texImage2D(3553,0,Et,xt,At,R);O(P,dt)&&z(vt),Tt.__currentVersion=Tt.version,P.onUpdate&&P.onUpdate(P)}F.__version=P.version}function Lt(F,P,st){if(P.image.length!==6)return;const vt=It(F,P),bt=P.source;if(e.activeTexture(33984+st),e.bindTexture(34067,F.__webglTexture),bt.version!==bt.__currentVersion||vt===!0){c.pixelStorei(37440,P.flipY),c.pixelStorei(37441,P.premultiplyAlpha),c.pixelStorei(3317,P.unpackAlignment),c.pixelStorei(37443,0);const Tt=P.isCompressedTexture||P.image[0].isCompressedTexture,Nt=P.image[0]&&P.image[0].isDataTexture,R=[];for(let rt=0;rt<6;rt++)!Tt&&!Nt?R[rt]=L(P.image[rt],!1,!0,h):R[rt]=Nt?P.image[rt].image:P.image[rt],R[rt]=Me(P,R[rt]);const dt=R[0],xt=A(dt)||o,At=s.convert(P.format,P.encoding),Et=s.convert(P.type),Gt=S(P.internalFormat,At,Et,P.encoding),jt=o&&P.isVideoTexture!==!0,ge=bt.__currentVersion===void 0||vt===!0;let k=D(P,dt,xt);Z(34067,P,xt);let Mt;if(Tt){jt&&ge&&e.texStorage2D(34067,k,Gt,dt.width,dt.height);for(let rt=0;rt<6;rt++){Mt=R[rt].mipmaps;for(let Dt=0;Dt<Mt.length;Dt++){const Pt=Mt[Dt];P.format!==Ii?At!==null?jt?e.compressedTexSubImage2D(34069+rt,Dt,0,0,Pt.width,Pt.height,At,Pt.data):e.compressedTexImage2D(34069+rt,Dt,Gt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?e.texSubImage2D(34069+rt,Dt,0,0,Pt.width,Pt.height,At,Et,Pt.data):e.texImage2D(34069+rt,Dt,Gt,Pt.width,Pt.height,0,At,Et,Pt.data)}}}else{Mt=P.mipmaps,jt&&ge&&(Mt.length>0&&k++,e.texStorage2D(34067,k,Gt,R[0].width,R[0].height));for(let rt=0;rt<6;rt++)if(Nt){jt?e.texSubImage2D(34069+rt,0,0,0,R[rt].width,R[rt].height,At,Et,R[rt].data):e.texImage2D(34069+rt,0,Gt,R[rt].width,R[rt].height,0,At,Et,R[rt].data);for(let Dt=0;Dt<Mt.length;Dt++){const ie=Mt[Dt].image[rt].image;jt?e.texSubImage2D(34069+rt,Dt+1,0,0,ie.width,ie.height,At,Et,ie.data):e.texImage2D(34069+rt,Dt+1,Gt,ie.width,ie.height,0,At,Et,ie.data)}}else{jt?e.texSubImage2D(34069+rt,0,0,0,At,Et,R[rt]):e.texImage2D(34069+rt,0,Gt,At,Et,R[rt]);for(let Dt=0;Dt<Mt.length;Dt++){const Pt=Mt[Dt];jt?e.texSubImage2D(34069+rt,Dt+1,0,0,At,Et,Pt.image[rt]):e.texImage2D(34069+rt,Dt+1,Gt,At,Et,Pt.image[rt])}}}O(P,xt)&&z(34067),bt.__currentVersion=bt.version,P.onUpdate&&P.onUpdate(P)}F.__version=P.version}function yt(F,P,st,vt,bt){const Tt=s.convert(st.format,st.encoding),Nt=s.convert(st.type),R=S(st.internalFormat,Tt,Nt,st.encoding);n.get(P).__hasExternalTextures||(bt===32879||bt===35866?e.texImage3D(bt,0,R,P.width,P.height,P.depth,0,Tt,Nt,null):e.texImage2D(bt,0,R,P.width,P.height,0,Tt,Nt,null)),e.bindFramebuffer(36160,F),ue(P)?m.framebufferTexture2DMultisampleEXT(36160,vt,bt,n.get(st).__webglTexture,0,Ie(P)):c.framebufferTexture2D(36160,vt,bt,n.get(st).__webglTexture,0),e.bindFramebuffer(36160,null)}function Bt(F,P,st){if(c.bindRenderbuffer(36161,F),P.depthBuffer&&!P.stencilBuffer){let vt=33189;if(st||ue(P)){const bt=P.depthTexture;bt&&bt.isDepthTexture&&(bt.type===rs?vt=36012:bt.type===is&&(vt=33190));const Tt=Ie(P);ue(P)?m.renderbufferStorageMultisampleEXT(36161,Tt,vt,P.width,P.height):c.renderbufferStorageMultisample(36161,Tt,vt,P.width,P.height)}else c.renderbufferStorage(36161,vt,P.width,P.height);c.framebufferRenderbuffer(36160,36096,36161,F)}else if(P.depthBuffer&&P.stencilBuffer){const vt=Ie(P);st&&ue(P)===!1?c.renderbufferStorageMultisample(36161,vt,35056,P.width,P.height):ue(P)?m.renderbufferStorageMultisampleEXT(36161,vt,35056,P.width,P.height):c.renderbufferStorage(36161,34041,P.width,P.height),c.framebufferRenderbuffer(36160,33306,36161,F)}else{const vt=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let bt=0;bt<vt.length;bt++){const Tt=vt[bt],Nt=s.convert(Tt.format,Tt.encoding),R=s.convert(Tt.type),dt=S(Tt.internalFormat,Nt,R,Tt.encoding),xt=Ie(P);st&&ue(P)===!1?c.renderbufferStorageMultisample(36161,xt,dt,P.width,P.height):ue(P)?m.renderbufferStorageMultisampleEXT(36161,xt,dt,P.width,P.height):c.renderbufferStorage(36161,dt,P.width,P.height)}}c.bindRenderbuffer(36161,null)}function Ut(F,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,F),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),J(P.depthTexture,0);const vt=n.get(P.depthTexture).__webglTexture,bt=Ie(P);if(P.depthTexture.format===os)ue(P)?m.framebufferTexture2DMultisampleEXT(36160,36096,3553,vt,0,bt):c.framebufferTexture2D(36160,36096,3553,vt,0);else if(P.depthTexture.format===ma)ue(P)?m.framebufferTexture2DMultisampleEXT(36160,33306,3553,vt,0,bt):c.framebufferTexture2D(36160,33306,3553,vt,0);else throw new Error("Unknown depthTexture format")}function Ft(F){const P=n.get(F),st=F.isWebGLCubeRenderTarget===!0;if(F.depthTexture&&!P.__autoAllocateDepthBuffer){if(st)throw new Error("target.depthTexture not supported in Cube render targets");Ut(P.__webglFramebuffer,F)}else if(st){P.__webglDepthbuffer=[];for(let vt=0;vt<6;vt++)e.bindFramebuffer(36160,P.__webglFramebuffer[vt]),P.__webglDepthbuffer[vt]=c.createRenderbuffer(),Bt(P.__webglDepthbuffer[vt],F,!1)}else e.bindFramebuffer(36160,P.__webglFramebuffer),P.__webglDepthbuffer=c.createRenderbuffer(),Bt(P.__webglDepthbuffer,F,!1);e.bindFramebuffer(36160,null)}function le(F,P,st){const vt=n.get(F);P!==void 0&&yt(vt.__webglFramebuffer,F,F.texture,36064,3553),st!==void 0&&Ft(F)}function be(F){const P=F.texture,st=n.get(F),vt=n.get(P);F.addEventListener("dispose",_t),F.isWebGLMultipleRenderTargets!==!0&&(vt.__webglTexture===void 0&&(vt.__webglTexture=c.createTexture()),vt.__version=P.version,l.memory.textures++);const bt=F.isWebGLCubeRenderTarget===!0,Tt=F.isWebGLMultipleRenderTargets===!0,Nt=A(F)||o;if(bt){st.__webglFramebuffer=[];for(let R=0;R<6;R++)st.__webglFramebuffer[R]=c.createFramebuffer()}else{if(st.__webglFramebuffer=c.createFramebuffer(),Tt)if(r.drawBuffers){const R=F.texture;for(let dt=0,xt=R.length;dt<xt;dt++){const At=n.get(R[dt]);At.__webglTexture===void 0&&(At.__webglTexture=c.createTexture(),l.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&F.samples>0&&ue(F)===!1){const R=Tt?P:[P];st.__webglMultisampledFramebuffer=c.createFramebuffer(),st.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,st.__webglMultisampledFramebuffer);for(let dt=0;dt<R.length;dt++){const xt=R[dt];st.__webglColorRenderbuffer[dt]=c.createRenderbuffer(),c.bindRenderbuffer(36161,st.__webglColorRenderbuffer[dt]);const At=s.convert(xt.format,xt.encoding),Et=s.convert(xt.type),Gt=S(xt.internalFormat,At,Et,xt.encoding),jt=Ie(F);c.renderbufferStorageMultisample(36161,jt,Gt,F.width,F.height),c.framebufferRenderbuffer(36160,36064+dt,36161,st.__webglColorRenderbuffer[dt])}c.bindRenderbuffer(36161,null),F.depthBuffer&&(st.__webglDepthRenderbuffer=c.createRenderbuffer(),Bt(st.__webglDepthRenderbuffer,F,!0)),e.bindFramebuffer(36160,null)}}if(bt){e.bindTexture(34067,vt.__webglTexture),Z(34067,P,Nt);for(let R=0;R<6;R++)yt(st.__webglFramebuffer[R],F,P,36064,34069+R);O(P,Nt)&&z(34067),e.unbindTexture()}else if(Tt){const R=F.texture;for(let dt=0,xt=R.length;dt<xt;dt++){const At=R[dt],Et=n.get(At);e.bindTexture(3553,Et.__webglTexture),Z(3553,At,Nt),yt(st.__webglFramebuffer,F,At,36064+dt,3553),O(At,Nt)&&z(3553)}e.unbindTexture()}else{let R=3553;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(o?R=F.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(R,vt.__webglTexture),Z(R,P,Nt),yt(st.__webglFramebuffer,F,P,36064,R),O(P,Nt)&&z(R),e.unbindTexture()}F.depthBuffer&&Ft(F)}function Se(F){const P=A(F)||o,st=F.isWebGLMultipleRenderTargets===!0?F.texture:[F.texture];for(let vt=0,bt=st.length;vt<bt;vt++){const Tt=st[vt];if(O(Tt,P)){const Nt=F.isWebGLCubeRenderTarget?34067:3553,R=n.get(Tt).__webglTexture;e.bindTexture(Nt,R),z(Nt),e.unbindTexture()}}}function Le(F){if(o&&F.samples>0&&ue(F)===!1){const P=F.isWebGLMultipleRenderTargets?F.texture:[F.texture],st=F.width,vt=F.height;let bt=16384;const Tt=[],Nt=F.stencilBuffer?33306:36096,R=n.get(F),dt=F.isWebGLMultipleRenderTargets===!0;if(dt)for(let xt=0;xt<P.length;xt++)e.bindFramebuffer(36160,R.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(36160,36064+xt,36161,null),e.bindFramebuffer(36160,R.__webglFramebuffer),c.framebufferTexture2D(36009,36064+xt,3553,null,0);e.bindFramebuffer(36008,R.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,R.__webglFramebuffer);for(let xt=0;xt<P.length;xt++){Tt.push(36064+xt),F.depthBuffer&&Tt.push(Nt);const At=R.__ignoreDepthValues!==void 0?R.__ignoreDepthValues:!1;if(At===!1&&(F.depthBuffer&&(bt|=256),F.stencilBuffer&&(bt|=1024)),dt&&c.framebufferRenderbuffer(36008,36064,36161,R.__webglColorRenderbuffer[xt]),At===!0&&(c.invalidateFramebuffer(36008,[Nt]),c.invalidateFramebuffer(36009,[Nt])),dt){const Et=n.get(P[xt]).__webglTexture;c.framebufferTexture2D(36009,36064,3553,Et,0)}c.blitFramebuffer(0,0,st,vt,0,0,st,vt,bt,9728),x&&c.invalidateFramebuffer(36008,Tt)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),dt)for(let xt=0;xt<P.length;xt++){e.bindFramebuffer(36160,R.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(36160,36064+xt,36161,R.__webglColorRenderbuffer[xt]);const At=n.get(P[xt]).__webglTexture;e.bindFramebuffer(36160,R.__webglFramebuffer),c.framebufferTexture2D(36009,36064+xt,3553,At,0)}e.bindFramebuffer(36009,R.__webglMultisampledFramebuffer)}}function Ie(F){return Math.min(p,F.samples)}function ue(F){const P=n.get(F);return o&&F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function Ke(F){const P=l.render.frame;b.get(F)!==P&&(b.set(F,P),F.update())}function Me(F,P){const st=F.encoding,vt=F.format,bt=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||F.format===eh||st!==ps&&(st===Ne?o===!1?t.has("EXT_sRGB")===!0&&vt===Ii?(F.format=eh,F.minFilter=ai,F.generateMipmaps=!1):P=og.sRGBToLinear(P):(vt!==Ii||bt!==ds)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",st)),P}this.allocateTextureUnit=j,this.resetTextureUnits=ot,this.setTexture2D=J,this.setTexture2DArray=pt,this.setTexture3D=gt,this.setTextureCube=B,this.rebindTextures=le,this.setupRenderTarget=be,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=ue}function fC(c,t,e){const n=e.isWebGL2;function r(s,l=null){let o;if(s===ds)return 5121;if(s===aw)return 32819;if(s===ow)return 32820;if(s===iw)return 5120;if(s===rw)return 5122;if(s===ig)return 5123;if(s===sw)return 5124;if(s===is)return 5125;if(s===rs)return 5126;if(s===ro)return n?5131:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===lw)return 6406;if(s===Ii)return 6408;if(s===uw)return 6409;if(s===hw)return 6410;if(s===os)return 6402;if(s===ma)return 34041;if(s===fw)return 6403;if(s===cw)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===eh)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===dw)return 36244;if(s===pw)return 33319;if(s===mw)return 33320;if(s===gw)return 36249;if(s===au||s===ou||s===lu||s===cu)if(l===Ne)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===au)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ou)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===lu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===cu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===au)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ou)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===lu)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===cu)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===yp||s===bp||s===Mp||s===wp)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===yp)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===bp)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Mp)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===wp)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===_w)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Sp||s===Tp)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Sp)return l===Ne?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Tp)return l===Ne?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ep||s===Ap||s===Cp||s===Lp||s===Pp||s===Dp||s===Rp||s===Ip||s===Op||s===Fp||s===Np||s===zp||s===Up||s===Bp)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Ep)return l===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ap)return l===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Cp)return l===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Lp)return l===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Pp)return l===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Dp)return l===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Rp)return l===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ip)return l===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Op)return l===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Fp)return l===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Np)return l===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===zp)return l===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Up)return l===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Bp)return l===Ne?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===kp)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===kp)return l===Ne?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===la?n?34042:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):c[s]!==void 0?c[s]:null}return{convert:r}}class dC extends Ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ja extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pC={type:"move"};class zu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ja,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ja,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ja,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,l=null;const o=this._targetRay,f=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){l=!0;for(const g of t.hand.values()){const _=e.getJointPose(g,n);if(h.joints[g.jointName]===void 0){const T=new Ja;T.matrixAutoUpdate=!1,T.visible=!1,h.joints[g.jointName]=T,h.add(T)}const y=h.joints[g.jointName];_!==null&&(y.matrix.fromArray(_.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.jointRadius=_.radius),y.visible=_!==null}const d=h.joints["index-finger-tip"],p=h.joints["thumb-tip"],m=d.position.distanceTo(p.position),x=.02,b=.005;h.inputState.pinching&&m>x+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&m<=x-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else f!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pC)))}return o!==null&&(o.visible=r!==null),f!==null&&(f.visible=s!==null),h!==null&&(h.visible=l!==null),this}}class mC extends di{constructor(t,e,n,r,s,l,o,f,h,d){if(d=d!==void 0?d:os,d!==os&&d!==ma)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===os&&(n=is),n===void 0&&d===ma&&(n=la),super(null,r,s,l,o,f,d,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:An,this.minFilter=f!==void 0?f:An,this.flipY=!1,this.generateMipmaps=!1}}class gC extends vs{constructor(t,e){super();const n=this;let r=null,s=1,l=null,o="local-floor",f=null,h=null,d=null,p=null,m=null,x=null;const b=e.getContextAttributes();let g=null,_=null;const y=[],T=[],L=new Ln;L.layers.enable(1),L.viewport=new Ce;const A=new Ln;A.layers.enable(2),A.viewport=new Ce;const w=[L,A],O=new dC;O.layers.enable(1),O.layers.enable(2);let z=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let J=y[q];return J===void 0&&(J=new zu,y[q]=J),J.getTargetRaySpace()},this.getControllerGrip=function(q){let J=y[q];return J===void 0&&(J=new zu,y[q]=J),J.getGripSpace()},this.getHand=function(q){let J=y[q];return J===void 0&&(J=new zu,y[q]=J),J.getHandSpace()};function D(q){const J=T.indexOf(q.inputSource);if(J===-1)return;const pt=y[J];pt!==void 0&&pt.dispatchEvent({type:q.type,data:q.inputSource})}function G(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",nt);for(let q=0;q<y.length;q++){const J=T[q];J!==null&&(T[q]=null,y[q].disconnect(J))}z=null,S=null,t.setRenderTarget(g),m=null,p=null,d=null,r=null,_=null,j.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||l},this.setReferenceSpace=function(q){f=q},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(g=t.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",G),r.addEventListener("inputsourceschange",nt),b.xrCompatible!==!0&&await e.makeXRCompatible(),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const J={antialias:r.renderState.layers===void 0?b.antialias:!0,alpha:b.alpha,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,J),r.updateRenderState({baseLayer:m}),_=new ms(m.framebufferWidth,m.framebufferHeight,{format:Ii,type:ds,encoding:t.outputEncoding,stencilBuffer:b.stencil})}else{let J=null,pt=null,gt=null;b.depth&&(gt=b.stencil?35056:33190,J=b.stencil?ma:os,pt=b.stencil?la:is);const B={colorFormat:32856,depthFormat:gt,scaleFactor:s};d=new XRWebGLBinding(r,e),p=d.createProjectionLayer(B),r.updateRenderState({layers:[p]}),_=new ms(p.textureWidth,p.textureHeight,{format:Ii,type:ds,depthTexture:new mC(p.textureWidth,p.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:b.stencil,encoding:t.outputEncoding,samples:b.antialias?4:0});const tt=t.properties.get(_);tt.__ignoreDepthValues=p.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(1),f=null,l=await r.requestReferenceSpace(o),j.setContext(r),j.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function nt(q){for(let J=0;J<q.removed.length;J++){const pt=q.removed[J],gt=T.indexOf(pt);gt>=0&&(T[gt]=null,y[gt].dispatchEvent({type:"disconnected",data:pt}))}for(let J=0;J<q.added.length;J++){const pt=q.added[J];let gt=T.indexOf(pt);if(gt===-1){for(let tt=0;tt<y.length;tt++)if(tt>=T.length){T.push(pt),gt=tt;break}else if(T[tt]===null){T[tt]=pt,gt=tt;break}if(gt===-1)break}const B=y[gt];B&&B.dispatchEvent({type:"connected",data:pt})}}const _t=new X,Y=new X;function W(q,J,pt){_t.setFromMatrixPosition(J.matrixWorld),Y.setFromMatrixPosition(pt.matrixWorld);const gt=_t.distanceTo(Y),B=J.projectionMatrix.elements,tt=pt.projectionMatrix.elements,ft=B[14]/(B[10]-1),Z=B[14]/(B[10]+1),It=(B[9]+1)/B[5],St=(B[9]-1)/B[5],Lt=(B[8]-1)/B[0],yt=(tt[8]+1)/tt[0],Bt=ft*Lt,Ut=ft*yt,Ft=gt/(-Lt+yt),le=Ft*-Lt;J.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(le),q.translateZ(Ft),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const be=ft+Ft,Se=Z+Ft,Le=Bt-le,Ie=Ut+(gt-le),ue=It*Z/Se*be,Ke=St*Z/Se*be;q.projectionMatrix.makePerspective(Le,Ie,ue,Ke,be,Se)}function et(q,J){J===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(J.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;O.near=A.near=L.near=q.near,O.far=A.far=L.far=q.far,(z!==O.near||S!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),z=O.near,S=O.far);const J=q.parent,pt=O.cameras;et(O,J);for(let B=0;B<pt.length;B++)et(pt[B],J);O.matrixWorld.decompose(O.position,O.quaternion,O.scale),q.matrix.copy(O.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale);const gt=q.children;for(let B=0,tt=gt.length;B<tt;B++)gt[B].updateMatrixWorld(!0);pt.length===2?W(O,L,A):O.projectionMatrix.copy(L.projectionMatrix)},this.getCamera=function(){return O},this.getFoveation=function(){if(p!==null)return p.fixedFoveation;if(m!==null)return m.fixedFoveation},this.setFoveation=function(q){p!==null&&(p.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)};let ct=null;function ot(q,J){if(h=J.getViewerPose(f||l),x=J,h!==null){const pt=h.views;m!==null&&(t.setRenderTargetFramebuffer(_,m.framebuffer),t.setRenderTarget(_));let gt=!1;pt.length!==O.cameras.length&&(O.cameras.length=0,gt=!0);for(let B=0;B<pt.length;B++){const tt=pt[B];let ft=null;if(m!==null)ft=m.getViewport(tt);else{const It=d.getViewSubImage(p,tt);ft=It.viewport,B===0&&(t.setRenderTargetTextures(_,It.colorTexture,p.ignoreDepthValues?void 0:It.depthStencilTexture),t.setRenderTarget(_))}let Z=w[B];Z===void 0&&(Z=new Ln,Z.layers.enable(B),Z.viewport=new Ce,w[B]=Z),Z.matrix.fromArray(tt.transform.matrix),Z.projectionMatrix.fromArray(tt.projectionMatrix),Z.viewport.set(ft.x,ft.y,ft.width,ft.height),B===0&&O.matrix.copy(Z.matrix),gt===!0&&O.cameras.push(Z)}}for(let pt=0;pt<y.length;pt++){const gt=T[pt],B=y[pt];gt!==null&&B!==void 0&&B.update(gt,J,f||l)}ct&&ct(q,J),x=null}const j=new gg;j.setAnimationLoop(ot),this.setAnimationLoop=function(q){ct=q},this.dispose=function(){}}}function _C(c,t){function e(g,_){g.fogColor.value.copy(_.color),_.isFog?(g.fogNear.value=_.near,g.fogFar.value=_.far):_.isFogExp2&&(g.fogDensity.value=_.density)}function n(g,_,y,T,L){_.isMeshBasicMaterial||_.isMeshLambertMaterial?r(g,_):_.isMeshToonMaterial?(r(g,_),d(g,_)):_.isMeshPhongMaterial?(r(g,_),h(g,_)):_.isMeshStandardMaterial?(r(g,_),p(g,_),_.isMeshPhysicalMaterial&&m(g,_,L)):_.isMeshMatcapMaterial?(r(g,_),x(g,_)):_.isMeshDepthMaterial?r(g,_):_.isMeshDistanceMaterial?(r(g,_),b(g,_)):_.isMeshNormalMaterial?r(g,_):_.isLineBasicMaterial?(s(g,_),_.isLineDashedMaterial&&l(g,_)):_.isPointsMaterial?o(g,_,y,T):_.isSpriteMaterial?f(g,_):_.isShadowMaterial?(g.color.value.copy(_.color),g.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function r(g,_){g.opacity.value=_.opacity,_.color&&g.diffuse.value.copy(_.color),_.emissive&&g.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(g.map.value=_.map),_.alphaMap&&(g.alphaMap.value=_.alphaMap),_.bumpMap&&(g.bumpMap.value=_.bumpMap,g.bumpScale.value=_.bumpScale,_.side===hi&&(g.bumpScale.value*=-1)),_.displacementMap&&(g.displacementMap.value=_.displacementMap,g.displacementScale.value=_.displacementScale,g.displacementBias.value=_.displacementBias),_.emissiveMap&&(g.emissiveMap.value=_.emissiveMap),_.normalMap&&(g.normalMap.value=_.normalMap,g.normalScale.value.copy(_.normalScale),_.side===hi&&g.normalScale.value.negate()),_.specularMap&&(g.specularMap.value=_.specularMap),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest);const y=t.get(_).envMap;if(y&&(g.envMap.value=y,g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=_.reflectivity,g.ior.value=_.ior,g.refractionRatio.value=_.refractionRatio),_.lightMap){g.lightMap.value=_.lightMap;const A=c.physicallyCorrectLights!==!0?Math.PI:1;g.lightMapIntensity.value=_.lightMapIntensity*A}_.aoMap&&(g.aoMap.value=_.aoMap,g.aoMapIntensity.value=_.aoMapIntensity);let T;_.map?T=_.map:_.specularMap?T=_.specularMap:_.displacementMap?T=_.displacementMap:_.normalMap?T=_.normalMap:_.bumpMap?T=_.bumpMap:_.roughnessMap?T=_.roughnessMap:_.metalnessMap?T=_.metalnessMap:_.alphaMap?T=_.alphaMap:_.emissiveMap?T=_.emissiveMap:_.clearcoatMap?T=_.clearcoatMap:_.clearcoatNormalMap?T=_.clearcoatNormalMap:_.clearcoatRoughnessMap?T=_.clearcoatRoughnessMap:_.iridescenceMap?T=_.iridescenceMap:_.iridescenceThicknessMap?T=_.iridescenceThicknessMap:_.specularIntensityMap?T=_.specularIntensityMap:_.specularColorMap?T=_.specularColorMap:_.transmissionMap?T=_.transmissionMap:_.thicknessMap?T=_.thicknessMap:_.sheenColorMap?T=_.sheenColorMap:_.sheenRoughnessMap&&(T=_.sheenRoughnessMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),g.uvTransform.value.copy(T.matrix));let L;_.aoMap?L=_.aoMap:_.lightMap&&(L=_.lightMap),L!==void 0&&(L.isWebGLRenderTarget&&(L=L.texture),L.matrixAutoUpdate===!0&&L.updateMatrix(),g.uv2Transform.value.copy(L.matrix))}function s(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity}function l(g,_){g.dashSize.value=_.dashSize,g.totalSize.value=_.dashSize+_.gapSize,g.scale.value=_.scale}function o(g,_,y,T){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.size.value=_.size*y,g.scale.value=T*.5,_.map&&(g.map.value=_.map),_.alphaMap&&(g.alphaMap.value=_.alphaMap),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest);let L;_.map?L=_.map:_.alphaMap&&(L=_.alphaMap),L!==void 0&&(L.matrixAutoUpdate===!0&&L.updateMatrix(),g.uvTransform.value.copy(L.matrix))}function f(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.rotation.value=_.rotation,_.map&&(g.map.value=_.map),_.alphaMap&&(g.alphaMap.value=_.alphaMap),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest);let y;_.map?y=_.map:_.alphaMap&&(y=_.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),g.uvTransform.value.copy(y.matrix))}function h(g,_){g.specular.value.copy(_.specular),g.shininess.value=Math.max(_.shininess,1e-4)}function d(g,_){_.gradientMap&&(g.gradientMap.value=_.gradientMap)}function p(g,_){g.roughness.value=_.roughness,g.metalness.value=_.metalness,_.roughnessMap&&(g.roughnessMap.value=_.roughnessMap),_.metalnessMap&&(g.metalnessMap.value=_.metalnessMap),t.get(_).envMap&&(g.envMapIntensity.value=_.envMapIntensity)}function m(g,_,y){g.ior.value=_.ior,_.sheen>0&&(g.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),g.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(g.sheenColorMap.value=_.sheenColorMap),_.sheenRoughnessMap&&(g.sheenRoughnessMap.value=_.sheenRoughnessMap)),_.clearcoat>0&&(g.clearcoat.value=_.clearcoat,g.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(g.clearcoatMap.value=_.clearcoatMap),_.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap),_.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),g.clearcoatNormalMap.value=_.clearcoatNormalMap,_.side===hi&&g.clearcoatNormalScale.value.negate())),_.iridescence>0&&(g.iridescence.value=_.iridescence,g.iridescenceIOR.value=_.iridescenceIOR,g.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(g.iridescenceMap.value=_.iridescenceMap),_.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=_.iridescenceThicknessMap)),_.transmission>0&&(g.transmission.value=_.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),_.transmissionMap&&(g.transmissionMap.value=_.transmissionMap),g.thickness.value=_.thickness,_.thicknessMap&&(g.thicknessMap.value=_.thicknessMap),g.attenuationDistance.value=_.attenuationDistance,g.attenuationColor.value.copy(_.attenuationColor)),g.specularIntensity.value=_.specularIntensity,g.specularColor.value.copy(_.specularColor),_.specularIntensityMap&&(g.specularIntensityMap.value=_.specularIntensityMap),_.specularColorMap&&(g.specularColorMap.value=_.specularColorMap)}function x(g,_){_.matcap&&(g.matcap.value=_.matcap)}function b(g,_){g.referencePosition.value.copy(_.referencePosition),g.nearDistance.value=_.nearDistance,g.farDistance.value=_.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function vC(c,t,e,n){let r={},s={},l=[];const o=e.isWebGL2?c.getParameter(35375):0;function f(T,L){const A=L.program;n.uniformBlockBinding(T,A)}function h(T,L){let A=r[T.id];A===void 0&&(b(T),A=d(T),r[T.id]=A,T.addEventListener("dispose",_));const w=L.program;n.updateUBOMapping(T,w);const O=t.render.frame;s[T.id]!==O&&(m(T),s[T.id]=O)}function d(T){const L=p();T.__bindingPointIndex=L;const A=c.createBuffer(),w=T.__size,O=T.usage;return c.bindBuffer(35345,A),c.bufferData(35345,w,O),c.bindBuffer(35345,null),c.bindBufferBase(35345,L,A),A}function p(){for(let T=0;T<o;T++)if(l.indexOf(T)===-1)return l.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(T){const L=r[T.id],A=T.uniforms,w=T.__cache;c.bindBuffer(35345,L);for(let O=0,z=A.length;O<z;O++){const S=A[O];if(x(S,O,w)===!0){const D=S.value,G=S.__offset;typeof D=="number"?(S.__data[0]=D,c.bufferSubData(35345,G,S.__data)):(S.value.isMatrix3?(S.__data[0]=S.value.elements[0],S.__data[1]=S.value.elements[1],S.__data[2]=S.value.elements[2],S.__data[3]=S.value.elements[0],S.__data[4]=S.value.elements[3],S.__data[5]=S.value.elements[4],S.__data[6]=S.value.elements[5],S.__data[7]=S.value.elements[0],S.__data[8]=S.value.elements[6],S.__data[9]=S.value.elements[7],S.__data[10]=S.value.elements[8],S.__data[11]=S.value.elements[0]):D.toArray(S.__data),c.bufferSubData(35345,G,S.__data))}}c.bindBuffer(35345,null)}function x(T,L,A){const w=T.value;if(A[L]===void 0)return typeof w=="number"?A[L]=w:A[L]=w.clone(),!0;if(typeof w=="number"){if(A[L]!==w)return A[L]=w,!0}else{const O=A[L];if(O.equals(w)===!1)return O.copy(w),!0}return!1}function b(T){const L=T.uniforms;let A=0;const w=16;let O=0;for(let z=0,S=L.length;z<S;z++){const D=L[z],G=g(D);if(D.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=A,z>0){O=A%w;const nt=w-O;O!==0&&nt-G.boundary<0&&(A+=w-O,D.__offset=A)}A+=G.storage}return O=A%w,O>0&&(A+=w-O),T.__size=A,T.__cache={},this}function g(T){const L=T.value,A={boundary:0,storage:0};return typeof L=="number"?(A.boundary=4,A.storage=4):L.isVector2?(A.boundary=8,A.storage=8):L.isVector3||L.isColor?(A.boundary=16,A.storage=12):L.isVector4?(A.boundary=16,A.storage=16):L.isMatrix3?(A.boundary=48,A.storage=48):L.isMatrix4?(A.boundary=64,A.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),A}function _(T){const L=T.target;L.removeEventListener("dispose",_);const A=l.indexOf(L.__bindingPointIndex);l.splice(A,1),c.deleteBuffer(r[L.id]),delete r[L.id],delete s[L.id]}function y(){for(const T in r)c.deleteBuffer(r[T]);l=[],r={},s={}}return{bind:f,update:h,dispose:y}}function xC(){const c=so("canvas");return c.style.display="block",c}function Ah(c={}){this.isWebGLRenderer=!0;const t=c.canvas!==void 0?c.canvas:xC(),e=c.context!==void 0?c.context:null,n=c.depth!==void 0?c.depth:!0,r=c.stencil!==void 0?c.stencil:!0,s=c.antialias!==void 0?c.antialias:!1,l=c.premultipliedAlpha!==void 0?c.premultipliedAlpha:!0,o=c.preserveDrawingBuffer!==void 0?c.preserveDrawingBuffer:!1,f=c.powerPreference!==void 0?c.powerPreference:"default",h=c.failIfMajorPerformanceCaveat!==void 0?c.failIfMajorPerformanceCaveat:!1;let d;e!==null?d=e.getContextAttributes().alpha:d=c.alpha!==void 0?c.alpha:!1;let p=null,m=null;const x=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ps,this.physicallyCorrectLights=!1,this.toneMapping=ar,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const g=this;let _=!1,y=0,T=0,L=null,A=-1,w=null;const O=new Ce,z=new Ce;let S=null,D=t.width,G=t.height,nt=1,_t=null,Y=null;const W=new Ce(0,0,D,G),et=new Ce(0,0,D,G);let ct=!1;const ot=new Th;let j=!1,q=!1,J=null;const pt=new Xe,gt=new Xt,B=new X,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ft(){return L===null?nt:1}let Z=e;function It(I,K){for(let at=0;at<I.length;at++){const $=I[at],lt=t.getContext($,K);if(lt!==null)return lt}return null}try{const I={alpha:!0,depth:n,stencil:r,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:o,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bh}`),t.addEventListener("webglcontextlost",Gt,!1),t.addEventListener("webglcontextrestored",jt,!1),t.addEventListener("webglcontextcreationerror",ge,!1),Z===null){const K=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&K.shift(),Z=It(K,I),Z===null)throw It(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let St,Lt,yt,Bt,Ut,Ft,le,be,Se,Le,Ie,ue,Ke,Me,F,P,st,vt,bt,Tt,Nt,R,dt,xt;function At(){St=new PE(Z),Lt=new wE(Z,St,c),St.init(Lt),R=new fC(Z,St,Lt),yt=new uC(Z,St,Lt),Bt=new IE,Ut=new KA,Ft=new hC(Z,St,yt,Ut,Lt,R,Bt),le=new TE(g),be=new LE(g),Se=new Ww(Z,Lt),dt=new bE(Z,St,Se,Lt),Le=new DE(Z,Se,Bt,dt),Ie=new zE(Z,Le,Se,Bt),bt=new NE(Z,Lt,Ft),P=new SE(Ut),ue=new ZA(g,le,be,St,Lt,dt,P),Ke=new _C(g,Ut),Me=new jA,F=new rC(St,Lt),vt=new yE(g,le,yt,Ie,d,l),st=new cC(g,Ie,Lt),xt=new vC(Z,Bt,Lt,yt),Tt=new ME(Z,St,Bt,Lt),Nt=new RE(Z,St,Bt,Lt),Bt.programs=ue.programs,g.capabilities=Lt,g.extensions=St,g.properties=Ut,g.renderLists=Me,g.shadowMap=st,g.state=yt,g.info=Bt}At();const Et=new gC(g,Z);this.xr=Et,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const I=St.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=St.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(I){I!==void 0&&(nt=I,this.setSize(D,G,!1))},this.getSize=function(I){return I.set(D,G)},this.setSize=function(I,K,at){if(Et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=I,G=K,t.width=Math.floor(I*nt),t.height=Math.floor(K*nt),at!==!1&&(t.style.width=I+"px",t.style.height=K+"px"),this.setViewport(0,0,I,K)},this.getDrawingBufferSize=function(I){return I.set(D*nt,G*nt).floor()},this.setDrawingBufferSize=function(I,K,at){D=I,G=K,nt=at,t.width=Math.floor(I*at),t.height=Math.floor(K*at),this.setViewport(0,0,I,K)},this.getCurrentViewport=function(I){return I.copy(O)},this.getViewport=function(I){return I.copy(W)},this.setViewport=function(I,K,at,$){I.isVector4?W.set(I.x,I.y,I.z,I.w):W.set(I,K,at,$),yt.viewport(O.copy(W).multiplyScalar(nt).floor())},this.getScissor=function(I){return I.copy(et)},this.setScissor=function(I,K,at,$){I.isVector4?et.set(I.x,I.y,I.z,I.w):et.set(I,K,at,$),yt.scissor(z.copy(et).multiplyScalar(nt).floor())},this.getScissorTest=function(){return ct},this.setScissorTest=function(I){yt.setScissorTest(ct=I)},this.setOpaqueSort=function(I){_t=I},this.setTransparentSort=function(I){Y=I},this.getClearColor=function(I){return I.copy(vt.getClearColor())},this.setClearColor=function(){vt.setClearColor.apply(vt,arguments)},this.getClearAlpha=function(){return vt.getClearAlpha()},this.setClearAlpha=function(){vt.setClearAlpha.apply(vt,arguments)},this.clear=function(I=!0,K=!0,at=!0){let $=0;I&&($|=16384),K&&($|=256),at&&($|=1024),Z.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Gt,!1),t.removeEventListener("webglcontextrestored",jt,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),Me.dispose(),F.dispose(),Ut.dispose(),le.dispose(),be.dispose(),Ie.dispose(),dt.dispose(),xt.dispose(),ue.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",ie),Et.removeEventListener("sessionend",Ve),J&&(J.dispose(),J=null),Pe.stop()};function Gt(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function jt(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const I=Bt.autoReset,K=st.enabled,at=st.autoUpdate,$=st.needsUpdate,lt=st.type;At(),Bt.autoReset=I,st.enabled=K,st.autoUpdate=at,st.needsUpdate=$,st.type=lt}function ge(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function k(I){const K=I.target;K.removeEventListener("dispose",k),Mt(K)}function Mt(I){rt(I),Ut.remove(I)}function rt(I){const K=Ut.get(I).programs;K!==void 0&&(K.forEach(function(at){ue.releaseProgram(at)}),I.isShaderMaterial&&ue.releaseShaderCache(I))}this.renderBufferDirect=function(I,K,at,$,lt,zt){K===null&&(K=tt);const Ht=lt.isMesh&&lt.matrixWorld.determinant()<0,Zt=Zl(I,K,at,$,lt);yt.setMaterial($,Ht);let qt=at.index;const he=at.attributes.position;if(qt===null){if(he===void 0||he.count===0)return}else if(qt.count===0)return;let re=1;$.wireframe===!0&&(qt=Le.getWireframeAttribute(at),re=2),dt.setup(lt,$,Zt,at,qt);let se,Ee=Tt;qt!==null&&(se=Se.get(qt),Ee=Nt,Ee.setIndex(se));const Bi=qt!==null?qt.count:he.count,mi=at.drawRange.start*re,ur=at.drawRange.count*re,pn=zt!==null?zt.start*re:0,ce=zt!==null?zt.count*re:1/0,hr=Math.max(mi,pn),Oe=Math.min(Bi,mi+ur,pn+ce)-1,mn=Math.max(0,Oe-hr+1);if(mn!==0){if(lt.isMesh)$.wireframe===!0?(yt.setLineWidth($.wireframeLinewidth*ft()),Ee.setMode(1)):Ee.setMode(4);else if(lt.isLine){let gi=$.linewidth;gi===void 0&&(gi=1),yt.setLineWidth(gi*ft()),lt.isLineSegments?Ee.setMode(1):lt.isLineLoop?Ee.setMode(2):Ee.setMode(3)}else lt.isPoints?Ee.setMode(0):lt.isSprite&&Ee.setMode(4);if(lt.isInstancedMesh)Ee.renderInstances(hr,mn,lt.count);else if(at.isInstancedBufferGeometry){const gi=Math.min(at.instanceCount,at._maxInstanceCount);Ee.renderInstances(hr,mn,gi)}else Ee.render(hr,mn)}},this.compile=function(I,K){function at($,lt,zt){$.transparent===!0&&$.side===Lr?($.side=hi,$.needsUpdate=!0,bs($,lt,zt),$.side=fa,$.needsUpdate=!0,bs($,lt,zt),$.side=Lr):bs($,lt,zt)}m=F.get(I),m.init(),b.push(m),I.traverseVisible(function($){$.isLight&&$.layers.test(K.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),m.setupLights(g.physicallyCorrectLights),I.traverse(function($){const lt=$.material;if(lt)if(Array.isArray(lt))for(let zt=0;zt<lt.length;zt++){const Ht=lt[zt];at(Ht,I,$)}else at(lt,I,$)}),b.pop(),m=null};let Dt=null;function Pt(I){Dt&&Dt(I)}function ie(){Pe.stop()}function Ve(){Pe.start()}const Pe=new gg;Pe.setAnimationLoop(Pt),typeof self!="undefined"&&Pe.setContext(self),this.setAnimationLoop=function(I){Dt=I,Et.setAnimationLoop(I),I===null?Pe.stop():Pe.start()},Et.addEventListener("sessionstart",ie),Et.addEventListener("sessionend",Ve),this.render=function(I,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Et.enabled===!0&&Et.isPresenting===!0&&(Et.cameraAutoUpdate===!0&&Et.updateCamera(K),K=Et.getCamera()),I.isScene===!0&&I.onBeforeRender(g,I,K,L),m=F.get(I,b.length),m.init(),b.push(m),pt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),ot.setFromProjectionMatrix(pt),q=this.localClippingEnabled,j=P.init(this.clippingPlanes,q,K),p=Me.get(I,x.length),p.init(),x.push(p),Ai(I,K,0,g.sortObjects),p.finish(),g.sortObjects===!0&&p.sort(_t,Y),j===!0&&P.beginShadows();const at=m.state.shadowsArray;if(st.render(at,I,K),j===!0&&P.endShadows(),this.info.autoReset===!0&&this.info.reset(),vt.render(p,I),m.setupLights(g.physicallyCorrectLights),K.isArrayCamera){const $=K.cameras;for(let lt=0,zt=$.length;lt<zt;lt++){const Ht=$[lt];Te(p,I,Ht,Ht.viewport)}}else Te(p,I,K);L!==null&&(Ft.updateMultisampleRenderTarget(L),Ft.updateRenderTargetMipmap(L)),I.isScene===!0&&I.onAfterRender(g,I,K),dt.resetDefaultState(),A=-1,w=null,b.pop(),b.length>0?m=b[b.length-1]:m=null,x.pop(),x.length>0?p=x[x.length-1]:p=null};function Ai(I,K,at,$){if(I.visible===!1)return;if(I.layers.test(K.layers)){if(I.isGroup)at=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(K);else if(I.isLight)m.pushLight(I),I.castShadow&&m.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||ot.intersectsSprite(I)){$&&B.setFromMatrixPosition(I.matrixWorld).applyMatrix4(pt);const Ht=Ie.update(I),Zt=I.material;Zt.visible&&p.push(I,Ht,Zt,at,B.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(I.isSkinnedMesh&&I.skeleton.frame!==Bt.render.frame&&(I.skeleton.update(),I.skeleton.frame=Bt.render.frame),!I.frustumCulled||ot.intersectsObject(I))){$&&B.setFromMatrixPosition(I.matrixWorld).applyMatrix4(pt);const Ht=Ie.update(I),Zt=I.material;if(Array.isArray(Zt)){const qt=Ht.groups;for(let he=0,re=qt.length;he<re;he++){const se=qt[he],Ee=Zt[se.materialIndex];Ee&&Ee.visible&&p.push(I,Ht,Ee,at,B.z,se)}}else Zt.visible&&p.push(I,Ht,Zt,at,B.z,null)}}const zt=I.children;for(let Ht=0,Zt=zt.length;Ht<Zt;Ht++)Ai(zt[Ht],K,at,$)}function Te(I,K,at,$){const lt=I.opaque,zt=I.transmissive,Ht=I.transparent;m.setupLightsView(at),zt.length>0&&Yn(lt,K,at),$&&yt.viewport(O.copy($)),lt.length>0&&Mn(lt,K,at),zt.length>0&&Mn(zt,K,at),Ht.length>0&&Mn(Ht,K,at),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function Yn(I,K,at){const $=Lt.isWebGL2;J===null&&(J=new ms(1,1,{generateMipmaps:!0,type:St.has("EXT_color_buffer_half_float")?ro:ds,minFilter:Vl,samples:$&&s===!0?4:0})),g.getDrawingBufferSize(gt),$?J.setSize(gt.x,gt.y):J.setSize(nh(gt.x),nh(gt.y));const lt=g.getRenderTarget();g.setRenderTarget(J),g.clear();const zt=g.toneMapping;g.toneMapping=ar,Mn(I,K,at),g.toneMapping=zt,Ft.updateMultisampleRenderTarget(J),Ft.updateRenderTargetMipmap(J),g.setRenderTarget(lt)}function Mn(I,K,at){const $=K.isScene===!0?K.overrideMaterial:null;for(let lt=0,zt=I.length;lt<zt;lt++){const Ht=I[lt],Zt=Ht.object,qt=Ht.geometry,he=$===null?Ht.material:$,re=Ht.group;Zt.layers.test(at.layers)&&Yl(Zt,K,at,qt,he,re)}}function Yl(I,K,at,$,lt,zt){I.onBeforeRender(g,K,at,$,lt,zt),I.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),lt.onBeforeRender(g,K,at,$,I,zt),lt.transparent===!0&&lt.side===Lr?(lt.side=hi,lt.needsUpdate=!0,g.renderBufferDirect(at,K,$,lt,I,zt),lt.side=fa,lt.needsUpdate=!0,g.renderBufferDirect(at,K,$,lt,I,zt),lt.side=Lr):g.renderBufferDirect(at,K,$,lt,I,zt),I.onAfterRender(g,K,at,$,lt,zt)}function bs(I,K,at){K.isScene!==!0&&(K=tt);const $=Ut.get(I),lt=m.state.lights,zt=m.state.shadowsArray,Ht=lt.state.version,Zt=ue.getParameters(I,lt.state,zt,K,at),qt=ue.getProgramCacheKey(Zt);let he=$.programs;$.environment=I.isMeshStandardMaterial?K.environment:null,$.fog=K.fog,$.envMap=(I.isMeshStandardMaterial?be:le).get(I.envMap||$.environment),he===void 0&&(I.addEventListener("dispose",k),he=new Map,$.programs=he);let re=he.get(qt);if(re!==void 0){if($.currentProgram===re&&$.lightsStateVersion===Ht)return Ms(I,Zt),re}else Zt.uniforms=ue.getUniforms(I),I.onBuild(at,Zt,g),I.onBeforeCompile(Zt,g),re=ue.acquireProgram(Zt,qt),he.set(qt,re),$.uniforms=Zt.uniforms;const se=$.uniforms;(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(se.clippingPlanes=P.uniform),Ms(I,Zt),$.needsLights=Kl(I),$.lightsStateVersion=Ht,$.needsLights&&(se.ambientLightColor.value=lt.state.ambient,se.lightProbe.value=lt.state.probe,se.directionalLights.value=lt.state.directional,se.directionalLightShadows.value=lt.state.directionalShadow,se.spotLights.value=lt.state.spot,se.spotLightShadows.value=lt.state.spotShadow,se.rectAreaLights.value=lt.state.rectArea,se.ltc_1.value=lt.state.rectAreaLTC1,se.ltc_2.value=lt.state.rectAreaLTC2,se.pointLights.value=lt.state.point,se.pointLightShadows.value=lt.state.pointShadow,se.hemisphereLights.value=lt.state.hemi,se.directionalShadowMap.value=lt.state.directionalShadowMap,se.directionalShadowMatrix.value=lt.state.directionalShadowMatrix,se.spotShadowMap.value=lt.state.spotShadowMap,se.spotLightMatrix.value=lt.state.spotLightMatrix,se.spotLightMap.value=lt.state.spotLightMap,se.pointShadowMap.value=lt.state.pointShadowMap,se.pointShadowMatrix.value=lt.state.pointShadowMatrix);const Ee=re.getUniforms(),Bi=Ll.seqWithValue(Ee.seq,se);return $.currentProgram=re,$.uniformsList=Bi,re}function Ms(I,K){const at=Ut.get(I);at.outputEncoding=K.outputEncoding,at.instancing=K.instancing,at.skinning=K.skinning,at.morphTargets=K.morphTargets,at.morphNormals=K.morphNormals,at.morphColors=K.morphColors,at.morphTargetsCount=K.morphTargetsCount,at.numClippingPlanes=K.numClippingPlanes,at.numIntersection=K.numClipIntersection,at.vertexAlphas=K.vertexAlphas,at.vertexTangents=K.vertexTangents,at.toneMapping=K.toneMapping}function Zl(I,K,at,$,lt){K.isScene!==!0&&(K=tt),Ft.resetTextureUnits();const zt=K.fog,Ht=$.isMeshStandardMaterial?K.environment:null,Zt=L===null?g.outputEncoding:L.isXRRenderTarget===!0?L.texture.encoding:ps,qt=($.isMeshStandardMaterial?be:le).get($.envMap||Ht),he=$.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,re=!!$.normalMap&&!!at.attributes.tangent,se=!!at.morphAttributes.position,Ee=!!at.morphAttributes.normal,Bi=!!at.morphAttributes.color,mi=$.toneMapped?g.toneMapping:ar,ur=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,pn=ur!==void 0?ur.length:0,ce=Ut.get($),hr=m.state.lights;if(j===!0&&(q===!0||I!==w)){const sn=I===w&&$.id===A;P.setState($,I,sn)}let Oe=!1;$.version===ce.__version?(ce.needsLights&&ce.lightsStateVersion!==hr.state.version||ce.outputEncoding!==Zt||lt.isInstancedMesh&&ce.instancing===!1||!lt.isInstancedMesh&&ce.instancing===!0||lt.isSkinnedMesh&&ce.skinning===!1||!lt.isSkinnedMesh&&ce.skinning===!0||ce.envMap!==qt||$.fog===!0&&ce.fog!==zt||ce.numClippingPlanes!==void 0&&(ce.numClippingPlanes!==P.numPlanes||ce.numIntersection!==P.numIntersection)||ce.vertexAlphas!==he||ce.vertexTangents!==re||ce.morphTargets!==se||ce.morphNormals!==Ee||ce.morphColors!==Bi||ce.toneMapping!==mi||Lt.isWebGL2===!0&&ce.morphTargetsCount!==pn)&&(Oe=!0):(Oe=!0,ce.__version=$.version);let mn=ce.currentProgram;Oe===!0&&(mn=bs($,K,lt));let gi=!1,fr=!1,Aa=!1;const tn=mn.getUniforms(),ki=ce.uniforms;if(yt.useProgram(mn.program)&&(gi=!0,fr=!0,Aa=!0),$.id!==A&&(A=$.id,fr=!0),gi||w!==I){if(tn.setValue(Z,"projectionMatrix",I.projectionMatrix),Lt.logarithmicDepthBuffer&&tn.setValue(Z,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),w!==I&&(w=I,fr=!0,Aa=!0),$.isShaderMaterial||$.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshStandardMaterial||$.envMap){const sn=tn.map.cameraPosition;sn!==void 0&&sn.setValue(Z,B.setFromMatrixPosition(I.matrixWorld))}($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&tn.setValue(Z,"isOrthographic",I.isOrthographicCamera===!0),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial||$.isShadowMaterial||lt.isSkinnedMesh)&&tn.setValue(Z,"viewMatrix",I.matrixWorldInverse)}if(lt.isSkinnedMesh){tn.setOptional(Z,lt,"bindMatrix"),tn.setOptional(Z,lt,"bindMatrixInverse");const sn=lt.skeleton;sn&&(Lt.floatVertexTextures?(sn.boneTexture===null&&sn.computeBoneTexture(),tn.setValue(Z,"boneTexture",sn.boneTexture,Ft),tn.setValue(Z,"boneTextureSize",sn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ca=at.morphAttributes;if((Ca.position!==void 0||Ca.normal!==void 0||Ca.color!==void 0&&Lt.isWebGL2===!0)&&bt.update(lt,at,$,mn),(fr||ce.receiveShadow!==lt.receiveShadow)&&(ce.receiveShadow=lt.receiveShadow,tn.setValue(Z,"receiveShadow",lt.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(ki.envMap.value=qt,ki.flipEnvMap.value=qt.isCubeTexture&&qt.isRenderTargetTexture===!1?-1:1),fr&&(tn.setValue(Z,"toneMappingExposure",g.toneMappingExposure),ce.needsLights&&Ea(ki,Aa),zt&&$.fog===!0&&Ke.refreshFogUniforms(ki,zt),Ke.refreshMaterialUniforms(ki,$,nt,G,J),Ll.upload(Z,ce.uniformsList,ki,Ft)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Ll.upload(Z,ce.uniformsList,ki,Ft),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&tn.setValue(Z,"center",lt.center),tn.setValue(Z,"modelViewMatrix",lt.modelViewMatrix),tn.setValue(Z,"normalMatrix",lt.normalMatrix),tn.setValue(Z,"modelMatrix",lt.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const sn=$.uniformsGroups;for(let ws=0,xo=sn.length;ws<xo;ws++)if(Lt.isWebGL2){const Ss=sn[ws];xt.update(Ss,mn),xt.bind(Ss,mn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return mn}function Ea(I,K){I.ambientLightColor.needsUpdate=K,I.lightProbe.needsUpdate=K,I.directionalLights.needsUpdate=K,I.directionalLightShadows.needsUpdate=K,I.pointLights.needsUpdate=K,I.pointLightShadows.needsUpdate=K,I.spotLights.needsUpdate=K,I.spotLightShadows.needsUpdate=K,I.rectAreaLights.needsUpdate=K,I.hemisphereLights.needsUpdate=K}function Kl(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(I,K,at){Ut.get(I.texture).__webglTexture=K,Ut.get(I.depthTexture).__webglTexture=at;const $=Ut.get(I);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=at===void 0,$.__autoAllocateDepthBuffer||St.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(I,K){const at=Ut.get(I);at.__webglFramebuffer=K,at.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(I,K=0,at=0){L=I,y=K,T=at;let $=!0;if(I){const qt=Ut.get(I);qt.__useDefaultFramebuffer!==void 0?(yt.bindFramebuffer(36160,null),$=!1):qt.__webglFramebuffer===void 0?Ft.setupRenderTarget(I):qt.__hasExternalTextures&&Ft.rebindTextures(I,Ut.get(I.texture).__webglTexture,Ut.get(I.depthTexture).__webglTexture)}let lt=null,zt=!1,Ht=!1;if(I){const qt=I.texture;(qt.isData3DTexture||qt.isDataArrayTexture)&&(Ht=!0);const he=Ut.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(lt=he[K],zt=!0):Lt.isWebGL2&&I.samples>0&&Ft.useMultisampledRTT(I)===!1?lt=Ut.get(I).__webglMultisampledFramebuffer:lt=he,O.copy(I.viewport),z.copy(I.scissor),S=I.scissorTest}else O.copy(W).multiplyScalar(nt).floor(),z.copy(et).multiplyScalar(nt).floor(),S=ct;if(yt.bindFramebuffer(36160,lt)&&Lt.drawBuffers&&$&&yt.drawBuffers(I,lt),yt.viewport(O),yt.scissor(z),yt.setScissorTest(S),zt){const qt=Ut.get(I.texture);Z.framebufferTexture2D(36160,36064,34069+K,qt.__webglTexture,at)}else if(Ht){const qt=Ut.get(I.texture),he=K||0;Z.framebufferTextureLayer(36160,36064,qt.__webglTexture,at||0,he)}A=-1},this.readRenderTargetPixels=function(I,K,at,$,lt,zt,Ht){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Zt=Ut.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ht!==void 0&&(Zt=Zt[Ht]),Zt){yt.bindFramebuffer(36160,Zt);try{const qt=I.texture,he=qt.format,re=qt.type;if(he!==Ii&&R.convert(he)!==Z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const se=re===ro&&(St.has("EXT_color_buffer_half_float")||Lt.isWebGL2&&St.has("EXT_color_buffer_float"));if(re!==ds&&R.convert(re)!==Z.getParameter(35738)&&!(re===rs&&(Lt.isWebGL2||St.has("OES_texture_float")||St.has("WEBGL_color_buffer_float")))&&!se){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=I.width-$&&at>=0&&at<=I.height-lt&&Z.readPixels(K,at,$,lt,R.convert(he),R.convert(re),zt)}finally{const qt=L!==null?Ut.get(L).__webglFramebuffer:null;yt.bindFramebuffer(36160,qt)}}},this.copyFramebufferToTexture=function(I,K,at=0){const $=Math.pow(2,-at),lt=Math.floor(K.image.width*$),zt=Math.floor(K.image.height*$);Ft.setTexture2D(K,0),Z.copyTexSubImage2D(3553,at,0,0,I.x,I.y,lt,zt),yt.unbindTexture()},this.copyTextureToTexture=function(I,K,at,$=0){const lt=K.image.width,zt=K.image.height,Ht=R.convert(at.format),Zt=R.convert(at.type);Ft.setTexture2D(at,0),Z.pixelStorei(37440,at.flipY),Z.pixelStorei(37441,at.premultiplyAlpha),Z.pixelStorei(3317,at.unpackAlignment),K.isDataTexture?Z.texSubImage2D(3553,$,I.x,I.y,lt,zt,Ht,Zt,K.image.data):K.isCompressedTexture?Z.compressedTexSubImage2D(3553,$,I.x,I.y,K.mipmaps[0].width,K.mipmaps[0].height,Ht,K.mipmaps[0].data):Z.texSubImage2D(3553,$,I.x,I.y,Ht,Zt,K.image),$===0&&at.generateMipmaps&&Z.generateMipmap(3553),yt.unbindTexture()},this.copyTextureToTexture3D=function(I,K,at,$,lt=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const zt=I.max.x-I.min.x+1,Ht=I.max.y-I.min.y+1,Zt=I.max.z-I.min.z+1,qt=R.convert($.format),he=R.convert($.type);let re;if($.isData3DTexture)Ft.setTexture3D($,0),re=32879;else if($.isDataArrayTexture)Ft.setTexture2DArray($,0),re=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(37440,$.flipY),Z.pixelStorei(37441,$.premultiplyAlpha),Z.pixelStorei(3317,$.unpackAlignment);const se=Z.getParameter(3314),Ee=Z.getParameter(32878),Bi=Z.getParameter(3316),mi=Z.getParameter(3315),ur=Z.getParameter(32877),pn=at.isCompressedTexture?at.mipmaps[0]:at.image;Z.pixelStorei(3314,pn.width),Z.pixelStorei(32878,pn.height),Z.pixelStorei(3316,I.min.x),Z.pixelStorei(3315,I.min.y),Z.pixelStorei(32877,I.min.z),at.isDataTexture||at.isData3DTexture?Z.texSubImage3D(re,lt,K.x,K.y,K.z,zt,Ht,Zt,qt,he,pn.data):at.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Z.compressedTexSubImage3D(re,lt,K.x,K.y,K.z,zt,Ht,Zt,qt,pn.data)):Z.texSubImage3D(re,lt,K.x,K.y,K.z,zt,Ht,Zt,qt,he,pn),Z.pixelStorei(3314,se),Z.pixelStorei(32878,Ee),Z.pixelStorei(3316,Bi),Z.pixelStorei(3315,mi),Z.pixelStorei(32877,ur),lt===0&&$.generateMipmaps&&Z.generateMipmap(re),yt.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?Ft.setTextureCube(I,0):I.isData3DTexture?Ft.setTexture3D(I,0):I.isDataArrayTexture?Ft.setTexture2DArray(I,0):Ft.setTexture2D(I,0),yt.unbindTexture()},this.resetState=function(){y=0,T=0,L=null,yt.reset(),dt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class yC extends Ah{}yC.prototype.isWebGL1Renderer=!0;class Ch{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new me(t),this.near=e,this.far=n}clone(){return new Ch(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class bg extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class bC extends _o{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new me(16777215),this.specular=new me(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rg,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Mh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Sm={enabled:!1,files:{},add:function(c,t){this.enabled!==!1&&(this.files[c]=t)},get:function(c){if(this.enabled!==!1)return this.files[c]},remove:function(c){delete this.files[c]},clear:function(){this.files={}}};class Mg{constructor(t,e,n){const r=this;let s=!1,l=0,o=0,f;const h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(d){o++,s===!1&&r.onStart!==void 0&&r.onStart(d,l,o),s=!0},this.itemEnd=function(d){l++,r.onProgress!==void 0&&r.onProgress(d,l,o),l===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return f?f(d):d},this.setURLModifier=function(d){return f=d,this},this.addHandler=function(d,p){return h.push(d,p),this},this.removeHandler=function(d){const p=h.indexOf(d);return p!==-1&&h.splice(p,2),this},this.getHandler=function(d){for(let p=0,m=h.length;p<m;p+=2){const x=h[p],b=h[p+1];if(x.global&&(x.lastIndex=0),x.test(d))return b}return null}}}const MC=new Mg;class wg{constructor(t){this.manager=t!==void 0?t:MC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}class wC extends wg{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,l=Sm.get(t);if(l!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(l),s.manager.itemEnd(t)},0),l;const o=so("img");function f(){d(),Sm.add(t,this),e&&e(this),s.manager.itemEnd(t)}function h(p){d(),r&&r(p),s.manager.itemError(t),s.manager.itemEnd(t)}function d(){o.removeEventListener("load",f,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",f,!1),o.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}class SC extends wg{constructor(t){super(t)}load(t,e,n,r){const s=new di,l=new wC(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}}class TC extends xn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new me(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Tm=new Xe,Em=new X,Am=new X;class EC{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Th,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Em.setFromMatrixPosition(t.matrixWorld),e.position.copy(Em),Am.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Am),e.updateMatrixWorld(),Tm.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tm),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(e.projectionMatrix),n.multiply(e.matrixWorldInverse)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Cm=new Xe,$a=new X,Uu=new X;class AC extends EC{constructor(){super(new Ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xt(4,2),this._viewportCount=6,this._viewports=[new Ce(2,1,1,1),new Ce(0,1,1,1),new Ce(3,1,1,1),new Ce(1,1,1,1),new Ce(3,0,1,1),new Ce(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),$a.setFromMatrixPosition(t.matrixWorld),n.position.copy($a),Uu.copy(n.position),Uu.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Uu),n.updateMatrixWorld(),r.makeTranslation(-$a.x,-$a.y,-$a.z),Cm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cm)}}class CC extends TC{constructor(t,e,n=0,r=1){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new AC}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class LC{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Lm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Lm();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Lm(){return(typeof performance=="undefined"?Date:performance).now()}class PC{constructor(t,e,n=0,r=1/0){this.ray=new ug(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Sh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return rh(t,this,n,e),n.sort(Pm),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)rh(t[r],this,n,e);return n.sort(Pm),n}}function Pm(c,t){return c.distance-t.distance}function rh(c,t,e,n){if(c.layers.test(t.layers)&&c.raycast(t,e),n===!0){const r=c.children;for(let s=0,l=r.length;s<l;s++)rh(r[s],t,e,!0)}}class Dm{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Cn(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bh}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bh);const Rm={type:"change"},Bu={type:"start"},Im={type:"end"};class DC extends vs{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Bs.ROTATE,MIDDLE:Bs.DOLLY,RIGHT:Bs.PAN},this.touches={ONE:ks.ROTATE,TWO:ks.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",Me),this._domElementKeyEvents=R},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Rm),n.update(),s=r.NONE},this.update=function(){const R=new X,dt=new gs().setFromUnitVectors(t.up,new X(0,1,0)),xt=dt.clone().invert(),At=new X,Et=new gs,Gt=2*Math.PI;return function(){const ge=n.object.position;R.copy(ge).sub(n.target),R.applyQuaternion(dt),o.setFromVector3(R),n.autoRotate&&s===r.NONE&&D(z()),n.enableDamping?(o.theta+=f.theta*n.dampingFactor,o.phi+=f.phi*n.dampingFactor):(o.theta+=f.theta,o.phi+=f.phi);let k=n.minAzimuthAngle,Mt=n.maxAzimuthAngle;return isFinite(k)&&isFinite(Mt)&&(k<-Math.PI?k+=Gt:k>Math.PI&&(k-=Gt),Mt<-Math.PI?Mt+=Gt:Mt>Math.PI&&(Mt-=Gt),k<=Mt?o.theta=Math.max(k,Math.min(Mt,o.theta)):o.theta=o.theta>(k+Mt)/2?Math.max(k,o.theta):Math.min(Mt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=h,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),R.setFromSpherical(o),R.applyQuaternion(xt),ge.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(f.theta*=1-n.dampingFactor,f.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(f.set(0,0,0),d.set(0,0,0)),h=1,p||At.distanceToSquared(n.object.position)>l||8*(1-Et.dot(n.object.quaternion))>l?(n.dispatchEvent(Rm),At.copy(n.object.position),Et.copy(n.object.quaternion),p=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",st),n.domElement.removeEventListener("pointerdown",le),n.domElement.removeEventListener("pointercancel",Le),n.domElement.removeEventListener("wheel",Ke),n.domElement.removeEventListener("pointermove",be),n.domElement.removeEventListener("pointerup",Se),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Me)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const l=1e-6,o=new Dm,f=new Dm;let h=1;const d=new X;let p=!1;const m=new Xt,x=new Xt,b=new Xt,g=new Xt,_=new Xt,y=new Xt,T=new Xt,L=new Xt,A=new Xt,w=[],O={};function z(){return 2*Math.PI/60/60*n.autoRotateSpeed}function S(){return Math.pow(.95,n.zoomSpeed)}function D(R){f.theta-=R}function G(R){f.phi-=R}const nt=function(){const R=new X;return function(xt,At){R.setFromMatrixColumn(At,0),R.multiplyScalar(-xt),d.add(R)}}(),_t=function(){const R=new X;return function(xt,At){n.screenSpacePanning===!0?R.setFromMatrixColumn(At,1):(R.setFromMatrixColumn(At,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(xt),d.add(R)}}(),Y=function(){const R=new X;return function(xt,At){const Et=n.domElement;if(n.object.isPerspectiveCamera){const Gt=n.object.position;R.copy(Gt).sub(n.target);let jt=R.length();jt*=Math.tan(n.object.fov/2*Math.PI/180),nt(2*xt*jt/Et.clientHeight,n.object.matrix),_t(2*At*jt/Et.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(nt(xt*(n.object.right-n.object.left)/n.object.zoom/Et.clientWidth,n.object.matrix),_t(At*(n.object.top-n.object.bottom)/n.object.zoom/Et.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function W(R){n.object.isPerspectiveCamera?h/=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*R)),n.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function et(R){n.object.isPerspectiveCamera?h*=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/R)),n.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ct(R){m.set(R.clientX,R.clientY)}function ot(R){T.set(R.clientX,R.clientY)}function j(R){g.set(R.clientX,R.clientY)}function q(R){x.set(R.clientX,R.clientY),b.subVectors(x,m).multiplyScalar(n.rotateSpeed);const dt=n.domElement;D(2*Math.PI*b.x/dt.clientHeight),G(2*Math.PI*b.y/dt.clientHeight),m.copy(x),n.update()}function J(R){L.set(R.clientX,R.clientY),A.subVectors(L,T),A.y>0?W(S()):A.y<0&&et(S()),T.copy(L),n.update()}function pt(R){_.set(R.clientX,R.clientY),y.subVectors(_,g).multiplyScalar(n.panSpeed),Y(y.x,y.y),g.copy(_),n.update()}function gt(R){R.deltaY<0?et(S()):R.deltaY>0&&W(S()),n.update()}function B(R){let dt=!1;switch(R.code){case n.keys.UP:Y(0,n.keyPanSpeed),dt=!0;break;case n.keys.BOTTOM:Y(0,-n.keyPanSpeed),dt=!0;break;case n.keys.LEFT:Y(n.keyPanSpeed,0),dt=!0;break;case n.keys.RIGHT:Y(-n.keyPanSpeed,0),dt=!0;break}dt&&(R.preventDefault(),n.update())}function tt(){if(w.length===1)m.set(w[0].pageX,w[0].pageY);else{const R=.5*(w[0].pageX+w[1].pageX),dt=.5*(w[0].pageY+w[1].pageY);m.set(R,dt)}}function ft(){if(w.length===1)g.set(w[0].pageX,w[0].pageY);else{const R=.5*(w[0].pageX+w[1].pageX),dt=.5*(w[0].pageY+w[1].pageY);g.set(R,dt)}}function Z(){const R=w[0].pageX-w[1].pageX,dt=w[0].pageY-w[1].pageY,xt=Math.sqrt(R*R+dt*dt);T.set(0,xt)}function It(){n.enableZoom&&Z(),n.enablePan&&ft()}function St(){n.enableZoom&&Z(),n.enableRotate&&tt()}function Lt(R){if(w.length==1)x.set(R.pageX,R.pageY);else{const xt=Nt(R),At=.5*(R.pageX+xt.x),Et=.5*(R.pageY+xt.y);x.set(At,Et)}b.subVectors(x,m).multiplyScalar(n.rotateSpeed);const dt=n.domElement;D(2*Math.PI*b.x/dt.clientHeight),G(2*Math.PI*b.y/dt.clientHeight),m.copy(x)}function yt(R){if(w.length===1)_.set(R.pageX,R.pageY);else{const dt=Nt(R),xt=.5*(R.pageX+dt.x),At=.5*(R.pageY+dt.y);_.set(xt,At)}y.subVectors(_,g).multiplyScalar(n.panSpeed),Y(y.x,y.y),g.copy(_)}function Bt(R){const dt=Nt(R),xt=R.pageX-dt.x,At=R.pageY-dt.y,Et=Math.sqrt(xt*xt+At*At);L.set(0,Et),A.set(0,Math.pow(L.y/T.y,n.zoomSpeed)),W(A.y),T.copy(L)}function Ut(R){n.enableZoom&&Bt(R),n.enablePan&&yt(R)}function Ft(R){n.enableZoom&&Bt(R),n.enableRotate&&Lt(R)}function le(R){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",be),n.domElement.addEventListener("pointerup",Se)),vt(R),R.pointerType==="touch"?F(R):Ie(R))}function be(R){n.enabled!==!1&&(R.pointerType==="touch"?P(R):ue(R))}function Se(R){bt(R),w.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",be),n.domElement.removeEventListener("pointerup",Se)),n.dispatchEvent(Im),s=r.NONE}function Le(R){bt(R)}function Ie(R){let dt;switch(R.button){case 0:dt=n.mouseButtons.LEFT;break;case 1:dt=n.mouseButtons.MIDDLE;break;case 2:dt=n.mouseButtons.RIGHT;break;default:dt=-1}switch(dt){case Bs.DOLLY:if(n.enableZoom===!1)return;ot(R),s=r.DOLLY;break;case Bs.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;j(R),s=r.PAN}else{if(n.enableRotate===!1)return;ct(R),s=r.ROTATE}break;case Bs.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;ct(R),s=r.ROTATE}else{if(n.enablePan===!1)return;j(R),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Bu)}function ue(R){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;q(R);break;case r.DOLLY:if(n.enableZoom===!1)return;J(R);break;case r.PAN:if(n.enablePan===!1)return;pt(R);break}}function Ke(R){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(R.preventDefault(),n.dispatchEvent(Bu),gt(R),n.dispatchEvent(Im))}function Me(R){n.enabled===!1||n.enablePan===!1||B(R)}function F(R){switch(Tt(R),w.length){case 1:switch(n.touches.ONE){case ks.ROTATE:if(n.enableRotate===!1)return;tt(),s=r.TOUCH_ROTATE;break;case ks.PAN:if(n.enablePan===!1)return;ft(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case ks.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;It(),s=r.TOUCH_DOLLY_PAN;break;case ks.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;St(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Bu)}function P(R){switch(Tt(R),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;Lt(R),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;yt(R),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ut(R),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ft(R),n.update();break;default:s=r.NONE}}function st(R){n.enabled!==!1&&R.preventDefault()}function vt(R){w.push(R)}function bt(R){delete O[R.pointerId];for(let dt=0;dt<w.length;dt++)if(w[dt].pointerId==R.pointerId){w.splice(dt,1);return}}function Tt(R){let dt=O[R.pointerId];dt===void 0&&(dt=new Xt,O[R.pointerId]=dt),dt.set(R.pageX,R.pageY)}function Nt(R){const dt=R.pointerId===w[0].pointerId?w[1]:w[0];return O[dt.pointerId]}n.domElement.addEventListener("contextmenu",st),n.domElement.addEventListener("pointerdown",le),n.domElement.addEventListener("pointercancel",Le),n.domElement.addEventListener("wheel",Ke,{passive:!1}),this.update()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.18.1
 * @author George Michael Brower
 * @license MIT
 */class Ni{constructor(t,e,n,r,s="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),Ni.nextNameID=Ni.nextNameID||0,this.$name.id=`lil-gui-name-${++Ni.nextNameID}`,this.$widget=document.createElement(s),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class RC extends Ni{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function sh(c){let t,e;return(t=c.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=c.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=c.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const IC={isPrimitive:!0,match:c=>typeof c=="string",fromHexString:sh,toHexString:sh},ao={isPrimitive:!0,match:c=>typeof c=="number",fromHexString:c=>parseInt(c.substring(1),16),toHexString:c=>"#"+c.toString(16).padStart(6,0)},OC={isPrimitive:!1,match:c=>Array.isArray(c),fromHexString(c,t,e=1){const n=ao.fromHexString(c);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([c,t,e],n=1){n=255/n;const r=c*n<<16^t*n<<8^e*n<<0;return ao.toHexString(r)}},FC={isPrimitive:!1,match:c=>Object(c)===c,fromHexString(c,t,e=1){const n=ao.fromHexString(c);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:c,g:t,b:e},n=1){n=255/n;const r=c*n<<16^t*n<<8^e*n<<0;return ao.toHexString(r)}},NC=[IC,ao,OC,FC];function zC(c){return NC.find(t=>t.match(c))}class UC extends Ni{constructor(t,e,n,r){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=zC(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=sh(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class ku extends Ni{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class BC extends Ni{constructor(t,e,n,r,s,l){super(t,e,n,"number"),this._initInput(),this.min(r),this.max(s);const o=l!==void 0;this.step(o?l:this._getImplicitStep(),o),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let y=parseFloat(this.$input.value);isNaN(y)||(this._stepExplicit&&(y=this._snap(y)),this.setValue(this._clamp(y)))},e=y=>{const T=parseFloat(this.$input.value);isNaN(T)||(this._snapClampSetValue(T+y),this.$input.value=this.getValue())},n=y=>{y.code==="Enter"&&this.$input.blur(),y.code==="ArrowUp"&&(y.preventDefault(),e(this._step*this._arrowKeyMultiplier(y))),y.code==="ArrowDown"&&(y.preventDefault(),e(this._step*this._arrowKeyMultiplier(y)*-1))},r=y=>{this._inputFocused&&(y.preventDefault(),e(this._step*this._normalizeMouseWheel(y)))};let s=!1,l,o,f,h,d;const p=5,m=y=>{l=y.clientX,o=f=y.clientY,s=!0,h=this.getValue(),d=0,window.addEventListener("mousemove",x),window.addEventListener("mouseup",b)},x=y=>{if(s){const T=y.clientX-l,L=y.clientY-o;Math.abs(L)>p?(y.preventDefault(),this.$input.blur(),s=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(T)>p&&b()}s||(d-=(y.clientY-f)*this._step*this._arrowKeyMultiplier(y),h+d>this._max?d=this._max-h:h+d<this._min&&(d=this._min-h),this._snapClampSetValue(h+d)),f=y.clientY},b=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",x),window.removeEventListener("mouseup",b)},g=()=>{this._inputFocused=!0},_=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",m),this.$input.addEventListener("focus",g),this.$input.addEventListener("blur",_)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(y,T,L,A,w)=>(y-T)/(L-T)*(w-A)+A,e=y=>{const T=this.$slider.getBoundingClientRect();let L=t(y,T.left,T.right,this._min,this._max);this._snapClampSetValue(L)},n=y=>{this._setDraggingStyle(!0),e(y.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",s)},r=y=>{e(y.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",s)};let l=!1,o,f;const h=y=>{y.preventDefault(),this._setDraggingStyle(!0),e(y.touches[0].clientX),l=!1},d=y=>{y.touches.length>1||(this._hasScrollBar?(o=y.touches[0].clientX,f=y.touches[0].clientY,l=!0):h(y),window.addEventListener("touchmove",p,{passive:!1}),window.addEventListener("touchend",m))},p=y=>{if(l){const T=y.touches[0].clientX-o,L=y.touches[0].clientY-f;Math.abs(T)>Math.abs(L)?h(y):(window.removeEventListener("touchmove",p),window.removeEventListener("touchend",m))}else y.preventDefault(),e(y.touches[0].clientX)},m=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",p),window.removeEventListener("touchend",m)},x=this._callOnFinishChange.bind(this),b=400;let g;const _=y=>{if(Math.abs(y.deltaX)<Math.abs(y.deltaY)&&this._hasScrollBar)return;y.preventDefault();const L=this._normalizeMouseWheel(y)*this._step;this._snapClampSetValue(this.getValue()+L),this.$input.value=this.getValue(),clearTimeout(g),g=setTimeout(x,b)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",d,{passive:!1}),this.$slider.addEventListener("wheel",_,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class kC extends Ni{constructor(t,e,n,r){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(r)?r:Object.values(r),this._names=Array.isArray(r)?r:Object.keys(r),this._names.forEach(s=>{const l=document.createElement("option");l.innerHTML=s,this.$select.appendChild(l)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.innerHTML=e===-1?t:this._names[e],this}}class GC extends Ni{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const VC=`.lil-gui {
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
}`;function WC(c){const t=document.createElement("style");t.innerHTML=c;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let Om=!1;class Lh{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:r,title:s="Controls",closeFolders:l=!1,injectStyles:o=!0,touchStyles:f=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",h=>{(h.code==="Enter"||h.code==="Space")&&(h.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),f&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!Om&&o&&(WC(VC),Om=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this._closeFolders=l,this.domElement.addEventListener("keydown",h=>h.stopPropagation()),this.domElement.addEventListener("keyup",h=>h.stopPropagation())}add(t,e,n,r,s){if(Object(n)===n)return new kC(this,t,e,n);const l=t[e];switch(typeof l){case"number":return new BC(this,t,e,n,r,s);case"boolean":return new RC(this,t,e);case"string":return new GC(this,t,e);case"function":return new ku(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,l)}addColor(t,e,n=1){return new UC(this,t,e,n)}addFolder(t){const e=new Lh({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof ku||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof ku)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const r=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}class HC{constructor(){this.active=window.location.hash==="#debug",this.active&&(this.ui=new Lh({container:document.querySelector(".debug")}))}}function nr(c){if(c===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c}function Sg(c,t){c.prototype=Object.create(t.prototype),c.prototype.constructor=c,c.__proto__=t}/*!
 * GSAP 3.11.1
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Xn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},_a={duration:.5,overwrite:!1,delay:0},Ph,fi,He,li=1e8,xe=1/li,ah=Math.PI*2,XC=ah/4,qC=0,Tg=Math.sqrt,$C=Math.cos,YC=Math.sin,Qe=function(t){return typeof t=="string"},Ue=function(t){return typeof t=="function"},or=function(t){return typeof t=="number"},Dh=function(t){return typeof t=="undefined"},Ui=function(t){return typeof t=="object"},Dn=function(t){return t!==!1},Eg=function(){return typeof window!="undefined"},Al=function(t){return Ue(t)||Qe(t)},Ag=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},dn=Array.isArray,oh=/(?:-?\.?\d|\.)+/gi,Cg=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,sa=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Gu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Lg=/[+-]=-?[.\d]+/,Pg=/[^,'"\[\]\s]+/gi,ZC=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Re,si,lh,Rh,qn={},Rl={},Dg,Rg=function(t){return(Rl=_s(t,qn))&&$n},Ih=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Il=function(t,e){return!e&&console.warn(t)},Ig=function(t,e){return t&&(qn[t]=e)&&Rl&&(Rl[t]=e)||qn},oo=function(){return 0},KC={suppressEvents:!0,isStart:!0},to={suppressEvents:!0},Oh={},Or=[],ch={},Og,Wn={},Vu={},Fm=30,Pl=[],Fh="",Nh=function(t){var e=t[0],n,r;if(Ui(e)||Ue(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(r=Pl.length;r--&&!Pl[r].targetTest(e););n=Pl[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new n_(t[r],n)))||t.splice(r,1);return t},us=function(t){return t._gsap||Nh(ci(t))[0]._gsap},Fg=function(t,e,n){return(n=t[e])&&Ue(n)?t[e]():Dh(n)&&t.getAttribute&&t.getAttribute(e)||n},Rn=function(t,e){return(t=t.split(",")).forEach(e)||t},Ge=function(t){return Math.round(t*1e5)/1e5||0},rn=function(t){return Math.round(t*1e7)/1e7||0},ca=function(t,e){var n=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+r:n==="-"?t-r:n==="*"?t*r:t/r},JC=function(t,e){for(var n=e.length,r=0;t.indexOf(e[r])<0&&++r<n;);return r<n},Ol=function(){var t=Or.length,e=Or.slice(0),n,r;for(ch={},Or.length=0,n=0;n<t;n++)r=e[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Ng=function(t,e,n,r){Or.length&&Ol(),t.render(e,n,r||fi),Or.length&&Ol()},zg=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Pg).length<2?e:Qe(t)?t.trim():t},Ug=function(t){return t},pi=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},jC=function(t){return function(e,n){for(var r in n)r in e||r==="duration"&&t||r==="ease"||(e[r]=n[r])}},_s=function(t,e){for(var n in e)t[n]=e[n];return t},Nm=function c(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Ui(e[n])?c(t[n]||(t[n]={}),e[n]):e[n]);return t},Fl=function(t,e){var n={},r;for(r in t)r in e||(n[r]=t[r]);return n},eo=function(t){var e=t.parent||Re,n=t.keyframes?jC(dn(t.keyframes)):pi;if(Dn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},QC=function(t,e){for(var n=t.length,r=n===e.length;r&&n--&&t[n]===e[n];);return n<0},Bg=function(t,e,n,r,s){n===void 0&&(n="_first"),r===void 0&&(r="_last");var l=t[r],o;if(s)for(o=e[s];l&&l[s]>o;)l=l._prev;return l?(e._next=l._next,l._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[r]=e,e._prev=l,e.parent=e._dp=t,e},Xl=function(t,e,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=e._prev,l=e._next;s?s._next=l:t[n]===e&&(t[n]=l),l?l._prev=s:t[r]===e&&(t[r]=s),e._next=e._prev=e.parent=null},lr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove(t),t._act=0},hs=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},t2=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},uh=function(t,e,n,r){return t._startAt&&(fi?t._startAt.revert(to):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},e2=function c(t){return!t||t._ts&&c(t.parent)},zm=function(t){return t._repeat?va(t._tTime,t=t.duration()+t._rDelay)*t:0},va=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},Nl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},ql=function(t){return t._end=rn(t._start+(t._tDur/Math.abs(t._ts||t._rts||xe)||0))},$l=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=rn(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ql(t),n._dirty||hs(n,t)),t},kg=function(t,e){var n;if((e._time||e._initted&&!e._dur)&&(n=Nl(t.rawTime(),e),(!e._dur||vo(0,e.totalDuration(),n)-e._tTime>xe)&&e.render(n,!0)),hs(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-xe}},Ri=function(t,e,n,r){return e.parent&&lr(e),e._start=rn((or(n)?n:n||t!==Re?ri(t,n,e):t._time)+e._delay),e._end=rn(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Bg(t,e,"_first","_last",t._sort?"_start":0),hh(e)||(t._recent=e),r||kg(t,e),t._ts<0&&$l(t,t._tTime),t},Gg=function(t,e){return(qn.ScrollTrigger||Ih("scrollTrigger",e))&&qn.ScrollTrigger.create(e,t)},Vg=function(t,e,n,r){if(Uh(t,e),!t._initted)return 1;if(!n&&t._pt&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Og!==Hn.frame)return Or.push(t),t._lazy=[e,r],1},n2=function c(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||c(e))},hh=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},i2=function(t,e,n,r){var s=t.ratio,l=e<0||!e&&(!t._start&&n2(t)&&!(!t._initted&&hh(t))||(t._ts<0||t._dp._ts<0)&&!hh(t))?0:1,o=t._rDelay,f=0,h,d,p;if(o&&t._repeat&&(f=vo(0,t._tDur,e),d=va(f,o),t._yoyo&&d&1&&(l=1-l),d!==va(t._tTime,o)&&(s=1-l,t.vars.repeatRefresh&&t._initted&&t.invalidate())),l!==s||fi||r||t._zTime===xe||!e&&t._zTime){if(!t._initted&&Vg(t,e,r,n))return;for(p=t._zTime,t._zTime=e||(n?xe:0),n||(n=e&&!p),t.ratio=l,t._from&&(l=1-l),t._time=0,t._tTime=f,h=t._pt;h;)h.r(l,h.d),h=h._next;e<0&&uh(t,e,n,!0),t._onUpdate&&!n&&ui(t,"onUpdate"),f&&t._repeat&&!n&&t.parent&&ui(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===l&&(l&&lr(t,1),!n&&!fi&&(ui(t,l?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},r2=function(t,e,n){var r;if(n>e)for(r=t._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},xa=function(t,e,n,r){var s=t._repeat,l=rn(e)||0,o=t._tTime/t._tDur;return o&&!r&&(t._time*=l/t._dur),t._dur=l,t._tDur=s?s<0?1e10:rn(l*(s+1)+t._rDelay*s):l,o>0&&!r?$l(t,t._tTime=t._tDur*o):t.parent&&ql(t),n||hs(t.parent,t),t},Um=function(t){return t instanceof Pn?hs(t):xa(t,t._dur)},s2={_start:0,endTime:oo,totalDuration:oo},ri=function c(t,e,n){var r=t.labels,s=t._recent||s2,l=t.duration()>=li?s.endTime(!1):t._dur,o,f,h;return Qe(e)&&(isNaN(e)||e in r)?(f=e.charAt(0),h=e.substr(-1)==="%",o=e.indexOf("="),f==="<"||f===">"?(o>=0&&(e=e.replace(/=/,"")),(f==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(h?(o<0?s:n).totalDuration()/100:1)):o<0?(e in r||(r[e]=l),r[e]):(f=parseFloat(e.charAt(o-1)+e.substr(o+1)),h&&n&&(f=f/100*(dn(n)?n[0]:n).totalDuration()),o>1?c(t,e.substr(0,o-1),n)+f:l+f)):e==null?l:+e},no=function(t,e,n){var r=or(e[1]),s=(r?2:1)+(t<2?0:1),l=e[s],o,f;if(r&&(l.duration=e[1]),l.parent=n,t){for(o=l,f=n;f&&!("immediateRender"in o);)o=f.vars.defaults||{},f=Dn(f.vars.inherit)&&f.parent;l.immediateRender=Dn(o.immediateRender),t<2?l.runBackwards=1:l.startAt=e[s-1]}return new Ze(e[0],l,e[s+1])},Ur=function(t,e){return t||t===0?e(t):e},vo=function(t,e,n){return n<t?t:n>e?e:n},hn=function(t,e){return!Qe(t)||!(e=ZC.exec(t))?"":e[1]},a2=function(t,e,n){return Ur(n,function(r){return vo(t,e,r)})},fh=[].slice,Wg=function(t,e){return t&&Ui(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Ui(t[0]))&&!t.nodeType&&t!==si},o2=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(r){var s;return Qe(r)&&!e||Wg(r,1)?(s=n).push.apply(s,ci(r)):n.push(r)})||n},ci=function(t,e,n){return He&&!e&&He.selector?He.selector(t):Qe(t)&&!n&&(lh||!ya())?fh.call((e||Rh).querySelectorAll(t),0):dn(t)?o2(t,n):Wg(t)?fh.call(t,0):t?[t]:[]},dh=function(t){return t=ci(t)[0]||Il("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return ci(e,n.querySelectorAll?n:n===t?Il("Invalid scope")||Rh.createElement("div"):t)}},Hg=function(t){return t.sort(function(){return .5-Math.random()})},Xg=function(t){if(Ue(t))return t;var e=Ui(t)?t:{each:t},n=fs(e.ease),r=e.from||0,s=parseFloat(e.base)||0,l={},o=r>0&&r<1,f=isNaN(r)||o,h=e.axis,d=r,p=r;return Qe(r)?d=p={center:.5,edges:.5,end:1}[r]||0:!o&&f&&(d=r[0],p=r[1]),function(m,x,b){var g=(b||e).length,_=l[g],y,T,L,A,w,O,z,S,D;if(!_){if(D=e.grid==="auto"?0:(e.grid||[1,li])[1],!D){for(z=-li;z<(z=b[D++].getBoundingClientRect().left)&&D<g;);D--}for(_=l[g]=[],y=f?Math.min(D,g)*d-.5:r%D,T=D===li?0:f?g*p/D-.5:r/D|0,z=0,S=li,O=0;O<g;O++)L=O%D-y,A=T-(O/D|0),_[O]=w=h?Math.abs(h==="y"?A:L):Tg(L*L+A*A),w>z&&(z=w),w<S&&(S=w);r==="random"&&Hg(_),_.max=z-S,_.min=S,_.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(D>g?g-1:h?h==="y"?g/D:D:Math.max(D,g/D))||0)*(r==="edges"?-1:1),_.b=g<0?s-g:s,_.u=hn(e.amount||e.each)||0,n=n&&g<0?Qg(n):n}return g=(_[m]-_.min)/_.max||0,rn(_.b+(n?n(g):g)*_.v)+_.u}},ph=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var r=rn(Math.round(parseFloat(n)/t)*t*e);return(r-r%1)/e+(or(n)?0:hn(n))}},qg=function(t,e){var n=dn(t),r,s;return!n&&Ui(t)&&(r=n=t.radius||li,t.values?(t=ci(t.values),(s=!or(t[0]))&&(r*=r)):t=ph(t.increment)),Ur(e,n?Ue(t)?function(l){return s=t(l),Math.abs(s-l)<=r?s:l}:function(l){for(var o=parseFloat(s?l.x:l),f=parseFloat(s?l.y:0),h=li,d=0,p=t.length,m,x;p--;)s?(m=t[p].x-o,x=t[p].y-f,m=m*m+x*x):m=Math.abs(t[p]-o),m<h&&(h=m,d=p);return d=!r||h<=r?t[d]:l,s||d===l||or(l)?d:d+hn(l)}:ph(t))},$g=function(t,e,n,r){return Ur(dn(t)?!e:n===!0?!!(n=0):!r,function(){return dn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*r)/r})},l2=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return e.reduce(function(s,l){return l(s)},r)}},c2=function(t,e){return function(n){return t(parseFloat(n))+(e||hn(n))}},u2=function(t,e,n){return Zg(t,e,0,1,n)},Yg=function(t,e,n){return Ur(n,function(r){return t[~~e(r)]})},h2=function c(t,e,n){var r=e-t;return dn(t)?Yg(t,c(0,t.length),e):Ur(n,function(s){return(r+(s-t)%r)%r+t})},f2=function c(t,e,n){var r=e-t,s=r*2;return dn(t)?Yg(t,c(0,t.length-1),e):Ur(n,function(l){return l=(s+(l-t)%s)%s||0,t+(l>r?s-l:l)})},lo=function(t){for(var e=0,n="",r,s,l,o;~(r=t.indexOf("random(",e));)l=t.indexOf(")",r),o=t.charAt(r+7)==="[",s=t.substr(r+7,l-r-7).match(o?Pg:oh),n+=t.substr(e,r-e)+$g(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),e=l+1;return n+t.substr(e,t.length-e)},Zg=function(t,e,n,r,s){var l=e-t,o=r-n;return Ur(s,function(f){return n+((f-t)/l*o||0)})},d2=function c(t,e,n,r){var s=isNaN(t+e)?0:function(x){return(1-x)*t+x*e};if(!s){var l=Qe(t),o={},f,h,d,p,m;if(n===!0&&(r=1)&&(n=null),l)t={p:t},e={p:e};else if(dn(t)&&!dn(e)){for(d=[],p=t.length,m=p-2,h=1;h<p;h++)d.push(c(t[h-1],t[h]));p--,s=function(b){b*=p;var g=Math.min(m,~~b);return d[g](b-g)},n=e}else r||(t=_s(dn(t)?[]:{},t));if(!d){for(f in e)zh.call(o,t,f,"get",e[f]);s=function(b){return Gh(b,o)||(l?t.p:t)}}}return Ur(n,s)},Bm=function(t,e,n){var r=t.labels,s=li,l,o,f;for(l in r)o=r[l]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(f=l,s=o);return f},ui=function(t,e,n){var r=t.vars,s=r[e],l=He,o=t._ctx,f,h,d;if(!!s)return f=r[e+"Params"],h=r.callbackScope||t,n&&Or.length&&Ol(),o&&(He=o),d=f?s.apply(h,f):s.call(h),He=l,d},ja=function(t){return lr(t),t.scrollTrigger&&t.scrollTrigger.kill(!1),t.progress()<1&&ui(t,"onInterrupt"),t},aa,p2=function(t){t=!t.name&&t.default||t;var e=t.name,n=Ue(t),r=e&&!n&&t.init?function(){this._props=[]}:t,s={init:oo,render:Gh,add:zh,kill:P2,modifier:L2,rawVars:0},l={targetTest:0,get:0,getSetter:kh,aliases:{},register:0};if(ya(),t!==r){if(Wn[e])return;pi(r,pi(Fl(t,s),l)),_s(r.prototype,_s(s,Fl(t,l))),Wn[r.prop=e]=r,t.targetTest&&(Pl.push(r),Oh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Ig(e,r),t.register&&t.register($n,r,In)},ve=255,Qa={aqua:[0,ve,ve],lime:[0,ve,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ve],navy:[0,0,128],white:[ve,ve,ve],olive:[128,128,0],yellow:[ve,ve,0],orange:[ve,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ve,0,0],pink:[ve,192,203],cyan:[0,ve,ve],transparent:[ve,ve,ve,0]},Wu=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ve+.5|0},Kg=function(t,e,n){var r=t?or(t)?[t>>16,t>>8&ve,t&ve]:0:Qa.black,s,l,o,f,h,d,p,m,x,b;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Qa[t])r=Qa[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),l=t.charAt(2),o=t.charAt(3),t="#"+s+s+l+l+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&ve,r&ve,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&ve,t&ve]}else if(t.substr(0,3)==="hsl"){if(r=b=t.match(oh),!e)f=+r[0]%360/360,h=+r[1]/100,d=+r[2]/100,l=d<=.5?d*(h+1):d+h-d*h,s=d*2-l,r.length>3&&(r[3]*=1),r[0]=Wu(f+1/3,s,l),r[1]=Wu(f,s,l),r[2]=Wu(f-1/3,s,l);else if(~t.indexOf("="))return r=t.match(Cg),n&&r.length<4&&(r[3]=1),r}else r=t.match(oh)||Qa.transparent;r=r.map(Number)}return e&&!b&&(s=r[0]/ve,l=r[1]/ve,o=r[2]/ve,p=Math.max(s,l,o),m=Math.min(s,l,o),d=(p+m)/2,p===m?f=h=0:(x=p-m,h=d>.5?x/(2-p-m):x/(p+m),f=p===s?(l-o)/x+(l<o?6:0):p===l?(o-s)/x+2:(s-l)/x+4,f*=60),r[0]=~~(f+.5),r[1]=~~(h*100+.5),r[2]=~~(d*100+.5)),n&&r.length<4&&(r[3]=1),r},Jg=function(t){var e=[],n=[],r=-1;return t.split(Fr).forEach(function(s){var l=s.match(sa)||[];e.push.apply(e,l),n.push(r+=l.length+1)}),e.c=n,e},km=function(t,e,n){var r="",s=(t+r).match(Fr),l=e?"hsla(":"rgba(",o=0,f,h,d,p;if(!s)return t;if(s=s.map(function(m){return(m=Kg(m,e,1))&&l+(e?m[0]+","+m[1]+"%,"+m[2]+"%,"+m[3]:m.join(","))+")"}),n&&(d=Jg(t),f=n.c,f.join(r)!==d.c.join(r)))for(h=t.replace(Fr,"1").split(sa),p=h.length-1;o<p;o++)r+=h[o]+(~f.indexOf(o)?s.shift()||l+"0,0,0,0)":(d.length?d:s.length?s:n).shift());if(!h)for(h=t.split(Fr),p=h.length-1;o<p;o++)r+=h[o]+s[o];return r+h[p]},Fr=function(){var c="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Qa)c+="|"+t+"\\b";return new RegExp(c+")","gi")}(),m2=/hsl[a]?\(/,jg=function(t){var e=t.join(" "),n;if(Fr.lastIndex=0,Fr.test(e))return n=m2.test(e),t[1]=km(t[1],n),t[0]=km(t[0],n,Jg(t[1])),!0},co,Hn=function(){var c=Date.now,t=500,e=33,n=c(),r=n,s=1e3/240,l=s,o=[],f,h,d,p,m,x,b=function g(_){var y=c()-r,T=_===!0,L,A,w,O;if(y>t&&(n+=y-e),r+=y,w=r-n,L=w-l,(L>0||T)&&(O=++p.frame,m=w-p.time*1e3,p.time=w=w/1e3,l+=L+(L>=s?4:s-L),A=1),T||(f=h(g)),A)for(x=0;x<o.length;x++)o[x](w,m,O,_)};return p={time:0,frame:0,tick:function(){b(!0)},deltaRatio:function(_){return m/(1e3/(_||60))},wake:function(){Dg&&(!lh&&Eg()&&(si=lh=window,Rh=si.document||{},qn.gsap=$n,(si.gsapVersions||(si.gsapVersions=[])).push($n.version),Rg(Rl||si.GreenSockGlobals||!si.gsap&&si||{}),d=si.requestAnimationFrame),f&&p.sleep(),h=d||function(_){return setTimeout(_,l-p.time*1e3+1|0)},co=1,b(2))},sleep:function(){(d?si.cancelAnimationFrame:clearTimeout)(f),co=0,h=oo},lagSmoothing:function(_,y){t=_||1/xe,e=Math.min(y,t,0)},fps:function(_){s=1e3/(_||240),l=p.time*1e3+s},add:function(_,y,T){var L=y?function(A,w,O,z){_(A,w,O,z),p.remove(L)}:_;return p.remove(_),o[T?"unshift":"push"](L),ya(),L},remove:function(_,y){~(y=o.indexOf(_))&&o.splice(y,1)&&x>=y&&x--},_listeners:o},p}(),ya=function(){return!co&&Hn.wake()},oe={},g2=/^[\d.\-M][\d.\-,\s]/,_2=/["']/g,v2=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),r=n[0],s=1,l=n.length,o,f,h;s<l;s++)f=n[s],o=s!==l-1?f.lastIndexOf(","):f.length,h=f.substr(0,o),e[r]=isNaN(h)?h.replace(_2,"").trim():+h,r=f.substr(o+1).trim();return e},x2=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<n?t.indexOf(")",n+1):n)},y2=function(t){var e=(t+"").split("("),n=oe[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[v2(e[1])]:x2(t).split(",").map(zg)):oe._CE&&g2.test(t)?oe._CE("",t):n},Qg=function(t){return function(e){return 1-t(1-e)}},t_=function c(t,e){for(var n=t._first,r;n;)n instanceof Pn?c(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?c(n.timeline,e):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=e)),n=n._next},fs=function(t,e){return t&&(Ue(t)?t:oe[t]||y2(t))||e},ys=function(t,e,n,r){n===void 0&&(n=function(f){return 1-e(1-f)}),r===void 0&&(r=function(f){return f<.5?e(f*2)/2:1-e((1-f)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:r},l;return Rn(t,function(o){oe[o]=qn[o]=s,oe[l=o.toLowerCase()]=n;for(var f in s)oe[l+(f==="easeIn"?".in":f==="easeOut"?".out":".inOut")]=oe[o+"."+f]=s[f]}),s},e_=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Hu=function c(t,e,n){var r=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),l=s/ah*(Math.asin(1/r)||0),o=function(d){return d===1?1:r*Math.pow(2,-10*d)*YC((d-l)*s)+1},f=t==="out"?o:t==="in"?function(h){return 1-o(1-h)}:e_(o);return s=ah/s,f.config=function(h,d){return c(t,h,d)},f},Xu=function c(t,e){e===void 0&&(e=1.70158);var n=function(l){return l?--l*l*((e+1)*l+e)+1:0},r=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:e_(n);return r.config=function(s){return c(t,s)},r};Rn("Linear,Quad,Cubic,Quart,Quint,Strong",function(c,t){var e=t<5?t+1:t;ys(c+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});oe.Linear.easeNone=oe.none=oe.Linear.easeIn;ys("Elastic",Hu("in"),Hu("out"),Hu());(function(c,t){var e=1/t,n=2*e,r=2.5*e,s=function(o){return o<e?c*o*o:o<n?c*Math.pow(o-1.5/t,2)+.75:o<r?c*(o-=2.25/t)*o+.9375:c*Math.pow(o-2.625/t,2)+.984375};ys("Bounce",function(l){return 1-s(1-l)},s)})(7.5625,2.75);ys("Expo",function(c){return c?Math.pow(2,10*(c-1)):0});ys("Circ",function(c){return-(Tg(1-c*c)-1)});ys("Sine",function(c){return c===1?1:-$C(c*XC)+1});ys("Back",Xu("in"),Xu("out"),Xu());oe.SteppedEase=oe.steps=qn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,r=t+(e?0:1),s=e?1:0,l=1-xe;return function(o){return((r*vo(0,l,o)|0)+s)*n}}};_a.ease=oe["quad.out"];Rn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(c){return Fh+=c+","+c+"Params,"});var n_=function(t,e){this.id=qC++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Fg,this.set=e?e.getSetter:kh},ba=function(){function c(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,xa(this,+e.duration,1,1),this.data=e.data,He&&(this._ctx=He,He.data.push(this)),co||Hn.wake()}var t=c.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,xa(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,r){if(ya(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for($l(this,n),!s._dp||s.parent||kg(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ri(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===xe||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Ng(this,n,r)),this},t.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+zm(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},t.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+zm(this),r):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?va(this._tTime,s)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-xe?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Nl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-xe?0:this._rts,this.totalTime(vo(-this._delay,this._tDur,r),!0),ql(this),t2(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ya(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==xe&&(this._tTime-=xe)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Ri(r,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Dn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Nl(r.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=to);var r=fi;return fi=n,this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents),this.data!=="nested"&&lr(this),fi=r,this},t.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(r._ts||1),r=r._dp;return!this.parent&&this.vars.immediateRender?-1:s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Um(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Um(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,r){return this.totalTime(ri(this,n),Dn(r))},t.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Dn(r))},t.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},t.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-xe:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-xe,this},t.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-xe)},t.eventCallback=function(n,r,s){var l=this.vars;return arguments.length>1?(r?(l[n]=r,s&&(l[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete l[n],this):l[n]},t.then=function(n){var r=this;return new Promise(function(s){var l=Ue(n)?n:Ug,o=function(){var h=r.then;r.then=null,Ue(l)&&(l=l(r))&&(l.then||l===r)&&(r.then=h),s(l),r.then=h};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?o():r._prom=o})},t.kill=function(){ja(this)},c}();pi(ba.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-xe,_prom:0,_ps:!1,_rts:1});var Pn=function(c){Sg(t,c);function t(n,r){var s;return n===void 0&&(n={}),s=c.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Dn(n.sortChildren),Re&&Ri(n.parent||Re,nr(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Gg(nr(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(r,s,l){return no(0,arguments,this),this},e.from=function(r,s,l){return no(1,arguments,this),this},e.fromTo=function(r,s,l,o){return no(2,arguments,this),this},e.set=function(r,s,l){return s.duration=0,s.parent=this,eo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ze(r,s,ri(this,l),1),this},e.call=function(r,s,l){return Ri(this,Ze.delayedCall(0,r,s),l)},e.staggerTo=function(r,s,l,o,f,h,d){return l.duration=s,l.stagger=l.stagger||o,l.onComplete=h,l.onCompleteParams=d,l.parent=this,new Ze(r,l,ri(this,f)),this},e.staggerFrom=function(r,s,l,o,f,h,d){return l.runBackwards=1,eo(l).immediateRender=Dn(l.immediateRender),this.staggerTo(r,s,l,o,f,h,d)},e.staggerFromTo=function(r,s,l,o,f,h,d,p){return o.startAt=l,eo(o).immediateRender=Dn(o.immediateRender),this.staggerTo(r,s,o,f,h,d,p)},e.render=function(r,s,l){var o=this._time,f=this._dirty?this.totalDuration():this._tDur,h=this._dur,d=r<=0?0:rn(r),p=this._zTime<0!=r<0&&(this._initted||!h),m,x,b,g,_,y,T,L,A,w,O,z;if(this!==Re&&d>f&&r>=0&&(d=f),d!==this._tTime||l||p){if(o!==this._time&&h&&(d+=this._time-o,r+=this._time-o),m=d,A=this._start,L=this._ts,y=!L,p&&(h||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(O=this._yoyo,_=h+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(_*100+r,s,l);if(m=rn(d%_),d===f?(g=this._repeat,m=h):(g=~~(d/_),g&&g===d/_&&(m=h,g--),m>h&&(m=h)),w=va(this._tTime,_),!o&&this._tTime&&w!==g&&(w=g),O&&g&1&&(m=h-m,z=1),g!==w&&!this._lock){var S=O&&w&1,D=S===(O&&g&1);if(g<w&&(S=!S),o=S?0:h,this._lock=1,this.render(o||(z?0:rn(g*_)),s,!h)._lock=0,this._tTime=d,!s&&this.parent&&ui(this,"onRepeat"),this.vars.repeatRefresh&&!z&&(this.invalidate()._lock=1),o&&o!==this._time||y!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,f=this._tDur,D&&(this._lock=2,o=S?h:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!z&&this.invalidate()),this._lock=0,!this._ts&&!y)return this;t_(this,z)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(T=r2(this,rn(o),rn(m)),T&&(d-=m-(m=T._start))),this._tTime=d,this._time=m,this._act=!L,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&m&&!s&&(ui(this,"onStart"),this._tTime!==d))return this;if(m>=o&&r>=0)for(x=this._first;x;){if(b=x._next,(x._act||m>=x._start)&&x._ts&&T!==x){if(x.parent!==this)return this.render(r,s,l);if(x.render(x._ts>0?(m-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(m-x._start)*x._ts,s,l),m!==this._time||!this._ts&&!y){T=0,b&&(d+=this._zTime=-xe);break}}x=b}else{l=l||fi,x=this._last;for(var G=r<0?r:m;x;){if(b=x._prev,(x._act||G<=x._end)&&x._ts&&T!==x){if(x.parent!==this)return this.render(r,s,l);if(x.render(x._ts>0?(G-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(G-x._start)*x._ts,s,l),m!==this._time||!this._ts&&!y){T=0,b&&(d+=this._zTime=G?-xe:xe);break}}x=b}}if(T&&!s&&(this.pause(),T.render(m>=o?0:-xe)._zTime=m>=o?1:-1,this._ts))return this._start=A,ql(this),this.render(r,s,l);this._onUpdate&&!s&&ui(this,"onUpdate",!0),(d===f&&this._tTime>=this.totalDuration()||!d&&o)&&(A===this._start||Math.abs(L)!==Math.abs(this._ts))&&(this._lock||((r||!h)&&(d===f&&this._ts>0||!d&&this._ts<0)&&lr(this,1),!s&&!(r<0&&!o)&&(d||o||!f)&&(ui(this,d===f&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<f&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,s){var l=this;if(or(s)||(s=ri(this,s,r)),!(r instanceof ba)){if(dn(r))return r.forEach(function(o){return l.add(o,s)}),this;if(Qe(r))return this.addLabel(r,s);if(Ue(r))r=Ze.delayedCall(0,r);else return this}return this!==r?Ri(this,r,s):this},e.getChildren=function(r,s,l,o){r===void 0&&(r=!0),s===void 0&&(s=!0),l===void 0&&(l=!0),o===void 0&&(o=-li);for(var f=[],h=this._first;h;)h._start>=o&&(h instanceof Ze?s&&f.push(h):(l&&f.push(h),r&&f.push.apply(f,h.getChildren(!0,s,l)))),h=h._next;return f},e.getById=function(r){for(var s=this.getChildren(1,1,1),l=s.length;l--;)if(s[l].vars.id===r)return s[l]},e.remove=function(r){return Qe(r)?this.removeLabel(r):Ue(r)?this.killTweensOf(r):(Xl(this,r),r===this._recent&&(this._recent=this._last),hs(this))},e.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=rn(Hn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),c.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},e.addLabel=function(r,s){return this.labels[r]=ri(this,s),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,s,l){var o=Ze.delayedCall(0,s||oo,l);return o.data="isPause",this._hasPause=1,Ri(this,o,ri(this,r))},e.removePause=function(r){var s=this._first;for(r=ri(this,r);s;)s._start===r&&s.data==="isPause"&&lr(s),s=s._next},e.killTweensOf=function(r,s,l){for(var o=this.getTweensOf(r,l),f=o.length;f--;)Pr!==o[f]&&o[f].kill(r,s);return this},e.getTweensOf=function(r,s){for(var l=[],o=ci(r),f=this._first,h=or(s),d;f;)f instanceof Ze?JC(f._targets,o)&&(h?(!Pr||f._initted&&f._ts)&&f.globalTime(0)<=s&&f.globalTime(f.totalDuration())>s:!s||f.isActive())&&l.push(f):(d=f.getTweensOf(o,s)).length&&l.push.apply(l,d),f=f._next;return l},e.tweenTo=function(r,s){s=s||{};var l=this,o=ri(l,r),f=s,h=f.startAt,d=f.onStart,p=f.onStartParams,m=f.immediateRender,x,b=Ze.to(l,pi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(h&&"time"in h?h.time:l._time))/l.timeScale())||xe,onStart:function(){if(l.pause(),!x){var _=s.duration||Math.abs((o-(h&&"time"in h?h.time:l._time))/l.timeScale());b._dur!==_&&xa(b,_,0,1).render(b._time,!0,!0),x=1}d&&d.apply(b,p||[])}},s));return m?b.render(0):b},e.tweenFromTo=function(r,s,l){return this.tweenTo(s,pi({startAt:{time:ri(this,r)}},l))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),Bm(this,ri(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),Bm(this,ri(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+xe)},e.shiftChildren=function(r,s,l){l===void 0&&(l=0);for(var o=this._first,f=this.labels,h;o;)o._start>=l&&(o._start+=r,o._end+=r),o=o._next;if(s)for(h in f)f[h]>=l&&(f[h]+=r);return hs(this)},e.invalidate=function(){var r=this._first;for(this._lock=0;r;)r.invalidate(),r=r._next;return c.prototype.invalidate.call(this)},e.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,l;s;)l=s._next,this.remove(s),s=l;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),hs(this)},e.totalDuration=function(r){var s=0,l=this,o=l._last,f=li,h,d,p;if(arguments.length)return l.timeScale((l._repeat<0?l.duration():l.totalDuration())/(l.reversed()?-r:r));if(l._dirty){for(p=l.parent;o;)h=o._prev,o._dirty&&o.totalDuration(),d=o._start,d>f&&l._sort&&o._ts&&!l._lock?(l._lock=1,Ri(l,o,d-o._delay,1)._lock=0):f=d,d<0&&o._ts&&(s-=d,(!p&&!l._dp||p&&p.smoothChildTiming)&&(l._start+=d/l._ts,l._time-=d,l._tTime-=d),l.shiftChildren(-d,!1,-1/0),f=0),o._end>s&&o._ts&&(s=o._end),o=h;xa(l,l===Re&&l._time>s?l._time:s,1,1),l._dirty=0}return l._tDur},t.updateRoot=function(r){if(Re._ts&&(Ng(Re,Nl(r,Re)),Og=Hn.frame),Hn.frame>=Fm){Fm+=Xn.autoSleep||120;var s=Re._first;if((!s||!s._ts)&&Xn.autoSleep&&Hn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Hn.sleep()}}},t}(ba);pi(Pn.prototype,{_lock:0,_hasPause:0,_forcing:0});var b2=function(t,e,n,r,s,l,o){var f=new In(this._pt,t,e,0,1,l_,null,s),h=0,d=0,p,m,x,b,g,_,y,T;for(f.b=n,f.e=r,n+="",r+="",(y=~r.indexOf("random("))&&(r=lo(r)),l&&(T=[n,r],l(T,t,e),n=T[0],r=T[1]),m=n.match(Gu)||[];p=Gu.exec(r);)b=p[0],g=r.substring(h,p.index),x?x=(x+1)%5:g.substr(-5)==="rgba("&&(x=1),b!==m[d++]&&(_=parseFloat(m[d-1])||0,f._pt={_next:f._pt,p:g||d===1?g:",",s:_,c:b.charAt(1)==="="?ca(_,b)-_:parseFloat(b)-_,m:x&&x<4?Math.round:0},h=Gu.lastIndex);return f.c=h<r.length?r.substring(h,r.length):"",f.fp=o,(Lg.test(r)||y)&&(f.e=0),this._pt=f,f},zh=function(t,e,n,r,s,l,o,f,h,d){Ue(r)&&(r=r(s||0,t,l));var p=t[e],m=n!=="get"?n:Ue(p)?h?t[e.indexOf("set")||!Ue(t["get"+e.substr(3)])?e:"get"+e.substr(3)](h):t[e]():p,x=Ue(p)?h?E2:a_:Bh,b;if(Qe(r)&&(~r.indexOf("random(")&&(r=lo(r)),r.charAt(1)==="="&&(b=ca(m,r)+(hn(m)||0),(b||b===0)&&(r=b))),!d||m!==r||mh)return!isNaN(m*r)&&r!==""?(b=new In(this._pt,t,e,+m||0,r-(m||0),typeof p=="boolean"?C2:o_,0,x),h&&(b.fp=h),o&&b.modifier(o,this,t),this._pt=b):(!p&&!(e in t)&&Ih(e,r),b2.call(this,t,e,m,r,x,f||Xn.stringFilter,h))},M2=function(t,e,n,r,s){if(Ue(t)&&(t=io(t,s,e,n,r)),!Ui(t)||t.style&&t.nodeType||dn(t)||Ag(t))return Qe(t)?io(t,s,e,n,r):t;var l={},o;for(o in t)l[o]=io(t[o],s,e,n,r);return l},i_=function(t,e,n,r,s,l){var o,f,h,d;if(Wn[t]&&(o=new Wn[t]).init(s,o.rawVars?e[t]:M2(e[t],r,s,l,n),n,r,l)!==!1&&(n._pt=f=new In(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==aa))for(h=n._ptLookup[n._targets.indexOf(s)],d=o._props.length;d--;)h[o._props[d]]=f;return o},Pr,mh,Uh=function c(t,e){var n=t.vars,r=n.ease,s=n.startAt,l=n.immediateRender,o=n.lazy,f=n.onUpdate,h=n.onUpdateParams,d=n.callbackScope,p=n.runBackwards,m=n.yoyoEase,x=n.keyframes,b=n.autoRevert,g=t._dur,_=t._startAt,y=t._targets,T=t.parent,L=T&&T.data==="nested"?T.vars.targets:y,A=t._overwrite==="auto"&&!Ph,w=t.timeline,O,z,S,D,G,nt,_t,Y,W,et,ct,ot,j;if(w&&(!x||!r)&&(r="none"),t._ease=fs(r,_a.ease),t._yEase=m?Qg(fs(m===!0?r:m,_a.ease)):0,m&&t._yoyo&&!t._repeat&&(m=t._yEase,t._yEase=t._ease,t._ease=m),t._from=!w&&!!n.runBackwards,!w||x&&!n.stagger){if(Y=y[0]?us(y[0]).harness:0,ot=Y&&n[Y.prop],O=Fl(n,Oh),_&&(e<0&&p&&l&&!b?_.render(-1,!0):_.revert(p&&g?to:KC),_._lazy=0),s){if(lr(t._startAt=Ze.set(y,pi({data:"isStart",overwrite:!1,parent:T,immediateRender:!0,lazy:Dn(o),startAt:null,delay:0,onUpdate:f,onUpdateParams:h,callbackScope:d,stagger:0},s))),e<0&&(fi||!l&&!b)&&t._startAt.revert(to),l&&g&&e<=0){e&&(t._zTime=e);return}}else if(p&&g&&!_){if(e&&(l=!1),S=pi({overwrite:!1,data:"isFromStart",lazy:l&&Dn(o),immediateRender:l,stagger:0,parent:T},O),ot&&(S[Y.prop]=ot),lr(t._startAt=Ze.set(y,S)),e<0&&(fi?t._startAt.revert(to):t._startAt.render(-1,!0)),t._zTime=e,!l)c(t._startAt,xe);else if(!e)return}for(t._pt=t._ptCache=0,o=g&&Dn(o)||o&&!g,z=0;z<y.length;z++){if(G=y[z],_t=G._gsap||Nh(y)[z]._gsap,t._ptLookup[z]=et={},ch[_t.id]&&Or.length&&Ol(),ct=L===y?z:L.indexOf(G),Y&&(W=new Y).init(G,ot||O,t,ct,L)!==!1&&(t._pt=D=new In(t._pt,G,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(q){et[q]=D}),W.priority&&(nt=1)),!Y||ot)for(S in O)Wn[S]&&(W=i_(S,O,t,ct,G,L))?W.priority&&(nt=1):et[S]=D=zh.call(t,G,S,"get",O[S],ct,L,0,n.stringFilter);t._op&&t._op[z]&&t.kill(G,t._op[z]),A&&t._pt&&(Pr=t,Re.killTweensOf(G,et,t.globalTime(e)),j=!t.parent,Pr=0),t._pt&&o&&(ch[_t.id]=1)}nt&&c_(t),t._onInit&&t._onInit(t)}t._onUpdate=f,t._initted=(!t._op||t._pt)&&!j,x&&e<=0&&w.render(li,!0,!0)},w2=function(t,e,n,r,s,l,o){var f=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,p,m;if(!f)for(f=t._ptCache[e]=[],p=t._ptLookup,m=t._targets.length;m--;){if(h=p[m][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return mh=1,t.vars[e]="+=0",Uh(t,o),mh=0,1;f.push(h)}for(m=f.length;m--;)d=f[m],h=d._pt||d,h.s=(r||r===0)&&!s?r:h.s+(r||0)+l*h.c,h.c=n-h.s,d.e&&(d.e=Ge(n)+hn(d.e)),d.b&&(d.b=h.s+hn(d.b))},S2=function(t,e){var n=t[0]?us(t[0]).harness:0,r=n&&n.aliases,s,l,o,f;if(!r)return e;s=_s({},e);for(l in r)if(l in s)for(f=r[l].split(","),o=f.length;o--;)s[f[o]]=s[l];return s},T2=function(t,e,n,r){var s=e.ease||r||"power1.inOut",l,o;if(dn(e))o=n[t]||(n[t]=[]),e.forEach(function(f,h){return o.push({t:h/(e.length-1)*100,v:f,e:s})});else for(l in e)o=n[l]||(n[l]=[]),l==="ease"||o.push({t:parseFloat(t),v:e[l],e:s})},io=function(t,e,n,r,s){return Ue(t)?t.call(e,n,r,s):Qe(t)&&~t.indexOf("random(")?lo(t):t},r_=Fh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",s_={};Rn(r_+",id,stagger,delay,duration,paused,scrollTrigger",function(c){return s_[c]=1});var Ze=function(c){Sg(t,c);function t(n,r,s,l){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=c.call(this,l?r:eo(r))||this;var f=o.vars,h=f.duration,d=f.delay,p=f.immediateRender,m=f.stagger,x=f.overwrite,b=f.keyframes,g=f.defaults,_=f.scrollTrigger,y=f.yoyoEase,T=r.parent||Re,L=(dn(n)||Ag(n)?or(n[0]):"length"in r)?[n]:ci(n),A,w,O,z,S,D,G,nt;if(o._targets=L.length?Nh(L):Il("GSAP target "+n+" not found. https://greensock.com",!Xn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=x,b||m||Al(h)||Al(d)){if(r=o.vars,A=o.timeline=new Pn({data:"nested",defaults:g||{},targets:T&&T.data==="nested"?T.vars.targets:L}),A.kill(),A.parent=A._dp=nr(o),A._start=0,m||Al(h)||Al(d)){if(z=L.length,G=m&&Xg(m),Ui(m))for(S in m)~r_.indexOf(S)&&(nt||(nt={}),nt[S]=m[S]);for(w=0;w<z;w++)O=Fl(r,s_),O.stagger=0,y&&(O.yoyoEase=y),nt&&_s(O,nt),D=L[w],O.duration=+io(h,nr(o),w,D,L),O.delay=(+io(d,nr(o),w,D,L)||0)-o._delay,!m&&z===1&&O.delay&&(o._delay=d=O.delay,o._start+=d,O.delay=0),A.to(D,O,G?G(w,D,L):0),A._ease=oe.none;A.duration()?h=d=0:o.timeline=0}else if(b){eo(pi(A.vars.defaults,{ease:"none"})),A._ease=fs(b.ease||r.ease||"none");var _t=0,Y,W,et;if(dn(b))b.forEach(function(ct){return A.to(L,ct,">")}),A.duration();else{O={};for(S in b)S==="ease"||S==="easeEach"||T2(S,b[S],O,b.easeEach);for(S in O)for(Y=O[S].sort(function(ct,ot){return ct.t-ot.t}),_t=0,w=0;w<Y.length;w++)W=Y[w],et={ease:W.e,duration:(W.t-(w?Y[w-1].t:0))/100*h},et[S]=W.v,A.to(L,et,_t),_t+=et.duration;A.duration()<h&&A.to({},{duration:h-A.duration()})}}h||o.duration(h=A.duration())}else o.timeline=0;return x===!0&&!Ph&&(Pr=nr(o),Re.killTweensOf(L),Pr=0),Ri(T,nr(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(p||!h&&!b&&o._start===rn(T._time)&&Dn(p)&&e2(nr(o))&&T.data!=="nested")&&(o._tTime=-xe,o.render(Math.max(0,-d))),_&&Gg(nr(o),_),o}var e=t.prototype;return e.render=function(r,s,l){var o=this._time,f=this._tDur,h=this._dur,d=r<0,p=r>f-xe&&!d?f:r<xe?0:r,m,x,b,g,_,y,T,L,A;if(!h)i2(this,r,s,l);else if(p!==this._tTime||!r||l||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d){if(m=p,L=this.timeline,this._repeat){if(g=h+this._rDelay,this._repeat<-1&&d)return this.totalTime(g*100+r,s,l);if(m=rn(p%g),p===f?(b=this._repeat,m=h):(b=~~(p/g),b&&b===p/g&&(m=h,b--),m>h&&(m=h)),y=this._yoyo&&b&1,y&&(A=this._yEase,m=h-m),_=va(this._tTime,g),m===o&&!l&&this._initted)return this._tTime=p,this;b!==_&&(L&&this._yEase&&t_(L,y),this.vars.repeatRefresh&&!y&&!this._lock&&(this._lock=l=1,this.render(rn(g*b),!0).invalidate()._lock=0))}if(!this._initted){if(Vg(this,d?r:m,l,s))return this._tTime=0,this;if(o!==this._time)return this;if(h!==this._dur)return this.render(r,s,l)}if(this._tTime=p,this._time=m,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=T=(A||this._ease)(m/h),this._from&&(this.ratio=T=1-T),m&&!o&&!s&&(ui(this,"onStart"),this._tTime!==p))return this;for(x=this._pt;x;)x.r(T,x.d),x=x._next;L&&L.render(r<0?r:!m&&y?-xe:L._dur*L._ease(m/this._dur),s,l)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(d&&uh(this,r,s,l),ui(this,"onUpdate")),this._repeat&&b!==_&&this.vars.onRepeat&&!s&&this.parent&&ui(this,"onRepeat"),(p===this._tDur||!p)&&this._tTime===p&&(d&&!this._onUpdate&&uh(this,r,!0,!0),(r||!h)&&(p===this._tDur&&this._ts>0||!p&&this._ts<0)&&lr(this,1),!s&&!(d&&!o)&&(p||o)&&(ui(this,p===f?"onComplete":"onReverseComplete",!0),this._prom&&!(p<f&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),c.prototype.invalidate.call(this)},e.resetTo=function(r,s,l,o){co||Hn.wake(),this._ts||this.play();var f=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Uh(this,f),h=this._ease(f/this._dur),w2(this,r,s,l,o,h,f)?this.resetTo(r,s,l,o):($l(this,0),this.parent||Bg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ja(this):this;if(this.timeline){var l=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Pr&&Pr.vars.overwrite!==!0)._first||ja(this),this.parent&&l!==this.timeline.totalDuration()&&xa(this,this._dur*this.timeline._tDur/l,0,1),this}var o=this._targets,f=r?ci(r):o,h=this._ptLookup,d=this._pt,p,m,x,b,g,_,y;if((!s||s==="all")&&QC(o,f))return s==="all"&&(this._pt=0),ja(this);for(p=this._op=this._op||[],s!=="all"&&(Qe(s)&&(g={},Rn(s,function(T){return g[T]=1}),s=g),s=S2(o,s)),y=o.length;y--;)if(~f.indexOf(o[y])){m=h[y],s==="all"?(p[y]=s,b=m,x={}):(x=p[y]=p[y]||{},b=s);for(g in b)_=m&&m[g],_&&((!("kill"in _.d)||_.d.kill(g)===!0)&&Xl(this,_,"_pt"),delete m[g]),x!=="all"&&(x[g]=1)}return this._initted&&!this._pt&&d&&ja(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return no(1,arguments)},t.delayedCall=function(r,s,l,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:l,onReverseCompleteParams:l,callbackScope:o})},t.fromTo=function(r,s,l){return no(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,l){return Re.killTweensOf(r,s,l)},t}(ba);pi(Ze.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Rn("staggerTo,staggerFrom,staggerFromTo",function(c){Ze[c]=function(){var t=new Pn,e=fh.call(arguments,0);return e.splice(c==="staggerFromTo"?5:4,0,0),t[c].apply(t,e)}});var Bh=function(t,e,n){return t[e]=n},a_=function(t,e,n){return t[e](n)},E2=function(t,e,n,r){return t[e](r.fp,n)},A2=function(t,e,n){return t.setAttribute(e,n)},kh=function(t,e){return Ue(t[e])?a_:Dh(t[e])&&t.setAttribute?A2:Bh},o_=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},C2=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},l_=function(t,e){var n=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+r,n=n._next;r+=e.c}e.set(e.t,e.p,r,e)},Gh=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},L2=function(t,e,n,r){for(var s=this._pt,l;s;)l=s._next,s.p===r&&s.modifier(t,e,n),s=l},P2=function(t){for(var e=this._pt,n,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?Xl(this,e,"_pt"):e.dep||(n=1),e=r;return!n},D2=function(t,e,n,r){r.mSet(t,e,r.m.call(r.tween,n,r.mt),r)},c_=function(t){for(var e=t._pt,n,r,s,l;e;){for(n=e._next,r=s;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:l)?e._prev._next=e:s=e,(e._next=r)?r._prev=e:l=e,e=n}t._pt=s},In=function(){function c(e,n,r,s,l,o,f,h,d){this.t=n,this.s=s,this.c=l,this.p=r,this.r=o||o_,this.d=f||this,this.set=h||Bh,this.pr=d||0,this._next=e,e&&(e._prev=this)}var t=c.prototype;return t.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=D2,this.m=n,this.mt=s,this.tween=r},c}();Rn(Fh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(c){return Oh[c]=1});qn.TweenMax=qn.TweenLite=Ze;qn.TimelineLite=qn.TimelineMax=Pn;Re=new Pn({sortChildren:!1,defaults:_a,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Xn.stringFilter=jg;var Ma=[],Dl={},R2=[],Gm=0,qu=function(t){return(Dl[t]||R2).map(function(e){return e()})},gh=function(){var t=Date.now(),e=[];t-Gm>2&&(qu("matchMediaInit"),Ma.forEach(function(n){var r=n.queries,s=n.conditions,l,o,f,h;for(o in r)l=si.matchMedia(r[o]).matches,l&&(f=1),l!==s[o]&&(s[o]=l,h=1);h&&(n.revert(),f&&e.push(n))}),qu("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n)}),Gm=t,qu("matchMedia"))},u_=function(){function c(e,n){this.selector=n&&dh(n),this.data=[],this._r=[],this.isReverted=!1,e&&this.add(e)}var t=c.prototype;return t.add=function(n,r,s){Ue(n)&&(s=r,r=n,n=Ue);var l=this,o=function(){var h=He,d=l.selector,p;return h&&h!==l&&h.data.push(l),s&&(l.selector=dh(s)),He=l,p=r.apply(l,arguments),Ue(p)&&l._r.push(p),He=h,l.selector=d,l.isReverted=!1,p};return l.last=o,n===Ue?o(l):n?l[n]=o:o},t.ignore=function(n){var r=He;He=null,n(this),He=r},t.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof c?n.push.apply(n,r.getTweens()):r instanceof Ze&&n.push(r)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,r){var s=this;if(n?(this.getTweens().map(function(o){return{g:o.globalTime(0),t:o}}).sort(function(o,f){return f.g-o.g||-1}).forEach(function(o){return o.t.revert(n)}),this.data.forEach(function(o){return!(o instanceof ba)&&o.revert&&o.revert(n)}),this._r.forEach(function(o){return o(n,s)}),this.isReverted=!0):this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r){var l=Ma.indexOf(this);~l&&Ma.splice(l,1)}},t.revert=function(n){this.kill(n||{})},c}(),I2=function(){function c(e){this.contexts=[],this.scope=e}var t=c.prototype;return t.add=function(n,r,s){Ui(n)||(n={matches:n});var l=new u_(0,s||this.scope),o=l.conditions={},f,h,d;this.contexts.push(l),r=l.add("onMatch",r),l.queries=n;for(h in n)h==="all"?d=1:(f=si.matchMedia(n[h]),f&&(Ma.indexOf(l)<0&&Ma.push(l),(o[h]=f.matches)&&(d=1),f.addListener?f.addListener(gh):f.addEventListener("change",gh)));return d&&r(l),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},c}(),zl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(r){return p2(r)})},timeline:function(t){return new Pn(t)},getTweensOf:function(t,e){return Re.getTweensOf(t,e)},getProperty:function(t,e,n,r){Qe(t)&&(t=ci(t)[0]);var s=us(t||{}).get,l=n?Ug:zg;return n==="native"&&(n=""),t&&(e?l((Wn[e]&&Wn[e].get||s)(t,e,n,r)):function(o,f,h){return l((Wn[o]&&Wn[o].get||s)(t,o,f,h))})},quickSetter:function(t,e,n){if(t=ci(t),t.length>1){var r=t.map(function(d){return $n.quickSetter(d,e,n)}),s=r.length;return function(d){for(var p=s;p--;)r[p](d)}}t=t[0]||{};var l=Wn[e],o=us(t),f=o.harness&&(o.harness.aliases||{})[e]||e,h=l?function(d){var p=new l;aa._pt=0,p.init(t,n?d+n:d,aa,0,[t]),p.render(1,p),aa._pt&&Gh(1,aa)}:o.set(t,f);return l?h:function(d){return h(t,f,n?d+n:d,o,1)}},quickTo:function(t,e,n){var r,s=$n.to(t,_s((r={},r[e]="+=0.1",r.paused=!0,r),n||{})),l=function(f,h,d){return s.resetTo(e,f,h,d)};return l.tween=s,l},isTweening:function(t){return Re.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=fs(t.ease,_a.ease)),Nm(_a,t||{})},config:function(t){return Nm(Xn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,r=t.plugins,s=t.defaults,l=t.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!Wn[o]&&!qn[o]&&Il(e+" effect requires "+o+" plugin.")}),Vu[e]=function(o,f,h){return n(ci(o),pi(f||{},s),h)},l&&(Pn.prototype[e]=function(o,f,h){return this.add(Vu[e](o,Ui(f)?f:(h=f)&&{},this),h)})},registerEase:function(t,e){oe[t]=fs(e)},parseEase:function(t,e){return arguments.length?fs(t,e):oe},getById:function(t){return Re.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Pn(t),r,s;for(n.smoothChildTiming=Dn(t.smoothChildTiming),Re.remove(n),n._dp=0,n._time=n._tTime=Re._time,r=Re._first;r;)s=r._next,(e||!(!r._dur&&r instanceof Ze&&r.vars.onComplete===r._targets[0]))&&Ri(n,r,r._start-r._delay),r=s;return Ri(Re,n,0),n},context:function(t,e){return t?new u_(t,e):He},matchMedia:function(t){return new I2(t)},matchMediaRefresh:function(){return Ma.forEach(function(t){var e=t.conditions,n,r;for(r in e)e[r]&&(e[r]=!1,n=1);n&&t.revert()})||gh()},addEventListener:function(t,e){var n=Dl[t]||(Dl[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Dl[t],r=n&&n.indexOf(e);r>=0&&n.splice(r,1)},utils:{wrap:h2,wrapYoyo:f2,distribute:Xg,random:$g,snap:qg,normalize:u2,getUnit:hn,clamp:a2,splitColor:Kg,toArray:ci,selector:dh,mapRange:Zg,pipe:l2,unitize:c2,interpolate:d2,shuffle:Hg},install:Rg,effects:Vu,ticker:Hn,updateRoot:Pn.updateRoot,plugins:Wn,globalTimeline:Re,core:{PropTween:In,globals:Ig,Tween:Ze,Timeline:Pn,Animation:ba,getCache:us,_removeLinkedListItem:Xl,reverting:function(){return fi},context:function(t){return t&&He&&(He.data.push(t),t._ctx=He),He},suppressOverwrites:function(t){return Ph=t}}};Rn("to,from,fromTo,delayedCall,set,killTweensOf",function(c){return zl[c]=Ze[c]});Hn.add(Pn.updateRoot);aa=zl.to({},{duration:0});var O2=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},F2=function(t,e){var n=t._targets,r,s,l;for(r in e)for(s=n.length;s--;)l=t._ptLookup[s][r],l&&(l=l.d)&&(l._pt&&(l=O2(l,r)),l&&l.modifier&&l.modifier(e[r],t,n[s],r))},$u=function(t,e){return{name:t,rawVars:1,init:function(r,s,l){l._onInit=function(o){var f,h;if(Qe(s)&&(f={},Rn(s,function(d){return f[d]=1}),s=f),e){f={};for(h in s)f[h]=e(s[h]);s=f}F2(o,s)}}}},$n=zl.registerPlugin({name:"attr",init:function(t,e,n,r,s){var l,o,f;this.tween=n;for(l in e)f=t.getAttribute(l)||"",o=this.add(t,"setAttribute",(f||0)+"",e[l],r,s,0,0,l),o.op=l,o.b=f,this._props.push(l)},render:function(t,e){for(var n=e._pt;n;)fi?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},$u("roundProps",ph),$u("modifiers"),$u("snap",qg))||zl;Ze.version=Pn.version=$n.version="3.11.1";Dg=1;Eg()&&ya();oe.Power0;oe.Power1;oe.Power2;oe.Power3;oe.Power4;oe.Linear;oe.Quad;oe.Cubic;oe.Quart;oe.Quint;oe.Strong;oe.Elastic;oe.Back;oe.SteppedEase;oe.Bounce;oe.Sine;oe.Expo;oe.Circ;/*!
 * CSSPlugin 3.11.1
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Vm,Dr,ua,Vh,as,Wm,Wh,N2=function(){return typeof window!="undefined"},cr={},es=180/Math.PI,ha=Math.PI/180,ea=Math.atan2,Hm=1e8,Hh=/([A-Z])/g,z2=/(left|right|width|margin|padding|x)/i,U2=/[\s,\(]\S/,sr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},_h=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},B2=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},k2=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},G2=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},h_=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},f_=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},V2=function(t,e,n){return t.style[e]=n},W2=function(t,e,n){return t.style.setProperty(e,n)},H2=function(t,e,n){return t._gsap[e]=n},X2=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},q2=function(t,e,n,r,s){var l=t._gsap;l.scaleX=l.scaleY=n,l.renderTransform(s,l)},$2=function(t,e,n,r,s){var l=t._gsap;l[e]=n,l.renderTransform(s,l)},ze="transform",Ei=ze+"Origin",Y2=function(t){var e=this,n=this.target,r=n.style;if(t in cr){if(this.tfm=this.tfm||{},t!=="transform"&&(t=sr[t]||t,~t.indexOf(",")?t.split(",").forEach(function(s){return e.tfm[s]=ir(n,s)}):this.tfm[t]=n._gsap.x?n._gsap[t]:ir(n,t)),this.props.indexOf(ze)>=0)return;n._gsap.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(Ei,"")),t=ze}r&&this.props.push(t,r[t])},d_=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Z2=function(){var t=this.props,e=this.target,n=e.style,r=e._gsap,s,l;for(s=0;s<t.length;s+=2)t[s+1]?n[t[s]]=t[s+1]:n.removeProperty(t[s].replace(Hh,"-$1").toLowerCase());if(this.tfm){for(l in this.tfm)r[l]=this.tfm[l];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Wh(),s&&!s.isStart&&!n[ze]&&(d_(n),r.uncache=1)}},p_=function(t,e){var n={target:t,props:[],revert:Z2,save:Y2};return e&&e.split(",").forEach(function(r){return n.save(r)}),n},m_,vh=function(t,e){var n=Dr.createElementNS?Dr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Dr.createElement(t);return n.style?n:Dr.createElement(t)},zi=function c(t,e,n){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(Hh,"-$1").toLowerCase())||r.getPropertyValue(e)||!n&&c(t,wa(e)||e,1)||""},Xm="O,Moz,ms,Ms,Webkit".split(","),wa=function(t,e,n){var r=e||as,s=r.style,l=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);l--&&!(Xm[l]+t in s););return l<0?null:(l===3?"ms":l>=0?Xm[l]:"")+t},xh=function(){N2()&&window.document&&(Vm=window,Dr=Vm.document,ua=Dr.documentElement,as=vh("div")||{style:{}},vh("div"),ze=wa(ze),Ei=ze+"Origin",as.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",m_=!!wa("perspective"),Wh=$n.core.reverting,Vh=1)},Yu=function c(t){var e=vh("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,s=this.style.cssText,l;if(ua.appendChild(e),e.appendChild(this),this.style.display="block",t)try{l=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=c}catch{}else this._gsapBBox&&(l=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),ua.removeChild(e),this.style.cssText=s,l},qm=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},g_=function(t){var e;try{e=t.getBBox()}catch{e=Yu.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Yu||(e=Yu.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+qm(t,["x","cx","x1"])||0,y:+qm(t,["y","cy","y1"])||0,width:0,height:0}:e},__=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&g_(t))},uo=function(t,e){if(e){var n=t.style;e in cr&&e!==Ei&&(e=ze),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(Hh,"-$1").toLowerCase())):n.removeAttribute(e)}},Rr=function(t,e,n,r,s,l){var o=new In(t._pt,e,n,0,1,l?f_:h_);return t._pt=o,o.b=r,o.e=s,t._props.push(n),o},$m={deg:1,rad:1,turn:1},K2={grid:1,flex:1},zr=function c(t,e,n,r){var s=parseFloat(n)||0,l=(n+"").trim().substr((s+"").length)||"px",o=as.style,f=z2.test(e),h=t.tagName.toLowerCase()==="svg",d=(h?"client":"offset")+(f?"Width":"Height"),p=100,m=r==="px",x=r==="%",b,g,_,y;return r===l||!s||$m[r]||$m[l]?s:(l!=="px"&&!m&&(s=c(t,e,n,"px")),y=t.getCTM&&__(t),(x||l==="%")&&(cr[e]||~e.indexOf("adius"))?(b=y?t.getBBox()[f?"width":"height"]:t[d],Ge(x?s/b*p:s/100*b)):(o[f?"width":"height"]=p+(m?l:r),g=~e.indexOf("adius")||r==="em"&&t.appendChild&&!h?t:t.parentNode,y&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===Dr||!g.appendChild)&&(g=Dr.body),_=g._gsap,_&&x&&_.width&&f&&_.time===Hn.time&&!_.uncache?Ge(s/_.width*p):((x||l==="%")&&!K2[zi(g,"display")]&&(o.position=zi(t,"position")),g===t&&(o.position="static"),g.appendChild(as),b=as[d],g.removeChild(as),o.position="absolute",f&&x&&(_=us(g),_.time=Hn.time,_.width=g[d]),Ge(m?b*s/p:b&&s?p/b*s:0))))},ir=function(t,e,n,r){var s;return Vh||xh(),e in sr&&e!=="transform"&&(e=sr[e],~e.indexOf(",")&&(e=e.split(",")[0])),cr[e]&&e!=="transform"?(s=fo(t,r),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Bl(zi(t,Ei))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Ul[e]&&Ul[e](t,e,n)||zi(t,e)||Fg(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?zr(t,e,s,n)+n:s},J2=function(t,e,n,r){if(!n||n==="none"){var s=wa(e,t,1),l=s&&zi(t,s,1);l&&l!==n?(e=s,n=l):e==="borderColor"&&(n=zi(t,"borderTopColor"))}var o=new In(this._pt,t.style,e,0,1,l_),f=0,h=0,d,p,m,x,b,g,_,y,T,L,A,w;if(o.b=n,o.e=r,n+="",r+="",r==="auto"&&(t.style[e]=r,r=zi(t,e)||r,t.style[e]=n),d=[n,r],jg(d),n=d[0],r=d[1],m=n.match(sa)||[],w=r.match(sa)||[],w.length){for(;p=sa.exec(r);)_=p[0],T=r.substring(f,p.index),b?b=(b+1)%5:(T.substr(-5)==="rgba("||T.substr(-5)==="hsla(")&&(b=1),_!==(g=m[h++]||"")&&(x=parseFloat(g)||0,A=g.substr((x+"").length),_.charAt(1)==="="&&(_=ca(x,_)+A),y=parseFloat(_),L=_.substr((y+"").length),f=sa.lastIndex-L.length,L||(L=L||Xn.units[e]||A,f===r.length&&(r+=L,o.e+=L)),A!==L&&(x=zr(t,e,g,L)||0),o._pt={_next:o._pt,p:T||h===1?T:",",s:x,c:y-x,m:b&&b<4||e==="zIndex"?Math.round:0});o.c=f<r.length?r.substring(f,r.length):""}else o.r=e==="display"&&r==="none"?f_:h_;return Lg.test(r)&&(o.e=0),this._pt=o,o},Ym={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},j2=function(t){var e=t.split(" "),n=e[0],r=e[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(t=n,n=r,r=t),e[0]=Ym[n]||n,e[1]=Ym[r]||r,e.join(" ")},Q2=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,r=n.style,s=e.u,l=n._gsap,o,f,h;if(s==="all"||s===!0)r.cssText="",f=1;else for(s=s.split(","),h=s.length;--h>-1;)o=s[h],cr[o]&&(f=1,o=o==="transformOrigin"?Ei:ze),uo(n,o);f&&(uo(n,ze),l&&(l.svg&&n.removeAttribute("transform"),fo(n,1),l.uncache=1,d_(r)))}},Ul={clearProps:function(t,e,n,r,s){if(s.data!=="isFromStart"){var l=t._pt=new In(t._pt,e,n,0,0,Q2);return l.u=r,l.pr=-10,l.tween=s,t._props.push(n),1}}},ho=[1,0,0,1,0,0],v_={},x_=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Zm=function(t){var e=zi(t,ze);return x_(e)?ho:e.substr(7).match(Cg).map(Ge)},Xh=function(t,e){var n=t._gsap||us(t),r=t.style,s=Zm(t),l,o,f,h;return n.svg&&t.getAttribute("transform")?(f=t.transform.baseVal.consolidate().matrix,s=[f.a,f.b,f.c,f.d,f.e,f.f],s.join(",")==="1,0,0,1,0,0"?ho:s):(s===ho&&!t.offsetParent&&t!==ua&&!n.svg&&(f=r.display,r.display="block",l=t.parentNode,(!l||!t.offsetParent)&&(h=1,o=t.nextElementSibling,ua.appendChild(t)),s=Zm(t),f?r.display=f:uo(t,"display"),h&&(o?l.insertBefore(t,o):l?l.appendChild(t):ua.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},yh=function(t,e,n,r,s,l){var o=t._gsap,f=s||Xh(t,!0),h=o.xOrigin||0,d=o.yOrigin||0,p=o.xOffset||0,m=o.yOffset||0,x=f[0],b=f[1],g=f[2],_=f[3],y=f[4],T=f[5],L=e.split(" "),A=parseFloat(L[0])||0,w=parseFloat(L[1])||0,O,z,S,D;n?f!==ho&&(z=x*_-b*g)&&(S=A*(_/z)+w*(-g/z)+(g*T-_*y)/z,D=A*(-b/z)+w*(x/z)-(x*T-b*y)/z,A=S,w=D):(O=g_(t),A=O.x+(~L[0].indexOf("%")?A/100*O.width:A),w=O.y+(~(L[1]||L[0]).indexOf("%")?w/100*O.height:w)),r||r!==!1&&o.smooth?(y=A-h,T=w-d,o.xOffset=p+(y*x+T*g)-y,o.yOffset=m+(y*b+T*_)-T):o.xOffset=o.yOffset=0,o.xOrigin=A,o.yOrigin=w,o.smooth=!!r,o.origin=e,o.originIsAbsolute=!!n,t.style[Ei]="0px 0px",l&&(Rr(l,o,"xOrigin",h,A),Rr(l,o,"yOrigin",d,w),Rr(l,o,"xOffset",p,o.xOffset),Rr(l,o,"yOffset",m,o.yOffset)),t.setAttribute("data-svg-origin",A+" "+w)},fo=function(t,e){var n=t._gsap||new n_(t);if("x"in n&&!e&&!n.uncache)return n;var r=t.style,s=n.scaleX<0,l="px",o="deg",f=getComputedStyle(t),h=zi(t,Ei)||"0",d,p,m,x,b,g,_,y,T,L,A,w,O,z,S,D,G,nt,_t,Y,W,et,ct,ot,j,q,J,pt,gt,B,tt,ft;return d=p=m=g=_=y=T=L=A=0,x=b=1,n.svg=!!(t.getCTM&&__(t)),f.translate&&((f.translate!=="none"||f.scale!=="none"||f.rotate!=="none")&&(r[ze]=(f.translate!=="none"?"translate3d("+(f.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(f.rotate!=="none"?"rotate("+f.rotate+") ":"")+(f.scale!=="none"?"scale("+f.scale.split(" ").join(",")+") ":"")+f[ze]),r.scale=r.rotate=r.translate="none"),z=Xh(t,n.svg),n.svg&&(n.uncache?(j=t.getBBox(),h=n.xOrigin-j.x+"px "+(n.yOrigin-j.y)+"px",ot=""):ot=!e&&t.getAttribute("data-svg-origin"),yh(t,ot||h,!!ot||n.originIsAbsolute,n.smooth!==!1,z)),w=n.xOrigin||0,O=n.yOrigin||0,z!==ho&&(nt=z[0],_t=z[1],Y=z[2],W=z[3],d=et=z[4],p=ct=z[5],z.length===6?(x=Math.sqrt(nt*nt+_t*_t),b=Math.sqrt(W*W+Y*Y),g=nt||_t?ea(_t,nt)*es:0,T=Y||W?ea(Y,W)*es+g:0,T&&(b*=Math.abs(Math.cos(T*ha))),n.svg&&(d-=w-(w*nt+O*Y),p-=O-(w*_t+O*W))):(ft=z[6],B=z[7],J=z[8],pt=z[9],gt=z[10],tt=z[11],d=z[12],p=z[13],m=z[14],S=ea(ft,gt),_=S*es,S&&(D=Math.cos(-S),G=Math.sin(-S),ot=et*D+J*G,j=ct*D+pt*G,q=ft*D+gt*G,J=et*-G+J*D,pt=ct*-G+pt*D,gt=ft*-G+gt*D,tt=B*-G+tt*D,et=ot,ct=j,ft=q),S=ea(-Y,gt),y=S*es,S&&(D=Math.cos(-S),G=Math.sin(-S),ot=nt*D-J*G,j=_t*D-pt*G,q=Y*D-gt*G,tt=W*G+tt*D,nt=ot,_t=j,Y=q),S=ea(_t,nt),g=S*es,S&&(D=Math.cos(S),G=Math.sin(S),ot=nt*D+_t*G,j=et*D+ct*G,_t=_t*D-nt*G,ct=ct*D-et*G,nt=ot,et=j),_&&Math.abs(_)+Math.abs(g)>359.9&&(_=g=0,y=180-y),x=Ge(Math.sqrt(nt*nt+_t*_t+Y*Y)),b=Ge(Math.sqrt(ct*ct+ft*ft)),S=ea(et,ct),T=Math.abs(S)>2e-4?S*es:0,A=tt?1/(tt<0?-tt:tt):0),n.svg&&(ot=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!x_(zi(t,ze)),ot&&t.setAttribute("transform",ot))),Math.abs(T)>90&&Math.abs(T)<270&&(s?(x*=-1,T+=g<=0?180:-180,g+=g<=0?180:-180):(b*=-1,T+=T<=0?180:-180)),e=e||n.uncache,n.x=d-((n.xPercent=d&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-d)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+l,n.y=p-((n.yPercent=p&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-p)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+l,n.z=m+l,n.scaleX=Ge(x),n.scaleY=Ge(b),n.rotation=Ge(g)+o,n.rotationX=Ge(_)+o,n.rotationY=Ge(y)+o,n.skewX=T+o,n.skewY=L+o,n.transformPerspective=A+l,(n.zOrigin=parseFloat(h.split(" ")[2])||0)&&(r[Ei]=Bl(h)),n.xOffset=n.yOffset=0,n.force3D=Xn.force3D,n.renderTransform=n.svg?e3:m_?y_:t3,n.uncache=0,n},Bl=function(t){return(t=t.split(" "))[0]+" "+t[1]},Zu=function(t,e,n){var r=hn(e);return Ge(parseFloat(e)+parseFloat(zr(t,"x",n+"px",r)))+r},t3=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,y_(t,e)},Jr="0deg",Ya="0px",jr=") ",y_=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,l=n.x,o=n.y,f=n.z,h=n.rotation,d=n.rotationY,p=n.rotationX,m=n.skewX,x=n.skewY,b=n.scaleX,g=n.scaleY,_=n.transformPerspective,y=n.force3D,T=n.target,L=n.zOrigin,A="",w=y==="auto"&&t&&t!==1||y===!0;if(L&&(p!==Jr||d!==Jr)){var O=parseFloat(d)*ha,z=Math.sin(O),S=Math.cos(O),D;O=parseFloat(p)*ha,D=Math.cos(O),l=Zu(T,l,z*D*-L),o=Zu(T,o,-Math.sin(O)*-L),f=Zu(T,f,S*D*-L+L)}_!==Ya&&(A+="perspective("+_+jr),(r||s)&&(A+="translate("+r+"%, "+s+"%) "),(w||l!==Ya||o!==Ya||f!==Ya)&&(A+=f!==Ya||w?"translate3d("+l+", "+o+", "+f+") ":"translate("+l+", "+o+jr),h!==Jr&&(A+="rotate("+h+jr),d!==Jr&&(A+="rotateY("+d+jr),p!==Jr&&(A+="rotateX("+p+jr),(m!==Jr||x!==Jr)&&(A+="skew("+m+", "+x+jr),(b!==1||g!==1)&&(A+="scale("+b+", "+g+jr),T.style[ze]=A||"translate(0, 0)"},e3=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,l=n.x,o=n.y,f=n.rotation,h=n.skewX,d=n.skewY,p=n.scaleX,m=n.scaleY,x=n.target,b=n.xOrigin,g=n.yOrigin,_=n.xOffset,y=n.yOffset,T=n.forceCSS,L=parseFloat(l),A=parseFloat(o),w,O,z,S,D;f=parseFloat(f),h=parseFloat(h),d=parseFloat(d),d&&(d=parseFloat(d),h+=d,f+=d),f||h?(f*=ha,h*=ha,w=Math.cos(f)*p,O=Math.sin(f)*p,z=Math.sin(f-h)*-m,S=Math.cos(f-h)*m,h&&(d*=ha,D=Math.tan(h-d),D=Math.sqrt(1+D*D),z*=D,S*=D,d&&(D=Math.tan(d),D=Math.sqrt(1+D*D),w*=D,O*=D)),w=Ge(w),O=Ge(O),z=Ge(z),S=Ge(S)):(w=p,S=m,O=z=0),(L&&!~(l+"").indexOf("px")||A&&!~(o+"").indexOf("px"))&&(L=zr(x,"x",l,"px"),A=zr(x,"y",o,"px")),(b||g||_||y)&&(L=Ge(L+b-(b*w+g*z)+_),A=Ge(A+g-(b*O+g*S)+y)),(r||s)&&(D=x.getBBox(),L=Ge(L+r/100*D.width),A=Ge(A+s/100*D.height)),D="matrix("+w+","+O+","+z+","+S+","+L+","+A+")",x.setAttribute("transform",D),T&&(x.style[ze]=D)},n3=function(t,e,n,r,s){var l=360,o=Qe(s),f=parseFloat(s)*(o&&~s.indexOf("rad")?es:1),h=f-r,d=r+h+"deg",p,m;return o&&(p=s.split("_")[1],p==="short"&&(h%=l,h!==h%(l/2)&&(h+=h<0?l:-l)),p==="cw"&&h<0?h=(h+l*Hm)%l-~~(h/l)*l:p==="ccw"&&h>0&&(h=(h-l*Hm)%l-~~(h/l)*l)),t._pt=m=new In(t._pt,e,n,r,h,B2),m.e=d,m.u="deg",t._props.push(n),m},Km=function(t,e){for(var n in e)t[n]=e[n];return t},i3=function(t,e,n){var r=Km({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",l=n.style,o,f,h,d,p,m,x,b;r.svg?(h=n.getAttribute("transform"),n.setAttribute("transform",""),l[ze]=e,o=fo(n,1),uo(n,ze),n.setAttribute("transform",h)):(h=getComputedStyle(n)[ze],l[ze]=e,o=fo(n,1),l[ze]=h);for(f in cr)h=r[f],d=o[f],h!==d&&s.indexOf(f)<0&&(x=hn(h),b=hn(d),p=x!==b?zr(n,f,h,b):parseFloat(h),m=parseFloat(d),t._pt=new In(t._pt,o,f,p,m-p,_h),t._pt.u=b||0,t._props.push(f));Km(o,r)};Rn("padding,margin,Width,Radius",function(c,t){var e="Top",n="Right",r="Bottom",s="Left",l=(t<3?[e,n,r,s]:[e+s,e+n,r+n,r+s]).map(function(o){return t<2?c+o:"border"+o+c});Ul[t>1?"border"+c:c]=function(o,f,h,d,p){var m,x;if(arguments.length<4)return m=l.map(function(b){return ir(o,b,h)}),x=m.join(" "),x.split(m[0]).length===5?m[0]:x;m=(d+"").split(" "),x={},l.forEach(function(b,g){return x[b]=m[g]=m[g]||m[(g-1)/2|0]}),o.init(f,x,p)}});var b_={name:"css",register:xh,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,r,s){var l=this._props,o=t.style,f=n.vars.startAt,h,d,p,m,x,b,g,_,y,T,L,A,w,O,z,S;Vh||xh(),this.styles=this.styles||p_(t),S=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(d=e[g],!(Wn[g]&&i_(g,e,n,r,t,s)))){if(x=typeof d,b=Ul[g],x==="function"&&(d=d.call(n,r,t,s),x=typeof d),x==="string"&&~d.indexOf("random(")&&(d=lo(d)),b)b(this,t,g,d,n)&&(z=1);else if(g.substr(0,2)==="--")h=(getComputedStyle(t).getPropertyValue(g)+"").trim(),d+="",Fr.lastIndex=0,Fr.test(h)||(_=hn(h),y=hn(d)),y?_!==y&&(h=zr(t,g,h,y)+y):_&&(d+=_),this.add(o,"setProperty",h,d,r,s,0,0,g),l.push(g),S.push(g,o[g]);else if(x!=="undefined"){if(f&&g in f?(h=typeof f[g]=="function"?f[g].call(n,r,t,s):f[g],Qe(h)&&~h.indexOf("random(")&&(h=lo(h)),hn(h+"")||(h+=Xn.units[g]||hn(ir(t,g))||""),(h+"").charAt(1)==="="&&(h=ir(t,g))):h=ir(t,g),m=parseFloat(h),T=x==="string"&&d.charAt(1)==="="&&d.substr(0,2),T&&(d=d.substr(2)),p=parseFloat(d),g in sr&&(g==="autoAlpha"&&(m===1&&ir(t,"visibility")==="hidden"&&p&&(m=0),S.push("visibility",o.visibility),Rr(this,o,"visibility",m?"inherit":"hidden",p?"inherit":"hidden",!p)),g!=="scale"&&g!=="transform"&&(g=sr[g],~g.indexOf(",")&&(g=g.split(",")[0]))),L=g in cr,L){if(this.styles.save(g),A||(w=t._gsap,w.renderTransform&&!e.parseTransform||fo(t,e.parseTransform),O=e.smoothOrigin!==!1&&w.smooth,A=this._pt=new In(this._pt,o,ze,0,1,w.renderTransform,w,0,-1),A.dep=1),g==="scale")this._pt=new In(this._pt,w,"scaleY",w.scaleY,(T?ca(w.scaleY,T+p):p)-w.scaleY||0,_h),this._pt.u=0,l.push("scaleY",g),g+="X";else if(g==="transformOrigin"){S.push(Ei,o[Ei]),d=j2(d),w.svg?yh(t,d,0,O,0,this):(y=parseFloat(d.split(" ")[2])||0,y!==w.zOrigin&&Rr(this,w,"zOrigin",w.zOrigin,y),Rr(this,o,g,Bl(h),Bl(d)));continue}else if(g==="svgOrigin"){yh(t,d,1,O,0,this);continue}else if(g in v_){n3(this,w,g,m,T?ca(m,T+d):d);continue}else if(g==="smoothOrigin"){Rr(this,w,"smooth",w.smooth,d);continue}else if(g==="force3D"){w[g]=d;continue}else if(g==="transform"){i3(this,d,t);continue}}else g in o||(g=wa(g)||g);if(L||(p||p===0)&&(m||m===0)&&!U2.test(d)&&g in o)_=(h+"").substr((m+"").length),p||(p=0),y=hn(d)||(g in Xn.units?Xn.units[g]:_),_!==y&&(m=zr(t,g,h,y)),this._pt=new In(this._pt,L?w:o,g,m,(T?ca(m,T+p):p)-m,!L&&(y==="px"||g==="zIndex")&&e.autoRound!==!1?G2:_h),this._pt.u=y||0,_!==y&&y!=="%"&&(this._pt.b=h,this._pt.r=k2);else if(g in o)J2.call(this,t,g,h,T?T+d:d);else if(g in t)this.add(t,g,h||t[g],T?T+d:d,r,s);else{Ih(g,d);continue}L||S.push(g,o[g]),l.push(g)}}z&&c_(this)},render:function(t,e){if(e.tween._time||!Wh())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:ir,aliases:sr,getSetter:function(t,e,n){var r=sr[e];return r&&r.indexOf(",")<0&&(e=r),e in cr&&e!==Ei&&(t._gsap.x||ir(t,"x"))?n&&Wm===n?e==="scale"?X2:H2:(Wm=n||{})&&(e==="scale"?q2:$2):t.style&&!Dh(t.style[e])?V2:~e.indexOf("-")?W2:kh(t,e)},core:{_removeProperty:uo,_getMatrix:Xh}};$n.utils.checkPrefix=wa;$n.core.getStyleSaver=p_;(function(c,t,e,n){var r=Rn(c+","+t+","+e,function(s){cr[s]=1});Rn(t,function(s){Xn.units[s]="deg",v_[s]=1}),sr[r[13]]=c+","+t,Rn(n,function(s){var l=s.split(":");sr[l[1]]=r[l[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Rn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(c){Xn.units[c]="px"});$n.registerPlugin(b_);var fn=$n.registerPlugin(b_)||$n;fn.core.Tween;var ia=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},kl={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */(function(c,t){(function(){var e,n="4.17.21",r=200,s="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",o="Invalid `variable` option passed into `_.template`",f="__lodash_hash_undefined__",h=500,d="__lodash_placeholder__",p=1,m=2,x=4,b=1,g=2,_=1,y=2,T=4,L=8,A=16,w=32,O=64,z=128,S=256,D=512,G=30,nt="...",_t=800,Y=16,W=1,et=2,ct=3,ot=1/0,j=9007199254740991,q=17976931348623157e292,J=0/0,pt=4294967295,gt=pt-1,B=pt>>>1,tt=[["ary",z],["bind",_],["bindKey",y],["curry",L],["curryRight",A],["flip",D],["partial",w],["partialRight",O],["rearg",S]],ft="[object Arguments]",Z="[object Array]",It="[object AsyncFunction]",St="[object Boolean]",Lt="[object Date]",yt="[object DOMException]",Bt="[object Error]",Ut="[object Function]",Ft="[object GeneratorFunction]",le="[object Map]",be="[object Number]",Se="[object Null]",Le="[object Object]",Ie="[object Promise]",ue="[object Proxy]",Ke="[object RegExp]",Me="[object Set]",F="[object String]",P="[object Symbol]",st="[object Undefined]",vt="[object WeakMap]",bt="[object WeakSet]",Tt="[object ArrayBuffer]",Nt="[object DataView]",R="[object Float32Array]",dt="[object Float64Array]",xt="[object Int8Array]",At="[object Int16Array]",Et="[object Int32Array]",Gt="[object Uint8Array]",jt="[object Uint8ClampedArray]",ge="[object Uint16Array]",k="[object Uint32Array]",Mt=/\b__p \+= '';/g,rt=/\b(__p \+=) '' \+/g,Dt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Pt=/&(?:amp|lt|gt|quot|#39);/g,ie=/[&<>"']/g,Ve=RegExp(Pt.source),Pe=RegExp(ie.source),Ai=/<%-([\s\S]+?)%>/g,Te=/<%([\s\S]+?)%>/g,Yn=/<%=([\s\S]+?)%>/g,Mn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Yl=/^\w*$/,bs=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ms=/[\\^$.*+?()[\]{}|]/g,Zl=RegExp(Ms.source),Ea=/^\s+/,Kl=/\s/,I=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,K=/\{\n\/\* \[wrapped with (.+)\] \*/,at=/,? & /,$=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,lt=/[()=,{}\[\]\/\s]/,zt=/\\(\\)?/g,Ht=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Zt=/\w*$/,qt=/^[-+]0x[0-9a-f]+$/i,he=/^0b[01]+$/i,re=/^\[object .+?Constructor\]$/,se=/^0o[0-7]+$/i,Ee=/^(?:0|[1-9]\d*)$/,Bi=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,mi=/($^)/,ur=/['\n\r\u2028\u2029\\]/g,pn="\\ud800-\\udfff",ce="\\u0300-\\u036f",hr="\\ufe20-\\ufe2f",Oe="\\u20d0-\\u20ff",mn=ce+hr+Oe,gi="\\u2700-\\u27bf",fr="a-z\\xdf-\\xf6\\xf8-\\xff",Aa="\\xac\\xb1\\xd7\\xf7",tn="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ki="\\u2000-\\u206f",Ca=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",sn="A-Z\\xc0-\\xd6\\xd8-\\xde",ws="\\ufe0e\\ufe0f",xo=Aa+tn+ki+Ca,Ss="['\u2019]",w_="["+pn+"]",qh="["+xo+"]",yo="["+mn+"]",$h="\\d+",S_="["+gi+"]",Yh="["+fr+"]",Zh="[^"+pn+xo+$h+gi+fr+sn+"]",Jl="\\ud83c[\\udffb-\\udfff]",T_="(?:"+yo+"|"+Jl+")",Kh="[^"+pn+"]",jl="(?:\\ud83c[\\udde6-\\uddff]){2}",Ql="[\\ud800-\\udbff][\\udc00-\\udfff]",Ts="["+sn+"]",Jh="\\u200d",jh="(?:"+Yh+"|"+Zh+")",E_="(?:"+Ts+"|"+Zh+")",Qh="(?:"+Ss+"(?:d|ll|m|re|s|t|ve))?",tf="(?:"+Ss+"(?:D|LL|M|RE|S|T|VE))?",ef=T_+"?",nf="["+ws+"]?",A_="(?:"+Jh+"(?:"+[Kh,jl,Ql].join("|")+")"+nf+ef+")*",C_="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",L_="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",rf=nf+ef+A_,P_="(?:"+[S_,jl,Ql].join("|")+")"+rf,D_="(?:"+[Kh+yo+"?",yo,jl,Ql,w_].join("|")+")",R_=RegExp(Ss,"g"),I_=RegExp(yo,"g"),tc=RegExp(Jl+"(?="+Jl+")|"+D_+rf,"g"),O_=RegExp([Ts+"?"+Yh+"+"+Qh+"(?="+[qh,Ts,"$"].join("|")+")",E_+"+"+tf+"(?="+[qh,Ts+jh,"$"].join("|")+")",Ts+"?"+jh+"+"+Qh,Ts+"+"+tf,L_,C_,$h,P_].join("|"),"g"),F_=RegExp("["+Jh+pn+mn+ws+"]"),N_=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,z_=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],U_=-1,we={};we[R]=we[dt]=we[xt]=we[At]=we[Et]=we[Gt]=we[jt]=we[ge]=we[k]=!0,we[ft]=we[Z]=we[Tt]=we[St]=we[Nt]=we[Lt]=we[Bt]=we[Ut]=we[le]=we[be]=we[Le]=we[Ke]=we[Me]=we[F]=we[vt]=!1;var ye={};ye[ft]=ye[Z]=ye[Tt]=ye[Nt]=ye[St]=ye[Lt]=ye[R]=ye[dt]=ye[xt]=ye[At]=ye[Et]=ye[le]=ye[be]=ye[Le]=ye[Ke]=ye[Me]=ye[F]=ye[P]=ye[Gt]=ye[jt]=ye[ge]=ye[k]=!0,ye[Bt]=ye[Ut]=ye[vt]=!1;var B_={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},k_={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},G_={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},V_={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},W_=parseFloat,H_=parseInt,sf=typeof ia=="object"&&ia&&ia.Object===Object&&ia,X_=typeof self=="object"&&self&&self.Object===Object&&self,en=sf||X_||Function("return this")(),ec=t&&!t.nodeType&&t,Br=ec&&!0&&c&&!c.nodeType&&c,af=Br&&Br.exports===ec,nc=af&&sf.process,Zn=function(){try{var V=Br&&Br.require&&Br.require("util").types;return V||nc&&nc.binding&&nc.binding("util")}catch{}}(),of=Zn&&Zn.isArrayBuffer,lf=Zn&&Zn.isDate,cf=Zn&&Zn.isMap,uf=Zn&&Zn.isRegExp,hf=Zn&&Zn.isSet,ff=Zn&&Zn.isTypedArray;function On(V,it,Q){switch(Q.length){case 0:return V.call(it);case 1:return V.call(it,Q[0]);case 2:return V.call(it,Q[0],Q[1]);case 3:return V.call(it,Q[0],Q[1],Q[2])}return V.apply(it,Q)}function q_(V,it,Q,Rt){for(var $t=-1,fe=V==null?0:V.length;++$t<fe;){var qe=V[$t];it(Rt,qe,Q(qe),V)}return Rt}function Kn(V,it){for(var Q=-1,Rt=V==null?0:V.length;++Q<Rt&&it(V[Q],Q,V)!==!1;);return V}function $_(V,it){for(var Q=V==null?0:V.length;Q--&&it(V[Q],Q,V)!==!1;);return V}function df(V,it){for(var Q=-1,Rt=V==null?0:V.length;++Q<Rt;)if(!it(V[Q],Q,V))return!1;return!0}function dr(V,it){for(var Q=-1,Rt=V==null?0:V.length,$t=0,fe=[];++Q<Rt;){var qe=V[Q];it(qe,Q,V)&&(fe[$t++]=qe)}return fe}function bo(V,it){var Q=V==null?0:V.length;return!!Q&&Es(V,it,0)>-1}function ic(V,it,Q){for(var Rt=-1,$t=V==null?0:V.length;++Rt<$t;)if(Q(it,V[Rt]))return!0;return!1}function Ae(V,it){for(var Q=-1,Rt=V==null?0:V.length,$t=Array(Rt);++Q<Rt;)$t[Q]=it(V[Q],Q,V);return $t}function pr(V,it){for(var Q=-1,Rt=it.length,$t=V.length;++Q<Rt;)V[$t+Q]=it[Q];return V}function rc(V,it,Q,Rt){var $t=-1,fe=V==null?0:V.length;for(Rt&&fe&&(Q=V[++$t]);++$t<fe;)Q=it(Q,V[$t],$t,V);return Q}function Y_(V,it,Q,Rt){var $t=V==null?0:V.length;for(Rt&&$t&&(Q=V[--$t]);$t--;)Q=it(Q,V[$t],$t,V);return Q}function sc(V,it){for(var Q=-1,Rt=V==null?0:V.length;++Q<Rt;)if(it(V[Q],Q,V))return!0;return!1}var Z_=ac("length");function K_(V){return V.split("")}function J_(V){return V.match($)||[]}function pf(V,it,Q){var Rt;return Q(V,function($t,fe,qe){if(it($t,fe,qe))return Rt=fe,!1}),Rt}function Mo(V,it,Q,Rt){for(var $t=V.length,fe=Q+(Rt?1:-1);Rt?fe--:++fe<$t;)if(it(V[fe],fe,V))return fe;return-1}function Es(V,it,Q){return it===it?c0(V,it,Q):Mo(V,mf,Q)}function j_(V,it,Q,Rt){for(var $t=Q-1,fe=V.length;++$t<fe;)if(Rt(V[$t],it))return $t;return-1}function mf(V){return V!==V}function gf(V,it){var Q=V==null?0:V.length;return Q?lc(V,it)/Q:J}function ac(V){return function(it){return it==null?e:it[V]}}function oc(V){return function(it){return V==null?e:V[it]}}function _f(V,it,Q,Rt,$t){return $t(V,function(fe,qe,_e){Q=Rt?(Rt=!1,fe):it(Q,fe,qe,_e)}),Q}function Q_(V,it){var Q=V.length;for(V.sort(it);Q--;)V[Q]=V[Q].value;return V}function lc(V,it){for(var Q,Rt=-1,$t=V.length;++Rt<$t;){var fe=it(V[Rt]);fe!==e&&(Q=Q===e?fe:Q+fe)}return Q}function cc(V,it){for(var Q=-1,Rt=Array(V);++Q<V;)Rt[Q]=it(Q);return Rt}function t0(V,it){return Ae(it,function(Q){return[Q,V[Q]]})}function vf(V){return V&&V.slice(0,Mf(V)+1).replace(Ea,"")}function Fn(V){return function(it){return V(it)}}function uc(V,it){return Ae(it,function(Q){return V[Q]})}function La(V,it){return V.has(it)}function xf(V,it){for(var Q=-1,Rt=V.length;++Q<Rt&&Es(it,V[Q],0)>-1;);return Q}function yf(V,it){for(var Q=V.length;Q--&&Es(it,V[Q],0)>-1;);return Q}function e0(V,it){for(var Q=V.length,Rt=0;Q--;)V[Q]===it&&++Rt;return Rt}var n0=oc(B_),i0=oc(k_);function r0(V){return"\\"+V_[V]}function s0(V,it){return V==null?e:V[it]}function As(V){return F_.test(V)}function a0(V){return N_.test(V)}function o0(V){for(var it,Q=[];!(it=V.next()).done;)Q.push(it.value);return Q}function hc(V){var it=-1,Q=Array(V.size);return V.forEach(function(Rt,$t){Q[++it]=[$t,Rt]}),Q}function bf(V,it){return function(Q){return V(it(Q))}}function mr(V,it){for(var Q=-1,Rt=V.length,$t=0,fe=[];++Q<Rt;){var qe=V[Q];(qe===it||qe===d)&&(V[Q]=d,fe[$t++]=Q)}return fe}function wo(V){var it=-1,Q=Array(V.size);return V.forEach(function(Rt){Q[++it]=Rt}),Q}function l0(V){var it=-1,Q=Array(V.size);return V.forEach(function(Rt){Q[++it]=[Rt,Rt]}),Q}function c0(V,it,Q){for(var Rt=Q-1,$t=V.length;++Rt<$t;)if(V[Rt]===it)return Rt;return-1}function u0(V,it,Q){for(var Rt=Q+1;Rt--;)if(V[Rt]===it)return Rt;return Rt}function Cs(V){return As(V)?f0(V):Z_(V)}function _i(V){return As(V)?d0(V):K_(V)}function Mf(V){for(var it=V.length;it--&&Kl.test(V.charAt(it)););return it}var h0=oc(G_);function f0(V){for(var it=tc.lastIndex=0;tc.test(V);)++it;return it}function d0(V){return V.match(tc)||[]}function p0(V){return V.match(O_)||[]}var m0=function V(it){it=it==null?en:Ls.defaults(en.Object(),it,Ls.pick(en,z_));var Q=it.Array,Rt=it.Date,$t=it.Error,fe=it.Function,qe=it.Math,_e=it.Object,fc=it.RegExp,g0=it.String,Jn=it.TypeError,So=Q.prototype,_0=fe.prototype,Ps=_e.prototype,To=it["__core-js_shared__"],Eo=_0.toString,pe=Ps.hasOwnProperty,v0=0,wf=function(){var i=/[^.]+$/.exec(To&&To.keys&&To.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}(),Ao=Ps.toString,x0=Eo.call(_e),y0=en._,b0=fc("^"+Eo.call(pe).replace(Ms,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Co=af?it.Buffer:e,gr=it.Symbol,Lo=it.Uint8Array,Sf=Co?Co.allocUnsafe:e,Po=bf(_e.getPrototypeOf,_e),Tf=_e.create,Ef=Ps.propertyIsEnumerable,Do=So.splice,Af=gr?gr.isConcatSpreadable:e,Pa=gr?gr.iterator:e,kr=gr?gr.toStringTag:e,Ro=function(){try{var i=Xr(_e,"defineProperty");return i({},"",{}),i}catch{}}(),M0=it.clearTimeout!==en.clearTimeout&&it.clearTimeout,w0=Rt&&Rt.now!==en.Date.now&&Rt.now,S0=it.setTimeout!==en.setTimeout&&it.setTimeout,Io=qe.ceil,Oo=qe.floor,dc=_e.getOwnPropertySymbols,T0=Co?Co.isBuffer:e,Cf=it.isFinite,E0=So.join,A0=bf(_e.keys,_e),$e=qe.max,an=qe.min,C0=Rt.now,L0=it.parseInt,Lf=qe.random,P0=So.reverse,pc=Xr(it,"DataView"),Da=Xr(it,"Map"),mc=Xr(it,"Promise"),Ds=Xr(it,"Set"),Ra=Xr(it,"WeakMap"),Ia=Xr(_e,"create"),Fo=Ra&&new Ra,Rs={},D0=qr(pc),R0=qr(Da),I0=qr(mc),O0=qr(Ds),F0=qr(Ra),No=gr?gr.prototype:e,Oa=No?No.valueOf:e,Pf=No?No.toString:e;function E(i){if(Fe(i)&&!Yt(i)&&!(i instanceof ne)){if(i instanceof jn)return i;if(pe.call(i,"__wrapped__"))return Dd(i)}return new jn(i)}var Is=function(){function i(){}return function(a){if(!De(a))return{};if(Tf)return Tf(a);i.prototype=a;var u=new i;return i.prototype=e,u}}();function zo(){}function jn(i,a){this.__wrapped__=i,this.__actions__=[],this.__chain__=!!a,this.__index__=0,this.__values__=e}E.templateSettings={escape:Ai,evaluate:Te,interpolate:Yn,variable:"",imports:{_:E}},E.prototype=zo.prototype,E.prototype.constructor=E,jn.prototype=Is(zo.prototype),jn.prototype.constructor=jn;function ne(i){this.__wrapped__=i,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=pt,this.__views__=[]}function N0(){var i=new ne(this.__wrapped__);return i.__actions__=wn(this.__actions__),i.__dir__=this.__dir__,i.__filtered__=this.__filtered__,i.__iteratees__=wn(this.__iteratees__),i.__takeCount__=this.__takeCount__,i.__views__=wn(this.__views__),i}function z0(){if(this.__filtered__){var i=new ne(this);i.__dir__=-1,i.__filtered__=!0}else i=this.clone(),i.__dir__*=-1;return i}function U0(){var i=this.__wrapped__.value(),a=this.__dir__,u=Yt(i),v=a<0,M=u?i.length:0,C=Kv(0,M,this.__views__),N=C.start,U=C.end,H=U-N,ut=v?U:N-1,ht=this.__iteratees__,mt=ht.length,Ct=0,Ot=an(H,this.__takeCount__);if(!u||!v&&M==H&&Ot==H)return td(i,this.__actions__);var Vt=[];t:for(;H--&&Ct<Ot;){ut+=a;for(var Jt=-1,Wt=i[ut];++Jt<mt;){var te=ht[Jt],ae=te.iteratee,Un=te.type,vn=ae(Wt);if(Un==et)Wt=vn;else if(!vn){if(Un==W)continue t;break t}}Vt[Ct++]=Wt}return Vt}ne.prototype=Is(zo.prototype),ne.prototype.constructor=ne;function Gr(i){var a=-1,u=i==null?0:i.length;for(this.clear();++a<u;){var v=i[a];this.set(v[0],v[1])}}function B0(){this.__data__=Ia?Ia(null):{},this.size=0}function k0(i){var a=this.has(i)&&delete this.__data__[i];return this.size-=a?1:0,a}function G0(i){var a=this.__data__;if(Ia){var u=a[i];return u===f?e:u}return pe.call(a,i)?a[i]:e}function V0(i){var a=this.__data__;return Ia?a[i]!==e:pe.call(a,i)}function W0(i,a){var u=this.__data__;return this.size+=this.has(i)?0:1,u[i]=Ia&&a===e?f:a,this}Gr.prototype.clear=B0,Gr.prototype.delete=k0,Gr.prototype.get=G0,Gr.prototype.has=V0,Gr.prototype.set=W0;function Gi(i){var a=-1,u=i==null?0:i.length;for(this.clear();++a<u;){var v=i[a];this.set(v[0],v[1])}}function H0(){this.__data__=[],this.size=0}function X0(i){var a=this.__data__,u=Uo(a,i);if(u<0)return!1;var v=a.length-1;return u==v?a.pop():Do.call(a,u,1),--this.size,!0}function q0(i){var a=this.__data__,u=Uo(a,i);return u<0?e:a[u][1]}function $0(i){return Uo(this.__data__,i)>-1}function Y0(i,a){var u=this.__data__,v=Uo(u,i);return v<0?(++this.size,u.push([i,a])):u[v][1]=a,this}Gi.prototype.clear=H0,Gi.prototype.delete=X0,Gi.prototype.get=q0,Gi.prototype.has=$0,Gi.prototype.set=Y0;function Vi(i){var a=-1,u=i==null?0:i.length;for(this.clear();++a<u;){var v=i[a];this.set(v[0],v[1])}}function Z0(){this.size=0,this.__data__={hash:new Gr,map:new(Da||Gi),string:new Gr}}function K0(i){var a=Ko(this,i).delete(i);return this.size-=a?1:0,a}function J0(i){return Ko(this,i).get(i)}function j0(i){return Ko(this,i).has(i)}function Q0(i,a){var u=Ko(this,i),v=u.size;return u.set(i,a),this.size+=u.size==v?0:1,this}Vi.prototype.clear=Z0,Vi.prototype.delete=K0,Vi.prototype.get=J0,Vi.prototype.has=j0,Vi.prototype.set=Q0;function Vr(i){var a=-1,u=i==null?0:i.length;for(this.__data__=new Vi;++a<u;)this.add(i[a])}function tv(i){return this.__data__.set(i,f),this}function ev(i){return this.__data__.has(i)}Vr.prototype.add=Vr.prototype.push=tv,Vr.prototype.has=ev;function vi(i){var a=this.__data__=new Gi(i);this.size=a.size}function nv(){this.__data__=new Gi,this.size=0}function iv(i){var a=this.__data__,u=a.delete(i);return this.size=a.size,u}function rv(i){return this.__data__.get(i)}function sv(i){return this.__data__.has(i)}function av(i,a){var u=this.__data__;if(u instanceof Gi){var v=u.__data__;if(!Da||v.length<r-1)return v.push([i,a]),this.size=++u.size,this;u=this.__data__=new Vi(v)}return u.set(i,a),this.size=u.size,this}vi.prototype.clear=nv,vi.prototype.delete=iv,vi.prototype.get=rv,vi.prototype.has=sv,vi.prototype.set=av;function Df(i,a){var u=Yt(i),v=!u&&$r(i),M=!u&&!v&&br(i),C=!u&&!v&&!M&&zs(i),N=u||v||M||C,U=N?cc(i.length,g0):[],H=U.length;for(var ut in i)(a||pe.call(i,ut))&&!(N&&(ut=="length"||M&&(ut=="offset"||ut=="parent")||C&&(ut=="buffer"||ut=="byteLength"||ut=="byteOffset")||qi(ut,H)))&&U.push(ut);return U}function Rf(i){var a=i.length;return a?i[Ec(0,a-1)]:e}function ov(i,a){return Jo(wn(i),Wr(a,0,i.length))}function lv(i){return Jo(wn(i))}function gc(i,a,u){(u!==e&&!xi(i[a],u)||u===e&&!(a in i))&&Wi(i,a,u)}function Fa(i,a,u){var v=i[a];(!(pe.call(i,a)&&xi(v,u))||u===e&&!(a in i))&&Wi(i,a,u)}function Uo(i,a){for(var u=i.length;u--;)if(xi(i[u][0],a))return u;return-1}function cv(i,a,u,v){return _r(i,function(M,C,N){a(v,M,u(M),N)}),v}function If(i,a){return i&&Li(a,Je(a),i)}function uv(i,a){return i&&Li(a,Tn(a),i)}function Wi(i,a,u){a=="__proto__"&&Ro?Ro(i,a,{configurable:!0,enumerable:!0,value:u,writable:!0}):i[a]=u}function _c(i,a){for(var u=-1,v=a.length,M=Q(v),C=i==null;++u<v;)M[u]=C?e:Jc(i,a[u]);return M}function Wr(i,a,u){return i===i&&(u!==e&&(i=i<=u?i:u),a!==e&&(i=i>=a?i:a)),i}function Qn(i,a,u,v,M,C){var N,U=a&p,H=a&m,ut=a&x;if(u&&(N=M?u(i,v,M,C):u(i)),N!==e)return N;if(!De(i))return i;var ht=Yt(i);if(ht){if(N=jv(i),!U)return wn(i,N)}else{var mt=on(i),Ct=mt==Ut||mt==Ft;if(br(i))return id(i,U);if(mt==Le||mt==ft||Ct&&!M){if(N=H||Ct?{}:Md(i),!U)return H?Gv(i,uv(N,i)):kv(i,If(N,i))}else{if(!ye[mt])return M?i:{};N=Qv(i,mt,U)}}C||(C=new vi);var Ot=C.get(i);if(Ot)return Ot;C.set(i,N),Jd(i)?i.forEach(function(Wt){N.add(Qn(Wt,a,u,Wt,i,C))}):Zd(i)&&i.forEach(function(Wt,te){N.set(te,Qn(Wt,a,u,te,i,C))});var Vt=ut?H?zc:Nc:H?Tn:Je,Jt=ht?e:Vt(i);return Kn(Jt||i,function(Wt,te){Jt&&(te=Wt,Wt=i[te]),Fa(N,te,Qn(Wt,a,u,te,i,C))}),N}function hv(i){var a=Je(i);return function(u){return Of(u,i,a)}}function Of(i,a,u){var v=u.length;if(i==null)return!v;for(i=_e(i);v--;){var M=u[v],C=a[M],N=i[M];if(N===e&&!(M in i)||!C(N))return!1}return!0}function Ff(i,a,u){if(typeof i!="function")throw new Jn(l);return Va(function(){i.apply(e,u)},a)}function Na(i,a,u,v){var M=-1,C=bo,N=!0,U=i.length,H=[],ut=a.length;if(!U)return H;u&&(a=Ae(a,Fn(u))),v?(C=ic,N=!1):a.length>=r&&(C=La,N=!1,a=new Vr(a));t:for(;++M<U;){var ht=i[M],mt=u==null?ht:u(ht);if(ht=v||ht!==0?ht:0,N&&mt===mt){for(var Ct=ut;Ct--;)if(a[Ct]===mt)continue t;H.push(ht)}else C(a,mt,v)||H.push(ht)}return H}var _r=ld(Ci),Nf=ld(xc,!0);function fv(i,a){var u=!0;return _r(i,function(v,M,C){return u=!!a(v,M,C),u}),u}function Bo(i,a,u){for(var v=-1,M=i.length;++v<M;){var C=i[v],N=a(C);if(N!=null&&(U===e?N===N&&!zn(N):u(N,U)))var U=N,H=C}return H}function dv(i,a,u,v){var M=i.length;for(u=Kt(u),u<0&&(u=-u>M?0:M+u),v=v===e||v>M?M:Kt(v),v<0&&(v+=M),v=u>v?0:Qd(v);u<v;)i[u++]=a;return i}function zf(i,a){var u=[];return _r(i,function(v,M,C){a(v,M,C)&&u.push(v)}),u}function nn(i,a,u,v,M){var C=-1,N=i.length;for(u||(u=ex),M||(M=[]);++C<N;){var U=i[C];a>0&&u(U)?a>1?nn(U,a-1,u,v,M):pr(M,U):v||(M[M.length]=U)}return M}var vc=cd(),Uf=cd(!0);function Ci(i,a){return i&&vc(i,a,Je)}function xc(i,a){return i&&Uf(i,a,Je)}function ko(i,a){return dr(a,function(u){return $i(i[u])})}function Hr(i,a){a=xr(a,i);for(var u=0,v=a.length;i!=null&&u<v;)i=i[Pi(a[u++])];return u&&u==v?i:e}function Bf(i,a,u){var v=a(i);return Yt(i)?v:pr(v,u(i))}function gn(i){return i==null?i===e?st:Se:kr&&kr in _e(i)?Zv(i):lx(i)}function yc(i,a){return i>a}function pv(i,a){return i!=null&&pe.call(i,a)}function mv(i,a){return i!=null&&a in _e(i)}function gv(i,a,u){return i>=an(a,u)&&i<$e(a,u)}function bc(i,a,u){for(var v=u?ic:bo,M=i[0].length,C=i.length,N=C,U=Q(C),H=1/0,ut=[];N--;){var ht=i[N];N&&a&&(ht=Ae(ht,Fn(a))),H=an(ht.length,H),U[N]=!u&&(a||M>=120&&ht.length>=120)?new Vr(N&&ht):e}ht=i[0];var mt=-1,Ct=U[0];t:for(;++mt<M&&ut.length<H;){var Ot=ht[mt],Vt=a?a(Ot):Ot;if(Ot=u||Ot!==0?Ot:0,!(Ct?La(Ct,Vt):v(ut,Vt,u))){for(N=C;--N;){var Jt=U[N];if(!(Jt?La(Jt,Vt):v(i[N],Vt,u)))continue t}Ct&&Ct.push(Vt),ut.push(Ot)}}return ut}function _v(i,a,u,v){return Ci(i,function(M,C,N){a(v,u(M),C,N)}),v}function za(i,a,u){a=xr(a,i),i=Ed(i,a);var v=i==null?i:i[Pi(ei(a))];return v==null?e:On(v,i,u)}function kf(i){return Fe(i)&&gn(i)==ft}function vv(i){return Fe(i)&&gn(i)==Tt}function xv(i){return Fe(i)&&gn(i)==Lt}function Ua(i,a,u,v,M){return i===a?!0:i==null||a==null||!Fe(i)&&!Fe(a)?i!==i&&a!==a:yv(i,a,u,v,Ua,M)}function yv(i,a,u,v,M,C){var N=Yt(i),U=Yt(a),H=N?Z:on(i),ut=U?Z:on(a);H=H==ft?Le:H,ut=ut==ft?Le:ut;var ht=H==Le,mt=ut==Le,Ct=H==ut;if(Ct&&br(i)){if(!br(a))return!1;N=!0,ht=!1}if(Ct&&!ht)return C||(C=new vi),N||zs(i)?xd(i,a,u,v,M,C):$v(i,a,H,u,v,M,C);if(!(u&b)){var Ot=ht&&pe.call(i,"__wrapped__"),Vt=mt&&pe.call(a,"__wrapped__");if(Ot||Vt){var Jt=Ot?i.value():i,Wt=Vt?a.value():a;return C||(C=new vi),M(Jt,Wt,u,v,C)}}return Ct?(C||(C=new vi),Yv(i,a,u,v,M,C)):!1}function bv(i){return Fe(i)&&on(i)==le}function Mc(i,a,u,v){var M=u.length,C=M,N=!v;if(i==null)return!C;for(i=_e(i);M--;){var U=u[M];if(N&&U[2]?U[1]!==i[U[0]]:!(U[0]in i))return!1}for(;++M<C;){U=u[M];var H=U[0],ut=i[H],ht=U[1];if(N&&U[2]){if(ut===e&&!(H in i))return!1}else{var mt=new vi;if(v)var Ct=v(ut,ht,H,i,a,mt);if(!(Ct===e?Ua(ht,ut,b|g,v,mt):Ct))return!1}}return!0}function Gf(i){if(!De(i)||ix(i))return!1;var a=$i(i)?b0:re;return a.test(qr(i))}function Mv(i){return Fe(i)&&gn(i)==Ke}function wv(i){return Fe(i)&&on(i)==Me}function Sv(i){return Fe(i)&&il(i.length)&&!!we[gn(i)]}function Vf(i){return typeof i=="function"?i:i==null?En:typeof i=="object"?Yt(i)?Xf(i[0],i[1]):Hf(i):up(i)}function wc(i){if(!Ga(i))return A0(i);var a=[];for(var u in _e(i))pe.call(i,u)&&u!="constructor"&&a.push(u);return a}function Tv(i){if(!De(i))return ox(i);var a=Ga(i),u=[];for(var v in i)v=="constructor"&&(a||!pe.call(i,v))||u.push(v);return u}function Sc(i,a){return i<a}function Wf(i,a){var u=-1,v=Sn(i)?Q(i.length):[];return _r(i,function(M,C,N){v[++u]=a(M,C,N)}),v}function Hf(i){var a=Bc(i);return a.length==1&&a[0][2]?Sd(a[0][0],a[0][1]):function(u){return u===i||Mc(u,i,a)}}function Xf(i,a){return Gc(i)&&wd(a)?Sd(Pi(i),a):function(u){var v=Jc(u,i);return v===e&&v===a?jc(u,i):Ua(a,v,b|g)}}function Go(i,a,u,v,M){i!==a&&vc(a,function(C,N){if(M||(M=new vi),De(C))Ev(i,a,N,u,Go,v,M);else{var U=v?v(Wc(i,N),C,N+"",i,a,M):e;U===e&&(U=C),gc(i,N,U)}},Tn)}function Ev(i,a,u,v,M,C,N){var U=Wc(i,u),H=Wc(a,u),ut=N.get(H);if(ut){gc(i,u,ut);return}var ht=C?C(U,H,u+"",i,a,N):e,mt=ht===e;if(mt){var Ct=Yt(H),Ot=!Ct&&br(H),Vt=!Ct&&!Ot&&zs(H);ht=H,Ct||Ot||Vt?Yt(U)?ht=U:Be(U)?ht=wn(U):Ot?(mt=!1,ht=id(H,!0)):Vt?(mt=!1,ht=rd(H,!0)):ht=[]:Wa(H)||$r(H)?(ht=U,$r(U)?ht=tp(U):(!De(U)||$i(U))&&(ht=Md(H))):mt=!1}mt&&(N.set(H,ht),M(ht,H,v,C,N),N.delete(H)),gc(i,u,ht)}function qf(i,a){var u=i.length;if(!!u)return a+=a<0?u:0,qi(a,u)?i[a]:e}function $f(i,a,u){a.length?a=Ae(a,function(C){return Yt(C)?function(N){return Hr(N,C.length===1?C[0]:C)}:C}):a=[En];var v=-1;a=Ae(a,Fn(kt()));var M=Wf(i,function(C,N,U){var H=Ae(a,function(ut){return ut(C)});return{criteria:H,index:++v,value:C}});return Q_(M,function(C,N){return Bv(C,N,u)})}function Av(i,a){return Yf(i,a,function(u,v){return jc(i,v)})}function Yf(i,a,u){for(var v=-1,M=a.length,C={};++v<M;){var N=a[v],U=Hr(i,N);u(U,N)&&Ba(C,xr(N,i),U)}return C}function Cv(i){return function(a){return Hr(a,i)}}function Tc(i,a,u,v){var M=v?j_:Es,C=-1,N=a.length,U=i;for(i===a&&(a=wn(a)),u&&(U=Ae(i,Fn(u)));++C<N;)for(var H=0,ut=a[C],ht=u?u(ut):ut;(H=M(U,ht,H,v))>-1;)U!==i&&Do.call(U,H,1),Do.call(i,H,1);return i}function Zf(i,a){for(var u=i?a.length:0,v=u-1;u--;){var M=a[u];if(u==v||M!==C){var C=M;qi(M)?Do.call(i,M,1):Lc(i,M)}}return i}function Ec(i,a){return i+Oo(Lf()*(a-i+1))}function Lv(i,a,u,v){for(var M=-1,C=$e(Io((a-i)/(u||1)),0),N=Q(C);C--;)N[v?C:++M]=i,i+=u;return N}function Ac(i,a){var u="";if(!i||a<1||a>j)return u;do a%2&&(u+=i),a=Oo(a/2),a&&(i+=i);while(a);return u}function Qt(i,a){return Hc(Td(i,a,En),i+"")}function Pv(i){return Rf(Us(i))}function Dv(i,a){var u=Us(i);return Jo(u,Wr(a,0,u.length))}function Ba(i,a,u,v){if(!De(i))return i;a=xr(a,i);for(var M=-1,C=a.length,N=C-1,U=i;U!=null&&++M<C;){var H=Pi(a[M]),ut=u;if(H==="__proto__"||H==="constructor"||H==="prototype")return i;if(M!=N){var ht=U[H];ut=v?v(ht,H,U):e,ut===e&&(ut=De(ht)?ht:qi(a[M+1])?[]:{})}Fa(U,H,ut),U=U[H]}return i}var Kf=Fo?function(i,a){return Fo.set(i,a),i}:En,Rv=Ro?function(i,a){return Ro(i,"toString",{configurable:!0,enumerable:!1,value:tu(a),writable:!0})}:En;function Iv(i){return Jo(Us(i))}function ti(i,a,u){var v=-1,M=i.length;a<0&&(a=-a>M?0:M+a),u=u>M?M:u,u<0&&(u+=M),M=a>u?0:u-a>>>0,a>>>=0;for(var C=Q(M);++v<M;)C[v]=i[v+a];return C}function Ov(i,a){var u;return _r(i,function(v,M,C){return u=a(v,M,C),!u}),!!u}function Vo(i,a,u){var v=0,M=i==null?v:i.length;if(typeof a=="number"&&a===a&&M<=B){for(;v<M;){var C=v+M>>>1,N=i[C];N!==null&&!zn(N)&&(u?N<=a:N<a)?v=C+1:M=C}return M}return Cc(i,a,En,u)}function Cc(i,a,u,v){var M=0,C=i==null?0:i.length;if(C===0)return 0;a=u(a);for(var N=a!==a,U=a===null,H=zn(a),ut=a===e;M<C;){var ht=Oo((M+C)/2),mt=u(i[ht]),Ct=mt!==e,Ot=mt===null,Vt=mt===mt,Jt=zn(mt);if(N)var Wt=v||Vt;else ut?Wt=Vt&&(v||Ct):U?Wt=Vt&&Ct&&(v||!Ot):H?Wt=Vt&&Ct&&!Ot&&(v||!Jt):Ot||Jt?Wt=!1:Wt=v?mt<=a:mt<a;Wt?M=ht+1:C=ht}return an(C,gt)}function Jf(i,a){for(var u=-1,v=i.length,M=0,C=[];++u<v;){var N=i[u],U=a?a(N):N;if(!u||!xi(U,H)){var H=U;C[M++]=N===0?0:N}}return C}function jf(i){return typeof i=="number"?i:zn(i)?J:+i}function Nn(i){if(typeof i=="string")return i;if(Yt(i))return Ae(i,Nn)+"";if(zn(i))return Pf?Pf.call(i):"";var a=i+"";return a=="0"&&1/i==-ot?"-0":a}function vr(i,a,u){var v=-1,M=bo,C=i.length,N=!0,U=[],H=U;if(u)N=!1,M=ic;else if(C>=r){var ut=a?null:Xv(i);if(ut)return wo(ut);N=!1,M=La,H=new Vr}else H=a?[]:U;t:for(;++v<C;){var ht=i[v],mt=a?a(ht):ht;if(ht=u||ht!==0?ht:0,N&&mt===mt){for(var Ct=H.length;Ct--;)if(H[Ct]===mt)continue t;a&&H.push(mt),U.push(ht)}else M(H,mt,u)||(H!==U&&H.push(mt),U.push(ht))}return U}function Lc(i,a){return a=xr(a,i),i=Ed(i,a),i==null||delete i[Pi(ei(a))]}function Qf(i,a,u,v){return Ba(i,a,u(Hr(i,a)),v)}function Wo(i,a,u,v){for(var M=i.length,C=v?M:-1;(v?C--:++C<M)&&a(i[C],C,i););return u?ti(i,v?0:C,v?C+1:M):ti(i,v?C+1:0,v?M:C)}function td(i,a){var u=i;return u instanceof ne&&(u=u.value()),rc(a,function(v,M){return M.func.apply(M.thisArg,pr([v],M.args))},u)}function Pc(i,a,u){var v=i.length;if(v<2)return v?vr(i[0]):[];for(var M=-1,C=Q(v);++M<v;)for(var N=i[M],U=-1;++U<v;)U!=M&&(C[M]=Na(C[M]||N,i[U],a,u));return vr(nn(C,1),a,u)}function ed(i,a,u){for(var v=-1,M=i.length,C=a.length,N={};++v<M;){var U=v<C?a[v]:e;u(N,i[v],U)}return N}function Dc(i){return Be(i)?i:[]}function Rc(i){return typeof i=="function"?i:En}function xr(i,a){return Yt(i)?i:Gc(i,a)?[i]:Pd(de(i))}var Fv=Qt;function yr(i,a,u){var v=i.length;return u=u===e?v:u,!a&&u>=v?i:ti(i,a,u)}var nd=M0||function(i){return en.clearTimeout(i)};function id(i,a){if(a)return i.slice();var u=i.length,v=Sf?Sf(u):new i.constructor(u);return i.copy(v),v}function Ic(i){var a=new i.constructor(i.byteLength);return new Lo(a).set(new Lo(i)),a}function Nv(i,a){var u=a?Ic(i.buffer):i.buffer;return new i.constructor(u,i.byteOffset,i.byteLength)}function zv(i){var a=new i.constructor(i.source,Zt.exec(i));return a.lastIndex=i.lastIndex,a}function Uv(i){return Oa?_e(Oa.call(i)):{}}function rd(i,a){var u=a?Ic(i.buffer):i.buffer;return new i.constructor(u,i.byteOffset,i.length)}function sd(i,a){if(i!==a){var u=i!==e,v=i===null,M=i===i,C=zn(i),N=a!==e,U=a===null,H=a===a,ut=zn(a);if(!U&&!ut&&!C&&i>a||C&&N&&H&&!U&&!ut||v&&N&&H||!u&&H||!M)return 1;if(!v&&!C&&!ut&&i<a||ut&&u&&M&&!v&&!C||U&&u&&M||!N&&M||!H)return-1}return 0}function Bv(i,a,u){for(var v=-1,M=i.criteria,C=a.criteria,N=M.length,U=u.length;++v<N;){var H=sd(M[v],C[v]);if(H){if(v>=U)return H;var ut=u[v];return H*(ut=="desc"?-1:1)}}return i.index-a.index}function ad(i,a,u,v){for(var M=-1,C=i.length,N=u.length,U=-1,H=a.length,ut=$e(C-N,0),ht=Q(H+ut),mt=!v;++U<H;)ht[U]=a[U];for(;++M<N;)(mt||M<C)&&(ht[u[M]]=i[M]);for(;ut--;)ht[U++]=i[M++];return ht}function od(i,a,u,v){for(var M=-1,C=i.length,N=-1,U=u.length,H=-1,ut=a.length,ht=$e(C-U,0),mt=Q(ht+ut),Ct=!v;++M<ht;)mt[M]=i[M];for(var Ot=M;++H<ut;)mt[Ot+H]=a[H];for(;++N<U;)(Ct||M<C)&&(mt[Ot+u[N]]=i[M++]);return mt}function wn(i,a){var u=-1,v=i.length;for(a||(a=Q(v));++u<v;)a[u]=i[u];return a}function Li(i,a,u,v){var M=!u;u||(u={});for(var C=-1,N=a.length;++C<N;){var U=a[C],H=v?v(u[U],i[U],U,u,i):e;H===e&&(H=i[U]),M?Wi(u,U,H):Fa(u,U,H)}return u}function kv(i,a){return Li(i,kc(i),a)}function Gv(i,a){return Li(i,yd(i),a)}function Ho(i,a){return function(u,v){var M=Yt(u)?q_:cv,C=a?a():{};return M(u,i,kt(v,2),C)}}function Os(i){return Qt(function(a,u){var v=-1,M=u.length,C=M>1?u[M-1]:e,N=M>2?u[2]:e;for(C=i.length>3&&typeof C=="function"?(M--,C):e,N&&_n(u[0],u[1],N)&&(C=M<3?e:C,M=1),a=_e(a);++v<M;){var U=u[v];U&&i(a,U,v,C)}return a})}function ld(i,a){return function(u,v){if(u==null)return u;if(!Sn(u))return i(u,v);for(var M=u.length,C=a?M:-1,N=_e(u);(a?C--:++C<M)&&v(N[C],C,N)!==!1;);return u}}function cd(i){return function(a,u,v){for(var M=-1,C=_e(a),N=v(a),U=N.length;U--;){var H=N[i?U:++M];if(u(C[H],H,C)===!1)break}return a}}function Vv(i,a,u){var v=a&_,M=ka(i);function C(){var N=this&&this!==en&&this instanceof C?M:i;return N.apply(v?u:this,arguments)}return C}function ud(i){return function(a){a=de(a);var u=As(a)?_i(a):e,v=u?u[0]:a.charAt(0),M=u?yr(u,1).join(""):a.slice(1);return v[i]()+M}}function Fs(i){return function(a){return rc(lp(op(a).replace(R_,"")),i,"")}}function ka(i){return function(){var a=arguments;switch(a.length){case 0:return new i;case 1:return new i(a[0]);case 2:return new i(a[0],a[1]);case 3:return new i(a[0],a[1],a[2]);case 4:return new i(a[0],a[1],a[2],a[3]);case 5:return new i(a[0],a[1],a[2],a[3],a[4]);case 6:return new i(a[0],a[1],a[2],a[3],a[4],a[5]);case 7:return new i(a[0],a[1],a[2],a[3],a[4],a[5],a[6])}var u=Is(i.prototype),v=i.apply(u,a);return De(v)?v:u}}function Wv(i,a,u){var v=ka(i);function M(){for(var C=arguments.length,N=Q(C),U=C,H=Ns(M);U--;)N[U]=arguments[U];var ut=C<3&&N[0]!==H&&N[C-1]!==H?[]:mr(N,H);if(C-=ut.length,C<u)return md(i,a,Xo,M.placeholder,e,N,ut,e,e,u-C);var ht=this&&this!==en&&this instanceof M?v:i;return On(ht,this,N)}return M}function hd(i){return function(a,u,v){var M=_e(a);if(!Sn(a)){var C=kt(u,3);a=Je(a),u=function(U){return C(M[U],U,M)}}var N=i(a,u,v);return N>-1?M[C?a[N]:N]:e}}function fd(i){return Xi(function(a){var u=a.length,v=u,M=jn.prototype.thru;for(i&&a.reverse();v--;){var C=a[v];if(typeof C!="function")throw new Jn(l);if(M&&!N&&Zo(C)=="wrapper")var N=new jn([],!0)}for(v=N?v:u;++v<u;){C=a[v];var U=Zo(C),H=U=="wrapper"?Uc(C):e;H&&Vc(H[0])&&H[1]==(z|L|w|S)&&!H[4].length&&H[9]==1?N=N[Zo(H[0])].apply(N,H[3]):N=C.length==1&&Vc(C)?N[U]():N.thru(C)}return function(){var ut=arguments,ht=ut[0];if(N&&ut.length==1&&Yt(ht))return N.plant(ht).value();for(var mt=0,Ct=u?a[mt].apply(this,ut):ht;++mt<u;)Ct=a[mt].call(this,Ct);return Ct}})}function Xo(i,a,u,v,M,C,N,U,H,ut){var ht=a&z,mt=a&_,Ct=a&y,Ot=a&(L|A),Vt=a&D,Jt=Ct?e:ka(i);function Wt(){for(var te=arguments.length,ae=Q(te),Un=te;Un--;)ae[Un]=arguments[Un];if(Ot)var vn=Ns(Wt),Bn=e0(ae,vn);if(v&&(ae=ad(ae,v,M,Ot)),C&&(ae=od(ae,C,N,Ot)),te-=Bn,Ot&&te<ut){var ke=mr(ae,vn);return md(i,a,Xo,Wt.placeholder,u,ae,ke,U,H,ut-te)}var yi=mt?u:this,Zi=Ct?yi[i]:i;return te=ae.length,U?ae=cx(ae,U):Vt&&te>1&&ae.reverse(),ht&&H<te&&(ae.length=H),this&&this!==en&&this instanceof Wt&&(Zi=Jt||ka(Zi)),Zi.apply(yi,ae)}return Wt}function dd(i,a){return function(u,v){return _v(u,i,a(v),{})}}function qo(i,a){return function(u,v){var M;if(u===e&&v===e)return a;if(u!==e&&(M=u),v!==e){if(M===e)return v;typeof u=="string"||typeof v=="string"?(u=Nn(u),v=Nn(v)):(u=jf(u),v=jf(v)),M=i(u,v)}return M}}function Oc(i){return Xi(function(a){return a=Ae(a,Fn(kt())),Qt(function(u){var v=this;return i(a,function(M){return On(M,v,u)})})})}function $o(i,a){a=a===e?" ":Nn(a);var u=a.length;if(u<2)return u?Ac(a,i):a;var v=Ac(a,Io(i/Cs(a)));return As(a)?yr(_i(v),0,i).join(""):v.slice(0,i)}function Hv(i,a,u,v){var M=a&_,C=ka(i);function N(){for(var U=-1,H=arguments.length,ut=-1,ht=v.length,mt=Q(ht+H),Ct=this&&this!==en&&this instanceof N?C:i;++ut<ht;)mt[ut]=v[ut];for(;H--;)mt[ut++]=arguments[++U];return On(Ct,M?u:this,mt)}return N}function pd(i){return function(a,u,v){return v&&typeof v!="number"&&_n(a,u,v)&&(u=v=e),a=Yi(a),u===e?(u=a,a=0):u=Yi(u),v=v===e?a<u?1:-1:Yi(v),Lv(a,u,v,i)}}function Yo(i){return function(a,u){return typeof a=="string"&&typeof u=="string"||(a=ni(a),u=ni(u)),i(a,u)}}function md(i,a,u,v,M,C,N,U,H,ut){var ht=a&L,mt=ht?N:e,Ct=ht?e:N,Ot=ht?C:e,Vt=ht?e:C;a|=ht?w:O,a&=~(ht?O:w),a&T||(a&=~(_|y));var Jt=[i,a,M,Ot,mt,Vt,Ct,U,H,ut],Wt=u.apply(e,Jt);return Vc(i)&&Ad(Wt,Jt),Wt.placeholder=v,Cd(Wt,i,a)}function Fc(i){var a=qe[i];return function(u,v){if(u=ni(u),v=v==null?0:an(Kt(v),292),v&&Cf(u)){var M=(de(u)+"e").split("e"),C=a(M[0]+"e"+(+M[1]+v));return M=(de(C)+"e").split("e"),+(M[0]+"e"+(+M[1]-v))}return a(u)}}var Xv=Ds&&1/wo(new Ds([,-0]))[1]==ot?function(i){return new Ds(i)}:iu;function gd(i){return function(a){var u=on(a);return u==le?hc(a):u==Me?l0(a):t0(a,i(a))}}function Hi(i,a,u,v,M,C,N,U){var H=a&y;if(!H&&typeof i!="function")throw new Jn(l);var ut=v?v.length:0;if(ut||(a&=~(w|O),v=M=e),N=N===e?N:$e(Kt(N),0),U=U===e?U:Kt(U),ut-=M?M.length:0,a&O){var ht=v,mt=M;v=M=e}var Ct=H?e:Uc(i),Ot=[i,a,u,v,M,ht,mt,C,N,U];if(Ct&&ax(Ot,Ct),i=Ot[0],a=Ot[1],u=Ot[2],v=Ot[3],M=Ot[4],U=Ot[9]=Ot[9]===e?H?0:i.length:$e(Ot[9]-ut,0),!U&&a&(L|A)&&(a&=~(L|A)),!a||a==_)var Vt=Vv(i,a,u);else a==L||a==A?Vt=Wv(i,a,U):(a==w||a==(_|w))&&!M.length?Vt=Hv(i,a,u,v):Vt=Xo.apply(e,Ot);var Jt=Ct?Kf:Ad;return Cd(Jt(Vt,Ot),i,a)}function _d(i,a,u,v){return i===e||xi(i,Ps[u])&&!pe.call(v,u)?a:i}function vd(i,a,u,v,M,C){return De(i)&&De(a)&&(C.set(a,i),Go(i,a,e,vd,C),C.delete(a)),i}function qv(i){return Wa(i)?e:i}function xd(i,a,u,v,M,C){var N=u&b,U=i.length,H=a.length;if(U!=H&&!(N&&H>U))return!1;var ut=C.get(i),ht=C.get(a);if(ut&&ht)return ut==a&&ht==i;var mt=-1,Ct=!0,Ot=u&g?new Vr:e;for(C.set(i,a),C.set(a,i);++mt<U;){var Vt=i[mt],Jt=a[mt];if(v)var Wt=N?v(Jt,Vt,mt,a,i,C):v(Vt,Jt,mt,i,a,C);if(Wt!==e){if(Wt)continue;Ct=!1;break}if(Ot){if(!sc(a,function(te,ae){if(!La(Ot,ae)&&(Vt===te||M(Vt,te,u,v,C)))return Ot.push(ae)})){Ct=!1;break}}else if(!(Vt===Jt||M(Vt,Jt,u,v,C))){Ct=!1;break}}return C.delete(i),C.delete(a),Ct}function $v(i,a,u,v,M,C,N){switch(u){case Nt:if(i.byteLength!=a.byteLength||i.byteOffset!=a.byteOffset)return!1;i=i.buffer,a=a.buffer;case Tt:return!(i.byteLength!=a.byteLength||!C(new Lo(i),new Lo(a)));case St:case Lt:case be:return xi(+i,+a);case Bt:return i.name==a.name&&i.message==a.message;case Ke:case F:return i==a+"";case le:var U=hc;case Me:var H=v&b;if(U||(U=wo),i.size!=a.size&&!H)return!1;var ut=N.get(i);if(ut)return ut==a;v|=g,N.set(i,a);var ht=xd(U(i),U(a),v,M,C,N);return N.delete(i),ht;case P:if(Oa)return Oa.call(i)==Oa.call(a)}return!1}function Yv(i,a,u,v,M,C){var N=u&b,U=Nc(i),H=U.length,ut=Nc(a),ht=ut.length;if(H!=ht&&!N)return!1;for(var mt=H;mt--;){var Ct=U[mt];if(!(N?Ct in a:pe.call(a,Ct)))return!1}var Ot=C.get(i),Vt=C.get(a);if(Ot&&Vt)return Ot==a&&Vt==i;var Jt=!0;C.set(i,a),C.set(a,i);for(var Wt=N;++mt<H;){Ct=U[mt];var te=i[Ct],ae=a[Ct];if(v)var Un=N?v(ae,te,Ct,a,i,C):v(te,ae,Ct,i,a,C);if(!(Un===e?te===ae||M(te,ae,u,v,C):Un)){Jt=!1;break}Wt||(Wt=Ct=="constructor")}if(Jt&&!Wt){var vn=i.constructor,Bn=a.constructor;vn!=Bn&&"constructor"in i&&"constructor"in a&&!(typeof vn=="function"&&vn instanceof vn&&typeof Bn=="function"&&Bn instanceof Bn)&&(Jt=!1)}return C.delete(i),C.delete(a),Jt}function Xi(i){return Hc(Td(i,e,Od),i+"")}function Nc(i){return Bf(i,Je,kc)}function zc(i){return Bf(i,Tn,yd)}var Uc=Fo?function(i){return Fo.get(i)}:iu;function Zo(i){for(var a=i.name+"",u=Rs[a],v=pe.call(Rs,a)?u.length:0;v--;){var M=u[v],C=M.func;if(C==null||C==i)return M.name}return a}function Ns(i){var a=pe.call(E,"placeholder")?E:i;return a.placeholder}function kt(){var i=E.iteratee||eu;return i=i===eu?Vf:i,arguments.length?i(arguments[0],arguments[1]):i}function Ko(i,a){var u=i.__data__;return nx(a)?u[typeof a=="string"?"string":"hash"]:u.map}function Bc(i){for(var a=Je(i),u=a.length;u--;){var v=a[u],M=i[v];a[u]=[v,M,wd(M)]}return a}function Xr(i,a){var u=s0(i,a);return Gf(u)?u:e}function Zv(i){var a=pe.call(i,kr),u=i[kr];try{i[kr]=e;var v=!0}catch{}var M=Ao.call(i);return v&&(a?i[kr]=u:delete i[kr]),M}var kc=dc?function(i){return i==null?[]:(i=_e(i),dr(dc(i),function(a){return Ef.call(i,a)}))}:ru,yd=dc?function(i){for(var a=[];i;)pr(a,kc(i)),i=Po(i);return a}:ru,on=gn;(pc&&on(new pc(new ArrayBuffer(1)))!=Nt||Da&&on(new Da)!=le||mc&&on(mc.resolve())!=Ie||Ds&&on(new Ds)!=Me||Ra&&on(new Ra)!=vt)&&(on=function(i){var a=gn(i),u=a==Le?i.constructor:e,v=u?qr(u):"";if(v)switch(v){case D0:return Nt;case R0:return le;case I0:return Ie;case O0:return Me;case F0:return vt}return a});function Kv(i,a,u){for(var v=-1,M=u.length;++v<M;){var C=u[v],N=C.size;switch(C.type){case"drop":i+=N;break;case"dropRight":a-=N;break;case"take":a=an(a,i+N);break;case"takeRight":i=$e(i,a-N);break}}return{start:i,end:a}}function Jv(i){var a=i.match(K);return a?a[1].split(at):[]}function bd(i,a,u){a=xr(a,i);for(var v=-1,M=a.length,C=!1;++v<M;){var N=Pi(a[v]);if(!(C=i!=null&&u(i,N)))break;i=i[N]}return C||++v!=M?C:(M=i==null?0:i.length,!!M&&il(M)&&qi(N,M)&&(Yt(i)||$r(i)))}function jv(i){var a=i.length,u=new i.constructor(a);return a&&typeof i[0]=="string"&&pe.call(i,"index")&&(u.index=i.index,u.input=i.input),u}function Md(i){return typeof i.constructor=="function"&&!Ga(i)?Is(Po(i)):{}}function Qv(i,a,u){var v=i.constructor;switch(a){case Tt:return Ic(i);case St:case Lt:return new v(+i);case Nt:return Nv(i,u);case R:case dt:case xt:case At:case Et:case Gt:case jt:case ge:case k:return rd(i,u);case le:return new v;case be:case F:return new v(i);case Ke:return zv(i);case Me:return new v;case P:return Uv(i)}}function tx(i,a){var u=a.length;if(!u)return i;var v=u-1;return a[v]=(u>1?"& ":"")+a[v],a=a.join(u>2?", ":" "),i.replace(I,`{
/* [wrapped with `+a+`] */
`)}function ex(i){return Yt(i)||$r(i)||!!(Af&&i&&i[Af])}function qi(i,a){var u=typeof i;return a=a==null?j:a,!!a&&(u=="number"||u!="symbol"&&Ee.test(i))&&i>-1&&i%1==0&&i<a}function _n(i,a,u){if(!De(u))return!1;var v=typeof a;return(v=="number"?Sn(u)&&qi(a,u.length):v=="string"&&a in u)?xi(u[a],i):!1}function Gc(i,a){if(Yt(i))return!1;var u=typeof i;return u=="number"||u=="symbol"||u=="boolean"||i==null||zn(i)?!0:Yl.test(i)||!Mn.test(i)||a!=null&&i in _e(a)}function nx(i){var a=typeof i;return a=="string"||a=="number"||a=="symbol"||a=="boolean"?i!=="__proto__":i===null}function Vc(i){var a=Zo(i),u=E[a];if(typeof u!="function"||!(a in ne.prototype))return!1;if(i===u)return!0;var v=Uc(u);return!!v&&i===v[0]}function ix(i){return!!wf&&wf in i}var rx=To?$i:su;function Ga(i){var a=i&&i.constructor,u=typeof a=="function"&&a.prototype||Ps;return i===u}function wd(i){return i===i&&!De(i)}function Sd(i,a){return function(u){return u==null?!1:u[i]===a&&(a!==e||i in _e(u))}}function sx(i){var a=el(i,function(v){return u.size===h&&u.clear(),v}),u=a.cache;return a}function ax(i,a){var u=i[1],v=a[1],M=u|v,C=M<(_|y|z),N=v==z&&u==L||v==z&&u==S&&i[7].length<=a[8]||v==(z|S)&&a[7].length<=a[8]&&u==L;if(!(C||N))return i;v&_&&(i[2]=a[2],M|=u&_?0:T);var U=a[3];if(U){var H=i[3];i[3]=H?ad(H,U,a[4]):U,i[4]=H?mr(i[3],d):a[4]}return U=a[5],U&&(H=i[5],i[5]=H?od(H,U,a[6]):U,i[6]=H?mr(i[5],d):a[6]),U=a[7],U&&(i[7]=U),v&z&&(i[8]=i[8]==null?a[8]:an(i[8],a[8])),i[9]==null&&(i[9]=a[9]),i[0]=a[0],i[1]=M,i}function ox(i){var a=[];if(i!=null)for(var u in _e(i))a.push(u);return a}function lx(i){return Ao.call(i)}function Td(i,a,u){return a=$e(a===e?i.length-1:a,0),function(){for(var v=arguments,M=-1,C=$e(v.length-a,0),N=Q(C);++M<C;)N[M]=v[a+M];M=-1;for(var U=Q(a+1);++M<a;)U[M]=v[M];return U[a]=u(N),On(i,this,U)}}function Ed(i,a){return a.length<2?i:Hr(i,ti(a,0,-1))}function cx(i,a){for(var u=i.length,v=an(a.length,u),M=wn(i);v--;){var C=a[v];i[v]=qi(C,u)?M[C]:e}return i}function Wc(i,a){if(!(a==="constructor"&&typeof i[a]=="function")&&a!="__proto__")return i[a]}var Ad=Ld(Kf),Va=S0||function(i,a){return en.setTimeout(i,a)},Hc=Ld(Rv);function Cd(i,a,u){var v=a+"";return Hc(i,tx(v,ux(Jv(v),u)))}function Ld(i){var a=0,u=0;return function(){var v=C0(),M=Y-(v-u);if(u=v,M>0){if(++a>=_t)return arguments[0]}else a=0;return i.apply(e,arguments)}}function Jo(i,a){var u=-1,v=i.length,M=v-1;for(a=a===e?v:a;++u<a;){var C=Ec(u,M),N=i[C];i[C]=i[u],i[u]=N}return i.length=a,i}var Pd=sx(function(i){var a=[];return i.charCodeAt(0)===46&&a.push(""),i.replace(bs,function(u,v,M,C){a.push(M?C.replace(zt,"$1"):v||u)}),a});function Pi(i){if(typeof i=="string"||zn(i))return i;var a=i+"";return a=="0"&&1/i==-ot?"-0":a}function qr(i){if(i!=null){try{return Eo.call(i)}catch{}try{return i+""}catch{}}return""}function ux(i,a){return Kn(tt,function(u){var v="_."+u[0];a&u[1]&&!bo(i,v)&&i.push(v)}),i.sort()}function Dd(i){if(i instanceof ne)return i.clone();var a=new jn(i.__wrapped__,i.__chain__);return a.__actions__=wn(i.__actions__),a.__index__=i.__index__,a.__values__=i.__values__,a}function hx(i,a,u){(u?_n(i,a,u):a===e)?a=1:a=$e(Kt(a),0);var v=i==null?0:i.length;if(!v||a<1)return[];for(var M=0,C=0,N=Q(Io(v/a));M<v;)N[C++]=ti(i,M,M+=a);return N}function fx(i){for(var a=-1,u=i==null?0:i.length,v=0,M=[];++a<u;){var C=i[a];C&&(M[v++]=C)}return M}function dx(){var i=arguments.length;if(!i)return[];for(var a=Q(i-1),u=arguments[0],v=i;v--;)a[v-1]=arguments[v];return pr(Yt(u)?wn(u):[u],nn(a,1))}var px=Qt(function(i,a){return Be(i)?Na(i,nn(a,1,Be,!0)):[]}),mx=Qt(function(i,a){var u=ei(a);return Be(u)&&(u=e),Be(i)?Na(i,nn(a,1,Be,!0),kt(u,2)):[]}),gx=Qt(function(i,a){var u=ei(a);return Be(u)&&(u=e),Be(i)?Na(i,nn(a,1,Be,!0),e,u):[]});function _x(i,a,u){var v=i==null?0:i.length;return v?(a=u||a===e?1:Kt(a),ti(i,a<0?0:a,v)):[]}function vx(i,a,u){var v=i==null?0:i.length;return v?(a=u||a===e?1:Kt(a),a=v-a,ti(i,0,a<0?0:a)):[]}function xx(i,a){return i&&i.length?Wo(i,kt(a,3),!0,!0):[]}function yx(i,a){return i&&i.length?Wo(i,kt(a,3),!0):[]}function bx(i,a,u,v){var M=i==null?0:i.length;return M?(u&&typeof u!="number"&&_n(i,a,u)&&(u=0,v=M),dv(i,a,u,v)):[]}function Rd(i,a,u){var v=i==null?0:i.length;if(!v)return-1;var M=u==null?0:Kt(u);return M<0&&(M=$e(v+M,0)),Mo(i,kt(a,3),M)}function Id(i,a,u){var v=i==null?0:i.length;if(!v)return-1;var M=v-1;return u!==e&&(M=Kt(u),M=u<0?$e(v+M,0):an(M,v-1)),Mo(i,kt(a,3),M,!0)}function Od(i){var a=i==null?0:i.length;return a?nn(i,1):[]}function Mx(i){var a=i==null?0:i.length;return a?nn(i,ot):[]}function wx(i,a){var u=i==null?0:i.length;return u?(a=a===e?1:Kt(a),nn(i,a)):[]}function Sx(i){for(var a=-1,u=i==null?0:i.length,v={};++a<u;){var M=i[a];v[M[0]]=M[1]}return v}function Fd(i){return i&&i.length?i[0]:e}function Tx(i,a,u){var v=i==null?0:i.length;if(!v)return-1;var M=u==null?0:Kt(u);return M<0&&(M=$e(v+M,0)),Es(i,a,M)}function Ex(i){var a=i==null?0:i.length;return a?ti(i,0,-1):[]}var Ax=Qt(function(i){var a=Ae(i,Dc);return a.length&&a[0]===i[0]?bc(a):[]}),Cx=Qt(function(i){var a=ei(i),u=Ae(i,Dc);return a===ei(u)?a=e:u.pop(),u.length&&u[0]===i[0]?bc(u,kt(a,2)):[]}),Lx=Qt(function(i){var a=ei(i),u=Ae(i,Dc);return a=typeof a=="function"?a:e,a&&u.pop(),u.length&&u[0]===i[0]?bc(u,e,a):[]});function Px(i,a){return i==null?"":E0.call(i,a)}function ei(i){var a=i==null?0:i.length;return a?i[a-1]:e}function Dx(i,a,u){var v=i==null?0:i.length;if(!v)return-1;var M=v;return u!==e&&(M=Kt(u),M=M<0?$e(v+M,0):an(M,v-1)),a===a?u0(i,a,M):Mo(i,mf,M,!0)}function Rx(i,a){return i&&i.length?qf(i,Kt(a)):e}var Ix=Qt(Nd);function Nd(i,a){return i&&i.length&&a&&a.length?Tc(i,a):i}function Ox(i,a,u){return i&&i.length&&a&&a.length?Tc(i,a,kt(u,2)):i}function Fx(i,a,u){return i&&i.length&&a&&a.length?Tc(i,a,e,u):i}var Nx=Xi(function(i,a){var u=i==null?0:i.length,v=_c(i,a);return Zf(i,Ae(a,function(M){return qi(M,u)?+M:M}).sort(sd)),v});function zx(i,a){var u=[];if(!(i&&i.length))return u;var v=-1,M=[],C=i.length;for(a=kt(a,3);++v<C;){var N=i[v];a(N,v,i)&&(u.push(N),M.push(v))}return Zf(i,M),u}function Xc(i){return i==null?i:P0.call(i)}function Ux(i,a,u){var v=i==null?0:i.length;return v?(u&&typeof u!="number"&&_n(i,a,u)?(a=0,u=v):(a=a==null?0:Kt(a),u=u===e?v:Kt(u)),ti(i,a,u)):[]}function Bx(i,a){return Vo(i,a)}function kx(i,a,u){return Cc(i,a,kt(u,2))}function Gx(i,a){var u=i==null?0:i.length;if(u){var v=Vo(i,a);if(v<u&&xi(i[v],a))return v}return-1}function Vx(i,a){return Vo(i,a,!0)}function Wx(i,a,u){return Cc(i,a,kt(u,2),!0)}function Hx(i,a){var u=i==null?0:i.length;if(u){var v=Vo(i,a,!0)-1;if(xi(i[v],a))return v}return-1}function Xx(i){return i&&i.length?Jf(i):[]}function qx(i,a){return i&&i.length?Jf(i,kt(a,2)):[]}function $x(i){var a=i==null?0:i.length;return a?ti(i,1,a):[]}function Yx(i,a,u){return i&&i.length?(a=u||a===e?1:Kt(a),ti(i,0,a<0?0:a)):[]}function Zx(i,a,u){var v=i==null?0:i.length;return v?(a=u||a===e?1:Kt(a),a=v-a,ti(i,a<0?0:a,v)):[]}function Kx(i,a){return i&&i.length?Wo(i,kt(a,3),!1,!0):[]}function Jx(i,a){return i&&i.length?Wo(i,kt(a,3)):[]}var jx=Qt(function(i){return vr(nn(i,1,Be,!0))}),Qx=Qt(function(i){var a=ei(i);return Be(a)&&(a=e),vr(nn(i,1,Be,!0),kt(a,2))}),ty=Qt(function(i){var a=ei(i);return a=typeof a=="function"?a:e,vr(nn(i,1,Be,!0),e,a)});function ey(i){return i&&i.length?vr(i):[]}function ny(i,a){return i&&i.length?vr(i,kt(a,2)):[]}function iy(i,a){return a=typeof a=="function"?a:e,i&&i.length?vr(i,e,a):[]}function qc(i){if(!(i&&i.length))return[];var a=0;return i=dr(i,function(u){if(Be(u))return a=$e(u.length,a),!0}),cc(a,function(u){return Ae(i,ac(u))})}function zd(i,a){if(!(i&&i.length))return[];var u=qc(i);return a==null?u:Ae(u,function(v){return On(a,e,v)})}var ry=Qt(function(i,a){return Be(i)?Na(i,a):[]}),sy=Qt(function(i){return Pc(dr(i,Be))}),ay=Qt(function(i){var a=ei(i);return Be(a)&&(a=e),Pc(dr(i,Be),kt(a,2))}),oy=Qt(function(i){var a=ei(i);return a=typeof a=="function"?a:e,Pc(dr(i,Be),e,a)}),ly=Qt(qc);function cy(i,a){return ed(i||[],a||[],Fa)}function uy(i,a){return ed(i||[],a||[],Ba)}var hy=Qt(function(i){var a=i.length,u=a>1?i[a-1]:e;return u=typeof u=="function"?(i.pop(),u):e,zd(i,u)});function Ud(i){var a=E(i);return a.__chain__=!0,a}function fy(i,a){return a(i),i}function jo(i,a){return a(i)}var dy=Xi(function(i){var a=i.length,u=a?i[0]:0,v=this.__wrapped__,M=function(C){return _c(C,i)};return a>1||this.__actions__.length||!(v instanceof ne)||!qi(u)?this.thru(M):(v=v.slice(u,+u+(a?1:0)),v.__actions__.push({func:jo,args:[M],thisArg:e}),new jn(v,this.__chain__).thru(function(C){return a&&!C.length&&C.push(e),C}))});function py(){return Ud(this)}function my(){return new jn(this.value(),this.__chain__)}function gy(){this.__values__===e&&(this.__values__=jd(this.value()));var i=this.__index__>=this.__values__.length,a=i?e:this.__values__[this.__index__++];return{done:i,value:a}}function _y(){return this}function vy(i){for(var a,u=this;u instanceof zo;){var v=Dd(u);v.__index__=0,v.__values__=e,a?M.__wrapped__=v:a=v;var M=v;u=u.__wrapped__}return M.__wrapped__=i,a}function xy(){var i=this.__wrapped__;if(i instanceof ne){var a=i;return this.__actions__.length&&(a=new ne(this)),a=a.reverse(),a.__actions__.push({func:jo,args:[Xc],thisArg:e}),new jn(a,this.__chain__)}return this.thru(Xc)}function yy(){return td(this.__wrapped__,this.__actions__)}var by=Ho(function(i,a,u){pe.call(i,u)?++i[u]:Wi(i,u,1)});function My(i,a,u){var v=Yt(i)?df:fv;return u&&_n(i,a,u)&&(a=e),v(i,kt(a,3))}function wy(i,a){var u=Yt(i)?dr:zf;return u(i,kt(a,3))}var Sy=hd(Rd),Ty=hd(Id);function Ey(i,a){return nn(Qo(i,a),1)}function Ay(i,a){return nn(Qo(i,a),ot)}function Cy(i,a,u){return u=u===e?1:Kt(u),nn(Qo(i,a),u)}function Bd(i,a){var u=Yt(i)?Kn:_r;return u(i,kt(a,3))}function kd(i,a){var u=Yt(i)?$_:Nf;return u(i,kt(a,3))}var Ly=Ho(function(i,a,u){pe.call(i,u)?i[u].push(a):Wi(i,u,[a])});function Py(i,a,u,v){i=Sn(i)?i:Us(i),u=u&&!v?Kt(u):0;var M=i.length;return u<0&&(u=$e(M+u,0)),rl(i)?u<=M&&i.indexOf(a,u)>-1:!!M&&Es(i,a,u)>-1}var Dy=Qt(function(i,a,u){var v=-1,M=typeof a=="function",C=Sn(i)?Q(i.length):[];return _r(i,function(N){C[++v]=M?On(a,N,u):za(N,a,u)}),C}),Ry=Ho(function(i,a,u){Wi(i,u,a)});function Qo(i,a){var u=Yt(i)?Ae:Wf;return u(i,kt(a,3))}function Iy(i,a,u,v){return i==null?[]:(Yt(a)||(a=a==null?[]:[a]),u=v?e:u,Yt(u)||(u=u==null?[]:[u]),$f(i,a,u))}var Oy=Ho(function(i,a,u){i[u?0:1].push(a)},function(){return[[],[]]});function Fy(i,a,u){var v=Yt(i)?rc:_f,M=arguments.length<3;return v(i,kt(a,4),u,M,_r)}function Ny(i,a,u){var v=Yt(i)?Y_:_f,M=arguments.length<3;return v(i,kt(a,4),u,M,Nf)}function zy(i,a){var u=Yt(i)?dr:zf;return u(i,nl(kt(a,3)))}function Uy(i){var a=Yt(i)?Rf:Pv;return a(i)}function By(i,a,u){(u?_n(i,a,u):a===e)?a=1:a=Kt(a);var v=Yt(i)?ov:Dv;return v(i,a)}function ky(i){var a=Yt(i)?lv:Iv;return a(i)}function Gy(i){if(i==null)return 0;if(Sn(i))return rl(i)?Cs(i):i.length;var a=on(i);return a==le||a==Me?i.size:wc(i).length}function Vy(i,a,u){var v=Yt(i)?sc:Ov;return u&&_n(i,a,u)&&(a=e),v(i,kt(a,3))}var Wy=Qt(function(i,a){if(i==null)return[];var u=a.length;return u>1&&_n(i,a[0],a[1])?a=[]:u>2&&_n(a[0],a[1],a[2])&&(a=[a[0]]),$f(i,nn(a,1),[])}),tl=w0||function(){return en.Date.now()};function Hy(i,a){if(typeof a!="function")throw new Jn(l);return i=Kt(i),function(){if(--i<1)return a.apply(this,arguments)}}function Gd(i,a,u){return a=u?e:a,a=i&&a==null?i.length:a,Hi(i,z,e,e,e,e,a)}function Vd(i,a){var u;if(typeof a!="function")throw new Jn(l);return i=Kt(i),function(){return--i>0&&(u=a.apply(this,arguments)),i<=1&&(a=e),u}}var $c=Qt(function(i,a,u){var v=_;if(u.length){var M=mr(u,Ns($c));v|=w}return Hi(i,v,a,u,M)}),Wd=Qt(function(i,a,u){var v=_|y;if(u.length){var M=mr(u,Ns(Wd));v|=w}return Hi(a,v,i,u,M)});function Hd(i,a,u){a=u?e:a;var v=Hi(i,L,e,e,e,e,e,a);return v.placeholder=Hd.placeholder,v}function Xd(i,a,u){a=u?e:a;var v=Hi(i,A,e,e,e,e,e,a);return v.placeholder=Xd.placeholder,v}function qd(i,a,u){var v,M,C,N,U,H,ut=0,ht=!1,mt=!1,Ct=!0;if(typeof i!="function")throw new Jn(l);a=ni(a)||0,De(u)&&(ht=!!u.leading,mt="maxWait"in u,C=mt?$e(ni(u.maxWait)||0,a):C,Ct="trailing"in u?!!u.trailing:Ct);function Ot(ke){var yi=v,Zi=M;return v=M=e,ut=ke,N=i.apply(Zi,yi),N}function Vt(ke){return ut=ke,U=Va(te,a),ht?Ot(ke):N}function Jt(ke){var yi=ke-H,Zi=ke-ut,hp=a-yi;return mt?an(hp,C-Zi):hp}function Wt(ke){var yi=ke-H,Zi=ke-ut;return H===e||yi>=a||yi<0||mt&&Zi>=C}function te(){var ke=tl();if(Wt(ke))return ae(ke);U=Va(te,Jt(ke))}function ae(ke){return U=e,Ct&&v?Ot(ke):(v=M=e,N)}function Un(){U!==e&&nd(U),ut=0,v=H=M=U=e}function vn(){return U===e?N:ae(tl())}function Bn(){var ke=tl(),yi=Wt(ke);if(v=arguments,M=this,H=ke,yi){if(U===e)return Vt(H);if(mt)return nd(U),U=Va(te,a),Ot(H)}return U===e&&(U=Va(te,a)),N}return Bn.cancel=Un,Bn.flush=vn,Bn}var Xy=Qt(function(i,a){return Ff(i,1,a)}),qy=Qt(function(i,a,u){return Ff(i,ni(a)||0,u)});function $y(i){return Hi(i,D)}function el(i,a){if(typeof i!="function"||a!=null&&typeof a!="function")throw new Jn(l);var u=function(){var v=arguments,M=a?a.apply(this,v):v[0],C=u.cache;if(C.has(M))return C.get(M);var N=i.apply(this,v);return u.cache=C.set(M,N)||C,N};return u.cache=new(el.Cache||Vi),u}el.Cache=Vi;function nl(i){if(typeof i!="function")throw new Jn(l);return function(){var a=arguments;switch(a.length){case 0:return!i.call(this);case 1:return!i.call(this,a[0]);case 2:return!i.call(this,a[0],a[1]);case 3:return!i.call(this,a[0],a[1],a[2])}return!i.apply(this,a)}}function Yy(i){return Vd(2,i)}var Zy=Fv(function(i,a){a=a.length==1&&Yt(a[0])?Ae(a[0],Fn(kt())):Ae(nn(a,1),Fn(kt()));var u=a.length;return Qt(function(v){for(var M=-1,C=an(v.length,u);++M<C;)v[M]=a[M].call(this,v[M]);return On(i,this,v)})}),Yc=Qt(function(i,a){var u=mr(a,Ns(Yc));return Hi(i,w,e,a,u)}),$d=Qt(function(i,a){var u=mr(a,Ns($d));return Hi(i,O,e,a,u)}),Ky=Xi(function(i,a){return Hi(i,S,e,e,e,a)});function Jy(i,a){if(typeof i!="function")throw new Jn(l);return a=a===e?a:Kt(a),Qt(i,a)}function jy(i,a){if(typeof i!="function")throw new Jn(l);return a=a==null?0:$e(Kt(a),0),Qt(function(u){var v=u[a],M=yr(u,0,a);return v&&pr(M,v),On(i,this,M)})}function Qy(i,a,u){var v=!0,M=!0;if(typeof i!="function")throw new Jn(l);return De(u)&&(v="leading"in u?!!u.leading:v,M="trailing"in u?!!u.trailing:M),qd(i,a,{leading:v,maxWait:a,trailing:M})}function tb(i){return Gd(i,1)}function eb(i,a){return Yc(Rc(a),i)}function nb(){if(!arguments.length)return[];var i=arguments[0];return Yt(i)?i:[i]}function ib(i){return Qn(i,x)}function rb(i,a){return a=typeof a=="function"?a:e,Qn(i,x,a)}function sb(i){return Qn(i,p|x)}function ab(i,a){return a=typeof a=="function"?a:e,Qn(i,p|x,a)}function ob(i,a){return a==null||Of(i,a,Je(a))}function xi(i,a){return i===a||i!==i&&a!==a}var lb=Yo(yc),cb=Yo(function(i,a){return i>=a}),$r=kf(function(){return arguments}())?kf:function(i){return Fe(i)&&pe.call(i,"callee")&&!Ef.call(i,"callee")},Yt=Q.isArray,ub=of?Fn(of):vv;function Sn(i){return i!=null&&il(i.length)&&!$i(i)}function Be(i){return Fe(i)&&Sn(i)}function hb(i){return i===!0||i===!1||Fe(i)&&gn(i)==St}var br=T0||su,fb=lf?Fn(lf):xv;function db(i){return Fe(i)&&i.nodeType===1&&!Wa(i)}function pb(i){if(i==null)return!0;if(Sn(i)&&(Yt(i)||typeof i=="string"||typeof i.splice=="function"||br(i)||zs(i)||$r(i)))return!i.length;var a=on(i);if(a==le||a==Me)return!i.size;if(Ga(i))return!wc(i).length;for(var u in i)if(pe.call(i,u))return!1;return!0}function mb(i,a){return Ua(i,a)}function gb(i,a,u){u=typeof u=="function"?u:e;var v=u?u(i,a):e;return v===e?Ua(i,a,e,u):!!v}function Zc(i){if(!Fe(i))return!1;var a=gn(i);return a==Bt||a==yt||typeof i.message=="string"&&typeof i.name=="string"&&!Wa(i)}function _b(i){return typeof i=="number"&&Cf(i)}function $i(i){if(!De(i))return!1;var a=gn(i);return a==Ut||a==Ft||a==It||a==ue}function Yd(i){return typeof i=="number"&&i==Kt(i)}function il(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=j}function De(i){var a=typeof i;return i!=null&&(a=="object"||a=="function")}function Fe(i){return i!=null&&typeof i=="object"}var Zd=cf?Fn(cf):bv;function vb(i,a){return i===a||Mc(i,a,Bc(a))}function xb(i,a,u){return u=typeof u=="function"?u:e,Mc(i,a,Bc(a),u)}function yb(i){return Kd(i)&&i!=+i}function bb(i){if(rx(i))throw new $t(s);return Gf(i)}function Mb(i){return i===null}function wb(i){return i==null}function Kd(i){return typeof i=="number"||Fe(i)&&gn(i)==be}function Wa(i){if(!Fe(i)||gn(i)!=Le)return!1;var a=Po(i);if(a===null)return!0;var u=pe.call(a,"constructor")&&a.constructor;return typeof u=="function"&&u instanceof u&&Eo.call(u)==x0}var Kc=uf?Fn(uf):Mv;function Sb(i){return Yd(i)&&i>=-j&&i<=j}var Jd=hf?Fn(hf):wv;function rl(i){return typeof i=="string"||!Yt(i)&&Fe(i)&&gn(i)==F}function zn(i){return typeof i=="symbol"||Fe(i)&&gn(i)==P}var zs=ff?Fn(ff):Sv;function Tb(i){return i===e}function Eb(i){return Fe(i)&&on(i)==vt}function Ab(i){return Fe(i)&&gn(i)==bt}var Cb=Yo(Sc),Lb=Yo(function(i,a){return i<=a});function jd(i){if(!i)return[];if(Sn(i))return rl(i)?_i(i):wn(i);if(Pa&&i[Pa])return o0(i[Pa]());var a=on(i),u=a==le?hc:a==Me?wo:Us;return u(i)}function Yi(i){if(!i)return i===0?i:0;if(i=ni(i),i===ot||i===-ot){var a=i<0?-1:1;return a*q}return i===i?i:0}function Kt(i){var a=Yi(i),u=a%1;return a===a?u?a-u:a:0}function Qd(i){return i?Wr(Kt(i),0,pt):0}function ni(i){if(typeof i=="number")return i;if(zn(i))return J;if(De(i)){var a=typeof i.valueOf=="function"?i.valueOf():i;i=De(a)?a+"":a}if(typeof i!="string")return i===0?i:+i;i=vf(i);var u=he.test(i);return u||se.test(i)?H_(i.slice(2),u?2:8):qt.test(i)?J:+i}function tp(i){return Li(i,Tn(i))}function Pb(i){return i?Wr(Kt(i),-j,j):i===0?i:0}function de(i){return i==null?"":Nn(i)}var Db=Os(function(i,a){if(Ga(a)||Sn(a)){Li(a,Je(a),i);return}for(var u in a)pe.call(a,u)&&Fa(i,u,a[u])}),ep=Os(function(i,a){Li(a,Tn(a),i)}),sl=Os(function(i,a,u,v){Li(a,Tn(a),i,v)}),Rb=Os(function(i,a,u,v){Li(a,Je(a),i,v)}),Ib=Xi(_c);function Ob(i,a){var u=Is(i);return a==null?u:If(u,a)}var Fb=Qt(function(i,a){i=_e(i);var u=-1,v=a.length,M=v>2?a[2]:e;for(M&&_n(a[0],a[1],M)&&(v=1);++u<v;)for(var C=a[u],N=Tn(C),U=-1,H=N.length;++U<H;){var ut=N[U],ht=i[ut];(ht===e||xi(ht,Ps[ut])&&!pe.call(i,ut))&&(i[ut]=C[ut])}return i}),Nb=Qt(function(i){return i.push(e,vd),On(np,e,i)});function zb(i,a){return pf(i,kt(a,3),Ci)}function Ub(i,a){return pf(i,kt(a,3),xc)}function Bb(i,a){return i==null?i:vc(i,kt(a,3),Tn)}function kb(i,a){return i==null?i:Uf(i,kt(a,3),Tn)}function Gb(i,a){return i&&Ci(i,kt(a,3))}function Vb(i,a){return i&&xc(i,kt(a,3))}function Wb(i){return i==null?[]:ko(i,Je(i))}function Hb(i){return i==null?[]:ko(i,Tn(i))}function Jc(i,a,u){var v=i==null?e:Hr(i,a);return v===e?u:v}function Xb(i,a){return i!=null&&bd(i,a,pv)}function jc(i,a){return i!=null&&bd(i,a,mv)}var qb=dd(function(i,a,u){a!=null&&typeof a.toString!="function"&&(a=Ao.call(a)),i[a]=u},tu(En)),$b=dd(function(i,a,u){a!=null&&typeof a.toString!="function"&&(a=Ao.call(a)),pe.call(i,a)?i[a].push(u):i[a]=[u]},kt),Yb=Qt(za);function Je(i){return Sn(i)?Df(i):wc(i)}function Tn(i){return Sn(i)?Df(i,!0):Tv(i)}function Zb(i,a){var u={};return a=kt(a,3),Ci(i,function(v,M,C){Wi(u,a(v,M,C),v)}),u}function Kb(i,a){var u={};return a=kt(a,3),Ci(i,function(v,M,C){Wi(u,M,a(v,M,C))}),u}var Jb=Os(function(i,a,u){Go(i,a,u)}),np=Os(function(i,a,u,v){Go(i,a,u,v)}),jb=Xi(function(i,a){var u={};if(i==null)return u;var v=!1;a=Ae(a,function(C){return C=xr(C,i),v||(v=C.length>1),C}),Li(i,zc(i),u),v&&(u=Qn(u,p|m|x,qv));for(var M=a.length;M--;)Lc(u,a[M]);return u});function Qb(i,a){return ip(i,nl(kt(a)))}var tM=Xi(function(i,a){return i==null?{}:Av(i,a)});function ip(i,a){if(i==null)return{};var u=Ae(zc(i),function(v){return[v]});return a=kt(a),Yf(i,u,function(v,M){return a(v,M[0])})}function eM(i,a,u){a=xr(a,i);var v=-1,M=a.length;for(M||(M=1,i=e);++v<M;){var C=i==null?e:i[Pi(a[v])];C===e&&(v=M,C=u),i=$i(C)?C.call(i):C}return i}function nM(i,a,u){return i==null?i:Ba(i,a,u)}function iM(i,a,u,v){return v=typeof v=="function"?v:e,i==null?i:Ba(i,a,u,v)}var rp=gd(Je),sp=gd(Tn);function rM(i,a,u){var v=Yt(i),M=v||br(i)||zs(i);if(a=kt(a,4),u==null){var C=i&&i.constructor;M?u=v?new C:[]:De(i)?u=$i(C)?Is(Po(i)):{}:u={}}return(M?Kn:Ci)(i,function(N,U,H){return a(u,N,U,H)}),u}function sM(i,a){return i==null?!0:Lc(i,a)}function aM(i,a,u){return i==null?i:Qf(i,a,Rc(u))}function oM(i,a,u,v){return v=typeof v=="function"?v:e,i==null?i:Qf(i,a,Rc(u),v)}function Us(i){return i==null?[]:uc(i,Je(i))}function lM(i){return i==null?[]:uc(i,Tn(i))}function cM(i,a,u){return u===e&&(u=a,a=e),u!==e&&(u=ni(u),u=u===u?u:0),a!==e&&(a=ni(a),a=a===a?a:0),Wr(ni(i),a,u)}function uM(i,a,u){return a=Yi(a),u===e?(u=a,a=0):u=Yi(u),i=ni(i),gv(i,a,u)}function hM(i,a,u){if(u&&typeof u!="boolean"&&_n(i,a,u)&&(a=u=e),u===e&&(typeof a=="boolean"?(u=a,a=e):typeof i=="boolean"&&(u=i,i=e)),i===e&&a===e?(i=0,a=1):(i=Yi(i),a===e?(a=i,i=0):a=Yi(a)),i>a){var v=i;i=a,a=v}if(u||i%1||a%1){var M=Lf();return an(i+M*(a-i+W_("1e-"+((M+"").length-1))),a)}return Ec(i,a)}var fM=Fs(function(i,a,u){return a=a.toLowerCase(),i+(u?ap(a):a)});function ap(i){return Qc(de(i).toLowerCase())}function op(i){return i=de(i),i&&i.replace(Bi,n0).replace(I_,"")}function dM(i,a,u){i=de(i),a=Nn(a);var v=i.length;u=u===e?v:Wr(Kt(u),0,v);var M=u;return u-=a.length,u>=0&&i.slice(u,M)==a}function pM(i){return i=de(i),i&&Pe.test(i)?i.replace(ie,i0):i}function mM(i){return i=de(i),i&&Zl.test(i)?i.replace(Ms,"\\$&"):i}var gM=Fs(function(i,a,u){return i+(u?"-":"")+a.toLowerCase()}),_M=Fs(function(i,a,u){return i+(u?" ":"")+a.toLowerCase()}),vM=ud("toLowerCase");function xM(i,a,u){i=de(i),a=Kt(a);var v=a?Cs(i):0;if(!a||v>=a)return i;var M=(a-v)/2;return $o(Oo(M),u)+i+$o(Io(M),u)}function yM(i,a,u){i=de(i),a=Kt(a);var v=a?Cs(i):0;return a&&v<a?i+$o(a-v,u):i}function bM(i,a,u){i=de(i),a=Kt(a);var v=a?Cs(i):0;return a&&v<a?$o(a-v,u)+i:i}function MM(i,a,u){return u||a==null?a=0:a&&(a=+a),L0(de(i).replace(Ea,""),a||0)}function wM(i,a,u){return(u?_n(i,a,u):a===e)?a=1:a=Kt(a),Ac(de(i),a)}function SM(){var i=arguments,a=de(i[0]);return i.length<3?a:a.replace(i[1],i[2])}var TM=Fs(function(i,a,u){return i+(u?"_":"")+a.toLowerCase()});function EM(i,a,u){return u&&typeof u!="number"&&_n(i,a,u)&&(a=u=e),u=u===e?pt:u>>>0,u?(i=de(i),i&&(typeof a=="string"||a!=null&&!Kc(a))&&(a=Nn(a),!a&&As(i))?yr(_i(i),0,u):i.split(a,u)):[]}var AM=Fs(function(i,a,u){return i+(u?" ":"")+Qc(a)});function CM(i,a,u){return i=de(i),u=u==null?0:Wr(Kt(u),0,i.length),a=Nn(a),i.slice(u,u+a.length)==a}function LM(i,a,u){var v=E.templateSettings;u&&_n(i,a,u)&&(a=e),i=de(i),a=sl({},a,v,_d);var M=sl({},a.imports,v.imports,_d),C=Je(M),N=uc(M,C),U,H,ut=0,ht=a.interpolate||mi,mt="__p += '",Ct=fc((a.escape||mi).source+"|"+ht.source+"|"+(ht===Yn?Ht:mi).source+"|"+(a.evaluate||mi).source+"|$","g"),Ot="//# sourceURL="+(pe.call(a,"sourceURL")?(a.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++U_+"]")+`
`;i.replace(Ct,function(Wt,te,ae,Un,vn,Bn){return ae||(ae=Un),mt+=i.slice(ut,Bn).replace(ur,r0),te&&(U=!0,mt+=`' +
__e(`+te+`) +
'`),vn&&(H=!0,mt+=`';
`+vn+`;
__p += '`),ae&&(mt+=`' +
((__t = (`+ae+`)) == null ? '' : __t) +
'`),ut=Bn+Wt.length,Wt}),mt+=`';
`;var Vt=pe.call(a,"variable")&&a.variable;if(!Vt)mt=`with (obj) {
`+mt+`
}
`;else if(lt.test(Vt))throw new $t(o);mt=(H?mt.replace(Mt,""):mt).replace(rt,"$1").replace(Dt,"$1;"),mt="function("+(Vt||"obj")+`) {
`+(Vt?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(U?", __e = _.escape":"")+(H?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+mt+`return __p
}`;var Jt=cp(function(){return fe(C,Ot+"return "+mt).apply(e,N)});if(Jt.source=mt,Zc(Jt))throw Jt;return Jt}function PM(i){return de(i).toLowerCase()}function DM(i){return de(i).toUpperCase()}function RM(i,a,u){if(i=de(i),i&&(u||a===e))return vf(i);if(!i||!(a=Nn(a)))return i;var v=_i(i),M=_i(a),C=xf(v,M),N=yf(v,M)+1;return yr(v,C,N).join("")}function IM(i,a,u){if(i=de(i),i&&(u||a===e))return i.slice(0,Mf(i)+1);if(!i||!(a=Nn(a)))return i;var v=_i(i),M=yf(v,_i(a))+1;return yr(v,0,M).join("")}function OM(i,a,u){if(i=de(i),i&&(u||a===e))return i.replace(Ea,"");if(!i||!(a=Nn(a)))return i;var v=_i(i),M=xf(v,_i(a));return yr(v,M).join("")}function FM(i,a){var u=G,v=nt;if(De(a)){var M="separator"in a?a.separator:M;u="length"in a?Kt(a.length):u,v="omission"in a?Nn(a.omission):v}i=de(i);var C=i.length;if(As(i)){var N=_i(i);C=N.length}if(u>=C)return i;var U=u-Cs(v);if(U<1)return v;var H=N?yr(N,0,U).join(""):i.slice(0,U);if(M===e)return H+v;if(N&&(U+=H.length-U),Kc(M)){if(i.slice(U).search(M)){var ut,ht=H;for(M.global||(M=fc(M.source,de(Zt.exec(M))+"g")),M.lastIndex=0;ut=M.exec(ht);)var mt=ut.index;H=H.slice(0,mt===e?U:mt)}}else if(i.indexOf(Nn(M),U)!=U){var Ct=H.lastIndexOf(M);Ct>-1&&(H=H.slice(0,Ct))}return H+v}function NM(i){return i=de(i),i&&Ve.test(i)?i.replace(Pt,h0):i}var zM=Fs(function(i,a,u){return i+(u?" ":"")+a.toUpperCase()}),Qc=ud("toUpperCase");function lp(i,a,u){return i=de(i),a=u?e:a,a===e?a0(i)?p0(i):J_(i):i.match(a)||[]}var cp=Qt(function(i,a){try{return On(i,e,a)}catch(u){return Zc(u)?u:new $t(u)}}),UM=Xi(function(i,a){return Kn(a,function(u){u=Pi(u),Wi(i,u,$c(i[u],i))}),i});function BM(i){var a=i==null?0:i.length,u=kt();return i=a?Ae(i,function(v){if(typeof v[1]!="function")throw new Jn(l);return[u(v[0]),v[1]]}):[],Qt(function(v){for(var M=-1;++M<a;){var C=i[M];if(On(C[0],this,v))return On(C[1],this,v)}})}function kM(i){return hv(Qn(i,p))}function tu(i){return function(){return i}}function GM(i,a){return i==null||i!==i?a:i}var VM=fd(),WM=fd(!0);function En(i){return i}function eu(i){return Vf(typeof i=="function"?i:Qn(i,p))}function HM(i){return Hf(Qn(i,p))}function XM(i,a){return Xf(i,Qn(a,p))}var qM=Qt(function(i,a){return function(u){return za(u,i,a)}}),$M=Qt(function(i,a){return function(u){return za(i,u,a)}});function nu(i,a,u){var v=Je(a),M=ko(a,v);u==null&&!(De(a)&&(M.length||!v.length))&&(u=a,a=i,i=this,M=ko(a,Je(a)));var C=!(De(u)&&"chain"in u)||!!u.chain,N=$i(i);return Kn(M,function(U){var H=a[U];i[U]=H,N&&(i.prototype[U]=function(){var ut=this.__chain__;if(C||ut){var ht=i(this.__wrapped__),mt=ht.__actions__=wn(this.__actions__);return mt.push({func:H,args:arguments,thisArg:i}),ht.__chain__=ut,ht}return H.apply(i,pr([this.value()],arguments))})}),i}function YM(){return en._===this&&(en._=y0),this}function iu(){}function ZM(i){return i=Kt(i),Qt(function(a){return qf(a,i)})}var KM=Oc(Ae),JM=Oc(df),jM=Oc(sc);function up(i){return Gc(i)?ac(Pi(i)):Cv(i)}function QM(i){return function(a){return i==null?e:Hr(i,a)}}var t1=pd(),e1=pd(!0);function ru(){return[]}function su(){return!1}function n1(){return{}}function i1(){return""}function r1(){return!0}function s1(i,a){if(i=Kt(i),i<1||i>j)return[];var u=pt,v=an(i,pt);a=kt(a),i-=pt;for(var M=cc(v,a);++u<i;)a(u);return M}function a1(i){return Yt(i)?Ae(i,Pi):zn(i)?[i]:wn(Pd(de(i)))}function o1(i){var a=++v0;return de(i)+a}var l1=qo(function(i,a){return i+a},0),c1=Fc("ceil"),u1=qo(function(i,a){return i/a},1),h1=Fc("floor");function f1(i){return i&&i.length?Bo(i,En,yc):e}function d1(i,a){return i&&i.length?Bo(i,kt(a,2),yc):e}function p1(i){return gf(i,En)}function m1(i,a){return gf(i,kt(a,2))}function g1(i){return i&&i.length?Bo(i,En,Sc):e}function _1(i,a){return i&&i.length?Bo(i,kt(a,2),Sc):e}var v1=qo(function(i,a){return i*a},1),x1=Fc("round"),y1=qo(function(i,a){return i-a},0);function b1(i){return i&&i.length?lc(i,En):0}function M1(i,a){return i&&i.length?lc(i,kt(a,2)):0}return E.after=Hy,E.ary=Gd,E.assign=Db,E.assignIn=ep,E.assignInWith=sl,E.assignWith=Rb,E.at=Ib,E.before=Vd,E.bind=$c,E.bindAll=UM,E.bindKey=Wd,E.castArray=nb,E.chain=Ud,E.chunk=hx,E.compact=fx,E.concat=dx,E.cond=BM,E.conforms=kM,E.constant=tu,E.countBy=by,E.create=Ob,E.curry=Hd,E.curryRight=Xd,E.debounce=qd,E.defaults=Fb,E.defaultsDeep=Nb,E.defer=Xy,E.delay=qy,E.difference=px,E.differenceBy=mx,E.differenceWith=gx,E.drop=_x,E.dropRight=vx,E.dropRightWhile=xx,E.dropWhile=yx,E.fill=bx,E.filter=wy,E.flatMap=Ey,E.flatMapDeep=Ay,E.flatMapDepth=Cy,E.flatten=Od,E.flattenDeep=Mx,E.flattenDepth=wx,E.flip=$y,E.flow=VM,E.flowRight=WM,E.fromPairs=Sx,E.functions=Wb,E.functionsIn=Hb,E.groupBy=Ly,E.initial=Ex,E.intersection=Ax,E.intersectionBy=Cx,E.intersectionWith=Lx,E.invert=qb,E.invertBy=$b,E.invokeMap=Dy,E.iteratee=eu,E.keyBy=Ry,E.keys=Je,E.keysIn=Tn,E.map=Qo,E.mapKeys=Zb,E.mapValues=Kb,E.matches=HM,E.matchesProperty=XM,E.memoize=el,E.merge=Jb,E.mergeWith=np,E.method=qM,E.methodOf=$M,E.mixin=nu,E.negate=nl,E.nthArg=ZM,E.omit=jb,E.omitBy=Qb,E.once=Yy,E.orderBy=Iy,E.over=KM,E.overArgs=Zy,E.overEvery=JM,E.overSome=jM,E.partial=Yc,E.partialRight=$d,E.partition=Oy,E.pick=tM,E.pickBy=ip,E.property=up,E.propertyOf=QM,E.pull=Ix,E.pullAll=Nd,E.pullAllBy=Ox,E.pullAllWith=Fx,E.pullAt=Nx,E.range=t1,E.rangeRight=e1,E.rearg=Ky,E.reject=zy,E.remove=zx,E.rest=Jy,E.reverse=Xc,E.sampleSize=By,E.set=nM,E.setWith=iM,E.shuffle=ky,E.slice=Ux,E.sortBy=Wy,E.sortedUniq=Xx,E.sortedUniqBy=qx,E.split=EM,E.spread=jy,E.tail=$x,E.take=Yx,E.takeRight=Zx,E.takeRightWhile=Kx,E.takeWhile=Jx,E.tap=fy,E.throttle=Qy,E.thru=jo,E.toArray=jd,E.toPairs=rp,E.toPairsIn=sp,E.toPath=a1,E.toPlainObject=tp,E.transform=rM,E.unary=tb,E.union=jx,E.unionBy=Qx,E.unionWith=ty,E.uniq=ey,E.uniqBy=ny,E.uniqWith=iy,E.unset=sM,E.unzip=qc,E.unzipWith=zd,E.update=aM,E.updateWith=oM,E.values=Us,E.valuesIn=lM,E.without=ry,E.words=lp,E.wrap=eb,E.xor=sy,E.xorBy=ay,E.xorWith=oy,E.zip=ly,E.zipObject=cy,E.zipObjectDeep=uy,E.zipWith=hy,E.entries=rp,E.entriesIn=sp,E.extend=ep,E.extendWith=sl,nu(E,E),E.add=l1,E.attempt=cp,E.camelCase=fM,E.capitalize=ap,E.ceil=c1,E.clamp=cM,E.clone=ib,E.cloneDeep=sb,E.cloneDeepWith=ab,E.cloneWith=rb,E.conformsTo=ob,E.deburr=op,E.defaultTo=GM,E.divide=u1,E.endsWith=dM,E.eq=xi,E.escape=pM,E.escapeRegExp=mM,E.every=My,E.find=Sy,E.findIndex=Rd,E.findKey=zb,E.findLast=Ty,E.findLastIndex=Id,E.findLastKey=Ub,E.floor=h1,E.forEach=Bd,E.forEachRight=kd,E.forIn=Bb,E.forInRight=kb,E.forOwn=Gb,E.forOwnRight=Vb,E.get=Jc,E.gt=lb,E.gte=cb,E.has=Xb,E.hasIn=jc,E.head=Fd,E.identity=En,E.includes=Py,E.indexOf=Tx,E.inRange=uM,E.invoke=Yb,E.isArguments=$r,E.isArray=Yt,E.isArrayBuffer=ub,E.isArrayLike=Sn,E.isArrayLikeObject=Be,E.isBoolean=hb,E.isBuffer=br,E.isDate=fb,E.isElement=db,E.isEmpty=pb,E.isEqual=mb,E.isEqualWith=gb,E.isError=Zc,E.isFinite=_b,E.isFunction=$i,E.isInteger=Yd,E.isLength=il,E.isMap=Zd,E.isMatch=vb,E.isMatchWith=xb,E.isNaN=yb,E.isNative=bb,E.isNil=wb,E.isNull=Mb,E.isNumber=Kd,E.isObject=De,E.isObjectLike=Fe,E.isPlainObject=Wa,E.isRegExp=Kc,E.isSafeInteger=Sb,E.isSet=Jd,E.isString=rl,E.isSymbol=zn,E.isTypedArray=zs,E.isUndefined=Tb,E.isWeakMap=Eb,E.isWeakSet=Ab,E.join=Px,E.kebabCase=gM,E.last=ei,E.lastIndexOf=Dx,E.lowerCase=_M,E.lowerFirst=vM,E.lt=Cb,E.lte=Lb,E.max=f1,E.maxBy=d1,E.mean=p1,E.meanBy=m1,E.min=g1,E.minBy=_1,E.stubArray=ru,E.stubFalse=su,E.stubObject=n1,E.stubString=i1,E.stubTrue=r1,E.multiply=v1,E.nth=Rx,E.noConflict=YM,E.noop=iu,E.now=tl,E.pad=xM,E.padEnd=yM,E.padStart=bM,E.parseInt=MM,E.random=hM,E.reduce=Fy,E.reduceRight=Ny,E.repeat=wM,E.replace=SM,E.result=eM,E.round=x1,E.runInContext=V,E.sample=Uy,E.size=Gy,E.snakeCase=TM,E.some=Vy,E.sortedIndex=Bx,E.sortedIndexBy=kx,E.sortedIndexOf=Gx,E.sortedLastIndex=Vx,E.sortedLastIndexBy=Wx,E.sortedLastIndexOf=Hx,E.startCase=AM,E.startsWith=CM,E.subtract=y1,E.sum=b1,E.sumBy=M1,E.template=LM,E.times=s1,E.toFinite=Yi,E.toInteger=Kt,E.toLength=Qd,E.toLower=PM,E.toNumber=ni,E.toSafeInteger=Pb,E.toString=de,E.toUpper=DM,E.trim=RM,E.trimEnd=IM,E.trimStart=OM,E.truncate=FM,E.unescape=NM,E.uniqueId=o1,E.upperCase=zM,E.upperFirst=Qc,E.each=Bd,E.eachRight=kd,E.first=Fd,nu(E,function(){var i={};return Ci(E,function(a,u){pe.call(E.prototype,u)||(i[u]=a)}),i}(),{chain:!1}),E.VERSION=n,Kn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(i){E[i].placeholder=E}),Kn(["drop","take"],function(i,a){ne.prototype[i]=function(u){u=u===e?1:$e(Kt(u),0);var v=this.__filtered__&&!a?new ne(this):this.clone();return v.__filtered__?v.__takeCount__=an(u,v.__takeCount__):v.__views__.push({size:an(u,pt),type:i+(v.__dir__<0?"Right":"")}),v},ne.prototype[i+"Right"]=function(u){return this.reverse()[i](u).reverse()}}),Kn(["filter","map","takeWhile"],function(i,a){var u=a+1,v=u==W||u==ct;ne.prototype[i]=function(M){var C=this.clone();return C.__iteratees__.push({iteratee:kt(M,3),type:u}),C.__filtered__=C.__filtered__||v,C}}),Kn(["head","last"],function(i,a){var u="take"+(a?"Right":"");ne.prototype[i]=function(){return this[u](1).value()[0]}}),Kn(["initial","tail"],function(i,a){var u="drop"+(a?"":"Right");ne.prototype[i]=function(){return this.__filtered__?new ne(this):this[u](1)}}),ne.prototype.compact=function(){return this.filter(En)},ne.prototype.find=function(i){return this.filter(i).head()},ne.prototype.findLast=function(i){return this.reverse().find(i)},ne.prototype.invokeMap=Qt(function(i,a){return typeof i=="function"?new ne(this):this.map(function(u){return za(u,i,a)})}),ne.prototype.reject=function(i){return this.filter(nl(kt(i)))},ne.prototype.slice=function(i,a){i=Kt(i);var u=this;return u.__filtered__&&(i>0||a<0)?new ne(u):(i<0?u=u.takeRight(-i):i&&(u=u.drop(i)),a!==e&&(a=Kt(a),u=a<0?u.dropRight(-a):u.take(a-i)),u)},ne.prototype.takeRightWhile=function(i){return this.reverse().takeWhile(i).reverse()},ne.prototype.toArray=function(){return this.take(pt)},Ci(ne.prototype,function(i,a){var u=/^(?:filter|find|map|reject)|While$/.test(a),v=/^(?:head|last)$/.test(a),M=E[v?"take"+(a=="last"?"Right":""):a],C=v||/^find/.test(a);!M||(E.prototype[a]=function(){var N=this.__wrapped__,U=v?[1]:arguments,H=N instanceof ne,ut=U[0],ht=H||Yt(N),mt=function(te){var ae=M.apply(E,pr([te],U));return v&&Ct?ae[0]:ae};ht&&u&&typeof ut=="function"&&ut.length!=1&&(H=ht=!1);var Ct=this.__chain__,Ot=!!this.__actions__.length,Vt=C&&!Ct,Jt=H&&!Ot;if(!C&&ht){N=Jt?N:new ne(this);var Wt=i.apply(N,U);return Wt.__actions__.push({func:jo,args:[mt],thisArg:e}),new jn(Wt,Ct)}return Vt&&Jt?i.apply(this,U):(Wt=this.thru(mt),Vt?v?Wt.value()[0]:Wt.value():Wt)})}),Kn(["pop","push","shift","sort","splice","unshift"],function(i){var a=So[i],u=/^(?:push|sort|unshift)$/.test(i)?"tap":"thru",v=/^(?:pop|shift)$/.test(i);E.prototype[i]=function(){var M=arguments;if(v&&!this.__chain__){var C=this.value();return a.apply(Yt(C)?C:[],M)}return this[u](function(N){return a.apply(Yt(N)?N:[],M)})}}),Ci(ne.prototype,function(i,a){var u=E[a];if(u){var v=u.name+"";pe.call(Rs,v)||(Rs[v]=[]),Rs[v].push({name:a,func:u})}}),Rs[Xo(e,y).name]=[{name:"wrapper",func:e}],ne.prototype.clone=N0,ne.prototype.reverse=z0,ne.prototype.value=U0,E.prototype.at=dy,E.prototype.chain=py,E.prototype.commit=my,E.prototype.next=gy,E.prototype.plant=vy,E.prototype.reverse=xy,E.prototype.toJSON=E.prototype.valueOf=E.prototype.value=yy,E.prototype.first=E.prototype.head,Pa&&(E.prototype[Pa]=_y),E},Ls=m0();Br?((Br.exports=Ls)._=Ls,ec._=Ls):en._=Ls}).call(ia)})(kl,kl.exports);const r3=()=>`
        <nav id="nav">
            <button id="home">About</button>
        </nav> 
    `,s3=()=>`

        <ul id="links">
            <a href ="https://www.instagram.com/cyrstem/"target="_blank"><img src="insta.png"></a>
                <a href ="http://ec.linkedin.com/in/jacobohz" target="_blank"><img src="in.png"></a>
            <a href ="https://github.com/cyrstem/" target="_blank"><img src="git.png"></a>
        </ul>
    `,a3=()=>`
      <main>
        <div id="content" class="content">
          <h3 class="warning">Full experience on Desktop</h3>
          <p>I'm <b>Jacob</b> a <b>Creative Developer</b> and <b>Front-End Developer</b> based in Quito - Ecuador, specialized in building custom digital or physical experiences.</p> 
          <p><b>Self-taught</b> developer, <b>fast learner</b> that works with<b> WebGL, JS, C++, OpenGL, GLSL </b>and recently working with <b>Machine Learning , Computational
Thinking, AI and Unreal Engine</p>
            <div>
              <p>I have collaborated with:</p>
              <ul id ="sites">
              <li>
              <a href="https://thegardeninthemachine.com/" target="_blank">
                <span>the Garden in the machine</span> 
                <span> -- Creative Developer </span>
              </a>
            </li>
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
      `,o3=()=>`
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
    `;var M_={exports:{}};(function(c,t){(function(e,n){c.exports=n()})(ia,function(){var e=document,n=e.createTextNode.bind(e);function r(B,tt,ft){B.style.setProperty(tt,ft)}function s(B,tt){return B.appendChild(tt)}function l(B,tt,ft,Z){var It=e.createElement("span");return tt&&(It.className=tt),ft&&(!Z&&It.setAttribute("data-"+tt,ft),It.textContent=ft),B&&s(B,It)||It}function o(B,tt){return B.getAttribute("data-"+tt)}function f(B,tt){return!B||B.length==0?[]:B.nodeName?[B]:[].slice.call(B[0].nodeName?B:(tt||e).querySelectorAll(B))}function h(B){for(var tt=[];B--;)tt[B]=[];return tt}function d(B,tt){B&&B.some(tt)}function p(B){return function(tt){return B[tt]}}function m(B,tt,ft){var Z="--"+tt,It=Z+"-index";d(ft,function(St,Lt){Array.isArray(St)?d(St,function(yt){r(yt,It,Lt)}):r(St,It,Lt)}),r(B,Z+"-total",ft.length)}var x={};function b(B,tt,ft){var Z=ft.indexOf(B);if(Z==-1)ft.unshift(B),d(x[B].depends,function(St){b(St,B,ft)});else{var It=ft.indexOf(tt);ft.splice(Z,1),ft.splice(It,0,B)}return ft}function g(B,tt,ft,Z){return{by:B,depends:tt,key:ft,split:Z}}function _(B){return b(B,0,[]).map(p(x))}function y(B){x[B.by]=B}function T(B,tt,ft,Z,It){B.normalize();var St=[],Lt=document.createDocumentFragment();Z&&St.push(B.previousSibling);var yt=[];return f(B.childNodes).some(function(Bt){if(Bt.tagName&&!Bt.hasChildNodes()){yt.push(Bt);return}if(Bt.childNodes&&Bt.childNodes.length){yt.push(Bt),St.push.apply(St,T(Bt,tt,ft,Z,It));return}var Ut=Bt.wholeText||"",Ft=Ut.trim();Ft.length&&(Ut[0]===" "&&yt.push(n(" ")),d(Ft.split(ft),function(le,be){be&&It&&yt.push(l(Lt,"whitespace"," ",It));var Se=l(Lt,tt,le);St.push(Se),yt.push(Se)}),Ut[Ut.length-1]===" "&&yt.push(n(" ")))}),d(yt,function(Bt){s(Lt,Bt)}),B.innerHTML="",s(B,Lt),St}var L=0;function A(B,tt){for(var ft in tt)B[ft]=tt[ft];return B}var w="words",O=g(w,L,"word",function(B){return T(B,"word",/\s+/,0,1)}),z="chars",S=g(z,[w],"char",function(B,tt,ft){var Z=[];return d(ft[w],function(It,St){Z.push.apply(Z,T(It,"char","",tt.whitespace&&St))}),Z});function D(B){B=B||{};var tt=B.key;return f(B.target||"[data-splitting]").map(function(ft){var Z=ft["\u{1F34C}"];if(!B.force&&Z)return Z;Z=ft["\u{1F34C}"]={el:ft};var It=_(B.by||o(ft,"splitting")||z),St=A({},B);return d(It,function(Lt){if(Lt.split){var yt=Lt.by,Bt=(tt?"-"+tt:"")+Lt.key,Ut=Lt.split(ft,St,Z);Bt&&m(ft,Bt,Ut),Z[yt]=Ut,ft.classList.add(yt)}}),ft.classList.add("splitting"),Z})}function G(B){B=B||{};var tt=B.target=l();return tt.innerHTML=B.content,D(B),tt.outerHTML}D.html=G,D.add=y;function nt(B,tt,ft){var Z=f(tt.matching||B.children,B),It={};return d(Z,function(St){var Lt=Math.round(St[ft]);(It[Lt]||(It[Lt]=[])).push(St)}),Object.keys(It).map(Number).sort(_t).map(p(It))}function _t(B,tt){return B-tt}var Y=g("lines",[w],"line",function(B,tt,ft){return nt(B,{matching:ft[w]},"offsetTop")}),W=g("items",L,"item",function(B,tt){return f(tt.matching||B.children,B)}),et=g("rows",L,"row",function(B,tt){return nt(B,tt,"offsetTop")}),ct=g("cols",L,"col",function(B,tt){return nt(B,tt,"offsetLeft")}),ot=g("grid",["rows","cols"]),j="layout",q=g(j,L,L,function(B,tt){var ft=tt.rows=+(tt.rows||o(B,"rows")||1),Z=tt.columns=+(tt.columns||o(B,"columns")||1);if(tt.image=tt.image||o(B,"image")||B.currentSrc||B.src,tt.image){var It=f("img",B)[0];tt.image=It&&(It.currentSrc||It.src)}tt.image&&r(B,"background-image","url("+tt.image+")");for(var St=ft*Z,Lt=[],yt=l(L,"cell-grid");St--;){var Bt=l(yt,"cell");l(Bt,"cell-inner"),Lt.push(Bt)}return s(B,yt),Lt}),J=g("cellRows",[j],"row",function(B,tt,ft){var Z=tt.rows,It=h(Z);return d(ft[j],function(St,Lt,yt){It[Math.floor(Lt/(yt.length/Z))].push(St)}),It}),pt=g("cellColumns",[j],"col",function(B,tt,ft){var Z=tt.columns,It=h(Z);return d(ft[j],function(St,Lt){It[Lt%Z].push(St)}),It}),gt=g("cells",["cellRows","cellColumns"],"cell",function(B,tt,ft){return ft[j]});return y(O),y(S),y(Y),y(W),y(et),y(ct),y(ot),y(q),y(J),y(pt),y(gt),D})})(M_);var Jm=M_.exports;const jm=(c,t)=>Math.floor(Math.random()*(t-c+1))+c;class l3{constructor(t){ln(this,"position",-1);ln(this,"cells",[]);this.position=t}}class c3{constructor(t,{position:e,previousCellPosition:n}={}){ln(this,"DOM",{el:null});ln(this,"position",-1);ln(this,"previousCellPosition",-1);ln(this,"original");ln(this,"state");ln(this,"color");ln(this,"originalColor");ln(this,"cache");this.DOM.el=t,this.original=this.DOM.el.innerHTML,this.state=this.original,this.color=this.originalColor=getComputedStyle(document.documentElement).getPropertyValue("--color-text"),this.position=e,this.previousCellPosition=n}set(t){this.state=t,this.DOM.el.innerHTML=this.state}}class u3{constructor(t){ln(this,"DOM",{el:null});ln(this,"lines",[]);ln(this,"lettersAndSymbols",["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","!","@","#","$","&","*","(",")","-","_","+","=","/","[","]","{","}",";",":","<",">",",","0","1","2","3","4","5","6","7","8","9"]);ln(this,"effects",{fx1:()=>this.fx1(),fx2:()=>this.fx2(),fx3:()=>this.fx3(),fx4:()=>this.fx4(),fx5:()=>this.fx5(),fx6:()=>this.fx6()});ln(this,"totalChars",0);this.DOM.el=t;const e=Jm({target:this.DOM.el,by:"lines"});e.forEach(n=>Jm({target:n.words}));for(const[n,r]of e[0].lines.entries()){const s=new l3(n);let l=[],o=0;for(const f of r)for(const h of[...f.querySelectorAll(".char")])l.push(new c3(h,{position:o,previousCellPosition:o===0?-1:o-1})),++o;s.cells=l,this.lines.push(s),this.totalChars+=o}}clearCells(){for(const t of this.lines)for(const e of t.cells)e.set("&nbsp;")}getRandomChar(){return this.lettersAndSymbols[Math.floor(Math.random()*this.lettersAndSymbols.length)]}fx1(){let e=0;this.clearCells();const n=(r,s,l=0)=>{s.cache=s.state,l===45-1?(s.set(s.original),++e,e===this.totalChars&&(this.isAnimating=!1)):s.position===0?s.set(l<9?["*","-","'",'"'][Math.floor(Math.random()*4)]:this.getRandomChar()):s.set(r.cells[s.previousCellPosition].cache),s.cache!="&nbsp;"&&++l,l<45&&setTimeout(()=>n(r,s,l),15)};for(const r of this.lines)for(const s of r.cells)setTimeout(()=>n(r,s),(r.position+1)*200)}fx2(){let e=0;const n=(r,s,l=0)=>{l===20-1?(s.set(s.original),s.DOM.el.style.opacity=0,setTimeout(()=>{s.DOM.el.style.opacity=1},300),++e,e===this.totalChars&&(this.isAnimating=!1)):s.set(this.getRandomChar()),++l,l<20&&setTimeout(()=>n(r,s,l),40)};for(const r of this.lines)for(const s of r.cells)setTimeout(()=>n(r,s),(s.position+1)*30)}fx3(){let e=0;this.clearCells();const n=(r,s,l=0)=>{l===10-1?(s.set(s.original),++e,e===this.totalChars&&(this.isAnimating=!1)):s.set(this.getRandomChar()),++l,l<10&&setTimeout(()=>n(r,s,l),80)};for(const r of this.lines)for(const s of r.cells)setTimeout(()=>n(r,s),jm(0,2e3))}fx4(){let e=0;this.clearCells();const n=(r,s,l=0)=>{s.cache=s.state,l===30-1?(s.set(s.original),++e,e===this.totalChars&&(this.isAnimating=!1)):s.position===0?s.set(["*",":"][Math.floor(Math.random()*2)]):s.set(r.cells[s.previousCellPosition].cache),s.cache!="&nbsp;"&&++l,l<30&&setTimeout(()=>n(r,s,l),15)};for(const r of this.lines)for(const s of r.cells)setTimeout(()=>n(r,s),Math.abs(this.lines.length/2-r.position)*400)}fx5(){let e=0;this.clearCells();const n=(r,s,l=0)=>{s.cache={state:s.state,color:s.color},l===30-1?(s.color=s.originalColor,s.DOM.el.style.color=s.color,s.set(s.original),++e,e===this.totalChars&&(this.isAnimating=!1)):s.position===0?(s.color=["#3e775d","#61dca3","#61b3dc"][Math.floor(Math.random()*3)],s.DOM.el.style.color=s.color,s.set(l<9?["*","-","'",'"'][Math.floor(Math.random()*4)]:this.getRandomChar())):(s.set(r.cells[s.previousCellPosition].cache.state),s.color=r.cells[s.previousCellPosition].cache.color,s.DOM.el.style.color=s.color),s.cache.state!="&nbsp;"&&++l,l<30&&setTimeout(()=>n(r,s,l),10)};for(const r of this.lines)for(const s of r.cells)setTimeout(()=>n(r,s),(r.position+1)*200)}fx6(){let e=0;const n=(r,s,l=0)=>{s.cache={state:s.state,color:s.color},l===15-1?(s.set(s.original),s.color=s.originalColor,s.DOM.el.style.color=s.color,++e,e===this.totalChars&&(this.isAnimating=!1)):(s.set(this.getRandomChar()),s.color=["#2b4539","#61dca3","#61b3dc"][Math.floor(Math.random()*3)],s.DOM.el.style.color=s.color),++l,l<15&&setTimeout(()=>n(r,s,l),jm(30,110))};for(const r of this.lines)for(const s of r.cells)setTimeout(()=>n(r,s),(r.position+1)*80)}trigger(t="fx1"){!(t in this.effects)||this.isAnimating||(this.isAnimating=!0,this.effects[t]())}}class h3{constructor(){this.about=!1,this.portafolio=!1,this.initHTML(),this.addListeners()}addListeners(){document.getElementById("nav").addEventListener("click",this.onClick.bind(this))}initHTML(){document.getElementById("ui").innerHTML=r3(),document.getElementById("contact").innerHTML=s3()}onClick(t){t.preventDefault();const e=t.target.id;if(e!=="home"){this.portafolio=!1,document.getElementById("terminal").innerHTML=o3(),this.about=!0;return}if(e!=="Portafolio"){this.about=!1,document.getElementById("terminal").innerHTML=a3(),this.portafolio=!0,this.effect();return}}effect(){const t=document.querySelector(".content");this.ts=new u3(t),this.ts.trigger("fx2")}}class f3{constructor(t,e){this.scene=t,this.config=e,this.cubes=[],console.log("CubeManager initialized with config:",e),this.setupCubes()}setupCubes(){console.log("Setting up cubes..."),this.geos=new xn,this.main=new Ja;const t=new Sa(this.config.CUBE_SIZE,this.config.CUBE_SIZE,this.config.CUBE_SIZE),e=new bC({color:1118481,emissive:0,specular:1118481,shininess:30});this.cubes=Array(this.config.CUBE_COUNT).fill(null).map(()=>{const n=new Oi(t,e.clone()),r=new X((Math.random()-.5)*this.config.CUBE_SPREAD,(Math.random()-.5)*this.config.CUBE_SPREAD,(Math.random()-.5)*this.config.CUBE_SPREAD);return n.userData={basePosition:r,rotationSpeed:new X((Math.random()-.5)*.01,(Math.random()-.5)*.01,(Math.random()-.5)*.01)},n.position.copy(r),this.geos.add(n),n}),this.main.add(this.geos),this.scene.add(this.main),this.main.visible=!1,console.log("Cubes setup complete. Cube count:",this.cubes.length)}showCubes(){console.log("Showing cubes..."),this.main.visible=!0,this.cubes.forEach(t=>{fn.from(t.position,{x:t.userData.basePosition.x*2,y:t.userData.basePosition.y*2,z:t.userData.basePosition.z*2,duration:1.5,ease:"power2.out",delay:Math.random()*.5})}),console.log("Cubes visibility set to:",this.main.visible)}animateCubesOnShaderCreate(){this.cubes.forEach(t=>{const e={x:(Math.random()-.5)*Math.PI*2,y:(Math.random()-.5)*Math.PI*2,z:(Math.random()-.5)*Math.PI*2};fn.to(t.rotation,{x:e.x,y:e.y,z:e.z,duration:1.5,ease:"power2.inOut"});const n={x:(Math.random()-.5)*2,y:(Math.random()-.5)*2,z:(Math.random()-.5)*2};fn.to(t.position,{x:t.userData.basePosition.x+n.x,y:t.userData.basePosition.y+n.y,z:t.userData.basePosition.z+n.z,duration:1.5,ease:"power2.inOut",onComplete:()=>{fn.to(t.position,{x:t.userData.basePosition.x,y:t.userData.basePosition.y,z:t.userData.basePosition.z,duration:1,ease:"power2.out"})}})})}updateCubes(){this.cubes.forEach(t=>{const{basePosition:e,rotationSpeed:n}=t.userData;t.position.lerp(e,.1),t.rotation.x+=n.x,t.rotation.y+=n.y,t.rotation.z+=n.z})}animateCubeRepulsion(t,e,n){const r=1-n/8,s=new Vector2(t.position.x-e.x,t.position.y-e.y).normalize();fn.to(t.position,{x:t.userData.basePosition.x+s.x*r*2,y:t.userData.basePosition.y+s.y*r*2,z:t.userData.basePosition.z+r*.8,duration:.8,ease:"power1.out"})}getCubes(){return this.cubes}getMain(){return this.main}getGeos(){return this.geos}}var d3=`precision highp float;
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
}`,p3=`precision mediump float;

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
}`,m3=`{
    "shaderTexts": [
        {
            "title": "Noizu",
            "description": "Custom build a Audio player for Linux and Mac. Building a light and simple player for linux, based on my old love to sonique and winamp. I do miss those programs when UI and UX were actually interesting and different.",
            "texture": "insta-0.png",
            "link": "https://github.com/cyrstem/Noizu"
        },
        {
            "title": "YaEsta Pacman",
            "description": "Watch as the cubes rotate and move when new shaders appear. Each interaction creates unique patterns.",
            "texture": "insta-1.png",
            "link": "https://www.youtube.com/watch?v=YHZd0TxPMkY&t=1s&ab_channel=UPDRONEInteligenciaAeron%C3%A1utica"
        },
        {
            "title": "Moving Photon",
            "description": "I collaborated on developing the Virtual Experience for an interactive installation/performance created by installation artist Participation in Moving Photon can be in 5 different ways, including a Phantom performance,interactive installation, interactive performance,interactive performance with EEG and remote performance.",
            "texture": "insta-2.png",
            "link": "https://friendred.studio/2021/10/07/moving-photon/"
        },
        {
            "title": "Glitch Machine",
            "description": "A custom Glitch App build for, it lets you play with a image applying different filters and export the resulting image for printing",
            "texture": "insta-3.png",
            "link": "https://www.instagram.com/jenna___marsh/"
        }
    ]
}   `;class g3{constructor(t){this.config=t,this.textIndex=0,this.textureIndex=0,this.shaderContainers=new Map,this.texts=JSON.parse(m3)}createShaderContainer(t){const e=document.createElement("div"),{containerWidth:n,containerHeight:r}=this.getContainerDimensions(),{randomX:s,randomY:l}=this.calculateRandomPosition(n,r);return this.setupShaderContainerStyles(e,s,l,n,r),this.setupShaderContent(e,n,r,t),this.animateShaderContainer(e),e}getContainerDimensions(){return{containerWidth:this.config.SHADER_CONTAINER_SIZE,containerHeight:this.config.SHADER_CONTAINER_SIZE}}calculateRandomPosition(t,e){const n=window.innerWidth-t,r=window.innerHeight-e;return{randomX:Math.random()*n,randomY:Math.random()*r}}setupShaderContainerStyles(t,e,n,r,s){t.style.cssText=`
            position: fixed;
            top: ${n}px;
            left: ${e}px;
            width: ${r}px;
            height: ${s}px;
            display: none;
            z-index: 1000;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.2);
        `,document.body.appendChild(t)}setupShaderContent(t,e,n,r){const s=this.createHelpDiv(),{title:l,description:o,link:f}=this.getShaderContent(),h=this.createCloseButton(t),d=this.createShaderCanvas(e,n);s.appendChild(l),s.appendChild(o),f&&s.appendChild(f),t.appendChild(s),t.appendChild(h),t.appendChild(d),this.setupShaderRenderer(t,d,e,n,r)}createHelpDiv(){const t=document.createElement("div");return t.style.cssText=`
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 15px;
            background: rgba(49, 37, 37, 0.9);
            color: white;
            font-family: Arial, sans-serif;
            text-align: center;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            z-index: 1002;
        `,t}getShaderContent(){const t=this.texts.shaderTexts[this.textIndex];this.textIndex=(this.textIndex+1)%this.texts.shaderTexts.length;const e=document.createElement("h3");e.style.cssText=`
            margin: 8px 0 8px 0;
            font-size: 18px;
            font-weight: bold;
        `,e.textContent=t.title;const n=document.createElement("p");if(n.style.cssText=`
            margin: 0;
            font-size: 14px;
            line-height: 1.4;
            opacity: 0.9;
        `,n.textContent=t.description,t.link){const r=document.createElement("a");return r.href=t.link,r.target="_blank",r.style.cssText=`
                display: inline-block;
                margin-top: 10px;
                color: white;
                text-decoration: none;
                font-size: 14px;
                padding: 5px 10px;
                border: 1px solid rgba(255, 255, 255, 0.3);
                border-radius: 3px;
                transition: all 0.3s ease;
            `,r.textContent="View Project",r.onmouseover=()=>{r.style.backgroundColor="rgba(255, 255, 255, 0.1)",r.style.borderColor="rgba(255, 255, 255, 0.5)"},r.onmouseout=()=>{r.style.backgroundColor="transparent",r.style.borderColor="rgba(255, 255, 255, 0.3)"},{title:e,description:n,link:r}}return{title:e,description:n}}createCloseButton(t){const e=document.createElement("button");return e.innerHTML="\xD7",e.style.cssText=`
            position: absolute;
            top: 10px;
            right: 10px;
            background: none;
            border: none;
            color: white;
            font-size: 24px;
            cursor: pointer;
            z-index: 1002;
        `,e.onclick=()=>this.hideShaderElement(t),e}createShaderCanvas(t,e){const n=document.createElement("canvas");return n.style.cssText=`
            width: 100%;
            height: 100%;
        `,n}setupShaderRenderer(t,e,n,r,s){const l=new Ah({canvas:e,alpha:!0});l.setSize(n,r);const o=new bg,f=new Ln(75,n/r,.1,1e3);f.position.z=1.5;const h=s[this.textureIndex];this.textureIndex=(this.textureIndex+1)%s.length;const d=s[(this.textureIndex+1)%s.length],p=new Wl(2.5,2.5*(r/n)),m=new Nr({uniforms:{uTime:{value:0},uMouse:{value:new Xt(0,0)},uColor:{value:new me(1118481)},uTexture:{value:h},uDisp:{value:d},uMeshSize:{value:[n,r]},uImageSize:{value:[n,r]},uProg:{value:0},animate:{value:!1}},vertexShader:d3,fragmentShader:p3});this.animateShaderTransition(m);const x=new Oi(p,m);x.position.y=.2,o.add(x),t.userData={renderer:l,material:m,geometry:p,scene:o,camera:f},t.classList.add("shader-container"),this.startShaderAnimation(t)}animateShaderTransition(t){fn.to(t.uniforms.uProg,{value:1,duration:2,ease:"power2.inOut",onComplete:()=>{t.uniforms.uProg.value=0}})}animateShaderContainer(t){t.style.display="block",t.style.opacity="0",fn.to(t,{opacity:1,duration:.3,ease:"power2.out"})}startShaderAnimation(t){const{renderer:e,material:n,scene:r,camera:s}=t.userData,l=()=>{t.parentElement&&(n.uniforms.uTime.value=performance.now()*.001,e.render(r,s),requestAnimationFrame(l))};l()}hideShaderElement(t){fn.to(t,{opacity:0,duration:.3,ease:"power2.in",onComplete:()=>this.cleanupShaderResources(t)})}cleanupShaderResources(t){const{renderer:e,material:n,geometry:r}=t.userData;e.dispose(),n.dispose(),r.dispose(),t.remove()}updateShaderMousePosition(t,e){e&&fn.to(e.uniforms.uMouse.value,{x:t.x*.3,y:t.y*.3,duration:1,ease:"power2.out"})}}class _3{constructor(t){this.config=t,this.camera=new Ln(45,window.innerWidth/window.innerHeight,.001,1e3),this.camera.position.set(0,0,this.config.CAMERA_DISTANCE)}resize(t,e){this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}animateWiggle(){fn.to(this.camera.position,{x:this.camera.position.x+(Math.random()-.5)*2,y:this.camera.position.y+(Math.random()-.5)*2,z:this.camera.position.z+(Math.random()-.5)*2,duration:.4,ease:"power2.out",onComplete:()=>{fn.to(this.camera.position,{x:0,y:0,z:this.config.CAMERA_DISTANCE,duration:.8,ease:"power2.inOut"})}})}getCamera(){return this.camera}}class v3{constructor(t){this.init(t),this.setupScene(),this.setupLights(),this.setupManagers(),this.setupEvents(),this.render()}init(t){this.container=t.dom,this.debug=new HC,this.ui=new h3,this.clock=new LC,this.mouse=new Xt,this.raycaster=new PC,this.textureCache=new Map,this.state={animating:!1,current:0,width:this.container.offsetWidth,height:this.container.offsetHeight},this.config={CUBE_COUNT:150,CUBE_SIZE:1.5,CUBE_SPREAD:8,CAMERA_DISTANCE:30,SHADER_CONTAINER_SIZE:600,TEXTURE_URLS:["insta-0.png","insta-1.png","insta-2.png","insta-3.png"]}}setupScene(){this.scene=new bg,this.scene.fog=new Ch(15658734,3,50),this.renderer=new Ah({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(this.state.width,this.state.height),this.renderer.setClearColor(15658734,1),this.container.appendChild(this.renderer.domElement),this.debug.active&&this.setupDebugControls()}setupDebugControls(){this.controls=new DC(this.cameraManager.getCamera(),this.renderer.domElement),this.debugFolder=this.debug.ui.addFolder("material"),this.materialParams={color:"#000000",emissive:"#000000",specular:"#000000"},["color","emissive","specular"].forEach(t=>{this.debugFolder.addColor(this.materialParams,t).onChange(()=>this.updateMaterials())})}setupLights(){const t=[[.2,0,0],[0,0,0]];this.lights=t.map(e=>{const n=new CC(16777215,1,0);return n.position.set(...e),this.scene.add(n),n})}setupManagers(){this.cameraManager=new _3(this.config),this.cubeManager=new f3(this.scene,this.config),this.shaderManager=new g3(this.config),this.loadTextures()}loadTextures(){console.log("Starting texture loading...");const t=new Mg(()=>{var n,r;console.log("All textures loaded:",(n=this.textures)==null?void 0:n.length),((r=this.textures)==null?void 0:r.length)>0&&this.showCubes()}),e=new SC(t);this.textures=this.config.TEXTURE_URLS.map(n=>{if(console.log("Loading texture:",n),this.textureCache.has(n))return console.log("Using cached texture:",n),this.textureCache.get(n);const r=e.load(n);return this.textureCache.set(n,r),r})}showCubes(){this.cubeManager.showCubes()}setupEvents(){this.handleResize=kl.exports.throttle(this.resize.bind(this),250),this.handleMouseMove=kl.exports.throttle(this.onMouseMove.bind(this),16),window.addEventListener("resize",this.handleResize),window.addEventListener("mousemove",this.handleMouseMove),window.addEventListener("click",this.handleView.bind(this)),window.addEventListener("click",this.handleCubeClick.bind(this))}handleView(){this.navItems=document.querySelectorAll(".nav_item"),this.textItems=document.querySelectorAll(".info"),this.portafolio=this.ui.portafolio,this.about=this.ui.about,this.portafolio?this.showPortfolio():this.about&&this.showAbout(),this.setupNavListeners()}showPortfolio(){this.cubeManager.getMain().visible=!0,fn.to(this.cubeManager.getGeos().position,{x:10,y:-1,z:0,ease:"power2.in",delay:.4,onComplete:()=>this.repositionCubes()})}showAbout(){this.cubeManager.getMain().visible=!1,fn.to(this.cubeManager.getGeos().position,{x:0,y:0,z:0,ease:"power2.out",delay:.4,onComplete:()=>this.repositionCubes()})}setupNavListeners(){this.navItems&&this.navItems.forEach((t,e)=>{t.addEventListener("click",()=>this.switchTextures(e))})}switchTextures(t){this.state.animating||(this.state.animating=!0,this.updateNavItems(t),this.updateTextItems(t),this.animateTextureTransition(t))}updateNavItems(t){this.navItems[this.state.current]&&(this.navItems[this.state.current].classList.remove("item--current"),this.navItems[t].classList.add("item--current"))}updateTextItems(t){this.textItems[this.state.current]&&(this.textItems[this.state.current].classList.remove("show__info"),this.textItems[t].classList.add("show__info"))}animateTextureTransition(t){this.state.current=t,fn.timeline({onComplete:()=>{this.state.animating=!1}}).fromTo(this.textItems[t],{opacity:0},{opacity:1,duration:.5,ease:"power2.in"},0)}repositionCubes(){this.cubeManager.getCubes().forEach(t=>{fn.to(t.rotation,{x:(Math.random()-.07)*10*Math.random(),y:(Math.random()-.07)*10*Math.random(),z:(Math.random()-.07)*10*Math.random(),ease:"power4.out"})})}onMouseMove(t){this.updateMousePosition(t),this.handleCubeInteraction()}updateMousePosition(t){this.mouse.x=t.clientX/this.state.width*2-1,this.mouse.y=-(t.clientY/this.state.height)*2+1}handleCubeInteraction(){this.raycaster.setFromCamera(this.mouse,this.cameraManager.getCamera());const t=this.raycaster.intersectObjects(this.cubeManager.getCubes(),!1);if(t.length>0){const e=new Xt(this.mouse.x*15,this.mouse.y*15);t.forEach(({object:n})=>{const r=new Xt(n.position.x,n.position.y).distanceTo(e);r<8&&this.cubeManager.animateCubeRepulsion(n,e,r)})}}handleCubeClick(t){const e=new Xt(t.clientX/this.state.width*2-1,-(t.clientY/this.state.height)*2+1);this.raycaster.setFromCamera(e,this.cameraManager.getCamera());const n=this.raycaster.intersectObjects(this.cubeManager.getCubes(),!1);if(n.length>0){const r=n[0].object;this.cameraManager.animateWiggle(),this.showShaderElement(r)}}showShaderElement(t){const e=document.querySelectorAll(".shader-container");e.length>=2&&this.shaderManager.hideShaderElement(e[0]),this.cubeManager.animateCubesOnShaderCreate(),this.shaderManager.createShaderContainer(this.textures)}resize(){this.state.width=this.container.offsetWidth,this.state.height=this.container.offsetHeight,this.renderer.setSize(this.state.width,this.state.height),this.cameraManager.resize(this.state.width,this.state.height)}render(){this.clock.getElapsedTime(),this.updateAnimations(),this.cubeManager.updateCubes(),requestAnimationFrame(this.render.bind(this)),this.renderer.render(this.scene,this.cameraManager.getCamera())}updateAnimations(){this.cubeManager.getGeos().rotation.x+=.001,this.cubeManager.getGeos().rotation.y+=5e-4}dispose(){this.removeEventListeners(),this.cleanupResources()}removeEventListeners(){window.removeEventListener("resize",this.handleResize),window.removeEventListener("mousemove",this.handleMouseMove),window.removeEventListener("click",this.handleView)}cleanupResources(){this.scene.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(t.material.map&&t.material.map.dispose(),t.material.dispose())}),this.textureCache.forEach(t=>t.dispose()),this.textureCache.clear(),this.renderer.dispose(),this.controls&&this.controls.dispose(),document.querySelectorAll(".shader-container").forEach(t=>{this.shaderManager.cleanupShaderResources(t)})}}window.onload=c=>{new v3({dom:document.getElementById("container")}),E1()};
//# sourceMappingURL=main.4f6f31ae.js.map
