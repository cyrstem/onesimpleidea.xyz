const sayHello = () => {
	if (window.navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
		const args = [
			"\n %c -created by cyrstem \n",
			"border: 1px solid #000;color: #fff; background: #171717; padding:5px 0;",
		];
		window.console.log.apply(console, args);
	} else if (window.console) {
		window.console.log("-created by cyrstem  -");
	}
};
export default sayHello;