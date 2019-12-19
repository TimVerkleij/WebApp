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

            response.forEach(myFunction);

            function myFunction(value, index, array) {
                console.log(value);
                if (value.date == datum) {
                    if (value.time == tijd) {
                        if (value.chair == "Bert") {
                            console.log("Bert")
                            bert.setAttribute("disabled", true);
                        }
                        if (value.chair == "Ernie") {
                            console.log("ernie")
                            ernie.setAttribute("disabled", true);
                        }
                        if (value.chair == "Samson") {
                            console.log("samson")
                            samson.setAttribute("disabled", true);
                        }
                        if (value.chair == "Gert") {
                            console.log("gert")
                            gert.setAttribute("disabled", true);
                        }
                    } else {
                        bert.disabled = false;
                        ernie.disabled = false;
                        samson.disabled = false;
                        gert.disabled = false;
                    }
                } else {
                    bert.disabled = false;
                    ernie.disabled = false;
                    samson.disabled = false;
                    gert.disabled = false;
                }
            }


        })
}
console.log("it works");