var allData;

d3.dsv(";","../Data/PetsCitizens.csv")
.then( function(data){
  allData = data; 
  nuevasPropiedades();
  crearTabla();
})
.catch(function(error){
//handle error
});

function nuevasPropiedades(){
  for (var i = 0; i < allData.length; i++) {
    allData[i][ "race" ] = "Sin asignar";
    allData[i][ "owner" ] = "Sin asignar";
    allData[i][ "address" ] = "Sin asignar";
    allData[i][ "picture" ] = "Sin asignar";

  }
}

function crearTabla(){
  var contenido1 = document.querySelector('#crearTabla');
  contenido1.innerHTML = '';
  for (var i = 0; i < 500; i++) {
    contenido1.innerHTML += ` 
    <tr> 
    <td>${allData[i]["microchip"]}</td> 
    <td>${allData[i]["species"]}</td> 
    <td>${allData[i]["sex"]}</td> 
    <td>${allData[i]["size"]}</td> 
    <td>${allData[i]["potentDangerous"]}</td> 
    <td>${allData[i]["neighborhood"]}</td> 
    <td>${allData[i]["race"]}</td> 
    <td>${allData[i]["owner"]}</td> 
    <td>${allData[i]["address"]}</td> 
    <td>${allData[i]["picture"]}</td> 
    </tr>  
    `
  }

}

function agregarMascota(){
  var microchip = null;
  microchip = document.getElementById("microchip").value;
  var species = null;
  species = document.getElementById("cf").value;
  var sex = null;
  sex = document.getElementById("hm").value;
  var size = null;
  size = document.getElementById("mpg").value;
  var potentDangerous = null;
  potentDangerous = document.getElementById("pe").value;
  var neighborhood = null;
  neighborhood = document.getElementById("localidad").value;
  var race = null;
  race = document.getElementById("raza").value;
  var owner = null;
  owner = document.getElementById("dueno").value;
  var address = null;
  address = document.getElementById("addres").value;
  var picture = null;
  if((microchip != "") && (species != "--Seleccione--") && (sex != "--Seleccione--") && (size != "--Seleccione--") && (potentDangerous != "--Seleccione--") && (neighborhood != "--Seleccione--") && (race != "--Seleccione--") && (owner != "") && (address != "")){
  allData.unshift({"microchip" : microchip, "species" : species, "sex" : sex, "size" : size, "potentDangerous" : potentDangerous, "neighborhood" : neighborhood, "race" : race, "owner" : owner, "address" : address, "picture" : picture});
  console.log(allData[0]);
  alert("Se ha registrado la mascota con exito");
  }else{
    alert("Por favor complete todos los campos");
  }
}

function editarMascota(){
  var microchip = null;
  microchip = document.getElementById("microchip").value;
  var species1 = null;
  species1 = document.getElementById("cf").value;
  var sex1 = null;
  sex1 = document.getElementById("hm").value;
  var size1 = null;
  size1 = document.getElementById("mpg").value;
  var potentDangerous1 = null;
  potentDangerous1 = document.getElementById("pe").value;
  var neighborhood1 = null;
  neighborhood1 = document.getElementById("localidad").value;
  var race1 = null;
  race1 = document.getElementById("raza").value;
  var owner1 = null;
  owner1 = document.getElementById("dueno").value;
  var address1 = null;
  address1 = document.getElementById("addres").value;
  var picture1 = null;
  if((microchip != "") && (species != "--Seleccione--") && (sex != "--Seleccione--") && (size != "--Seleccione--") && (potentDangerous != "--Seleccione--") && (neighborhood != "--Seleccione--") && (race != "--Seleccione--") && (owner != "") && (address != "")){
    for (var i = 0; i < allData.length; i++) {
    if(allData[i]["microchip"] = microchip){
      console.log(allData[i]);
      allData[i] = {...allData[i],species : species1};  
      allData[i] = {...allData[i],sex : sex1};  
      allData[i] = {...allData[i],size : size1};  
      allData[i] = {...allData[i],potentDangerous : potentDangerous1};  
      allData[i] = {...allData[i],neighborhood : neighborhood1};  
      allData[i] = {...allData[i],race : race1}; 
      allData[i] = {...allData[i],owner : owner1}; 
      allData[i] = {...allData[i],address : address1}; 
      allData[i] = {...allData[i],picture : picture1}; 
      console.log(allData[i]);
      alert("Se ha editado la mascota con exito");
      break; 
    }
  }
  }else{
     alert("Por favor complete todos los campos");
  }
  

}

function mostrarMascota(){

  var microchip = document.getElementById("microchip1").value;
  if(microchip != ""){
    var contenido = document.querySelector('#mostrarAgregar');
    var pet = allData.find(pets=>pets.microchip === microchip);
    console.log(pet);
    contenido.innerHTML = ``;
    contenido.innerHTML += ` 
    <table id = "table" class="table table-dark table-striped table-bordered">
    <thead>
    <tr> 
    <td>Microchip</td> 
    <td>Species</td> 
    <td>Sex</td> 
    <td>Size</td> 
    <td>PotentDangerous</td> 
    <td>Neighborhood</td> 
    <td>Raza</td> 
    <td>Dueño</td> 
    <td>Dirección</td> 
    <td>Foto</td> 
    </tr>  
    </thead>
    <tbody>
    <tr> 
    <td>${pet["microchip"]}</td> 
    <td>${pet["species"]}</td> 
    <td>${pet["sex"]}</td> 
    <td>${pet["size"]}</td> 
    <td>${pet["potentDangerous"]}</td> 
    <td>${pet["neighborhood"]}</td> 
    <td>${pet["race"]}</td> 
    <td>${pet["owner"]}</td> 
    <td>${pet["address"]}</td> 
    <td>${pet["picture"]}</td> 
    </tr>   
    </tbody>
    </table>
    `
  }else{
    alert("Por favor ingrese el microchip de la mascota que desea buscar");
  }
}

