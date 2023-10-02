// Theme Changing Code

const theme = document.querySelector('.theme'),
    navbar = document.querySelector('.navbar');

theme.addEventListener('click', () => {
    navbar.classList.toggle('dark');
});

let toggle = true;
var image = document.getElementById('Theme')

image.addEventListener('click', () => {
    var profile = document.getElementById('profile')
    toggle = !toggle
    if (toggle) {
        image.src = '../../Images/Theme button2.png'
    }
    else {
        image.src = '../../Images/Theme button.png'
    }
    if (toggle) {
        profile.src = '../../Images/Profiledark.png'
    }
    else {
        profile.src = '../../Images/Profile.png'
    }
})

// Sliding content code

const next = document.querySelector('.next'),
    prev = document.querySelector('.prev'),
    contentGroup = document.querySelector('.content-group'),
    One = contentGroup.querySelectorAll('div')[0],
    Two = contentGroup.querySelectorAll('div')[1];

next.addEventListener('click', () => {
    One.style.marginLeft = "-188vh";
    Two.style.marginLeft = "-376vh";
});

// if (next.click()) {
// }

prev.addEventListener('click', () => {
    let contentOne = document.querySelector('.one'),
        contentTwo = document.querySelector('.two');
    contentTwo.style.marginRight = "188vh";
});