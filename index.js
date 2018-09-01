
function lowerCaseDrivers(drivers){

    return drivers.map((driver)=>driver.toLowerCase())
} 

function nameToAttributes(drivers){
  
  return drivers.map((driver)=>{
    const driverFirst=(driver.split(" "))[0];
    const driverLast = (driver.split(" "))[1];
    
    fetch('api.openweathermap.org/data/2.5/weather?q=' +value)
    .then(response => response.json)
    .then(responseJSON) =>console.log(responseJSON)
    
}
