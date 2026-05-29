// número do slide que está aparecendo agora
let slideIndex = 0;

// pega todos os slides
let slides = document.querySelectorAll(".slide");

// pega todas as bolinhas
let bolinhas = document.querySelectorAll(".bolinha");


// função para mostrar o slide certo
function mostrarSlide(index) {

  // se passar do último slide, volta para o primeiro
  if (index >= slides.length) {
    slideIndex = 0;
  }

  // se voltar antes do primeiro, vai para o último
  if (index < 0) {
    slideIndex = slides.length - 1;
  }

  // remove a classe ativo de todos os slides
  slides.forEach(function(slide) {
    slide.classList.remove("ativo");
  });

  // remove a classe ativa de todas as bolinhas
  bolinhas.forEach(function(bolinha) {
    bolinha.classList.remove("ativa-bolinha");
  });

  // mostra o slide atual
  slides[slideIndex].classList.add("ativo");

  // ativa a bolinha atual
  bolinhas[slideIndex].classList.add("ativa-bolinha");
}


// função das setas
function mudarSlide(direcao) {
  slideIndex = slideIndex + direcao;
  mostrarSlide(slideIndex);
}


// função das bolinhas
function slideAtual(index) {
  slideIndex = index;
  mostrarSlide(slideIndex);
}


// troca de slide automaticamente a cada 5 segundos
setInterval(function() {
  slideIndex++;
  mostrarSlide(slideIndex);
}, 5000);


// mostra o primeiro slide quando abrir a página
mostrarSlide(slideIndex);