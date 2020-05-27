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