let operator;
let number1;
let number2;
let multiplicacion;
let values;
let value;
let check = false;
let text1 = "";
let theme;
let color;
let toggleButton = document.querySelector(".switch");
let bodyColour = document.querySelector("body");
let displayOperator = document.querySelector(".displayOperator");

// Theme on load

window.onload = function () {
  if (localStorage.getItem("theme") != null) {
    theme = localStorage.getItem("theme");
    color = localStorage.getItem("color");
    toggleButton.classList.replace("switch1", theme);
    bodyColour.classList.replace("color1", color);
  } else {
    toggleButton.classList.add("switch1");
    bodyColour.classList.add("color1");
  }

  setTimeout(() => {
    document.querySelector("body").style.opacity = "1";
  }, 600);
};

// Theme Switch

$(".switch").click(function (e) {
  let actualTheme;
  let actualColor;

  if (toggleButton.classList.contains("switch1")) {
    toggleButton.classList.replace("switch1", "switch2");
    bodyColour.classList.replace("color1", "color2");
    actualTheme = toggleButton.classList[1];
    localStorage.setItem("theme", actualTheme);
    actualColor = bodyColour.classList[0];
    localStorage.setItem("color", actualColor);
  } else if (toggleButton.classList.contains("switch2")) {
    toggleButton.classList.replace("switch2", "switch3");
    bodyColour.classList.replace("color2", "color3");
    actualTheme = toggleButton.classList[1];
    localStorage.setItem("theme", actualTheme);
    actualColor = bodyColour.classList[0];
    localStorage.setItem("color", actualColor);
  } else if (toggleButton.classList.contains("switch3")) {
    toggleButton.classList.replace("switch3", "switch1");
    bodyColour.classList.replace("color3", "color1");
    actualTheme = toggleButton.classList[1];
    localStorage.setItem("theme", actualTheme);
    actualColor = bodyColour.classList[0];
    localStorage.setItem("color", actualColor);
  }
});

// Calculator Keys

$(".keyNumber").click(function (e) {
  if (check === false) {
    value = e.target.innerHTML;

    $(".display").append(value);
  } else {
  }
});

$(".zero").click(function (e) {
  if (check === false) {
    value = e.target.innerHTML;
    if ($(".display").text()[0] == "0") {
      if ($(".display").text()[1] == ",") {
        $(".display").append(value);
      } else {
      }
    } else {
      $(".display").append(value);
    }
  } else {
  }
});

// Point

$(".keyPoint").click(function (e) {
  if (check === false) {
    let punto = ",";

    if ($(".display").text().search(punto) !== -1) {
      console.log("ya existe un punto");
    } else {
      if ($(".display").text().length < 1) {
        $(".display").append("0,");
      } else {
        $(".display").append(",");
      }
    }
  } else {
  }
});

// Igual

$("#equal").click(function () {
  calculadora(number1, operator);
  text1 = "";
  check = true;
});

// Delete

$(".keyDelete").click(function () {
  if (check === false) {
    let str = $(".display").text();
    str = str.substring(0, str.length - 1);
    $(".display").text(str);
    check = false;
  } else {
  }
});

// Plus

$(".keyPlus").click(function () {
  if (text1.length === 0) {
    text1 = $(".display").text();
  } else {
  }

  number1 = parseFloat(text1.replace(",", "."));
  operator = "*";
  $(".display").text("");
  $(".displayOperator").text("x");
  check = false;
});

// Minus

$(".keyMinus").click(function () {
  if (text1.length === 0) {
    text1 = $(".display").text();
  } else {
  }

  number1 = parseFloat(text1.replace(",", "."));
  operator = "-";
  $(".display").text("");
  $(".displayOperator").text("-");
  check = false;
});

// Sum

$(".keySum").click(function () {
  if (text1.length === 0) {
    text1 = $(".display").text();
  } else {
  }

  number1 = parseFloat(text1.replace(",", "."));
  operator = "+";
  $(".display").text("");
  $(".displayOperator").text("+");
  check = false;
});

// Divide

$(".keyDivide").click(function () {
  if (text1.length === 0) {
    text1 = $(".display").text();
  } else {
  }

  number1 = parseFloat(text1.replace(",", "."));
  operator = "/";
  $(".display").text("");
  $(".displayOperator").text("/");
  check = false;
});

// Reset

$("#reset").click(function () {
  operator = "";
  number1 = "";
  number2 = "";
  text1 = "";
  $(".display").text("");
  $(".displayOperator").text("");
  check = false;
});

// Calculator Function

const calculadora = (number1, operator) => {
  let text2 = $(".display").text();
  if (text2 == "") {
    text2 = "0";
    $(".display").text(text2);
  } else {
    text2 = $(".display").text();
  }
  number2 = parseFloat(text2.replace(",", "."));

  let calculo;
  let resultado;
  let final;
  if (operator === "*") {
    calculo = Number((number1 * number2).toFixed(5));
  } else if (operator === "+") {
    calculo = Number((number1 + number2).toFixed(5));
  } else if (operator === "-") {
    calculo = Number((number1 - number2).toFixed(5));
  } else if (operator === "/") {
    calculo = Number((number1 / number2).toFixed(5));
  }

  resultado = calculo.toString();
  final = resultado.replace(".", ",");
  $(".display").text(final);
  $(".displayOperator").text("");
};
