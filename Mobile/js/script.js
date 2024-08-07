window.onload = function()
{
    let main = document.getElementById("main");
    let images = document.querySelectorAll(".thumb img");
    for(let im of images)
    {
        im.onclick = function(){
            main.src = this.src;
        }
    }

    let button = document.querySelectorAll(".buttons button");
    for(let b of button)
    b.onclick = function(){
        let txt = this.getAttribute("rel");
        main.setAttribute("src",`images/galaxys8/${txt}1.jpg`);

        for(let i = 0; i <images.length;i++)
        images[i].src = `images/galaxys8/${txt}${i+1}.jpg`
    }


}