const  G = {
    // maybe add a array of the location of images so it can pass to the maker 

    makeDivs(){
        console.log("gallery refactor");
        let gDiv =document.createElement("div");
        gDiv.setAttribute("id","gallery");
        const gContent = document.createTextNode("custom textBuilder");
        console.log("hecho");
        gDiv.appendChild(gContent);

        const currentDiv = document.getElementById("div");
        document.body.insertBefore(gDiv, currentDiv);
        document.getElementById('gallery').style.top = this.changePos(100) +'vh';

    },
    //this will be call to move the position of the div randomly  but to the top
    changePos(max){
        return Math.floor(Math.random() * Math.floor(max));
    }
    
}

export default G;
