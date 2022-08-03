//Estrutura de repetição
//For

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// irá decrecer a opereção de 100 até 50
for (let i = 100; i > 0; i--) {
  if (i === 50) {
    break;
  }
  console.log(i);
}

// quando i for igual a cinco o loop irá continuar
for (let i = 10; i > 0; i--) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
