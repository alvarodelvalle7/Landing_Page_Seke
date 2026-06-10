# 🎨 Guía de Código - Black Panther Fitness

Patrones, mejores prácticas y convenciones específicas de este proyecto.

---

## 📐 Arquitectura del Proyecto

### Estructura de carpetas

```
src/
├── assets/         → Recursos estáticos (imágenes, fuentes)
├── components/     → Componentes reutilizables (Navbar, Footer)
├── layouts/        → Plantillas base para páginas
├── pages/          → Páginas del sitio (auto-enrutadas)
├── scripts/        → Lógica JS/TS del cliente
└── styles/         → Estilos globales (Tailwind)
```

**Principio:** Mantén los archivos cerca de donde se usan.

---

## 🎯 Patrones Comunes

### 1. Patrón de Página

```astro
---
// Import de componentes y assets
import Layout from '../layouts/Layout.astro';
import image from "../assets/img/ejemplo.webp";
import { Image } from "astro:assets";
import "../styles/global.css";

// Variables y datos
const title = "Mi Página";
const items = [
  { name: "Item 1", ... },
  { name: "Item 2", ... }
];
---

<!-- Wrap con Layout y título -->
<Layout title="Título | Black Panther Fitness">
  
  <!-- Secciones principales -->
  <section class="min-h-screen">
    <!-- Contenido -->
  </section>

</Layout>
```

### 2. Patrón de Grid Responsivo

```astro
<!-- 1 columna en móvil, 2 en tablet, 3 en desktop -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
  {items.map((item) => (
    <article class="flex flex-col gap-4">
      <!-- Card content -->
    </article>
  ))}
</div>
```

### 3. Patrón de Mapeo (Renderizado dinámico)

```astro
{items.map((item) => {
  // Extraer iconos o componentes complejos
  const Icon = item.icon;
  
  return (
    <div class="...">
      {/* Comentario para componentes dinámicos */}
      <Icon class="..." />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
    </div>
  );
})}
```

### 4. Patrón de Componente con Props

```astro
---
interface Props {
  title: string;
  subtitle?: string;
  bgColor?: "dark" | "light";
}

const { title, subtitle = "Default", bgColor = "dark" } = Astro.props;
---

<div class={`bg-${bgColor} p-8`}>
  <h2>{title}</h2>
  {subtitle && <p>{subtitle}</p>}
</div>
```

---

## 🎨 Sistema de Diseño

### Colores

```css
/* Primarios */
--color-primary-yellow: #FFCC00;
--color-primary-black: #000000;

/* Acentos */
--color-accent-light: #FFEFCD;
--color-accent-dark: #080806;

/* Neutros */
--color-text-primary: #FFFFFF;
--color-text-secondary: #827B6D;
--color-text-light: #D2C5AB;
```

**Uso en Tailwind:**
```html
<!-- Color amarillo -->
<div class="text-[#FFCC00] bg-[#FFCC00]">

<!-- Color negro -->
<div class="bg-black text-white">

<!-- Opacidad -->
<div class="bg-black/90 border-[#FFCC00]/30">
```

### Espaciado

```html
<!-- Secciones completas -->
<section class="px-8 md:px-12 py-16 lg:px-16 lg:py-20 xl:px-24 xl:py-24">

<!-- Elementos dentro -->
<div class="gap-4 md:gap-6 lg:gap-8">

<!-- Separadores -->
<div class="my-12">
```

**Patrón:** Aumenta padding/gap progresivamente en breakpoints mayores.

### Tipografía

```html
<!-- Titulos principales -->
<h1 class="font-black tracking-tighter text-5xl md:text-6xl lg:text-7xl">

<!-- Titulos de sección -->
<h2 class="font-black tracking-widest text-2xl md:text-4xl lg:text-5xl">

<!-- Subtitulos -->
<h3 class="font-semibold tracking-wider text-base md:text-lg lg:text-xl">

<!-- Párrafos -->
<p class="font-medium tracking-tighter text-sm md:text-base lg:text-lg text-gray-400">

<!-- Detalles pequeños -->
<span class="text-xs md:text-sm tracking-widest font-semibold uppercase">
```

**Regla:** Las fuentes aumentan 1-2 niveles de tamaño en md, y 1 más en lg.

### Efectos y Transiciones

