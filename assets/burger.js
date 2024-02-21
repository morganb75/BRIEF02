window.addEventListener('load', () => {
    let burgerIcone = document.querySelector('.menu-brger');
    let menuDiv = document.querySelector('.menu');
    let homeLink = document.querySelector('.home');
    let navLink = document.querySelector('.nav-container');

    console.log("LOADING SCRIPT BURGER JS");

    console.log(burgerIcone);

    burgerIcone.addEventListener('click', () => {
        
        burgerIcone.classList.add ('inactive');
        menuDiv.classList.add('active');
    })
})