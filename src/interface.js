


$(document).ready(function() {
  var thermo = new Thermostat;

  function updateTemperature() {
    $('#temperature').text(thermo.temperature);
    $('#temperature').attr('class', thermo.energyUsage());
  };

  function updatePowerMode() {
    $('#power-saving-status').text(thermo.powerMode);
  };


  updateTemperature();

  $('#temperature-up').on('click', function() { // event listener
    thermo.up(); // update model
    updateTemperature(); // update view
  });

  $('#temperature-down').on('click', function() { // event listener
    thermo.down(); // update model
    updateTemperature(); // update view
  });

  $('#temperature-reset').on('click', function() { // event listener
    thermo.resetTemp(); // update model
    updateTemperature(); // update view
  });

  updatePowerMode();

  $('#powersaving-on').on('click', function() { // event listener
    thermo.powerSaveOn(); // update model
    updatePowerMode(); // update view
  });

  $('#powersaving-off').on('click', function() { // event listener
    thermo.powerSaveOff(); // update model
    updatePowerMode();// update view
  });

  // $(":button").css("background-color", "green");





});
