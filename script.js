function pressButton() {
    let number = document.createElement("div");

    number.textContent = "+1";
    number.className = "floatingNumber";

    document.body.appendChild(number);

    number.addEventListener("animationend", function() {
        number.remove();
    });
}
