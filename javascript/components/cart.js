import {printToDom} from "../helpers/util.js";

let cartArray = [];


const buildCartArray = (newBookObject) => {
  cartArray.push(newBookObject);
  cartBuilder();
}

const setInitialDisplay = () => { 
    printToDom(0, 'price')
}

const setPriceDisplay = (num) => {
    printToDom(num, 'price');
}

const getPrice = () => {
    let currentPrice = document.getElementById("price").innerHTML;
    let priceNumber = "";
    let currentPriceNumber = "";
    let price = "";
    let result = "";
    cartArray.forEach((array)=> {
        price = array.price;
        priceNumber = parseFloat(price);
        currentPriceNumber = parseFloat(currentPrice);
        result = currentPriceNumber + priceNumber;
    })
    setPriceDisplay(result);
}

const cartBuilder = () => {
    let cartString = '';
    for(let i = 0; i < cartArray.length; i++){
    cartString += 
    `<div class="card" id="card" style="width: 18rem;">
        <img class="card-img-top" src="${cartArray[i].image}" alt="${cartArray[i].title}">
        <div class="card-body">
            <h5 class="card-title">${cartArray[i].title}</h5>
            <p class="card-text font-weight-bold">Price: ${cartArray[i].price}</p>
        </div>
    </div>`;
    };
    printToDom(cartString, 'cart');
    getPrice();
};

export {buildCartArray, setInitialDisplay};