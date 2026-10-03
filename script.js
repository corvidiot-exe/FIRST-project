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

    #burst-12 {
      background: red;
      width: 80px;
      height: 80px;
      position: relative;
      text-align: center;
    }
    #burst-12:before,
    #burst-12:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 80px;
      width: 80px;
      background: red;
    }
    #burst-12:before {
      transform: rotate(30deg);
    }
    #burst-12:after {
      transform: rotate(60deg);
    }
