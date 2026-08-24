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