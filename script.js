let addScoreValue = 1
let scoreMultiplier = 1

function pressButton() {
    let number = document.createElement("div");

    number.textContent = "+" + (addScoreValue * scoreMultiplier);
    number.className = "floatingNumber";

    document.body.appendChild(number);

    number.addEventListener("animationend", function() {
        number.remove();
    });
}
