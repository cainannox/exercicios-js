const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template) // quebra de linha

//expressoes..

console.log(`1 + 1 = ${1 + 1}`) // só vai somar o que tiver entre $ {}

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)