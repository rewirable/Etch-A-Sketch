let delay = false

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
    for(i = 0; i < 16; i++){
        for(j = 0; j < 16; j++){
            const cell = document.createElement("div");
            cell.classList.add("cell");
            foundation.appendChild(cell);
        }
    }
}



divs();
