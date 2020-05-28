$(document).ready(function() {
            $('.menu-toggle').click(function() {
                $('nav').toggleClass('active')
                if ($('nav').hasClass('active'))
                    $('.menu-toggle i').removeClass('fas fa-bars').addClass('fas fa-times')
                else
                    $('.menu-toggle i').removeClass('fas fa-times').addClass('fas fa-bars')
            })
            $('ul li').click(function(){
                $(this).siblings().removeClass('active');
                $(this).toggleClass('active');
                
            })
        });

$(document).ready(function(){
    $('.thumb a').mouseover(function(e){
        e.preventDefault();
        $('.imgBox img').attr("src", $(this).attr("href"));
    })
});

let logoGadeMoebelhus = document.getElementById("logo-gades");

let test = document.getElementById("body-test");

let headerBG = document.getElementById("header-test");

test.onscroll = function(){headerbackgrund()};

function headerbackgrund(){
    logoGadeMoebelhus.style.width= "50%";
    logoGadeMoebelhus.style.position= "absolute";
    logoGadeMoebelhus.style.top= "90%";
    logoGadeMoebelhus.style.left= "100%";
    logoGadeMoebelhus.style.transform= "translate(-50%, -50%)";
    
    headerBG.style.backgroundColor= "rgba(43, 45, 41, 0.9)";
    logoGadeMoebelhus.style.transition= "0.3s";
}












