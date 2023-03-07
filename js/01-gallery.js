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

galleryEl.addEventListener("click", onImageClick);

function onImageClick(event) {
	event.preventDefault();

	if (event.target.nodeName !== "IMG") {
		return;
	}

	const instance = basicLightbox.create(
		`
		<img src="${event.target.dataset.source}">
	`,
	);

	instance.show();

	galleryEl.addEventListener("keydown", onEscKeyDown);

	function onEscKeyDown(event) {
		if (event.code !== "Escape") {
			return;
		}
		instance.close();
		galleryEl.removeEventListener("keydown", onEscKeyDown);
	}
}

