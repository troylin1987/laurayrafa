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
    dateISO: '2027-06-19T17:00:00+02:00',
  },
  hero: {
    kicker: 'Save the Date | Episodio I',
    title: '¡Nos casamos!',
    lead:
      'Laura y Rafa os invitan a una aventura galáctica con sabor retro gamer. Reservad energía, ganas de bailar y muchas sonrisas.',
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
        src: 'https://placehold.co/1500x920/0B1026/F7D247?text=FOTO+PRINCIPAL+NOVIOS',
        alt: 'Placeholder para foto principal de los novios',
        loading: 'eager',
      },
    ],
  },
  story: {
    id: 'historia',
    title: 'Nuestra historia',
    subtitle: 'Conoce a los protagonistas y cómo empezó esta aventura.',
    couple: [
      {
        name: 'Laura',
        bio:
          'Fan de los videojuegos narrativos, las sagas de fantasía y las playlists que convierten cualquier viaje en una película.',
        image: {
          src: 'https://placehold.co/460x560/101938/F7D247?text=LAURA',
          alt: 'Placeholder retrato de Laura',
          loading: 'lazy',
        },
      },
      {
        name: 'Rafa',
        bio:
          'Amante de la ciencia ficción, los juegos cooperativos y las aventuras improvisadas con final feliz.',
        image: {
          src: 'https://placehold.co/460x560/101938/F7D247?text=RAFA',
          alt: 'Placeholder retrato de Rafa',
          loading: 'lazy',
        },
      },
    ],
    timeline: [
      {
        year: '2018',
        title: 'Primer encuentro',
        text: 'Nos conocimos entre risas, mandos y una batalla épica de Mario Kart.',
        image: {
          src: 'https://placehold.co/1200x780/101938/F7D247?text=HISTORIA+2018',
          alt: 'Placeholder historia 2018',
          loading: 'lazy',
        },
      },
      {
        year: '2019',
        title: 'Primer viaje juntos',
        text: 'Descubrimos que el mejor mapa siempre era el que recorríamos en equipo.',
        image: {
          src: 'https://placehold.co/1200x780/101938/F7D247?text=HISTORIA+2019',
          alt: 'Placeholder historia 2019',
          loading: 'lazy',
        },
      },
      {
        year: '2022',
        title: 'Modo cooperativo',
        text: 'Casa nueva, rutina compartida y la certeza de que queríamos la misma historia.',
        image: {
          src: 'https://placehold.co/1200x780/101938/F7D247?text=HISTORIA+2022',
          alt: 'Placeholder historia 2022',
          loading: 'lazy',
        },
      },
      {
        year: '2026',
        title: 'Propuesta épica',
        text: 'Un anillo, un "sí" y una misión desbloqueada: celebrar nuestra boda con todos vosotros.',
        image: {
          src: 'https://placehold.co/1200x780/101938/F7D247?text=HISTORIA+2026',
          alt: 'Placeholder historia 2026',
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
    subtitle: 'Una guía rápida para no perderos ningún momento.',
    items: [
      {
        time: '17:00',
        title: 'Ceremonia',
        text: 'Comienzo puntual de la ceremonia. Recomendamos llegar con 20 minutos de antelación.',
      },
      {
        time: '19:00',
        title: 'Traslado al convite',
        text: 'Salida hacia la finca. Habrá indicaciones y opción de transporte compartido.',
      },
      {
        time: '19:45',
        title: 'Cóctel y cena',
        text: 'Picoteo, fotos, brindis y cena con menú especial para quienes nos lo indiquen al confirmar.',
      },
      {
        time: '23:30',
        title: 'Fiesta',
        text: 'DJ, barra libre y pista abierta hasta que el cuerpo aguante.',
      },
    ],
  },
  locations: {
    id: 'ubicaciones',
    title: 'Dónde será',
    subtitle: 'Ceremonia y convite con enlaces directos para llegar.',
    cards: [
      {
        title: 'Ceremonia',
        place: 'Parroquia de San Pixel',
        address: 'Calle del Reino Champiñón, 12 · Madrid',
        mapsUrl: 'https://maps.app.goo.gl/REEMPLAZAR_CEREMONIA',
        actionLabel: 'Cómo llegar (Google Maps)',
      },
      {
        title: 'Convite',
        place: 'Finca Estelar Tatooine',
        address: 'Camino de la Fuerza, 7 · Madrid',
        mapsUrl: 'https://maps.app.goo.gl/REEMPLAZAR_CONVITE',
        actionLabel: 'Ir al convite',
      },
    ],
  },
  accommodation: {
    id: 'alojamiento',
    title: 'Alojamiento recomendado',
    subtitle: 'Opciones cercanas para descansar después de la fiesta.',
    cards: [
      {
        title: 'Hotel Rebel Base',
        text: '★★★★ · 8 min en coche del convite',
        url: 'https://www.booking.com',
        actionLabel: 'Ver disponibilidad',
      },
      {
        title: 'Apartamentos Hyrule Center',
        text: 'Ideal para grupos · cocina incluida',
        url: 'https://www.airbnb.es',
        actionLabel: 'Ver opciones',
      },
      {
        title: 'Hostal Pixel Inn',
        text: 'Opción económica · 12 min del evento',
        url: 'https://www.google.com/travel/hotels',
        actionLabel: 'Buscar tarifas',
      },
    ],
  },
  guestInfo: {
    id: 'invitados',
    title: 'Info útil para invitados',
    subtitle: 'Todo lo que suele preguntarse antes de una boda.',
    items: [
      {
        title: 'Dress code',
        text: 'Elegante con guiño friki opcional: pin, calcetines temáticos o detalle retro.',
      },
      {
        title: 'Transporte',
        text: 'Si queréis transporte compartido, indicadlo al confirmar y coordinaremos grupos.',
      },
      {
        title: 'Regalo',
        text: 'Vuestra presencia es nuestro mejor regalo. Si queréis colaborar, añadiremos aquí la info.',
      },
      {
        title: 'Playlist colaborativa',
        text: 'Pronto subiremos un enlace para sugerir canciones de baile.',
      },
    ],
  },
  multimedia: {
    id: 'multimedia',
    enabled: false,
    title: 'Trailer de la misión',
    subtitle: 'Espacio preparado para vídeo de los novios (sustituible por MP4 o YouTube).',
    video: {
      poster: 'https://placehold.co/1200x675/0C142E/F7D247?text=POSTER+VIDEO+NOVIOS',
      src: '/media/trailer-novios.mp4',
      type: 'video/mp4',
      fallbackText: 'Tu navegador no soporta vídeo HTML5.',
    },
  },
  rsvp: {
    id: 'confirmacion',
    title: 'Confirmación de asistencia',
    subtitle: 'Escribidnos antes del 15 de abril de 2027 para organizar todo perfecto.',
    phoneLabel: 'Tel',
    emailLabel: 'Email',
    whatsappActionLabel: 'Confirmar por WhatsApp',
    contacts: [
      {
        name: 'Laura',
        phone: '+34 600 000 001',
        whatsappUrl: 'https://wa.me/34600000001?text=Hola%20Laura%2C%20confirmo%20asistencia%20a%20la%20boda',
        email: 'laura@ejemplo.com',
      },
      {
        name: 'Rafa',
        phone: '+34 600 000 002',
        whatsappUrl: 'https://wa.me/34600000002?text=Hola%20Rafa%2C%20confirmo%20asistencia%20a%20la%20boda',
        email: 'rafa@ejemplo.com',
      },
    ],
    templateMessage:
      'Mensaje sugerido: "Hola, soy [Nombre]. Confirmo [X] asistentes. Tenemos/alergias: [detalle]."',
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
        text: 'Como máximo hasta el 15 de abril de 2027.',
      },
    ],
  },
  footer: {
    text: 'Laura & Rafa · Gracias por acompañarnos en esta aventura.',
    cookieNotice: 'Esta web puede usar cookies; al navegar por ella aceptas su uso.',
  },
};
