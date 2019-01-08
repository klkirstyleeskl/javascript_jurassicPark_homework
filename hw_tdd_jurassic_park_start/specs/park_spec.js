const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  beforeEach(function () {
    park = new Park('DinoLand', 5.99, [])
  });

  it('should have a name', function (){
    const actual = park.name;
    assert.strictEqual(actual, 'DinoLand');
  });


  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
      assert.strictEqual(actual, 5.99);
  });


  it('should have a collection of dinosaurs', function(){
    const actual = park.dinoList;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDino('diplodocus');
    const expected = ['diplodocus'];
    assert.deepStrictEqual(park.dinoList, expected)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDino('diplodocus');
    const expected = [];
    assert.deepStrictEqual(park.dinoList, expected)
  });


  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
