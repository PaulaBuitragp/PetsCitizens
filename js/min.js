  var allData;

d3.dsv(";","../Data/PetsCitizens.csv")
.then( function(data){
  allData = data;
  printData();
})
.catch(function(error){
  //handle error
});


function printData(){
  table = document.getElementById("table");
  for(var i = 1; i < table.rows.length; i++)
  {
    for(var j = 0; j < table.rows[i].cells.length; j++)
    { 
      table.rows[i].cells[0].innerHTML = allData[i-1]["microchip"];
    }
    for(var j = 0; j < table.rows[i].cells.length; j++)
    { 
      table.rows[i].cells[1].innerHTML = allData[i-1]["species"];
    }
    for(var j = 0; j < table.rows[i].cells.length; j++)
    { 
      table.rows[i].cells[2].innerHTML = allData[i-1]["sex"];
    }
    for(var j = 0; j < table.rows[i].cells.length; j++)
    { 
      table.rows[i].cells[3].innerHTML = allData[i-1]["size"];
    }
    for(var j = 0; j < table.rows[i].cells.length; j++)
    { 
      table.rows[i].cells[4].innerHTML = allData[i-1]["potentDangerous"];
    }
    for(var j = 0; j < table.rows[i].cells.length; j++)
    { 
      table.rows[i].cells[5].innerHTML = allData[i-1]["neighborhood"];
    }
  }
  allData[0] = {...allData[0],sex : "MACHO"};
}

function manojoDeArreglo(){
  console.log("Hola");
  var microchip = null;
  microchip = document.getElementById("name").value;
   var species = null;
  species = document.getElementById("mail").value;
   var sex = null;
  sex = document.getElementById("pot").value;
   var size = null;
  size = document.getElementById("sex").value;
   var potentDangerous = null;
  potentDangerous = document.getElementById("si").value;
   var neighborhood = null;
  neighborhood = document.getElementById("sp").value;
  alert(microchip + " " + species + " " + sex + " " + size + " " + potentDangerous + " " + neighborhood )
  console.log(allData[allData.length - 1]);
  allData.push({"microchip" : microchip, "species" : species, "sex" : sex, "size" : size, "potentDangerous" : potentDangerous, "neighborhood" : neighborhood});
  console.log(allData[allData.length - 1]);

}


