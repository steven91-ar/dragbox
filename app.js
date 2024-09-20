const rings = document.querySelectorAll('.draggable-ring');

rings.forEach(ring => {
    let isDragging = false;
    let startX, startY, initialX, initialY;

    // mousedown - déclenche le début du drag pour chaque anneau
    ring.addEventListener('mousedown', (e) => {
        isDragging = true;

        // Récupère la position de départ de la souris
        startX = e.clientX;
        startY = e.clientY;

        // Récupère la position initiale de l'anneau
        const rect = ring.getBoundingClientRect();
        initialX = rect.left;
        initialY = rect.top;

        ring.style.cursor = 'grabbing';
        
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
            ring.style.left = `${initialX + deltaX}px`;
            ring.style.top = `${initialY + deltaY}px`;
        }
    }

    // mouseup - termine le drag
    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            ring.style.cursor = 'grab';

            // Retire l'événement mousemove
            document.removeEventListener('mousemove', onMouseMove);
        }
    });
});