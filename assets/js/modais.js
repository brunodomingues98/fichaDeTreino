// Treino A
document.addEventListener('DOMContentLoaded', function () {
    // Modal Supino
    var modalSupino = document.getElementById('modal-supino');
    var supino = document.getElementById('supino');
    var closeButtonSupino = modalSupino.querySelector('.close-button');

    supino.addEventListener('click', function () {
        modalSupino.style.display = 'block';
    });

    closeButtonSupino.addEventListener('click', function () {
        modalSupino.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modalSupino) {
            modalSupino.style.display = 'none';
        }
    });

    // Modal Remada com Halteres
    var modalRemada = document.getElementById('modal-remada');
    var remada = document.getElementById('remada');
    var closeButtonRemada = modalRemada.querySelector('.close-button');

    remada.addEventListener('click', function () {
        modalRemada.style.display = 'block';
    });

    closeButtonRemada.addEventListener('click', function () {
        modalRemada.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modalRemada) {
            modalRemada.style.display = 'none';
        }
    });

    // Modal Desenvolvimento
    var modalDesenvolvimento = document.getElementById('modal-desenvolvimento');
    var desenvolvimento = document.getElementById('desenvolvimento');
    var closeButtonDesenvolvimento = modalDesenvolvimento.querySelector('.close-button');

    desenvolvimento.addEventListener('click', function () {
        modalDesenvolvimento.style.display = 'block';
    });

    closeButtonDesenvolvimento.addEventListener('click', function () {
        modalDesenvolvimento.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modalDesenvolvimento) {
            modalDesenvolvimento.style.display = 'none';
        }
    });

    // Modal Triceps
    var modalTriceps = document.getElementById('modal-triceps');
    var triceps = document.getElementById('triceps');
    var closeButtonTriceps = modalTriceps.querySelector('.close-button');

    triceps.addEventListener('click', function () {
        modalTriceps.style.display = 'block';
    });

    closeButtonTriceps.addEventListener('click', function () {
        modalTriceps.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modalTriceps) {
            modalTriceps.style.display = 'none';
        }
    });

    // Modal Rosca Direta
    var modalRoscaDireta = document.getElementById('modal-roscaDireta');
    var roscaDireta = document.getElementById('roscaDireta');
    var closeButtonRoscaDireta = modalRoscaDireta.querySelector('.close-button');

    roscaDireta.addEventListener('click', function () {
        modalRoscaDireta.style.display = 'block';
    });

    closeButtonRoscaDireta.addEventListener('click', function () {
        modalRoscaDireta.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modalRoscaDireta) {
            modalRoscaDireta.style.display = 'none';
        }
    });
});

// Treino B
document.addEventListener('DOMContentLoaded', function () {
    // Modal Agachamento Com Barra
    var modalAgachamento = document.getElementById('modal-agachamento');
    var agachamento = document.getElementById('agachamento');
    var closeButtonAgachamento = modalAgachamento.querySelector('.close-button');

    agachamento.addEventListener('click', function () {
        modalAgachamento.style.display = 'block';
    });

    closeButtonAgachamento.addEventListener('click', function () {
        modalAgachamento.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modalAgachamento) {
            modalAgachamento.style.display = 'none';
        }
    });

    // Modal Leg Press
    var modalLegPress = document.getElementById('modal-leg');
    var legPress = document.getElementById('legPress');
    var closeButtonLegPress = modalLegPress.querySelector('.close-button');

    legPress.addEventListener('click', function () {
        modalLegPress.style.display = 'block';
    });

    closeButtonLegPress.addEventListener('click', function () {
        modalLegPress.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modalLegPress) {
            modalLegPress.style.display = 'none';
        }
    });

    // Modal Leg Curl
    var modalLegCurl = document.getElementById('modal-curl');
    var legCurl = document.getElementById('curl');
    var closeButtonLegCurl = modalLegCurl.querySelector('.close-button');

    legCurl.addEventListener('click', function () {
        modalLegCurl.style.display = 'block';
    });

    closeButtonLegCurl.addEventListener('click', function () {
        modalLegCurl.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modalLegCurl) {
            modalLegCurl.style.display = 'none';
        }
    });
});

// Treino C
document.addEventListener('DOMContentLoaded', function () {
    // Modal Puxada Frontal
    var modalPuxada = document.getElementById('modal-puxada');
    var puxada = document.getElementById('puxada');
    var closeButtonPuxada = modalPuxada.querySelector('.close-button');

    puxada.addEventListener('click', function () {
        modalPuxada.style.display = 'block';
    });

    closeButtonPuxada.addEventListener('click', function () {
        modalPuxada.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modalPuxada) {
            modalPuxada.style.display = 'none';
        }
    });

    // Modal Elevação Lateral
    var modalElevacao = document.getElementById('modal-elevacao');
    var elevacao = document.getElementById('elevacao');
    var closeButtonElevacao = modalElevacao.querySelector('.close-button');

    elevacao.addEventListener('click', function () {
        modalElevacao.style.display = 'block';
    });

    closeButtonElevacao.addEventListener('click', function () {
        modalElevacao.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modalElevacao) {
            modalElevacao.style.display = 'none';
        }
    });

    // Modal Supino Inclinado
    var modalSupinoInclinado = document.getElementById('modal-supinoInclinado');
    var supinoInclinado = document.getElementById('supinoInclinado');
    var closeButtonSupinoInclinado = modalSupinoInclinado.querySelector('.close-button');

    supinoInclinado.addEventListener('click', function () {
        modalSupinoInclinado.style.display = 'block';
    });

    closeButtonSupinoInclinado.addEventListener('click', function () {
        modalSupinoInclinado.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modalSupinoInclinado) {
            modalSupinoInclinado.style.display = 'none';
        }
    });

    // Modal Rosca Alternada
    var modalRoscaAlternada = document.getElementById('modal-roscaAlternada');
    var roscaAlternada = document.getElementById('roscaAlternada');
    var closeButtonRoscaAlternada = modalRoscaAlternada.querySelector('.close-button');

    roscaAlternada.addEventListener('click', function () {
        modalRoscaAlternada.style.display = 'block';
    });

    closeButtonRoscaAlternada.addEventListener('click', function () {
        modalRoscaAlternada.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modalRoscaAlternada) {
            modalRoscaAlternada.style.display = 'none';
        }
    });

    // Modal Triceps Corda
    var modalTricepsCorda = document.getElementById('modal-tricepsCorda');
    var tricepsCorda = document.getElementById('tricepsCorda');
    var closeButtonTricepsCorda = modalTricepsCorda.querySelector('.close-button');

    tricepsCorda.addEventListener('click', function () {
        modalTricepsCorda.style.display = 'block';
    });

    closeButtonTricepsCorda.addEventListener('click', function () {
        modalTricepsCorda.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modalTricepsCorda) {
            modalTricepsCorda.style.display = 'none';
        }
    });
});

// Modal Remada Articulada
var modalRemada = document.getElementById('modal-remada-articulada');
var remada = document.getElementById('remadaArticulada');
var closeButtonRemada = modalRemada.querySelector('.close-button');

remada.addEventListener('click', function () {
    modalRemada.style.display = 'block';
});

closeButtonRemada.addEventListener('click', function () {
    modalRemada.style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target == modalRemada) {
        modalRemada.style.display = 'none';
    }
});

