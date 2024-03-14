var sidenavbar = document.querySelector(".side-navbar")

    function showNavbar() {
        
        sidenavbar.style.display= "block"
    }

    function closeNavbar() {
        
        sidenavbar.style.display= "none"
    }




document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault()
    
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var message = document.getElementById("message").value

    var responseDiv = document.getElementById("response")

    responseDiv.innerHTML = "<p>Thank you, " + name + "! We have received your message.</p>"
})