if (localStorage.getItem('tema') === 'dark') {
    document.body.classList.add('darkmode');
    darkBt.value = "Light Mode"
} else {
    darkBt.value = "Dark Mode"
}