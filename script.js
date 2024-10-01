document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const stars = 100;

    for (let i = 0; i < stars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.width = `${Math.random() * 2}px`;
        star.style.height = `${Math.random() * 2}px`;
        star.style.background = 'white';
        star.style.position = 'absolute';
        star.style.borderRadius = '50%';
        star.style.animation = `twinkle ${Math.random() * 5 + 2}s infinite`;
        body.appendChild(star);
    }
});
