let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('.nav');
hamburger.addEventListener('click', function (e) {
    e.stopPropagation();
    nav.classList.toggle('active');
});

document.addEventListener('click', function (e) {
    if (!nav.contains(e.target)) {
        nav.classList.remove('active');
    }
});

const toTopBtn = document.getElementById("toTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        toTopBtn.style.display = "block";
    } else {
        toTopBtn.style.display = "none";
    }
});

toTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
