// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  drivers.filter(function(driver){
    return driver.revenue >= revenue
  });
}
