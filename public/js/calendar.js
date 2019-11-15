/* JavaScript functions voor Testing.html file */

//maakt variabelen aan om te achterhalen welke dag het is.
var selectedDate = document.getElementsByTagName('input')[0];
var selectedDay = document.getElementsByTagName('input')[0];

//maakt variabelen aan voor de dag, maand en jaar.
var today = new Date();
var tomorrow = new Date();
var dd = today.getDate();
var dd2 = today.getDate()+1;
var mm = today.getMonth()+1; //January is 0!
var mm2 = today.getMonth()+1;
var yyyy = today.getFullYear();
 
//zorgt ervoor dat er bij de dagen 1 tot en met 9 een 0 staat voor het getal. 9 april 2019 wordt
//  bijvoorbeeld 09-04-2019
    if(dd<10){
        dd='0'+dd
    }

    if(dd2<10){
        dd2= '0' +dd2;
    }

    if(mm2<10){
        mm2== '0' +mm2;
    }

    if(mm<10){
        mm='0'+mm
    }

    if(yyyy % 4 == 0 && mm2 == 2 && dd == 29){
        dd2 = '0' + 1;
        mm2 = '0'+3;
    } else {
        if(mm2 == 1 || mm2 == 3 || mm2 == 5 ||mm2 == 7 ||mm2 == 8 ||mm2 == 10 ||mm2 == 12){
            if(dd == 31){
                    dd2 = '0' + 1;
                if(mm>=10){
                        mm2 = mm2 + 1;
                    }
                if(mm<10){
                        mm2 = mm - '0';
                        mm2 = mm2 + 1;
                    if(mm2<10){
                        mm2= '0' + mm2;
                    }
                }
            }
        }
        if(mm2 == 4 || mm2 == 6 || mm2 == 9 || mm2 == 11){
            if(dd == 30){
                dd2 = '0' +1;
                if(mm<10){
                    mm2 = mm - '0';
                    mm2 = mm2 + 1;
                    if(mm2<10){
                        mm2= '0' + mm2;
                    }
                }
            }
        }
        if(mm2 == 2){
            if(dd == 28){
                dd2 = '0' +1;
                mm2 = '0' +3;
            }
        }
}

today = yyyy+'-'+mm+'-'+dd;
tomorrow = yyyy+'-'+mm2+'-'+dd2;
document.getElementById("date").setAttribute("min", tomorrow); //zorgt ervoor dat je alleen een datum kan kiezen die later is dan vandaag
document.getElementById("date").setAttribute("value", today); //zet de waarde van de input op vandaag


function datumgekozen(){
    document.getElementById("time").style.visibility = 'visible';
    var help = document.getElementById("date").getAttribute("value");
    // zorgt ervoor dat een aantal data niet geselecteerd kunnen worden.
    document.getElementById("14.30").setAttribute("disabled", true);
    document.getElementById("15.30").setAttribute("disabled", true);
    document.getElementById("12").setAttribute("disabled", true);
    document.getElementById("9").setAttribute("disabled", true);
    document.getElementById("10").setAttribute("disabled", true);
}

function ready(){ //maakt extra tekst zichtbaar zodra de gebruiker klaar is met een datum en tijd selecteren.
    var datum = document.getElementById("date").value;
    var tijd = document.getElementById("time").value;
    var datumstrng = datum.toString();
    document.getElementById("p1").style.visibility = 'visible';
    document.getElementById("p2").style.visibility = 'visible';
    document.getElementById("stoelen").style.display = 'inline';
    document.getElementById("p1").innerHTML = "De geselecteerde datum is: " + "</br>" + (datumstrng + " om " + tijd + " uur.").bold();
    window.scrollBy(0, 300);
}

function stoelGekozen() {
	var a = document.getElementById('a');
	var b = document.getElementById('b');
	var c = document.getElementById('c');
    var d = document.getElementById('d');
    
	var a2 = document.getElementById('imgA');
	var b2 = document.getElementById('imgB');
	var c2 = document.getElementById('imgC');
    var d2 = document.getElementById('imgD');
    
    if (a.checked) {
        a2.src = '/images/stoel_bezet.png';
        console.log("Bert");
    }else{
        a2.src = '/images/stoel_vrij.png';
    }

    if (b.checked) {
        b2.src = '/images/stoel_bezet.png';
        console.log("Ernie");
    }else{
        b2.src = '/images/stoel_vrij.png';
    }

    if (c.checked) {
        c2.src = '/images/stoel_bezet.png';
        console.log("Samson");
    }else{
        c2.src = '/images/stoel_vrij.png';
    }	

    if (d.checked) {
        d2.src = '/images/stoel_bezet.png';
        console.log("Gert");
    } else{
        d2.src = '/images/stoel_vrij.png';
    }
}