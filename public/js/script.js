function dateChange() {
    fetch('/api/getdb2/')
        .then(v => v.json())
        .then(response => {
            response = response.response;

            // Hier manipuleer je je DOM

            var datum = document.getElementById('date').value;
            var tijd = document.getElementById('time').value;
            var select = document.getElementById('time').options;

            var bert = document.getElementById('bert');
            var ernie = document.getElementById('ernie');
            var samson = document.getElementById('samson');
            var gert = document.getElementById('gert');

            var bert2 = document.getElementById('imgA');
            var ernie2 = document.getElementById('imgB');
            var samson2 = document.getElementById('imgC');
            var gert2 = document.getElementById('imgD');

            bert.disabled = false;
            ernie.disabled = false;
            samson.disabled = false;
            gert.disabled = false;
            bert2.src = '/images/stoel_vrij.png';
            ernie2.src = '/images/stoel_vrij.png';
            samson2.src = '/images/stoel_vrij.png';
            gert2.src = '/images/stoel_vrij.png';

            var boolBert = false;
            var boolErnie = false;
            var boolSamson = false;
            var boolGert = false;

            var amountOfOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
            amountOfOptions.forEach(enableTime);

            function enableTime(value, index, array){
                select[value].disabled = false;
            }

            var timeStamps = [];
            var count = 0;

            response.forEach(myFunction);

            function myFunction(value, index, array) {
                if (value.date == datum) {
                    timeStamps.push(value.time);
                    timeStamps.sort();
                    if (value.time == tijd) {
                        if (value.chair == "Bert") {
                            bert.setAttribute("disabled", true);
                            bert2.src = '/images/stoel_bezet.png';
                            boolBert = true;
                        }
                        if (value.chair == "Ernie") {
                            ernie.setAttribute("disabled", true);
                            ernie2.src = '/images/stoel_bezet.png';
                            boolErnie = true;
                        }
                        if (value.chair == "Samson") {
                            samson.setAttribute("disabled", true);
                            samson2.src = '/images/stoel_bezet.png';
                            boolSamson = true;
                        }
                        if (value.chair == "Gert") {
                            gert.setAttribute("disabled", true);
                            gert2.src = '/images/stoel_bezet.png';
                            boolGert = true;
                        }
                        if (boolBert && boolErnie && boolSamson && boolGert) {
                            document.getElementById(value.time).setAttribute("disabled", true);
                        }
                    }
                }
            }
            timeStamps.forEach(checkTime);

            function checkTime(value, index, array) {
                var length = array.length;
                var nextIndex = index + 1;
                if (length > nextIndex) {
                    if (value == timeStamps[nextIndex]) {
                        count = count + 1;
                        if (count == 3) {
                            var fullTime = document.getElementById(value);
                            fullTime.disabled = true;
                            count = 0;
                        }
                    }
                }
            }

        })

}