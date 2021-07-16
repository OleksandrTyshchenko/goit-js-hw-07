

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().


const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListRef = document.querySelector('#ingredients')


const elementRef = ingredients.map(option => {
  const ingredientsListElementRef = document.createElement('li')
  ingredientsListElementRef.textContent = option

  
  return ingredientsListElementRef
})
ingredientsListRef.append(...elementRef)