function getDataFromDb() {
    let shoppingCart = localStorage.getItem('Shopping Cart');
    if(shoppingCart) {
        shoppingCart = JSON.parse(shoppingCart);
    }
    else {
        shoppingCart = [];
    }

    return shoppingCart;
}

function addToLs(props) {    
    let ShoppingCart = getDataFromDb();
    const {id, courseName, offerPrice} = props;

    const isExisting = ShoppingCart.findIndex((item) => item.id === id);
    if(isExisting === -1) {
        const newProduct = {
            id,
            courseName,
            price: offerPrice,
            quantity: 1,
        }

        ShoppingCart.push(newProduct);
    }

    else {
        ShoppingCart[isExisting].quantity += 1;
    }

    localStorage.setItem('Shopping Cart', JSON.stringify(ShoppingCart));
}

export {getDataFromDb , addToLs};