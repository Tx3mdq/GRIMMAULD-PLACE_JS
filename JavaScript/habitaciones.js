let stockHabitaciones =[
    {
        id:"1",
        category: "Desayuno Continental",
        img: '../img/riu2.png',
        name: "Room Superior",
        price:  15000 ,
        pasajeros: "1"
    },
    {
        id:"2",
        category: "Desayuno Buffet",
        img: '../img/riu4.png',
        name: "Room Superior",
        price:  18000,
        pasajeros: "1"
        
    },
    {
        id:"3",
        category: "Desayuno Buffet Americano",
        img: '../img/riu5.png',
        name: "Room Superior",
        price:  21000,
        pasajeros: "1"
    },
    {
        id:"4",
        category: "Desayuno para Celiacos",
        img: '../img/riu6.png',
        name: "Room Superior",
        price:  25000,
        pasajeros: "1"
    },
    {
        id:"5",
        category: "Desayuno Continental",
        img: '../img/riu1.png',
        name: "Room Lujo",
        price:  18000 ,
        pasajeros: "1"
    },
    {
        id:"6",
        category: "Desayuno Buffet",
        img: '../img/riu7.png',
        name: "Room Lujor",
        price:  22000,
        pasajeros: "1"
        
    },
    {
        id:"7",
        category: "Desayuno Buffet Americano",
        img: '../img/riu8.png',
        name: "Room Lujo",
        price:  24000,
        pasajeros: "1"
    },
    {
        id:"8",
        category: "Desayuno para Celiacos",
        img: '../img/riu9.png',
        name: "Room Lujo",
        price:  25000,
        pasajeros: "1"
    },
    {
        id:"9",
        category: "Desayuno Continental",
        img: '../img/riu3.png',
        name: "Suite Superior",
        price:  21000 ,
        pasajeros: "1"
    },
    {
        id:"10",
        category: "Desayuno Buffet",
        img: '../img/riu10.png',
        name: "Suite Superior",
        price:  24000,
        pasajeros: "1"
        
    },
    {
        id:"11",
        category: "Desayuno Buffet Americano",
        img: '../img/riu11.png',
        name: "Suite Superior",
        price:  31000,
        pasajeros: "1"
    },
    {
        id:"12",
        category: "Desayuno para Celiacos",
        img: '../img/riu12.png',
        name: "Suite Superior",
        price:  35000,
        pasajeros: "1"
    },
    {
        id:"13",
        category: "Desayuno Continental",
        img: '../img/riu13.png',
        name: "Presidencial",
        price:  45000 ,
        pasajeros: "1"
    },
    {
        id:"14",
        category: "Desayuno Buffet",
        img: '../img/riu14.png',
        name: "Presidencial",
        price:  48000,
        pasajeros: "1"
        
    },
    {
        id:"15",
        category: "Desayuno Buffet Americano",
        img: '../img/riu15.png',
        name: "Presidencial",
        price:  51000,
        pasajeros: "1"
    },
    {
        id:"16",
        category: "Desayuno para Celiacos",
        img: '../img/riu16.png',
        name: "Presidencial",
        price:  55000,
        pasajeros: "1"
    },
]


let entradasInvalidas = 0;

function filtrarPorID(hab) {
  if ('id' in hab && typeof(hab.id) === 'text' && !isNaN(hab.id)) {
    return true;
  } else {
    entradasInvalidas++;
    return false;
  }
}

let stockHabitacionesID = stockHabitaciones.filter(filtrarPorID);

