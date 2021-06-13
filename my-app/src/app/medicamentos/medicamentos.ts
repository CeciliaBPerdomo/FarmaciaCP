export class Medicamentos {
    id: number;
    imagen: string;
    nombre: string;
    descripcion: string;
    precio: number;
    cantidad: number

    constructor(){
        this.id = 0;
        this.imagen = "";
        this.nombre = "";
        this.descripcion = "";
        this.precio = 0;
        this.cantidad = 0;
    }
}
