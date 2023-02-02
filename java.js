function compra() {
    producto = prompt("bienvenido a tienda purushana\npor favor selecciona el producto que mas te guste\n1: jabones\n2: lufas\n3: balsamo labial\n4: no desee comprar"
    )
    if (producto === "1") {
        alert("elegiste jabones")
    } else if (producto === "2") {
        alert("elegiste lufas")
    } else if (producto === "3") {
        alert("elegiste balsamo labial")
    } else if (producto === "4") {
        alert("NOS ENCANTO VERTE!!!")
    } else {
        alert("no es una opcion correcta")
    }
}

function precio() {
    if (producto === "1") {
        alert("el precio de tu compra es de $" + jabones)
    } else if (producto === "2") {
        alert("el precio de tu compra es de $" + lufas)
    } else if (producto === "3") {
        alert("el precio de tu compra es de $ " + balsamo)
    } else {
    }
}

    let producto
    let jabones = 200
    let lufas = 500
    let balsamo = 200
    let seguirComprando = true
    compra()
    precio()


alert("gracias por comprar en tienda purushana")