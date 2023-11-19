// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "/node_modules/simplelightbox/dist/simple-lightbox.esm";
import "simplelightbox/dist/simple-lightbox.min.css"; 

const galleryCont = document.querySelector('.gallery');

galleryCont.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

new SimpleLightbox('.gallery__item a', {
        captionsData: 'alt', captionDelay: 250
    });

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => {
        return `
            <li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}" 
                        alt="${description}" 
                    />
                </a>
            </li>`
    }).join('');
}