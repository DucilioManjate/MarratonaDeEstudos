// Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
//     * receitas: []
//     * despesas: []
// Agora, crie uma função que irá calcular o total de receitas e
// despesas e irá mostrar uma mensagem se a família está com
// saldo positivo ou negativo, seguido do valor do saldo.

// export function calcular(receitas, despesas) {
//   let saldo = receitas - despesas;
//   if (saldo > 0) {
//     console.log(`Família está com saldo positivo de ${saldo}`);
//   } else {
//     console.log(`Família está com saldo negativo de ${saldo}`);
//   }
// }

// export function calcularFamilia(receitas, despesas) {
//   console.log(
//     receitas.reduce((acc, curr) => (acc += curr), 0) -
//       despesas.reduce((acc, curr) => (acc += curr), 0)
//   );
//   // return receitas.reduce((acc, curr) => acc += curr, 0) - despesas.reduce((acc, curr) => acc += curr, 0)

//   const lista = [0, 1, 2, 3, 5, 8, 13];

//   const total = lista.reduce(
//     (total, atual) => {
//       if (atual <= 5) {
//         total.soma += atual;
//         total.dif -= atual;
//       }

//       return total;
//     },
//     { soma: 0, dif: 0 }
//   );

//   const totalSomaFib = total.soma;
//   const totalDifFib = total.dif;

//   map = (acc, curr) => (acc += curr);

//   const lista2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

//   const leaderBoardlist = lista2.map((place) => {
//     if (place <= 5) {
//       return `${place}º lugar`;
//     }
//   });

//   //   lista2 = [
//   //     `1º lugar`,
//   //     `2º lugar`,
//   //     `3º lugar`,
//   //     `4º lugar`,
//   //     `5º lugar`,
//   //     undefined,
//   //     undefined,
//   //     undefined,
//   //     undefined,
//   //     undefined,
//   //     undefined,
//   //   ];

//   forEach = (acc, curr) => (acc += curr);

//   for (let i = 0; i < 20; i++) {
//     console.log(i);
//   }

//   // return receitas.reduce((acc, curr) => acc += curr, 0) - despesas.reduce((acc, curr) => acc += curr, 0);

//   // const totalReceitas = receitas.reduce((acc, curr) => acc += curr, 0);
//   // const totalDespesas = receitas.reduce((acc, curr) => acc += curr, 0);

//   // const saldo = receitas - despesas;

//   // const despesas = valor1 + valor2;

//   // const despesas = valor1 + valor2;

//   // if (saldo > 0) {
//   //     console.log(`Família está com saldo positivo de ${saldo}`)
//   // } else {
//   //     console.log(`Família está com saldo negativo de ${saldo}`)
//   // }

//   return false;
// }

// const lista = [0, 1, 2, 3, 5, 8, 13];

// const total = lista.reduce(
//   (total, atual) => {
//     if (atual <= 5) {
//       total.soma += atual;
//       total.dif -= atual;
//     }

//     return total;
//   },
//   { soma: 0, dif: 0 }
// );

// const totalSomaFib = total.soma;
// const totalDifFib = total.dif;

const familia = {
  receitas: [36991, 50000, 12000],
  despesas: [12000, 3000, 2000],
};

//função que será responsavel pela soma
function soma(array) {
  let total = 0;

  return total;
}

function calcularBalanco() {
  const caluculoReceita = soma(familia.receitas);
  const caluculoDespesa = soma(familia.despesas);

  const total = caluculoReceita - caluculoDespesa;
   const itsOk = total >= 0

   let balancoTexto = "negativo"

   if(itsOk){
     balancoTexto = "positivo"
   }
   console.log(`Família está com saldo ${balancoTexto}: de ${total.toFixed(2)}R$`)
}
