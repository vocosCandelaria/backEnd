const socket = io.connect();

function enviarMensaje(e) {
  e.preventDefault();
  const email = document.getElementById("email");
  const mensaje = document.getElementById("mensaje");

  if (!email.value || !mensaje.value) {
    alert("Debe completar los campos");
    return false;
  }

  socket.emit("mensajeNuevo", { email: email.value, text: mensaje.value });
  mensaje.value = "";
  return false;
}

document
  .getElementById("messagesFormBtn")
  .addEventListener("click", enviarMensaje);

socket.on("mensajes", (mensajes) => {
  let mensajesHtml = mensajes
    .map(
      (mensaje) =>
        `<span>${mensaje.timestamp}<b> ${mensaje.email}: </b>${mensaje.text}</span>`
    )
    .join("<br>");

  document.getElementById("listaMensajes").innerHTML = mensajesHtml;
});

const createProductTable = async (products) => {
  const template = await fetch("views/products-table.hbs");
  const templateText = await template.text();
  const templateCompiled = Handlebars.compile(templateText);
  return templateCompiled({ products });
};

const addProduct = () => {
  const title = document.getElementById("title");
  const price = document.getElementById("price");
  const thumbnail = document.getElementById("thumbnail");

  if (!title.value || !price.value) {
    alert("Debe completar los campos");
  }

  socket.emit("add-product", {
    title: title.value,
    price: price.value,
    thumbnail: thumbnail.value,
  });
  title.value = "";
  price.value = "";
  thumbnail.value = "";
};

document.getElementById("add-product").addEventListener("click", addProduct);

socket.on("products", async (products) => {
  const template = await createProductTable(products);
  document.getElementById("products").innerHTML = template;
});
