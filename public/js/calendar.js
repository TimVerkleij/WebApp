//!  JavaScript functions for reserveren.html

//TODO maakt variabelen aan om te achterhalen welke dag het is.
var selectedDate = document.getElementsByTagName('input')[0];
var selectedDay = document.getElementsByTagName('input')[0];

//TODO maakt variabelen aan voor de dag, maand en jaar.
var today = new Date();
var tomorrow = new Date();
var dd = today.getDate();
var dd2 = today.getDate() + 1;
var mm = today.getMonth() + 1; //! January is 0!
var mm2 = today.getMonth() + 1;
var mm3 = today.getMonth() + 3;
var yyyy = today.getFullYear();
var yyyy2 = today.getFullYear();

// TODO zorgt ervoor dat er bij de dagen 1 tot en met 9 een 0 staat voor het getal. 9 april 2019 wordt
// TODO  bijvoorbeeld 09-04-2019

if (dd < 10) {
    dd = '0' + dd
}

if (dd2 < 10) {
    dd2 = '0' + dd2;
}

if (mm2 < 10) {
    mm2 == '0' + mm2;
}

if (mm < 10) {
    mm = '0' + mm
}

if (yyyy % 4 == 0 && mm2 == 2 && dd == 29) {
    dd2 = '0' + 1;
    mm2 = '0' + 3;
} else {
    if (mm2 == 1 || mm2 == 3 || mm2 == 5 || mm2 == 7 || mm2 == 8 || mm2 == 10 || mm2 == 12) {
        if (dd == 31) {
            dd2 = '0' + 1;
            if (mm >= 10) {
                mm2 = mm2 + 1;
            }
            if (mm < 10) {
                mm2 = mm - '0';
                mm2 = mm2 + 1;
                if (mm2 < 10) {
                    mm2 = '0' + mm2;
                }
            }
        }
    }
    if (mm2 == 4 || mm2 == 6 || mm2 == 9 || mm2 == 11) {
        if (dd == 30) {
            dd2 = '0' + 1;
            if (mm < 10) {
                mm2 = mm - '0';
                mm2 = mm2 + 1;
                if (mm2 < 10) {
                    mm2 = '0' + mm2;
                }
            }
        }
    }
    if (mm2 == 2) {
        if (dd == 28) {
            dd2 = '0' + 1;
            mm2 = '0' + 3;
        }
    }
}

if (mm == 11) {
    mm3 = '0' + 1;
    yyyy2 = yyyy + 1;
}
if (mm == 12) {
    mm3 = '0' + 2;
    yyyy2 = yyyy + 1;
}
if (mm == 13) {
    mm3 = '0' + 3;
    yyyy2 = yyyy + 1;
}

today = yyyy + '-' + mm + '-' + dd;
tomorrow = yyyy + '-' + mm2 + '-' + dd2;

maxReservation = yyyy2 + '-' + mm3 + '-' + dd;
document.getElementById("date").setAttribute("min", tomorrow); //TODO zorgt ervoor dat je alleen een datum kan kiezen die later is dan vandaag
document.getElementById("date").setAttribute("value", today); //TODO zet de waarde van de input op vandaag
document.getElementById("date").setAttribute("max", maxReservation); //TODO zet de maximale waarde die je kunt invullen op 2 maanden verder

function datumGekozen() {
    document.getElementById("time").style.display = 'inline';
}

function tijdGekozen() { //TODO maakt extra tekst zichtbaar zodra de gebruiker klaar is met een datum en tijd selecteren.
    var datum = document.getElementById("date").value;
    var tijd = document.getElementById("time").value;
    var datumstrng = datum.toString();
    document.getElementById('info').style.display = 'block';
    document.getElementById("stoelen").style.display = 'inline';
    document.getElementById("p1").innerHTML = "De geselecteerde datum is: " + "</br>" + (datumstrng + " om " + tijd + " uur.").bold();
    window.scrollBy(0, 300);
}

var bert = document.getElementById('bert');
var ernie = document.getElementById('ernie');
var samson = document.getElementById('samson');
var gert = document.getElementById('gert');

var bert2 = document.getElementById('imgA');
var ernie2 = document.getElementById('imgB');
var samson2 = document.getElementById('imgC');
var gert2 = document.getElementById('imgD');

var submitBtn = document.getElementById('submitBtn');

function stoelGekozen() {
    if (bert.checked) {
        bert2.src = '/images/stoel_gereserveerd.png';
    } else {
        bert2.src = '/images/stoel_vrij.png';
    }

    if (ernie.checked) {
        ernie2.src = '/images/stoel_gereserveerd.png';
    } else {
        ernie2.src = '/images/stoel_vrij.png';
    }

    if (samson.checked) {
        samson2.src = '/images/stoel_gereserveerd.png';
    } else {
        samson2.src = '/images/stoel_vrij.png';
    }

    if (gert.checked) {
        gert2.src = '/images/stoel_gereserveerd.png';
    } else {
        gert2.src = '/images/stoel_vrij.png';
    }

    if(bert.disabled) {
        bert2.src = '/images/stoel_bezet.png';
    }
    if(ernie.disabled) {
        ernie2.src = '/images/stoel_bezet.png';
    }
    if(samson.disabled) {
        samson2.src = '/images/stoel_bezet.png';
    }
    if(gert.disabled) {
        gert2.src = '/images/stoel_bezet.png';
    }

    submitBtn.style.display = "inline";
    window.scrollBy(0, 300);
}

//! Deprecated functions
// var header = document.getElementById("header");
// header.style.top = "-50px";

// function notDoneYet() {
//     header.style.display = "block";
//     header.style.top = "0";
//     setTimeout(justKidding, 7000);
// }

// function justKidding() {
//     header.innerHTML = "Not Really...";
//     setTimeout(goUp, 2500);
// }

// function goUp() {
//     header.style.top = "-50px";
// }