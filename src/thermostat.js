var Thermostat = function(temperature = 20, mintemp = 10){
  this.temperature = temperature;
  this.mintemp = mintemp;
  this.up = function (number){
    this.temperature += number;
  };
  this.down = function (number){
    if (this.temperature - number < 10) {
      throw 'cannot decrease temperature lower than min';
    } else {
      this.temperature -= number;
    };
  };
};

// Thermostat.prototype.up = function(degrees) {
//   this.temperature += number;
// };
