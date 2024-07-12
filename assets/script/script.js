document.addEventListener('DOMContentLoaded', () => {
    const pedroContainer = document.getElementById('pedroContainer');
    const spinner = document.querySelector('.spinner');
    const spinnerImg = spinner.querySelector('img');
    const numberOfH1 = 40; // Defina aqui o número fixo de elementos h1 que você deseja

    function moveRandomly(element) {
        const bodyWidth = document.body.offsetWidth;
        const bodyHeight = document.body.offsetHeight;
        const randomX = Math.random() * (bodyWidth - element.offsetWidth);
        const randomY = Math.random() * (bodyHeight - element.offsetHeight);
        element.style.left = `${randomX}px`;
        element.style.top = `${randomY}px`;
    }

    function createAndAnimateH1() {
        for (let i = 0; i < numberOfH1; i++) {
            const h1 = document.createElement('h1');
            h1.classList.add('pular', 'vibrante');
            h1.textContent = 'pedro';
            h1.style.position = 'absolute';
            pedroContainer.appendChild(h1);
            moveRandomly(h1);

            // Mover a cada segundo
            setInterval(() => {
                moveRandomly(h1);
            }, 1000);
        }
    }

    function adjustSpinnerSize() {
        const maxWidth = 300;
        const bodyWidth = document.body.offsetWidth;
        spinner.style.width = `${Math.min(bodyWidth, maxWidth)}px`;
        spinner.style.height = spinner.style.width; // Manter a proporção quadrada
        spinnerImg.style.width = '100%';
        spinnerImg.style.height = 'auto';
    }

    // Criar e iniciar a animação dos elementos h1
    createAndAnimateH1();

    // Ajustar o tamanho do spinner inicialmente
    adjustSpinnerSize();

    // Ajustar o tamanho do spinner quando a janela for redimensionada
    window.addEventListener('resize', adjustSpinnerSize);

    // Controle de música
    const audio = document.querySelector('audio');
    const toggleButton = document.getElementById('toggleButton');

    toggleButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            toggleButton.textContent = 'Parar Música';
        } else {
            audio.pause();
            toggleButton.textContent = 'Iniciar Música';
        }
    });
});