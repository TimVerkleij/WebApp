var url = new URL(window.location.href);
console.log(url);
var date = url.searchParams.get("date");
var time = url.searchParams.get("time");
var chair = url.searchParams.get("chair");

var p1 = document.getElementById("p1");

console.log(date);
console.log(time);
console.log(chair);

p1.innerHTML= "Uw gekozen datum is: "+ date; 

fetch('/api/getdb/'+date+'?'+time+'?'+chair).then(v => v.json()).then(console.log)