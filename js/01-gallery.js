import { galleryItems } from './gallery-items.js';
// Change code below this line
// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.


console.log(galleryItems);

const galleryMarkup = imageMarkup(galleryItems);
const imageContainer = document.querySelector('.gallery');

imageContainer.insertAdjacentHTML('beforeend', galleryMarkup);

imageContainer.addEventListener('click',imgClick)

function imageMarkup(galleryItems){
  return galleryItems.map(({preview, original, description})=>{
        return `
        <div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="large-image.jpg"
            alt="${description}"> 
            />
        </a>
      </div>`
    }).join("");
  }

  // Реализация делегирования на div.gallery и получение url большого изображения.

  // imageContainer.addEventListener('click', imgClick);

  function imgClick(evt) {
    console.log(evt.target);
  }