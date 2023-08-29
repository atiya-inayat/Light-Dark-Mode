const toglleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

// dark or light image
function imageMode(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

// DRY METHOD
function toggleDarkLightMode(theme) {
  nav.style.backgroundColor =
    theme === "dark" ? "rgb(0 0 0  / 50%)" : "rgb(255 255 255  / 50%)"; // ternory operator is same as if else statment
  textBox.style.backgroundColor =
    theme === "dark" ? "rgb(255 255 255  / 50%)" : "rgb(0 0 0  / 50%)";
  theme === "dark"
    ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
    : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  toggleIcon.children[0].textContent =
    theme === "dark" ? "Dark Mode" : "Light Mode";
  theme === "dark" ? imageMode("dark") : imageMode("light");
  
}

// switch theme dynamically
function switchTheme(event) {
  // console.log(event.target.checked);

  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggleDarkLightMode("dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");

    toggleDarkLightMode("light");
  }
}

// event listener
toglleSwitch.addEventListener("change", switchTheme);

// check local storage for theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toglleSwitch.checked = true;
    toggleDarkLightMode("dark");
  }
}
