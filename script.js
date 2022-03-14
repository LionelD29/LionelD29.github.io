const navbar = document.getElementsByTagName('nav')[0];

window.addEventListener('scroll', () => {
    if (scrollY >= window.innerHeight) {
        navbar.classList.remove('green-to-transparent');
        navbar.classList.add('transparent-to-green');
    } else if (navbar.classList.contains('transparent-to-green')) {
        navbar.classList.remove('transparent-to-green');
        navbar.classList.add('green-to-transparent');
    }
});