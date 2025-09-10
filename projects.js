
// Set current year in footer
document.addEventListener('DOMContentLoaded', function () {
    let date = new Date();
    let year = date.getFullYear();
    document.getElementById("year").textContent = year;

    // Dark/Light mode toggle setup
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

    // Project filtering logic
    // Define your project data here (replace with your real data)
    const menu = [
        { title: 'Project 1', category: 'Web Development', img: 'web-removebg-preview.png', desc: 'Description', link: '#' },
        { title: 'Project 2', category: 'Data Analysis', img: 'DA.png', desc: 'Description', link: '#' },
        { title: 'Project 3', category: 'Mathematics', img: 'math.webp', desc: 'Description', link: '#' },
        { title: 'Project 4', category: 'Python', img: 'python-removebg-preview.png', desc: 'Description', link: '#' },
        { title: 'Project 5', category: 'Data Analysis', img: 'DA.png', desc: 'Description', link: '#' },
        { title: 'Project 6', category: 'Python', img: 'python-removebg-preview.png', desc: 'Description', link: '#' },
        { title: 'Project 7', category: 'Web Development', img: 'web-removebg-preview.png', desc: 'Description', link: '#' },
        { title: 'Project 8', category: 'Mathematics', img: 'math.webp', desc: 'Description', link: '#' },
        { title: 'Project 9', category: 'Web Development', img: 'web-removebg-preview.png', desc: 'Description', link: '#' },
        // Add more projects as needed
    ];

    const Menu = document.getElementsByTagName("main")[0];
    const buttons = document.querySelector(".button-container");

    // Display all projects on load
    displayMenuItems(menu);

    // Get unique categories
    const categories = menu.reduce(function (values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ['all']);

    // Create filter buttons
    const categoryBtns = categories.map(function (category) {
        return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`;
    }).join("");
    buttons.innerHTML = categoryBtns;

    // Add event listeners to filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                return menuItem.category === category;
            });
            if (category === 'all') {
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });
});

// Display project cards in the main section
function displayMenuItems(menuItems) {
    const Menu = document.getElementsByTagName("main")[0];
    let displayMenu = menuItems.map(function (item) {
        return `<div class="project">
            <div class="project-image">
                <img src="${item.img}" alt="${item.title}">
            </div>
            <div class="project-info">
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
                <a href="${item.link}" class="project-link" target="_blank">View Project</a>
            </div>
        </div>`;
    }).join("");
    Menu.querySelector('.projects-container').innerHTML = displayMenu;
}

// --- End of file ---