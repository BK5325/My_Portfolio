document.getElementById("show").addEventListener("click", function () {
  var content = document.getElementById("content");
  content.classList.toggle("hidden");
}); //project of c content

document.getElementById("show2").addEventListener("click", function () {
  var content = document.getElementById("content2");
  content.classList.toggle("hidden");
}); //project of py content

document.getElementById("show3").addEventListener("click", function () {
  var content = document.getElementById("content3");
  content.classList.toggle("hidden");
}); //project of front content

function toggleMenu() {
  let navbar = document.getElementById("myNavbar");
  navbar.className =
    navbar.className === "navbar" ? "navbar responsive" : "navbar";
} //responsive nav in mobile
