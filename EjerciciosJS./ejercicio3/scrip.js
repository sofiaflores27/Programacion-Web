function agregarElemento() {
  console.long("hola");
  const input = document.getElementById("input").value;
  const lista = document.getElementById("lista");
  //pasos para crear un elemento y agregar un valor de texto
  const elementoLista = document.getElementById("li");
  elementoLista.textContent = input;

  lista.appendChild(elementoLista);
  const button = document.getElementById("button");
  button.textContent = "buscar";
  elementoLista.appendChild(button);

  button.onclick = function(
    lista.removeChild(elementoLista);
  )

}
