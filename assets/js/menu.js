const btnHamburguer = document.querySelector('.hamburguer');
const menuDesk = document.querySelector('nav ul')
const menuLi = document.querySelectorAll('nav ul li')
const arrowTop = document.querySelectorAll('h2>span')
console.log(arrowTop);


btnHamburguer.addEventListener('click', ()=>{
    menuDesk.classList.toggle('mobile')
})


for (const li of menuLi) {
    li.addEventListener('click', (evt)=>{
        menuDesk.classList.remove('mobile')
        const targetSection = evt.target.innerText.toLowerCase();
        console.log(targetSection);
        goToView(`${targetSection}`)
    })
}

for (const arrow of arrowTop) {
    arrow.addEventListener('click', (evt)=>{
        goToView("topo")
    })
}

const goToView = (target)=>{
    console.log(target);
    document.getElementById(target).scrollIntoView({behavior: 'smooth'});
}