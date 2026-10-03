let addScoreValue = 1
let scoreMultiplier = 1
let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", function(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

function pressButton() {
    let number = document.createElement("div");

    number.textContent = "+" + (addScoreValue * scoreMultiplier);
    number.className = "floatingNumber";

    document.body.appendChild(number);

    number.addEventListener("animationend", function() {
        number.remove();
    });
}
