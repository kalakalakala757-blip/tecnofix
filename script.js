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
