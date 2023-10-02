// Making Constants
Example = document.querySelector('.Example')
navbar = document.querySelector('.navbar')
Theme = document.querySelector('.fa-solid')
// Applying Theme
Theme.addEventListener('click', () => {
    navbar.classList.toggle('dark')
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