//Transformar nota escolares

// Crie um algoritmo que transforme as notas do sistema
// numérico para sistema de notas em caracteres tipo A B C

// * de 90 para cima - A
// * entre 80 - 89 - B
// * entre 70 - 79 - C
// * entre 60 - 69 - D
// * menor que 60 - F

let nota
let A = nota >= 90
let B = nota >= 80 && nota <= 89
let C = nota >= 60 && nota <= 69
let D = nota < 60

let notaFinal;

if (A) {
    notaFinal = A
} else if (B) {
    notaFinal = B
} else if (C) {
    notaFinal = C
} else if (D) {
    nota = D
}