let menu = document.getElementById("myMenu")
document.onclick=mymenu
function mymenu() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}







//const btnMobile = document.getElementById('btn-mobile');
//console.log(btnMobile)
//function toggleMenu(event) {
 // if (event.type === 'touchstart') event.preventDefault();
 // const nav = document.getElementById("#nav");
  //nav.classList.toggle('active');
 
 // const active = nav.classList.contains('active');
  //event.currentTarget.setAttribute//('aria-expanded', active);
 // if (active) {
 //   event.currentTarget.setAttribute('aria-label', //'Fechar Menu');
 // } else {
 //   event.currentTarget.setAttribute('aria-label', //'Abrir Menu');
//  }
//}//
//btnMobile.addEventListener('click', toggleMenu);//
//btnMobile.addEventListener('touchstart', toggleMenu);
//