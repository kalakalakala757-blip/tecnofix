/* =========================
   FILTROS DE PRODUCTOS
========================= */

function filtrarProductos(categoria, boton) {

    const productos =
        document.querySelectorAll(".producto");

    const filtros =
        document.querySelectorAll(".filtro");


    filtros.forEach(filtro => {
        filtro.classList.remove("activo");
    });


    boton.classList.add("activo");


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



/* =========================
   CONSULTAR PRODUCTO
========================= */

function consultarProducto(producto) {

    const mensaje =
        "Hola TecnoFix, quisiera consultar por el producto: "
        + producto;


    const telefono =
        "5491155555555";


    const url =
        "https://wa.me/"
        + telefono
        + "?text="
        + encodeURIComponent(mensaje);


    window.open(url, "_blank");

}



/* =========================
   REPARACIONES
========================= */

function mostrarReparaciones(tipo, boton) {

    const lista =
        document.getElementById(
            "lista-reparaciones"
        );


    const botones =
        document.querySelectorAll(
            ".dispositivo"
        );


    botones.forEach(boton => {

        boton.classList.remove("activo");

    });


    boton.classList.add("activo");


    let reparaciones = [];


    /* CELULAR */

    if (tipo === "celular") {

        reparaciones = [

            [
                "🔧",
                "Cambio de pantalla",
                "Reemplazo de pantalla dañada."
            ],

            [
                "🔋",
                "Cambio de batería",
                "Reemplazo de batería desgastada."
            ],

            [
                "🔌",
                "Conector de carga",
                "Revisión y reparación del puerto."
            ],

            [
                "⚙️",
                "Problemas de software",
                "Diagnóstico y solución del sistema."
            ]

        ];

    }


    /* NOTEBOOK */

    if (tipo === "notebook") {

        reparaciones = [

            [
                "🧹",
                "Limpieza interna",
                "Limpieza y mantenimiento del equipo."
            ],

            [
                "💾",
                "Cambio a SSD",
                "Instalación de almacenamiento SSD."
            ],

            [
                "🧠",
                "Memoria RAM",
                "Instalación o ampliación de memoria."
            ],

            [
                "⚙️",
                "Sistema operativo",
                "Instalación y configuración."
            ]

        ];

    }


    /* TABLET */

    if (tipo === "tablet") {

        reparaciones = [

            [
                "🔧",
                "Cambio de pantalla",
                "Reemplazo de pantalla dañada."
            ],

            [
                "🔋",
                "Cambio de batería",
                "Reemplazo de batería."
            ],

            [
                "🔌",
                "Conector de carga",
                "Reparación del puerto de carga."
            ],

            [
                "⚙️",
                "Software",
                "Diagnóstico y solución de problemas."
            ]

        ];

    }


    lista.innerHTML = "";


    reparaciones.forEach(reparacion => {

        lista.innerHTML += `

            <div class="reparacion">

                <span>
                    ${reparacion[0]}
                </span>

                <div>

                    <h3>
                        ${reparacion[1]}
                    </h3>

                    <p>
                        ${reparacion[2]}
                    </p>

                </div>

            </div>

        `;

    });

}



/* =========================
   IR AL FORMULARIO
========================= */

function irAlFormulario() {

    document
        .getElementById("formulario")
        .scrollIntoView({
            behavior: "smooth"
        });

}



/* =========================
   SOLICITAR PRESUPUESTO
========================= */

function solicitarPresupuesto() {

    irAlFormulario();

}



/* =========================
   FORMULARIO
========================= */

const formulario =
    document.getElementById(
        "formulario-reparacion"
    );


formulario.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const nombre =
            document.getElementById(
                "nombre"
            ).value;


        const dispositivo =
            document.getElementById(
                "dispositivo"
            ).value;


        const modelo =
            document.getElementById(
                "modelo"
            ).value;


        const problema =
            document.getElementById(
                "problema"
            ).value;


        const mensaje =

            "Hola TecnoFix.%0A%0A" +

            "Nombre: "
            + encodeURIComponent(nombre)
            + "%0A" +

            "Dispositivo: "
            + encodeURIComponent(dispositivo)
            + "%0A" +

            "Modelo: "
            + encodeURIComponent(modelo)
            + "%0A" +

            "Problema: "
            + encodeURIComponent(problema);


        const telefono =
            "5491155555555";


        const url =
            "https://wa.me/"
            + telefono
            + "?text="
            + mensaje;


        window.open(
            url,
            "_blank"
        );

    }
);
