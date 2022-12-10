let scrollButton = document.getElementById("scroll")


window.addEventListener("scroll",()=>{
    if(window.pageYOffset > 300){
        scrollButton.classList.add("active")
    }else{
        scrollButton.classList.remove("active")
    }
})