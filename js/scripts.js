//Business Logic Top
function Za() {
  this.size = "";
  this.sauce = 
  this.topping =
  this.CartTotal = 
}

Za.prototype.ZaSize = function(size) {
  this.size += size;
}

Za.prototype.ZaToppings = function(toppings) 

Za.prototype.total = function () {
  if (this.size === "Party Pizza") { 
    this.cartTotal += 25;
  } else if (this.size === "Regular Pizza") {
    this.cartTotal += 16;
  } else if (this.size === "Personal Pizza") {
    this.cartTotal += 10;
  }

//User Logic Bottom

$(document).ready(function() {
  $("form#orderForm").submit(function(event) {
    event.preventDefault();
    let ZaOrder = new Za();


    let OrderSize = $("input:radio[name=size]:checked").val();
    ZaOrder.ZaSize(OrderSize); 
fff wefwef