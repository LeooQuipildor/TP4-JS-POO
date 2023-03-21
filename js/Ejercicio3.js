class Rectangulo {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
        this.perimetro = 0;
        this.area = 0;
    }

    mostrar() {
        document.write(`<br>El alto del rectangulo es: ${this.alto} <br>`);
        document.write(`El ancho del rectangulo es: ${this.ancho} <br>`);
        document.write(`El perimetro del rectangulo es: ${this.perimetro} <br>`);
        document.write(`El area del rectangulo es: ${this.area} <br>`);
    }

    modificarAlto(nuevoAlto) {
        this.alto = nuevoAlto;
        this.perimetro = (2 * this.alto) + (2 * this.ancho);
        this.area = (this.alto * this.ancho);
    }

    modificarAncho(nuevoAncho) {
        this.ancho = nuevoAncho;
        this.perimetro = (2 * this.alto) + (2 * this.ancho);
        this.area = (this.alto * this.ancho);
    }

    calcularPerimetro() {
        this.perimetro = (2 * this.alto) + (2 * this.ancho);
    }

    calcularArea() {
        this.area = (this.alto * this.ancho);
    }
}

console.log(Rectangulo);

let rectangulo1 = new Rectangulo(5, 10);
rectangulo1.calcularPerimetro();
rectangulo1.calcularArea();

rectangulo1.mostrar();

rectangulo1.modificarAlto(2);
rectangulo1.mostrar();

