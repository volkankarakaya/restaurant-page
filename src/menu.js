

function getMenuContent(){
    const content = document.getElementById('content');
    content.innerHTML=''


    const flexContainerMenu = document.createElement('div');
    flexContainerMenu.setAttribute('id', 'flex-container-menu')

    const menu = document.createElement('div');
    menu.setAttribute('class', 'menu');


    const mainDishesDiv = document.createElement('div');
    mainDishesDiv.setAttribute('class', 'menu-item');
    const mainDishesPara = document.createElement('p');
    mainDishesPara.innerHTML = 'Main Dishes';
    mainDishesDiv.appendChild(mainDishesPara);

    const veganBurgersDiv = document.createElement('div');
    veganBurgersDiv.setAttribute('class', 'menu-item');
    const veganBurgersPara = document.createElement('p');
    veganBurgersPara.innerHTML = 'Vegan Burgers';
    veganBurgersDiv.appendChild(veganBurgersPara);

    const pastasDiv = document.createElement('div');
    pastasDiv.setAttribute('class', 'menu-item');
    const pastasPara = document.createElement('p');
    pastasPara.innerHTML = 'Pastas'
    pastasDiv.appendChild(pastasPara)

    const desertsDiv = document.createElement('div');
    desertsDiv.setAttribute('class', 'menu-item');
    const desertsPara = document.createElement('p');
    desertsPara.innerHTML = 'Deserts'
    desertsDiv.appendChild(desertsPara)

    menu.appendChild(mainDishesDiv);
    menu.appendChild(veganBurgersDiv);
    menu.appendChild(pastasDiv);
    menu.appendChild(desertsDiv);

    
    content.appendChild(flexContainerMenu)
    flexContainerMenu.appendChild(menu)

};


export default getMenuContent