```html
<!-- Hover con desplazamiento -->
<a class="transition-all duration-300 hover:bg-yellow-500 hover:-translate-y-1 hover:shadow-lg">

<!-- Efectos de línea -->
<a class="relative ... after:absolute after:w-0 hover:after:w-full after:transition-all after:duration-300">

<!-- Opacidades -->
<div class="opacity-0 hover:opacity-100 transition-opacity duration-500">

<!-- Rotación -->
<div class="rotate-45 -rotate-45 transition-transform duration-300">
```

---

## 🧩 Componentes Existentes

### Navbar.astro
```astro
<Navbar transition:persist />

<!-- Props: ninguno (usa navLinks array interno) -->
<!-- Características:
  - Logo clickeable que va a home
  - Navegación desktop (lg+)
  - Menú hamburguesa (responsive)
  - Botón contacto
  - Persiste entre navegaciones
-->
```

### Footer.astro
```astro
<Footer transition:persist />

<!-- Props: ninguno (usa arrays internos) -->
<!-- Características:
  - Navegación
  - Redes sociales (Facebook, Instagram)
  - Contacto directo (email, teléfono)
  - Enlaces legales
  - Copyright
  - Persiste entre navegaciones
-->
```

### Layout.astro
```astro
<Layout title="Página | Black Panther Fitness">
  <slot />
</Layout>

<!-- Props:
  - title: string (título para <title> tag)
-->
<!-- Características:
  - Estructura HTML base
  - ClientRouter para transiciones
  - Navbar y Footer persistentes
  - Estilos globales incluidos
-->
```

---

## 🚀 JavaScript y TypeScript

### Menú Hamburguesa (menu.ts)

```typescript
// Estructura:
// 1. initMenu() - Inicializa event listeners
// 2. closeMenu() - Cierra el menú
// 3. Click handler - Abre/cierra
// 4. Link handler - Cierra al hacer clic
// 5. Resize handler - Cierra en pantallas grandes

// Se ejecuta en:
// - astro:page-load (cada navegación)
// - resize (ventana)
```

### Patrones de DOM Queries

```typescript
// Selecciones seguras (con optional chaining)
const element = document.querySelector("#id");
element?.classList.toggle("class-name");
element?.addEventListener("click", handler);

// Múltiples elementos
const elements = document.querySelectorAll(".class");
elements.forEach(el => {
  el.classList.add("class");
});

// Métodos seguros
element?.innerHTML = "content";
element?.textContent = "text";
```

### Escuchadores de eventos de Astro

```typescript
// astro:page-load - Se ejecuta en cada navegación (con ClientRouter)
document.addEventListener("astro:page-load", () => {
  console.log("Página cargada");
});

// astro:before-preparation - Antes de carga (raro usarlo)
// astro:after-swap - Después de swap de DOM (raro usarlo)
```

---

## 📱 Responsive Design

### Breakpoints utilizados

```
sm: 640px   → Tablets pequeñas
md: 768px   → Tablets
lg: 1024px  → Desktop
xl: 1280px  → Pantalla grande
```

### Patrones responsive comunes

```html
<!-- Ocultar/mostrar según pantalla -->
<div class="hidden lg:flex">Desktop only</div>
<div class="block md:hidden">Mobile only</div>

<!-- Cambiar layout -->
<div class="flex flex-col md:flex-row">
  <div class="w-full md:w-1/2">Left</div>
  <div class="w-full md:w-1/2">Right</div>
</div>

<!-- Texto responsivo -->
<h1 class="text-2xl md:text-3xl lg:text-4xl">

<!-- Espaciado responsivo -->
<div class="p-4 md:p-8 lg:p-12">
```

---

## 🔄 Imágenes y Assets

### Optimización de imágenes

```astro
import { Image } from "astro:assets";
import myImage from "../assets/img/example.webp";

<!-- Para imágenes críticas (hero) -->
<Image 
  src={myImage} 
  alt="Descripción"
  loading="eager"           <!-- Carga inmediata -->
  fetchpriority="high"      <!-- Alta prioridad -->
/>

<!-- Para imágenes normales -->
<Image 
  src={myImage}
  alt="Descripción"
  loading="lazy"            <!-- Por defecto, lazy loading -->
/>

<!-- Overlays y máscaras -->
<Image 
  src={image}
  class="grayscale brightness-50 
         mask-[linear-gradient(...)]
         [-webkit-mask-image:linear-gradient(...)]"
/>
```

