let auto = {
    color: "Rojo",
    marca: "Ferrari",
    modelo: "Ferrari 296 GTS",
    encedido: false,

    prender: function () {
        document.write(`<p>El auto ${this.modelo} esta encendido</p>`);
    },
    apagar: function () {
        document.write(`<p>El auto ${this.modelo} esta apagado</p>`);
    }
}

console.log(auto);
auto.prender();
auto.apagar();