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
              table.rows[i].cells[0].innerHTML = allData[i-1][j];
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
console.log(allData[0].sex);
allData[0] = {...allData[0],sex : "MACHO"};
console.log(allData[0].sex);
}
