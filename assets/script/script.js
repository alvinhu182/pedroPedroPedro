document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.pular');
    const container = document.querySelector('body');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    function moveRandomly(element) {
        const randomX = Math.random() * (containerWidth - element.offsetWidth);
        const randomY = Math.random() * (containerHeight - element.offsetHeight);
        element.style.left = `${randomX}px`;
        element.style.top = `${randomY}px`;
    }

    elements.forEach(element => {
        element.addEventListener('animationiteration', () => moveRandomly(element));
        moveRandomly(element); // Mover aleatoriamente na inicialização
    });
});
