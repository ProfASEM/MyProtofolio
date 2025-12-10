
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
        icon.src = '../images/moon.png';
        icon.title = 'Switch to dark mode';
    } else {
        body.classList.add('dark-theme');
        icon.src = '../images/sun.png';
        icon.title = 'Switch to light mode';
    }
    icon.onclick = function () {
        body.classList.toggle('dark-theme');
        if (body.classList.contains('dark-theme')) {
            icon.src = '../images/sun.png';
            icon.title = 'Switch to light mode';
            localStorage.setItem('theme', 'dark');
        } else {
            icon.src = '../images/moon.png';
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
        { title: 'Scroll Page', category: 'Web Development', img: 'web-removebg-preview.png', desc: 'Responsive Scroll Page', link: 'https://github.com/ProfASEM/ScrollPage' },
        { title: 'Menu', category: 'Web Development', img: 'web-removebg-preview.png', desc: 'Resturaunt menu EN/AR<br> versions responsive page', link: 'https://github.com/ProfASEM/menu' },
        { title: 'Prime Numbers', category: 'Python', img: 'python-removebg-preview.png', desc: 'A project that finds<br> the prime numbers between<br>1 and the number has <br>entered by user ', link: 'https://github.com/ProfASEM/mini_projects/blob/main/primeNumber.py' },
        { title: 'Factoriel', category: 'Python', img: 'python-removebg-preview.png', desc: 'Basic project that<br> calculates the factoriel<br> of a positive integer ', link: 'https://github.com/ProfASEM/mini_projects/blob/main/Factoriyel.py' },
        { title: 'Car Sales Analysis', category: 'Data Analysis', img: 'DA.png', desc: 'This is an Excel Sheets that provides an analysis of car sales from 2008 to 2012 and contains some visualizations', link: 'https://github.com/ProfASEM/Car-Sales-Analysis' },
        { title: 'Fibonacci <br> & <br> Lucas numbers', category: 'Python', img: 'python-removebg-preview.png', desc: 'Basic project that <br>evaluates any <br>fibonacci or lucas number ', link: 'https://github.com/ProfASEM/mini_projects/blob/main/Fib%26Luc.py' },
        { title: 'Random Poem', category: 'Web Development', img: 'web-removebg-preview.png', desc: 'If you get bored of lorem,<br> this project can generate<br> a random poem depends <br> how paragrafs you set it', link: 'https://github.com/ProfASEM/Random-poem' },
        { title: 'World Analysis', category: 'Data Analysis', img: 'DA.png', desc: 'This is the Analysis of world population, languages, economy..etc', link: 'https://github.com/ProfASEM/world-analysis' },
        { title: 'Home Page<br> Online Shopping', category: 'Web Development', img: 'web-removebg-preview.png', desc: 'A simple home page<br> of online shopping<br> of a product', link: 'https://github.com/ProfASEM/HomePage-Online-Shopping' },
        { title: 'E Commerce Analysis', category: 'Data Analysis', img: 'DA.png', desc: 'This is an analysis of perfomance of one of e commerce stores in 2023 supported by ML model to classify the customers to clusters', link: 'https://github.com/ProfASEM/e-commerce-analysis' },
        { title: 'Permutations<br>&<br>Combination', category: 'Python', img: 'python-removebg-preview.png', desc: 'A project that evaluates<br> permutation &<br> combination ', link: 'https://github.com/ProfASEM/mini_projects/blob/main/Perm%26Comb.py' },
        { title: 'Vectors', category: 'Python', img: 'python-removebg-preview.png', desc: 'a project about vectors', link: 'https://github.com/ProfASEM/mini_projects/blob/main/vectors.py' },
        { title: 'General Questions', category: 'Web Development', img: 'web-removebg-preview.png', desc: 'A page of general questions<br> with collapse property<br> with dark-light mode', link: 'https://github.com/ProfASEM/General-Quistions'},
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
                <img src="../images/${item.img}" alt="${item.title}">
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