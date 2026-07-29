const foundation = document.querySelector(".foundation");
const button = document.getElementById("reset");

let delay = 0

button.onclick = function(){
    if(delay){
        console.log("delay")
    }
    if(foundation){
        foundation.innerHTML = ``
        divs();     
    }
}

function divs(){
    for(i = 0; i < 16; i++){
        for(j = 0; j < 16; j++){
            const cell = document.createElement("div");
            cell.classList.add("cell");
            foundation.appendChild(cell);
        }
    }
}



divs();
