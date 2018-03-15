// Code your solution here:
function driversWithRevenueOver(array, revenue){
  array.filter(function(driver) {
    return driver.revenue > revenue
  });
}
