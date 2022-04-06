const openAside = document.querySelector(".open-aside");
const main = document.querySelector("main");
const aside = document.querySelector("aside");
const closeAside = document.querySelector(".close-aside");
const papeButtons = document.querySelectorAll(".pape-button");
const desktop = ["desktop/noa_0.png", "desktop/noa_1.png", "desktop/noa_2.png", "desktop/noa_3.png", "desktop/noa_4.png"];
const mobile = ["mobile/noa_2.png", "mobile/noa_1.png", "mobile/noa_4.png", "mobile/noa_0.png", "mobile/noa_3.png"];
let activeAside, currentSet;

activeAside = false;

openAside.addEventListener("click", () => {
    if (activeAside) {
        aside.style.transform = "translateX(-400px)";
    }
    else {
        aside.style.transform = "translateX(0px)";
    }
    activeAside = !activeAside;
});

closeAside.addEventListener("click", () => {
    activeAside = false;
    aside.style.transform = "translateX(-400px)";
});

papeButtons.forEach(button => button.addEventListener("click", () => {
    select_image(button.dataset.index);
}));

window.addEventListener("resize", () => {
    switch_set();
    select_image(0);
});

function switch_set() {
    currentSet = window.innerWidth / window.innerHeight < .7 ? mobile : desktop;
}

function select_image(index) {
    main.style.backgroundImage = `url(${currentSet[index]})`;
}

switch_set();
select_image(0);
