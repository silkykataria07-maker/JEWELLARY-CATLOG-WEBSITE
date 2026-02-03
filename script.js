let total = 0;

function showCategory() {
    document.getElementById("types").classList.remove("hidden");
}

function showProducts() {
    document.getElementById("products").classList.remove("hidden");
}

function addToCart(name, price) {
    let list = document.getElementById("cart-items");
    let li = document.createElement("li");
    li.textContent = name + " - ₹" + price;
    list.appendChild(li);

    total += price;
    document.getElementById("total").textContent = total;
}
