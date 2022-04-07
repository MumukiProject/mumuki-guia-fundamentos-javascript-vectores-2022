describe("cobrar", function() {
  it("deberia poder cobrar un honorario", function() {
    cobrar([2000])
    assert.equal(saldoEnCuenta, 3000)
  });
  
  it("deberia poder cobrar dos honorarios", function() {
    cobrar([500, 800])
    assert.equal(saldoEnCuenta, 2300)
  });
  
  it("deberia poder cobrar tres honorarios", function() {
    cobrar([300, 2000, 400])
    assert.equal(saldoEnCuenta, 3700)
  });
})