// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. 
// Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в 
// консоль текст заголовка элемента(тега h2) и количество элементов в
// категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4 

const ulCategoriesRef = document.querySelectorAll('.item')
console.log(`В списке ${ulCategoriesRef.length} категории.`)

const headCategoriesRef = document.querySelectorAll(`h2`)

const showCategoriesRef = headCategoriesRef.forEach(el =>
console.log(`Категория: ${el.textContent}
Количество элементов: ${el.parentNode.querySelectorAll('li').length}`))








