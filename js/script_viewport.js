window.addEventListener("load",function(){
    let btn_menu = this.document.getElementById("btn_menu_mobile")
    let menu = document.getElementById("mobile_menu")
    btn_menu.addEventListener("click",function(){
         btn_menu.classList.add("hide") 
         
         menu.classList.remove("hide")
    }) 
 
    let btn_close_menu = this.document.getElementById("close_menu_mobile")
    btn_close_menu.addEventListener("click",function(){
         menu.classList.add("hide")
 
         btn_menu.classList.remove("hide")
    })
 
    window.onscroll = function(){
     if (window.scrollY > 150){
         btn_menu.style.top=0
         menu.style.top=0
     }
     if (window.scrollY < 150){
         btn_menu.style.top = "initial"
         menu.style.top="initial"
     }
    }
})