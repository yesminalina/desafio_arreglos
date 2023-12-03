import propiedadesVenta from "./data/propiedades_venta.js";
import propiedadesAlquiler from "./data/propiedades_alquiler.js";


const mostrarPropiedades = (propiedades, containerClass) => {
  const container = document.querySelector(`.${containerClass}`)

  let template = ""
  const propiedadesFiltro = propiedades.slice(0, 3)
  for (const propiedadFiltro of propiedadesFiltro) {
    template += `
  <article class="col-md-4 mb-4">
      <div class="card">
          <img src="${propiedadFiltro.src}" alt="Imagen del departamento"/>
          <div class="card-body">
              <h5 class="card-title">${propiedadFiltro.nombre}</h5>
              <p class="card-text">${propiedadFiltro.descripcion}</p>
              <p>
                <i class="fas fa-map-marker-alt"></i> ${propiedadFiltro.ubicacion}
              </p>
              <p>
                <i class="fas fa-bed"></i> ${propiedadFiltro.habitaciones} Habitaciones |
                <i class="fas fa-bath"></i> ${propiedadFiltro.bathroom} Baños
              </p>
              <p><i class="fas fa-dollar-sign"></i> ${propiedadFiltro.costo.toLocaleString("es")}</p>
              <p class="${propiedadFiltro.smoke == true ? "text-success" : "text-danger"}">
                <i class="${propiedadFiltro.smoke == true ? "fas fa-smoking" : "fas fa-smoking-ban"}"></i> ${propiedadFiltro.smoke == true ? "Se permite fumar" : "No se permite fumar"}
              </p>
              <p class="${propiedadFiltro.pets == true ? "text-success" : "text-danger"}">
                <i class="${propiedadFiltro.pets == true ? "fas fa-paw" : "fas fa-ban"}"></i> ${propiedadFiltro.pets == true ? "Se admiten mascotas" : "No se admiten mascotas"}
              </p>
            </div>
      </div>        
  </article>
`
  }
  container.innerHTML = template
}

mostrarPropiedades(propiedadesVenta, "container-venta")
mostrarPropiedades(propiedadesAlquiler, "container-alquiler")



