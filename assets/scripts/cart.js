/* ----------------------
Event Listners
---------------------- */

const addToCartBtn = document.querySelector('#addToCart');
const cartErrorMessage = document.querySelector('#addErrorMessage');

addToCartBtn.addEventListener('click', function() {
    // Detects the click of the add to cart button
    // Creates a new item and adds the cartItem class
    let newCartItem = document.createElement('div');
    newCartItem.classList.add('cartItem');

    // Set the correct item class, and prevent adding multiple of the same
    setItemClass(newCartItem)

    // Creates the left and right sections of the item
    let newCartItemLeft = document.createElement('div');
    let newCartItemRight = document.createElement('div');

    // Sets the classes and appends
    newCartItemLeft.classList.add('cartItemLeft');
    newCartItemRight.classList.add('cartItemRight');
    newCartItem.append(newCartItemLeft);
    newCartItem.append(newCartItemRight);

    if(newCartItem.classList.length === 2) {
        // Only add items with 2 classes
        cartMenuItemsWrapper.append(newCartItem);
        setItemName(newCartItemLeft);
        setItemSize(newCartItemLeft);
        setRemoveItem(newCartItem, newCartItemLeft)
        setItemPrice(newCartItemRight);
        calculateItems();
        calculatePrice();
    } else {
        // Display error if the item was already added/doesn't have 2 classes
        cartErrorMessage.classList.add('activeErrorMessage');
    }
});

/* ----------------------
Size Selector
---------------------- */

window.addEventListener('load', function() {
    // Allows for sizes to be selectable
    createSizeClickEvents();
});

function createSizeClickEvents() {
    // Get the sizeSelectItems
    const sizeSelectItems = document.querySelectorAll('.sizeSelectItem');

    for(let i = 0; i < sizeSelectItems.length; i++) {
        let sizeSelectItem = sizeSelectItems[i];

        sizeSelectItem.addEventListener('click', function() {
            // Add click events to each item
            setSizeClickEvents(sizeSelectItem, sizeSelectItems);
        });
    }
}

function setSizeClickEvents(sizeSelectItem, sizeSelectItems) {
    if(!(sizeSelectItem.classList.contains('selectedSizeItem'))) {
        // Remove the selectedItem classes and add it to the selected item
        removeSelectedSize(sizeSelectItems);
        sizeSelectItem.classList.add('selectedSizeItem');
    }
}

function removeSelectedSize(sizeSelectItems) {
    for(let i = 0; i < sizeSelectItems.length; i++) {
        // Remove all selectedItem classes
        sizeSelectItems[i].classList.remove('selectedSizeItem')
    }
}

/* ----------------------
Get Item Details
---------------------- */

function getName() {
    // Get's the name of the item that was added from the page
    const itemName = document.querySelector('#itemName');
    return itemName.textContent;
}

function getSize() {
    // Gets the size of the item that was selected from the page
    const itemSize = document.querySelector('.selectedSizeItem');
    return itemSize.textContent;
}


function getPrice() {
    // Gets the price of the item that was added from the page
    const itemPrice = document.querySelector('#itemPrice');
    return itemPrice.textContent.substring(1);
}

/* ----------------------
Set Item Details
---------------------- */

function setItemClass(newCartItem) {
    // Sets the correct item and prevents adding multiple of the same items
    switch(true) {
        case ((getName() === 'Pink Flower Dress') && 
            (document.querySelector('.pinkFlowerDressItem') === null)):
            // Set the item to the pinkFlowerDressItem
            newCartItem.classList.add('pinkFlowerDressItem');
            break;
        case ((getName() === 'Black Laced Top') && 
            (document.querySelector('.blackLacedTopItem') === null)):
            // Set the item to the blackLacedTopItem
            newCartItem.classList.add('blackLacedTopItem');
            break;
        case ((getName() === 'Black and Yellow') && 
            (document.querySelector('.blackAndYellowItem') === null)):
            // Set the item to the blackAndYellowItem
            newCartItem.classList.add('blackAndYellowItem');
            break;
        case ((getName() === 'Black Trench Coat') && 
            (document.querySelector('.blackTrenchCoatItem') === null)):
            // Set the item to the blackTrenchCoatItem
            newCartItem.classList.add('blackTrenchCoatItem');
            break;
        case ((getName() === 'Black Jacket') && 
            (document.querySelector('.blackJacketItem') === null)):
            // Set the item to the blackJacketItem
            newCartItem.classList.add('blackJacketItem');
            break;
        case ((getName() === 'Black Leather Jacket') && 
            (document.querySelector('.blackLeatherJacketItem') === null)):
            // Set the item to the blackLeatherJacketItem
            newCartItem.classList.add('blackLeatherJacketItem');
            break;
        case ((getName() === 'Blue Striped Dress') && 
            (document.querySelector('.blueStripedDressItem') === null)):
            // Set the item to the blueStripedDressItem
            newCartItem.classList.add('blueStripedDressItem');
            break;
        case ((getName() === 'Red Striped Top') && 
            (document.querySelector('.redStripedTopItem') === null)):
            // Set the item to the redStripedTopItem
            newCartItem.classList.add('redStripedTopItem');
            break;
        case ((getName() === 'Tan Cargo Pants') && 
            (document.querySelector('.tanCargoPantsItem') === null)):
            // Set the item to the tanCargoPantsItem
            newCartItem.classList.add('tanCargoPantsItem');
            break;
    }
}

