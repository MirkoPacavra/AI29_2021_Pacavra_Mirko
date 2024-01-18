// Pozadina
document.body.style.background = '#070c11';

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

// Progress bar za vesti
function updateProgressBar() {
	const { scrollTop, scrollHeight } = document.documentElement;
	const scrollPercent = `${(scrollTop / (scrollHeight - window.innerHeight)) * 100}%`;
	document.querySelector('#progBar').style.setProperty('--progress', scrollPercent);
}

document.addEventListener('scroll', updateProgressBar);