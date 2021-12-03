// Header
// toggle Burger menu   
function toggleMenuIcon(x) {
    x.style.transtiton = '0.4s';
    x.classList.toggle("toggle-menu");
    document.querySelector("nav").classList.toggle("visible-block");
    document.querySelector("header").classList.toggle("activated");
}
function toggleDropdown(current) {
    let rewriteCurrent = current - 1;
    let getDropdowns = document.querySelectorAll('.dropdown');
    let clickedDropdown = getDropdowns[rewriteCurrent];
    let getArrows = document.querySelectorAll('.arrow');
    let clickedArrow = getArrows[rewriteCurrent];
    if(clickedDropdown.classList.contains('dropdown-active')){
        clickedArrow.innerHTML = '▼';
    }else{
        clickedArrow.innerHTML = '▲';
    }
    clickedDropdown.classList.toggle('dropdown-active');
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