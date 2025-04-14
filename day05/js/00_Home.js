const menuButtons = document.querySelectorAll('.menu-btn');
const mobileMenus = document.querySelectorAll('.mobile-menu');

menuButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        mobileMenus[index].classList.toggle('hidden');
    });
});

document.getElementById("menu-toggle").addEventListener("click", function () {
    const menu = document.getElementById("mobile-menu");
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
        menu.classList.add("flex");
    } else {
        menu.classList.add("hidden");
    }
});

document.getElementById('thumbnail-container').addEventListener('click', function (e) {
    if (e.target.classList.contains('thumb')) {
        document.getElementById('main-image').src = e.target.src;
    }
});
