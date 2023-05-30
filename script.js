let openBtn = document.querySelector("#open-btn")
let closeBtn = document.querySelector("#close-btn")
let headerList = document.querySelector(".header-list")

let formSubmitBtn = document.querySelector("#enviar-btn")

openBtn.addEventListener("click", openMenu)
closeBtn.addEventListener("click", closeMenu)


function openMenu() {
    headerList.style.top = "-4.3%"
    openBtn.style.display = 'none'
    closeBtn.style.display = "block"
}

function closeMenu() {
    headerList.style.top = '-200%'
    closeBtn.style.display = "none"
    openBtn.style.display = 'block'
}

function clickMenu() {
    headerList.style.top = '-200%'
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
  