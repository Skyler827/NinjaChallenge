//Config variables:
let stepSize = 20;
let screen_width = 500;
let screen_height = 500;

//Ninja state variables:
var leftValue = 450;
var topValue = 100;
var direction = "down";
var imagenumber = "1";
function change_variables(e) {
    var ninjastyle = document.getElementById("character").style;

    switch(e.keyCode) {
        case 37: //Left
            direction = "left";
            if (leftValue >= stepSize) {
                leftValue -= stepSize
            } else {
                leftValue = 0;
            }
            break;
        case 39: //Right
            direction = "right";
            if (leftValue + stepSize + ninjastyle.width <= screen_width) {
                leftValue += stepSize;
            } else {
                leftValue = screen_width - ninjastyle.width;
            }
            break;
        case 38: //Up
            direction = "top";
            if (topValue >= stepSize) {
                topValue -= stepSize;
            } else {
                topValue = 0;
            }
            break;
        case 40: //Down
            direction = "down";
            if (topValue + stepSize + ninjastyle.height <= screen_height) {
                topValue += stepSize;
            } else {
                topValue = screen_height - ninjastyle.height;
            }
            break;
        }
}
function update_ninja() {
    var ninjastyle = document.getElementById("character").style;
    if (imagenumber == "1") {imagenumber = "2"}
    else if (imagenumber == "2") {imagenumber = "1"} 
    ninjastyle.left = leftValue + "px";
    ninjastyle.top = topValue + "px";
    ninjastyle.backgroundImage = "url('img/"+direction+imagenumber+".png')";
}
document.onkeydown = function(e) {
    change_variables(e);
    update_ninja();
}