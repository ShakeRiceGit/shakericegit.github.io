fetch("games_header.html")
  .then((response) => response.text())
  .then((data) => document.querySelector("header").innerHTML = data);

fetch("games_footer.html")
  .then((response) => response.text())
  .then((data) => document.querySelector("footer").innerHTML = data);