// throw
// try...catch

function digaMeuNome(nome = "") {
  if (nome === "") {
    throw new Error("Nome não informado");
  }
  console.log("depois do erro");
}

// try...catch
try {
  digaMeuNome();
} catch (error) {
  console.log(error);
}
