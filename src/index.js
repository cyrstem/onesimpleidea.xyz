
console.log("hello");
import p5 from"p5";

const sketch = p5=>{
	const canvasWidth = p5.windowWidth;
	const canvasHeight = p5.windowHeight;

window.p5 = p5;


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
		//p5.ellipse(x,y,10,10);



		};
	};


new p5(sketch);
export default  sketch;