// Mensagens especiais para o modal
const specialMessages = [
    "Você é a razão do meu sorriso todos os dias ❤️",
    "Obrigado por transformar dias comuns em momentos extraordinários ❤️",
    "Meu amor por você cresce a cada segundo ❤️",
    "Você é meu lugar favorito no mundo ❤️",
    "Com você, até os dias difíceis se tornam suportáveis ❤️"


];

// Elementos do DOM
const surpriseBtn = document.getElementById('surprise-btn');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');
const specialMessage = document.getElementById('special-message');

// Abrir modal com mensagem aleatória
surpriseBtn.addEventListener('click', () => {
    const randomMessage = specialMessages[Math.floor(Math.random() * specialMessages.length)];
    specialMessage.textContent = randomMessage;
    modal.style.display = 'block';
    createHearts();
});

// Fechar modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Fechar modal clicando fora
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Criar corações flutuantes
function createHearts() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = '100%';
            heart.style.fontSize = Math.random() * 20 + 20 + 'px';
            heart.style.opacity = '1';
            heart.style.transition = 'all 3s ease-out';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '999';
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.style.top = '-100px';
                heart.style.opacity = '0';
            }, 100);
            
            setTimeout(() => {
                heart.remove();
            }, 3100);
        }, i * 100);
    }
}

// Animação de fade-in para elementos ao rolar
const fadeElements = document.querySelectorAll('.fade-in');
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

fadeElements.forEach(element => {
    observer.observe(element);
});

// Contador de dias juntos (opcional - você pode configurar a data)
function daysTogether() {
    const startDate = new Date('2024-01-01'); // ALTERE PARA A DATA QUE COMEÇARAM
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

// Adicionar contador na página (descomente se quiser usar)
// console.log(`Já são ${daysTogether()} dias ao seu lado! 💕`);
