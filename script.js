const sections = document.querySelectorAll("section");

sections.forEach(function (section) {
  section.addEventListener("click", function () {
    section.classList.toggle("open");
  });
});