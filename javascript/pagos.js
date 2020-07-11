miStorage = window.localStorage;

function multiplicacion()
{
    
    var b = document.getElementById("cantidad").value;
    var  europa = 1500000*parseInt(b);
    var  asia = 2000000*parseInt(b);
    var  norte = 1250000*parseInt(b);
    var  sur = 1000000*parseInt(b);

    document.getElementById("totalE").innerHTML ="total en europa "+europa
    document.getElementById("totalA").innerHTML ="total en asia: "+asia
    document.getElementById("totalN").innerHTML = "total en norteamerica: "+norte
    document.getElementById("totalS").innerHTML = "total en sudamerica: " +sur
    
}
    var persona=[]

    function enviar(){
        

        var Nombres = document.getElementById("Nombres").value
        var Apellidos = document.getElementById("Apellidos").value
        var cantidad = document.getElementById("cantidad").value
        var pais = document.getElementById("pais").value
        var comentario = document.getElementById("comentario").value
        var escojer_continente = document.getElementById("escojer").value
        
        

        persona.push({Nombres: Nombres, Apellidos: Apellidos, cantidad:cantidad, escojer_continente:escojer_continente, pais:pais, comentario:comentario});
        alert("enviado, gracias.");
        document.getElementById("miForm").reset();

        personajson=JSON.stringify(persona);
        listapersona=JSON.parse(personajson)

        miStorage.setItem("user", personajson)

        console.log(personajson)
        console.log(listapersona)

    }



