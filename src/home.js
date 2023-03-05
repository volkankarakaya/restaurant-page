import chief from "./images/chief.jpg";

function getHomeContent() {
  const chiefImage = document.createElement("img");
  chiefImage.src = chief;
  chiefImage.setAttribute('width','700px');
  chiefImage.setAttribute('id', 'chief-image')

  const para1 = document.createElement('p');
  para1.innerHTML = 'Best Vegan Restaurant in Town!'

  const para2 = document.createElement('p');
  para2.innerHTML = 'Chief Abra Kadabra cooks best vegan dishes since 1983!'

  const flexContainer = document.createElement('div');
  flexContainer.setAttribute('id', 'flexContainer');

 
  

  const mainContent = document.createElement("div");
  mainContent.setAttribute('id','home-main');

  mainContent.appendChild(para1);
  mainContent.appendChild(chiefImage);
  mainContent.appendChild(para2);

  

  
  const content = document.querySelector("#content");
  content.appendChild(flexContainer);
  flexContainer.appendChild(mainContent)
  
  
}

export default getHomeContent;
