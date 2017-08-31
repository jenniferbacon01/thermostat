describe('Thermostat', function() {


  beforeEach(function() {
    thermostat = new Thermostat();
  });


  it('starts at 20 degrees', function() {
    expect(thermostat.startTemp()).toBe('20 degrees')
  });

});