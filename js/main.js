btn = document.querySelectorAll('.btn');
menu = document.querySelector('.menu')
menuWrapper = document.querySelector('.menu__wrapper')

btn.forEach(el => {
    el.addEventListener('click',()=>{
    menu.classList.toggle('menu--closed')
    menuWrapper.classList.toggle('menu__wrapper--closed')
    })
});
