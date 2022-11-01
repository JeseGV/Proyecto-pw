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
            imagen = "img/lasagna.jpg"
            break;
 }
 document.getElementById("sip").style.display = "none";
 document.getElementById("generar").style.display= "block";
 
var cadena = "<div class='tar'><div class='card text-bg-dark'><img src='"+imagen+"' class='card-img' alt='imagen de la compra'><div class='card-img-overlay'><h5 class='card-title'>"+producto+"</h5><p class='card-text'>El platillo es tal y comom se muestra en la imagen e igual de bueno</p><p class='card-text'><small>EL precio es: "+precio+"</small></p></div></div></div>"
document.getElementById("generar").innerHTML = cadena;

}

//Posiblemente no funcioned
