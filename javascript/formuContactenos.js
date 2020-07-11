miStorage = window.localStorage;

var clientes=[]
var getData= function(){

var nombre = document.getElementById("nombre").value
var apellidos = document.getElementById("apellidos").value
var departamento = document.getElementById("departamento").value
var ciudad = document.getElementById("ciudad").value
var correo = document.getElementById("correo").value
var telefono = document.getElementById("tel").value
var estrato = document.getElementById("estrato").value
var fecha_de_nacimiento= document.getElementById("fecha_n").value
var genero=document.getElementById("radio").value
var estado_civil=document.getElementById("estado_c").value
var direccion=document.getElementById("direccion").value
var direccion_completa=document.getElementById("direccion2").value
var barrio = document.getElementById("barrio").value
var codigo_postal = document.getElementById("cod_postal").value
var comentarios = document.getElementById("fname").value

clientes.push({ Nombre: nombre, Apellidos: apellidos, Departamento: departamento, Ciudad: ciudad, Correo: correo, Telefono: telefono, Estrato: estrato, Fecha_de_nacimiento: fecha_de_nacimiento, genero: genero, Estado_Civil: estado_civil, Direccion: direccion, Direccion_completa: direccion_completa, Barrio: barrio, Codigo_Postal: codigo_postal, Comentarios: comentarios});
alert("cliente agregado completamente");
document.getElementById("miForm").reset();

clientesjson=JSON.stringify(clientes);
listaclientes=JSON.parse(clientesjson);
miStorage.setItem('clientes', clientesjson);

console.log(clientes);

}

var m_datos =function(){
    

}


