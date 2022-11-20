
//nav=-bar
let navBar = document.getElementById('navigation');
let toggleBar = document.getElementById('toggle-menu');


toggleBar.addEventListener('click', function(){
    toggleBar.classList.toggle('toggleActive');
    navBar.classList.toggle('overlay');
}) 

//accordion
let accordion = document.querySelectorAll('.container-about');

for (let item of accordion) {
    item.addEventListener('click', function() {
        this.classList.toggle('active');
    })
}