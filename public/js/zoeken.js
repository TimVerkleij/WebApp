var naam = document.getElementById('naam');
var datum = document.getElementById('datum');
var tijd = document.getElementById('tijd');
var kapper = document.getElementById('kapper');

var resultaat = document.getElementById('resultaat');

function zoeken() {
    if (naam.value == '') {
        console.log("geen naam");
    }
    if (datum.value == '') {
        console.log('geen datum');
    }
    if (tijd.value == 'Geen tijd gekozen') {
        console.log('Geen tijd gekozenn');
    }
    if (kapper.value == 'Geen kapper gekozen') {
        console.log('Geen kapper gekozenn');
    }
    searchDatabase();
}

function searchDatabase() {
    var tbl = document.getElementsByTagName('thead')[0];
    if (tbl) tbl.parentNode.removeChild(tbl);

    const data = {
        naam: document.getElementById('naam').value,
        datum: document.getElementById('datum').value,
        tijd: document.getElementById('tijd').value,
        kapper: document.getElementById('kapper').value
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

            response2 = [];

            if (naam.value !== '') {
                response.forEach(checkNames)

                function checkNames(value) {
                    if (value.name == naam.value) {
                        response2.push(value);
                        resultaten = response2;
                    }
                }
            }
            if (datum.value !== '') {
                response2.forEach(checkDates)

                function checkDates(value) {
                    if (value.date == datum.value) {

                    };
                }
            }

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
}