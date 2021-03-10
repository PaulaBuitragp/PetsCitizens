 var allData;

//d3.dsv(";","../Data/PetsCitizens.csv")
//.then( function(data){
  //allData = data;
  //printData();
  //manojoDeArreglo();
//})
//.catch(function(error){
  //handle error
//});

function manojoDeArreglo(){
  console.log("Hola");
  var microchip = null;
  microchip = document.getElementById("Microchip").value;
   var species = null;
  species = document.getElementById("cf").value;
   var sex = null;
  sex = document.getElementById("hm").value;
   var size = null;
  size = document.getElementById("pe").value;
   var potentDangerous = null;
  potentDangerous = document.getElementById("mpg").value;
   var neighborhood = null;
  neighborhood = document.getElementById("Direccion").value;

  console.log(allData[allData.length - 1]);
  allData.push({"microchip" : microchip, "species" : species, "sex" : sex, "size" : size, "potentDangerous" : potentDangerous, "neighborhood" : neighborhood});
  console.log(allData[allData.length - 1]);

}