const condetenedorHabitaciones = document.getElementById('contenedor-habitaciones')
const contenedorCarrito = document.getElementById('carrito-contenedor')
const botonVaciar = document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById('precioTotal')
const pasajeros = document.getElementById('cantidad')
const cantidadTotal = document.getElementById('cantidadTotal')
const botonComprar = document.getElementById('reservar-carrito')


let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if(localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito ()
    } 
})


botonVaciar.addEventListener('click', () => {
    carrito.length = 0 
    actualizarCarrito ()
})


botonComprar.addEventListener('click',() =>{
    carrito.length = 0
    actualizarCarrito ()
    window.location.href = "../html/orden.html";
})

stockHabitaciones.forEach((habitacion) => {
    const div = document.createElement('div')
    div.classList.add('habitacion')
    div.innerHTML = `
    <img src=${habitacion.img} alt="">
    <h3> ${habitacion.name} </h3>
    <p>  ${habitacion.category}</p>
    <p>  Precio por pax: $${habitacion.price}</p>
    <p> Cantidad de Pasajeros: ${habitacion.pasajeros}</p>
    <button id="agregar${habitacion.id}" class="boton-agregar"> Agregar </button>
    `
    condetenedorHabitaciones.appendChild(div)
    
    const boton = document.getElementById(`agregar${habitacion.id}`)

    boton.addEventListener('click', () => {
        agregarAlcarrito(habitacion.id)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Habitacion agregada',
            showConfirmButton: false,
            timer: 1500
          })
    })
})

const agregarAlcarrito = (habId) => {  
    const existe = carrito.some (hab => hab.id === habId) 
    if (existe){ 
        const hab = carrito.map (hab => {
            if (hab.id === habId){
                hab.pasajeros++
            }
        })
    } else { 
        const item = stockHabitaciones.find((hab) => hab.id === habId) 
        carrito.push(item)
    }
    actualizarCarrito() 
}
const eliminarDelCarrito = (habId) =>{
    const item = carrito.find((hab) =>hab.id === habId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    /*Swal.fire({
        title: 'Estas seguro?',
        text: "Usted va a eliminar la habitacion que selecciono!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, Borrar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Eliminada',
            'Se elimino correctamente',
            'success'
          )
        }
      })*/
    actualizarCarrito ()
}

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""

    carrito.forEach((hab) =>{
        const div = document.createElement('div')
        div.className = ('HabitacionesEnCarrito')
        div.innerHTML = `
        <p>${hab.name}</p>
        <p>${hab.category}</p>
        <p>Precio:$ ${hab.price}</p>
        <p>Cantidad de pax: <span id="cantidad">${hab.pasajeros}</span></p>
        <button onclick="eliminarDelCarrito(${hab.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div)

         localStorage.setItem('carrito', JSON.stringify(carrito))
       // let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    })
    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acc, hab) => acc + hab.pasajeros * hab.price, 0)
}
