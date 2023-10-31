const burgerBtn = document.querySelector("#burger_btn");
const mobileMenu = document.querySelector("#mobileMenu");
burgerBtn.addEventListener("click", function() {
    burgerBtn.classList.toggle("active");
    mobileMenu.classList.toggle("active");
})