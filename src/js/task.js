import "./init";

// Kullanılacak kısmın import edilmesi
import SimpleLightbox from "simplelightbox";
// Ek stillerin eklenmesi
import "simplelightbox/dist/simple-lightbox.min.css";

// Dokümantasyonda belirtilen import
import iziToast from "izitoast";
// Stil importu
import "izitoast/dist/css/iziToast.min.css";
import { Input } from "postcss";

const input = document.getElementById("input");
const button = document.getElementById("submitButton");
const lists = document.querySelector(".lists");

const params = new URLSearchParams({
  key: "48294638-370103394c700755fbc6c4620",
  image_type: "photo",
  orientation: "horizontal",
  safesearch: "true",
});

button.addEventListener("click", () => {
  params.set("q", input.value);
  fetch(`https://pixabay.com/api/?${params}`)
    .then((r) => r.json())
    .then((a) => {
      if (a.total == 0) {
        iziToast.error({
          position: "topRight",
          message:
            "Sorry, there are no images matching your search query. Please try again!",
        });
      }
      const markup = a.hits
        .map((photo) => {
          return `<li class="list">
       <a class="link" href= "${photo.tags}">
       <img
        class="image"
        src="${photo.previewURL}"
        data-source="${photo.largeImageURL}"
        alt="${photo.tags}"
      />
       </a>
       </li>`;
        })
        .join("");
      lists.insertAdjacentHTML("afterbegin", markup);
    });
});



// "id": 4611189,
//             "pageURL": "https://pixabay.com/photos/kitten-cat-pet-feline-animal-fur-4611189/",
//             "type": "photo",
//             "tags": "kitten, cat, pet, feline, animal, fur, kitty, domestic, domestic cat, cat portrait, animal world, nature, cat, cat, cat, cat, cat",
//             "previewURL": "https://cdn.pixabay.com/photo/2019/11/08/11/56/kitten-4611189_150.jpg",
//             "previewWidth": 150,
//             "previewHeight": 99,
//             "webformatURL": "https://pixabay.com/get/g1ba66902ba81fdb9d7ce81ed6370a8eeeea66ec3ecd1a36aff9c68582a039fa7468c89fc8f32c0984149a8eef758b6ed960c57f15f4ad90b95deb0ae69f31cd6_640.jpg",
//             "webformatWidth": 640,
//             "webformatHeight": 426,
//             "largeImageURL": "https://pixabay.com/get/g042e49262bb34d0a395ae7e4d196b83db18fd58031cd608ac7703b090a36fb6e9b64bb421af1543a8a8c1fedf79b561cbd1859690fff2cbeb882b61fa6f4f062_1280.jpg",
//             "imageWidth": 6000,
//             "imageHeight": 4000,
//             "imageSize": 3885974,
//             "views": 524471,
//             "downloads": 408576,
//             "collections": 14119,
//             "likes": 1139,
//             "comments": 188,
//             "user_id": 9285194,
//             "user": "guvo59",
//             "userImageURL": ""
