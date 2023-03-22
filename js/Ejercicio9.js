class Animal {
    #nombre;
    #edad;
    constructor(nombre, edad) {
        this.#nombre = nombre;
        this.#edad = edad;
    }

    get nombre() {
        return this.#nombre;
    }
    set nombre(newNombre) {
        this.#nombre = newNombre;
    }

    get edad() {
        return this.#edad;
    }
    set edad(newEdad) {
        this.#edad = newEdad;
    }

    emitirSonido() {

    }
}

class Perro extends Animal {
    constructor(nombre, edad) {
        super(nombre, edad)
    }

    emitirSonido() {
        super.emitirSonido();
        document.write(`El perro ${this.nombre} hace GUAU GUAU !<br>`);
    }
}

class Gato extends Animal {
    constructor(nombre, edad) {
        super(nombre, edad)
    }

    emitirSonido() {
        super.emitirSonido();
        document.write(`El gato ${this.nombre} hace MIAU MIAU ! <br>`);
    }
}


let perro1 = new Perro("Chicho", 5);
let gato1 = new Gato("Michi", 3);

perro1.emitirSonido();
gato1.emitirSonido();
