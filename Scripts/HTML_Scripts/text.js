// Making Constants
const navbar = document.querySelector('.navbar'),
Theme = document.querySelector('.fa-solid'),
burg = document.querySelector('.bar1'),
burge = document.querySelector('.bar2'),
burger = document.querySelector('.bar3');
// Applying Theme
Theme.addEventListener('click', () => {
    navbar.classList.toggle('dark');
    burger.classList.toggle('darkbug');
    burge.classList.toggle('darkbug');
    burg.classList.toggle('darkbug');
})
let toggle = true;
var image = document.getElementById('Theme')
// Changing the profile pictures using if else conditions
image.addEventListener('click', () => {
    var profile = document.getElementById('profile')
    toggle = !toggle
    if (toggle) {
        image.src = '../Images/Theme button2.png'
    }
    else {
        image.src = '../Images/Theme button.png'
    }
    if (toggle) {
        profile.src = '../Images/Profiledark.png'
    } 
    else {
        profile.src = '../Images/Profile.png'
    }
})
//   for Navigation bar...

const hamburger = document.querySelector('.hamburger'),
rightnav = document.querySelector('.right'),
list = document.querySelector('.navlist');

hamburger.addEventListener('click', () => {
  rightnav.classList.toggle('gayab')
  list.classList.toggle('gayab')
  navbar.classList.toggle('height')
})

// for hamburger...

function myFunction(x) {
  x.classList.toggle("change");
}