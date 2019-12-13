const webpack = require('webpack');
const path = require('path');


const config={
	entry:'./src/index.js',
	output:{path: path.resolve(__dirname,'dist'),
    filename:'bundle.js'
		},

	module:{
			rules:[
				{test:/\.(js|jsx)$/,
				 exclude:/node_modules/,
				 use:'babel-loader'
				}
			] 
		},
		resolve:{
			extensions:[
			'.js',
			'.jsx'
			]
		},
}

module.exports= config;



processin

console.log("hello");
import p5 from"p5";

const sketch = p5=>{
	const canvasWidth = p5.windowWidth;
	const canvasHeight = p5.windowHeight;


window.p5 = p5;
//const dr = drawAnotherLine();

		let x =0;
	 	let y =0;

	p5.setup = () => {
	 	let canvas = p5.createCanvas(canvasWidth,canvasHeight);

		
	 
	 };





	p5.draw = () =>{
	p5.background('#111');
			x+=10;

		p5.fill('255');

		p5.rect(x,y,10,10);
		p5.drawAnotherLine();

		if (x == canvasWidth) {
			console.log(x);
			x =0;
			y = y+30;

		}
		if (true) {}

	// if (x == canvasWidth ) { 
		
	// 	y=y+30;
	// 	x = 0; 

	// }
};

p5.drawAnotherLine =() =>{
	p5.ellipse(p5.mouseX,p5.mouseY,3,3);
}



//end of everything		
};



new p5(sketch);
export default  sketch;



<!-- 

 -->