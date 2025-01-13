const gridSquareContainer = document.querySelector(".gridSquareContainer");
const child = document.querySelector(".child")

for (let i =0; i< 256; i++)
{
    const gridSquare = document.createElement("div"); //creates the div 
    gridSquare.classList.add("gridSquare"); //creates the class name
    gridSquare.addEventListener("mouseover",()=>{
        gridSquare.style.background="white";
    });
    gridSquare.addEventListener("mouseout",()=>{
        gridSquare.style.background="blue";
    });
    
    child.appendChild(gridSquare) //appends it to the container.
    
}
