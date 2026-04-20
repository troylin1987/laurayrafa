# Laura y Rafa · Web de boda

Single-page web scrolable creada con React + Vite, con diseño friki (sci-fi/retro gaming), animaciones de scroll y estructura responsive.

## Desarrollo local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```

## Datos que debes personalizar
Edita **solo** este archivo:
- `src/content/siteContent.js`

Ahí están centralizados:
- Fecha/hora de boda.
- Textos de todas las secciones.
- Enlaces de Google Maps.
- Contactos y mensajes de RSVP.
- Placeholders de imágenes y vídeo.

## Fotos y vídeo
- Las fotos actuales son placeholders de `placehold.co` para que el diseño ya se vea completo.
- Sustituye por tus imágenes actualizando `src/content/siteContent.js` o usa assets locales en `public/media/`.
- Para vídeo, sube `public/media/trailer-novios.mp4` o cambia el bloque por un embed de YouTube/Vimeo.

## Deploy en GitHub Pages
Incluye workflow en `.github/workflows/deploy.yml` para publicar automáticamente al hacer push en `main`.
El workflow compila la web con el contenido actual de `src/content/siteContent.js` en cada ejecución.

Pasos en GitHub:
1. Ve a `Settings > Pages`.
2. En `Build and deployment`, selecciona `GitHub Actions`.
3. Haz push a `main` para lanzar el despliegue.

## Dominio propio (ej. laurayrafa.es)
Sí, es posible asociarlo a GitHub Pages.

Pasos recomendados:
1. En `Settings > Pages`, añade el dominio personalizado (`laurayrafa.es`).
2. Configura en tu proveedor DNS los registros que te indique GitHub (A/AAAA o CNAME según el caso).
3. Activa HTTPS en GitHub Pages una vez propagado el DNS.

## Guía para agente IA
Normas permanentes en:
- `instructions/instructions.md`
