// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(driver) {
    return driver.revenue > revenue
  });
}

function driverNamesWithRevenueOver(drivers,revenue){
  const newCollection = [];
  return drivers.filter(function(driver) {
    return driver.revenue > revenue
    newCollection.push(driver.name)
  });
}
