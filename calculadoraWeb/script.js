


let numbers = []
let firstNumber = null
let operation = null


function clean(){  
    numbers = []
    firstNumber = null
    operation = null
    console.log(numbers)
    const display = document.querySelector('.display')
    display.innerHTML = '0'
}

function backspace(){
    numbers.pop()
    console.log(numbers)
    const display = document.querySelector('.display')
    if (numbers.length === 0){
        display.innerHTML = '0'
    } else {
        display.innerHTML = numbers.join('')
    }
}

function one(){
    numbers.push('1')
    console.log(numbers)
    const display = document.querySelector('.display')
    display.innerHTML = numbers.join('')
}

function two(){
    numbers.push('2')
    console.log(numbers)
    const display = document.querySelector('.display')
    display.innerHTML = numbers.join('')
}
function three(){
    numbers.push('3')
    console.log(numbers)
    const display = document.querySelector('.display')
    display.innerHTML = numbers.join('')
}
function four(){
    numbers.push('4')
    console.log(numbers)
    const display = document.querySelector('.display')
    display.innerHTML = numbers.join('')
}
function five(){
    numbers.push('5')
    console.log(numbers)
    const display = document.querySelector('.display')
    display.innerHTML = numbers.join('')
}
function six(){
    numbers.push('6')
    console.log(numbers)
    const display = document.querySelector('.display')
    display.innerHTML = numbers.join('')
}
function seven(){
    numbers.push('7')
    console.log(numbers)
    const display = document.querySelector('.display')
    display.innerHTML = numbers.join('')
}
function eight(){
    numbers.push('8')
    console.log(numbers)
    const display = document.querySelector('.display')
    display.innerHTML = numbers.join('')
}
function nine(){
    numbers.push('9')
    console.log(numbers)
    const display = document.querySelector('.display')
    display.innerHTML = numbers.join('')
}
function zero(){
    numbers.push('0')
    console.log(numbers)
    const display = document.querySelector('.display')
    display.innerHTML = numbers.join('')
}

function plus(){
    operation = 'plus'
    const currentNumber = Number(numbers.join(''))

    if (firstNumber === null){
        firstNumber = currentNumber
    } else {
        firstNumber += currentNumber
    }

    numbers = []

    const display = document.querySelector('.display')
    display.innerHTML = '0'
}

function minus(){
    operation = 'minus'
    const currentNumber = Number(numbers.join(''))

    if (firstNumber === null){
        firstNumber = currentNumber
    } else {
        firstNumber -= currentNumber
    }

    numbers = []

    const display = document.querySelector('.display')
    display.innerHTML = '0'
}

function multiply(){
    operation = 'multiply'
    const currentNumber = Number(numbers.join(''))

    if (firstNumber === null){
        firstNumber = currentNumber
    } else {
        firstNumber *= currentNumber
    }

    numbers = []

    const display = document.querySelector('.display')
    display.innerHTML = '0'
}

function divide(){
    operation = 'divide'
    const currentNumber = Number(numbers.join(''))

    if (firstNumber === null){
        firstNumber = currentNumber
    } else if (currentNumber !== 0){
        firstNumber /= currentNumber
    }

    numbers = []

    const display = document.querySelector('.display')
    display.innerHTML = '0'
}

function percent(){
    const currentNumber = Number(numbers.join('')) / 100
    numbers = String(currentNumber).split('')

    const display = document.querySelector('.display')
    display.innerHTML = currentNumber
}

function equal(){
    const secondNumber = Number(numbers.join(''))
    let result

    if (operation === 'minus'){
        result = firstNumber - secondNumber
    } else if (operation === 'multiply'){
        result = firstNumber * secondNumber
    } else if (operation === 'divide'){
        result = secondNumber === 0 ? 'Erro' : firstNumber / secondNumber
    } else {
        result = firstNumber + secondNumber
    }

    if (result === 'Erro'){
        numbers = []
    } else {
        numbers = String(result).split('')
    }
    firstNumber = null
    operation = null

    const display = document.querySelector('.display')
    display.innerHTML = result
}