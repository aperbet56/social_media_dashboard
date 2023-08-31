// Récupération de l'élément input de type checkbox
const checkbox = document.querySelector("input[name=theme]");

// Ecoute de l'événemant change sur l'input de type checkbox
checkbox.addEventListener("change", function () {
  if (this.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
});
