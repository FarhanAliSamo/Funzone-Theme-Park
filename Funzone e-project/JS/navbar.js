////////////////////// NavBar//////////////////
let nav = document.querySelector("nav")
let startMenu = document.getElementById('startMenu')
let closeMenu = document.getElementById('closeMenu')
let navUl = document.getElementById('navUl')

window.addEventListener("scroll",()=>{
    if(window.pageYOffset>=100){
        nav.classList.add("navfixed")
    }else{
        nav.classList.remove("navfixed")
    }
})
startMenu.addEventListener('click',()=>{
    navUl.classList.add("navul-left");
    startMenu.style.display="none   "
    
})
closeMenu.addEventListener('click',()=>{
    navUl.classList.remove("navul-left")
    startMenu.style.display=""
    
})
//////////////// navbar end /////////////////////