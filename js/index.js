const letra = $('#letra');
const inputElement = $('#main-input');
const palavraForca = $('.palavra-forca').text();
const palavraSeparada = palavraForca.split(""); // trim() remove space
const imagemBox = $('.div-imagem-box');

criaLinhas(palavraSeparada);

$('#main-btn').click(function () {

    if (!isNaN(inputElement.val())) return console.log('É numero');

    const letraDigitada = inputElement.val().toUpperCase();

    console.log(letraDigitada);

    inputElement.val('');

    console.log(palavraSeparada);

    confereChute(letraDigitada, palavraSeparada);
});

function confereChute(letra, palavra) {

    for (let i = 0; i < palavra.length; i++) {
        let letras = palavra[i];
        
        if (letra == letras) {
           
            $("li").eq(i).text(letra)
            
        }
        else {
            console.log("Não tem");
        }
    }
}

function criaLinhas(palavra) {
    let lista = $('.div-imagem-box').append('<ul></ul>').find('ul');

    for (let i = 0; i < palavra.length; i++) {

        lista.append("<li class='item'>*</li>");
    }
}
