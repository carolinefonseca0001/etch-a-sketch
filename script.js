const container = document.getElementById("grid-container");

// const userColor = document.querySelectorAll("input");

function createGrid(numOfSquares, size) {
  let dimension = numOfSquares * size + 0;
  container.style.width = `${dimension}px`;
  container.style.height = `${dimension}px`;

  container.textContent = "";

  for (let i = 0; i <= numOfSquares; i++) {
    for (let j = 0; j <= numOfSquares; j++) {
      const div = document.createElement("div");
      div.classList.add("grid-item");

      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.addEventListener("mouseover", function () {
        div.style.backgroundColor = "black";
      });
      container.appendChild(div);
    }
  }
}

createGrid(16, 30);

const refreshButton = document.querySelector(".refresh-button");

const refreshPage = () => {
  location.reload();
};

refreshButton.addEventListener("click", refreshPage);
