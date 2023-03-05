import img from "./images/background-image1.jpg";
import chief from "./images/chief.jpg";
import "./style.css";
import getHomeContent from "./home";
import getMenuContent from "./menu";
import getContactContent from "./contact";

const content = document.getElementById("content");

// const imgElement = new Image()
// imgElement.src = img;
// imgElement.setAttribute('width','800')
// content.appendChild(imgElement)

const header = document.querySelector("header");
const pageTitle = document.createElement("h1");
pageTitle.textContent = "Healty Bean Vegan Restaurant";
const body = document.querySelector('body');

const unorderedList = document.createElement("ul");
const listItemHome = document.createElement("li");
listItemHome.innerHTML = "Home";
const listItemMenu = document.createElement("li");
listItemMenu.innerHTML = "Menu";
const listItemContact = document.createElement("li");
listItemContact.innerHTML = "Contact";

unorderedList.appendChild(listItemHome);
unorderedList.appendChild(listItemMenu);
unorderedList.appendChild(listItemContact);
header.appendChild(pageTitle);
header.appendChild(unorderedList);
// body.appendChild(header);

// getHomeContent();
listItemHome.addEventListener('click', getHomeContent);
listItemMenu.addEventListener('click', getMenuContent);
listItemContact.addEventListener('click', getContactContent);
