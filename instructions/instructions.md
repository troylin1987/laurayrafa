# Guía de construcción web · Laura y Rafa

## Objetivo
Crear y mantener una web de boda en una única página scrolable, muy visual, con narrativa progresiva y totalmente responsive en móvil, tablet y escritorio.

## Reglas obligatorias
- Mantener arquitectura **single-page** (sin navegación multipágina).
- Mantener enfoque **mobile-first** y responsive real en todos los breakpoints.
- No romper la estética temática: tono friki (inspiración sci-fi star wars / nintendo retro gaming), evitando diseños genéricos.
- Conservar animaciones de scroll suaves (aparición progresiva y/o parallax ligero) sin perjudicar rendimiento.
- Garantizar accesibilidad básica: contraste, `alt` en imágenes, foco visible, textos legibles.
- Evitar dependencias innecesarias y código complejo si no aporta valor.
- No eliminar placeholders de fotos/vídeo sin reemplazo equivalente.
- No hardcodear textos ni datos editables en componentes: centralizar en `src/content/siteContent.js`.

## Stack técnico acordado
- React + Vite.
- Estilos en CSS modular de la app (sin frameworks pesados).
- Deploy preparado para GitHub Pages.

## Secciones mínimas que siempre deben existir
1. Hero de impacto con mensaje principal (`¡Nos casamos!` o equivalente).
2. Fecha y hora del evento.
3. Cuenta atrás (días, horas, minutos, segundos) hasta la boda.
4. Ubicación de ceremonia con enlace a Google Maps.
5. Ubicación del convite con enlace a Google Maps.
6. Recomendaciones de alojamiento cercanas.
7. Sección de contacto/confirmación de asistencia (RSVP).

## Secciones recomendadas adicionales
- Nuestra historia.
- Agenda del día (timeline).
- Información útil para invitados: dress code, transporte, regalos.
- FAQ (preguntas frecuentes).
- Bloque multimedia con fotos/vídeo de novios.

## Placeholders de contenido
- Usar imágenes de placeholder visibles con texto descriptivo para sustituir más tarde.
- Dejar zona preparada para vídeo (MP4 o embed externo).
- Centralizar datos editables en `src/content/siteContent.js` (fecha, nombres, textos, contactos, enlaces Maps, multimedia).

## Criterios de calidad antes de cerrar cambios
- `npm run build` debe completar sin errores.
- Revisar adaptación móvil (anchos pequeños) y desktop.
- Revisar enlaces externos clave (Google Maps, contacto).
- Mantener consistencia visual entre secciones.
