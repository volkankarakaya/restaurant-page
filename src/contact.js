import locationImg from './images/location.png'

function getContactContent(){

    const content = document.getElementById('content');
    content.innerHTML=""

    const flexContainerContact = document.createElement('div');
    flexContainerContact.setAttribute('id', 'flex-container-contact');

    const contact = document.createElement('div');
    contact.setAttribute('id', 'contact');

    const telephone = document.createElement('p');
    telephone.innerHTML = '(904) 777-45-26';

    const address = document.createElement('p');
    address.innerHTML = '10450 San Jose Blvd Jacksonville Florida'

    const location = document.createElement('img');
    location.src= locationImg;

    contact.appendChild(telephone);
    contact.appendChild(address);
    contact.appendChild(location);

    flexContainerContact.appendChild(contact)
    content.appendChild(flexContainerContact)
    





};



export default getContactContent;