/* ----------------------
Defaults
---------------------- */

const totalItemsContainer = document.querySelector('#totalItems');
const totalPriceContainer = document.querySelectorAll('.totalPrice');
const cartMenuItemsWrapper = document.querySelector('#cartMenuItemsWrapper');

const checkoutBtn = document.querySelector('#checkout');
const checkoutErrorMessage = document.querySelector('#checkoutErrorMessage');

/* ----------------------
Load Cart Calculations
---------------------- */

window.addEventListener('load', function() {
    // Loading previous cart items
    const totalStoredItems = localStorage.getItem('totalStoredItems');

    if(totalStoredItems) {
        // Set the previous cart items and remove events
        cartMenuItemsWrapper.innerHTML = totalStoredItems;
        const cartItemRemoves = document.querySelectorAll('.cartItemRemove');

        for(let i = 0; i < cartItemRemoves.length; i++) {
            let cartItemRemove = cartItemRemoves[i];

            cartItemRemove.addEventListener('click', function() {
                // Remove the correct item
                removeItem(cartItemRemove);
            });
        } 

        // Calculate the total items and price
        calculateItems();
        calculatePrice();
    } else {
        calculateItems();
        calculatePrice();
    }
});

/* ----------------------
Toggle Mobile Navigation and Cart Menu
---------------------- */

window.addEventListener('load', function() {
    // Menu and button for the mobile navigation
    const headerLogo = document.querySelector('#headerLogo');
    const navigationMenu = document.querySelector('#mobileNavigationMenu');

    // Menu and button for the cart
    const cartBtn = document.querySelector('#headerCart');
    const cartMenu = document.querySelector('#cartMenu');

    cartBtn.addEventListener('click', function() {
        // Toggle the menu
        if(!(navigationMenu.classList.contains('activeNavigationMenu'))) {
            // Only open if navigation menu isn't active
            cartMenu.classList.toggle('activeCartMenu');
        }
    });

    headerLogo.addEventListener('click', function() {
        // Toggle the navigation menu
        if(!(cartMenu.classList.contains('activeCartMenu'))) {
            // Only open if cart menu isn't active
            navigationMenu.classList.toggle('activeNavigationMenu');
        }
    });
});

/* ----------------------
Toggle Checkout Error Message
---------------------- */

checkoutBtn.addEventListener('click', function() {
    checkoutErrorMessage.classList.add('activeErrorMessage');
});

/* ----------------------
Removing
---------------------- */

function removeItem(cartItemRemove) {
    switch(true) {
        // Remove the correct item and calculate the changes
        case cartItemRemove.classList.contains('pinkFlowerDressRemove'):
            // Remove the pinkFlowerDressItem
            const pinkFlowerDressItem = document.querySelector('.pinkFlowerDressItem');
            removeAndCalc(pinkFlowerDressItem);
            break;
        case cartItemRemove.classList.contains('blackLacedTopRemove'):
            // Remove the blackLacedTopItem
            const blackLacedTopItem = document.querySelector('.blackLacedTopItem');
            removeAndCalc(blackLacedTopItem);
            break;
        case cartItemRemove.classList.contains('blackAndYellowRemove'):
            // Remove the blackAndYellowItem
            const blackAndYellowItem = document.querySelector('.blackAndYellowItem');
            removeAndCalc(blackAndYellowItem);
            break;
        case cartItemRemove.classList.contains('blackTrenchCoatRemove'):
            // Remove the blackTrenchCoatItem
            const blackTrenchCoatItem = document.querySelector('.blackTrenchCoatItem');
            removeAndCalc(blackTrenchCoatItem);
            break;
        case cartItemRemove.classList.contains('blackJacketRemove'):
            // Remove the blackJacketItem
            const blackJacketItem = document.querySelector('.blackJacketItem');
            removeAndCalc(blackJacketItem);
            break;
        case cartItemRemove.classList.contains('blackLeatherJacketRemove'):
            // Remove the blackLeatherJacketItem
            const blackLeatherJacketItem = document.querySelector('.blackLeatherJacketItem');
            removeAndCalc(blackLeatherJacketItem);
            break;
        case cartItemRemove.classList.contains('blueStripedDressRemove'):
            // Remove the blueStripedDressItem
            const blueStripedDressItem = document.querySelector('.blueStripedDressItem');
            removeAndCalc(blueStripedDressItem);
            break;
        case cartItemRemove.classList.contains('redStripedTopRemove'):
            // Remove the redStripedTopItem
            const redStripedTopItem = document.querySelector('.redStripedTopItem');
            removeAndCalc(redStripedTopItem);
            break;
        case cartItemRemove.classList.contains('tanCargoPantsRemove'):
            // Remove the tanCargoPantsItem
            const tanCargoPantsItem = document.querySelector('.tanCargoPantsItem');
            removeAndCalc(tanCargoPantsItem);
            break;
    }
}

function removeAndCalc(cartItem) {
    cartItem.remove();
    calculateItems();
    calculatePrice();
}

/* ----------------------
Calculate 
---------------------- */

function calculateItems() {
    // Add up the total items
    const totalCartItems = document.querySelectorAll('.cartItem');

    let calculatedItems = totalCartItems.length;
    totalItemsContainer.textContent = `${calculatedItems}`;

    // Save the total items to localstorage
    localStorage.setItem('totalStoredItems', cartMenuItemsWrapper.innerHTML);
}

function calculatePrice() {
    // Add up all the item prices
    let calculatedPrice = 0;
    const itemPrices = document.querySelectorAll('.cartItemPrice');

    for(let i = 0; i < itemPrices.length; i++) {
        let itemPrice = Number(itemPrices[i].textContent.substring(1));
        calculatedPrice += itemPrice;
    }

    for(let i = 0; i < totalPriceContainer.length; i++) {
        totalPriceContainer[i].textContent = `$${calculatedPrice.toFixed(2)}`;
    }
}
