const header_burger = document.querySelector(".header_burger");
if (header_burger){
    const headerMenu = document.querySelector(".header_menu");
    header_burger.addEventListener("click",function (e){
        header_burger.classList.toggle('_active')
        headerMenu.classList.toggle('_active')
    });
};