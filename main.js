let container = document.getElementById("container");
let size = 17;



function createDiv() {
    for (let i = 1; i <= (size * size); i++) {
        const div = document.createElement("div");
        div.classList.add = "cells";
        div.className = "cells";
        div.addEventListener('mouseover', function (event) {
            event.target.style.backgroundColor = 'black';
            // event.target.classList.add("active")
        })
        const resetBtn = document.querySelector("#resetBtn")
        resetBtn.addEventListener("click", () => {
            div.style.backgroundColor = "green"

        })


        // let divContent=`shekhar ${i}`;
        // let divText=document.createTextNode(divContent);
        // div.appendChild(divText);
        container.appendChild(div);
    }
}
createDiv()

