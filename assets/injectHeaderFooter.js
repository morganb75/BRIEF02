// Injection de la navbar et du footer
window.addEventListener('load', () => {
    document.querySelector('header').innerHTML =
        ` <div class="home">
    <a href="./home.html">Home</a>
    <a href="./recherche.html">Recherche</a>
</div>
<div class="logo">
    <img src="./assets/img/Dragon-Ball-Logo.png" alt="Logo" >
</div>
<div class="nav-container">
    <nav class="nav-a">
        <a href="./presentation.html">Présentation</a>
        <a href="./films.html">Films</a>
        <a href="./contact.html">Contact</a>
    </nav>
</div>

<div class="menu-brger">
    <i id="icon" class="fa-solid fa-bars white-icone"></i>
</div>
<div class="menu">
    <ul class="menu-ul">
        <li class="menu-li" ><a class="menu-a" href="./home.html">Home</a></li>
        <li class="menu-li" ><a class="menu-a" href="./recherche.html">Recherche</a></li>
        <li class="menu-li" ><a class="menu-a" href="./presentation.html">Présentation</a></li>
        <li class="menu-li" ><a class="menu-a" href="./films.html">Films</a></li>
        <li class="menu-li" ><a class="menu-a" href="./contact.html">Contact</a></li>
    </ul>
</div>`
    document.querySelector('footer').innerHTML =
    `<div>
        <p>Dragon Ball Z - &copy2024</p>
    </div>`
    // console.log("INJECTION HEADER FOOTER");
})