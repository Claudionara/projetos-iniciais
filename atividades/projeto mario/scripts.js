
const form = document.querySelector(".formulario-editar")
const sombra = document.querySelector(".mascara-formulario")



function enviarFormulario() {

    
    form.style.left ="1130px"
    form.style.transform = "translateX(-50%)"
    sombra.style.visibility = "visible"
    
}


function retorno() {

    
    form.style.left ="-1130px"
    form.style.transform = "translateX(0)"
    sombra.style.visibility = "hidden"
    
}