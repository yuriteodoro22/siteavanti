const input = document.getElementById("busca");
const botao = document.getElementById("botao-busca");
const resultado = document.getElementById("resultado-busca");

botao.addEventListener("click", () => {
  const valor = input.value.trim();
  if (valor !== "") {
    resultado.textContent = `Você buscou por: '${valor}'`;
    input.value = "";
  }
});

const inputMobile = document.getElementById("busca-mobile");
const botaoMobile = document.getElementById("botao-busca-mobile");
const resultadoMobile = document.getElementById("resultado-busca-mobile");

botaoMobile.addEventListener("click", () => {
  const valor = inputMobile.value.trim();
  if (valor !== "") {
    resultadoMobile.textContent = `Você buscou por: '${valor}'`;
    inputMobile.value = "";
  }
});
