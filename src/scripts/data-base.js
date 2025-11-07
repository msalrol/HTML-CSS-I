import barracaImg from '../../public/images/discoteca-barraca-club-valencia-ruta-iberica.jpg';
import amnesiaImg from '../assets/images/discoteca-amnesia-ibiza.jpg';
console.log("IMAGEN:", barracaImg);

export const datosapp = {
    discotecas: [
        {
            nombre: 'Barraca',
            ciudad: 'Valencia',
            precio: 'Desde 20€',
            descripcionCorta: 'Tras más de 50 años en la elite, el club ha cambiado, la gente ha cambiado, todo ha cambiado, excepto la ilusión de su gente que sigue intacta desde el primer día.',
            descripcionLarga: 'Barraca se ha consolidado como uno de los más importantes clubes underground de España y es donde se lleva a cabo una de las programaciones más reclamadas de nuestro país. Es sin duda alguna una de las referencias indiscutibles del clubbing nacional. Tras más de 50 años en la elite, el club ha cambiado, la gente ha cambiado, todo ha cambiado, excepto la ilusión de su gente que sigue intacta desde el primer día. Techno, electro, house y minimal vienen de la mano en este club que nos gusta definir como ecléctico, cosmopolita, multicultural y de mente abierta.',
            img: barracaImg
        },
        {
            nombre: 'Pacha',
            ciudad: 'Ibiza',
            precio: 'Desde 25€',
            descripcionCorta: 'Icono del clubbing internacional con noches inolvidables y DJs de fama mundial.',
            descripcionLarga: 'Pacha Ibiza es uno de los clubes más emblemáticos del mundo. Su programación combina house, techno y música comercial de alta calidad. Con más de 50 años de historia, sigue siendo un referente del ocio nocturno, con eventos exclusivos, decoraciones únicas y una experiencia VIP que marca la diferencia.',
            img: amnesiaImg
        },
        {
            nombre: 'Razzmatazz',
            ciudad: 'Barcelona',
            precio: 'Desde 18€',
            descripcionCorta: 'Diversión asegurada en 5 salas con estilos musicales distintos.',
            descripcionLarga: 'Razzmatazz es un club legendario de Barcelona que ofrece múltiples ambientes: indie, electrónica, pop y rock. Cada sala tiene su propia identidad, lo que permite disfrutar de distintos estilos en una sola noche. Es un punto de encuentro para locales y turistas que buscan experiencias musicales variadas y de calidad.',
            img: '../assets/images/discoteca-razzmatazz-barcelona.jpg'
        },
        {
            nombre: 'Opium',
            ciudad: 'Barcelona',
            precio: 'Desde 30€',
            descripcionCorta: 'Lujo y fiesta en primera línea de playa, con DJs internacionales.',
            descripcionLarga: 'Opium Barcelona combina club y restaurante, ofreciendo música electrónica de primer nivel junto a un ambiente exclusivo frente al mar. Su programación incluye residentes y DJs internacionales, creando noches de alto nivel con decoración sofisticada y servicio premium. Ideal para quienes buscan glamour y fiesta en la ciudad condal.',
            img: '/images/discoteca-opium-barcelona.jpg'
        },
        {
            nombre: 'Amnesia',
            ciudad: 'Ibiza',
            precio: 'Desde 35€',
            descripcionCorta: 'Experiencias electrónicas inolvidables en uno de los clubs más famosos de Ibiza.',
            descripcionLarga: 'Amnesia Ibiza es un templo de la música electrónica que ha marcado generaciones. Con fiestas de fama mundial como “Cocoon” y “Music On”, ofrece experiencias únicas combinando luces, sonido, escenarios temáticos y la mejor música house y techno. Es un referente para los amantes de la noche y la electrónica.',
            img: '../images/discoteca-amnesia-ibiza.jpg'
        },
        {
            nombre: 'Sala Moon',
            ciudad: 'Madrid',
            precio: 'Desde 15€',
            descripcionCorta: 'Diversión garantizada con electrónica, house y techno underground.',
            descripcionLarga: 'Sala Moon en Madrid es un club de referencia para los amantes de la música electrónica y el ambiente underground. Con DJs locales e internacionales, su programación ofrece noches temáticas y eventos especiales que atraen a un público variado y apasionado por la cultura del clubbing.',
            img: '../images/discoteca-sala-moon-madrid.jpg'
        }

    ],

    fiestas: [
        {
            nombre: 'Spook 41 aniversario',
            fecha: '5/12',
            discoteca: 'Spook',
            ciudad: 'Valencia',
            precio: 'Desde 35€',
            descripcionCorta: 'El próximo 5 de diciembre, celebramos 41 años desde que el murciélago voló por vez primera. 41 años de historia, de música, vanguardia y catarsis. Y lo haremos con unos artistas que marcaron una época!',
            info: { edad: 18, apertura: '17:00' },
            img: '../images/evento-41-aniversario-spook.jpg'
        },
        {
            nombre: 'Six Sex live · Fcukers dj set · M8NSE b2b Doppelganger',
            fecha: '28/11',
            discoteca: 'Apolo',
            ciudad: 'Barcelona',
            precio: '26€',
            descripcionCorta: 'NITSA: Six Sex live · Fcukers dj set en Apolo, fiesta Nitsa Barcelona',
            info: { edad: 18, apertura: '23:59' },
            img: '../images/evento-six-sex-apolo.jpg'
        },
        {
            nombre: 'Pikes Presents: Halloween Special',
            fecha: '31/10',
            discoteca: '528 Ibiza',
            ciudad: 'Ibiza',
            precio: '47,90€',
            descripcionCorta: 'This Halloween the spirits rise as 528 is transformed for one night only. Pikes Presents takes over the Teatro and Club for a special after-dark edition with a line-up guaranteed to raise the dead.',
            info: { edad: 18, apertura: '21:00' },
            img: '../images/evento-pikes-presents-halloween-special-ibiza.jpg'
        },
        {
            nombre: 'Total Halloween',
            fecha: '1/11',
            discoteca: 'Oven',
            ciudad: 'Valencia',
            precio: '17€',
            descripcionCorta: '¡Listo para Halloween! En Oven te traemos la mejor fiesta queer para esta terrorífica fecha. Ven y disfruta de la mejor electrónica de Valencia',
            info: { edad: 21, apertura: '23:00' },
            img: '../images/evento-total-halloween-en-oven.jpg'
        }
    ],
    festivales: [
        {
            nombre: 'Awakenings',
            ciudad: 'Barcelona',
            precio: 'Desde 50€',
            descripcionCorta: 'Uno de los festivales de techno más importantes a nivel mundial.',
            descripcionLarga: 'Awakenings reúne a los mejores DJs y productores de techno del mundo en un evento masivo y espectacular. Escenarios gigantescos, luces, efectos y sonido de alta calidad hacen que cada edición sea inolvidable para los amantes de la música electrónica y el techno más puro.',
            img: '../images/festival-awakenings-barcelona.jpg'
        },
        {
            nombre: 'Monegros Desert Festival',
            ciudad: 'Fraga, Huesca',
            precio: 'Desde 60€',
            descripcionCorta: 'Festival de techno en pleno desierto, con un ambiente único.',
            descripcionLarga: 'Monegros Desert Festival se celebra en el desierto de los Monegros y es conocido por su atmósfera única y su potente lineup de techno y música electrónica. La ubicación, el paisaje y la energía de miles de asistentes crean una experiencia irrepetible para los fans del techno más extremo y underground.',
            img: '../images/festival-monegros.jpg'
        },
        {
            nombre: 'Dreambeach',
            ciudad: 'Almería',
            precio: 'Desde 45€',
            descripcionCorta: 'Festival de música electrónica y techno en la playa.',
            descripcionLarga: 'Dreambeach es un festival que combina playa, sol y la mejor música electrónica, con énfasis en techno y EDM. Con múltiples escenarios, DJs internacionales y nacionales, y actividades durante el día y la noche, es un evento imprescindible para los amantes de la electrónica en España.',
            img: '../images/festival-dreambeach.jpg'
        },
        {
            tipo: 'festival',
            nombre: 'Medusa Sunbeach Festival',
            ciudad: 'Cullera, Valencia',
            precio: 'Desde 55€',
            descripcionCorta: 'Techno y EDM en un festival de playa lleno de energía.',
            descripcionLarga: 'Medusa Sunbeach Festival es conocido por sus escenarios espectaculares, su variada programación de DJs de techno y música electrónica, y su ambiente fiestero junto al mar. Es uno de los festivales de referencia en España para quienes buscan techno de calidad y experiencias únicas bajo el sol y la noche mediterránea.',
            img: '../images/festival-medusa.jpg'
        },
        {
            nombre: 'Sonar Festival',
            ciudad: 'Barcelona',
            precio: 'Desde 70€',
            descripcionCorta: 'Festival internacional de música electrónica y arte digital.',
            descripcionLarga: 'Sónar es uno de los festivales más emblemáticos del mundo en música electrónica, con especial atención al techno y la innovación sonora. Combina actuaciones de DJs, conciertos, instalaciones de arte digital y conferencias, convirtiéndolo en un punto de encuentro para artistas, productores y fans de la música electrónica.',
            img: '../images/festival-sonar.jpg'
        },
        {
            nombre: 'DGTL Barcelona',
            ciudad: 'Barcelona',
            precio: 'Desde 40€',
            descripcionCorta: 'Techno, electrónica y sostenibilidad en un festival urbano.',
            descripcionLarga: 'DGTL Barcelona es un festival que apuesta por la música electrónica y el techno de calidad, acompañado de un fuerte compromiso con la sostenibilidad y el arte visual. Escenarios innovadores, sonido potente y programación de DJs internacionales lo convierten en una cita obligatoria para los amantes del techno.',
            img: '../images/festival-dgtl-barcelona.jpg'
        }

    ]

}