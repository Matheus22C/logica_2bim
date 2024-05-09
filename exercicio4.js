const input = require("prompt-sync")()

let numero = Number(input("Digite um número:"))

if (numero > 0) {
    console.log(`positivo`)
} else {
    console.log(`negativo`)
}