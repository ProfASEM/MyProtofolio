// Set current year in footer
let date = new Date();
let year = date.getFullYear();
document.getElementById("year").textContent = year;

// Dark/Light mode toggle logic
const icon = document.getElementById('icon');
const body = document.body;

// Set initial mode based on localStorage or default to dark
if (localStorage.getItem('theme') === 'light') {
    body.classList.remove('dark-theme');
    icon.src = 'moon.png';
    icon.title = 'Switch to dark mode';
} else {
    body.classList.add('dark-theme');
    icon.src = 'sun.png';
    icon.title = 'Switch to light mode';
}

// Toggle theme and update icon/localStorage
icon.onclick = function () {
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
        icon.src = 'sun.png';
        icon.title = 'Switch to light mode';
        localStorage.setItem('theme', 'dark');
    } else {
        icon.src = 'moon.png';
        icon.title = 'Switch to dark mode';
        localStorage.setItem('theme', 'light');
    }
};

// Nav Toggle (Hamburger) functionality for mobile
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
	// Toggle nav menu on click
	navToggle.addEventListener('click', function (e) {
		// Prevent toggling when clicking the icon itself
		if (e.target.id === 'icon') return;
		navToggle.classList.toggle('open');
		navMenu.classList.toggle('open');
	});
	// Close menu when clicking a link (for SPA feel)
	navMenu.querySelectorAll('a').forEach(link => {
		link.addEventListener('click', () => {
			navToggle.classList.remove('open');
			navMenu.classList.remove('open');
		});
	});
	// Allow keyboard toggle (Enter/Space)
	navToggle.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			navToggle.classList.toggle('open');
			navMenu.classList.toggle('open');
		}
	});
}