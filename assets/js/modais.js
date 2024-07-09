// Inicio modais treino A - Pessoa 1
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

// Modal Desenvolvimento Máquina
var modalDesenvolvimentoMaquina = document.getElementById('modal-desenvolvimentoMaquina');
var desenvolvimentoMaquina = document.getElementById('desenvolvimentoMaquina');
var closeButtonDesenvolvimentoMaquina = modalDesenvolvimentoMaquina.querySelector('.close-button');

desenvolvimentoMaquina.addEventListener('click', function () {
    modalDesenvolvimentoMaquina.style.display = 'block';
});

closeButtonDesenvolvimentoMaquina.addEventListener('click', function () {
    modalDesenvolvimentoMaquina.style.display = 'none';
});

// Modal Crucifixo Máquina
var modalCruxifixoMaquina = document.getElementById('modal-cruxifixoMaquina');
var cruxifixoMaquina = document.getElementById('cruxifixoMaquina');
var closeButtonCruxifixoMaquina = modalCruxifixoMaquina.querySelector('.close-button');

cruxifixoMaquina.addEventListener('click', function () {
    modalCruxifixoMaquina.style.display = 'block';
});

closeButtonCruxifixoMaquina.addEventListener('click', function () {
    modalCruxifixoMaquina.style.display = 'none';
});

// Modal Elevação Frontal
var modalElevacaoFrontal = document.getElementById('modal-elevacaoFrontal');
var elevacaoFrontal = document.getElementById('elevacaoFrontal');
var closeButtonElevacaoFrontal = modalElevacaoFrontal.querySelector('.close-button');

elevacaoFrontal.addEventListener('click', function () {
    modalElevacaoFrontal.style.display = 'block';
});

closeButtonElevacaoFrontal.addEventListener('click', function () {
    modalElevacaoFrontal.style.display = 'none';
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

// Modal Rosca Barra
var modalRoscaBarra = document.getElementById('modal-roscaBarra');
var roscaBarra = document.getElementById('roscaBarra');
var closeButtonRoscaBarra = modalRoscaBarra.querySelector('.close-button');

roscaBarra.addEventListener('click', function () {
    modalRoscaBarra.style.display = 'block';
});

closeButtonRoscaBarra.addEventListener('click', function () {
    modalRoscaBarra.style.display = 'none';
});

// Modal Bíceps Máquina
var modalBicepsMaquina = document.getElementById('modal-bicepsMaquina');
var bicepsMaquina = document.getElementById('bicepsMaquina');
var closeButtonBicepsMaquina = modalBicepsMaquina.querySelector('.close-button');

bicepsMaquina.addEventListener('click', function () {
    modalBicepsMaquina.style.display = 'block';
});

closeButtonBicepsMaquina.addEventListener('click', function () {
    modalBicepsMaquina.style.display = 'none';
});
// Fim modais treino A - pessoa 1

// Inicio modais treino B - pessoa 1
// Função para abrir e fechar modais
function initModal(modalId, triggerId) {
    var modal = document.getElementById(modalId);
    var trigger = document.getElementById(triggerId);
    var closeButton = modal.querySelector('.close-button');

    trigger.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Inicializar modais
initModal('modal-agachamento', 'agachamento');
initModal('modal-legPress', 'legPress');
initModal('modal-curl', 'curl');
initModal('modal-bancoExtensor', 'bancoExtensor');
initModal('modal-panturrilhaSentado', 'panturrilhaSentado');
initModal('modal-abdominalMaquina', 'abdominalMaquina');
initModal('modal-roscaPunhoMartelo', 'roscaPunhoMartelo');

// Fim modais treino B - pessoa 1

// Inicio modais treino C - pessoa 1
// Função para abrir e fechar modais
function initModal(modalId, triggerId) {
    var modal = document.getElementById(modalId);
    var trigger = document.getElementById(triggerId);
    var closeButton = modal.querySelector('.close-button');

    trigger.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Inicializar modais
initModal('modal-puxadaFrontal', 'puxadaFrontal');
initModal('modal-puxadaNeutraTriangulo', 'puxadaNeutraTriangulo');
initModal('modal-puxadaBaixa', 'puxadaBaixa');
initModal('modal-remadaArticulada', 'remadaArticulada');
initModal('modal-crucifixoInvertido', 'crucifixoInvertido');
initModal('modal-tricepsMaquina', 'tricepsMaquina');
initModal('modal-tricepsCorda', 'tricepsCorda');
initModal('modal-roscaAlternada', 'roscaAlternada');
// Fim modais treino C - pessoa 1
