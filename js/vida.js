const imagem$ = $("#img-forca");
const palavraForcaa = $('.palavra-forca').text();
let erros = 0;

function error(quantidade) {

    mudaImagem();

}


function mudaImagem() {

    erros = erros + 1;
    switch (erros) {
        case 1:
            console.log(" 1 erro");
            imagem$.addClass("img1");
            break;
        case 2:
            console.log(" 2 erros");
            imagem$.addClass("img2");
            break;
        case 3:
            console.log(" 3 erros");
            imagem$.addClass("img3");
            break;
        case 4:
            console.log(" 4 erros");
            imagem$.addClass("img4");
            break;
        case 5:
            console.log(" 5 erros");
            imagem$.addClass("img5");
            break;
        case 6:
            console.log(" 6 erros");
            imagem$.addClass("img6");
            break;


    }
}