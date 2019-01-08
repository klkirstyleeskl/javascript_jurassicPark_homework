const Park = function (name, ticketPrice, dinoList) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinoList = dinoList = [ ];
}

Park.prototype.addDino = function (dinosaur) {
  this.dinoList.push(dinosaur);
};

Park.prototype.removeDino = function (dinosaur) {
  this.dinoList.pop(dinosaur);
};

module.exports = Park;
