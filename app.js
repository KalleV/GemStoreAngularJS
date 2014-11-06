// create a new module
// 'store' is the application name
// the '[ ]', contains dependencies
(function(){  // wraps app into a closure (a lexical scope)
  var app = angular.module('gemStore', []);
  
  app.controller('StoreController', function(){
    this.products = gems;
  });
  
  var gems = [
    {
      name: 'Dodecahedron',
      price: 5.95 * 3,
      description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems',
      images: [
          'images/gem-01.gif',
          'images/gem-01.gif',
          'images/gem-01.gif'
      ],
      canPurchase: true,
      soldOut: false  // Hide the gem if the file is sold out
    },
    {
      name: "Pentagonal gem",
      price: 5.95,
      description: ". . .",
      images: [
        'images/gem-02.gif',
        'images/gem-02.gif',
        'images/gem-02.gif'
      ],
      canPurchase: false,
      soldOut: false
    }
  ];

  console.log(gems);

})();