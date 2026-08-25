let button = document.getElementById("button");
let title = document.getElementById("title");

button.onclick = function() {
    title.textContent="Hello, World!";
}

let ageButton = document.getElementById("ageButton");

ageButton.onclick = function() {
    let ageValue = document.getElementById("ageValue");
    let result = document.getElementById("result");

    if (ageValue.value >= 18) {
        result.textContent = "You are eligible";

    }

    else {
        result.textContent = "You are under 18";
    }
}

let loginButton = document.getElementById("loginButton");

loginButton.onclick = function() {
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let loginResult = document.getElementById("loginResult");

    if (username.value === "admin" && password.value === "1234") {
        loginResult.textContent = "Login successful";
    }

    else {
        loginResult.textContent= "Invalid username or password";
    }
}


function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}


function divide(num1,num2) {
    if (num2 === 0) {
        return "Error: cannot be 0";
    }

    else {
        return num1/num2;
    }
}

let addButton = document.getElementById("add");
let subtractButton = document.getElementById("subtract");
let multiplyButton = document.getElementById("multiply");
let divideButton = document.getElementById("divide");


addButton.onclick = function() {
    let num1 = parseFloat(document.getElementById("num1") .value);
    let num2 = parseFloat(document.getElementById("num2") .value);
    let resultboxx = document.getElementById("resultBoxx");
    resultboxx.textContent = add(num1, num2);
}

subtractButton.onclick = function() {
    let num1 = parseFloat(document.getElementById("num1") .value);
    let num2 = parseFloat(document.getElementById("num2") .value);
    let resultboxx = document.getElementById("resultBoxx");
    resultboxx.textContent = subtract(num1, num2);
}

multiplyButton.onclick = function() {
    let num1 = parseFloat(document.getElementById("num1") .value);
    let num2 = parseFloat(document.getElementById("num2") .value);
    let resultboxx = document.getElementById("resultBoxx");
    resultboxx.textContent = multiply(num1, num2);
}

divideButton.onclick = function() {
    let num1 = parseFloat(document.getElementById("num1") .value);
    let num2 = parseFloat(document.getElementById("num2") .value);
    let resultboxx = document.getElementById("resultBoxx");
    resultboxx.textContent = divide(num1, num2);
}

    




