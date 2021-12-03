// Header
// toggle Burger menu   
function toggleMenuIcon(x) {
    x.style.transtiton = '0.4s';
    x.classList.toggle("toggle-menu");
    document.querySelector("nav").classList.toggle("visible-block");
    document.querySelector("header").classList.toggle("activated");
}   
function toggleDropdown(current) {
    let dropdown = document.querySelectorAll('.dropdown')
    let firstDropdown = dropdown[0]
    let lastDropdown = dropdown[dropdown.length-1]

    let arrow = document.querySelectorAll('.arrow');
    let firstArrow = arrow[0];
    let lastArrow = arrow[arrow.length-1];

    let currentDropdown;
    if(current == 1){
        currentDropdown = firstDropdown;
    }else{
        currentDropdown = lastDropdown;
    }

    if (currentDropdown.classList.contains('dropdown-active')){
        if (current == 1){
            firstArrow.innerHTML = '▼';
        } else {
            lastArrow.innerHTML = '▼';
        }
    } else {
        if (current == 1){
            firstArrow.innerHTML = '▲';
        } else {
            lastArrow.innerHTML = '▲';
        }
    }
    currentDropdown.classList.toggle("dropdown-active");
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