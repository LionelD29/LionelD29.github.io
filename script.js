const navbar = document.getElementsByTagName('nav')[0];

window.addEventListener('scroll', () => {
    if (scrollY >= window.innerHeight) {
        navbar.classList.remove('bg-green-to-transparent');
        navbar.classList.add('bg-transparent-to-green');
    } else if (navbar.classList.contains('bg-transparent-to-green')) {
        navbar.classList.remove('bg-transparent-to-green');
        navbar.classList.add('bg-green-to-transparent');
    }
});