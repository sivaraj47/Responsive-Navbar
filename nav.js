const menu = document.querySelector(".menu");
const menulist = document.querySelector('nav ul');

menu.addEventListener('click', ()=>{
  menulist.classList.toggle("show");
});
