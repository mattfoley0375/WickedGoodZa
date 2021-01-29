//Business Logic Top
function pizza() {
  this.size
  this.sauce
  this.topping
}

pizza.prototype.pieSize = function(size) {

}


//User Logic Bottom

// User Interface Logic //

$(document).ready(function() {
  $("form#orderForm").submit(function(event) {
    event.preventDefault();


    let pieSize = $("input:radio[name=size]:checked").val();swfrwrf