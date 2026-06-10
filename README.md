# 📚 Documentación del Proyecto - Black Panther Fitness

## 📖 Índice

1. [Descripción General](#descripción-general)
2. [Estructura del Proyecto](#estructura-del-proyecto)
3. [Tecnologías Utilizadas](#tecnologías-utilizadas)
4. [Instalación y Configuración](#instalación-y-configuración)
5. [Scripts Disponibles](#scripts-disponibles)
6. [Componentes](#componentes)
7. [Páginas](#páginas)
8. [Estilos y Diseño](#estilos-y-diseño)
9. [Funcionalidades Principales](#funcionalidades-principales)
10. [Guía de Desarrollo](#guía-de-desarrollo)
11. [Despliegue](#despliegue)

---

## 🎯 Descripción General

**Black Panther Fitness** es un sitio web profesional para un servicio de entrenamiento personal online. La plataforma permite a los usuarios acceder a rutinas personalizadas, seguimiento de progreso, videollamadas de asesoramiento y contenido educativo sobre técnicas de ejercicio.

### Características principales:
- 💪 Rutinas de entrenamiento personalizadas en PDF
- 📊 Seguimiento del progreso del usuario
- 🎥 Vídeos explicativos de ejercicios
- 📞 Soporte continuo y comunicación directa con el entrenador
- 🎯 Adaptación a lesiones e limitaciones del usuario
- ⚡ Interfaz moderna y responsiva

---

## 📁 Estructura del Proyecto

```
proyecto_seke/
├── public/
│   └── blackpanthersekewhite.png          # Logo en formato PNG
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   │   └── Onest-VariableFont_wght.woff2  # Fuente personalizada
│   │   └── img/
│   │       ├── background_jungla.webp    # Imagen de fondo hero
│   │       ├── blackpanthersekewhite.png # Logo
│   │       └── perfilseke.png            # Foto de perfil del entrenador
│   ├── components/
│   │   ├── Navbar.astro                  # Barra de navegación
│   │   └── Footer.astro                  # Pie de página
│   ├── layouts/
│   │   └── Layout.astro                  # Plantilla base
│   ├── pages/
│   │   ├── index.astro                   # Página principal (home)
│   │   ├── about.astro                   # Página "Sobre mí"
│   │   ├── privacity.astro               # Política de privacidad
│   │   └── terms.astro                   # Términos y condiciones
│   ├── scripts/
│   │   └── menu.ts                       # Lógica del menú hamburguesa
│   └── styles/
│       └── global.css                    # Estilos globales
├── .astro/
├── .vscode/
├── astro.config.mjs                      # Configuración de Astro
├── package.json                          # Dependencias del proyecto
├── tsconfig.json                         # Configuración de TypeScript
├── .gitignore                            # Archivos ignorados por Git
└── README.md                             # README original
```

---

## 🛠️ Tecnologías Utilizadas

### Framework Principal
- **Astro 6.4.3** - Framework estático moderno para construcción rápida de sitios web

### Estilos
- **Tailwind CSS 4.3.0** - Framework de CSS utility-first
- **Tailwind CSS Vite 4.3.0** - Plugin de Vite para Tailwind

### Iconografía
- **Lucide Astro 0.556.0** - Librería de iconos SVG para Astro

### Otros
- **TypeScript** - Lenguaje tipado para JavaScript
- **Node.js 22.12.0+** - Runtime necesario

---

## 📦 Instalación y Configuración

### Requisitos previos
- Node.js v22.12.0 o superior
- npm o gestor de paquetes compatible

### Pasos de instalación

1. **Clonar/descargar el proyecto:**
```bash
cd proyecto_seke
```

2. **Instalar dependencias:**
```bash
npm install
```

3. **Iniciar servidor de desarrollo:**
```bash
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

---

## 🚀 Scripts Disponibles

```bash
# Iniciar servidor de desarrollo con recarga automática
npm run dev

# Compilar el proyecto para producción
npm run build

# Previsualizar la compilación de producción localmente
npm run preview

# Ejecutar comandos de Astro directamente
npm run astro
```

---

## 🧩 Componentes

### Navbar.astro
**Ubicación:** `src/components/Navbar.astro`

Barra de navegación principal con las siguientes características:
- Logo y nombre de la marca
- Enlaces de navegación (Inicio, Sobre mi)
- Botón de contacto
- Menú hamburguesa responsivo para dispositivos móviles
- Estilos hover interactivos

**Props:** Ninguno (componente standalone)

**Características técnicas:**
- Navegación fija en la parte superior (sticky)
- Menú móvil que se desactiva en pantallas lg (≥1024px)
- Transiciones suaves en las interacciones
- Integración con script TypeScript para funcionalidad del menú

### Footer.astro
**Ubicación:** `src/components/Footer.astro`

Pie de página con:
- Secciones de navegación
- Enlaces de redes sociales (Facebook, Instagram)
- Información de contacto (email, teléfono)
- Enlaces a políticas (Privacidad, Términos)
- Copyright y derechos reservados

**Props:** Ninguno (componente standalone)

**Características técnicas:**
- Diseño flexible (flex-col en móvil, flex-row en desktop)
- Iconos de Lucide Astro integrados
- Enlaces con efectos hover
- Información de contacto con acceso directo (mailto, tel)

---

## 📄 Páginas

### index.astro (Home)
**Ubicación:** `src/pages/index.astro`

Página principal con tres secciones principales:

#### 1. **Sección Hero**
- Imagen de fondo de jungla con overlay oscuro
- Titular principal: "DESATA TU POTENCIAL"
- Descripción del servicio
- Call-to-action (botón CONÓCENOS)
- Estilos responsivos

#### 2. **Sección de Servicios**
- Grid de 6 tarjetas con servicios ofrecidos
- Cada tarjeta contiene:
  - Icono (de Lucide Astro)
  - Nombre del servicio
  - Descripción breve
- Ejemplos: Tablas personalizadas, Objetivos claros, Seguimiento de progreso

#### 3. **Sección de Precios**
- Información sobre suscripción premium
- Precio: 35€ inicial + 25€/mes
- Lista de features incluidos
- Call-to-action (botón EMPIEZA HOY)

### about.astro (Sobre mí)
**Ubicación:** `src/pages/about.astro`

Página de perfil del entrenador con:

#### 1. **Sección Hero**
- Foto de perfil del entrenador (Seke Gallart Bosque)
- Descripción personal y filosofía
- Botón para descargar CV

#### 2. **Sección de Certificados**
- Listado de formaciones académicas
- TAFAD (2021-2023)
- FP Integración Social (en curso)
- Información detallada de cada certificación

#### 3. **Sección de Experiencia Laboral**
- Timeline con experiencia profesional
- Incluye:
  - Second Waves (Monitor Deportivo)
  - Colegio Baladre (Monitor de Comedor)
  - CPR Serveis Integrals (Monitor de Natación)
  - Ayuntamiento de Sagunto (Prácticas)
- Diseño vertical en desktop, horizontal en móvil

### privacity.astro (Política de Privacidad)
**Ubicación:** `src/pages/privacity.astro`

Página de cumplimiento legal con 9 secciones:
1. Identificación del responsable
2. Datos personales recopilados
3. Finalidades del tratamiento
4. Base legal del tratamiento
5. Derechos de los usuarios
6. Medidas de seguridad
7. Transferencias internacionales de datos
8. Conservación de datos
9. Modificaciones de la política

Cumple con RGPD y LOPDGDD.

### terms.astro (Términos y Condiciones)
**Ubicación:** `src/pages/terms.astro`

Página de términos con 12 secciones:
1. Información del titular
2. Descripción del servicio
3. Registro de usuarios
4. Pagos y suscripción
5. Cancelación
6. Responsabilidad del usuario
7. Limitación de responsabilidad
8. Contenido y uso del servicio
9. Modificaciones del servicio
10. Protección de datos
11. Legislación aplicable
12. Contacto

---

## 🎨 Estilos y Diseño

### Sistema de Colores
- **Primario:** Negro `#000000`
- **Acento:** Amarillo `#FFCC00`
- **Acento claro:** `#FFEFCD`
- **Fondo oscuro:** `#080806`, `#0D0D0D`, `#010101`
- **Texto:** Gris `#827B6D`, `#D2C5AB`

### Fuente
- **Familia principal:** "Onest" (variable font)
- **Fallback:** sans-serif

### Breakpoints (Tailwind)
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

### Componentes Visuales
- **Botones:** Fondo amarillo con hover dinámico
- **Tarjetas:** Background translúcido con bordes sutiles
- **Enlaces:** Efecto subrayado animado en hover

---

## ⚙️ Funcionalidades Principales

### 1. Menú Hamburguesa Responsivo
- Implementado en `menu.ts`
- Se activa en pantallas < 1024px (mobile/tablet)
- Transforma las líneas en icono X al abrir
- Se cierra automáticamente al hacer clic en un enlace
- Se resetea al redimensionar la ventana

### 2. Prefetch de Recursos
- **Configurado en `astro.config.mjs`**
- Precarga todos los enlaces al hacer hover
- Mejora la velocidad de navegación
- Utiliza estrategia 'hover'

### 3. Optimización de Imágenes
- Uso de `astro:assets` para optimización automática
- Imágenes en formatos modernos (webp)
- Atributos `loading="eager"` para imágenes críticas
- `fetchpriority="high"` para recursos prioritarios

### 4. Transiciones de Página
- Utilizan `ClientRouter` de Astro
- Componentes `Navbar` y `Footer` persisten entre páginas (`transition:persist`)
- Mejora la experiencia de navegación

### 5. SEO y Accesibilidad
- Títulos HTML únicos para cada página
- Etiquetas meta viewport configuradas
- Atributos alt descriptivos en imágenes
- Estructura HTML semántica

---

## 👨‍💻 Guía de Desarrollo

### Agregar una Nueva Página

1. Crea un archivo `.astro` en `src/pages/`
2. Importa el layout `Layout.astro`
3. Define la prop `title` para el título de la página
4. Estructura el contenido

```astro
---
import Layout from '../layouts/Layout.astro';

---

<Layout title="Nueva Página | Black Panther Fitness">
  <!-- Tu contenido aquí -->
</Layout>
```

### Agregar un Nuevo Componente

1. Crea un archivo `.astro` en `src/components/`
2. Define las props si es necesario
3. Importalo en las páginas donde lo necesites

```astro
---
interface Props {
  title: string;
  description: string;
}

const { title, description } = Astro.props;
---

<div class="your-styles">
  <h2>{title}</h2>
  <p>{description}</p>
</div>
```

### Trabajar con Estilos

- **Estilos globales:** Modifica `src/styles/global.css`
- **Estilos específicos:** Usa Tailwind CSS directamente en las clases
- **Variables de CSS:** Define en `global.css` dentro de `@layer`

### Debugging

```bash
# Ejecutar en modo desarrollo con logs detallados
npm run dev -- --verbose
```

---

## 🌐 Despliegue

### Opción 1: Vercel (Recomendado)
1. Conecta el repositorio a Vercel
2. Vercel detecta automáticamente Astro
3. Deploy automático en cada push

### Opción 2: Netlify
1. Conecta el repositorio
2. Configure el comando de build: `npm run build`
3. Directorio de publicación: `dist`

### Opción 3: Hosting tradicional
1. Ejecuta `npm run build`
2. Sube la carpeta `dist` a tu servidor
3. Configura el servidor para servir `index.html` en rutas no existentes

### Configuración de entorno de producción

```bash
# Crear build para producción
npm run build

# Previsualizar antes de desplegar
npm run preview
```

---

## 📋 Checklist de Funcionalidades

- [x] Página principal (Home)
- [x] Página "Sobre mí"
- [x] Política de privacidad
- [x] Términos y condiciones
- [x] Navegación responsiva (menú hamburguesa)
- [x] Footer con redes sociales
- [x] Iconografía moderna
- [x] Optimización de imágenes
- [x] Estilos responsivos
- [x] Transiciones suaves
- [x] SEO básico
- [ ] Integración de base de datos (futura)
- [ ] Sistema de pago (futura - usando Stripe)
- [ ] Área de usuario (futura)
- [ ] Chat en vivo con el entrenador (futura)

---

## 🔗 Enlaces útiles

- **Documentación de Astro:** https://docs.astro.build
- **Documentación de Tailwind CSS:** https://tailwindcss.com/docs
- **Lucide Icons:** https://lucide.dev/icons
- **Astro Integrations:** https://astro.build/integrations

---

## 👤 Contacto y Soporte

- **Email:** sekegallart24@gmail.com
- **Teléfono:** +34 626 637 516
- **Facebook:** https://www.facebook.com/BlackPantherFitness
- **Instagram:** https://www.instagram.com/BlackPantherFitness

---

## 📝 Versionado

- **Versión Actual:** 0.0.1
- **Node.js Mínimo:** 22.12.0
- **Última Actualización:** 2026-06-10

---

**Documentación creada para Black Panther Fitness**
