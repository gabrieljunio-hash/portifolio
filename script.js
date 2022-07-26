const btnMobile = document.getElementById('btn-mobile');
const linkmenu = document.querySelectorAll('.linkmenu');

function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault()
    
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');

    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);

    if(active) {
        event,currentTarget.setAttribute('aria-label', 'fechar menu');
    }
    else{
        event,currentTarget.setAttribute('aria-label', 'abrir menu');
    }
}

function clickMenulink(){
    
    const nav = document.getElementById('nav');
    nav.classList.remove('active');
}

for (let i = 0; i < linkmenu.length; i++) {
    linkmenu[i].addEventListener('click', clickMenulink);
  }

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);