### Formatos
- **Héroes/backgrounds:** `.webp` (optimizado)
- **Logos:** `.png` (sin cambios de color)
- **Fuentes:** `.woff2` (optimizado)

---

## 🎯 SEO y Accesibilidad

### Atributos alt descriptivos

```html
<!-- ❌ Malo -->
<Image alt="Logo" src={...} />
<Image alt="Foto" src={...} />

<!-- ✅ Bueno -->
<Image alt="Logo de Black Panther Fitness" src={...} />
<Image alt="Foto de perfil de Seke Gallart Bosque" src={...} />
```

### Estructura HTML semántica

```html
<!-- ✅ Usa tags semánticos -->
<header>
  <nav>
    <ul>
      <li><a>...</a></li>
    </ul>
  </nav>
</header>

<main>
  <section>
    <h2>Sección</h2>
  </section>
</main>

<footer>
  <nav>...</nav>
</footer>
```

### Títulos únicos por página

```astro
<!-- Cada página debe tener title único -->
<Layout title="Home | Black Panther Fitness">
<Layout title="Sobre Mi | Black Panther Fitness">
<Layout title="Política de Privacidad | Black Panther Fitness">
```

---

## ⚡ Performance

### Cosas que mejoran performance

- ✅ Usar imágenes `.webp`
- ✅ Lazy loading para imágenes no críticas
- ✅ Prefetch en hover (ya configurado)
- ✅ Minimizar CSS inline
- ✅ Usar Tailwind (ya compilado)
- ✅ Component islanding (Astro default)

### Cosas que degradan performance

- ❌ Importar librerías JS innecesarias
- ❌ Usar fonts pesadas (usamos variable font)
- ❌ CSS global sin purging (Tailwind lo hace automático)
- ❌ Imágenes sin optimizar

---

## 🐛 Debugging

### Console logs seguros

```typescript
// Durante desarrollo
console.log("Debug:", value);

// Nunca en producción
// Antes de commit, revisa que no hay console.log
```

### Verificar en DevTools

```
1. Elements → Verifica estructura HTML
2. Styles → Verifica clases Tailwind aplicadas
3. Performance → Verifica FCP (First Contentful Paint)
4. Network → Verifica tamaño de assets
5. Console → Verifica errores/warnings
```

### Errores comunes

| Error | Causa | Solución |
|-------|-------|----------|
| Clase Tailwind no aplica | Clase contiene valor dinámico | Usa clase completa o variable CSS |
| Imagen rota | Path incorrecto | Usa import (no strings) |
| Script no funciona | No cargó | Verifica que esté dentro del scope |
| Menú no cierra | ClientRouter no inicializa | Usa `astro:page-load` event |

---

## 📝 Ejemplos prácticos

### Agregar una nueva sección a home

```astro
<!-- ====== NUEVA SECCIÓN ======
Descripción breve de qué contiene y para qué -->
<section class="min-h-screen flex flex-col justify-center items-center gap-12 px-8 md:px-12 py-16 lg:px-16 lg:py-20 xl:px-24 xl:py-24">

  <!-- Título -->
  <h2 class="font-black tracking-widest text-2xl md:text-4xl lg:text-5xl">
    TÍTULO<span class="text-[#FFCC00]">.</span>
  </h2>

  <!-- Contenido -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
    {items.map((item) => (
      <article class="flex flex-col gap-4">
        {/* Card content */}
      </article>
    ))}
  </div>

</section>
```

### Crear un componente reutilizable

```astro
---
// src/components/Card.astro
import { Image } from "astro:assets";

interface Props {
  title: string;
  description: string;
  icon?: any;
  imageUrl?: string;
}

const { title, description, icon: Icon, imageUrl } = Astro.props;
---

<article class="flex flex-col gap-4 bg-blue-950/20 rounded-xs p-8">
  {/* Icono opcional */}
  {Icon && <Icon class="w-8 h-8 text-[#FFCC00]" />}
  
  {/* Imagen opcional */}
  {imageUrl && <Image src={imageUrl} alt={title} />}
  
  <h3 class="font-semibold text-lg">{title}</h3>
  <p class="text-gray-400">{description}</p>
</article>
```

---

## 🎓 Recursos

- [Astro Docs](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [MDN Web Docs](https://developer.mozilla.org)
- [Lucide Icons](https://lucide.dev)

---

**Última actualización:** 2026-06-10
