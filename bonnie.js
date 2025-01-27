exports.meterConverter = {
meterToKilometer:function metersToKilometers(meters) {
    return meters / 1000;
  },
  
  metersToMiles:function metersToMiles(meters) {
    return meters * 0.000621371;
  },
  
  metersToCentimeters:function metersToCentimeters(meters) {
    return meters * 100;
  }
};