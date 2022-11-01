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
            producto = "lasagna clasica";
            imagen = "https://png.pngtree.com/png-vector/20200916/ourlarge/pngtree-set-of-fast-food-meals-flat-design-illustration-png-image_2346970.jpg"
            break;
 }
 prompt(precio,producto);
 //open("compra.html")
 open("compra.html")
 
}

//Posiblemente no funcioned
function act(){
    var sii = "<div class='card mb-3' style='max-width: 540px;'><div class='row g-0'><div class='col-md-4'><img src='https://png.pngtree.com/png-vector/20200916/ourlarge/pngtree-set-of-fast-food-meals-flat-design-illustration-png-image_2346970.jpg' class='img-fluid rounded-start'></div><div class='col-md-8'><div class='card-body'><h5 class='card-title'>"+producto+"</h5><p class='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p><p class='card-text'><small class='text-muted'>Last updated 3 mins ago</small></p></div></div></div></div>"
    document.getElementById("compra").innerHTML = sii
}