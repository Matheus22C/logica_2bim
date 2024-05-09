const input = require("prompt-sync")()

let numero = Number(input("Digite um número:"))

if (numero % 2 == 0) {
    console.log(`par`)
} else {
    console.log(`impar`)
}