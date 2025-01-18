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

const input = document.getElementById("input")
const button = document.getElementById("submitButton")

const params = new URLSearchParams({
  key: "48294638-370103394c700755fbc6c4620",
  image_type: "photo",
  orientation: "horizontal",
  safesearch: "true",
});

button.addEventListener("click", () => {
    params.set("q", input.value)
    fetch(`https://pixabay.com/api/?${params}`).then((r) => console.log(r));
})



// const images = [
//   {
//     preview:
//       "<https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg>",
//     original:
//       "<https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg>",
//     description: "Hokkaido Flower",
//   },
//   {
//     preview:
//       "<https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg>",
//     original:
//       "<https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg>",
//     description: "Container Haulage Freight",
//   },
//   {
//     preview:
//       "<https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg>",
//     original:
//       "<https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg>",
//     description: "Aerial Beach View",
//   },
//   {
//     preview:
//       "<https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg>",
//     original:
//       "<https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg>",
//     description: "Flower Blooms",
//   },
//   {
//     preview:
//       "<https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg>",
//     original:
//       "<https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg>",
//     description: "Alpine Mountains",
//   },
//   {
//     preview:
//       "<https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg>",
//     original:
//       "<https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg>",
//     description: "Mountain Lake Sailing",
//   },
//   {
//     preview:
//       "<https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg>",
//     original:
//       "<https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg>",
//     description: "Alpine Spring Meadows",
//   },
//   {
//     preview:
//       "<https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg>",
//     original:
//       "<https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg>",
//     description: "Nature Landscape",
//   },
//   {
//     preview:
//       "<https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg>",
//     original:
//       "<https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg>",
//     description: "Lighthouse Coast Sea",
//   },
// ];

// const gallery = document.querySelector(".gallery");

// images.map((link) => {
//   const lists = `<li class="gallery-item">
//     <a class="gallery-link" href="${link.original.slice(1, -1)}">
//       <img
//         class="gallery-image"
//         src="${link.preview.slice(1, -1)}"
//         data-source="${link.original.slice(1, -1)}"
//         alt="${link.description}"
//       />
//     </a>
//   </li>
//   `;
//   gallery.insertAdjacentHTML("afterbegin", lists);
// });

// gallery.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (e.target.tagName !== "IMG") {
//     return;
//   }
// });

// new SimpleLightbox(".gallery a", {
//   captionsData: "alt",
//   captionDelay: 250,
// });

// //Style
// gallery.style.display = "flex";
// gallery.style.flexWrap = "wrap";
// gallery.style.gap = "20px";
// gallery.style.listStyle = "none";
// gallery.style.alignItems = "center";
// gallery.style.justifyContent = "center";
// gallery.style.width = "1128px";
// gallery.style.margin = "auto";
