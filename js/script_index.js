window.onload = function(){
    let main = document.getElementById("main");
    let footer = document.getElementById("footer");
    let aside = document.getElementById("aside");
    
    /* Ưu Đãi */
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
                thumb[i].src = `image/demo/promos/${txt}${i+1}.jpg`;
                if(i === 2)
                    thumb[i].src = `image/demo/promos/${txt}${i+1}.webp`;
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
                thumb[i].src = `image/demo/promos/${txt}${i+1}.jpg`;
                if(i === 2)
                    thumb[i].src = `image/demo/promos/${txt}${i+1}.webp`;
            }
        }
    }
    /*Đóng Giao Dien Chi Tiet */

    let btClose = document.getElementById("promos_close");
    btClose.onclick = function(){
        promo2.className = "pro_none";
        promo1.className = "promo";
    }


    /*Phone */
    let phone = document.getElementById("fa_phone");
    phone.onclick=function(){
        let phoneNumber = document.getElementById("phoneNumber");
        if(phoneNumber.className==="")
            phoneNumber.className = "pro_none";
        else
        phoneNumber.className = "";
    }


    /* Comment */
    /*Hiện comment*/
    let detail_comment = document.querySelector(".detail_comment");
    let img_comment = document.querySelectorAll(".customer img");

    for(let im of img_comment){
        im.onclick=function(){
            detail_comment.className="detail_comment";
            let txt = im.getAttribute("rel");
            let img_comment_main = document.getElementById("img_comment_main");
            img_comment_main.src = `image/demo/BinhLuan_KhachHang/comment_${txt}.webp`;
            if(txt === "quanglong_hongphuoc" || txt === "thienvinh_minhtrang")
                img_comment_main.src = `image/demo/BinhLuan_KhachHang/comment_${txt}.png`;
            
            detail_comment.className="detail_comment opacity";
            let btClose = document.getElementById("comment_close")
            btClose.onclick=function(){
                detail_comment.className="pro_none";
            }
        }
    }

    /* next comment */
    let comment = document.querySelectorAll(".customer");
    let btn_left_comment = document.querySelector(".next_comment>div:first-child");
    let btn_right_comment = document.querySelector(".next_comment>div:last-child");
    let count_comment = 0;

    for (let i = 4; i < comment.length; i++) {
        comment[i].className="pro_none";
    }

    btn_right_comment.onclick = function(){
        let start = count_comment + 1;
        let end = count_comment + 4;
        if(count_comment<comment.length && end < comment.length)
        {          
            comment[count_comment].className="pro_none";      
            for(let i = start;i<=end;i++){
                comment[i].className="customer";
            }
            count_comment++;
        }     
       
    }

    btn_left_comment.onclick=function(){
        if(count_comment > 0)
        {
            for(let i = count_comment+2;i>=count_comment-1;i--){
                comment[i].className="customer";
            } 
            for(let i = count_comment+3;i<comment.length;i++){
                comment[i].className="pro_none";
            } 
            count_comment--;
        }
    }



   
    /*Search*/ 
    let btn_search = document.getElementById("btn_search");
    btn_search.onclick = function(){
        let key = document.getElementById("search");
        let div_title = document.querySelectorAll(".title");
        btn_search.parentElement.href="#";/*reset link tim kiem cu */
        for(d of div_title){
            d.style.border = "none";
        } 
        let txt = key.value;
        let title = document.querySelectorAll(".title h3");
        for(let t of title){     
            if(txt != "" && t.innerText.includes(txt) === true)
            {
                t.parentElement.style.border = "2px solid red";
                btn_search.parentElement.href=`#${t.parentElement.id}`;
            }

        }
    }


    /* Cố định Menu */
    let nav = document.getElementById("nav");
    nav.className="flex";
    window.onscroll = function(){   
        if (window.scrollY > 200){
            nav.className="flex nav";
        }
        if (window.scrollY < 200){
            nav.className="flex";
        }
    }



}

