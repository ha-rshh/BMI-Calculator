// BMI = weight (kg) / [height (m)]^2
// BMI = [weight (kg) / height (cm)]^2 x 10,000

// BMI = weight (pounds) / [height (in)]^2 x 703

// If you weigh 70 kg and are 1.70 m tall, your BMI is 24.22.
// Square your height: 1.70 x 1.70 = 2.89BMICalculator/script.js
// Divide your weight by your height squared: 70 / 2.89 = 24.22

const age = document.getElementById("age-input");
const height = document.getElementById("height-input");
const weight = document.getElementById("weight-input");
const calculateButton = document.getElementById("calc-btn");
const resultContainer = document.getElementsByClassName("result-container");

calculateButton.addEventListener("click", () => {
  if (height.value == "" && weight.value == "") {
    alert("bhai kuch likho to");
  } else {
    let bmi = Math.pow(height.value / weight.value, 2) * 10000;
    console.log(Math.round(bmi));

    let result = document.createElement("div");
    result.innerText = bmi;
    // resultContainer.innerText(result)
  }
});
