//crear un proyecto que genere mil numeros aleatorios en el rango del 1 al 20

// let obj={};
// const random=()=>parseInt(Math.random()*20)+1;
// for(let i=0; i<1000; i++){
//     const clave=random()
//     if(!obj[clave])// si el numero ramdon es distinto, ponelo en la posicion siguiente.
//         obj[clave]=0; // por medio de obj[4] lo que hago es entrar al contenido de esa posicion, es decir a su valor 
//     obj[clave]++;
// }
// console.log(obj)

//Crear un objeto cuyas claves sean los números salidos y el valor asociado a cada clave sera la cantidad de veces que salio dicho numero.
//1=5 veces , 2=180 veces, 3=400 veces.
//*********************************************************************/

//Los nombres de los productos en un string sera separados por comas.
// precio total, precio promedio, mayo y menos. 
//Crear un objeto con los datos del 1 al 5

let arrayProductos = [
    {id: 1, nombre:"Escuadra", precio: 5.00},
    {id: 2, nombre:"Plasticola", precio: 10.00},
    {id: 3, nombre:"Goma", precio: 5.00},
    {id: 4, nombre:"Lapicera", precio: 15.00},
    {id: 5, nombre:"Cartuchera", precio: 20.00},
    {id: 6, nombre:"Fibron", precio: 25.00},
    {id: 7, nombre:"Lapiz", precio: 30.00}
]
//recorre el array y por medio de un puntero señalo la propiedad que quiero ver, en este caso el nombre. con el .join(","), le digo que va a estar unido por comas
const getNombre =()=> 
    arrayProductos.map(item=>item.nombre).join(", ");

//
const getPrecioTotal=()=>{
    let total=0;
    arrayProductos.map(item=>total+=item.precio)
    return total
}
const getPrecioPromedio=()=>getPrecioTotal()/arrayProductos.length

const getMenorPrecio=()=>{
    let min=arrayProductos[0].precio
    let nombre= arrayProductos[0].nombre
    for (let producto of arrayProductos){
        if (producto.precio<min){
            min=producto.precio
        nombre=producto.nombre
        }
    }
    return nombre
}
const getMayorPrecio=()=>{
    let max=arrayProductos[0].precio;
    let nombreMayor=arrayProductos[0].nombre;
    for(let producto of arrayProductos){
        if(producto.precio>max){
            max=producto.precio
            nombreMayor=producto.nombre
        }
    }
    return nombreMayor;
}
 let mostrar = {
    nombre: getNombre(),
    total: getPrecioTotal(),
    promedio:getPrecioPromedio(),
    menorPrecio:getMenorPrecio(),
    MayorPrecio: getMayorPrecio()
 }

 console.log(mostrar)
