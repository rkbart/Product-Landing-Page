let aboutUs = document.getElementById("about-link"); /*select single element*/
aboutUs.textContent = "About Us"; /* modify element text */

let changeH2 = document.getElementsByTagName("h2"); /* select multiple elements */

changeH2[0].style.backgroundColor = "green"; /* modify element styles */
changeH2[0].style.paddingLeft = "10px";
changeH2[0].style.paddingRight = "10px";
changeH2[0].style.paddingBottom = "5px";
changeH2[0].style.borderRadius = "15px";

changeH2[1].style.backgroundColor = "green";
changeH2[1].style.paddingLeft = "10px";
changeH2[1].style.paddingRight = "10px";
changeH2[1].style.paddingBottom = "5px";
changeH2[1].style.borderRadius = "15px";

changeH2[2].style.backgroundColor = "green";
changeH2[2].style.marginLeft = "35%";
changeH2[2].style.marginRight = "35%";
changeH2[2].style.paddingLeft = "10px";
changeH2[2].style.paddingRight = "10px";
changeH2[2].style.paddingBottom = "5px";
changeH2[2].style.borderRadius = "15px";

changeH2[3].style.backgroundColor = "green";
changeH2[3].style.marginLeft = "35%";
changeH2[3].style.marginRight = "35%";
changeH2[3].style.paddingLeft = "10px";
changeH2[3].style.paddingRight = "10px";
changeH2[3].style.paddingBottom = "5px";
changeH2[3].style.borderRadius = "15px";


let submit = document.getElementById("submit"); // button 

function submitAlert() {
    alert("Thank you for subscribing!");
}

submit.addEventListener("click", submitAlert); // event listener
