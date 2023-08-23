const sideMenu = document.getElementById("side-menu");

document.addEventListener("mousemove", (event) => {
    if (event.clientX < window.innerWidth / 2) {
        sideMenu.style.left = "0";
    } else {
        sideMenu.style.left = "-250px";
    }
});
