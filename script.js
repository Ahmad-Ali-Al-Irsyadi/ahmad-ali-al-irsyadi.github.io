
document.querySelectorAll('.social-item').forEach(button => {
    button.addEventListener('mousemove', e => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        button.style.setProperty('--x', `${x}px`);
        button.style.setProperty('--y', `${y}px`);
    });
});

const card = document.querySelector('.card');
card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--card-x', `${x}px`);
    card.style.setProperty('--card-y', `${y}px`);
});
