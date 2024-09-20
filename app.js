const box = document.getElementById('draggable-box');

let isDragging = false;
let startX, startY, initialX, initialY;

// mousedown - déclenche le début du drag
box.addEventListener('mousedown', (e) => {
    isDragging = true;

    // Récupère la position de départ de la souris
    startX = e.clientX;
    startY = e.clientY;

    // Récupère la position initiale du carré
    const rect = box.getBoundingClientRect();
    initialX = rect.left;
    initialY = rect.top;

    box.style.cursor = 'grabbing';
    
    // Ajoute l'événement mousemove
    document.addEventListener('mousemove', onMouseMove);
});

// mousemove - gère le déplacement pendant le drag
function onMouseMove(e) {
    if (isDragging) {
        // Récupère la position actuelle de la souris
        const currentX = e.clientX;
        const currentY = e.clientY;

        // Calcule le delta (différence entre la position de départ et actuelle)
        const deltaX = currentX - startX;
        const deltaY = currentY - startY;

        // Applique la transformation CSS pour déplacer l'élément
        box.style.transform = `translate(${initialX + deltaX}px, ${initialY + deltaY}px)`;
    }
}

// mouseup - termine le drag
document.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        box.style.cursor = 'grab';

        // Retire l'événement mousemove
        document.removeEventListener('mousemove', onMouseMove);
    }
});
