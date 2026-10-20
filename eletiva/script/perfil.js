var res = document.querySelector('#res')
var user = localStorage.getItem("user")

if (localStorage.getItem('tema') === 'dark') {
    document.body.classList.add('darkmode')
}

res.innerHTML = `<strong>${user}</strong>`