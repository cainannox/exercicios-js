const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 =9.953
const avaliacao2 = 6.84379

const total = avaliacao1*peso1 + avaliacao2*peso2
const media = total / (peso1 +peso2)

console.log(media.toFixed(2))
console.log(media.toString()) // para passar em valor binario colocar .toString(2)
console.log(typeof media)
console.log(typeof Number)

console.log (typeof total)
console.log(typeof avaliacao2)