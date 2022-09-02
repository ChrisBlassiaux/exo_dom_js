// EXERCICE 1 -------------------------
// Récupération des elements
let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');

// Manipulation des elements 
// Type d'évènement 'input' permet d'écouter le champ de saisi input
input1.addEventListener('input', function() {
    // On récupère la valeur de l'un pour la mettre dans l'autre
    input2.value = input1.value;
});

// EXERCICE 2 -------------------------
// Récupération des elements
let input3 = document.querySelector('.input3');
let cellNumber = document.querySelector('.cellNumber');
let cellSquare = document.querySelector('.cellSquare');
let cellCube = document.querySelector('.cellCube');

// Manipulation des elements
// Type d'évènement 'input' permet d'écouter le champ de saisi input
input3.addEventListener('input', function() {
    cellNumber.innerHTML = input3.value;
    cellSquare.innerHTML = input3.value * input3.value;
    cellCube.innerHTML = input3.value * input3.value  * input3.value;
});

// EXERCICE 3 -------------------------
// Récupération des elements
let button = document.querySelector('.button');
let squares = document.querySelectorAll('.container-square div');
let square1 = document.querySelector('.square1');
let square2 = document.querySelector('.square2');
let square3 = document.querySelector('.square3');
let square4 = document.querySelector('.square4');

let counter = 0;

// Manipulation des elements
button.addEventListener('click', function() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = 'white';
    }
    if (counter == 0) {
        counter++;
        square2.style.backgroundColor = 'aquamarine';
    } else if (counter == 1) {
        counter++;
        square3.style.backgroundColor = 'aquamarine';
    } else if (counter == 2) {
        counter++;
        square4.style.backgroundColor = 'aquamarine';
    } else {
        counter = 0;
        square1.style.backgroundColor = 'aquamarine';
    }
});