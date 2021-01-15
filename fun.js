const close = document.getElementById("close");
const nav = document.getElementById("ham");

close.addEventListener("click",() => { 
    nav.classList.toggle("act");
    close.classList.toggle("toggle");
});