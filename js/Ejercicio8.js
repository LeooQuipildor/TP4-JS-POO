class Persona {
    #nombre;
    #edad;
    #profesion;
    constructor(nombre, edad, profesion) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#profesion = profesion;
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

    get profesion() {
        return this.#profesion;
    }
    set profesion(newProfesion) {
        this.#profesion = newProfesion;
    }

    saludar() {
        document.write(`Buenos dias ${this.#profesion} ${this.#nombre} <br>`);
    }
    despedirse() {
        document.write(`Hasta luego ${this.#nombre}!<br>`);
    }
}

let persona1 = new Persona("Bianca", 25, "Ingeniera");
persona1.saludar();
persona1.despedirse();

let persona2 = new Persona("Lucas", 30, "Arquitecto");
persona2.saludar();
persona2.despedirse();