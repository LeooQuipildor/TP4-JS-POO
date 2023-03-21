let cuenta = {
    titular: "Alex",
    saldo: 0,

    ingresar: function () {
        const nuevoSaldo = prompt(`Ingresar nuevo saldo`);
        this.saldo = parseFloat (nuevoSaldo);
    },
    extraer: function () {
        const extraccion = prompt(`Cuanto dinero desea extraer?`);
        if (parseFloat (extraccion) <= this.saldo) {
            this.saldo -= parseFloat (extraccion);
        }
        else {
            alert(`No tiene sufiente saldo disponible para realizar la extraccion`);
        }
    },
    informar: function(){
        alert(`Titular: ${this.titular} /// Saldo: ${this.saldo}`);
    }
}

cuenta.informar();
cuenta.ingresar();
cuenta.extraer();
cuenta.informar();
