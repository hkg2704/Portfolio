function toggleMenu(){
    const toggleButton = document.querySelector('.hi');
    const navbarLinks = document.querySelector('.links2');
    navbarLinks.classList.toggle("open");
    toggleButton.classList.toggle("open");
    }