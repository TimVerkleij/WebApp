fetch('/api/getdb2/')
    .then(v => v.json())
    .then(response => {
        response = response.response;

        // Hier manipuleer je je DOM

        response.forEach(myFunction);

        function myFunction(value, index, array){
            console.log(value.date);
        }
    })