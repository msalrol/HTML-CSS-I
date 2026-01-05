//TARJETAS DE EVENTOS HOME
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animacionTarjetasEventos, cargarParaBlur } from "./app";

gsap.registerPlugin(ScrollTrigger);

export class CarouselCards {
  constructor(info, padre) {
    this.info = info;
    this.padre = padre;
    this.html = '';
    this.contenedorTarjetas = document.createElement('div');
    this.contenedorBoton = document.createElement('div');
    this.button = document.createElement('button');
    this.button.innerHTML = `<svg width="64" height="37" viewBox="0 0 64 37" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.50003 15.9099C1.11931 15.9099 2.65093e-05 17.0292 2.65093e-05 18.4099C2.65093e-05 19.7906 1.11931 20.9099 2.50003 20.9099V18.4099V15.9099ZM62.9529 20.1777C63.9292 19.2014 63.9292 17.6184 62.9529 16.6421L47.043 0.732225C46.0667 -0.244086 44.4837 -0.244086 43.5074 0.732225C42.5311 1.70854 42.5311 3.29145 43.5074 4.26776L57.6496 18.4099L43.5074 32.552C42.5311 33.5283 42.5311 35.1113 43.5074 36.0876C44.4837 37.0639 46.0667 37.0639 47.043 36.0876L62.9529 20.1777ZM2.50003 18.4099V20.9099H61.1851V18.4099V15.9099H2.50003V18.4099Z" fill="white"/>
    </svg>`;
    this.contenedorTarjetas.classList.add('card-container');
    this.contenedorBoton.classList.add('contenedor-boton');
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
        <div class="card-container__card-element" role="article"
        aria-labelledby="titulo-${el.nombre}">
        <picture>
          <source type="image/avif"
            srcset="
            ${el.imgLowAVIF} 480w,
            ${el.imgHighAVIF} 1200w"
            sizes="(max-width:768px) 480px, 1200px">

          <source type="image/jpeg"
            srcset="
            ${el.imgLowJPG} 480w,
            ${el.imgHighJPG} 1200w"
            sizes="(max-width:768px) 480px, 1200px">

            <img src="${el.img}-1200.jpg" loading="lazy" alt="${el.nombre}">
        </picture>
        <div class="card-container__contenedor-titulo">
          <h4>${el.nombre}</h4>
          <span class="card-container__tag">${el.ciudad}</span>
        </div>
        <p>${el.descripcionCorta}</p>
        <a href="${el.enlace}" aria-label="Ver más sobre ${el.nombre}"><svg width="65" height="15" viewBox="0 0 65 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M63.91 8.07112C64.3006 7.6806 64.3006 7.04743 63.91 6.65691L57.5461 0.292946C57.1555 -0.0975785 56.5224 -0.0975785 56.1319 0.292946C55.7413 0.68347 55.7413 1.31664 56.1319 1.70716L61.7887 7.36401L56.1319 13.0209C55.7413 13.4114 55.7413 14.0446 56.1319 14.4351C56.5224 14.8256 57.1555 14.8256 57.5461 14.4351L63.91 8.07112ZM0 7.36401V8.36401H63.2029V7.36401V6.36401H0V7.36401Z"
            fill="white" />
        </svg></a>
      </div>
        `
  }

  montarCarousel() {
    this.contenedorTarjetas.innerHTML = this.html
    this.contenedorBoton.appendChild(this.button);
    this.padre.appendChild(this.contenedorTarjetas)
    this.padre.appendChild(this.contenedorBoton);
    return this;
  }

  comportamientoBoton() {
    const tarjetas = this.contenedorTarjetas.querySelectorAll('.card-container__card-element');
    const totalTarjetas = tarjetas.length;
    const anchoVisible = this.padre.clientWidth; 
    const estilo = window.getComputedStyle(this.contenedorTarjetas);
    const gap = parseFloat(estilo.gap) || 0;
    const anchoTarjeta = tarjetas[0].offsetWidth;
    const tarjetasVisibles = Math.floor(anchoVisible / anchoTarjeta);

    let index = 0;

    this.contenedorTarjetas.style.display = "flex";
    this.contenedorTarjetas.style.transition = "transform 0.4s ease";
    this.padre.style.overflow = "hidden";
    this.button.setAttribute('tabindex', '0');

    this.button.addEventListener('keydown', (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault(); 
        this.button.click();
      }
    });

    this.button.addEventListener('click', () => {
      index++;

      
      if (index > totalTarjetas - tarjetasVisibles) {
        index = 0;
      }

      const offset = (anchoTarjeta + gap) * index;
      this.contenedorTarjetas.style.transform = `translateX(-${offset}px)`;
    });
  }
}





//GRID PARA CATEGORÍAS

export class GridEventos {
  constructor(datos, contenedor) {
    this.datos = datos;
    this.contenedor = contenedor
  }

  generarGrid() {
    this.datos.forEach(evento => {
      const eventoDiv = this.generarHTML(evento);
      this.contenedor.appendChild(eventoDiv);
    })
    return this;
  }

  generarHTML(evento) {
    const div = document.createElement('div');
    div.innerHTML = ` <div class="grid-tarjetas__grid-card-element"  aria-labelledby="titulo-${evento.nombre}">
    <a href="${evento.link}"><img class="blur-load"
        src="${evento.img}"  loading="lazy" alt="Imagen evento ${evento.nombre}"></a>
    <div class="grid-tarjetas__grid-contenedor-titulo">
    <a href="${evento.link}"><h4>${evento.nombre}</h4></a>
        <span class="card-container__tag">${evento.ciudad}</span>
    </div>
    <p>${evento.descripcionCorta}</p>
    <a href="${evento.enlace}" aria-label="Ver más sobre ${evento.nombre}><svg width="65" height="15" viewBox="0 0 65 15" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M63.91 8.07112C64.3006 7.6806 64.3006 7.04743 63.91 6.65691L57.5461 0.292946C57.1555 -0.0975785 56.5224 -0.0975785 56.1319 0.292946C55.7413 0.68347 55.7413 1.31664 56.1319 1.70716L61.7887 7.36401L56.1319 13.0209C55.7413 13.4114 55.7413 14.0446 56.1319 14.4351C56.5224 14.8256 57.1555 14.8256 57.5461 14.4351L63.91 8.07112ZM0 7.36401V8.36401H63.2029V7.36401V6.36401H0V7.36401Z"
            fill="white" />
    </svg></a>
</div>`
    return div

  }

  activarFiltros() {
    const botonesFiltros = document.querySelector('.grid-tarjetas-tag-container');

    botonesFiltros.addEventListener('click', (e) => {
      const botones = botonesFiltros.querySelectorAll('span');
      botones.forEach(button => button.classList.remove('span-selected'));
      
      if (e.target.tagName !== 'SPAN') { return };
      ScrollTrigger.getAll().forEach(t => t.kill());
      this.contenedor.innerHTML = '';

      if (e.target.dataset.ciudad === 'All') {
        e.target.classList.add('span-selected');
        this.datos.forEach(evento => {
      
          const eventoDiv = this.generarHTML(evento);
          this.contenedor.appendChild(eventoDiv);
          animacionTarjetasEventos();
          ScrollTrigger.refresh();
        })
      }
      e.target.classList.add('span-selected');
      const ciudadFiltro = e.target.dataset.ciudad;
      const eventosFiltrados = this.datos.filter(el => {
        return el.ciudad === ciudadFiltro;
      })

      eventosFiltrados.forEach(evento => {
        const eventoDiv = this.generarHTML(evento);
        console.log(eventoDiv);
        this.contenedor.appendChild(eventoDiv);
      })
      animacionTarjetasEventos();
      cargarParaBlur();
      ScrollTrigger.refresh();
    })
  }

}




//SCROLL INFINITO SVGS

export class ScrollInfinito {
  constructor(contenedor) {
    this.contenedor = contenedor;
    this.colores = ["#77F773", "#73E8F7", "#F77375", "#8D73F7"];

    this.contenedor.addEventListener('mouseover', () =>{
      this.contenedor.style.animationPlayState = 'paused';
    })
    this.contenedor.addEventListener('mouseout', () => {
      this.contenedor.style.animationPlayState = 'running';
    });
  }

  createSVG(color1, color2) {
    return `
    <svg width="177" height="103" viewBox="0 0 177 103" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M93.1329 46.5664C93.1329 34.2163 88.2268 22.3719 79.4939 13.639C70.761 4.90609 58.9166 9.32413e-07 46.5664 0C34.2163 -9.32413e-07 22.3719 4.90609 13.639 13.639C4.9061 22.3719 1.86483e-06 34.2162 0 46.5664L9.42295 46.5664C9.42296 36.7154 13.3363 27.2678 20.302 20.302C27.2678 13.3363 36.7154 9.42295 46.5664 9.42295C56.4175 9.42296 65.8651 13.3363 72.8308 20.302C79.7966 27.2678 83.7099 36.7154 83.7099 46.5664H93.1329Z" fill="${color1}"/>
      <path d="M83.6061 55.8706C83.6061 68.2208 88.5122 80.0651 97.2451 88.798C105.978 97.5309 117.822 102.437 130.173 102.437C142.523 102.437 154.367 97.5309 163.1 88.798C171.833 80.0651 176.739 68.2208 176.739 55.8706L167.316 55.8706C167.316 65.7216 163.403 75.1692 156.437 82.135C149.471 89.1007 140.024 93.0141 130.173 93.0141C120.321 93.0141 110.874 89.1007 103.908 82.135C96.9424 75.1692 93.029 65.7216 93.029 55.8706L83.6061 55.8706Z" fill="${color2}"/>
    </svg>
  `;
  }

  generarScrollInfinito() {
    const numCopies = 20;
    const fragment = document.createDocumentFragment();
  
    for (let i = 0; i < numCopies; i++) {
      const div = document.createElement("div");
      div.classList.add("shape");
  
      const color1 = this.colores[i % this.colores.length];
      const color2 = this.colores[(i + 1) % this.colores.length];
      div.innerHTML = this.createSVG(color1, color2);
  
      fragment.appendChild(div);
    }
  
    // Insertamos una vez
    this.contenedor.appendChild(fragment);
  
    // Clonamos SOLO las shapes
    const clones = Array.from(this.contenedor.children).map(el =>
      el.cloneNode(true)
    );
  
    clones.forEach(clone => this.contenedor.appendChild(clone));
  
    requestAnimationFrame(() => this.calcularTiempoAnimacion());
  }
  
  
  calcularTiempoAnimacion() {
    const anchoContenedor = this.contenedor.clientWidth;
    const velocidadAnimacion = 120;
    const duracion = anchoContenedor / (velocidadAnimacion);

    this.contenedor.style.animationDuration = `${duracion}s`;
  }

}


