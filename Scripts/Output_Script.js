const first = document.querySelector(".first");
const iframe = document.querySelector("iframe");
const btn = document.querySelector("button");
let sec = document.querySelector('.section'),
    container = document.querySelector('.container'),
    part = document.querySelector('.partition');

btn.addEventListener("click", () => {
    var html = first.textContent;
    iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
});


first.addEventListener('keyup', () => {
    var html = first.textContent;
    iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
})

first.addEventListener("paste", function (e) {
    e.preventDefault();
    var text = e.clipboardData.getData("text/plain");
    document.execCommand("insertText", false, text);
});

document.querySelector('.content').style.fontFamily = "Consolas";
document.querySelector('.content').style.fontSize = "18px";

let toggle = true;
const image = document.getElementById('Theme')
// Changing the profile pictures using if else conditions
image.addEventListener('click', () => {
    var profile = document.getElementById('profile')
    toggle = !toggle
    if (toggle) {
        image.src = '../../../Images/Theme button2.png'
    }
    else {
        image.src = '../../../Images/Theme button.png'
    }
    if (toggle) {
        profile.src = '../../../Images/Profiledark.png'
    } 
    else {
        profile.src = '../../../Images/Profile.png'
    }
})

Theme.addEventListener('click', () => { 
    sec.classList.toggle('dark')
    container.classList.toggle('back')
    part.classList.toggle('dark')
})