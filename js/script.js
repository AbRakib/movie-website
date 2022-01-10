var mobileMenu = document.querySelector('.mobile-menu');
const menuButton = document.querySelector('.openmenu');
const closeButton = document.querySelector('.closemenu');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = "hidden";
});

closeButton.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = "visible";
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
  }