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
  console.log(allData);
}