import {printToDom} from "../helpers/util.js";

let cartArray = [];


const buildCartArray = (newBookObject) => {
  cartArray.push(newBookObject);
  cartBuilder();
}


const removeCartElement = (currentBook) => {
    const bookIndex = cartArray.findIndex(currentBook);
    cartArray.splice(bookIndex, 1);
    cartBuilder();
  }

const removeClick = (e) => {
    const bookId = e.target.closest('.card').id;
    const currentBook = cartArray.find(x => x.id === bookId);
    removeCartElement(currentBook);
};

const removeButton = () => {
    const removeButtons = document.getElementsByClassName('remove');
    for (let i = 0; i < removeButtons.length; i++){
    removeButtons[i].addEventListener('click', removeClick);
}};

const cartBuilder = () => {
    let cartString = '';
    for(let i = 0; i < cartArray.length; i++){
    cartString += 
    `<div class="card" id="card" style="width: 18rem;">
        <img class="card-img-top" src="${cartArray[i].image}" alt="${cartArray[i].title}">
        <div class="card-body">
            <h5 class="card-title">${cartArray[i].title}</h5>
            <p class="card-text font-weight-bold">Price: ${cartArray[i].price}</p>
            <a href="#" class="remove btn btn-primary">Remove</a>
        </div>
    </div>`;
    };
    printToDom(cartString, 'cart');
    removeButton();
};

export {buildCartArray};