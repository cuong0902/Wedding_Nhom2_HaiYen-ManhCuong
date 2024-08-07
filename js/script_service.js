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
}