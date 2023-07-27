var menuButton = document.getElementById("menuButton");
var slide = document.getElementById("slide");

slide.style.right = "-250px";
menuButton.onclick = function(){
    if(slide.style.right == "-250px"){
        slide.style.right = "0px";
    }
    else{
        slide.style.right = "-250px";
    }
}
