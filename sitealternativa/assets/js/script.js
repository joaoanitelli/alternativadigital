const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active){
        document.querySelector('body').style = 'overflow: hidden;'
        event.currentTarget.setAttribute('aria-label','Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label','Abrir Menu');
        document.querySelector('body').style = ''
    }
}

btnMobile.addEventListener('click',toggleMenu);
btnMobile.addEventListener('touchstart',toggleMenu);

const botaoInicio = document.getElementsByClassName('btn-href')[0];
botaoInicio.addEventListener('click',toggleMenu);
botaoInicio.addEventListener('touchstart',toggleMenu);

/* menu */

window.addEventListener('scroll',function() {
    let header = document.querySelector('header')
    header.classList.toggle('rolagem',window.scrollY > 0)
})

/* REVEAL */

window.sr = ScrollReveal({ reset: true });

sr.reveal('.elemento',{duration: 2000,rotate: {x:0, y:80,z:-0}});