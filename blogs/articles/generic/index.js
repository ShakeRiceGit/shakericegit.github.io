const scriptPath = document.currentScript.src;
const folderPath = scriptPath.substring(0, scriptPath.lastIndexOf('/'));
const rootPath = location.origin;

fetch(folderPath + "/header.html")
  .then((response) => response.text())
  .then((data) => document.querySelector("header").innerHTML = data);

fetch(folderPath + "/footer.html")
  .then((response) => response.text())
  .then((data) => document.querySelector("footer").innerHTML = data);


window.onload = function()
{
  LoadCSSFile();
}

function LoadCSSFile(){
  function CreateLinkElement(cssPath)
  {
    var linkElement = document.createElement("link");
    linkElement.rel = "stylesheet";
    linkElement.type = "text/css";
    linkElement.href = cssPath;

    return linkElement;
  }

  document.head.appendChild(CreateLinkElement(rootPath + "/css/reset.css"));
  document.head.appendChild(CreateLinkElement(rootPath + "/css/style.css"));
  document.head.appendChild(CreateLinkElement(folderPath + "/post.css"));
  document.head.appendChild(CreateLinkElement(rootPath + "/css/header.css"));
  document.head.appendChild(CreateLinkElement(rootPath + "/css/footer.css"));
}