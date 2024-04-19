document.addEventListener("DOMContentLoaded", function() {
    const prevBtnSeries = document.querySelector('.prev-btn--series');
    const nextBtnSeries = document.querySelector('.next-btn--series');
    const carouselContainerSeries = document.querySelector('.carousel-container--series');

    let carouselPositionSeries = 0;
    const serieWidth = 220; // Largura do item do carrossel (incluindo margem)

    // Função para mover o carrossel de series para a esquerda
    function moveCarouselLeftSeries() {
        carouselPositionSeries += serieWidth;
        if (carouselPositionSeries > 0) {
            carouselPositionSeries = 0;
        }
        carouselContainerSeries.style.transform = `translateX(${carouselPositionSeries}px)`;
    }

    // Função para mover o carrossel de series  para a direita
    function moveCarouselRightSeries() {
        const maxWidthSeries = -((carouselContainerSeries.children.length - 3) * serieWidth);
        carouselPositionSeries -= serieWidth;
        if (carouselPositionSeries < maxWidthSeries) {
            carouselPositionSeries = maxWidthSeries;
        }
        carouselContainerSeries.style.transform = `translateX(${carouselPositionSeries}px)`;
    }

    // Adiciona eventos de clique aos botões de navegação de series 
    prevBtnSeries.addEventListener('click', moveCarouselLeftSeries);
    nextBtnSeries.addEventListener('click', moveCarouselRightSeries);
});

