var buyButtons = document.getElementsByClassName("buy-button");
console.log(buyButtons);
for (var i = 0; i < buyButtons.length; i++) {
    buyButtons[i].addEventListener("click", addToCart);
}

// add to cart  
function addToCart() {
    var picture = this.parentNode;
    console.log(picture);
    var pictureId = picture.getAttribute("data-id");
    var pictureName = picture.querySelector("h3").textContent;

    var cartItems = document.querySelector(".cart-items");
    var item = document.createElement("div");
    item.setAttribute("data-id", pictureId);
    item.className = "cart-item";
    item.innerHTML = `
        <span class="cart-item-name">${pictureName}</span>
        <button class="remove-button">Remove</button>
      `;
    cartItems.appendChild(item);




    // count+1 -1
    var cartCount = document.querySelector(".cart-count");
    cartCount.textContent = parseInt(cartCount.textContent) + 1;

    // removde
    var removeButton = item.querySelector(".remove-button");
    removeButton.addEventListener("click", removeFromCart);


}

// Remove itesm
function removeFromCart() {
    var item = this.parentNode;
    var pictureId = item.getAttribute("data-id");

    var cartCount = document.querySelector(".cart-count");
    cartCount.textContent = parseInt(cartCount.textContent) - 1;

    // Remove item from cart
    item.parentNode.removeChild(item);


}

// pay work
var payButton = document.querySelector(".pay-button");
payButton.addEventListener("click", pay);


function pay() {
    var cartItems = document.querySelector(".cart-items");
    var items = cartItems.getElementsByTagName("div");
    var pictureIds = [];


    for (var i = 0; i < items.length; i++) {
        var pictureId = items[i].getAttribute("data-id");
        pictureIds.push(pictureId);
    }

    // Remove pictures from the page - last task
    var pictures = document.getElementsByClassName("picture");
    for (var j = 0; j < pictures.length; j++) {
        var picture = pictures[j];
        var pictureId = picture.getAttribute("data-id");
        if (pictureIds.includes(pictureId)) {
            picture.style.display = "none";
        }
    }

    // cart clear karke new cart
    cartItems.innerHTML = "";

    var cartCount = document.querySelector(".cart-count");
    cartCount.textContent = "0";

    // pop up as per the instruction
    alert("Thank you for your purchase!");
}