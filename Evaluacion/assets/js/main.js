const products = [
  {
    url: "/Evaluacion/assets/img/Zapatilla1.png",
    Name: "Zapatilla 1",
    description:
      "Zapatilla deportiva de alta calidad, perfecta para correr y entrenar. Con suela antideslizante y diseño ergonómico, ofrece comodidad y soporte durante tus actividades físicas.",
    id: 1,
    price: 60000,
    isFavorite: true,
  },
  {
    url: "/Evaluacion/assets/img/Zapatilla2.png",
    Name: "Zapatilla 2",
    description:
      "Zapatilla exclusiva para uso casual, con un diseño moderno y elegante. Fabricada con materiales de primera calidad, proporciona comodidad durante todo el día y un estilo único para tus outfits diarios.",
    id: 2,
    price: 55000,

    isFavorite: true,
  },
  {
    url: "/Evaluacion/assets/img/Zapatilla3.png",
    Name: "Zapatilla 3",
    description:
      "Zapatilla de edición limitada, diseñada para los amantes de la moda urbana. Con detalles exclusivos y una combinación de colores vibrantes, esta zapatilla es perfecta para destacar en cualquier ocasión.",
    id: 3,
    price: 70000,
    isFavorite: true,
  },
  {
    url: "/Evaluacion/assets/img/Zapatilla4.png",
    Name: "Zapatilla 4",
    description:
      "Zapatillas simples y versátiles, ideales para el uso diario. Con un diseño clásico y materiales duraderos, estas zapatillas ofrecen comodidad y estilo para cualquier ocasión.",
    id: 4,
    price: 45000,

    isFavorite: true,
  },
  {
    url: "/Evaluacion/assets/img/Zapatilla5.png",
    Name: "Zapatilla 5",
    description:
      "Zapatillas de edición limitada, diseñadas para los amantes de la moda urbana. Con detalles exclusivos y una combinación de colores vibrantes, esta zapatilla es perfecta para destacar en cualquier ocasión.",
    id: 5,
    price: 65000,
    isFavorite: true,
  },
  {
    url: "/Evaluacion/assets/img/Zapatilla6.png",
    Name: "Zapatilla 6",
    description:
      "Zapatillas deportivas de alta calidad, diseñadas para ofrecer un rendimiento excepcional. Con tecnología avanzada de amortiguación y soporte, estas zapatillas son ideales para corredores y atletas que buscan mejorar su rendimiento.",
    id: 6,
    price: 75000,
    isFavorite: true,
  },
];
// Recuperar favoritos del localStorage o inicializar un array vacío
let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

const carousel = document.getElementById("carouselContent");

function renderProductos() {
  const lista = document.getElementById("listaProductos");
  lista.innerHTML = "";
  lista.innerHTML = "<h3 class='text-center mb-4'>Productos Disponibles</h3>";
  products.forEach((prod) => {
    const div = document.createElement("div");
    div.classList.add("col-12", "col-md-4");

    const esFavorito = favoritos.includes(prod.id);

    div.innerHTML = `
      <div class="card h-100">
        <img src="${prod.url}" class="card-img-top" alt="${prod.Name}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title text-center">${prod.Name}</h5>
          <p class="card-text flex-grow-1">${prod.description}</p>
          <p class="fw-bold mt-auto">$${prod.price.toLocaleString("es-CL")}</p>
          <button class="btn ${esFavorito ? "btn-danger" : "btn-outline-danger"} w-100"
            onclick="toggleFavorito(${prod.id})">
            ${esFavorito ? "Quitar del Carrito ❤️" : "Agregar al Carrito 🤍"}
          </button>
        </div>
      </div>
    `;

    lista.appendChild(div);
  });
}

function renderDestacados() {
  const cont = document.getElementById("carouselContent");
  cont.innerHTML = "";
  cont.innerHTML = "<h3 class='text-center mb-4'>Productos Destacados</h3>";
  const destacados = products.filter((p) => p.isFavorite);

  destacados.forEach((prod, index) => {
    const div = document.createElement("div");
    div.classList.add("carousel-item");
    if (index === 0) div.classList.add("active");

    div.innerHTML = `
      <img src="${prod.url}" class="d-block w-100" alt="${prod.Name}">
      <div class="carousel-caption bg-dark bg-opacity-50 p-2 rounded">
        <h5>${prod.Name}</h5>
      </div>
    `;

    cont.appendChild(div);
  });
}
function toggleFavorito(id) {
  if (favoritos.includes(id)) {
    favoritos = favoritos.filter((f) => f !== id);
    showMessage("Quitado de favoritos", "red");
  } else {
    favoritos.push(id);
    showMessage("Agregado a favoritos", "limegreen");
  }

  localStorage.setItem("favoritos", JSON.stringify(favoritos));

  renderProductos();
  renderDestacados();
  RenderCarrito();
}

const carrito = document.getElementById("listadeCarrito");

function RenderCarrito() {
  carrito.innerHTML = "";
  favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  if (favoritos.length === 0) {
    carrito.innerHTML = "<p class='text-center'>No hay productos en el carrito.</p>";
    return;
  }

  let total = 0;

  favoritos.forEach(id => {
    const prod = products.find(p => p.id === id);
    if (!prod) return;

    total += prod.price;

    const fila = document.createElement("div");
    fila.classList.add("row", "align-items-center", "border-bottom", "py-2");

    fila.innerHTML = `
      <div class="col-2">
        <img src="${prod.url}" class="img-fluid" alt="${prod.Name}">
      </div>
      <div class="col-3">
        <strong>${prod.Name}</strong>
      </div>
      <div class="col-5">
        ${prod.description}
      </div>
      <div class="col-2 text-end fw-bold">
        $${prod.price.toLocaleString('es-CL')}
      </div>
    `;

    carrito.appendChild(fila);
  });

  // TOTAL
  const totalDiv = document.createElement("div");
  totalDiv.classList.add("row", "mt-3");

  totalDiv.innerHTML = `
    <div class="col-12 text-end fs-5 fw-bold">
      Total: $${total.toLocaleString('es-CL')}
    </div>
  `;

  carrito.appendChild(totalDiv);
}

function showMessage(text, color) {
  const toast = $("#toastMsg");

  toast.text(text);
  toast.css("background", color);

  toast.removeClass("hidden").addClass("show");

  setTimeout(() => {
    toast.removeClass("show");
    setTimeout(() => toast.addClass("hidden"), 300);
  }, 1800);
}

$(document).ready(function () {
  $("#carouselDestacados").carousel({
    interval: 2000,
  });
  $(".carousel-control-next").click(function () {
    console.log("Next slide");
  });
  $(".carousel-control-prev").click(function () {
    console.log("Previous slide");
  });
  renderProductos();
  renderDestacados();
  RenderCarrito();
});
