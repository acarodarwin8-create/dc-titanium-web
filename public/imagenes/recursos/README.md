# Recursos / Galería

Tamaño recomendado: 800x600px (.webp o .jpg).

- `render-torre-titanium.jpg`
- `modelo-bim-federado.jpg`
- `vista-interior-smf.jpg`
- `set-completo-quitumbe.jpg`
- `plantilla-revit-rte.jpg`
- `coleccion-renders.jpg`

Nota: la galería pública en `/comunidad` ya lee estas imágenes desde
`src/data/galeria.ts` (con overrides opcionales vía Google Sheet, ver
`src/lib/recursos.ts`), no desde `src/lib/imagenes.ts`. Si reemplazas
archivos aquí, actualiza también las rutas `imagen` en `src/data/galeria.ts`
para que la galería las use en vez de las URLs de Unsplash actuales.
