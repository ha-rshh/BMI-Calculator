// BMI = weight (kg) / [height (m)]^2
// BMI = [weight (kg) / height (cm)]^2 x 10,000

// BMI = weight (pounds) / [height (in)]^2 x 703

// If you weigh 70 kg and are 1.70 m tall, your BMI is 24.22.
// Square your height: 1.70 x 1.70 = 2.89BMICalculator/script.js
// Divide your weight by your height squared: 70 / 2.89 = 24.22

const age = document.getElementById("age-input");
const userHeight = document.getElementById("height-input");
const userWeight = document.getElementById("weight-input");
const calculateButton = document.getElementById("calc-btn");
const resultContainer = document.getElementById("result-container");

calculateButton.addEventListener("click", () => {
  let height = userHeight.value;
  let weight = userWeight.value;
  let bmiValue = weight / ((height * height) / 10000).toFixed(2);
  let newEle = document.createElement("div");
  newEle.innerText = bmiValue.toFixed(2);

  resultContainer.appendChild(newEle);
});
