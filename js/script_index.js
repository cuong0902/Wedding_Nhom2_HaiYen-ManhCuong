window.onload = function(){
    
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
            promo1.className = "hide";
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
        promo2.className = "hide";
        promo1.className = "promo";
    }


    /*Phone */
    let phone = document.getElementById("fa_phone");
    phone.onclick=function(){
        let phoneNumber = document.getElementById("phoneNumber");
        if(phoneNumber.className==="")
            phoneNumber.className = "hide"; 
        else
            phoneNumber.className = "";
    }


    /* Blogs */
    let btn_page = document.querySelectorAll(".page_blog button");
    for(let btn of btn_page){
        btn.addEventListener("click", function(){
            for(let btn of btn_page){
                btn.classList.remove("active")
            }
            btn.classList.add("active")

            let number_page = btn.parentElement.getAttribute("rel")
            let all_page = document.querySelectorAll(".blog")
            
            for(let a of all_page){  
                a.classList.remove("flex")
                a.classList.add("hide")
            }

            let page_show = document.querySelector(`.page_${number_page}`)
            page_show.classList.remove("hide")
            page_show.classList.add("flex")
        }) 
    }

    
    /* Comment */
    /*Hiện comment*/
    let detail_comment = document.querySelector(".detail_comment");
    let img_comment = document.querySelectorAll(".customer img");

    for(let im of img_comment){
        im.onclick=function(){

            window.scrollBy({
                top: 100, 
                behavior: 'smooth' 
            });

            detail_comment.className="detail_comment show_form";
            let txt = im.getAttribute("rel");
            let img_comment_main = document.getElementById("img_comment_main");
            img_comment_main.src = `image/demo/BinhLuan_KhachHang/comment_${txt}.webp`;
            if(txt === "quanglong_hongphuoc" || txt === "thienvinh_minhtrang")
                img_comment_main.src = `image/demo/BinhLuan_KhachHang/comment_${txt}.png`;

            detail_comment.className="detail_comment opacity";
            let btClose = document.getElementById("comment_close")
            btClose.onclick=function(){
                detail_comment.className="hide";
            }
        }

    }

    /* next comment */
    let comment = document.querySelectorAll(".customer");
    let btn_left_comment = document.querySelector(".next_comment>div:first-child");
    let btn_right_comment = document.querySelector(".next_comment>div:last-child");
    let count_comment = 0;

    for (let i = 4; i < comment.length; i++) {
        comment[i].className="hide";
    }

    btn_right_comment.onclick = function(){
        let start = count_comment + 1;
        let end = count_comment + 4;
        if(count_comment<comment.length && end < comment.length)
        {          
            comment[count_comment].className="hide";      
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
                comment[i].className="hide";
            } 
            count_comment--;
        }
    }
    

    /* go to top */
    let back = document.querySelector(".back")
    back.addEventListener("click",function(){
        window.scrollTo({
            top: 0, behavior: 'smooth' // Thêm hiệu ứng cuộn mượt
        });
    })

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



    /* Đóng form */
    let btn_confirm = document.getElementById("btn_confirm");
    let form = document.querySelector(".form_confirm");
    btn_confirm.onclick=function(){
        form.className="hide";
        form.parentElement.className="hide"
    }
    /* Gửi Form*/
    let name_cus = document.getElementById("name_cus");
    let phone_cus = document.getElementById("phone_cus");
    let email_cus = document.getElementById("email_cus");
    let type_cus = document.getElementById("type_cus");
    let request_cus = document.getElementById("request_cus");

    let name_cus_info = document.getElementById("name_cus_info");
    let phone_cus_info = document.getElementById("phone_cus_info");
    let email_cus_info = document.getElementById("email_cus_info");
    let type_cus_info = document.getElementById("type_cus_info");
    let request_cus_info = document.getElementById("request_cus_info");

    let btn_submit = document.getElementById("btn_submit");

    btn_submit.onclick = function(){
        if(name_cus.value !== "" && phone_cus.value !== "") {
            form.className = "form_confirm";
            form.parentElement.className="show_form"
            name_cus_info.innerText = name_cus.value;
            phone_cus_info.innerText = phone_cus.value;
            email_cus_info.innerText = email_cus.value;
            type_cus_info.innerText = type_cus.value;
            // if(request_cus_info !== "")
            //     request_cus_info.innerText = request_cus.value;
            // else
                request_cus_info.innerText = "Muốn tổ chức lúc sáng và thuê vũ công ca nhạc, hỗ trợ ánh sáng đèn sân khấu"
        } else {
            alert("Vui lòng điền đầy đủ thông tin tên và số điện thoại.");
            }
        }
}   

/* Viewport */
window.addEventListener("load", function(){
    /* Cố định Menu */
    let nav = document.getElementById("nav");
    nav.className = "flex"; // Đặt lớp mặc định là flex

    window.addEventListener("scroll", function() {  // Lắng nghe sự kiện scroll
        if (window.scrollY > 150) {
            nav.classList.add("nav");
        } else {
            nav.classList.remove("nav");
        }
    });

    let mediaQuery = window.matchMedia("(max-width: 600px)")
    mediaQuery.addEventListener("change", function(e) {
        if (e.matches) {
            confirm("Màn hình nhỏ hơn hoặc bằng 600px");
        } 
    }
    )}
)



