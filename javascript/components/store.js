import {printToDom} from "../helpers/util.js"
// import {addToCart} from "./components/cart.js"

const books = [
    {
        title: 'The Zen of Farting',
        image: 'https://images-na.ssl-images-amazon.com/images/I/513b-gd5mYL._SX355_BO1,204,203,200_.jpg',
        price: '$9.99',
        description: 'This book provides teachings from original Zen master Reepah. He reveals his secrets in achieving Zen mastery through fart techniques.',
    },
    {
        title: 'The Case of the Too-High Butt Crack',
        image: 'http://www.blogcdn.com/www.mandatory.com/media/2012/11/funny-books-high-butt-crack.jpg',
        price: '$12.99',
        description: 'A mystery novel where someone got butt hurt from too much butt crack, but no one knows who.',
    },
    {
        title: 'All my friends are dead',
        image: 'https://giftcanyon.com/wp-content/uploads/2015/10/All-My-Friends-Are-Dead-More-Funny-Books-as-White-Elephant-Gifts.jpg',
        price: '$5.99',
        description: "If you're a dinosaur, all of your friends are dead. If you're a pirate, all of your friends have scurvy. If you're a tree, all of your friends are end tables.",
    }
]

const cartClick = (e) => {
    const bookClass = e.target.closest('.card').class;
    const currentBook = books.find(x => x.class === bookClass);
    console.log (currentBook);
};

const addToCart = () => {
    const cartButtons = document.getElementsByClassName('cart');
    for (let i = 0; i < cartButtons.length; i++){
    cartButtons[i].addEventListener('click', cartClick)
}};


const cardBuilder = () => {
    let stringBuilder = '';
    let counter = 0;
    for (let i = 0; i < books.length; i++){
        counter++;
        stringBuilder += 
        `<div id="book${counter}" class="card" style="width: 18rem;">
            <img class="card-img-top" src="${books[i].image}" alt="${books[i].title}">
                <div class="card-body">
                    <h5 class="card-title">${books[i].title}</h5>
                    <p class="card-text">${books[i].description}</p>
                    <a href="#" class="cart btn btn-primary">Add To Cart</a>
                </div>
        </div>`;
    }
    printToDom (stringBuilder, "store");
    addToCart();
}



export {cardBuilder};