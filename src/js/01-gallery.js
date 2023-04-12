// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const imageContainer = document.querySelector('.gallery');
const imageMarkup = createImageCardMarkup(galleryItems);
imageContainer.insertAdjacentHTML('beforeend', imageMarkup);
imageContainer.addEventListener('click', onImageContainerClick);
function createImageCardMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
                    <a class="gallery__link" href="${original}">
                        <img
                            class="gallery__image"
                            src="${preview}"
                            alt="${description}"
                        />
                    </a>
                </div>`
    }).join('');
}
function onImageContainerClick(evt) {
    const isImgSwatchEl = evt.target.classList.contains('gallery__image');
    if (!isImgSwatchEl) {
        return;
    }
    evt.preventDefault();
}
const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });
  lightbox.open();
 
console.log(galleryItems);

