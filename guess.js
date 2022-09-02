let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  if (!guess) {
    document.querySelector(".message").textContent = "No number";
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Too High";
      document.querySelector(".score").textContent = score = score - 1;
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Too low";
      document.querySelector(".score").textContent = score = score - 1;
    }
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number!";
    document.querySelector(".number").textContent = guess;
    document.querySelector("body").style.backgroundColor = "#008000";
  }

  document.querySelector(".again").addEventListener("click", function () {
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".score").textContent = "20";
    document.querySelector(".guess").value = "";
    document.querySelector(".message").textContent = "Start guessing :)";
  });
});
