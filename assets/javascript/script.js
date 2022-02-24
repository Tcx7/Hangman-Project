var words = ["banana", "apple", "watermelon", "kiwi"];
var input_content = document.getElementsByClassName("input-content");
var answer;
var answerArray = [];
var divText;
var underscores;
var createDiv;
var element = document.getElementById("input-content");

document.querySelector(".btn-primary").addEventListener("click", displayData);

function displayData() {
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
      console.log("correct letter guessed");
      underscores[i] = answerArray[i];
      // divText = document.createTextNode(underscores.join(" "));
      // createDiv.appendChild(divText);
      // element.appendChild(createDiv);
      // // divText.appendChild(underscores);
      // console.log(underscores);
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
