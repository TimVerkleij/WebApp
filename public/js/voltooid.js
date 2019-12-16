var url = new URL(window.location.href);
console.log(url);
var date = url.searchParams.get("date");
var time = url.searchParams.get("time");
var chair = url.searchParams.get("chair");

console.log(date);

var year = date.split("-")[0];
var month = date.split("-")[1];
var day = date.split("-")[2];

if (day.charAt(0) == 0) {
    if (day == 01) {
        day = 1;
    }
    if (day == 02) {
        day = 2;
    }
    if (day == 03) {
        day = 3;
    }
    if (day == 04) {
        day = 4;
    }
    if (day == 05) {
        day = 5;
    }
    if (day == 06) {
        day = 6;
    }
    if (day == 07) {
        day = 7;
    }
    if (day == 08) {
        day = 8;
    }
    if (day == 09) {
        day = 9;
    }
}
defineMonth();

function defineMonth() {
    if (month == 01) {
        month = "januari";
    }
    if (month == 02) {
        month = "februari";
    }
    if (month == 03) {
        month = "maart";
    }
    if (month == 04) {
        month = "april";
    }
    if (month == 05) {
        month = "mei";
    }
    if (month == 06) {
        month = "juni";
    }
    if (month == 07) {
        month = "juli";
    }
    if (month == 08) {
        month = "augustus";
    }
    if (month == 09) {
        month = "september";
    }
    if (month == 10) {
        month = "oktober";
    }
    if (month == 11) {
        month = "november";
    }
    if (month == 12) {
        month = "december";
    }
}

datum = day + " " + month + " " + year;

var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var kapper = document.getElementById("img");

if (chair == "Bert") {
    kapper.src = "/images/bert.jpg";
}

if (chair == "Ernie") {
    kapper.src = "/images/ernie.jpg";
}

if (chair == "Samson") {
    kapper.src = "/images/samson.jpg";
}

if (chair == "Gert") {
    kapper.src = "/images/gert.jpeg";
}

p1.innerHTML = "Uw gekozen datum is: " + datum + "<br>" + "Uw gekozen tijd is: " + time + " uur" + "<br>" + "Uw gekozen kapper is " + chair;
// p2.innerHTML = "Uw gekozen tijd is: " + time + " uur";
// p3.innerHTML = "Uw gekozen kapper is " + chair;

fetch('/api/getdb/' + date + '&' + time + '&' + chair).then(v => v.json()).then(console.log)