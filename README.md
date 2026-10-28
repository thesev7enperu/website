# The Se7en — sitio web

Landing page de **The Se7en**, cases de celular personalizados. *Tu mundo, a tu manera.*

Hecha con [Astro](https://astro.build) (sitio estático), CSS nativo y las fuentes Montserrat y Playfair Display alojadas localmente.

## Estructura

```
website/
├── .claude/agents/   → agente de Claude Code para este proyecto
└── web/              → sitio en Astro
    ├── public/                 → favicon y robots.txt
    └── src/
        ├── assets/images/      → logo e imágenes (se optimizan a WebP al compilar)
        ├── components/         → Header, redes, Hero, Nosotros, Footer (contacto)
        ├── config/site.ts      → WhatsApp, mensaje por defecto, redes sociales y menú
        ├── layouts/Base.astro  → <head>, SEO y animaciones de aparición
        ├── pages/              → index y 404
        └── styles/global.css   → paleta de colores, fuentes y estilos base
```

## Ejecutar en local

Requiere Node.js 22 o superior.

```bash
cd web
npm install
npm run dev       # http://localhost:4321
npm run build     # chequeo de tipos + compilación en web/dist
npm run preview   # sirve la versión compilada
```

## Cambios frecuentes

- **WhatsApp y mensaje del botón "Hazlo tuyo"**: `web/src/config/site.ts` (`WHATSAPP`).
- **Redes sociales**: `web/src/config/site.ts` (`SOCIALS`).
- **Colores**: solo en `web/src/styles/global.css` (`:root`). Los componentes no usan colores fijos.
- **Imágenes**: reemplaza los archivos de `web/src/assets/images/` manteniendo el mismo nombre.

## Publicación en GitHub Pages

El sitio se publica solo en **https://thesev7enperu.github.io/website/** cada vez que se sube un cambio a `main` (workflow `.github/workflows/deploy.yml`). También puede lanzarse a mano desde la pestaña **Actions**.

Configuración única: en GitHub, **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Despliegue alternativo (Vercel o Netlify)

- Directorio raíz: `web`
- Comando de build: `npm run build`
- Directorio de salida: `dist`
- Variable de entorno: `PUBLIC_SITE_URL` con la URL pública (activa la URL canónica y la imagen para compartir en redes). Ver `web/.env.example`.

## Pendientes

- [x] Logo, destello y foto del case originales.
- [x] Imagen original de los stickers de la sección Nosotros.
- [x] Enlaces de Instagram, Facebook y TikTok.
- [ ] Dominio propio (opcional; hoy se publica en GitHub Pages).
