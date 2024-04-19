# Project-FlixMaster!!!

<br>

 <div align="center">
<img src="https://media.giphy.com/media/9TFBxN300KpCUI6sBD/giphy.gif" align="center" height="45" width="45">

[ ( Clique aqui e desfrute de grandes filmes e séries agora mesmo: `FlixMaster!!!`) ](https://rafarz76dev-project-flixmaster.netlify.app/)

<br>

<div align="center">
  
<img src= "https://media.giphy.com/media/3zSF3Gnr7cxMbi6WoP/giphy.gif" align="center" height="55" width="55"> [Demonstração-FlixMaster] <img src= "https://media.giphy.com/media/E5DzZsofmgxc9wjbhX/giphy.gif" align="center" height="35" width="35">

<img height="480em" src="./assets//images/apresentacao-readme-flixMaster.gif"  align="center">

---

<div align="left">

### 📌 Objetivo

- Desenvolvi um projeto essencial para meus estudos e futuros trabalhos: uma plataforma de séries e filmes em alta. Os usuários podem interagir com o carrossel, selecionando o conteúdo desejado. Utilizei a estrutura padrão `` Arquitetura/Organização de Pastas` para gerenciar eficientemente os arquivos. Com HTML, CSS e JavaScript, implementei essa solução, consolidando meus conhecimentos e me preparando para desafios futuros com confiança.

### 📌Estrutura do Projeto:

```
Project-FlixMaster/
│
├── .vscode/                           // Pasta do VSCode
│   └── settings.json                  #  Configurações do VSCode para definir a porta em que o servidor local será executado
│
├── assets/                            // Pasta Recurso do projeto (assets)
│   ├── images/                        // Pasta Imagens
│   │         │
│   │         ├── filmes/             // Pasta para Arquivos imagens de filmes
│   │         │   └── filme1.jpg      # Imagem do filme 1
│   │         │   └── filme2.jpg      # Imagem do filme 2
│   │         │   └── ...             # Outras imagens de filmes
│   │         │   └── filme6.jpg      # Imagem do filme 6
│   │         │
│   │         ├── series/             // Pasta Arquivos para imagens de series
│   │         │   └── serie1.png      # Imagem da série 1
│   │         │   └── serie2.png      # Imagem da série 2
│   │         │   └── ...             # Outras imagens de séries
│   │         │   └── serie6.png      # Imagem da série 6
│   │
│   │
│   │
│   ├── js/                           // Pasta  JavaScript
│   │    └── filme.js                 # Arquivo JS para filmes
│   │    └── serie.js                 # Arquivo JavaScript para séries
│   │
│   ├── styles/                       // Pasta  CSS
│   │   └─── header-footer.css        # Estilos para cabeçalho e rodapé
│   │   └─── media-query.css          # Estilos para media queries
│   │   └─── sections.css             # Estilos para seções
│
│
├── index.html                        # Arquivo HTML principal
│
├── LICENSE                           # Licença do projeto
│
└── README.md                         # Documentação do projeto
```

📌 Aqui está uma pequena documentação do Projeto: Conceitos Aplicados👇

▪ No HTML criamos (nav, sections e footer):

🚀Copy code

```
    <!-- Header Nav -->
    <header>
        <div class="logo">FlixMaster </div>
        <nav id="menu">
            <ul>
                <li><a href="#home">Início</a></li>
                <li><a href="#series">Séries</a></li>
                <li><a href="#filmes">Filmes</a></li>
                <li><a href="#contact"><i class="fa fa-phone-square fa-lg" aria-hidden="true"></i></a>
            </ul>
        </nav>
    </header>
```

```
<!-- Serie Section -->
        <section id="series" class="carousel-section">
            <h2 carousel-section__title>Séries</h2>
            <!-- Carrossel de séries -->
            <div class="carousel-container carousel-container--series">
                <div class="serie">
                    <a href="https://www.netflix.com/watch/81481482?trackId=200257859" target="_blank" title="Entrevias"
                        class="methodology__project--link">
                        <div class="project-link--large">VIEW</div>
                        <img src="./assets/images/series/serie01.png" alt="Serie 1">
                    </a>
                    <h3>Entrevias</h3>
                </div>
                <div class="serie">
                    <a href="https://www.netflix.com/watch/81307578?trackId=255824129&tctx=0%2C0%2C49181233-a1c7-40c1-ac19-f4971416788b-6438686%2C49181233-a1c7-40c1-ac19-f4971416788b-6438686%7C2%2C%2C%2C%2C%2C%2CVideo%3A81002370%2CdetailsPagePlayButton"
                        target="_blank" title="CobraKay" class="methodology__project--link">
                        <div class="project-link--large">VIEW</div>
                        <img src="./assets/images/series/serie02.png" alt="Serie 2">
                    </a>
                    <h3>CobraKay</h3>
                </div>
                 </div>
            <button class="prev-btn prev-btn--series">&lt;</button>
            <button class="prev-btn next-btn--series">&gt;</button>
        </section>
```

▪ No CSS criamos (header-footer, sections e media-query):

🚀Copy code

```
/* Estilos para a navegação */
header {
  position: fixed; /* Define o posicionamento fixo */
  top: 0; /* Fixa o cabeçalho no topo */
  width: 100%; /* Define a largura total */
  background-color: #111;
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000; /* Ajusta a ordem de sobreposição */
}

nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex; /* Altera o display para flexbox */
  justify-content: space-between; /* Distribui os itens uniformemente */
}
```

```
/* Estilos para o rodapé */
footer {
  background-color: #343a40;
  color: #fff;
  padding: 50px 0;
  text-align: center;
}

