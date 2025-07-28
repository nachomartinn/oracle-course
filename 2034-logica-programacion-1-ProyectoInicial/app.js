let maxPossibleNumber = 100;
let secretNumber = Math.floor(Math.random() * maxPossibleNumber) + 1;
let userNumber = null;
let intentos = 1;
let maximosIntentos = 5;


while (secretNumber != userNumber) {
    console.log('Intento número: ' + intentos);

    let userNumber = parseInt(prompt(`Ingrese un número entre 1 y ${maxPossibleNumber}: `));

    console.log(userNumber);

    if (userNumber == secretNumber) {
        alert(`Acertaste, el número es: ${secretNumber}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
        break
    } else if (secretNumber > userNumber) {
        alert('El número secreto es mayor!!!');
    } else {
        alert('El número secreto es menor!!!');
    }

    intentos++

    if (intentos > maximosIntentos) {
        alert(`Llegaste al número máximo de ${maximosIntentos} de intentos... El número era ${secretNumber}`);
        break;
        // superó el número máximo de intentos
    }
}