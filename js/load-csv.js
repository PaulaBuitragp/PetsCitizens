load-csv.js

//loading a CSV using D3
d3.dsv(";","../data/PetsCitizens.csv")
  .then( function(data){
  allData = data;
  })
  .catch(function(error){
  //handle error
  });
  function printData(){
  console.log (allData);
  }
  printData();