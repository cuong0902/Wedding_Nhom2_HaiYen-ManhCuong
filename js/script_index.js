window.onload = function(){

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
}