function setItemName(newCartItemLeft) {
    // Creates an element for the name
    let cartItemName = document.createElement('p');
    cartItemName.classList.add('cartItemName');
    cartItemName.textContent = `${getName()}`

    // Appends the name to the item
    newCartItemLeft.append(cartItemName);
}

function setItemSize(newCartItemLeft) {
    // Creates an element for the size
    let cartItemSize = document.createElement('p');
    cartItemSize.classList.add('cartItemSize');
    cartItemSize.textContent = `- ${getSize()} - `;

    // Appends the size to the item
    newCartItemLeft.append(cartItemSize);
}

function setRemoveItem(newCartItem, newCartItemLeft) {
    // Creates an element for the remove
    let cartItemRemove = document.createElement('p');
    cartItemRemove.classList.add('cartItemRemove');
    cartItemRemove.textContent = `Remove`;

    // Sets the class for the correct remove
    setRemoveClass(newCartItem, cartItemRemove);

    cartItemRemove.addEventListener('click', function() {
        // Removes the correct item when clicked
        removeItem(cartItemRemove);
    });

    // Appends the remove to the item
    newCartItemLeft.append(cartItemRemove);
}

function setItemPrice(newCartItemRight) {
    // Creates an element for the price
    let cartItemPrice = document.createElement('p');
    cartItemPrice.classList.add('cartItemPrice');
    cartItemPrice.textContent = `$${Number(getPrice()).toFixed(2)}`;

    // Appends the price to the item
    newCartItemRight.append(cartItemPrice);
}

/* ----------------------
Set Remove Class
---------------------- */

function setRemoveClass(newCartItem, cartItemRemove) {
    // Sets the class for the remove based on what item it's for
    switch(true) {
        case newCartItem.classList.contains('pinkFlowerDressItem'):
            // Sets the remove class for the pinkFlowerDressItem
            cartItemRemove.classList.add('pinkFlowerDressRemove');
            break;
        case newCartItem.classList.contains('blackLacedTopItem'):
            // Sets the remove class for the blackLacedTopItem
            cartItemRemove.classList.add('blackLacedTopRemove');
            break;
        case newCartItem.classList.contains('blackAndYellowItem'):
            // Sets the remove class for the blackAndYellowItem
            cartItemRemove.classList.add('blackAndYellowRemove');
            break;
        case newCartItem.classList.contains('blackTrenchCoatItem'):
            // Sets the remove class for the blackTrenchCoatItem
            cartItemRemove.classList.add('blackTrenchCoatRemove');
            break;
        case newCartItem.classList.contains('blackJacketItem'):
            // Sets the remove class for the blackJacketItem
            cartItemRemove.classList.add('blackJacketRemove');
            break;
        case newCartItem.classList.contains('blackLeatherJacketItem'):
            // Sets the remove class for the blackLeatherJacketItem
            cartItemRemove.classList.add('blackLeatherJacketRemove');
            break; 
        case newCartItem.classList.contains('blueStripedDressItem'):
            // Sets the remove class for the blueStripedDressItem
            cartItemRemove.classList.add('blueStripedDressRemove');
            break; 
        case newCartItem.classList.contains('redStripedTopItem'):
            // Sets the remove class for the redStripedTopItem
            cartItemRemove.classList.add('redStripedTopRemove');
            break; 
        case newCartItem.classList.contains('tanCargoPantsItem'):
            // Sets the remove class for the tanCargoPantsItem
            cartItemRemove.classList.add('tanCargoPantsRemove');
            break; 
    }
}