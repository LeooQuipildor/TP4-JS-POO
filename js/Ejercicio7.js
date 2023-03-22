class Contacto {
    #nombre;
    #telefono;
    constructor(nombre, telefono) {
        this.#nombre = nombre;
        this.#telefono = telefono;
    }

    get nombre() {
        return this.#nombre;
    }
    set nombre(newNombre) {
        this.#nombre = newNombre;
    }

    get telefono() {
        return this.#telefono;
    }
    set telefono(newTelefono) {
        this.#telefono = newTelefono;
    }
}

class AgendaDeContactos {
    constructor(tamaño = 10) {
        this.tamaño = tamaño;
        this.contactos = [];
    }

    aniadirContacto(contacto) {
        if (this.contactos.length >= this.tamaño) {
            alert(`La agenda esta llena, no se puede añadir mas contactos`);
        }
        else {
            this.contactos.push(contacto);
        }
    }

    existeContacto(contacto) {
        return this.contactos.some(c => c.equals(contacto));
    }

    listarContactos() {
        console.log("Contactos:");
        this.contactos.forEach(c => console.log(`${c.nombre}: ${c.telefono}`));
    }

    buscarContacto(nombre) {
        const contacto = this.contactos.find(c => c.nombre === nombre);
        if (contacto) {
            console.log(`${contacto.nombre}: ${contacto.telefono}`);
        } else {
            console.log(`No se encontró el contacto ${nombre}`);
        }
    }

    eliminarContacto(contacto) {
        const index = this.contactos.findIndex(c => c.equals(contacto));
        if (index !== -1) {
            this.contactos.splice(index, 1);
            console.log(`Se eliminó el contacto ${contacto.nombre}`);
        } else {
            console.log(`No se encontró el contacto ${contacto.nombre}`);
        }
    }

    agendaLlena() {
        return this.contactos.length >= this.tamaño;
    }

    huecosLibres() {
        return this.tamaño - this.contactos.length;
    }


}

const agenda = new AgendaDeContactos();
agenda.aniadirContacto(new Contacto("Juan", "123456789"));
agenda.listarContactos(); // muestra el contacto Juan
agenda.buscarContacto("Juan"); // muestra el teléfono 123456789
agenda.eliminarContactos(new Contacto("Juan", "123456789")); // muestra "Se eliminó el contacto Juan"
