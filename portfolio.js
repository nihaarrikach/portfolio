
let threelines = document.getElementById("threelines");
let cross = document.getElementById("cross")
threelines.addEventListener("click", openNav)
function openNav() {
    document.getElementById("myname").style.display="none"
    
    threelines.style.display = "none";
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("side").style.marginLeft = "150px";
    console.log("hey")
    setTimeout(() => {
        cross.style.display = "block"
    },350);
   
    
}


cross.addEventListener("click", closeNav)
function closeNav() {
    // e.preventDefault();
    threelines.style.display = "block";
    document.getElementById("mySidenav").style.display = "none";
    document.getElementById("myname").style.display="block";
   
}

var nav = document.getElementById('myname'); // Identify target

window.addEventListener('scroll', function(event) { // To listen for event
    event.preventDefault();

    if (window.scrollY > 700) { // Just an example
        nav.style.color = '#000'; // or default color
    } 
    
   
});



var home = document.getElementById('home'); // Identify target

window.addEventListener('scroll', function(event) { // To listen for event
    event.preventDefault();

    if (window.scrollY > 700) { // Just an example
        home.style.color = '#000'; // or default color
    } 
    
    if(window.scrollY > 150) {
        home.style.colorolor = '#FFFFFF';
    }
});

var aboutme = document.getElementById('aboutme'); // Identify target

window.addEventListener('scroll', function(event) { // To listen for event
    event.preventDefault();

    if (window.scrollY >700) { // Just an example
        aboutme.style.color = '#000'; // or default color
    } 
    
    if(window.scrollY > 150) {
        aboutme.style.colorolor = '#FFFFFF';
    }
});


var certificates = document.getElementById('certificates'); // Identify target

window.addEventListener('scroll', function(event) { // To listen for event
    event.preventDefault();

    if (window.scrollY >700) { // Just an example
        certificates.style.color = '#000'; // or default color
    } 
    
    if(window.scrollY > 150) {
        certificates.style.colorolor = '#FFFFFF';
    }
});


var projects = document.getElementById('projects'); // Identify target

window.addEventListener('scroll', function(event) { // To listen for event
    event.preventDefault();

    if (window.scrollY >700) { // Just an example
        projects.style.color = '#000'; // or default color
    } 
    
    if(window.scrollY > 150) {
        projects.style.colorolor = '#FFFFFF';
    }
});


