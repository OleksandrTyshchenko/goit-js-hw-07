// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputRef = document.querySelector('#validation-input')

console.log(inputRef)

inputRef.addEventListener('change', (event) => {
    if (Number(inputRef.getAttribute('data-length')) === event.currentTarget.value.length) {
        inputRef.classList.add("valid");
    } else {
        inputRef.classList.remove("invalid");
    };
})
    
