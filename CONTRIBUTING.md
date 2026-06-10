# 🤝 Guía de Contribución - Black Panther Fitness

## 📋 Tabla de contenidos

1. [Antes de empezar](#antes-de-empezar)
2. [Flujo de trabajo](#flujo-de-trabajo)
3. [Estándares de código](#estándares-de-código)
4. [Comentarios y documentación](#comentarios-y-documentación)
5. [Testing](#testing)
6. [Commits y Pull Requests](#commits-y-pull-requests)

---

## 🚀 Antes de empezar

### Requisitos
- Node.js v22.12.0 o superior
- npm o equivalente
- Familiaridad con Astro y Tailwind CSS
- Conocimiento básico de TypeScript

### Setup inicial
```bash
# Clonar el repositorio
git clone <repo-url>

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

---

## 🔄 Flujo de trabajo

### 1. Crear rama para tu feature
```bash
git checkout -b feature/nombre-descriptivo
# Ejemplos:
# - feature/agregar-seccion-blog
# - fix/menu-hamburguesa-no-cierra
# - docs/actualizar-readme
```

### 2. Realizar cambios

#### Agregar una nueva página
```bash
# 1. Crear archivo en src/pages/
touch src/pages/nueva-pagina.astro

# 2. Importar Layout y componentes necesarios
# 3. Definir prop title
# 4. Agregar contenido y estilos
```

#### Crear un nuevo componente
```bash
# 1. Crear archivo en src/components/
touch src/components/NuevoComponente.astro

# 2. Definir props si es necesario
# 3. Importar en las páginas donde se usa
```

#### Agregar estilos
- Usa Tailwind CSS directamente en las clases
- Para estilos globales, modifica `src/styles/global.css`
- Evita CSS en línea cuando sea posible

#### Modificar scripts
- Los scripts van en `src/scripts/`
- Usa TypeScript para mejor mantenibilidad
- Documenta funciones complejas

### 3. Testing local
```bash
npm run dev

# Visita http://localhost:3000
# Prueba en diferentes dispositivos (mobile, tablet, desktop)
# Verifica responsividad
```

---

## 💻 Estándares de código

### Convención de nombres

#### Archivos y carpetas
```
src/
  components/
    - PascalCase.astro (MyComponent.astro)
  pages/
    - lowercase-with-dashes.astro (contact.astro, about-me.astro)
  scripts/
    - camelCase.ts (menuHandler.ts)
  styles/
    - lowercase-with-dashes.css (global.css)
```

#### Variables y funciones
```typescript
// Variables
const myVariable = "value";

// Constantes
const CONSTANT_VALUE = 42;

// Funciones
function myFunction() {}
const myArrowFunction = () => {}
```

#### Clases CSS (Tailwind)
```html
<!-- Evitar clases muy largas, usar comentarios si es necesario -->
<div class="flex items-center justify-between p-4 bg-gray-900">
  <!-- Contenido -->
</div>
```

### Imports
```typescript
// Ordenar: imports de node modules, path imports, relative imports
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import Layout from '../layouts/Layout.astro';
```

---

## 📝 Comentarios y documentación

### Cuándo escribir comentarios

**Escribe comentarios cuando:**
- Explicar el **WHY**, no el WHAT (el código ya explica qué hace)
- Indicar constraints no obvios
- Describir workarounds para bugs específicos
- Secciones principales del código (secciones hero, grid, etc.)

**No escribas comentarios para:**
- Explicar código obvio
- Referenciar PRs o issues (eso va en git history)
- Documentar funciones simples (nombres descriptivos bastan)

### Formato de comentarios

#### Comentarios de sección (HTML)
```html
<!-- ====== SECCIÓN HERO ======
Sección principal con imagen de fondo y CTA
Usa overlay oscuro para mejorar legibilidad del texto -->
<section class="relative min-h-[90vh]">
</section>
```

#### Comentarios de código (TypeScript)
```typescript
// ====== NOMBRE DE SECCIÓN ======
// Descripción breve de qué hace

function myFunction() {
  // Comentario para lógica no obvia
  const result = complexLogic();
  return result;
}
```

#### Comentarios de variables
```typescript
// Array que contiene la configuración de servicios
// Se utiliza para renderizar dinámicamente las tarjetas en la página
const services = [
  { name: "Service 1", ... }
];
```

### Documentación de componentes

Cada componente astro debe tener documentación básica:

```astro
---
// ====== NOMBRE DEL COMPONENTE ======
// Breve descripción de qué hace

interface Props {
  title: string;     // Título principal
  description?: string; // Descripción opcional
}

const { title, description } = Astro.props;
---

<!-- Contenido -->
```

---

## ✅ Testing

### Testing manual (requerido)

Antes de hacer commit:
1. **Desktop:** Prueba en Chrome, Firefox, Safari
2. **Móvil:** Prueba en dispositivos reales o DevTools
3. **Responsividad:** Verifica breakpoints: sm, md, lg, xl
4. **Navegación:** Prueba todos los enlaces internos
5. **Formularios:** Si aplica, prueba validación
6. **Performance:** Abre DevTools > Performance, revisa FCP y LCP

### Performance checklist
```bash
npm run build

# Verifica el tamaño de la salida
du -sh dist/

# Previsualiza la compilación
npm run preview
```

---

## 🔗 Commits y Pull Requests

### Convención de commits

Usa el formato: `type(scope): subject`

```bash
git commit -m "feat(navbar): agregar soporte para menú móvil"
git commit -m "fix(menu): cerrar menú al hacer resize a desktop"
git commit -m "docs(readme): actualizar instrucciones de instalación"
git commit -m "style(footer): mejorar espaciado en redes sociales"
git commit -m "refactor(hero): simplificar estructura de HTML"
```

**Tipos válidos:**
- `feat` - Nueva funcionalidad
- `fix` - Corrección de bug
- `docs` - Cambios en documentación
- `style` - Cambios de estilos (CSS, Tailwind)
- `refactor` - Refactorización sin cambiar funcionalidad
- `perf` - Mejoras de performance
- `chore` - Cambios en configuración o dependencias

### Pull Request

1. **Título descriptivo:** 
   ```
   [Feature] Agregar nueva sección de testimonios
   [Fix] Reparar menú hamburguesa en Safari
   [Docs] Actualizar guía de contribución
   ```

2. **Descripción:**
   ```markdown
   ## Cambios
   - Cambio 1
   - Cambio 2
   - Cambio 3

   ## Testing
   - [ ] Desktop responsive
   - [ ] Mobile testing
   - [ ] Todos los links funcionan
   - [ ] No hay errores en consola

   ## Screenshots (si aplica)
   Agregar antes/después si cambios visuales
   ```

3. **Checklist de PR**
   - [ ] Código sigue los estándares de este proyecto
   - [ ] Agregué/actualicé comentarios necesarios
   - [ ] Testeé en desktop y móvil
   - [ ] No hay errores de TypeScript
   - [ ] Commits tienen mensajes descriptivos
   - [ ] Actualicé DOCUMENTATION.md si es necesario

---

## 🚨 Checklist pre-commit

```bash
# 1. Verifica que tu rama está actualizada
git pull origin main

# 2. Ejecuta el servidor local
npm run dev

# 3. Verifica en browser:
# - Página principal
# - Página about
# - Página privacidad
# - Página términos
# - Menú móvil (en mobile/tablet)
# - Todos los enlaces

# 4. Compila para producción
npm run build

# 5. Previsualiza
npm run preview

# 6. Haz commit solo si todo funciona
git commit -m "..."
```

---

## 🤔 Preguntas frecuentes

### ¿Dónde agriego nuevas fuentes?
1. Descarga la fuente en formato `.woff2`
2. Coloca en `src/assets/fonts/`
3. Importa en `src/styles/global.css` con `@font-face`

### ¿Cómo cambio los colores de la marca?
Busca los valores de color en los archivos (ej: `#FFCC00` para amarillo):
- Actualiza en Tailwind config si necesario
- Actualiza en los componentes

### ¿Cómo agrego una nueva sección a la home?
1. Crea un `<section>` en `src/pages/index.astro`
2. Usa grid de Tailwind para responsividad
3. Agrega comentarios explicando la sección

### ¿Puedo usar librerías JS externas?
Sí, pero:
1. Considera si Astro tiene solución nativa
2. Mantén el bundle size bajo
3. Prefiere soluciones sin dependencias

---

## 📞 Necesitas ayuda?

- Revisa la [DOCUMENTATION.md](./DOCUMENTATION.md)
- Lee la [documentación oficial de Astro](https://docs.astro.build)
- Consulta [Tailwind CSS docs](https://tailwindcss.com/docs)
- Pregunta en issues o discussions

---

**¡Gracias por contribuir a Black Panther Fitness!** 💪
