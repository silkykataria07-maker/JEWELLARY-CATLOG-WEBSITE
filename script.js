// Create an empty cart array
let cart = [];

// Add item to cart
function addToCart(productName) {
    cart.push(productName);
    alert(productName + " added to cart");

    console.log("Cart Items:", cart);
}

// Remove item from cart
function removeFromCart(productName) {
    let index = cart.indexOf(productName);

    if (index > -1) {
        cart.splice(index, 1);
        alert(productName + " removed from cart");
    } else {
        alert(productName + " not found in cart");
    }

    console.log("Cart Items:", cart);
}
