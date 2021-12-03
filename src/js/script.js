// Header
// toggle Burger menu   
function toggleMenuIcon(x) {
    x.style.transtiton = '0.4s';
    x.classList.toggle("toggle-menu");
    document.querySelector("nav").classList.toggle("visible-block");
    document.querySelector("header").classList.toggle("activated");
}   
function toggleDropdown(x, current) {
    let arrow = document.querySelectorAll('.arrow');
    let first = arrow[0]
    let last = arrow[arrow.length- 1]

    if (x.classList.contains('dropdown-active')){
        if (current == 1){
            first.innerHTML = '▼'
        } else {
            last.innerHTML = '▼'
        }
    } else {
        if (current == 1){
            first.innerHTML = '▲'
        } else {
            last.innerHTML = '▲'
        }
    }
    x.classList.toggle("dropdown-active");
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