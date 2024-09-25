// Função para abrir o modal ao clicar na imagem
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";

    // Define a posição do modal com base no scroll atual
    var scrollY = window.scrollY || window.pageYOffset; // Captura a posição do scroll
    modal.style.top = scrollY + 'px'; // Define a posição do modal
}

// Função para fechar o modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Fecha o modal quando o usuário clica fora dele
window.onclick = function(event) {
    var modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}
