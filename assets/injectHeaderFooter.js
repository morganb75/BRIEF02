// Injection de la navbar et du footer
window.addEventListener('load', () => {
    document.querySelector('header').innerHTML =
        ` <div class="home">
    <a href="./home.html">Home</a>
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
    <ul>
        <li><a href="./home.html">Home</a></li>
        <li><a href="./presentation.html">Présentation</a></li>
        <li><a href="./films.html">Films</a></li>
        <li><a href="./contact.html">Contact</a></li>
    </ul>
</div>`
    document.querySelector('footer').innerHTML =
    `<div>
        <p>Dragon Ball Z - &copy2024</p>
    </div>`
    // console.log("INJECTION HEADER FOOTER");
})