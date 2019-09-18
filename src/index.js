
console.log("hello");
import p5 from"p5";
//import drawAnotherLine from './object';

const sketch = p5=>{
	const canvasWidth = p5.windowWidth;
	const canvasHeight = p5.windowHeight;


window.p5 = p5;
//const dr = drawAnotherLine();

		let x =0;
	 	let y =20;

	p5.setup = () => {
	 	let canvas = p5.createCanvas(canvasWidth,canvasHeight);

		
	 
	 };



	p5.draw = () =>{
p5.background('#111');
		x++;

		p5.fill('255');

		p5.rect(x,y,20,10);
		p5.drawAnotherLine();

		//this->drawAnotherLine();

if (x ==canvasWidth) { x= 0; 
// new drawAnotherLine.writer();


}
		
		};

p5.drawAnotherLine =() =>{
	p5.ellipse(p5.mouseX,p5.mouseY,30,30);
}



//end of everything		
};



new p5(sketch);
export default  sketch;