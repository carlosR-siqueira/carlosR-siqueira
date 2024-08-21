//   img slide projetos

let slideIndex = 0;

// Função para mostrar os slides automaticamente
function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Altere 2000 para o intervalo desejado em milissegundos (2 segundos neste exemplo)
}

// Inicie o slideshow quando a página for carregada
window.onload = function () {
  showSlides();
};