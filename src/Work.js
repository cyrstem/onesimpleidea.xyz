import jsxElem, { render }  from "jsx-no-react";

const Works = ()=>{
	function clean(){
		console.log("Load component1");
		let w = document.getElementsByClassName("contents")[0];
		
		console.log(w);
		w.remove();

	}

	return(
		
		<div>
			<h1>hello..</h1>
		</div>
	)
}
export {Works}