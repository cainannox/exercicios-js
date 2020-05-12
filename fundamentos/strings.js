const escola = "Cod3r"

console.log(escola.charAt(4)) // charAt dá a letra que está na posição 4
console.log(escola.charAt(5)) // retorna valor vazio
console.log(escola.charCodeAt(3)) // informa no unicode a posição do caractere no HTML
console.log(escola.indexOf('3')) // existe o caractere dentro de cod3r?

console.log(escola.substring(1)) // tira o primeiro caractere
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!")) //adiciona a exclamação no nome Cod3r
console.log(escola.replace(3, 'e')) //substitui um caractere
console.log(escola.replace(/\d/g, 'e')) //substituir tudo pela letra d

console.log("Ana,Maria,Pedro".split(',')) // split da um espaço após caractere solicitado

