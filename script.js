//Mest solgte
const slideIndex = [1,1,1,1,1,1];
/* Class the members of each slideshow group with different CSS classes */
let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6"];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
    let dots = document.getElementsByClassName("dot");
  if (n > x.length) {slideIndex[no] = 1} 
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }

  x[slideIndex[no]-1].style.display = "block"; 
    
};



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
    });
});


const apiKnap = document.getElementById("api-knap");

apiKnap.addEventListener("click", lager);

function lager(){
    fetch('json/lager.json')
    .then((res) => res.json())
    .then((data) => {
        let output = '';
        data.forEach(function(lager){
            output+= `<p id="api-svar">${lager.Antal} stk. på lager</p>`;
        })
        document.getElementById("api-svar").innerHTML = output;
    })
};



