let openBtn = document.querySelector("#open-btn")
let closeBtn = document.querySelector("#close-btn")
let headerList = document.querySelector(".header-list")

let formSubmitBtn = document.querySelector("#enviar-btn")

openBtn.addEventListener("click", openMenu)
closeBtn.addEventListener("click", closeMenu)


function openMenu() {
    headerList.style.left = "-3%"
    openBtn.style.display = 'none'
    closeBtn.style.display = "block"
}

function closeMenu() {
    headerList.style.left = '-200%'
    closeBtn.style.display = "none"
    openBtn.style.display = 'block'
}

function clickMenu() {
    headerList.style.left = '-200%'
    closeBtn.style.display = "none"
    openBtn.style.display = 'block'
}

formSubmitBtn.addEventListener("click", submitBtn)

function submitBtn() {

    let formInputName = document.querySelector(".input-nome")
    let inputNameValue = formInputName.value

    let formInputEmail = document.querySelector(".input-email")
    let inputEmailValue = formInputEmail.value

    let formInputMsg = document.querySelector(".input-msg")
    let inputMsgValue = formInputMsg.value


    if (inputNameValue.length === 0 && inputEmailValue.length === 0 && inputMsgValue.length === 0) {
        formInputName.setAttribute('id', 'error')
        formInputEmail.setAttribute('id', 'error')
        formInputMsg.setAttribute('id', 'error')
    }
}

function inputBlur() {

    let formInputName = document.querySelector(".input-nome")
    let formInputEmail = document.querySelector(".input-email")
    let formInputMsg = document.querySelector(".input-msg")


    formInputName.removeAttribute('id', 'error')
    formInputEmail.removeAttribute('id', 'error')
    formInputMsg.removeAttribute('id', 'error')

}

window.addEventListener('scroll', function() {
    var voltarAoTopo = document.getElementById('voltar-ao-topo');
    if (window.pageYOffset > 100) {
      voltarAoTopo.style.display = 'block';
    } else {
      voltarAoTopo.style.display = 'none';
    }
  });
  

//   img slide projetos

let slideIndex = 0;
let slideIndex2 = 0;

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
  setTimeout(showSlides, 3000); // Altere 1000 para o intervalo desejado em milissegundos (1 segundo neste exemplo)
}

// Função para mostrar os slides automaticamente (para o segundo slideshow)
function showSlides2() {
  let i;
  const slides2 = document.getElementsByClassName("mySlides2");
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > slides2.length) {
    slideIndex2 = 1;
  }
  slides2[slideIndex2 - 1].style.display = "block";
  setTimeout(showSlides2, 3000); // Altere 1000 para o intervalo desejado em milissegundos (1 segundo neste exemplo)
}

// Inicie os slideshows quando a página for carregada
window.onload = function () {
  showSlides();
  showSlides2();
};

 
document.addEventListener("DOMContentLoaded", function() {
  var currentYear = new Date().getFullYear();
  document.querySelector('.currentYear').textContent = currentYear;
});