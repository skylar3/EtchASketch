const gridSquareContainer = document.querySelector("#gridSquareContainer");




for (let i = 0; i <16; i++)
{
        const square = document.createElement("div");
        square.addEventListener("mouseover", () =>
        {
            square.style.backgroundColor = "blue";

        });
        square.classList.add("square");
        gridSquareContainer.appendChild(square);
}