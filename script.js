//Non modern Calculator without the buttons

function addition() {
  let number1 = parseInt(document.getElementById("input1").value);
  let number2 = parseInt(document.getElementById("input2").value);
  let calculate;
  calculate = number1 + number2;
  document.getElementById("input3").value = calculate;
}

function subtraction() {
  let number1 = parseInt(document.getElementById("input1").value);
  let number2 = parseInt(document.getElementById("input2").value);
  let calculate1;
  calculate = number1 - number2;
  document.getElementById("input3").value = calculate;
}

function multiplication() {

  let number1 = parseInt(document.getElementById("input1").value);
  let number2 = parseInt(document.getElementById("input2").value);
  let calculate;
  calculate = number1 * number2;
  document.getElementById("input3").value = calculate;
}

function division() {
  let number1 = parseInt(document.getElementById("input1").value);
  let number2 = parseInt(document.getElementById("input2").value);
  let calculate;
  calculate = number1 / number2;
  document.getElementById("input3").value = calculate;
}

function remainder() {
  let number1 = parseInt(document.getElementById("input1").value);
  let number2 = parseInt(document.getElementById("input2").value);
  let calculate;
  calculate = number1 % number2;
  document.getElementById("input3").value = calculate;
}

function clear() {
  document.getElementById("output").reset();
}

// ------------------------------------------------------------------------------------------------------

// Temperature degree converter

function calculate() {

  var inputValue = parseInt(document.getElementById("input01").value);
  var calculate;

  var temperature = document.getElementById("temperatures").value;

  if(temperature == "Fahrenheit") {

      calculate = Math.round((inputValue - 32) * 0.555);
      document.getElementById("Celsius").value = calculate;

      calculate = Math.round((inputValue - 32) * 0.555 + 273.15);
      document.getElementById("Kelvin").value = calculate;

      document.getElementById("Fahrenheit").value = "";


  }

  else if(temperature == "Celsius") {

    calculate = Math.round((inputValue * 0.555) + 32);
    document.getElementById("Fahrenheit").value = calculate;

    calculate = Math.round(inputValue + 273.15);

    document.getElementById("Kelvin").value = calculate;

    document.getElementById("Celsius").value = "";


  }

  else if(temperature == "Kelvin") {

    calculate = Math.round((inputValue - 273.15) * 0.555 + 32);
    document.getElementById("Fahrenheit").value = calculate;

    calculate = Math.round(inputValue - 273.15);
    document.getElementById("Celsius").value = calculate;

    document.getElementById("Kelvin").value = "";

   }

}

//----------------------------------------------------------------------------------------------------

//Code for the distance conversion
