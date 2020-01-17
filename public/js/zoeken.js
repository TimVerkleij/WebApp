var naam = document.getElementById('naam');
var datum = document.getElementById('datum');
var tijd = document.getElementById('tijd');
var kapper = document.getElementById('kapper');


function zoeken(){
    console.log(naam.value);
    console.log(datum.value);
    console.log(tijd.value);
    console.log(kapper.value);
    if(naam.value == ''){
        console.log("geen naam");
    }
}
