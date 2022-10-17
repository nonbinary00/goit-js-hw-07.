import { galleryItems } from './gallery-items.js';
// Change code below this line
// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.


console.log(galleryItems);


const imageContainer = document.querySelector('.gallery');
const galleryMarkup = imageMarkup(galleryItems);

imageContainer.insertAdjacentHTML('beforeend', galleryMarkup);



function imageMarkup(galleryItems){
  return galleryItems.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src= ${preview}
            data-source= ${original}
            alt= ${description}/>
            
        </a>
      </div>`
    }).join("");
  }

  // Реализация делегирования на div.gallery и получение url большого изображения.

  imageContainer.addEventListener('click', imgClick);

  // 
  
  function imgClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains("gallery__image")) {
      return;
    };


  
  const modal = basicLightbox.create(`<img src="${evt.target.dataset.source}" width="800" height="600">`);
    modal.show();

    if (basicLightbox.visible()) {
      document.addEventListener("keydown", (evt) => {
          console.log(evt.key);
        if (evt.key === "Escape") {
          modal.close();
        }
      });
    }
  };

  
  


//     {
//       onShow: modal => document.querySelector("body").addEventListener ("keyup", evt => {onKeyPressed(evt, modal);}),
//       onClose: modal =>document.querySelector("body").removeEventListener("keyup", evt => {onKeyPressed(evt, modal);}),
//     });
//     modal.show ();
// }
  
