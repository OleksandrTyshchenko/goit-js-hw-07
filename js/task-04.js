

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса


const counter = {
    value: 0,
    increment() {
        console.log('increment -> this', this);
        this.value += 1;
    },
    decrement() {
       console.log('increment -> this', this);
        this.value -= 1; 
    }

}
const decrementBtnRef = document.querySelector('#counter')
const incrementBtnRef = document.querySelector('#counter')
const counterValueRef = document.querySelector('#value')
const plusBtnRef = incrementBtnRef.lastElementChild
const minusBtnRef = decrementBtnRef.firstElementChild
// console.log(decrementBtnRef)
// console.log(incrementBtnRef)
// console.log(counterValueRef)

minusBtnRef.addEventListener('click', function () {
    // console.log('Кликнули на декремент')

    counter.decrement();
    // console.log(counter);
    counterValueRef.textContent = counter.value;
    
});

plusBtnRef.addEventListener('click', function () {
    // console.log('Кликнули на инкримент')

    counter.increment();
    // console.log(counter);
    counterValueRef.textContent = counter.value;  
})

