
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
    case 2: precio = 70;
            producto = "Tiramisú"
            imagen = "img/tiramisu.jpg"  
            break;
    case 3: precio = 120;
            producto = "Costra de queso con suadero"
            imagen = "img/suadero.jpg"  
            break;      
    case 4: precio = 150;
            producto = "Crostini de Salmon"
            imagen = "img/crostini.jpg"  
            break;
    case 5: precio = 60;
            producto = "Pay con relleno de zarzamora"
            imagen = "img/pay.jpg" 
            break;
    case 6: precio = 120;
            producto = "Cacerola de pollo a la jardinera"
            imagen = "img/cacerola.jpg"  
            break;
    case 7: precio = 100;
            producto = "Salmorejo con jamón"
            imagen = "img/salmorejo.jpg"  
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

