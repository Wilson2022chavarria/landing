window.addEventListener('load', async () => {
  const API = 'http://localhost:3000/api';
  const data = await fetch(API);
  const json = await data.json();

  const htmlsTituloEmpresa = document.getElementsByClassName('tituloEmpresa');
  for (let index = 0; index < htmlsTituloEmpresa.length; index++) {
    htmlsTituloEmpresa[index].innerText = json.empresa.titulo;
  }

  const htmlImagenEmpresa = document.getElementById('imagenEmpresa');
  htmlImagenEmpresa.style.backgroundImage =
    "url('" + json.empresa.imagen + "')";

  const htmlDescripcionEmpresa = document.getElementById('descripcionEmpresa');
  htmlDescripcionEmpresa.innerText = json.empresa.descripcion;

  const htmlServicios = document.querySelector('#servicios .fila');
  json.servicios.forEach((item) => {
    htmlServicios.insertAdjacentHTML(
      'beforeend',
      `
      <div class="col">
          <i class="${item.icono}"></i>
          <h2>${item.titulo}</h2>
          <p>${item.descripcion}</p>
      </div>
    `,
    );
  });

  const htmlProductos = document.querySelector('#productos .fila');
  json.productos.forEach((item) => {
    htmlProductos.insertAdjacentHTML(
      'beforeend',
      `
      <div class="col">
        <p class="nombre">${item.nombre}</p>
        <img src="${item.imagenURL}" alt="">
        <h3>$${item.precio}</h3>
      </div>
    `,
    );
  });
});
