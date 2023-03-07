import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
galleryEl.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems));

function createGalleryMarkup(galleryItems) {
	return galleryItems
		.map(
			({ preview, description, original }) => `
				<div class="gallery__item">
					<a class="gallery__link" href="${original}">
						<img
						class="gallery__image"
						src="${preview}"
						data-source="${original}"
						alt="${description}"
						/>
					</a>
				</div>
        	`,
		)
		.join("");
}

galleryEl.addEventListener("click", lightbox);

var lightbox = new SimpleLightbox(".gallery .gallery__link", {
	captionsData: "alt",
	captionDelay: 250,
	scrollZoom: false,
});