const addItem = () => {
    const nameField = document.getElementById('product-name');
    const product = nameField.value;
    // console.log(product);
    // Add to local storage
    displayProduct(product);

    // Empty the input field
    nameField.value = '';
    // console.log(product);
}

const displayProduct =product =>{
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = product;
    ul.appendChild(li);
    setProductToCart(product);
}

const getCart = () => {
    const cart = localStorage.getItem('cart')
    let cartObj;

    if(cart){
        cartObj = JSON.parse(cart); 
    }
    else{
        cartObj = {};
    }
    return cartObj;
}

const setProductToCart = product =>{
    const cart = getCart();
    cart[product] = 1;
    const prodStringified = JSON.stringify(cart);
    localStorage.setItem('cart', prodStringified);
    console.log("cart", cart);
}