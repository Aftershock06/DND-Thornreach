document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('navigation');

    const nav = document.createElement('nav');
    nav.classList.add('main-menu');

    nav.innerHTML = `
        <div class="logobox">
            <a href ='test.html'>
            <i class="fa fa-globe logo" aria-hidden="true"></i>
            </a>
        </div>
        <ul>
            <li>
                <a href="index.html">
                    <i class="fa fa-home fa-2x"></i>
                    <span class="nav-text">World Map</span>
                </a>
            </li>
            <li>
                <a href="characters.html">
                    <i class="fa fa-users fa-2x"></i>
                    <span class="nav-text">Characters</span>
                </a>
            </li>
            <li>
                <a href="quest.html">
                    <i class="fa fa-road fa-2x"></i>
                    <span class="nav-text">Quest</span>
                </a>
            </li>
            <li>
                <a href="journal.html">
                    <i class="fa fa-book fa-2x"></i>
                    <span class="nav-text">Journal</span>
                </a>
            </li>
        </ul>
    `;

    container.appendChild(nav);

    const heading = document.getElementById('siteHeader');
    const title = heading.dataset.pageTitle;

    const finalTitle = title?.trim() || "World of Thornreach";

    heading.innerHTML = `<header class="headerWrapper"><div class="headerBox">${title}</div></header>`;

    const footing = document.getElementById('siteFooter');
    footing.innerHTML = `<div class="footerWrapper">
                    <div class="footerBox">
                    © Thornreach developed by Aftershock | 2025
                    </div>
                    </div>`;

});