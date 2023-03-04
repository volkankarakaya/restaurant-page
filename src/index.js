import img from "./background-image1.jpg";
import "./style.css";

const content = document.getElementById("content");

// const imgElement = new Image()
// imgElement.src = img;
// imgElement.setAttribute('width','800')
// content.appendChild(imgElement)

const header = document.createElement("header");
const pageTitle = document.createElement('h1')
pageTitle.textContent = "Healty Bean Vegan Restaurant"

const unorderedList = document.createElement("ul");
const listItemHome = document.createElement("li");
listItemHome.innerHTML = "Home";
const listItemMenu = document.createElement("li");
listItemMenu.innerHTML = "Menu";
const listItemAbout = document.createElement("li");
listItemAbout.innerHTML = "About";

unorderedList.appendChild(listItemHome)
unorderedList.appendChild(listItemMenu)
unorderedList.appendChild(listItemAbout)
header.appendChild(pageTitle)
header.appendChild(unorderedList)
content.appendChild(header)
