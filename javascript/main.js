import {cardBuilder} from "./components/store.js";
import {setInitialDisplay} from "./components/cart.js";


const initializeApp = () => {
    cardBuilder();
    setInitialDisplay();
}

initializeApp();