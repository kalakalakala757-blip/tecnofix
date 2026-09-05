function filtrarProductos(categoria) {

    const productos = document.querySelectorAll(".producto");
    const filtros = document.querySelectorAll(".filtro");

    filtros.forEach(filtro => {
        filtro.classList.remove("activo");
    });

    event.target.classList.add("activo");

    productos.forEach(producto => {

        const categoriaProducto =
            producto.dataset.categoria;

        if (
            categoria === "todos" ||
            categoriaProducto === categoria
        ) {
            producto.style.display = "block";
        } else {
            producto.style.display = "none";
        }

    });
}


function consultarProducto(producto) {

    const mensaje =
        "Hola, quisiera consultar por el producto: " +
        producto;

    const telefono = "5491155555555";

    const url =
        "https://wa.me/" +
        telefono +
        "?text=" +
        encodeURIComponent(mensaje);

    window.open(url, "_blank");
}


/* =========================
   REPARACIONES
========================= */

function mostrarReparaciones(tipo, boton) {

    const lista = document.getElementById(
        "lista-reparaciones"
    );

    const botones = document.querySelectorAll(
        ".dispositivo"
    );

    botones.forEach(boton => {
        boton.classList.remove("activo");
    });

    boton.classList.add("activo");


    let reparaciones = [];


    if (tipo === "celular") {

        reparaciones = [
            ["🔧", "Cambio de pantalla",
             "Reemplazo de pantalla dañada."],

            ["🔋", "Cambio de batería",
             "Reemplazo de batería desgastada."],

            ["🔌", "Conector de carga",
             "Revisión y reparación del puerto."],

            ["⚙️", "Problemas de software",
             "Diagnóstico y solución del sistema."]
        ];

    }


    if (tipo === "notebook") {

        reparaciones = [
            ["🧹", "Limpieza interna",
             "Limpieza y mantenimiento del equipo."],

            ["💾", "Cambio a SSD",
             "Instalación de almacenamiento SSD."],

            ["🧠", "Memoria RAM",
             "Instalación o ampliación de memoria."],

            ["⚙️", "Sistema operativo",
             "Instalación y configuración."]
        ];

    }


    if (tipo === "tablet") {

        reparaciones = [
            ["🔧", "Cambio de pantalla",
             "Reemplazo de pantalla dañada."],

            ["🔋", "Cambio de batería",
             "Reemplazo de batería."],

            ["🔌", "Conector de carga",
             "Reparación del puerto de carga."],

            ["⚙️", "Software",
             "Diagnóstico y solución de problemas."]
        ];

    }


    lista.innerHTML = "";

    reparaciones.forEach(reparacion => {

        lista.innerHTML += `
            <div class="reparacion">

                <span>${reparacion[0]}</span>

                <div>
                    <h3>${reparacion[1]}</h3>
                    <p>${reparacion[2]}</p>
                </div>

            </div>
        `;

    });
}


function solicitarPresupuesto() {

    const mensaje =
        "Hola TecnoFix, quisiera solicitar un presupuesto para reparar mi dispositivo.";

    const telefono = "5491155555555";

    const url =
        "https://wa.me/" +
        telefono +
        "?text=" +
        encodeURIComponent(mensaje);

    window.open(url, "_blank");
}