.social-icon {
  display: inline-block;
  margin: 0 10px;
  font-size: 24px;
  color: #ee90cd;
  transition: color 0.3s ease;
}
```

```
/* Estilo para as seções (Serie e Filme) */
.serie {
  position: relative; /* Define a posição relativa para que o z-index funcione */
  flex: 0 0 auto;
  width: 200px; /* Largura do item do carrossel */
  margin: 0 auto; /* Centraliza os itens horizontalmente */
  /* Outros estilos para cada item do carrossel */
  margin-top: 20px;
  text-align: center;
}

.filme {
  flex: 0 0 auto;
  width: 200px; /* Largura do item do carrossel */
  margin: 0 auto; /* Centraliza os itens horizontalmente */
  /* Outros estilos para cada item do carrossel */
  margin-top: 20px;
  text-align: center;
}
```

```
/* Estilos específicos para dispositivos menores */
    .serie {
      flex: 0 0 calc(50% - 20px); /* Define a largura de cada item do carrossel (ajuste conforme necessário) */
      margin: 0 auto; /* Centraliza os itens horizontalmente */
      text-align: center; /* Alinha o texto ao centro */      
    }

    .filme {
      flex: 0 0 calc(50% - 20px); /* Define a largura de cada item do carrossel (ajuste conforme necessário) */
      margin: 0 auto; /* Centraliza os itens horizontalmente */
      text-align: center; /* Alinha o texto ao centro */      
    }
```

▪ O JavaScript foi empregado para construir a lógica fundamental do carrossel, assegurando seu funcionamento adequado em conjunto com os arquivos filme.js e serie.js.:

🚀Copy code

```
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
```

```
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
```

---

## Tecnologias

<img src="https://media.giphy.com/media/iT138SodaACo9LImgi/giphy.gif" align="center" height="75" width="75"> Tecnologias utilizadas no projeto:

- HTML5 (Linguagem de marcação utilizada para a construção das páginas web).

- CSS3 (Mecanismo para adicionar estilos a uma página web).

- JavaScript (Linguagem de programação de alto nível, que pode ser interpretada ou compilada just-in-time (JIT) para execução em um ambiente específico).

- Git (Sistema de controle de versões).

- Github (Plataforma para hospedagem de código-fonte).

- Visual Studio Code (Editor de código-fonte).

- Navegador web (Interação com documentos HTML).

---

<img src="https://media.giphy.com/media/SS8CV2rQdlYNLtBCiF/giphy.gif" align="center" height="35" width="45"> Ferramenta utilizada no projeto:

- [VsCode](https://code.visualstudio.com/download) (v1.80.1)

---

## Licença

- Esse projeto está sob a licença MIT.

---

<img src="https://media.giphy.com/media/ImmvDZ2c9xPR8gDvHV/giphy.gif" align="center" height="25" width="25"> Autor

<p>
    <img align=left margin=10 width=80 src="https://avatars.githubusercontent.com/u/87991807?v=4"/>
    <p>&nbsp&nbsp&nbspRafaRz76Dev<br>
    &nbsp&nbsp&nbsp<a href="https://api.whatsapp.com/send/?phone=47999327137">Whatsapp</a>&nbsp;|&nbsp;<a href="https://www.linkedin.com/in/rafael-raizer//">LinkedIn</a>&nbsp;|&nbsp;<a href="https://github.com/RafaRz76Dev">GitHub</a>|&nbsp;<a href="https://public.tableau.com/app/profile/rafael.raizer">Tableau</a>|&nbsp;<a href="https://portifolio-rafarz76dev.netlify.app/">Portfólio</a>&nbsp;</p>
</p>
