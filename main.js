const toggler = document.querySelector('.toggler');
const section = document.querySelector('section');
const beDriver = document.querySelector('.beDriver');
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const ul = document.getElementById('navLinks');
const body = document.querySelector('body');


//toggle Function
const toggle = (trigger, event, item, addClass) => {
    trigger.addEventListener(event, () => {
        item.classList.toggle(addClass);
    });
};

toggle(toggler, 'click', section, 'slide');
toggle(toggler, 'click', header, 'slide');
toggle(toggler, 'click', nav, 'active');
toggle(toggler, 'click', body, 'overflow');
toggle(toggler, 'click', beDriver, 'slide');
toggle(toggler, 'click', ul, 'active');

//Responsive Nav
const navCondense = () => {
    if (window.matchMedia('(min-width: 960px)').matches) {
        ul.innerHTML = '<li><a href="" class="navLink">Food</a></li><li><a href="" class="navLink">Drive</a></li><li><a href="" class="navLink">Business</a><li><a href="" class="navLink">Cities</a></li></li><li class="rideLink"><a href="" class="navLink rideBtn">Ride</a></li>';


        nav.style.width = '50%';
        nav.style.left = '48%';

    } else {
        ul.innerHTML = '<ul id=navLinks><li><a href="" class="navLink">Ride</a></li><li><a href="" class="navLink">Fleet</a></li><li><a href="" class="navLink">Business</a></li><li><a href="" class="navLink">Scooters</a></li><li><a href="" class="navLink">Drive</a></li><li><a href="" class="navLink">Food</a></li><li><a href="" class="navLink">Cities</a></li><li><a href="" class="navLink">Careers</a></li><li><a href="" class="navLink">Blog</a></li><li><a href="" class="navLink">Franchise</a></li><li><a href="" class="navLink">Green Plan</a></li><li><a href="" class="navLink">Press</a></li></ul>';
        nav.style.width = '250px';
        nav.style.left = 'calc(100% - 250px)';
    }
}
let newNav = window.matchMedia('(min-width: 960px)');
navCondense();
newNav.addEventListener(navCondense);