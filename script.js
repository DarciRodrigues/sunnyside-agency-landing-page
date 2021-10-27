function menu() {
    let myMenu = document.getElementById("topNav");
    if (window.screen.availWidth === "600px") {
        myMenu.style.display = "flex";
    } else {
        myMenu.style.display = "none";
    }
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
