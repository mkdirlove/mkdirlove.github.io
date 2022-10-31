function clickYes() {
    document.write ("Really! Me too!");
}
function moveMouse() {
    var randomLeft = Math.round(Math.random() * window.innerWidth);
    var randomRight = Math.round(Math.random() * window.innerHeight);
    document.getElementById("no").style.left = randomLeft + "px";
    document.getElementById("no").style.top = randomRight + "px";
}
