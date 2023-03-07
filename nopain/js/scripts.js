//Declaração de Variáveis
let nome = 'Eu'
let numero_inteiro = 3
let numero_flutuante = 2.5678
let condicao = false

/*
console.log(typeof nome)
console.log(typeof numero_inteiro)
console.log(typeof numero_flutuante)
console.log(typeof condicao)
*/

let numero1 = parseInt(('Informe um número: '))
let numero2 = parseInt(prompt('Informe outro número: '))

let soma = numero1 + numero2
let subs = numero1 - numero2
let mults = numero1 * numero2
let divis = numero1 / numero2

/*document.write('A soma é ', soma) + 'A subtração é ', subs
   'A multiplicação é ', mults + document.write('A divisão é ', divis)*/

alert('A soma é '+ soma + '\n'+ 'A subtração é '+ subs + '\n' +
   'A multiplicação é '+ mults + '\n' + 'A divisão é '+ divis + '\n')