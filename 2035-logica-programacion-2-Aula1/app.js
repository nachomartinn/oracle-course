let secretNumber = 0;
let intentos = 0;
let previousNumbersList = [];
let maxTries = 10;

function putTextOnElement(element, text) {
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = text;
    return;
}

function verifyTry() {
    let userNumber = parseInt(document.getElementById('inputUserNumber').value);

    console.log(intentos);
    if(secretNumber === userNumber) {
        putTextOnElement('p', `Acertaste el número en ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        console.log(previousNumbersList);
    } else {
        if (userNumber > secretNumber){
            putTextOnElement('p', 'El número secreto es menor');
        } else {
            putTextOnElement('p', 'El número secreto es mayor');
        }
        clearInput();
        intentos++;
    }
    return;
}

function retryGame() {
    // clear the input value before
    clearInput();
    // set start conditions of the game
    startOfTheGame();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function startOfTheGame() {
    putTextOnElement('h1', 'Juego del Número Secreto!');
    putTextOnElement('p', `Ingrese un número del 1 al ${maxTries}`);
    secretNumber = generateRandomNumber(maxTries);
    intentos = 1;   
}

function clearInput() {
    let input = document.getElementById('inputUserNumber');
    input.value = '';
}

function generateRandomNumber(n) {
    let secretNumber = Math.floor(Math.random() * n) + 1;

    if (previousNumbersList.length == maxTries) {
        return putTextOnElement('p', 'Ya se sortearon todos los números posibles')
    }

    if (previousNumbersList.includes(secretNumber)) {
        return generateRandomNumber(n);
    }
    previousNumbersList.push(secretNumber);
    return secretNumber;
}

startOfTheGame();