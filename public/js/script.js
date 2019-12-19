function dateChange() {
    fetch('/api/getdb2/')
        .then(v => v.json())
        .then(response => {
            response = response.response;

            // Hier manipuleer je je DOM

            var datum = document.getElementById('date').value;
            var tijd = document.getElementById('time').value;
            console.log(datum);
            console.log(tijd);

            var bert = document.getElementById('bert');
            var ernie = document.getElementById('ernie');
            var samson = document.getElementById('samson');
            var gert = document.getElementById('gert');

            var bert2 = document.getElementById('imgA');
            var ernie2 = document.getElementById('imgB');
            var samson2 = document.getElementById('imgC');
            var gert2 = document.getElementById('imgD');

            var boolBert;
            var boolErnie;
            var boolSamson;
            var boolGert;

            response.forEach(myFunction);

            function myFunction(value, index, array) {
                console.log(value);
                if (value.date == datum) {
                    if (value.time == tijd) {
                        if (value.chair == "Bert") {
                            console.log("Bert")
                            bert.setAttribute("disabled", true);
                            bert2.src = '/images/stoel_bezet.png';
                            boolBert = true;
                        }
                        if (value.chair == "Ernie") {
                            console.log("ernie")
                            ernie.setAttribute("disabled", true);
                            ernie2.src = '/images/stoel_bezet.png';
                            boolErnie = true;
                        }
                        if (value.chair == "Samson") {
                            console.log("samson")
                            samson.setAttribute("disabled", true);
                            samson2.src = '/images/stoel_bezet.png';
                            boolSamson = true;
                        }
                        if (value.chair == "Gert") {
                            console.log("gert")
                            gert.setAttribute("disabled", true);
                            gert2.src = '/images/stoel_bezet.png';
                            boolGert = true;
                        }
                        if (boolBert && boolErnie && boolSamson && boolGert){
                            document.getElementById(value.time).setAttribute("disabled", true);
                        }
                    } else {
                        bert.disabled = false;
                        ernie.disabled = false;
                        samson.disabled = false;
                        gert.disabled = false;
                        bert2.src = '/images/stoel_vrij.png';
                        ernie2.src = '/images/stoel_vrij.png';
                        samson2.src = '/images/stoel_vrij.png';
                        gert2.src = '/images/stoel_vrij.png';
                    }
                } else {
                    bert.disabled = false;
                    ernie.disabled = false;
                    samson.disabled = false;
                    gert.disabled = false;
                    bert2.src = '/images/stoel_vrij.png';
                    ernie2.src = '/images/stoel_vrij.png';
                    samson2.src = '/images/stoel_vrij.png';
                    gert2.src = '/images/stoel_vrij.png';
                }
            }


        })
}
console.log("it works");