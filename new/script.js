document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-text');
    const closeBtn = document.querySelector('.close-btn');
    const workoutImages = document.querySelectorAll('.workout-img');
    const checklistItems = document.querySelectorAll('.checklist-item');
    const treinoDetails = {
        'A': `Treino A - Peito e Bíceps:
              Supino Reto: 4 séries de 8-12 repetições
              Supino Inclinado com Halteres: 3 séries de 8-12 repetições
              Crucifixo: 3 séries de 12-15 repetições
              Rosca Direta: 4 séries de 8-12 repetições
              Rosca Alternada: 3 séries de 10-15 repetições`,
        'B': `Treino B - Perna e Costas:
              Agachamento com Barra: 3 séries de 8-12 repetições
              Leg Press: 3 séries de 10-15 repetições
              Stiff: 3 séries de 8-12 repetições
              Puxada Frontal: 4 séries de 8-12 repetições
              Remada Curvada: 3 séries de 8-12 repetições
              Panturrilha Sentado: 4 séries de 12-15 repetições`,
        'C': `Treino C - Ombro e Tríceps:
              Desenvolvimento com Halteres: 4 séries de 8-12 repetições
              Elevação Lateral: 3 séries de 12-15 repetições
              Elevação Frontal: 3 séries de 12-15 repetições
              Tríceps na Polia (corda): 4 séries de 8-12 repetições
              Tríceps na Máquina: 3 séries de 8-12 repetições`
    };

    // Função para abrir o modal
    workoutImages.forEach(img => {
        img.addEventListener('click', function() {
            const treino = this.getAttribute('data-treino');
            modalContent.textContent = treinoDetails[treino];
            modal.style.display = 'block';
        });
    });

    // Função para fechar o modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Função para contagem regressiva e notificação
    checklistItems.forEach(item => {
        item.addEventListener('change', function() {
            if (this.checked) {
                let timer = 60;
                const treino = this.getAttribute('data-treino');

                const countdown = setInterval(() => {
                    if (timer > 0) {
                        timer--;
                    } else {
                        clearInterval(countdown);
                        if (Notification.permission === 'granted') {
                            new Notification(`Tempo para o próximo exercício: ${treino}`);
                        }
                    }
                }, 1000);
            }
        });
    });

    // Solicitar permissão para notificações
    if (Notification.permission !== 'granted') {
        Notification.requestPermission();
    }
});
