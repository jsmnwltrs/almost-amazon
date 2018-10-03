import {printToDom} from "../helpers/util.js";

const cartBuilder = (books) => {
    let cartString = 
    `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${books.image}" alt="${books.title}">
        <div class="card-body">
            <h5 class="card-title">${books.title}</h5>
            <p class="card-text font-weight-bold">Price: ${books.price}</p>
            <a href="#" class="cart btn btn-primary">Remove</a>
        </div>
    </div>`;
    printToDom(cartString, 'cart')
};

export {cartBuilder};