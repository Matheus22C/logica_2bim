const input = require("prompt-sync")()

let kilometros = Number(input("Digite a quantidade de kilometros rodados:"))
let combustivel = Number(input("Digite a quantidade de combustivel gasto:"))

// km/l: km / l

let kmporl = kilometros / combustivel

console.log(`Km/L: ${kmporl.toFixed(3)}`)