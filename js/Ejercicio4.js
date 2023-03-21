class Producto {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrar() {
        document.write(`<br>Codigo: ${this.codigo} <br>`);
        document.write(`Nombre: ${this.nombre}<br>`);
        document.write(`Precio: ${this.precio}<br>`);
    }
}

const arrayObjetos = [];

let producto1 = new Producto(1100, "Fideos", 160);
arrayObjetos.push(producto1);

let producto2 = new Producto(1200, "Patitas de pollo", 390);
arrayObjetos.push(producto2);

let producto3 = new Producto(1300, "Galletas", 70);
arrayObjetos.push(producto3);

arrayObjetos[0].mostrar();
arrayObjetos[1].mostrar();
arrayObjetos[2].mostrar();

console.log(arrayObjetos)