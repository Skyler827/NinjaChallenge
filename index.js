var leftValue = 450;
var topValue = 100;
var stepSize = 20;
document.onkeydown = function(e) {
    //console.log(e);
    let screen_width = 500;
    let screen_height = 500;
    var ninjastyle = document.getElementById("character").style;
    switch(e.keyCode) {
        case 37: //Left
            if (leftValue >= stepSize) {
                leftValue -= stepSize
            } else {
                leftValue = 0;
            }
            break;
        case 39: //Right
            if (leftValue + stepSize + ninjastyle.width <= screen_width) {
                leftValue += stepSize;
            } else {
                leftValue = screen_width - ninjastyle.width;
            }
            break;
        case 38: //Up
            if (topValue >= stepSize) {
                topValue -= stepSize;
            } else {
                topValue = 0;
            }
            break;
        case 40: //Down
            if (topValue + stepSize + ninjastyle.height <= screen_height) {
                topValue += stepSize;
            } else {
                topValue = screen_height - ninjastyle.height;
            }
            break;
        }
    document.getElementById("character").style.left = leftValue + "px";
    document.getElementById("character").style.top = topValue + "px";
    console.log("leftValue = " +leftValue);
    console.log("topValue = "+topValue);
    console.log("screen width: "+screen_width);
    console.log("screen height: "+screen_height)
}