Proyecto de evaluacion (JavaScript + Bootstrap)
📌 Descripción

Este proyecto consiste en una aplicación web que permite visualizar productos, agregarlos a favoritos (simulando un carrito de compras) y mostrar un resumen organizado de los productos seleccionados.

Se utiliza JavaScript puro, Bootstrap para estilos y localStorage para persistencia de datos en el navegador.⚙️ Funcionalidades principales

Visualización de productos en formato de tarjetas

Carrusel de productos destacados

Agregar y quitar productos del carrito

Persistencia de datos con localStorage

Visualización del carrito en formato lista (fila por producto)

Cálculo del precio total de los productos seleccionados

Mensajes visuales (toast) al interactuar

🧱 Estructura del proyecto
/Evaluacion
│── index.html
│── /assets
│   ├── /css
│   ├── /img
│   └── /js
│       └── script.js
🧠 Lógica del sistema
📦 Productos

Los productos están definidos como un arreglo de objetos:

-id

-nombre

-descripción

-precio

-imagen

-estado de destacado

❤️ Favoritos (Carrito)

Se almacenan como un array de IDs en localStorage

Permite:

Agregar productos

Eliminar productos

Se actualiza dinámicamente la interfaz

🔁 Renderizado

El sistema se basa en funciones de render:

renderProductos() → muestra catálogo

renderDestacados() → carrusel

RenderCarrito() → lista del carrito

💾 Persistencia

Se utiliza:

localStorage.getItem("favoritos")
localStorage.setItem("favoritos", JSON.stringify(favoritos))

Esto permite mantener el carrito incluso al recargar la página.

🖼️ Interfaz
📌 Catálogo

Tarjetas con imagen, nombre, descripción y precio

Botón para agregar o quitar del carrito

🎯 Carrusel

Muestra productos destacados automáticamente

🛍️ Carrito

Visualización en filas:

Imagen

Nombre

Descripción

Precio

Total acumulado al final

🛠️ Tecnologías utilizadas

HTML5

CSS3

Bootstrap 5

JavaScript (Vanilla)

jQuery (para interacción y toast)

🚀 Cómo ejecutar

Descargar o clonar el proyecto

Abrir con un servidor local (recomendado)

Ejemplo:

Live Server (VS Code)

Acceder desde el navegador:

http://127.0.0.1:5500 
⚠️ Consideraciones

No se manejan cantidades de productos (1 por selección)

No existe backend (todo es frontend)

Los datos se almacenan solo en el navegador

📈 Posibles mejoras

Agregar control de cantidades

Integrar backend (API REST)

Sistema de autenticación

Uso de framework (React / Vue)

Mejorar arquitectura (separación de lógica y UI)