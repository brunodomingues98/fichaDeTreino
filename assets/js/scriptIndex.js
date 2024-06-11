// Função para alternar a visibilidade do menu ao clicar na foto do perfil
document.getElementById('perfil1').addEventListener('click', function() {
    var menu = this.querySelector('.menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});
