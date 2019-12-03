//! JavaScript functions for tarieven.html


var extraInfo = document.getElementById("footer");

function hide() {
    extraInfo.style.bottom = 0;
    console.log("hello");
    setTimeout(goDown, 5000);
}

function goDown(){
    extraInfo.style.bottom = "-50px";
}


