miStorage =window.localStorage;



var Mipersona=[]
var login=[]

function validar()  
{

    var usuario = document.getElementById("usuario").value
    var contraseña = document.getElementById("contraseña").value



  Mipersona.push({usuario:usuario,contraseña:contraseña})
  
  
  Mipersonajson = JSON.stringify(Mipersona);
  listausaurios= JSON.parse(Mipersonajson)


    miStorage.setItem("user", Mipersonajson)

    console.log(listausaurios)
    

    localStorage.mostrar = usuario;
    var x =localStorage.getItem("mostrar");
    document.getElementById("muestra").innerHTML = x;





if(usuario=="enrique" && contraseña == "123456")

    {
       window.open("html/inicio.html", '_self')

        

      
    }
    else
    if (usuario=="admin" && contraseña == "123456"){

        window.open("html/inicio.html", '_self')

       

    }
    else
    {

        
        alert("verifique sus datos");
    }

    
}


function invitar(){
    window.open("html/inicio.html", '_self')
    
}




