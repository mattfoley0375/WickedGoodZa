//Business Logic Top
function Za() {
  this.size = "";
  this.sauce = 
  this.topping =
}

Za.prototype.ZaSize = function(size) {
  this.size += size;
}


//User Logic Bottom

$(document).ready(function() {
  $("form#orderForm").submit(function(event) {
    event.preventDefault();
    let ZaOrder = new Za();


    let OrderSize = $("input:radio[name=size]:checked").val();
    ZaOrder.ZaSize(OrderSize); 
