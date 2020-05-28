
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


let test2 = document.getElementById("produkt-body");

let headerBG2 = document.getElementById("header-test-2");

test2.onscroll = function(){headerbackgrund2()};

function headerbackgrund2(){
    headerBG2.style.backgroundColor= "rgba(43, 45, 41, 0.9)";
    headerBG2.style.transition= "0.2s";
}