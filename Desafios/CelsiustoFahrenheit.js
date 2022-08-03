// Crie uma função que receba uma string em celsius ou fahrenheit
// e faça a transformação de uma unidade para outra
//     C = (F - 32) * 5/9
//     F = C * 9/5 + 32

// transformDegree('50F)

function transformDegree(degree) {
  const celsiusExist = degree.toUpperCase().includes("C");
  const fahrenheitExist = degree.toUpperCase().includes("F");

  //fluxo de erro
  if (!celsiusExist && !fahrenheitExist) {
    throw new Error("Degree must be in celsius or fahrenheit");
  }

  //fluxo ideal , F -> C

  let updateDegree = Number(degree.toUpperCase().replace("F", ""));

  let formula = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
  let degreeSign = "C";

  //fluxo alternativo , C -
  if (celsiusExist) {
    updateDegree = Number(degree.toUpperCase().replace("C", ""));
    formula = (celsius) => (celsius * 9) / 5 + 32;
    degreeSign = "F";
  }

  return formula(updateDegree) + degreeSign;
}

try {
  console.log(transformDegree("50F"));
  console.log(transformDegree("50F"));
  transformDegree("50Z");
} catch (error) {
  console.log(error.message);
}
