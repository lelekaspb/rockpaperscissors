window.addEventListener("DOMContentLoaded", start);

let winner;
let userChoice;
let computerChoice;
const players = document.querySelectorAll(".player");
const user = document.querySelector("#player1");
const computer = document.querySelector("#player2");
const buttons = document.querySelector("#buttons");
const choiceList = ["rock", "paper", "scissors"];
const textWin = document.querySelector("#win");
const textLose = document.querySelector("#lose");
const textDraw = document.querySelector("#draw");
const texts = document.querySelectorAll("#texts div");

function start() {
  console.log("start");
  buttons.addEventListener("click", function (e) {
    // console.log(e.target.classList);
    players.forEach((player) => {
      player.className = "player";
    });
    texts.forEach((item) => {
      item.className = "hidden";
    });

    getPlayerChoice(e.target.classList);
  });
}

function getPlayerChoice(classes) {
  console.log("getPlayerChoice");
  // console.log(classes);
  userChoice = classes[0];
  console.log("user choice is", userChoice);
  makerandomComputerChoice();
}

function makerandomComputerChoice() {
  console.log("makerandomComputerChoice");
  const index = Math.floor(Math.random() * 3);
  computerChoice = choiceList[index];
  console.log("computer choice is", computerChoice);
  showAnimations();
}

function showAnimations() {
  console.log("showAnimations");
  players.forEach((player) => {
    player.classList.add("shake");
  });
  determinWinner();
}

function determinWinner() {
  console.log("determinWinner");

  switch (true) {
    case userChoice === "scissors" && computerChoice === "paper":
      console.log("userChoice ===scissors && computerChoice === paper");
      winner = "user";
      user.classList.add("scissors");
      computer.classList.add("paper");
      break;
    case userChoice === "rock" && computerChoice === "scissors":
      console.log("userChoice ===rock && computerChoice === scissors");
      winner = "user";
      user.classList.add("rock");
      computer.classList.add("scissors");
      break;
    case userChoice === "paper" && computerChoice === "scissors":
      console.log("userChoice ===paper && computerChoice === scissors");
      winner = "computer";
      user.classList.add("paper");
      computer.classList.add("scissors");
      break;
    case userChoice === "paper" && computerChoice === "rock":
      console.log("userChoice ===paper && computerChoice === rock");
      winner = "user";
      user.classList.add("paper");
      computer.classList.add("rock");
      break;
    case userChoice === "rock" && computerChoice === "paper":
      console.log("userChoice ===rock && computerChoice === paper");
      winner = "computer";
      user.classList.add("rock");
      computer.classList.add("paper");
      break;
    case userChoice === "scissors" && computerChoice === "rock":
      console.log("userChoice ===scissors && computerChoice === rock");
      winner = "computer";
      user.classList.add("scissors");
      computer.classList.add("rock");
      break;
    case userChoice === "scissors" && computerChoice === "scissors":
      console.log("userChoice ===scissors && computerChoice === scissors");
      winner = "draw";
      user.classList.add("scissors");
      computer.classList.add("scissors");
      break;
    case userChoice === "rock" && computerChoice === "rock":
      console.log("userChoice ===rock && computerChoice === rock");
      winner = "draw";
      user.classList.add("rock");
      computer.classList.add("rock");
      break;
    case userChoice === "paper" && computerChoice === "paper":
      console.log("userChoice ===paper && computerChoice === paper");
      winner = "draw";
      user.classList.add("paper");
      computer.classList.add("paper");
      break;
  }

  if (winner === "computer") {
    showLose();
  } else if (winner === "user") {
    showWin();
  } else {
    showDraw();
  }
}

function showWin() {
  console.log("showWin");
  players.forEach((player) => {
    player.addEventListener("animationend", function funk() {
      textWin.classList.remove("hidden");
      player.classList.remove("shake");
      player.removeEventListener("animationend", funk);
    });
  });
}

function showLose() {
  console.log("showLose");
  players.forEach((player) => {
    player.addEventListener("animationend", function funk() {
      textLose.classList.remove("hidden");
      player.classList.remove("shake");
      player.removeEventListener("animationend", funk);
    });
  });
}

function showDraw() {
  console.log("showDraw");
  players.forEach((player) => {
    player.addEventListener("animationend", function funk() {
      textDraw.classList.remove("hidden");
      player.classList.remove("shake");
      player.removeEventListener("animationend", funk);
    });
  });
}
