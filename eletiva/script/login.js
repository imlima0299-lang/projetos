var submit = document.querySelector('#submit')
var user = document.querySelector('#user')

submit.addEventListener("click", enviar)
function enviar(event) {
    event.preventDefault()
    localStorage.setItem("user", user.value)
    window.location.href = "index.html"
}