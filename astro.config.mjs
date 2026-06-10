// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// ====== CONFIGURACIÓN DE ASTRO ======
// https://astro.build/config
export default defineConfig({
  // ====== PREFETCH CONFIGURATION ======
  // Precarga automática de recursos cuando el usuario hace hover sobre enlaces
  // Mejora significativamente la velocidad percibida de navegación
  prefetch: {
    prefetchAll: true,      // Precarga TODOS los enlaces
    defaultStrategy: 'hover' // Estrategia: activar al pasar el mouse
  },

  // ====== CONFIGURACIÓN DE VITE ======
  // Plugins y configuración del bundler
  vite: {
    plugins: [tailwindcss()] // Integración de Tailwind CSS v4 mediante plugin
  }
});