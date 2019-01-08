const Park = function (name, ticketPrice, dinoList = []) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinoList = dinoList;
}

module.exports = Park;
