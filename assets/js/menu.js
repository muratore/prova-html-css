const btnHamburguer = document.querySelector('.hamburguer');
const menuDesk = document.querySelector('nav ul')
const menuLi = document.querySelectorAll('nav ul li')


btnHamburguer.addEventListener('click', ()=>{
    console.log('clicou');
    menuDesk.classList.toggle('menu-mobile')
    
})


for (const li of menuLi) {
    li.addEventListener('click', ()=>{
        menuDesk.classList.remove('menu-mobile')
    })
}