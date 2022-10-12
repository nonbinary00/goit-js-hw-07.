import { galleryItems } from './gallery-items.js';
// Change code below this line
// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.


console.log(galleryItems);

const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML("beforeend", imgMarkup);

function createImgMarkup ( galleryItems){
    const markup = gallery.map(({preview, original, description})=>{
        return `
        <div class="gallery__item">
          <a class="gallery__link" href="large-image.jpg">
            <img
            class="gallery__image"
            src="small-image.jpg"
            data-source="large-image.jpg"
            alt="Image description"/>
        </a>
      </div>`
    }).join("");}

