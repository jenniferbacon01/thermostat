describe('Thermostat', function() {


  beforeEach(function() {
    thermostat = new Thermostat();
  });


  it('starts at 20 degrees', function() {
    expect(thermostat.temperature).toBe(20)
  });

  it('temperature can be increased', function() {
    thermostat.up(1);
    expect(thermostat.temperature).toBe(21)
  });

  it('temperature can be decreased', function() {
    thermostat.down(1);
    expect(thermostat.temperature).toBe(19)
  });

  it('temperature cant be decreased lower than 10', function() {
    expect(function() {thermostat.down(11)}).toThrow('cannot decrease temperature lower than min');
  });

  it('min default temperature', function() {
    expect(thermostat.minTemp).toBe(10)
  });

  it('max temp is 25 when power saving mode on', function() {
    expect(thermostat.maxTemp).toBe(25)
  });

  it('max temp is 32 when power saving mode off', function() {
    thermostat.powerSaveOff();
    expect(thermostat.maxTemp).toBe(32)
  });

  it('power saving mode on by defualt', function() {
    expect(thermostat.powerDefaultMode).toBe('Power saving mode on')
  }); 

  it('can turn power save back on', function() {
    thermostat.powerSaveOff();
    thermostat.powerSaveOn();
    expect(thermostat.maxTemp).toBe(25)
  }); 

});
