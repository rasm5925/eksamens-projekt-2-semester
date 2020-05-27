
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