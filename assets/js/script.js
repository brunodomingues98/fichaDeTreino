// Menu
document.querySelector('.hamburger').addEventListener('click', () => {
    const menu = document.querySelector('nav');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

document.querySelector('.hamburger').addEventListener('click', function() {
    const menuContainer = document.querySelector('.menu-container');
    const hamburgerButton = this;

    menuContainer.classList.toggle('show'); 
    hamburgerButton.classList.toggle('open'); 
    
    if (hamburgerButton.classList.contains('open')) {
        hamburgerButton.innerHTML = "&#10006;"; // "X"
    } else {
        hamburgerButton.innerHTML = "&#9776;"; // Hamburger
    }
});
// Menu - Fim

document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.serie-checkbox');
    const timers = document.querySelectorAll('.timer');
    const labels = document.querySelectorAll('.marcadores label.hidden');
    let countdown;

    checkboxes.forEach((checkbox, index) => {
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                startTimer(timers[index], 60, index);
            }
        });
    });

    function startTimer(timerElement, duration, currentIndex) {
        let timer = duration, seconds;
        timerElement.style.display = "block";
        
        countdown = setInterval(function () {
            seconds = parseInt(timer % 60, 10);
            timerElement.textContent = "Descanso: " + seconds;

            if (--timer < 0) {
                clearInterval(countdown);
                timerElement.style.display = "none";
                
                // Remove a classe 'hidden' do label correspondente
                if (currentIndex < labels.length) {
                    labels[currentIndex].classList.remove('hidden');
                }
                
                // Verifica se a API de vibração está disponível e vibra por 200ms
                if (navigator.vibrate) {
                    navigator.vibrate(200); // Vibration de 200ms
                }
            }
        }, 1000);
    }
});
