
function producto(precio,producto,imagen){
    return{
        precio,producto,imagen
    }
}



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
    case 1: ob = new producto(150,"lasagna clasica", "img/lasagna.jpg")
            break;
    case 2: ob = new producto(70,"Tiramisú", "img/tiramisu.png")
    break;
    case 3: ob = new producto(120,"Costra de queso con suadero", "img/suadero.jpg")
    break;     
    case 4: ob = new producto(150,"Crostini de salmon", "img/crostini.jpg")
    break;
    case 5: ob = new producto(60,"Pay con relleno de zarzamora", "img/pay.jpg")
    break;
    case 6: ob = new producto(120,"Cacerola de pollo a la jardinera", "img/cacerola.jpg")
    break;
    case 7: ob = new producto(100,"Salmorejo con jamón", "img/salmorejo.jpg")
    break;
}
 document.getElementById("sip").style.display = "none";
 document.getElementById("generar").style.display= "block";
 
var cadena = "<div class='tar'><div class='card text-bg-dark'><img src='"+ob.imagen+
"' class='card-img' alt='imagen de la compra'><div class='card-img-overlay'><h5 class='card-title'>"+ob.producto+
"</h5><p class='card-text'>El platillo es tal y comom se muestra en la imagen e igual de bueno</p><p class='card-text'><small>EL precio es: "+ob.precio+
"</small></p></div></div></div>"


var rad = "<div class='form-check'><input class='form-check-input' type='radio' name='flexRadioDefault' id='flexRadioDefault1'><label class='form-check-label' for='flexRadioDefault1'>  Default radio</label></div><div class='form-check'><input class='form-check-input' type='radio' name='flexRadioDefault' id='flexRadioDefault2' checked><label class='form-check-label' for='flexRadioDefault2'>  Default checked radio</label></div>"
var red2 = "<div class='form-check'><input class='form-check-input' type='radio' name='flexRadioDefault' id='flexRadioDefault1'><label class='form-check-label' for='flexRadioDefault1'>  Default radio</label></div><div class='form-check'><input class='form-check-input' type='radio' name='flexRadioDefault' id='flexRadioDefault2' checked><label class='form-check-label' for='flexRadioDefault2'>  Default checked radio</label></div>"
document.getElementById("generar").innerHTML = cadena + rad;

}

