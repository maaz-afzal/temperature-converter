const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");
const resetBtn = document.getElementById("reset-temp");

function getTemp(event) {
  const temp = +event.target.value;

  switch (event.target.name) {
    case "celsius":
      kelvin.value = (temp + 273.32).toFixed(2);
      fahrenheit.value = (temp * 1.8 + 32).toFixed(2);
      break;
    case "fahrenheit":
      celsius.value = ((temp - 32) / 1.8).toFixed(2);
      kelvin.value = ((temp - 32) / 1.8 + 273.32).toFixed(2);
      break;
    case "kelvin":
      fahrenheit.value = (temp - 273.32).toFixed(2);
      celsius.value = ((temp - 273.32) * 1.8 + 32).toFixed(2);
      break;
  }
}

celsius.addEventListener("input", getTemp);
fahrenheit.addEventListener("input", getTemp);
kelvin.addEventListener("input", getTemp);

resetBtn.addEventListener("click", () => {
  celsius.value = "";
  fahrenheit.value = "";
  kelvin.value = "";
});
