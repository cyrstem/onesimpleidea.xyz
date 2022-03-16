

function responsive() {
	//responsive screens
	var x = window.matchMedia("(max-width: 700px)");
	if (x.matches) {
		//console.log("responsive biatch");
		document.addEventListener("click", function (event) {
			if (event.target.id !== "experiment") return;
			document.getElementById("container").innerHTML = Experiments();
			document.getElementById("ui").style.bottom = "5vh";
		});
	}
}
export default responsive;