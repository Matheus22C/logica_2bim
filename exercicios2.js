const input = require("prompt-sync")()

let codigo1 = Number(input("Digite o codigo do primeiro produto"))
let codigo2 = Number(input("Digite o codigo do segundo produto"))
let numero1 = Number(input("Digite o numero do primeiro produto"))
let numero2 = Number(input("Digite o numero do segundo produto"))
let unitario1 = Number(input("Digite o unitario do primeiro produto"))
let unitario2 = Number(input("Digite o codigo do segundo produto"))

let soma = (numero1 * unitario1) + (numero2 * unitario2)
console.log(`Valor a pagar: R$ ${soma}`)