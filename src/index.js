import img from './background.jpg';
import './style.css';

const content = document.getElementById('content')


const headingElement = document.createElement('h1')
headingElement.innerHTML = "Welcome to the Acme Restaurant!"
content.appendChild(headingElement);

const paraElement = document.createElement('p');
paraElement.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolore consequuntur placeat voluptatem necessitatibus a dolor possimus excepturi ab voluptas?"
content.appendChild(paraElement)

const imgElement = new Image()
imgElement.src = img;
imgElement.setAttribute('width','800')

content.appendChild(imgElement)