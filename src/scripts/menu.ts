// ====== LÓGICA DEL MENÚ HAMBURGUESA MÓVIL ======
// Función que inicializa todos los event listeners para abrir/cerrar el menú en dispositivos móviles
function initMenu() {
    // Seleccionar elementos del DOM: botón hamburguesa, menú y líneas del icono
    const button = document.querySelector("#menu-btn");
    const menu = document.querySelector("#mobile-menu");
    const lines = document.querySelectorAll(".line");

    // Función que cierra el menú móvil y restablece el icono de hamburguesa
    // Remueve las clases de rotación/transformación que crean el efecto X
    function closeMenu() {
        menu?.classList.add("translate-x-full");
        lines[0]?.classList.remove("rotate-45", "translate-y-1.5");
        lines[1]?.classList.remove("opacity-0");
        lines[2]?.classList.remove("-rotate-45", "-translate-y-1.5");
    }

    // Event listener del botón hamburguesa: alterna el menú con efecto X
    button?.addEventListener("click", () => {
        // Desliza el menú hacia dentro/fuera (translate-x-full)
        menu?.classList.toggle("translate-x-full");

        // Anima las líneas del icono para simular la transformación a X
        lines[0]?.classList.toggle("rotate-45");
        lines[0]?.classList.toggle("translate-y-1.5");

        lines[1]?.classList.toggle("opacity-0");

        lines[2]?.classList.toggle("-rotate-45");
        lines[2]?.classList.toggle("-translate-y-1.5");
    });

    // Cierra automáticamente el menú al hacer clic en cualquier enlace
    menu?.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", closeMenu);
    });
}

// Se ejecuta en cada navegación de página (incluyendo primera carga) cuando ClientRouter carga nuevo contenido
document.addEventListener("astro:page-load", initMenu);

// Event listener de redimensionamiento: cierra el menú al expandir a pantalla desktop (≥1024px)
// Se añade solo una vez porque window persiste entre navegaciones
window.addEventListener("resize", () => {
    // Si el ancho es mayor o igual a 1024px (breakpoint lg), cierra el menú móvil
    if (window.innerWidth >= 1024) {
        const menu = document.querySelector("#mobile-menu");
        const lines = document.querySelectorAll(".line");

        // Oculta el menú y restablece el icono hamburguesa
        menu?.classList.add("translate-x-full");
        lines[0]?.classList.remove("rotate-45", "translate-y-1.5");
        lines[1]?.classList.remove("opacity-0");
        lines[2]?.classList.remove("-rotate-45", "-translate-y-1.5");
    }
});