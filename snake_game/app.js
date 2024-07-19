let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

let cellSize = 40;
let boardHeight = 600;
let boardWidth = 1500;
let direction = "right";

let snakeCells = [[0, 0]];
let food = foodGenerate();
let score = 0;
let scoreValueElement = document.getElementById("scoreValue");
// let gameMessageElement = document.getElementById("gameMessage");

function draw() {
  ctx.clearRect(0, 0, boardWidth, boardHeight);

  for (let cell of snakeCells) {
    ctx.fillStyle = "gold";
    ctx.fillRect(cell[0], cell[1], cellSize, cellSize);

    ctx.fillStyle = "red";
    ctx.fillRect(food[0], food[1], cellSize, cellSize);

    // Draw game over message if present
    //     if (gameMessageElement.innerText) {
    //       ctx.fillStyle = "red";
    //       ctx.font = "30px Arial"; // Adjust font size here
    //       ctx.textAlign = "center";
    //       ctx.fillText(
    //         gameMessageElement.innerText,
    //         boardWidth / 2,
    //         boardHeight / 2
    //       );
    //     }

    scoreValueElement.textContent = score;
  }
}

function update() {
  let headX = snakeCells[snakeCells.length - 1][0];
  let headY = snakeCells[snakeCells.length - 1][1];

  // let newHeadX = headX + cellSize;
  // let newHeadY = headY;
  let newHeadX = headX;
  let newHeadY = headY;

  if (direction === "right") {
    newHeadX = headX + cellSize;
    newHeadY = headY;
  } else if (direction === "left") {
    newHeadX = headX - cellSize;
    newHeadY = headY;
  } else if (direction === "up") {
    newHeadY = headY - cellSize;
    newHeadX = headX;
  } else {
    newHeadY = headY + cellSize;
    newHeadX = headX;
  }
  if (newHeadX >= boardWidth) {
    newHeadX = 0;
  } else if (newHeadX < 0) {
    newHeadX = boardWidth - cellSize;
  }
  if (newHeadY >= boardHeight) {
    newHeadY = 0;
  } else if (newHeadY < 0) {
    newHeadY = boardHeight - cellSize;
  }

  //   snake self-collision
  for (let cell of snakeCells) {
    if (cell[0] === newHeadX && cell[1] === newHeadY) {
      //   showMessage('game over')
      alert("!! Game-Over LOSER..!!");
      gameReset();
      return;
    }
  }

  //    snake food
  if (newHeadX === food[0] && newHeadY === food[1]) {
    score = score+2;
    food = foodGenerate();
  } else {
    snakeCells.shift();
  }
  snakeCells.push([newHeadX, newHeadY]);
}
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowUp" && direction !== "down") {
    direction = "up";
  } else if (e.key === "ArrowDown" && direction !== "up") {
    direction = "down";
  } else if (e.key === "ArrowRight" && direction !== "left") {
    direction = "right";
  } else if (e.key === "ArrowLeft" && direction !== "right") {
    direction = "left";
  }
});

function foodGenerate() {
  let foodX = Math.round(Math.random() * (boardWidth / cellSize)) * cellSize;
  let foodY = Math.round(Math.random() * (boardHeight / cellSize)) * cellSize;
  return [foodX, foodY];
}

function gameReset() {
  snakeCells = [[0, 0]];
  direction = "right";
  food = foodGenerate();
  score = 0;
  hideMessage();
}

// function showMessage(msg){
//     gameMessageElement.innerText = msg
//     console.log(msg)
// }

function hideMessage() {
  gameMessageElement.innerText = "";
}

setInterval(function () {
  update();
  draw();
}, 100);
