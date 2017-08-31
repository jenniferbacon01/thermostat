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
    expect(thermostat.mintemp).toBe(10)
  });

});
