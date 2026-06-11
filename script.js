// Script interactivo para la página

// Botón "Te amo"
const btnLove = document.querySelector('.btn-love');
btnLove.addEventListener('click', function() {
    this.textContent = '💖 ¡Te amo muchísimo!';
    this.style.animation = 'none';
    setTimeout(() => {
        this.style.animation = '';
    }, 10);
    
    // Crear corazones adicionales
    createHearts(20);
});

// Botón "Sorpresa"
const btnSurprise = document.querySelector('.btn-surprise');
btnSurprise.addEventListener('click', function() {
    this.textContent = '✨ ¡Sorpresa activada!';
    
    // Efectos de sorpresa
    createConfetti();
    activateRoseGlow();
});

// Crear corazones que salen del botón
function createHearts(count) {
    const container = document.querySelector('.hearts-container');
    
    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.style.position = 'absolute';
        heart.style.width = '20px';
        heart.style.height = '20px';
        heart.style.color = '#ff1493';
        heart.textContent = '❤️';
        heart.style.fontSize = '20px';
        
        // Posición aleatoria
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
        heart.style.animation = `heartFloat ${2 + Math.random() * 2}s ease-in-out forwards`;
        heart.style.pointerEvents = 'none';
        
        container.appendChild(heart);
        
        // Eliminar después de la animación
        setTimeout(() => heart.remove(), 4000);
    }
}

// Crear confeti
function createConfetti() {
    const colors = ['#ff1493', '#ff69b4', '#ffb6c1', '#667eea', '#764ba2'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = '50%';
        confetti.style.zIndex = '3';
        confetti.style.pointerEvents = 'none';
        
        document.body.appendChild(confetti);
        
        // Animación de caída
        let yPos = -10;
        let xPos = parseFloat(confetti.style.left);
        const xVel = (Math.random() - 0.5) * 8;
        const yVel = 3 + Math.random() * 3;
        
        const interval = setInterval(() => {
            yPos += yVel;
            xPos += xVel;
            confetti.style.top = yPos + 'px';
            confetti.style.left = xPos + 'px';
            confetti.style.opacity = 1 - (yPos / window.innerHeight);
            
            if (yPos > window.innerHeight) {
                clearInterval(interval);
                confetti.remove();
            }
        }, 10);
    }
}

// Activar brillo de las rosas
function activateRoseGlow() {
    const roses = document.querySelectorAll('.rose');
    
    roses.forEach(rose => {
        rose.style.animation = 'roseGlow 0.6s ease-in-out';
        rose.style.boxShadow = '0 0 40px rgba(255, 20, 147, 1)';
    });
    
    // Resetear después de la animación
    setTimeout(() => {
        roses.forEach(rose => {
            rose.style.animation = 'none';
            rose.style.boxShadow = '0 0 20px rgba(255, 20, 147, 0.5)';
        });
    }, 600);
}

// Agregar estilos de animación dinámicos
const style = document.createElement('style');
style.textContent = `
    @keyframes roseGlow {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
    }
`;
document.head.appendChild(style);

// Mensaje personalizado al cargar
window.addEventListener('load', function() {
    console.log('✨ Página cargada para Abril ✨');
    console.log('¡Te amo! 💕');
});

// Efecto de clic en cualquier parte de la página
document.addEventListener('click', function(e) {
    if (e.target.tagName !== 'BUTTON') {
        // Crear pequeños corazones donde hagas clic
        const heart = document.createElement('div');
        heart.style.position = 'fixed';
        heart.style.left = e.clientX + 'px';
        heart.style.top = e.clientY + 'px';
        heart.style.color = '#ff1493';
        heart.textContent = '💕';
        heart.style.fontSize = '20px';
        heart.style.zIndex = '3';
        heart.style.pointerEvents = 'none';
        heart.style.animation = 'floatUp 1.5s ease-out forwards';
        
        document.body.appendChild(heart);
        
        setTimeout(() => heart.remove(), 1500);
    }
});

// Agregar animación de flotación para los clics
const style2 = document.createElement('style');
style2.textContent = `
    @keyframes floatUp {
        0% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-50px) scale(0.5);
        }
    }
`;
document.head.appendChild(style2);
