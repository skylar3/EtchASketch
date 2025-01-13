const gridSquareContainer = document.querySelector(".gridSquareContainer");
const child = document.querySelector(".child")
const btn = document.querySelector("button")
let count = 0;
function getRandomInt(min, max)
{
    min = Math.ceil(min);
    max = Math.max(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getGridCount()
{
    let gc = prompt("choose grid count. ");
    if (gc <= 100)
    {
        return gc;
    }
    else{
        alert("Please choose a number lower than 100.");
    }
}
function createGrid(gridCount)
{
    for (let i =0; i< gridCount*gridCount; i++)
    {  
        const gridSquare = document.createElement("div"); //creates the div 
        gridSquare.classList.add("gridSquare"); //creates the class name
        gridSquare.style.width = 512/gridCount + "px";
        gridSquare.style.height = 512/gridCount+ "px";
        gridSquare.addEventListener("mouseover",()=>{
            gridSquare.style.background="green";
        });
        gridSquare.addEventListener("mouseout",()=>{
            gridSquare.style.background=`rgb(${getRandomInt(0,255)}, ${getRandomInt(0,255)},${getRandomInt(0,255)}`;
        });
        gridSquare.addEventListener("click",()=>{
            gridSquare.style.background="red";
        });
        
        child.appendChild(gridSquare) //appends it to the container.
        
    }
}
btn.addEventListener("click", ()=>{
    if (count === 1)
    {
        window.location.reload();
    }
    else
    {
        createGrid(getGridCount());
        btn.textContent = "lets do it again!"
        count ++;
    }
});