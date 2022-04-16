const submit = document.querySelector(".submit");
const card1 = document.querySelector (".card");
const card2 = document.querySelector("#after-submit");
 const btn = document.querySelectorAll(".btn")


 function thanks(){
    document.getElementById("after-submit").style.visibility = "visible";
        
    card1.style.display = "none";
    card2.style.display = "block";
};

