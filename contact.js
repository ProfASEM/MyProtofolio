let date = new Date();
let year = date.getFullYear();
document.getElementById("year").textContent = year;

// Dark/Light mode toggle
const icon = document.getElementById('icon');
const body = document.body;

if (localStorage.getItem('theme') === 'light') {
	body.classList.remove('dark-theme');
	icon.src = 'moon.png';
	icon.title = 'Switch to dark mode';
} else {
	body.classList.add('dark-theme');
	icon.src = 'sun.png';
	icon.title = 'Switch to light mode';
}

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

// Nav Toggle (Hamburger) functionality
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
	navToggle.addEventListener('click', function () {
		navToggle.classList.toggle('open');
		navMenu.classList.toggle('open');
	});
	navMenu.querySelectorAll('a').forEach(link => {
		link.addEventListener('click', () => {
			navToggle.classList.remove('open');
			navMenu.classList.remove('open');
		});
	});
	navToggle.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			navToggle.classList.toggle('open');
			navMenu.classList.toggle('open');
		}
	});
}