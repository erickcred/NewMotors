$(document).ready(() => {

    $("#carousel").slick({
        autoplay: true
    });
    $("#promocoes .lista-veiculos").slick({
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    });
    $("#hamburguer").on("click", () => {
        $("nav").slideToggle();
    });

    /* Validações */
    $("#form-contato").validate({
        rules: {
            nome: { required: true },
            telefone: { required: true },
            email: { required: true, email: true },
            veiculoDeInteresse: { required: true },
            mensagem: { require: false }
        },
        messages: {
            nome: "Nome é obrigatório!",
            telefone: "Telefone é obrigatório!",
            email: "E-mail é obrigatório!",
            veiculoDeInteresse: "Veiculo de interesse é obrigatório!"
        },
        submitHandler: (form) => { // para poder capturar evento de submit
            console.log(form);
        },
        invalidHandler: (evento, validador) => { // capturar evento de erro validação
            // quantidade de campos incorretos
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                console.log("Ola");
            }
        }
    })

    /* Mascaras */
    $("input#telefone").mask("(00) 00000-0000", {
        placeholder: "(41) 98888-8888"
    });

    /* Scroll animate button form */
    $(".lista-veiculos button").click((evento) => {
        const destino = $("#contato");

       $("#veiculoDeInteresse").val($(evento.target).parent().find("h3").text());

        $("html").animate({
            scrollTop: destino.offset().top
        }, 1000);       
    });
});