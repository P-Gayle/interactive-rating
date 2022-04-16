const card1 = document.querySelector (".card");
const card2 = document.querySelector("#after-submit");

 function thanks(){
    document.getElementById("after-submit").style.visibility = "visible";
        
    card1.style.display = "none";
    card2.style.display = "block";
};

document.getElementById("b1").addEventListener("click", showb1);

function showb1() {
    document.getElementById("rating1").innerHTML = "You selected 1 out of 5"              
};

document.getElementById("b2").addEventListener("click", showb2);

function showb2() {
    document.getElementById("rating2").innerHTML = "You selected 2 out of 5"              
};

document.getElementById("b3").addEventListener("click", showb3);

function showb3() {
    document.getElementById("rating3").innerHTML = "You selected 3 out of 5"              
};

document.getElementById("b4").addEventListener("click", showb4);

function showb4() {
    document.getElementById("rating4").innerHTML = "You selected 4 out of 5"              
};

document.getElementById("b5").addEventListener("click", showb5);

function showb5() {
    document.getElementById("rating5").innerHTML = "You selected 5 out of 5"              
};