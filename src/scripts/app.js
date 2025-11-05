import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { CarouselCards } from "./components";
import { datosapp } from "./data-base";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

//Cargamos la app
document.addEventListener('DOMContentLoaded', () => {
    cargarTarjetas();
})

//Preparamos tarjetas de eventos
function cargarTarjetas(){
    const discotecas = document.querySelector('.discotecas');
    const fiestas = document.querySelector('.fiestas');
    const festivales = document.querySelector('.festivales');


    new CarouselCards(datosapp.discotecas, discotecas).generarTarjeta().montarCarousel();
    new CarouselCards(datosapp.fiestas, fiestas).generarTarjeta().montarCarousel();
    new CarouselCards(datosapp.festivales, festivales).generarTarjeta().montarCarousel();
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