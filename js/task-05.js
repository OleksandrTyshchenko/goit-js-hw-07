// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.


const inputRef = document.querySelector('#name-input')
// console.log(inputRef)
const nameLabelRef = document.querySelector('#name-output')
// console.log(nameLabelRef)

inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
    
    // console.log(event.currentTarget.value)
   
    nameLabelRef.textContent = event.currentTarget.value ?
        nameLabelRef.textContent = event.currentTarget.value :
        nameLabelRef.textContent = 'незнакомец'
}


