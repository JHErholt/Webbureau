// Header
// toggle Burger menu   
function toggleMenuIcon(x) {
    x.style.transtiton = '0.4s';
    x.classList.toggle("toggle-menu");
    document.querySelector("nav").classList.toggle("visible");
    document.querySelector("header").classList.toggle("activated");
}   
// Page Finder
let path = window.location.pathname;
let link = document.querySelector(`a[href='${path}']`);
if (path === '/'){
    console.log('Forside :)');
}else{
    link.style.color = 'rgb(178, 34, 34)';
    link.style.textDecoration = 'underline';
}