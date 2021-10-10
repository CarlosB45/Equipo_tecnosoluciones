function abrir(){
   document.getElementById('vent').style.display="block";
}

function cerrar(){
   document.getElementById('vent').style.display="none";
}

function recibir(){
   var valor = document.getElementById("rol_sis").value;
   if(valor != "" ){
      alert("Se ha hecho un cambio en el rol del sistema");
   }else{
      alert("Ningun cambio en el rol del sistema");
   }
} 
