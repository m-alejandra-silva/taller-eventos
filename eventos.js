document.addEventListener("DOMContentLoaded", function() {
    let styledDiv = document.querySelector('.styled-div');

    styledDiv.addEventListener('click', function() {
        alert('Hola! Soy el div');
    });
});
