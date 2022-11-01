//Variables
var precio = 0;
var producto = "";
var imagen = "";



function ver() {
    if(document.getElementById("floatingInput").value == "hola@tec2.mx"){
        if(document.getElementById("floatingPassword").value == "1234"){
            window.open("inicio.html")
        } else{
            (document.getElementById("floatingPassword").value != "1234")
            alert("error, intente de nuevo");
        }
    }else{ (document.getElementById("floatingInput").value != "hola@tec2.mx")
        alert("error, intente de nuevo");
        }
}
function pedido(p) {
 switch(p){
    case 1: precio = 150;
            producto = "lasagna clasica"
            break;
 }
 document.getElementById("sip").style.display = "none";
 Document.getElementById("generar").style.display= "block";
 
var cadena = "<p>precio: "+precio+" producto: "+producto+"</p>"

}

//Posiblemente no funcioned
