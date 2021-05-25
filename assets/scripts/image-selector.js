window.addEventListener('load', function() {
    createPreviewClickEvents();
});

function createPreviewClickEvents() {
    // Get the previewItems
    const previewItems = document.querySelectorAll('.previewImageItem');

    for(let i = 0; i < previewItems.length; i++) {
        let previewItem = previewItems[i];

        // Add click events to each item
        previewItem.addEventListener('click', function() {
            setPreviewClickEvents(previewItem, previewItems);
        });
    }
}

function setPreviewClickEvents(previewItem, previewItems) {
    const previewImage = document.querySelector('#previewImage');

    if(previewItem.classList.contains('image1') &&
        !(previewItem.classList.contains('previewImageItemActive'))) {
        // Make the 1st active image the active image
        removeActiveImage(previewItems, previewImage);
        previewItem.classList.add('previewImageItemActive');
        previewImage.classList.add('activeImage1');

    } else if(previewItem.classList.contains('image2') &&
        !(previewItem.classList.contains('previewImageItemActive'))) {
        // Make the 2nd active image the active image
        removeActiveImage(previewItems, previewImage);
        previewItem.classList.add('previewImageItemActive');
        previewImage.classList.add('activeImage2');

    } else if(previewItem.classList.contains('image3') &&
        !(previewItem.classList.contains('previewImageItemActive'))) {
        // Make the 3rd active image the active image
        removeActiveImage(previewItems, previewImage);
        previewItem.classList.add('previewImageItemActive');
        previewImage.classList.add('activeImage3');

    } else if(previewItem.classList.contains('image4') &&
        !(previewItem.classList.contains('previewImageItemActive'))) {
        // Make the 4th active image the active image
        removeActiveImage(previewItems, previewImage);
        previewItem.classList.add('previewImageItemActive');
        previewImage.classList.add('activeImage4');

    }
}

function removeActiveImage(previewItems, previewImage) {
    for(let i = 0; i < previewItems.length; i++) {
        // Remove the active classes from each item
        previewItems[i].classList.remove('previewImageItemActive');
    }

    // Remove all active image classes from the previewImage
    previewImage.classList.remove('activeImage1');
    previewImage.classList.remove('activeImage2');
    previewImage.classList.remove('activeImage3');
    previewImage.classList.remove('activeImage4');
}