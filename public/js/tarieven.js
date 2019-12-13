//! JavaScript functions for tarieven.html


var extraInfo = document.getElementById("footer");

function hide() {
    extraInfo.style.bottom = 0;
    setTimeout(goDown, 5000);
}

function goDown(){
    extraInfo.style.bottom = "-100px";
}


