const rootPath = location.origin;

fetch(rootPath + "/header.html")
  .then((response) => response.text())
  .then((data) => document.querySelector("header").innerHTML = data);

fetch(rootPath + "/footer.html")
  .then((response) => response.text())
  .then((data) => document.querySelector("footer").innerHTML = data);