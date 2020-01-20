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
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(v => v.json())
        .then(response => {
            response = response.response;

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
        })
    setTimeout(scrollDown, 100);
}

function scrollDown() {
    window.scrollBy(0, 125);
}

function logIn() {
    const wachtwoord = {
        password: document.getElementById('password').value
    }

    fetch('/api/logIn/', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(wachtwoord),
        })
        .then(v => v.json())
        .then(password => {
            password = password.password;
            document.getElementsByTagName('div')[1].style.display = 'none';
            document.getElementsByTagName('div')[2].style.display = 'block';
        })
}