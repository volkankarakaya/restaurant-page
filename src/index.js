import img from "./images/background-image1.jpg";
import chief from "./images/chief.jpg";
import "./style.css";
import getHomeContent from "./home";

const content = document.getElementById("content");

// const imgElement = new Image()
// imgElement.src = img;
// imgElement.setAttribute('width','800')
// content.appendChild(imgElement)

const header = document.createElement("header");
const pageTitle = document.createElement("h1");
pageTitle.textContent = "Healty Bean Vegan Restaurant";

const unorderedList = document.createElement("ul");
const listItemHome = document.createElement("li");
listItemHome.innerHTML = "Home";
const listItemMenu = document.createElement("li");
listItemMenu.innerHTML = "Menu";
const listItemAbout = document.createElement("li");
listItemAbout.innerHTML = "About";

unorderedList.appendChild(listItemHome);
unorderedList.appendChild(listItemMenu);
unorderedList.appendChild(listItemAbout);
header.appendChild(pageTitle);
header.appendChild(unorderedList);
content.appendChild(header);

getHomeContent();

// const chiefImage = document.createElement('img');
// chiefImage.src = chief;

// const mainContent = document.createElement("div");
// mainContent.appendChild(chiefImage);
// const body = document.querySelector("body");
// body.appendChild(mainContent);
