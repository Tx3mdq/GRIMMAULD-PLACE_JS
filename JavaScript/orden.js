let carrito;
if(JSON.parse(localStorage.getItem('carrito'))){
    carrito = JSON.parse(localStorage.getItem('carrito'))
} else {
    localStorage.setItem('carrito', JSON.stringify([]))
    carrito = JSON.parse(localStorage.getItem('carrito'))
}

const totalCarrito = () => {
    // return carrito.reduce((acc, prod) => acc + hab.price * hab.pasajeros, 0)
 //}
     let total=0
 
     for (const objeto of carrito){
        // alert(objeto.category)
         total = total + objeto.price
     }
 }
const body = document.getElementById('carritoMuestra');
if(carrito.length == 0){
    const texto = `
        <div class='cartContainer'>
            <h1 class='txtCarrito'>No hay productos en el carrito</h1>
            <a class='btnVolver' href='../html/reservas.html'>
                <button>VOLVER</button>
            <a class='btnVolver' href='../html/compra.html'>
                <button>Siguiente</button>

            </a>
        </div>`;    
    body.innerHTML += texto;
} else {
    const titulo = `
        <div class='cartContainer'>
            <h1 class='txtCarrito'>Carrito de compras</h1>
        </div>`;
    body.innerHTML += titulo;
    const table = `   
            <div class='btn-container'>
            <a class='btnVolver' href='../html/reservas.html'>
                <button>VOLVER</button>
            <a class='btnVolver' href='../html/compra.html'>
                <button class='btnTerminar'>TERMINAR COMPRA</button></a>
            </div>
        </div>`;       
body.innerHTML += table;
    const tbody = document.getElementById('tbody')
    for (let i = 0; i < carrito.length; i++) {
        const element = carrito[i];
        const {id, name, img, price, category, pasajeros} = element
        const cart = `
        
            <tr id=${id}>
                <img class='imgProdCart' src=${img} alt='foto del producto'>
                <h2>${name}</h2>
                <p>Servicio desayuno: ${category}</p>
                <p>Cantidad de Pasajeros: ${pasajeros}</p>
                <p>Total Habitacion: $${(pasajeros * price).toLocaleString()}</p>
            </tr>`
           
            tbody.innerHTML += cart 
    }
}


