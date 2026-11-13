/* =====================================================================
   FUENTE ÚNICA DEL PORTAFOLIO · Studio By Richi
   Para agregar trabajo nuevo:
   1) Deja la imagen optimizada en /img (webp, ~1000–1400 px de ancho).
   2) Regístrala en data/imagenes.js (o corre build) y añádela a un grupo.
   3) Recarga. El mismo contenido se usa para actualizar Behance y el CV.
   ===================================================================== */

const CONTACTO = {
  correo: 'studiobyrichi@gmail.com',
  instagram: 'https://www.instagram.com/studiobyrichi/',
  instagramUser: '@studiobyrichi',
  behance: 'https://www.behance.net/andrsrangel2',
  ciudad: 'Bogotá, Colombia'
};

/* tema: 'claro' | 'oscuro' | 'amarillo'
   imgs: [id, texto alternativo]  — el id viene de IMG (data/imagenes.js)  */
const SECCIONES = [
  {
    id: 'logos', num: '01', titulo: 'Logos', tema: 'claro',
    bajada: 'Marcas que se reconocen en un segundo: forma simple, versiones para cada fondo y un sistema listo para usar.',
    servicio: 'Logotipo · versiones de color · monograma',
    grupos: [
      { nombre: 'Logotipos', tipo: 'logos', imgs: [
        ['logo-sbr-studio', 'Logotipo Studio By Richi, con la S y la firma By Richi'],
        ['logo-nuria', 'Logotipo NÜRIA, gota con la letra N en azul y violeta'],
        ['logo-enmov', 'Logotipo En Movimiento, la vejez también es presente'],
        ['logo-komora', 'Logotipo KOMORA, detalles que dejan huella'],
        ['logo-lucerne', 'Logotipo Lucerne, fragancias que hablan por ti']
      ]}
    ]
  },
  {
    id: 'branding', num: '02', titulo: 'Branding', tema: 'oscuro',
    bajada: 'Del logo al sistema completo: color, tipografía, papelería y aplicaciones, para que una marca se vea igual en todas partes.',
    servicio: 'Identidad visual · manual de marca · papelería · mockups',
    grupos: [
      { nombre: 'Lucerne', tags: ['Marca conceptual', 'Perfumería', 'Branding'], behance: 'https://www.behance.net/gallery/257601457/Lucerne',
        texto: 'Identidad para una marca conceptual de perfumería premium: logo y variaciones, paleta, tipografías, tarjetas, bolsa y stickers.',
        imgs: [['br-lucerne-hero','Lucerne, fragancias que hablan por ti: presentación de la identidad'],['br-lucerne-cards','Tarjetas de presentación de Lucerne en negro y arena'],['br-lucerne-card-front','Tarjeta de Lucerne, frente'],['br-lucerne-card-back','Tarjeta de Lucerne, reverso con datos de contacto'],['br-lucerne-tote','Bolsa de tela con el logo de Lucerne'],['br-lucerne-stickers','Stickers circulares con el logo de Lucerne']] },
      { nombre: 'Luca', tags: ['Manual de marca', 'App', 'Finanzas'],
        texto: 'Manual de marca para una app de finanzas personales en pesos colombianos: logo, color, tipografía, voz y más de 70 íconos.',
        imgs: [['br-luca','Mockup de la app Luca en tema claro y oscuro, con tarjeta e ícono'],['br-luca-versiones','Luca: versiones del logo según el fondo'],['br-luca-color','Luca: colores de marca, añil, mango, crema y blanco'],['br-luca-tipo','Luca: tipografías Nunito e Inter'],['br-luca-iconos','Luca: sistema de 73 íconos']] },
      { nombre: 'NÜRIA', tags: ['Identidad visual', 'Bienestar', 'Empaque'],
        texto: 'Identidad completa: logotipo, paleta violeta y azul, tarjetas, empaque y piezas para redes.',
        imgs: [['br-nuria','Collage de la marca NÜRIA con frascos, empaque y tarjetas'],['br-nuria-mock','Mockup de NÜRIA con caja, frasco y tarjetas'],['br-nuria-paleta','Paleta de color de NÜRIA aplicada en mockups']] },
      { nombre: 'KOMORA', tags: ['Identidad visual', 'Regalos', 'Empaque'],
        texto: 'Marca para detalles y regalos: logo, caja, bolsa, papel de empaque, papelería y perfil en redes.',
        imgs: [['br-komora-caja','Caja blanca con moño y logo KOMORA'],['br-komora-caja2','Caja guinda con el símbolo de KOMORA'],['br-komora-papel','Paquete envuelto con el patrón de KOMORA'],['br-komora-cel','Perfil de KOMORA en el celular']] },
      { nombre: 'BioTonic', tags: ['Creación de marca', 'Producto'],
        texto: 'Creación de marca con logo, paleta y tipografías, aplicada en mockups de producto.',
        imgs: [['br-biotonic-1','Mockup de BioTonic en un envase en manos'],['br-biotonic-2','Mockup de BioTonic en un tubo y cepillo']] }
    ]
  },
  {
    id: 'redes', num: '03', titulo: 'Redes sociales', tema: 'amarillo',
    bajada: 'Publicaciones, carruseles e historias con sistema: una plantilla que se reconoce y que se puede repetir cada semana.',
    servicio: 'Gestión de contenido · carruseles · historias · plantillas',
    grupos: [
      { nombre: 'Camiracer', tags: ['Deporte', 'Logo', 'Contenido'],
        texto: 'Marca y contenido para un equipo de corredores: publicaciones personalizadas con los tiempos y logros de cada atleta.',
        imgs: [['br-camiracer','Mockup de Camiracer con perfil de Instagram, medalla y camiseta'],['rs-cami-1','Publicación de Santiago con sus marcas en 10K, 15K y 21K'],['rs-cami-2','Publicación de Omaira con su marca en 10K'],['rs-cami-3','Publicación de Angela con su marca en 21K'],['rs-cami-4','Publicación de Jorge con su marca en 21K'],['rs-cami-5','Publicación de Richi con su marca en 10K'],['rs-cami-6','Publicación de la coach Camila'],['rs-cami-7','Así le fue al TeamCamiracer en los 21K de MMB 2026']] },
      { nombre: 'NÜRIA', tags: ['Bienestar', 'Campaña'],
        texto: 'Serie de publicaciones para una marca de bienestar: problema, solución, beneficios y llamado a la acción.',
        imgs: [['rs-nu-1','Publicación: ¿te sientes sin energía, cansado y desgastado?'],['rs-nu-2','Publicación: dale a tu cuerpo el impulso que necesita'],['rs-nu-3','Publicación: beneficios que pueden marcar la diferencia'],['rs-nu-4','Publicación: opciones para cada necesidad']] },
      { nombre: 'Colombia Somos Todos', tags: ['Campaña solidaria', 'Carrusel'],
        texto: 'Campaña con una camiseta como mensaje: una causa, un país unido.',
        imgs: [['rs-cst-1','Portada: Colombia somos todos'],['rs-cst-2','No quisimos quedarnos de brazos cruzados'],['rs-cst-3','Una camiseta, un mensaje, una causa, un país unido'],['rs-cst-4','Una camiseta suma: no estás solo'],['rs-cst-5','Donde nos unimos todos, logramos grandes cosas']] },
      { nombre: 'Diseño Solidario', tags: ['Educativo', 'Construcción'],
        texto: 'Contenido informativo para una iniciativa de vivienda digna: fisura vs. grieta, señales de alerta y qué hacer.',
        imgs: [['rs-ds-4','Publicación: fisura vs. grieta'],['rs-ds-1','Qué es una fisura'],['rs-ds-2','Qué puede causar una grieta'],['rs-ds-3','Señales de alerta']] },
      { nombre: 'Studio By Richi', tags: ['Marca propia', 'Marketing'],
        texto: 'Contenido propio para explicar por qué el diseño importa: ideas directas, humor y una plantilla reconocible.',
        imgs: [['rs-sbr-1','¿Tu negocio se ve tan profesional como realmente es?'],['rs-sbr-2','La primera impresión ocurre en segundos'],['rs-sbr-3','Hay marcas que juegan el mundial'],['rs-sbr-4','Las personas votan por lo que les genera confianza'],['rs-sbr-5','Hicimos un experimento con una IA'],['rs-sbr-6','Una marca no destaca por verse bonita']] }
    ]
  },
  {
    id: 'agencia', num: '04', titulo: 'Agencia · OneLine', tema: 'claro',
    bajada: 'Contenido para marcas reales dentro de una agencia, con un estilo propio para cada cliente: turismo, salud, finanzas, hogar, automotriz y más.',
    servicio: 'Piezas para feed e historias · banners · edición audiovisual · campañas',
    grupos: [
      { nombre: 'Canchas Balompié', tags: ['Redes sociales', 'Deporte'], behance: 'https://www.behance.net/gallery/257601271/Canchas-Balompi',
        texto: 'Contenido que llena la cancha: promociones para el feed y contenido de valor en historias para un complejo de canchas sintéticas.',
        imgs: [['br-balompie-hero','Canchas Balompié: contenido que llena la cancha'],['rs-bal-1','Post e historia de Canchas Balompié'],['rs-bal-2','Anatomía de una promoción de Canchas Balompié'],['rs-bal-3','Mockup de las piezas de Canchas Balompié en celular']] },
      { nombre: 'Wincar Motors', tags: ['Redes sociales', 'Automotriz'], behance: 'https://www.behance.net/gallery/257436251/Wincar-Motors',
        texto: 'Contenido que genera confianza: testimonios, trivias y reseñas para un concesionario de autos en Tennessee, EE. UU.',
        imgs: [['br-wincar-hero','Wincar Motors: contenido que genera confianza'],['ag-wincar-6','Piezas para el feed de Wincar Motors'],['ag-wincar-1','Perfil de Instagram y piezas de Wincar Motors'],['ag-wincar-2','Testimonio de cliente de Wincar Motors'],['ag-wincar-3','Señal número 4 de Wincar Motors'],['ag-wincar-4','Pieza de entrega de auto de Wincar Motors'],['ag-wincar-5','Ellos lo compraron, tú también puedes']] },
      { nombre: 'WL Design Renovation', tags: ['Remodelación', 'Historias'],
        texto: 'Piezas para una empresa de remodelaciones: antes y después, llamado a estimado gratis.',
        imgs: [['ag-wl-1','Pieza Wake up de WL Design Renovation'],['ag-wl-2','Construimos el acceso perfecto para tu hogar'],['ag-wl-3','Interior renovado de WL Design Renovation'],['ag-wl-4','We don’t just do renovations']] },
      { nombre: "Promo Vacations USA", tags: ["Turismo","Redes sociales","Bilingüe"],
        texto: "Piezas para una agencia de viajes en Miami: documentos por país, promociones y destinos, con una paleta turquesa reconocible.",
        imgs: [["ag-pvu-1","Promo Vacations: ¿vas a viajar al sur de la Florida?"],["ag-pvu-2","Promo Vacations: documentos necesarios para Ecuador, Panamá y Paraguay"],["ag-pvu-3","Promo Vacations: ¿viajas a Miami y quieres...?"],["ag-pvu-4","Promo Vacations: sufres de cansancio extremo, necesitas dosis de vacaciones"],["ag-pvu-5","Promo Vacations: vigencia de uso de hasta 15 meses"],["ag-pvu-6","Promo Vacations: documentos para Chile y Colombia"]] },
      { nombre: "Tejedores de Diversidad", tags: ["Fundación","Contenido social","Bienestar"],
        texto: "Contenido para una organización social: voluntariado, bienestar emocional y mensajes contra los estereotipos, en tonos violeta.",
        imgs: [["ag-td-1","Tejedores de Diversidad: respira, relájate y sigue"],["ag-td-2","Tejedores de Diversidad: si sientes que naciste para ayudar a la sociedad"],["ag-td-3","Tejedores de Diversidad: ¿te gustaría cambiar el mundo?"],["ag-td-4","Tejedores de Diversidad: únete a nuestro programa de voluntariado"],["ag-td-5","Tejedores de Diversidad: defiende a alguien que está siendo discriminado"]] },
      { nombre: "Ilusiones con Futuro", tags: ["Salud","Rehabilitación infantil","Fechas especiales"],
        texto: "Piezas para un centro de rehabilitación infantil: concientización sobre el autismo, fechas especiales y datos de contacto con color y cercanía.",
        imgs: [["ag-ilufu-1","Ilusiones con Futuro: feliz día a los pequeños superhéroes"],["ag-ilufu-2","Ilusiones con Futuro: según la OMS, 1 de cada 100 personas está en el espectro autista"],["ag-ilufu-3","Ilusiones con Futuro: ser niño es una aventura"],["ag-ilufu-4","Ilusiones con Futuro: Día de la Madre Tierra"],["ag-ilufu-5","Ilusiones con Futuro: contáctanos y horarios"]] },
      { nombre: "Más Viajes", tags: ["Turismo","Promociones"],
        texto: "Planes y paquetes con precio: Eje Cafetero, Ruta del Sol y destinos de playa, pensados para leerse rápido en el feed.",
        imgs: [["ag-mvp-1","Más Viajes: plan Eje Cafetero estándar"],["ag-mvp-2","Más Viajes: Ruta del Sol"],["ag-mvp-3","Más Viajes: plan con precios para adultos y niños"],["ag-mvp-4","Más Viajes: Eje Cafetero con tarifas por mes"],["ag-viajes","Visita México, pieza de Más Viajes"]] },
      { nombre: "ISC · Work and Travel USA", tags: ["Educación","Intercambio","Explicativo"],
        texto: "Contenido educativo para un programa de intercambio: mitos y realidades, cómo funcionan los sponsors y cierres de inscripción.",
        imgs: [["ag-isc-1","ISC: ¿las agencias de intercambio son innecesarias? ¿Mito o realidad?"],["ag-isc-2","ISC: ¿sabías qué? Estados Unidos regula los programas de intercambio"],["ag-isc-3","ISC: ¡es un mito!"],["ag-isc-4","ISC: queremos saber de ti"],["ag-isc-5","ISC: ¿buscas una oportunidad laboral para tu Work and Travel?"]] },
      { nombre: "Nicolás Laverde · Creando Plata", tags: ["Finanzas personales","Marca personal","Educativo"],
        texto: "Contenido para un creador de finanzas personales: hábitos, interés compuesto y bola de nieve, con una plantilla naranja y gris que se reconoce.",
        imgs: [["ag-nl","Tres excusas que retrasan su éxito"],["ag-nlv-1","Nicolás Laverde: 5 hábitos que podrían arruinar sus finanzas"],["ag-nlv-2","Nicolás Laverde: cómo multiplicar su dinero con el efecto bola de nieve"],["ag-nlv-3","Nicolás Laverde: gastar más de lo que gana"],["ag-nlv-4","Nicolás Laverde: si no ha llegado al éxito"],["ag-nlv-5","Nicolás Laverde: ¿qué es el interés compuesto?"]] },
      { nombre: "Adriana Laitano", tags: ["Marca personal","Coaching","Redes sociales"],
        texto: "Contenido para una psicóloga y coach que acompaña a latinos en el exterior: reflexión, testimonios y presentación, con una paleta cálida y suave.",
        imgs: [["ag-rsr-1","Adriana Laitano: presentación de la psicóloga y coach"],["ag-rsr-2","Adriana Laitano: hoy te invito a reflexionar"],["ag-rsr-3","Adriana Laitano: si estás con tu familia"],["ag-rsr-4","Adriana Laitano: hoy quiero compartir los agradecimientos que más me llenan el alma"],["ag-rsr-5","Adriana Laitano: agradecida porque ante cualquier problema busco soluciones"]] },
      { nombre: "Mainland Group LLC", tags: ["Servicios legales y contables","Inmigración","Avisos"],
        texto: "Piezas informativas para una firma en Dallas: fechas límite, trámites de inmigración e impuestos explicados sin ruido.",
        imgs: [["ag-mlg-1","Mainland Group: atención dueños de negocios LLC en Texas"],["ag-mlg-2","Mainland Group: ¿te abruman los formularios de inmigración y los taxes?"],["ag-mlg-3","Mainland Group: atención, el Parole Humanitario"],["ag-mlg-4","Mainland Group: quedan pocos días para presentar tus taxes"]] },
      { nombre: "Black Label Auto Sale", tags: ["Automotriz","Miami","Redes sociales"],
        texto: "Contenido para una venta de autos en Miami: recibo tu carro como parte de pago, financiación y clientes felices.",
        imgs: [["ag-blas-1","Black Label Auto Sale: ¿publicaste tu carro y nadie lo compra?"],["ag-blas-2","Black Label Auto Sale: clientes felices"],["ag-blas-3","Black Label Auto Sale: tu experiencia, nuestra mejor publicidad"],["ag-blas-4","Black Label Auto Sale: financiación fácil"]] },
      { nombre: "Absolute Stone Design", tags: ["Hogar","Cocinas","Redes sociales"],
        texto: "Contenido para un taller de encimeras de cuarzo: reseñas de Google, cotización gratis y cocinas terminadas.",
        imgs: [["ag-asd-1","Absolute Stone Design: cocina azul con encimera de cuarzo"],["ag-asd-2","Absolute Stone Design: mira nuestras reseñas de Google"],["ag-asd-3","Absolute Stone Design: envíanos esta información y recibe un estimado gratis"],["ag-asd-4","Absolute Stone Design: cocina azul con piso de madera"]] },
      { nombre: "OneLine The Agency", tags: ["Marca de la agencia","Servicios","Humor"],
        texto: "Piezas de la propia agencia: servicios, asesorías, web y contenido con personalidad que muestra cómo trabajan.",
        imgs: [["ag-ol-1","OneLine: no lo sabemos, no somos tatuadores"],["ag-ol-2","OneLine: ¿por qué pican los tatuajes?"],["ag-ol-3","OneLine: oración digital para creativos en Semana Santa"],["ag-ol-4","OneLine: página web"],["ag-ol-5","OneLine: asesorías personalizadas"]] },
      { nombre: 'Otros clientes', tags: ['Variedad de sectores'],
        texto: 'Barbería, comercio y marcas personales: un estilo distinto para cada cliente.',
        imgs: [['ag-barber','Seminario de barbería'],['ag-nike','Anuncio de Nike para OneLine'],['ag-promo','Super promociones'],['ag-social-1','¿Te gustaría cambiar el mundo?'],['ag-social-2','Si sientes que naciste para ayudar a la sociedad'],['ag-social-4','Microdescansos para el estrés']] }
    ]
  },
  {
    id: 'carteleria', num: '05', titulo: 'Cartelería e ilustración', tema: 'oscuro',
    bajada: 'Piezas con personalidad: afiches, personajes y exploraciones gráficas donde la idea manda sobre la plantilla.',
    servicio: 'Afiches · ilustración · flyers · exploración visual',
    grupos: [
      { nombre: 'Afiches y flyers', tags: ['Cartel', 'Flyer'],
        imgs: [['ca-wisin','Afiche conceptual: Wisin y Yandel, el dúo de la historia'],['ca-velitas','Flyer Día de las velitas'],['ca-halloween','Flyer Halloween, dulces terror']] },
      { nombre: 'Personajes e ilustración', tags: ['Ilustración'],
        imgs: [['ca-gnomo','Ilustración 3D de un gnomo verde'],['ca-cerdo','Ilustración de un cerdo con cuchilla'],['ca-bruto','Ilustración de personaje con cuernos'],['ca-pixel','Personaje en pixel art']] },
      { nombre: 'Escorpión · Expresión digital', tags: ['Exploración', 'Vector'],
        texto: 'Proceso de un mismo animal en varios lenguajes: fotografía, boceto, vector y collage.',
        imgs: [['ca-aracnido','Cartel: un arácnido nocturno'],['ca-esc-1','Collage de escorpión sobre montañas'],['ca-esc-2','Escorpión sobre ilustración de montañas'],['ca-esc-vector','Escorpión en vector naranja']] }
    ]
  },
  {
    id: 'web', num: '06', titulo: 'Web y UX', tema: 'claro',
    bajada: 'Diseño pensado para usarse: pantallas claras, sistema de componentes y marca que se siente igual en la app.',
    servicio: 'UI de app · sistema de diseño · wireframes',
    grupos: [
      { nombre: 'Luca · App de finanzas', tags: ['UI', 'App', 'Sistema de diseño'],
        texto: 'Pantallas de la app: inicio, presupuestos, metas, informes y cuentas, con la misma identidad del manual de marca.',
        imgs: [['ux-hero','Presentación de Luca: tus cuentas claras, en pesos'],['ux-1','Pantalla de inicio de Luca'],['ux-2','Pantalla de presupuestos de Luca'],['ux-3','Pantalla de informes de Luca'],['ux-4','Pantalla de cuentas de Luca']] }
    ]
  },
  {
    id: 'motion', num: '07', titulo: 'Motion y reels', tema: 'oscuro',
    bajada: 'Video corto para redes: ritmo, texto en pantalla y una idea por plano.',
    servicio: 'Edición de video · reels · motion graphics',
    grupos: [
      { nombre: 'Studio By Richi · Presentación de marca', tags: ['Motion graphics', '15 s'], tipo: 'video',
        video: 'video/sbr-presentacion-15s.mp4', poster: 'video/sbr-presentacion-poster.webp',
        texto: 'Presentación animada de la marca en 15 segundos.' },
      { nombre: 'Road to MMB', tags: ['Serie de reels', '33 días', 'Running'], tipo: 'reels', carpeta: 'video/mmb/', dias: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 20, 21, 22, 23, 24, 25, 26, 28, 31, 32, 33],
        texto: 'Serie de 33 días de contenido rumbo a la Media Maratón de Bogotá: guion, edición y publicación diaria. Toca una portada para ver el reel.' }
    ]
  }
];

const SOBRE_MI = {
  titulo: 'Detrás de cada diseño, una idea.',
  texto: [
    'Soy Andrés Rangel, “Richi”: diseñador gráfico en formación y creador de Studio By Richi, un estudio para marcas y emprendimientos que necesitan verse claros.',
    'Estudio Diseño Gráfico en la Fundación Universitaria Areandina. Trabajé como diseñador gráfico junior en OneLine The Agency (2024–2025), creando contenido para redes, banners, material promocional y edición audiovisual para campañas de distintas marcas.'
  ],
  herramientas: ['Photoshop', 'Illustrator', 'InDesign', 'CapCut', 'Canva'],
  proceso: [
    ['01', 'Idea', 'Entiendo qué quieres decir y a quién.'],
    ['02', 'Concepto', 'Defino el camino visual antes de dibujar.'],
    ['03', 'Desarrollo', 'Diseño, pruebo y ajusto contigo.'],
    ['04', 'Pieza final', 'Entrego archivos listos para usar.']
  ]
};
