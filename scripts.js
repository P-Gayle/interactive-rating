const card1 = document.querySelector (".card");
const card2 = document.querySelector("#after-submit");

const rating1 = document.querySelector("#rating1");
const rating2 = document.querySelector("#rating2");
const rating3 = document.querySelector("#rating3");
const rating4 = document.querySelector("#rating4");
const rating5 = document.querySelector("#rating5");

const checkBox1 = document.getElementById("b1");
const checkBox2 = document.getElementById("b2");
const checkBox3 = document.getElementById("b3");
const checkBox4 = document.getElementById("b4");
const checkBox5 = document.getElementById("b5");

// const submit = document.getElementsByClassName("submit");

// submit.addEventListener("click", function() {
//     card1.style.display = "none";
//     card2.style.display = "grid";
//  });

 function thanks(){
    document.getElementById("after-submit").style.visibility = "visible";
        
    card1.style.display = "none";
    card2.style.display = "block";
        
        if (checkBox1.checked == true){
            document.getElementById("rating1").innerHTML = "You selected 1 out of 5" 
            rating2.style.display = "none";
            rating3.style.display = "none";
            rating4.style.display = "none";
            rating5.style.display = "none"; 

        } else if (checkBox2.checked == true) {
            document.getElementById("rating2").innerHTML = "You selected 2 out of 5" 
            rating1.style.display = "none";
            rating3.style.display = "none";
            rating4.style.display = "none";
            rating5.style.display = "none";

        } else if (checkBox3.checked == true) {
            document.getElementById("rating3").innerHTML = "You selected 3 out of 5" 
            rating1.style.display = "none";
            rating2.style.display = "none";
            rating4.style.display = "none";
            rating5.style.display = "none";

        } else if (checkBox4.checked == true) {
            document.getElementById("rating4").innerHTML = "You selected 4 out of 5" 
            rating1.style.display = "none";
            rating2.style.display = "none";
            rating3.style.display = "none";
            rating5.style.display = "none";

        } else if (checkBox5.checked == true) {
            document.getElementById("rating5").innerHTML = "You selected 5 out of 5" 
            rating1.style.display = "none";
            rating2.style.display = "none";
            rating3.style.display = "none";
            rating4.style.display = "none";    
        }
        else {
            alert("error");
        }
 };

