// Efeito de digitação do nome

const texto = "Júlia Alves";   // texto que será digitado
let posicao = 0;               // quantas letras já aparecem

function digitar() {
  posicao++;                                              // mais uma letra
  document.getElementById("typed").textContent = texto.slice(0, posicao);

  if (posicao < texto.length) {
    setTimeout(digitar, 150);                             // repete depois de 150 ms
  }
}

digitar();   // começa o efeito