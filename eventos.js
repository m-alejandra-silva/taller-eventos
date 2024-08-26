document.addEventListener("DOMContentLoaded", function() {
    let styledDiv = document.querySelector('.styled-div');
    let button = styledDiv.querySelector('button');

    styledDiv.addEventListener('click', function(event) {
          if (event.target !== button) {
            alert('Hola! Soy el div');
        }
    });
    
    button.addEventListener('click', function() {
        alert('Hola!');
    });
});