// create a new module
// 'store' is the application name
// the '[ ]', contains dependencies
(function(){  // wraps app into a closure (a lexical scope)
  var app = angular.module('gemStore', [ ]);
  
  app.controller('StoreController', function(){
    this.products = gems;
  });
  
  var gems = [
    {
    name: 'Dodecahedron',
    price: 2.95,
    description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems',
    canPurchase: true,
    soldOut: false,  // Hide the gem if the file is sold out
    },
    {
      name: "Pentagonal gem",
      price: 5.95,
      description: ". . .",
      canPurchase: false,
    }
  ];
})();