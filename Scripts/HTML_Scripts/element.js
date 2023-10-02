// Making Constants
const Example = document.querySelector('.e1'),
    Exampl2 = document.querySelector('.e2'),
    Exampl3 = document.querySelector('.e3'),
    Exampl4 = document.querySelector('.e4'),
    Exampl5 = document.querySelector('.e5'),
    Exampl6 = document.querySelector('.e6'),
    navbar = document.querySelector('.navbar'),
    Theme = document.querySelector('.theme');

// Applying Theme
Theme.addEventListener('click', () => {
    navbar.classList.toggle('dark');
    Example.classList.toggle('darkexample');
    Exampl2.classList.toggle('darkexample');
    Exampl3.classList.toggle('darkexample');
    Exampl4.classList.toggle('darkexample');
    Exampl5.classList.toggle('darkexample');
    Exampl6.classList.toggle('darkexample');
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