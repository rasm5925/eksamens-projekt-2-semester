let logoGadeMoebelhus3 = document.getElementById("logo-gades-3");

let test3 = document.getElementById("body-test-3");

let headerBG3 = document.getElementById("header-test-3");

test3.onscroll = function(){headerbackgrund3()};

function headerbackgrund3(){
    logoGadeMoebelhus3.style.width= "50%";
    logoGadeMoebelhus3.style.position= "absolute";
    logoGadeMoebelhus3.style.top= "90%";
    logoGadeMoebelhus3.style.left= "100%";
    logoGadeMoebelhus3.style.transform= "translate(-50%, -50%)";
    
    headerBG3.style.backgroundColor= "rgba(43, 45, 41, 0.9)";
    logoGadeMoebelhus3.style.transition= "0.3s";
};