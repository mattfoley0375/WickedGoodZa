//Business Logic Top
const prices = {
  personal: 10,
  regular: 16,
  party: 25,
  Pepperoni: 1,
  Onion: 1, 
  Peppers: 1,
  Chicken: 2,
  Sausage: 2, 
  Brisket: 3
}

function Za(size, sauce, toppings) {
  this.size = size;
  this.sauce = sauce;
  this.toppings = toppings;
}

Za.prototype.calculatePrice = function() {
  let price = 0;
  price += prices[this.size.toLowerCase()];
  this.toppings.forEach(function(topping) {
    price += prices[topping] || 0;
  });
  return price;
}

Za.prototype.getSummary = function() {
  let summary = ""
  summary += this.size + " Pizza with "
  summary += this.sauce +  ", "
  summary += this.toppings.join(", ")
    return summary
}

//User Logic Bottom

$(document).ready(function() {
  $("form#sizeOptions").submit(function(event) {
    event.preventDefault();

    const size = $("input:radio[name=size]:checked").val();
    const sauce = $("input:radio[name=sauce]:checked").val();
    const toppings = $("input:checkbox[name=topping]:checked").map(function(){
      return $(this).val();
    }).get();

    const za = new Za(size, sauce, toppings)
    const price = za.calculatePrice()

    $("#cost").text("$"+ price);
    $("#summary").text(za.getSummary());
    $("#OrderTotal").show(); 
    
  });
});
