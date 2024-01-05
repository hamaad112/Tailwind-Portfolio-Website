// typing js

var typed = new Typed('#element', {
    strings: ["Blogger","Youtuber","Web Developer","UI/UX Designer"],
    typeSpeed: 100,
    backSpeed:100,
    loop:true,
});

// navbar

document.addEventListener("DOMContentLoaded", function () {
    let mobileLinks = document.querySelector("#mobile-links");
    let menuIcon = document.querySelector("#menuicon");

    mobileLinks.style.maxHeight = "0";

    menuIcon.addEventListener("click", () => {
        if (mobileLinks.style.maxHeight === "0px" || mobileLinks.style.maxHeight === "") {
            mobileLinks.style.maxHeight = "400px";
            menuIcon.classList.add("fa-xmark")
        } else {
            mobileLinks.style.maxHeight = "0";
            menuIcon.classList.remove("fa-xmark")
        }
    });
});

