
function lowerCaseDrivers(drivers){

    return drivers.map((driver)=>driver.toLowerCase())
} 

function nameToAttributes(drivers){
  
  return drivers.map((driver)=>{
    const driverFirst=(driver.split(" "))[0];
    const driverLast = (driver.split(" "))[1];
    let obj = {
      firstName: driverFirst,
      lastName: driverlast
    }
    return obj
  })
}
