const close = document.getElementById("close");
const nav = document.getElementById("ham");
const navstiky = document.getElementById("navstiky");

close.addEventListener("click",() => { 
    nav.classList.toggle("act");
    navstiky.classList.toggle("actnav");
    close.classList.toggle("toggle");
});