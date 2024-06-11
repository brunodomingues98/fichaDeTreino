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

    // Modal Remada
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