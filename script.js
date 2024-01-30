const container = document.getElementById("grid-container");

const userColor = document.querySelectorAll("input");

function createGrid(numOfSquares) {
  let dimension = numOfSquares * 34 + 5;
  container.style.width = `${dimension}px`;
  container.style.height = `${dimension}px`;

  container.textContent = "";

  for (let i = 0; i <= numOfSquares; i++) {
    for (let j = 0; j <= numOfSquares; j++) {
      const div = document.createElement("div");
      div.classList.add("grid-item");

      div.style.width = "10px";
      div.style.height = "10px";

      container.appendChild(div);

      // var mouseEvent = document.getElementById("grid-item");
      // mouseEvent.addEventListener("mouseover", func);

      // function func (){
      //   var.item = document.getElementById("grid-items");
      //   item.setAttribute("style", background-color, "blue")
      // }
    }
  }
}

createGrid(5);
