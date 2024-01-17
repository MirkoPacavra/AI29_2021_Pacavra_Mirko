// Navigacija
const navBar = document.getElementById("navAnimacija");
const logoNav = document.getElementById("logoAnimacija");

window.addEventListener('scroll', () => {
    if(window.scrollY >= 100) {
        navBar.classList.add('navPozadina');
    } else if (window.scrollY < 100) {
        navBar.classList.remove('navPozadina');
    }
});

window.addEventListener('scroll', () => {
    if(window.scrollY >= 100) {
        logoNav.classList.add('textJumpOut');
    } else if (window.scrollY < 100) {
        logoNav.classList.remove('textJumpOut');
    }
});