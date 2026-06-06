/* ==========================================================
   MOBILE NAVBAR TOGGLE (Simple Traditional JS)
   ========================================================== */

// HTML Elements ko select karna
var menuBtn = document.getElementById('menuBtn');
var navbar = document.getElementById('navbar');
var navLinks = document.querySelectorAll('.nav-link');

// Burger icon par click event listener lagana
menuBtn.addEventListener('click', function () {
    // Menu container ko screen par show/hide karne ke liye active class toggle karna
    navbar.classList.toggle('active');

    // Toggle button ka icon badalna (Bars pattern se Cross badge design banana)
    var icon = menuBtn.querySelector('i');
    if (navbar.classList.contains('active')) {
        icon.className = 'fa-solid fa-xmark';
    } else {
        icon.className = 'fa-solid fa-bars';
    }
});

// Jab mobile screen drawer menu par kisi options link par single tap click ho, to menu box khud hi hide band ho jaye
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function () {
        navbar.classList.remove('active');
        menuBtn.querySelector('i').className = 'fa-solid fa-bars';
    });
}
