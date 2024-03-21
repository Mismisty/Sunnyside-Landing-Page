const openMenu = document.querySelector(".open-menu");
const primaryNav = document.querySelector(".primary-nav");

openMenu.addEventListener("click", function(){
  
    primaryNav.classList.toggle("hide");

    if(primaryNav.classList.contains('hide')){
        openMenu.style.opacity = 1;
    }else {
        openMenu.style.opacity = 0.5;
    }
});