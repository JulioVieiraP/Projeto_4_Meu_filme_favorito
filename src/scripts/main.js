$(document).ready(function(){
    var btn_antigos = $('#Btn_antigos').attr('id')

    var alturaOcultacao = 200;

    $(window).scroll(function() {
        if ($(this).scrollTop() > alturaOcultacao){
            $('.header').fadeOut();
        } else {
            $('.header').fadeIn();
        }
    });
    // Seção de atrações, programação das abas com jquery
    $(".filmes__btn__item").click(function(){
        $(".filmes__btn__item").removeClass("filmes__btn__item--active")

        if($(this).attr('id') === btn_antigos){
            $(this).addClass("filmes__btn__item--active")
            $('#Filmes_antigos').show()
            $('#Filmes_novos').hide()
        }
        else{
            $(this).addClass("filmes__btn__item--active")
            $('#Filmes_novos').show()
            $('#Filmes_antigos').hide()
        }
    });
});

function ocultaElementosDoHeader(){
    const header = document.querySelector('header')
    header.classList.add('header--is-hidden')
}

function exibeElementosDoHeader(){
    const header = document.querySelector('header')
    header.classList.remove('header--is-hidden')
}



