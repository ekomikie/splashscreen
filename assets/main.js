const splashScreen = document.querySelector("#splashScreen");
const logo = document.querySelectorAll('#logo path');

console.log(logo);

window.addEventListener("load", () => {
    if (splashScreen) {
        splashScreen.style.display = "flex";
        splashScreen.classList.add("loaded");
        setTimeout(() => splashScreen.style.display = "none", 5000);
    }
    document.body.style.visibility = "visible";
    document.body.style.opacity = 1;
});

for (let i = 0; i < logo.length; i++) {
  console.log(`letter ${i} is ${logo[i].getTotalLength()}`);
}
