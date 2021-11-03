const burger = document.querySelector('.burger');
const faBars = document.querySelector(".fa-bars");
const faTimes = document.querySelector('.fa-times');
const nav = document.querySelector('nav ul');

const openNav = ()=>{
    burger.classList.toggle('active')
    nav.classList.toggle('active')
    faBars.classList.toggle('hide')
    faTimes.classList.toggle('hide')

}

faBars = addEventListener("click", openNav)
