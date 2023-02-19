document.querySelector('.root-nav').onclick = function(event) {
    if(event.target.nodeName !=='SPAN') return;
    event.target.nextElementSibling.classList.toggle('sub-menu-active')
}

