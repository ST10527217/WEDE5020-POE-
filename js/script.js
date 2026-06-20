const pageTitle = document.title; alert("Welcome to " + pageTitle);

document.addEventListener("DOMContentLoaded", function () {

    let message = document.getElementById("welcomeMessage");

    if (message) {
         message.innerHTML = "Welcome to " + document.title;
    }

});

function validateForm() {
    let name =
 document.getElementById("name").value;
    let email =
 document.getElementById("email").value; 
    if (name === "" || email === "") {
        alert("Please complete all required fields");
        return false;
    }    
    alert("Form submitted successfully!");
    return true;
}

function searchServices() {
    
    let input =
    document.getElementById("searchInput");
    let filter = input.value.toLowerCase();

    let ul =
    document.getElementById("serviceList");
    let li = ul.getElementsByTagName("li");
    for (let i = 0; i <li.length; i++) {
        let text = li[i].textContent;

        if (text.toLocaleLowerCase().indexOf(filter) 
            > -1) {
        li[i].style.display = ""} else {
            li[i].style.display = "none";
        } 
    }

}

function openImage(src) {

 document.getElementById("lightbox").style.display = "block";
 
 document.getElementById("lightbox-img").src = src;
 alert("Image clicked");

}

function sendMessage() {
    alert("Thank you! Your message has been received.");
    return false;
}
