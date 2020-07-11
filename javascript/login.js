miStorage = window.localStorage;

function validar()
{
    let usuario = document.getElementById("usuario").value
    let contraseña = document.getElementById("contraseña").value

    if(usuario=="enrique" && contraseña == "123456")

    {
       open("factura.html")
       
        localStorage.getItem("usuario");
        localStorage.getItem("contraseña");
       
      
      console.log("usuario", usuario)
      console.log("contraseña de usuario", contraseña)
      console.log("\n")
      
    }
    else
    if(usuario=="admin" && contraseña == "123456")

    {
        open("factura.html")
       
        localStorage.getItem("usuario");
        localStorage.getItem("contraseña");
       
      
      console.log("usuario: ", usuario)
      console.log("contraseña de usuario: ", contraseña)
      console.log("\n")

    }

    else
    {
        alert("verifique sus datos");
    }

    


}