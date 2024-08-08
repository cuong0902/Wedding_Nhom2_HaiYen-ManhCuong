window.onload = function(){

    /* Doi Hinh Trong Chi Tiet*/
    let main_thumb = document.getElementById("main_thumb");
    let thumb = document.querySelectorAll(".thumb_thumb img");
    let images = document.querySelectorAll(".thumb_pro img");

    for(let im of images)
    {
        im.onclick = function(){
            let txt = im.getAttribute("rel");

            main_thumb.src = `image/demo/promos/${txt}.webp`;
            if(txt === "TiecCuoi_")
                main_thumb.src = `image/demo/promos/${txt}.jpg`;
            for(let i = 0;i<thumb.length;i++)
            {
                thumb[i].src = `image/demo/promos/${txt}${i+1}.jpg`
            }
        }
    }


    /* Thay Hinh Trong Chi Tiet*/
    let promo1 = document.getElementById("promo1")
    let promo2 = document.getElementById("promo2")
    let img = document.querySelectorAll(".promo img")

    for(let im of img){
        im.onclick = function(){
            let txt = im.getAttribute("rel");

            promo1.className = "pro_none";
            promo2.className = "promos";

            main_thumb.src = `image/demo/promos/${txt}.webp`;
            if(txt === "TiecCuoi_")
                main_thumb.src = `image/demo/promos/${txt}.jpg`;
            for(let i = 0;i<thumb.length;i++)
            {
                thumb[i].src = `image/demo/promos/${txt}${i+1}.jpg`
            }
        }
    }
    /*Dong Giao Dien Chi Tiet */

    let btClose = document.getElementById("close");
    btClose.onclick = function(){
        promo2.className = "pro_none";
        promo1.className = "promo";
    }
}