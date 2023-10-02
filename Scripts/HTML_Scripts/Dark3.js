// Making Constants
Example = document.querySelector('.Example')
navbar = document.querySelector('.navbar')
Theme = document.querySelector('.fa-2x')
Exampl = document.querySelector('.e')
Examp = document.querySelector('.f')
Exam = document.querySelector('.g')
Exa = document.querySelector('.h')
Ex = document.querySelector('.i')
// Applying Theme
Theme.addEventListener('click', () => {
    navbar.classList.toggle('dark')
    Example.classList.toggle('darkexample')
    Exampl.classList.toggle('darkexample')
    Examp.classList.toggle('darkexample')
    Exam.classList.toggle('darkexample')
    Exa.classList.toggle('darkexample')
    Ex.classList.toggle('darkexample')
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