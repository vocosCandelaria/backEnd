class Usuario {
    constructor (nombre, apellido, libros=[], mascotas=[]){
        this.nombre=nombre;
        this.apellido=apellido;
        this.libros=libros;
        this.mascotas=mascotas;
    }
    getFullName(){
        console.log(`Nombre Completo: ${this.nombre} ${this.apellido}.`)
    }
    addMascotas(mascota){
        let todas=this.mascotas;
        console.log(this.mascotas.push(mascota));
        return todas;
    }
    countMascotas(){
       let cantidad= this.mascotas.length;
       return 'cantidad de mascotas: '+cantidad;
    }
    addBook(titulo,autor){
        this.libros.push({titulo,autor});
    }
    getBookNames(){
        const titulosLibros=[];
        this.libros.forEach((item)=>titulosLibros.push(item.titulo));
        return titulosLibros
    }
}

const usuario1= new Usuario (
    'Cande', 
    'Vocos',
    [{ titulo:'Harry Potter', autor:'Merlino' }],
    ["gato","perro"]
     );

usuario1.getFullName();
console.log(usuario1.countMascotas());
console.log(usuario1.addMascotas('loro'));
console.log(usuario1.countMascotas());
usuario1.addBook('El senior de los anillos', 'Tu mama');
console.log(usuario1.getBookNames());