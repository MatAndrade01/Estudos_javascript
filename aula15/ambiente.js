let num = [5, 8, 9, 3]
//Adicionar mais um número, de acordo com o index
num[3] = 6
//Adiciona mais um número
num.push(7)
//Ler a variavel
num.length
//Colocar em ordem crescente
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if(pos == -1) {
    console.log(`O valor não foi encontrado`)
}

else {
    console.log(`O valor ta na posição ${pos}`)
}
