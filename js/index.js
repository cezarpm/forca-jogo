const letra = $('#letra');
const inputElement = $('#main-input');
const palavraForca = $('.palavra-forca').text();
const palavraSeparada = palavraForca.split(""); // trim() remove space

criaLinhas(palavraSeparada);

$('#main-btn').click(function () {

    if (!isNaN(inputElement.val()))  return console.log('nao é numero');
    
    const letraDigitada = letra.val().toUpperCase();

    console.log(letraDigitada);

    inputElement.val('');

    console.log(palavraSeparada);

    confereChute(letraDigitada, palavraSeparada);
});

function confereChute(letra, palavra) {

    for (let i = 0; i < palavra.length; i++) {
        let letras = palavra[i];

        if (letra == letras) {
            console.log("Tem");
        }
        else {
            console.log("Não tem");
        }
    }
}

function criaLinhas(palavra) {
    for (let i = 0; i < palavra.length; i++) {
        $(".div-imagem-box").append(`<li class='item'>*</li>`);
    }
}
