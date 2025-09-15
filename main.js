const input = document.getElementById("number");
const button = document.getElementById("calcBtn");
const resultbox = document.getElementById("result");

button.addEventListener("click", function () {
  const num = input.value;

  //validation and calculation
  if (num === "" || isNaN(num) || Number(num) < 0) {
    resultbox.textContent = "Please enter a valid number!";
    resultbox.style.color = "red";
  } else {
    const value = Number(num);
    const result = factorial(value);
    resultbox.textContent = value + "! = " + result;
    resultbox.style.color = "green";
  }
});