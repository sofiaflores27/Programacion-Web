export function Prueba({ nombre, apellido }) {
  const products = [
    { title: "Col", id: 1, description: "" },
    { title: "Ajo", id: 2, description: "" },
    { title: "Manzana", id: 3, deescription: "" },
  ];

  return (
    <>
      <h1>
        hola {nombre} {apellido}
      </h1>

      {products.map((producto, i) => {
        return (
          <div key={producto.id}>
            <h2 classname="bg_color"> title: {producto.title}</h2>
            <p>{producto.description} </p>
          </div>
        );
      })}
    </>
  );
}
