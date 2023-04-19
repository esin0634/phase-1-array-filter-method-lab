// Code your solution here


function findMatching (drivers, query){
   return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase()
   )
}

function fuzzyMatch(drivers,queryArray){
    return drivers.filter(driver => queryArray.includes(driver[0]))
}

function matchName(drivers, query){
    return drivers.filter(driver => driver.name === query)
}