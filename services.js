//nav=-bar
let navBar = document.getElementById('navigation');
let toggleBar = document.getElementById('toggle-menu');


toggleBar.addEventListener('click', function(){
    toggleBar.classList.toggle('toggleActive');
    navBar.classList.toggle('overlay');
}) 
const navbar = document.querySelector('.nav-fixed');
window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};
//third section

document.querySelectorAll('.three-divs').forEach(item => {
    let h4Tag =document.createElement('h4');
    h4Tag.setAttribute('class', 'h4-tag');
    h4Tag.innerText='EASY TO ORDER';
    item.appendChild(h4Tag);
  
  
    let pTag3=document.createElement('p');
    pTag3.setAttribute('class', 'p-tag3');
    pTag3.innerText='Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.';
    item.appendChild(pTag3);
  });