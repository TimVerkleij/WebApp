//! JavaScript functions for tarieven.html


var extraInfo = document.getElementById("footer");

function hide() {
    extraInfo.style.bottom = 0;
    setTimeout(goDown, 5000);
}

function goDown() {
    extraInfo.style.bottom = "-100px";
}

document.getElementById("reserverenBtn").className = "notFloating";

window.onscroll = function() { scollFunction() };

function scollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("reserverenBtn").className = "floating";
    } else {
        document.getElementById("reserverenBtn").className = "notFloating";
    }
}
