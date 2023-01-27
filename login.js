$("#formulario").validate({
rules:{
    nombre:{
        required: true,
        minlength: 3,
        maxlength:25,  
    },
    contraseña:{
        required: true,
        minlength: 3,
        maxlength:25, 
    }
}

})

let boton = document.getElementById("boton");

boton.addEventListener("click",()=>{
    if($("#formulario").valid()== false)  {
        return;
    }

let user = document.getElementById("usuario").value;
let pass = document.getElementById("Password1").value;

if(user == "alan" && pass == "perro"){

    window.location= "galeria.html";
}

let nombre = document.getElementById("usuario").val();
let contraseña = document.getElementById("Password1").val();
});


