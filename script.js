// Definindo a variável (let) e realizando a captação dos dados (prompt)

let numberOne = prompt('Digite o primeiro número')
let numberTwo = prompt('Digite o segundo número') 

// transformando o resultado da variável em um número

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

// definindo varivaveis para cada operador matematico

const soma = numberOne + numberTwo
const sub = numberOne - numberTwo
const multi = numberOne * numberTwo
const divi = numberOne / numberTwo
const resto = numberOne % numberTwo

// colocando resultados na tela atraves de alert()

alert("A soma dos dois números é: " + soma)
alert("A subtração dos dois números é: " + sub)
alert("A multiplicação dos dois números é: " + multi)
alert("A divisão dos dois números é: " + divi)
alert("O resto da divisão dos dois números é: " + resto)

let par = soma % 2 === 0
par = Number(par)

if (par) {
    alert("A soma dos dois números é par: " + soma)
} else {
    alert("A soma dos dois números é impar: " + soma)
}

if (numberOne == numberTwo) {
    alert("Os dois números são iguais")
} else {
    alert("Os dois números são diferentes")
}