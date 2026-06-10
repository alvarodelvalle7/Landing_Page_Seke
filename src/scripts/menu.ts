// Función para iniciar el menú
function initMenu() {
    // Recogemos el ID de los botones
    const button = document.querySelector("#menu-btn");
    const menu = document.querySelector("#mobile-menu");
    const lines = document.querySelectorAll(".line");

    // Función para cerrar el menú
    function closeMenu() {
        menu?.classList.add("translate-x-full");
        lines[0]?.classList.remove("rotate-45", "translate-y-1.5");
        lines[1]?.classList.remove("opacity-0");
        lines[2]?.classList.remove("-rotate-45", "-translate-y-1.5");
    }

    // Escuchamos el evento del botón al hacer click
    button?.addEventListener("click", () => {

        menu?.classList.toggle("translate-x-full");

        lines[0]?.classList.toggle("rotate-45");
        lines[0]?.classList.toggle("translate-y-1.5");

        lines[1]?.classList.toggle("opacity-0");

        lines[2]?.classList.toggle("-rotate-45");
        lines[2]?.classList.toggle("-translate-y-1.5");

    });

    menu?.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", closeMenu);
    });
}

// Se ejecuta en cada navegación (incluyendo la primera carga) con ClientRouter
document.addEventListener("astro:page-load", initMenu);

// Window persiste entre navegaciones, solo se añade una vez
window.addEventListener("resize", () => {

    if (window.innerWidth >= 1024) {

        const menu = document.querySelector("#mobile-menu");
        const lines = document.querySelectorAll(".line");

        menu?.classList.add("translate-x-full");

        lines[0]?.classList.remove("rotate-45", "translate-y-1.5");
        lines[1]?.classList.remove("opacity-0");
        lines[2]?.classList.remove("-rotate-45", "-translate-y-1.5");

    }

});