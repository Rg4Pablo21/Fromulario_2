//Llamado al node de DOOM
let root = document.querySelector("#root");

let div_formulario = document.createElement("div");
div_formulario.className = "div_formulario";

//Lista de datos(String)
let formulario = [
    {nombre:"Login",link:"Componentes/Login/Login.html"},
    {nombre:"Login",link:"Componentes/FormularioDePedido/Formulario.html:"},
    {nombre:"Login",link:"Componentes/FormularioDeBusqueda/FormularioDeBusqueda.html:"},
    {nombre:"Login",link:"Componentes/FormularioDeRegistro/FormularioDeRegistro.html:"},
    {nombre:"Login",link:"Componentes/FormularioDeBusqueda/FormularioDeBusqueda.html:"},
    {nombre:"Login",link:"Componentes/FormularioDePedidoDeCompras/FormularioDeCompras.html:"},
    {nombre:"Login",link:"Componentes/FomularioDeComentariosReseñas/FormularioDeComentariosReseñas.html:"},
    {nombre:"Login",link:"Componentes/FormularioDeContactos/FormularioDeContacto.html:"},

];

formulario.forEach(itemLista => {
    let div_item = document.createElement("a");
    div_item.className = "item";
    div_item.href = itemLista.link;
    div_item.innerText = itemLista.nombre;

    div_formulario.appendChild(div_item);
});

root.appendChild(div_formulario);
