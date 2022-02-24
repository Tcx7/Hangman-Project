var words = ["banana", "apple", "watermelon", "kiwi"];
var input_content = document.getElementsByClassName("input-content");
var answer;
var answerArray = [];
var divText;
var underscores;
var createDiv;
var element = document.getElementById("input-content");
var lives = 5;
document.querySelector(".btn-primary").addEventListener("click", displayData);
var gameover = document.getElementById("game-over");

function displayData() {
  lives = 5;
  element.innerHTML = "";
  underscores = [];
  answerArray = [];
  answer = words[Math.floor(Math.random() * words.length)];
  createDiv = document.createElement("p");
  for (let i = 0; i < answer.length; i++) {
    underscores.push("_ ");
  }
  convertToArray();
  divText = document.createTextNode(underscores.join(" "));
  createDiv.appendChild(divText);
  element.appendChild(createDiv);
  console.log(answer);
  document.addEventListener("keyup", function (e) {
    checkAnswer(e);
    checkLives(e);
  });
}

function convertToArray() {
  for (let i = 0; i < answer.length; i++) {
    answerArray.push(answer.charAt(i));
  }
}

function checkAnswer(e) {
  for (let i = 0; i < answerArray.length; i++) {
    if (answerArray[i] === e.key) {
      underscores[i] = answerArray[i];
      divText = document.createTextNode(underscores.join(" "));
      element.innerHTML = divText.textContent;
    }
  }
}
function checkLives(e) {
  for (let i = 0; i < answerArray.length; i++) {
    if (e.key != answerArray[i]) {
      lives--;
      if (lives === 0) {
        // input game over overlay
        gameover.style.display = "block";
        console.log("gameover");
        break;
      }
      break;
    }
  }
}

// for (let i = 0; i < answerArray; i++) {
//   if (e.key === "e") {
//     console.log("correct key");
//   }
// }
// function keyevent() {
//   document.addEventListener("keyup", function (userEvent) {
//     if (answer.indexOf("userEvent.key")) {
//       console.log("e");
//     }
//   });
// }
//answer.indexOf("userEvent.key")
