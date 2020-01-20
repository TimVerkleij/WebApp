//!  JavaScript functions for reserveren.html

//TODO maakt variabelen aan om te achterhalen welke dag het is.
var selectedDate = document.getElementsByTagName('input')[0];
var selectedDay = document.getElementsByTagName('input')[0];

//TODO maakt variabelen aan voor de dag, maand en jaar.

let today = moment(new Date()).format('YYYY-MM-DD');

let tomorrow  = moment(new Date()).add(1,'days').format('YYYY-MM-DD');
let maxReservation = moment(new Date()).add(2, 'months').format('YYYY-MM-DD')


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

    if (bert.disabled) {
        bert2.src = '/images/stoel_bezet.png';
    }
    if (ernie.disabled) {
        ernie2.src = '/images/stoel_bezet.png';
    }
    if (samson.disabled) {
        samson2.src = '/images/stoel_bezet.png';
    }
    if (gert.disabled) {
        gert2.src = '/images/stoel_bezet.png';
    }

    submitBtn.style.display = "inline";
    window.scrollBy(0, 300);
}