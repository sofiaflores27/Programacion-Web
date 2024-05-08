let contador = 0;

function incrementarValor() {
  contador = contador + 1;
  console.log(contador);
  document.getElementById("numero").textContent = contador;
}
