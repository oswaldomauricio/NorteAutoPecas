function toggleMenu() {
    let menuMobile = document.querySelector(".menuHeader");
    let iconCloseMobile = document.querySelector(".fa-xmark")
    let iconOpenMobile = document.querySelector(".fa-bars")

    if (menuMobile.style.display === "none" || menuMobile.style.display === "") {
        menuMobile.style.display = "flex";
        iconCloseMobile.style.display = "flex"
        iconOpenMobile.style.display = "none"
    } else {
        menuMobile.style.display = "none";
        iconCloseMobile.style.display = "none"
        iconOpenMobile.style.display = "flex"
    }

}

document.querySelectorAll('.menuHeader a').forEach(item => {
    item.addEventListener('click', () => {
        let menuMobile = document.querySelector(".menuHeader");
        let iconCloseMobile = document.querySelector(".fa-xmark")
        let iconOpenMobile = document.querySelector(".fa-bars")
        menuMobile.style.display = "none";
        iconCloseMobile.style.display = "none"
        iconOpenMobile.style.display = "flex"
    });
});

