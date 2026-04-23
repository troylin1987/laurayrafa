export const siteContent = {
  locale: 'es-ES',
  ui: {
    sectionPrefix: 'Capítulo',
    heroStampPrefix: 'Misión desbloqueada',
    nav: {
      ariaLabel: 'Navegación principal',
      brandTagline: 'Wedding Mission',
      ctaLabel: 'Confirmar',
      labels: {
        home: 'Inicio',
        story: 'Historia',
        date: 'Fecha',
        agenda: 'Agenda',
        location: 'Lugar',
        stay: 'Alojamiento',
        guests: 'Invitados',
        media: 'Video',
        rsvp: 'RSVP',
        faq: 'FAQ',
      },
    },
  },
  event: {
    coupleNames: 'Laura & Rafa',
    dateISO: '2026-06-13T18:30:00+02:00',
  },
  hero: {
    kicker: 'Save the Date | Episodio Final',
    title: '¡Nos casamos!',
    lead:
      'Después de casi dos décadas de historia compartida, por fin llega el gran día. Gracias por formar parte de esta aventura.',
    actions: [
      {
        label: 'Ver agenda del día',
        href: '#agenda',
        style: 'primary',
      },
      {
        label: 'Confirmar asistencia',
        href: '#confirmacion',
        style: 'secondary',
      },
    ],
    images: [
      {
        src: 'media/novios/hero-principal.jpeg',
        alt: 'Foto principal de Laura y Rafa',
        loading: 'eager',
      },
    ],
  },
  story: {
    id: 'historia',
    title: 'Nuestra historia',
    subtitle: 'De un verano en Madrid a la mayor aventura de nuestras vidas.',
    couple: [
      {
        name: 'Laura',
        bio:
          'Desde muy joven tuvo claro que el esfuerzo y la constancia eran la base de cualquier sueño. Entre estudios, trabajo y muchas ganas de construir un futuro, encontró en Rafa al compañero de viaje perfecto.',
        image: {
          src: 'media/novios/laura.jpeg',
          alt: 'Foto de Laura',
          loading: 'lazy',
        },
      },
      {
        name: 'Rafa',
        bio:
          'Empezó aquel verano con 16 años queriendo ahorrar para su PSP y acabar de vacaciones con su hermano. No sabía que, entre cajas y trenes, empezaba la historia más importante de su vida.',
        image: {
          src: 'media/novios/rafa.jpeg',
          alt: 'Foto de Rafa',
          loading: 'lazy',
        },
      },
    ],
    timeline: [
      {
        year: '2007',
        title: 'Primer encuentro',
        text:
          'Madrid, julio de 2007. Entre el calor del asfalto y el aire acondicionado de El Corte Inglés de Nuevos Ministerios, nos conocimos trabajando en la línea de cajas: Rafa recogiendo cestas y Laura en caja. En los ratos tranquilos de las 16:00 y en el trayecto en tren hasta Atocha empezó todo.',
        image: {
          src: 'media/timeline/2007-primer-encuentro.jpeg',
          alt: 'Foto de Laura y Rafa jóvenes',
          loading: 'lazy',
        },
      },
      {
        year: '2009',
        title: 'Primer viaje juntos',
        text:
          'Nuestro primer gran viaje fue con amigos, al más puro estilo Gandía Shore: La Mata (Alicante), unas 20 personas, un dúplex de 3 habitaciones y una organización digna del camarote de los hermanos Marx. Caótico, intenso e inolvidable.',
        image: {
          src: 'media/timeline/2009-primer-viaje.jpeg',
          alt: 'Foto del primer viaje juntos',
          loading: 'lazy',
        },
      },
      {
        year: '2025',
        title: 'Modo cooperativo',
        text:
          'Después de 18 años persiguiendo un hogar en tiempos difíciles, dejamos de esperar el momento perfecto. Encontramos un rincón con encanto y nos lanzamos. Por fin empezamos a construir, día a día, la vida que llevábamos imaginando casi dos décadas.',
        image: {
          src: 'media/timeline/2025-modo-cooperativo.jpeg',
          alt: 'Foto del comienzo de vida en común',
          loading: 'lazy',
        },
      },
      {
        year: '2026',
        title: 'Propuesta épica',
        text:
          'Cuando por fin el universo se alineó, decidimos reorganizar nuestro mundo sin esperar más. Nuestra boda será íntima, auténtica y para los imprescindibles. Aviso rápido, sí, pero con el corazón clarísimo: en esa lista corta estáis vosotros.',
        image: {
          src: 'media/timeline/2026-propuesta-epica.jpeg',
          alt: 'Foto de la propuesta y anuncio de boda',
          loading: 'lazy',
        },
      },
    ],
  },
  dateSection: {
    id: 'fecha',
    title: 'Fecha y cuenta atrás',
    doneMessage: 'El gran día ya ha llegado. Gracias por acompañarnos.',
    countdownAriaLabel: 'Cuenta atrás para la boda',
    countdownUnits: {
      days: 'días',
      hours: 'horas',
      minutes: 'minutos',
      seconds: 'segundos',
    },
  },
  agenda: {
    id: 'agenda',
    title: 'Agenda del gran día',
    subtitle: 'Timing previsto (aprox.).',
    items: [
      {
        time: '18:30',
        title: 'Ceremonia (jardín trasero)',
        text: 'Comienzo de ceremonia. Si todo va en hora, duración estimada: 45 minutos.',
      },
      {
        time: '19:15 - 20:00',
        title: 'Fotos y felicitaciones',
        text: 'Momento para abrazos, fotos y primeras celebraciones tras la ceremonia.',
      },
      {
        time: '20:00',
        title: 'Cóctel (terraza planta alta)',
        text: 'Aperitivo en terraza, brindis y arranque oficial de la fiesta.',
      },
      {
        time: '21:30',
        title: 'Cena (salón o terraza)',
        text: 'Cena principal del evento.',
      },
      {
        time: '00:00',
        title: 'Fiezzzton',
        text: '3 horas de jolgorio para cerrar la noche por todo lo alto.',
      },
    ],
  },
  locations: {
    id: 'ubicaciones',
    title: 'Dónde será',
    subtitle: 'Toda la boda se celebra en el mismo lugar.',
    cards: [
      {
        title: 'Ceremonia + convite + fiesta',
        place: 'Hotel Los Olivos (Pol. Ind. Los Olivos)',
        address: 'Ctra. de Andalucia A-4 km 12,700, 28906 Getafe',
        mapsUrl:
          'https://www.google.com/maps/place/Hotel+Los+Olivos/@40.314245,-3.6937042,17z/data=!4m20!1m10!3m9!1s0xd42213cdc3227f3:0x3b659e4e981ad4df!2sHotel+Los+Olivos!5m2!4m1!1i2!8m2!3d40.3142409!4d-3.6911293!16s%2Fg%2F1trchqtz!3m8!1s0xd42213cdc3227f3:0x3b659e4e981ad4df!5m2!4m1!1i2!8m2!3d40.3142409!4d-3.6911293!16s%2Fg%2F1trchqtz?entry=ttu&g_ep=EgoyMDI2MDQyMC4wIKXMDSoASAFQAw%3D%3D',
        actionLabel: 'Cómo llegar (Google Maps)',
      },
    ],
  },
  accommodation: {
    id: 'alojamiento',
    title: 'Alojamiento recomendado',
    subtitle: 'Opciones para quedaros cerca del evento.',
    cards: [
      {
        title: 'Hotel Los Olivos',
        text: 'Podéis reservar en el mismo hotel. Indicad que vais a la boda de Rafael y Laura para aplicar descuento.',
        url:
          'https://www.google.com/maps/place/Hotel+Los+Olivos/@40.314245,-3.6937042,17z/data=!4m20!1m10!3m9!1s0xd42213cdc3227f3:0x3b659e4e981ad4df!2sHotel+Los+Olivos!5m2!4m1!1i2!8m2!3d40.3142409!4d-3.6911293!16s%2Fg%2F1trchqtz!3m8!1s0xd42213cdc3227f3:0x3b659e4e981ad4df!5m2!4m1!1i2!8m2!3d40.3142409!4d-3.6911293!16s%2Fg%2F1trchqtz?entry=ttu&g_ep=EgoyMDI2MDQyMC4wIKXMDSoASAFQAw%3D%3D',
        actionLabel: 'Ver hotel',
      },
      {
        title: 'Villa Friki',
        text: 'También hay habitaciones libres. Consultad con los novios para coordinar disponibilidad.',
        url: '#confirmacion',
        actionLabel: 'Consultar con novios',
      },
    ],
  },
  guestInfo: {
    id: 'invitados',
    title: 'Info útil para invitados',
    subtitle: 'Detalles importantes para disfrutarlo al máximo.',
    items: [
      {
        title: 'Dress code',
        text: 'Cada uno como quiera. Si queréis un toque friki, más que bienvenido.',
      },
      {
        title: 'Transporte',
        text: 'En coche modo GTA (hay parking), Uber o Crazy Taxi. En transporte público: Renfe a El Casar (C3) + autobús 447 dirección Legazpi.',
      },
      {
        title: 'Regalo',
        text: 'Vuestra presencia ya es un regalo. Si queréis aportar algo extra, buscad la cajita en la mesa presidencial. Insert coins & play!!',
      },
      {
        title: 'Imágenes del evento',
        text: 'Escanead el QR que tendréis en vuestro plato y subid todas las fotos y vídeos (incluida ceremonia) durante y después del evento. Con el QR tendréis instrucciones.',
      },
      {
        title: 'Playlist colaborativa',
        text: 'Modo Dance Dance Revolution activado: lista abierta de Spotify para añadir canciones en cualquier momento. Sonará en modo aleatorio. Nombre: Multiverso R&L Party.',
      },
    ],
  },
  multimedia: {
    id: 'multimedia',
    enabled: false,
    title: 'Video de los novios',
    subtitle: 'Si finalmente lo tenemos, irá al inicio como apertura de la web.',
    video: {
      poster: 'media/video/poster-video-novios.jpeg',
      src: 'media/video/trailer-novios.mp4',
      type: 'video/mp4',
      fallbackText: 'Tu navegador no soporta vídeo HTML5.',
    },
  },
  rsvp: {
    id: 'confirmacion',
    title: 'Confirmación de asistencia',
    subtitle: 'Preferible siempre por WhatsApp.',
    phoneLabel: 'Teléfonos',
    emailLabel: 'Email',
    whatsappActionLabel: 'Escribir por WhatsApp',
    contacts: [
      {
        name: 'Laura y Rafa',
        phone: '627680946 // 638549989',
        whatsappUrl: 'https://wa.me/34627680946',
        email: 'lyrmicasa@gmail.com',
      },
    ],
    templateMessage: 'Mensaje sugerido: "Hola, soy [Nombre]. Confirmo [X] asistentes."',
  },
  faq: {
    id: 'faq',
    title: 'FAQ',
    subtitle: 'Preguntas frecuentes que conviene resolver antes del día B.',
    items: [
      {
        title: '¿Puedo ir con niños?',
        text: 'Sí, será una boda familiar. Confirmad número de peques para organizar mejor los espacios.',
      },
      {
        title: '¿Habrá menú especial?',
        text: 'Sí. Alergias, intolerancias o menú vegetariano: avisadnos al confirmar asistencia.',
      },
      {
        title: '¿Hasta cuándo puedo confirmar?',
        text: 'Como máximo hasta el 15/5/2026.',
      },
    ],
  },
  footer: {
    text: 'Laura & Rafa · Gracias por acompañarnos en esta aventura.',
    cookieNotice: 'Esta web puede usar cookies; al navegar por ella aceptas su uso.',
  },
};
