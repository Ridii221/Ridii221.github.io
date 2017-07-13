//change the sticky menu onscroll
window.onscroll = function() {
        var position;
        var stick = document.getElementById('container');
        var heightmenu = document.getElementById('main_menu');
        position = window.pageYOffset;
        if(position >= 60){
            stick.style.boxShadow = "0px 5px 15px #e5e5e5";
            heightmenu.style.height='50px';
        }
        else{
            stick.style.boxShadow="0px 1px 0px #e6e9ed";
            heightmenu.style.height='100px';
        }
    };
    var slide = document.getElementsByClassName("slider");
    var right_slide = function(){
        slide.style.offsetLeft="-200%";
    }
// vars for modal 
    var modal = document.getElementById('myModal');
    //var img = document.getElementById('myImg');
    var modalImg = document.getElementById("img01");

//run modal img and change picture inside
function change() {
    modal.style.display = 'flex';
    var img = document.getElementById('myImg');
    modalImg.src = img.src;
};