// 1. Logika untuk Glow di Tombol (Social Items)
document.querySelectorAll('.social-item').forEach(button => {
    button.addEventListener('mousemove', e => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        button.style.setProperty('--x', `${x}px`);
        button.style.setProperty('--y', `${y}px`);
    });
});

// 2. Logika BARU untuk Glow di Balik Kartu (Card Glow Line)
const card = document.querySelector('.card');
card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    
    // Hitung posisi kursor relatif terhadap card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Set variable CSS untuk card glow
    card.style.setProperty('--card-x', `${x}px`);
    card.style.setProperty('--card-y', `${y}px`);
});