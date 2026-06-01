var menubtn = document.getElementById("menubtn");
var sidenav = document.getElementById("sidenav");
var menu = document.getElementById("menu");

sidenav.style.right = "-100vw";

menubtn.onclick = function () {
    if (sidenav.style.right === "-100vw") {
        sidenav.style.right = "0";
        menu.textContent = "Close";
    } else {
        sidenav.style.right = "-100vw";
        menu.textContent = "Menu";
    }
};

document.querySelectorAll("#sidenav a").forEach(link => {
    link.addEventListener("click", function () {
        sidenav.style.right = "-100vw";
        menu.textContent = "Menu";
    });
});