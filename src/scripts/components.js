//Generamos una plantilla para las tarjetas de eventos

export class CarouselCards {
    constructor(info, padre) {
        this.info = info;
        this.padre = padre;
        this.html = '';
    }

    generarTarjeta() {
        this.info.forEach(el => {
            let tarjeta = this.generarHTML(el);
            this.html += tarjeta;
        })
        return this;
    }

    generarHTML(el) {
        return `
        <div class="card-container__card-element">
        <img class="blur-load" src="${el.img}"
          alt="${el.nombre}">
        <div class="card-container__contenedor-titulo">
          <h4>${el.nombre}</h4>
          <span class="card-container__tag">${el.ciudad}</span>
        </div>
        <p>${el.descripcionCorta}</p>
        <svg width="65" height="15" viewBox="0 0 65 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M63.91 8.07112C64.3006 7.6806 64.3006 7.04743 63.91 6.65691L57.5461 0.292946C57.1555 -0.0975785 56.5224 -0.0975785 56.1319 0.292946C55.7413 0.68347 55.7413 1.31664 56.1319 1.70716L61.7887 7.36401L56.1319 13.0209C55.7413 13.4114 55.7413 14.0446 56.1319 14.4351C56.5224 14.8256 57.1555 14.8256 57.5461 14.4351L63.91 8.07112ZM0 7.36401V8.36401H63.2029V7.36401V6.36401H0V7.36401Z"
            fill="white" />
        </svg>
      </div>
        `
    }

    montarCarousel() {
        this.padre.innerHTML = this.html;
    }

}