document.addEventListener("DOMContentLoaded", function() {
    const prevBtnFilmes = document.querySelector('.prev-btn--filmes');
    const nextBtnFilmes = document.querySelector('.next-btn--filmes');
    const carouselContainerFilmes = document.querySelector('.carousel-container--filmes');

    let carouselPositionFilmes = 0;
    const filmeWidth = 220; // Largura do item do carrossel (incluindo margem)

    // Função para mover o carrossel de filmes para a esquerda
    function moveCarouselLeftFilmes() {
        carouselPositionFilmes += filmeWidth;
        if (carouselPositionFilmes > 0) {
            carouselPositionFilmes = 0;
        }
        carouselContainerFilmes.style.transform = `translateX(${carouselPositionFilmes}px)`;
    }

    // Função para mover o carrossel de filmes para a direita
    function moveCarouselRightFilmes() {
        const maxWidthFilmes = -((carouselContainerFilmes.children.length - 3) * filmeWidth);
        carouselPositionFilmes -= filmeWidth;
        if (carouselPositionFilmes < maxWidthFilmes) {
            carouselPositionFilmes = maxWidthFilmes;
        }
        carouselContainerFilmes.style.transform = `translateX(${carouselPositionFilmes}px)`;
    }

    // Adiciona eventos de clique aos botões de navegação de filmes
    prevBtnFilmes.addEventListener('click', moveCarouselLeftFilmes);
    nextBtnFilmes.addEventListener('click', moveCarouselRightFilmes);
});
