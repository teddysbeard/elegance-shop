document.querySelector('.menu-icon-wrapper').onclick = function() {
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
    document.querySelector(".navigation__menu").classList.toggle("navigation__menu_active");
}