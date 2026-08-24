let delay = false

const pixels = prompt("enter a number")
const foundation = document.querySelector(".foundation");
const button = document.getElementById("reset");


if(!delay){
    button.onclick = function(){
        console.log(delay)
        if(delay){
            console.log("delay")
        }
        if(!delay){
            console.log("a")
            foundation.innerHTML = ``
            divs();
            delay = true;
            setTimeout(() => {
                console.log("works")
                delay = false
            },10000)
        }
    }
} else{
    console.log("delayed")
}
function divs(){
    for(i = 0; i < pixels; i++){
        for(j = 0; j < pixels; j++){
            const cell = document.createElement("div");
            const colors = ["#ff0000","#ff7f00","#ffff00","#00ff00","#00b050","#00ffff","#0080ff","#0000ff","#8000ff","#ff00ff","#ff69b4","#8b4513","#808080","#000000","#ffffff" ];
            
            const min = 0
            const max = 21
            const randomColor = Math.floor(Math.random() * max - min + 1) + min;
            cell.style.setProperty("--color", colors[randomColor]);
            foundation.style.setProperty("--columns", pixels);

            cell.classList.add("cell");
            foundation.appendChild(cell);
        }
    }
}



divs();
