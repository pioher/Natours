const navLinks = document.querySelectorAll("a.navigation-link");

console.log(navLinks);

// Skrypt dodający funkcjonalność do mobilnego navi
navLinks.forEach(function (link) {
  const naviCheckbox = document.getElementById("navi-toggle");
  console.log(naviCheckbox);
  link.addEventListener("click", function () {
    naviCheckbox.checked = !naviCheckbox.checked;
  });
});

const popup = document.getElementById("popup");

// popup.addEventListener("click", function () {
//   popup.style.visibility = "hidden";
//   popup.style.opacity = 0;
//   window.location.href = "/#tours";
// });
