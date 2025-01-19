import "./init";

// Kullanılacak kısmın import edilmesi
import SimpleLightbox from "simplelightbox";
// Ek stillerin eklenmesi
import "simplelightbox/dist/simple-lightbox.min.css";

// Dokümantasyonda belirtilen import
import iziToast from "izitoast";
// Stil importu
import "izitoast/dist/css/iziToast.min.css";

const input = document.getElementById("input");
const button = document.getElementById("submitButton");
const lists = document.querySelector(".lists");

const params = new URLSearchParams({
  key: "48294638-370103394c700755fbc6c4620",
  image_type: "photo",
  orientation: "horizontal",
  safesearch: "true",
  per_page: "9",
});

button.addEventListener("click", (e) => {
  e.preventDefault;
  lists.innerHTML = "";
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
       <div class="cards">
       <a class="link" href= "${photo.largeImageURL}">
       <img
        class="image"
        src="${photo.webformatURL}"
        data-source="${photo.largeImageURL}"
        alt="${photo.tags}"
      />
       </a>
       <div class="info">
       <p>Likes <span>${photo.likes}</span></p>
       <p>Views <span>${photo.views}</span></p>
       <p>Comments <span>${photo.comments}</span></p>
       <p>Downloads <span>${photo.downloads}</span></p>
       </div>
       </div>
       </li>`;
        })
        .join("");
      lists.insertAdjacentHTML("afterbegin", markup);
    })
    .catch((error) => console.log(error));
});