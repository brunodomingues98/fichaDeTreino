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
                if (currentIndex < labels.length) {
                    labels[currentIndex].classList.remove('hidden');
                }
            }
        }, 1000);
    }
});