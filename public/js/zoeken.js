var naam = document.getElementById('naam');
var datum = document.getElementById('datum');
var tijd = document.getElementById('tijd');
var kapper = document.getElementById('kapper');

var resultaat = document.getElementById('resultaat');

function searchDatabase() {
    var tbl = document.getElementsByTagName('thead')[0];
    if (tbl) tbl.parentNode.removeChild(tbl);

    var upperCaseName = naam.value;
    upperCaseName = upperCaseName.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');

    const data = {
        naam: upperCaseName,
        datum: datum.value,
        tijd: tijd.value,
        kapper: kapper.value
    }

    fetch('/api/search/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(v => v.json())
        .then(response => {
            response = response.response;

            resultaat.innerHTML = "Er zijn " + response.length + " afspraken gevonden:"

            let mountains = response

            function generateTableHead(table, data) {
                let thead = table.createTHead();
                let row = thead.insertRow();
                for (let key of data) {
                    let th = document.createElement("th");
                    let text = document.createTextNode(key);
                    th.appendChild(text);
                    row.appendChild(th);
                }
            }

            function generateTable(table, data) {
                for (let element of data) {
                    let row = table.insertRow();
                    for (key in element) {
                        let cell = row.insertCell();
                        let text = document.createTextNode(element[key]);
                        cell.appendChild(text);
                    }
                }
            }
            let table = document.querySelector("table");
            let data = Object.keys(mountains[0]);
            generateTableHead(table, data);
            generateTable(table, mountains);
            resultaat.style.display = 'block';
        })
    setTimeout(scrollDown, 100);
}

function scrollDown() {
    window.scrollBy(0, 125);
}

var passwordField = document.getElementById("password");
passwordField.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("logIn").click();
    }
});

function logIn() {
    const wachtwoord = {
        password: document.getElementById('password').value
    }

    fetch('/api/logIn/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(wachtwoord),
        })
        .then(v => v.json())
        .then(password => {
            password = password.password;

            var incorrect = document.getElementById('incorrect');

            if (password == 'Correct password') {
                document.getElementsByTagName('div')[1].style.display = 'none';
                document.getElementsByTagName('div')[2].style.display = 'block';
            } else {
                incorrect.style.visibility = 'visible'
                setTimeout(function() {
                    incorrect.style.color = 'red';
                    setTimeout(function() {
                        incorrect.style.color = 'lime';
                    }, 500);
                }, 100);
            }

        })
}