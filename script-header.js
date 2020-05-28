let logoGadeMoebelhus1 = document.getElementById("logo-gades-1");

let test1 = document.getElementById("body-test-1");

let headerBG1 = document.getElementById("header-test-1");

test1.onscroll = function(){headerbackgrund1()};

function headerbackgrund1(){
    logoGadeMoebelhus1.style.width= "50%";
    logoGadeMoebelhus1.style.position= "absolute";
    logoGadeMoebelhus1.style.top= "90%";
    logoGadeMoebelhus1.style.left= "100%";
    logoGadeMoebelhus1.style.transform= "translate(-50%, -50%)";
    
    headerBG1.style.backgroundColor= "rgba(43, 45, 41, 0.9)";
    logoGadeMoebelhus1.style.transition= "0.3s";
}