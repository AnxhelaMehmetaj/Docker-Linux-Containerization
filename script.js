window.onload = () => {
    setTimeout(() => {
        document.querySelector("body").classList.add("display");
    });
};

document.querySelector(".hamburger-menu").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("change");
});


