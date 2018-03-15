// Code your solution here:
function driversWithRevenueOver(drivers, revenueAmount){
  drivers.filter(function(driver){
    return driver.revenue >= revenueAmount
  })
}
