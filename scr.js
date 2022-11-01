//Variables
var precio = 0;
var producto = "";


function ver() {
    if(document.getElementById("floatingInput").value == "hola@tec2.mx"){
        if(document.getElementById("floatingPassword").value == "1234"){
            open("inicio.html")
        }
    }
}

function pedido(p) {
 switch(p){
    case 1: precio = 150;
            producto = "lasagna clasica";
            break;
 }
 var cadena = "<p>Compraste: "+producto+"</p>";
 document.getElementById("compra").innerHTML = cadena;
 open("compra.html")
}