//   for Navigation bar...

burger = document.querySelector('.hamburger')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.right')
list = document.querySelector('.navlist')

burger.addEventListener('click', () => {
  rightnav.classList.toggle('gayab')
  list.classList.toggle('gayab')
  navbar.classList.toggle('height')
})

// for hamburger...

function myFunction(x) {
  x.classList.toggle("change");
}