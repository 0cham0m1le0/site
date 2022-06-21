menuBtn = document.querySelector('.menu-btn');
menuBtn.onclick = function(){
    onclick=$('.menu-btn').toggleClass('menu-btn_active');
    onclick=$('.menu-nav').toggleClass('menu-nav_active');
}
