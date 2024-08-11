window.onload = function(){

    let main = document.getElementById("main");
    let button = document.querySelectorAll("button>img");
    for(let bt of button)
    {
        bt.onclick = function(){
            main.src = bt.src;
        }
    }

    /*Xu Li Thu Vien Anh*/
    let bt1 = document.getElementById("btn1");
    let bt2 = document.getElementById("btn2");

    let lib1 = document.getElementById("thumb1");
    let lib2 = document.getElementById("thumb2");
    bt1.onclick = function(){
        bt1.style.color = "white";
        bt1.style.backgroundColor = "darkblue";
        bt2.style.color = "darkblue";
        bt2.style.backgroundColor = "transparent";

        lib2.className="none";
        lib1.className="thumbs flex";
    }

    bt2.onclick = function(){
        bt2.style.color = "white";
        bt2.style.backgroundColor = "darkblue";
        bt1.style.color = "darkblue";
        bt1.style.backgroundColor = "transparent";

        lib1.className="none";
        lib2.className="thumbs_2 flex";
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
  
      /* Đóng form */
      let btn_confirm = document.getElementById("btn_confirm");
      let form = document.querySelector(".form_confirm");
      btn_confirm.onclick=function(){
          form.className="pro_none";
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
              name_cus_info.innerText = name_cus.value;
              phone_cus_info.innerText = phone_cus.value;
              email_cus_info.innerText = email_cus.value;
              type_cus_info.innerText = type_cus.value;
              request_cus_info.innerText = request_cus.value;
          } else {
              alert("Vui lòng điền đầy đủ thông tin tên và số điện thoại.");
              }
          }
}