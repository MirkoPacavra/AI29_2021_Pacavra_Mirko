// Navigacija
const navBar = document.getElementById("navAnimacija");
const logoNav = document.getElementById("logoAnimacija");

window.addEventListener('scroll', () => {
    if(window.scrollY >= 100) {
        navBar.classList.add('navPozadina');
        logoNav.classList.add('textJumpOut');
    } else if (window.scrollY < 100) {
        navBar.classList.remove('navPozadina');
        logoNav.classList.remove('textJumpOut');
    }
});