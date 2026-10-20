var hamburguer = document.querySelector('#hamburguer')
var menu = document.querySelector('#menu')
var config = document.querySelector('#configuração-bt')
var darkBt = document.querySelector('#dark')
var menuDark = document.querySelector('#menudark')
var close = document.querySelector('#close')

hamburguer.addEventListener("click", menuconfig)
function menuconfig() {
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "flex"
    } else {
        menu.style.display = "none"
    }
}

close.addEventListener("click", closemenu)
function closemenu() {
    menuDark.style.display = "none"
}
config.addEventListener("click", darkMode)
function darkMode() {
    menuDark.style.display = "flex"
    if (menuDark.style.display = "flex") {
        menu.style.display = "none"
    } else {
        menu.style.display = "flex"
    }
}

darkBt.addEventListener("click", dark)
function dark() {
    document.body.classList.toggle("darkmode")
    if (document.body.classList.contains("darkmode")) {
        localStorage.setItem('tema', 'dark')
    } else {
        localStorage.removeItem('tema')
    }

    if (document.body.classList.contains('darkmode')) {
        darkBt.value = "Light Mode"
    } else {
        darkBt.value = "Dark Mode"
    }
}

if (localStorage.getItem('tema') === 'dark') {
    document.body.classList.add('darkmode');
}