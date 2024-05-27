

function validar() {
    let validado = true;

    let constante = document.getElementById('constante');
    let msgConstante = document.getElementById('msgconstante');
    let rgxDecimalPositivo = /^[0-9]+(\.[0-9]*)?$/;

    if (constante.value.trim() == '' || constante.value.length == 0) {

        msgConstante.innerHTML += 'La constante es obligatoria <br>';
        validado = false;

    } if (!rgxDecimalPositivo.test(constante.value)) {

        msgConstante.innerHTML += 'La constante no cumple con el formato!! (Digito.Digito)<br>';
        validado = false;

    } if (validado)

        alert(' constante: ' + constante.value + ' acepatada');

    return validado;
}