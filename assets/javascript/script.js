var words = ["banana", "apple", "watermelon", "kiwi"];
var input_content = document.getElementsByClassName("input-content");
var answer;
var answerArray = [];
var guessedArray = []; //!!!!
var guessedLetter = document.getElementById("guessedLetter");
var divText;
var underscores;
var createDiv;
var element = document.getElementById("input-content");
var lives = 5;
var lives_ = document.getElementById("lives");
var gameover = document.getElementById("game-over");
var create_h1;
var createLives;
var livesElement;
var gameLabel = document.getElementById("game-label");

document.querySelector(".btn-primary").addEventListener("click", displayData);

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
  updateLives();
  console.log(answer);
  document.addEventListener("keyup", function (e) {
    checkAnswer(e);
    checkLives(e);
    updateLives();
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
  if (!answerArray.includes(e.key)) {
    lives--;
    if (!guessedArray.includes(e.key)) {
      guessedArray.push(e.key);
      //updates guess array
      var createGuessH1 = document.createElement("h1");
      var createGuessText = document.createTextNode(guessedArray.join(" "));
      createGuessH1.appendChild(createGuessText);
      guessedLetter.innerHTML = createGuessH1.textContent;
    }

    console.log(createGuessH1);

    console.log(guessedArray);
    createLives.innerHTML = `Lives: ${lives}`;
    if (lives === 0) {
      gameover.style.display = "block";
      gameLabel.style.display = "none";
      setTimeout(() => {
        setTimeout(location.reload());
      }, 3000);
    }
  }
}

function updateLives() {
  create_h1 = document.createElement("h1");
  createLives = document.createTextNode(`Lives: ${lives}`);
  livesElement = document.getElementById("lives");
  create_h1.innerHTML = createLives.textContent;
  livesElement.innerHTML = create_h1.textContent;
}
//bug = lives still subtracting even with the right key press
