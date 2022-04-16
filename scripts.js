const card1 = document.querySelector (".card");
const card2 = document.querySelector("#after-submit");
const numbers = document.querySelectorAll(".number")
const selected = document.getElementById("answer");

numbers.forEach((e) => {
    e.addEventListener("click", (E) => {
      selected.innerHTML = E.target.value;
    });
  });

 function thanks(){
    document.getElementById("after-submit").style.visibility = "visible";
        
    card1.style.display = "none";
    card2.style.display = "block";
};
