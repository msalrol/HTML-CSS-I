import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { CarouselCards, ScrollInfinito, GridEventos } from "./components";
import { datosapp } from "./data-base";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

//Cargamos la app
document.addEventListener('DOMContentLoaded', () => {
    if (document.body.id === 'home') {
        cargarTarjetas();
    }
    if (document.body.id === 'discotecas'){
        cargarGridDiscotecas();

    }
    if (document.body.id === 'festivales'){
        cargarGridFestivales();

    }
    if (document.body.id === 'fiestas'){
        cargarGridFiestas();

    }
    setTimeout(animacionTarjetasEventos, 300); // Esperamos un poco por si se insertan dinámicamente
})

//Preparamos tarjetas de eventos
function cargarTarjetas() {
    const discotecas = document.querySelector('.discotecas');
    const fiestas = document.querySelector('.fiestas');
    const festivales = document.querySelector('.festivales');
    const contenedoresScroll = document.querySelectorAll('.scroll-infinito');

    new CarouselCards(datosapp.discotecas, discotecas).generarTarjeta().montarCarousel().comportamientoBoton();
    new CarouselCards(datosapp.fiestas, fiestas).generarTarjeta().montarCarousel().comportamientoBoton();
    new CarouselCards(datosapp.festivales, festivales).generarTarjeta().montarCarousel().comportamientoBoton();
    contenedoresScroll.forEach(el => {
        new ScrollInfinito(el).generarScrollInfinito();
    })
}

//Grid con filtrado de categorías 
function cargarGridDiscotecas() {
    const gridDiscotecas = document.querySelector('.grid-discotecas');

    new GridEventos(datosapp.discotecas, gridDiscotecas).generarGrid().activarFiltros();
    

}
function cargarGridFestivales() {
    const gridFestivales = document.querySelector('.grid-festivales');

    new GridEventos(datosapp.festivales, gridFestivales).generarGrid().activarFiltros();
    

}
function cargarGridFiestas() {
    const gridFiestas = document.querySelector('.grid-fiestas');

    new GridEventos(datosapp.fiestas, gridFiestas).generarGrid().activarFiltros();
    

}
// Lazy load y observer

const elementosCargar = document.querySelectorAll('.blur-load');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('blur-load__visible')
        }
    })
}, { threshold: 0.4 })

elementosCargar.forEach(el => {
    observer.observe(el);
})

//Animaciones GSAP
export function animacionTarjetasEventos() {

    const tarjetasEventos = document.querySelectorAll(
        '.card-container__card-element, .grid-tarjetas__grid-card-element'
    );
    tarjetasEventos.forEach(el => {
        gsap.to(el, {
            y: 0,
            duration: 0.5,
            opacity: 1,
            stagger: 0.15,
            scrollTrigger: {
                trigger: el,
                start: "top 80%",
                end: "top 30%",
                scrub: true
            }
        })
    })
}

const imagenesPortadaInterna = document.querySelectorAll('.imagen-portada-interna');
imagenesPortadaInterna.forEach(img => {
    gsap.to(img, {
        x: -400, // prueba con -300, -400, -500...
        scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        }
    });
});


//Smooth scroller 
// eslint-disable-next-line no-unused-vars
const smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1.35, // controla la suavidad (más alto = más lento)
    effects: true // permite usar efectos parallax si los usas
});





