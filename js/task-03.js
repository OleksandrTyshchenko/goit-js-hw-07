
// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// <ul id="gallery"></ul>
// Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные 
// строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.


const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];



const galleryRef = document.querySelector('#gallery');
const imagesRef = [];


for (let i = 0; i < images.length; i += 1) {
  const option = images[i];
};
 
galleryRef.setAttribute("style", "list-style:none; display: flex; justify-content: space-around;")
 
const makeGallery = ({url, alt}) => {
  return `<li>
  <img src = "${url}" alt = "${alt}">
  </li>`;
}


const fff = images.map(makeGallery).join('');
galleryRef.insertAdjacentHTML('afterbegin', fff);
var elems = document.getElementsByTagName('img');
for (var i = 0; i < elems.length; i++) elems[i].style.width = '320px'





