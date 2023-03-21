class Libro {
    #isbn;
    #titulo;
    #autor;
    #numeroPaginas;
    constructor(isbn, titulo, autor, numeroPaginas) {
        this.#isbn = isbn;
        this.#titulo = titulo;
        this.#autor = autor;
        this.#numeroPaginas = numeroPaginas;
    }

    get isbn() {
        return this.#isbn;
    }
    set isbn(newIsbn) {
        this.#isbn = newIsbn;
    }

    get titulo() {
        return this.#titulo;
    }
    set titulo(newTitulo) {
        this.#titulo = newTitulo;
    }

    get autor() {
        return this.#autor;
    }
    set autor(newAutor) {
        this.#autor = newAutor;
    }

    get numeroPaginas() {
        return this.#numeroPaginas;
    }
    set numeroPaginas(newNumeroPaginas) {
        this.#numeroPaginas = newNumeroPaginas;
    }

    mostrar() {
        document.write(`El libro "${this.#titulo}" con ISBN ${this.#isbn} creado por el autor ${this.#autor} tiene ${this.#numeroPaginas} páginas <br>`);
    }
}

let libro1 = new Libro("12323232", "El principito", "Antoine de Saint-Exupéry", 120);

let libro2 = new Libro("52736732", "Game of Thrones", "George R. R. Martin", 386);

libro1.mostrar();
libro2.mostrar();

if (libro1.numeroPaginas > libro2.numeroPaginas) {
    document.write(`El libro ${libro1.titulo} tiene mas paginas que ${libro2.titulo}`);
} else if (libro1.numeroPaginas < libro2.numeroPaginas) {
    document.write(`El libro ${libro2.titulo} tiene mas paginas que ${libro1.titulo}`);
} else {
    document.write("Los dos libros tienen el mismo número de páginas.");
}

