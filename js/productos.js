/* const productos = [ 
    {   
        id: 1,
        nombre: "Brisa Caribeña Resort",
        img: "imagenes\Hotel-PuntaCana.jpg",
        precio: 200,
    },
    {
        id: 2,
        nombre: "Encanto do Rio Resort",
        img: "imagenes\Hotel-Rio.jpg",
        precio: 300,
    },
    {
        id: 3,
        nombre: "Pyramids Grand View",
        img: "imagenes\Giza.jpg",
        precio: 400,
    },
    {
        id: 4,
        nombre: "Hanami Ryokan Suites",
        img: "imagenes\Hotel-Japon.jpg",
        precio: 600,
    },
    {   
        id: 5,
        nombre: "Punta Cana",
        img: "imagenes\Republica-Dominicana.jpg",
        precio: 200,
    },
    {
        id: 6,
        nombre: "Rio de Janeiro",
        img: "imagenes\Brasil.jpg",
        precio: 300,
    },
    {
        id: 7,
        nombre: "El Cairo",
        img: "imagenes\Giza.jpg",
        precio: 400,
    },
    {
        id: 8,
        nombre: "Japon",
        img: "imagenes\Japon.jpg",
        precio: 600,
    },        
    {   
        id: 9,
        nombre: "Punta Cana",
        img: "imagenes\paquete-puntacana.jpg",
        precio: 200,
    },
    {
        id: 10,
        nombre: "Rio de Janeiro",
        img: "imagenes\paquete-brasil.jpg",
        precio: 300,
    },
    {
        id: 11,
        nombre: "El Cairo",
        img: "imagenes\paquete-egipto.jpg",
        precio: 400,
    },
    {
        id: 12,
        nombre: "Japon",
        img: "imagenes\paquete-japon.jpg",
        precio: 600,
    },        
    {   
        id: 13,
        nombre: "Autos Medianos",
        img: "imagenes\auto-mediano.jpg",
        precio: 200,
    },
    {
        id: 14,
        nombre: "Autos Lujosos",
        img: "imagenes\auto-lujoso.jpg",
        precio: 300,
    },
    {
        id: 15,
        nombre: "Autos Economicos",
        img: "imagenes\auto-economico.jpg",
        precio: 400,
    },        
]
const btn =  document.querySelector(".btn")
let carrito = [];
productos.forEach(producto => { 
    const nombre = document.createElement("h1")
    const img = document.createElement("img")
    const precio = document.createElement("button")
    const btn = document.createElement("button")

    document.body.appendChild(nombre)
    document.body.appendChild(img)
    document.body.appendChild(precio)
    document.body.appendChild(btn)
});
const botones = document.querySelectorAll("button")
botones.forEach(btn => {
    btn.addEventListener("click", function() {
        const objetoId = btn.getAttribute("data-id")
        const res = objetos.filter(obj => obj.id == objetoId)[0]
        const filtro = carrito.filter(productos => productos.id == objetoId)
        if(filtro.length == 0){
            res.cantidad = 1
            carrito.push(res)
        }else{
            res.cantidad += 1
        }
        sumaCarrito()
        console.log(carrito)
    
    })
})
const total = document.querySelector(".total")
const carritoElementos = document.querySelectorAll(".carrito")

function sumaCarrito(){
    let total = carrito.reduce((acumulador, productos) => {return acumulador + productos.precio * productos.cantidad}, 0)
    carritoElementos.innerHTML = ""
    carrito.forEach(element => {
        const p = document.createElement("p")
        p.textContent = `${element.nombre} x ${element.cantidad}`
        carritoElementos.appendChild(p)
    })
    totalCarro.textContent = total
}
btn.addEventListener("click", sumaCarrito())
console.log(carrito)
         */
// Leer el carrito existente o crear uno nuevo
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Función para agregar al carrito
function agregarAlCarrito(idProducto) {
    const producto = productos.find(p => p.id === idProducto);
    if (!producto) return;

    const index = carrito.findIndex(item => item.id === idProducto);
    if (index >= 0) {
        carrito[index].cantidad += 1;
    } else {
        carrito.push({...producto, cantidad: 1});
    }

    localStorage.setItem("carrito", JSON.stringify(carrito)); // guardar carrito
    alert(`${producto.nombre} agregado al carrito.`);
}

const productos = [ 
    { id: 1, nombre: "Brisa Caribeña Resort", img: "imagenes/Hotel-PuntaCana.jpg", precio: 200 },
    { id: 2, nombre: "Encanto do Rio Resort", img: "imagenes/Hotel-Rio.jpg", precio: 300 },
    { id: 3, nombre: "Pyramids Grand View", img: "imagenes/Hotel-Egipto.jpg", precio: 400 },
    { id: 4, nombre: "Hanami Ryokan Suites", img: "imagenes/Hotel-Japon.jpg", precio: 600 },
    { id: 5, nombre: "Punta Cana", img: "imagenes/Republica-Dominicana.jpg", precio: 200 },
    { id: 6, nombre: "Rio de Janeiro", img: "imagenes/Brasil.jpg", precio: 300 },
    { id: 7, nombre: "El Cairo", img: "imagenes/Giza.jpg", precio: 400 },
    { id: 8, nombre: "Japón", img: "imagenes/Japon.jpg", precio: 600 },
    { id: 9, nombre: "Paquete Punta Cana", img: "imagenes/paquete-puntacana.jpg", precio: 200 },
    { id: 10, nombre: "Paquete Río", img: "imagenes/paquete-brasil.jpg", precio: 300 },
    { id: 11, nombre: "Paquete El Cairo", img: "imagenes/paquete-egipto.jpg", precio: 400 },
    { id: 12, nombre: "Paquete Japón", img: "imagenes/paquete-japon.jpg", precio: 600 },
    { id: 13, nombre: "Auto Mediano", img: "imagenes/auto-mediano.jpg", precio: 200 },
    { id: 14, nombre: "Auto Lujoso", img: "imagenes/auto-lujoso.jpg", precio: 300 },
    { id: 15, nombre: "Auto Económico", img: "imagenes/auto-economico.jpg", precio: 400 }
];


function agregarAlCarrito(id) {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const producto = productos.find(p => p.id === id);
    if (!producto) return;

    const existe = carrito.find(p => p.id === id);
    if (existe) {
        existe.cantidad += 1;
    } else {
        carrito.push({...producto, cantidad: 1});
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert(`${producto.nombre} fue agregado al carrito.`);
}
