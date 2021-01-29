//Business Logic Top
function Za() {
  this.size = "";
  this.sauce = []
  this.ZaToppings = 0;
  this.cartTotal = 0;
}

Za.prototype.ZaSize = function(size) {
  this.size += size;
}

Za.prototype.ZaToppings = function(toppings) {
  this.toppings.push(toppings);
}

Za.prototype.ToppingsTotal = function() {
  this.ZaToppings += this.toppings;
}


Za.prototype.total = function () {
  if (this.size === "Party Pizza") { 
    this.cartTotal += 25;
  } else if (this.size === "Regular Pizza") {
    this.cartTotal += 16;
  } else if (this.size === "Personal Pizza") {
    this.cartTotal += 10;
  }


  if (this.sauce=== "Red") { 
    this.cartTotal += 0;
  } else if (this.sauce === "Garlic") {
    this.cartTotal += 0;
  } else if (this.size === "BBQ") {
    this.cartTotal += 0;
  }

  if (this.ZaToppings === "none") { 
    this.cartTotal += 0;
  } else if (this.ZaToppings === "pepperoni") {
    this.cartTotal += 1;
  } else if (this.ZaToppings === "onion") {
    this.cartTotal += 1;
  } else if (this.ZaToppings === "peppers") {
    this.cartTotal += 1;
  } else if (this.ZaToppings === "chicken") {
    this.cartTotal += 2;
  } else if (this.ZaToppings === "sausage") {
    this.cartTotal += 2;
  } else if (this.ZaToppings === "brisket") {
    this.cartTotal += 3;
  } else {
    this.cartTotal += 0;
  }
return this.cartTotal
}

//User Logic Bottom

$(document).ready(function() {
  $("form#sizeOptions").submit(function(event) {
    event.preventDefault();
    let ZaOrder = new Za();

    let OrderSize = $("input:radio[name=size]:checked").val();
    ZaOrder.ZaSize(OrderSize); 

    $("input:checkbox[name=topping]:checked").each(function() { 
      let ArrayToppings = $(this).val();
      debugger
      ZaOrder.ZaToppings(ArrayToppings); 
    });
    ZaOrder.addToppingsQuantity(); 
    $("#cost").text("$" + ZaOrder.total()); 
    $("#size").text(ZaOrder.size);
    $("#selectedToppings").text(ZaOrder.toppings.join(", "));
    $("#OrderTotal").show(); 
  });
});
